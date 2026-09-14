export interface PrivacySettings {
  publicProfile: boolean;
  showActivity: boolean;
  groupInvite: boolean;
  directMessage: boolean;
}

export interface ChallengeProgress {
  challengeId: string;
  status: "in-progress" | "completed" | "stopped";
  startDate: string;
  daysCompleted: number;
  completedDate?: string;
  stoppedDate?: string;
}

export interface UserState {
  joinedGroupIds: string[];
  likedPostIds: number[];
  savedPostIds: number[];
  savedArticleIds: string[];
  followedExpertIds: string[];
  readNotificationIds: string[];
  challengeProgress: ChallengeProgress[];
  privacySettings: PrivacySettings;
}
