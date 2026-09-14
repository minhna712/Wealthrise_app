import { createContext, useContext, useState, type ReactNode } from "react";
import type { UserState, ChallengeProgress } from "../types/userState";
import { MOCK_USER_STATE } from "../data/mockUserState";

const LS_KEY = "wr_user_state_v1";

function loadUserState(): UserState {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) return JSON.parse(raw) as UserState;
  } catch { /* noop */ }
  return structuredClone(MOCK_USER_STATE);
}

function saveUserState(state: UserState) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch { /* noop */ }
}

function today(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}

interface UserStateContextValue {
  userState: UserState;
  joinGroup: (id: string) => void;
  leaveGroup: (id: string) => void;
  likePost: (id: number) => void;
  unlikePost: (id: number) => void;
  savePost: (id: number) => void;
  unsavePost: (id: number) => void;
  saveArticle: (id: string) => void;
  unsaveArticle: (id: string) => void;
  joinChallenge: (challengeId: string) => void;
  completeChallengeDay: (challengeId: string) => void;
  markChallengeCompleted: (challengeId: string) => void;
  stopChallenge: (challengeId: string) => void;
  markNotificationRead: (id: string) => void;
  markAllNotificationsRead: (ids: string[]) => void;
  togglePrivacy: (key: keyof UserState["privacySettings"]) => void;
  resetUserState: () => void;
}

const UserStateContext = createContext<UserStateContextValue | null>(null);

export function UserStateProvider({ children }: { children: ReactNode }) {
  const [userState, setUserState] = useState<UserState>(loadUserState);

  function update(fn: (prev: UserState) => UserState) {
    setUserState(prev => {
      const next = fn(prev);
      saveUserState(next);
      return next;
    });
  }

  const joinGroup = (id: string) =>
    update(s => s.joinedGroupIds.includes(id) ? s : { ...s, joinedGroupIds: [...s.joinedGroupIds, id] });

  const leaveGroup = (id: string) =>
    update(s => ({ ...s, joinedGroupIds: s.joinedGroupIds.filter(g => g !== id) }));

  const likePost = (id: number) =>
    update(s => s.likedPostIds.includes(id) ? s : { ...s, likedPostIds: [...s.likedPostIds, id] });

  const unlikePost = (id: number) =>
    update(s => ({ ...s, likedPostIds: s.likedPostIds.filter(p => p !== id) }));

  const savePost = (id: number) =>
    update(s => s.savedPostIds.includes(id) ? s : { ...s, savedPostIds: [...s.savedPostIds, id] });

  const unsavePost = (id: number) =>
    update(s => ({ ...s, savedPostIds: s.savedPostIds.filter(p => p !== id) }));

  const saveArticle = (id: string) =>
    update(s => s.savedArticleIds.includes(id) ? s : { ...s, savedArticleIds: [...s.savedArticleIds, id] });

  const unsaveArticle = (id: string) =>
    update(s => ({ ...s, savedArticleIds: s.savedArticleIds.filter(a => a !== id) }));

  const joinChallenge = (challengeId: string) =>
    update(s => {
      if (s.challengeProgress.some(p => p.challengeId === challengeId)) return s;
      return {
        ...s,
        challengeProgress: [
          ...s.challengeProgress,
          { challengeId, status: "in-progress", startDate: today(), daysCompleted: 0 },
        ],
      };
    });

  const completeChallengeDay = (challengeId: string) =>
    update(s => ({
      ...s,
      challengeProgress: s.challengeProgress.map(p =>
        p.challengeId === challengeId && p.status === "in-progress"
          ? { ...p, daysCompleted: p.daysCompleted + 1 }
          : p
      ),
    }));

  const markChallengeCompleted = (challengeId: string) =>
    update(s => ({
      ...s,
      challengeProgress: s.challengeProgress.map(p =>
        p.challengeId === challengeId
          ? { ...p, status: "completed", completedDate: today() }
          : p
      ),
    }));

  const stopChallenge = (challengeId: string) =>
    update(s => ({
      ...s,
      challengeProgress: s.challengeProgress.map(p =>
        p.challengeId === challengeId
          ? { ...p, status: "stopped", stoppedDate: today() }
          : p
      ),
    }));

  const markNotificationRead = (id: string) =>
    update(s => s.readNotificationIds.includes(id) ? s : { ...s, readNotificationIds: [...s.readNotificationIds, id] });

  const markAllNotificationsRead = (ids: string[]) =>
    update(s => {
      const merged = Array.from(new Set([...s.readNotificationIds, ...ids]));
      return { ...s, readNotificationIds: merged };
    });

  const togglePrivacy = (key: keyof UserState["privacySettings"]) =>
    update(s => ({
      ...s,
      privacySettings: { ...s.privacySettings, [key]: !s.privacySettings[key] },
    }));

  const resetUserState = () => {
    const fresh = structuredClone(MOCK_USER_STATE);
    saveUserState(fresh);
    setUserState(fresh);
  };

  return (
    <UserStateContext.Provider value={{
      userState, joinGroup, leaveGroup, likePost, unlikePost,
      savePost, unsavePost, saveArticle, unsaveArticle,
      joinChallenge, completeChallengeDay, markChallengeCompleted, stopChallenge,
      markNotificationRead, markAllNotificationsRead, togglePrivacy, resetUserState,
    }}>
      {children}
    </UserStateContext.Provider>
  );
}

export function useUserState(): UserStateContextValue {
  const ctx = useContext(UserStateContext);
  if (!ctx) throw new Error("useUserState must be used inside UserStateProvider");
  return ctx;
}
