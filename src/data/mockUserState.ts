/* Central mock user state — shared source of truth across all screens */
export interface ChallengeProgress {
  challengeId: string;
  status: "in-progress" | "completed" | "stopped";
  startDate: string; // YYYY-MM-DD
  daysCompleted: number;
}

export interface MockUserState {
  joinedGroupIds: string[];
  likedPostIds: number[];
  savedPostIds: number[];
  savedArticleIds: string[];
  followedExpertIds: string[];
  readNotificationIds: string[];
  challengeProgress: ChallengeProgress[];
}

export const MOCK_USER_STATE: MockUserState = {
  joinedGroupIds: ["active-daily", "better-sleep", "start-gentle", "mindful-breathing", "daily-reading"],

  likedPostIds: [101, 203, 305, 407, 511, 612, 715, 820, 903, 1004, 1103],

  savedPostIds: [203, 511, 820, 1103],

  savedArticleIds: [
    "art-sleep-01", "art-sleep-02",
    "art-nutrition-01", "art-nutrition-03",
    "art-movement-02",
    "art-mindset-01", "art-mindset-04",
    "art-growth-01",
  ],

  followedExpertIds: ["exp-01", "exp-03", "exp-05", "exp-07"],

  readNotificationIds: ["notif-01", "notif-02", "notif-03", "notif-04", "notif-05"],

  challengeProgress: [
    { challengeId:"sleep-7",      status:"completed",   startDate:"2026-08-20", daysCompleted:7  },
    { challengeId:"gratitude-7",  status:"completed",   startDate:"2026-08-28", daysCompleted:7  },
    { challengeId:"walk-7",       status:"in-progress", startDate:"2026-09-10", daysCompleted:4  },
    { challengeId:"meditate-5",   status:"in-progress", startDate:"2026-09-12", daysCompleted:2  },
    { challengeId:"noscreen-14",  status:"stopped",     startDate:"2026-08-01", daysCompleted:5  },
    { challengeId:"read-3",       status:"completed",   startDate:"2026-09-01", daysCompleted:3  },
  ],
};

export function isGroupJoined(groupId: string): boolean {
  return MOCK_USER_STATE.joinedGroupIds.includes(groupId);
}

export function isPostLiked(postId: number): boolean {
  return MOCK_USER_STATE.likedPostIds.includes(postId);
}

export function isPostSaved(postId: number): boolean {
  return MOCK_USER_STATE.savedPostIds.includes(postId);
}

export function isArticleSaved(articleId: string): boolean {
  return MOCK_USER_STATE.savedArticleIds.includes(articleId);
}

export function isNotificationRead(notifId: string): boolean {
  return MOCK_USER_STATE.readNotificationIds.includes(notifId);
}

export function getChallengeProgressById(challengeId: string): ChallengeProgress | undefined {
  return MOCK_USER_STATE.challengeProgress.find(p => p.challengeId === challengeId);
}
