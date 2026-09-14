import type { UserState } from "../types/userState";

/* Re-export ChallengeProgress type for backwards compat */
export type { ChallengeProgress } from "../types/userState";

/* Central initial user state — loaded when no localStorage data exists */
export const MOCK_USER_STATE: UserState = {
  joinedGroupIds: ["active-daily", "better-sleep", "start-gentle", "morning-routine", "daily-reading"],

  /* Post IDs aligned with globally-unique IDs in groupData.ts */
  likedPostIds: [101, 203, 305, 402, 503, 603, 701, 803, 903, 1004, 1103],
  savedPostIds: [203, 503, 903, 1103],

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
    { challengeId: "sleep-7",     status: "completed",   startDate: "2026-08-20", daysCompleted: 7, completedDate: "2026-08-27" },
    { challengeId: "gratitude-7", status: "completed",   startDate: "2026-08-28", daysCompleted: 7, completedDate: "2026-09-04" },
    { challengeId: "walk-7",      status: "in-progress", startDate: "2026-09-10", daysCompleted: 4 },
    { challengeId: "meditate-5",  status: "in-progress", startDate: "2026-09-12", daysCompleted: 2 },
    { challengeId: "noscreen-14", status: "stopped",     startDate: "2026-08-01", daysCompleted: 5, stoppedDate: "2026-08-06" },
    { challengeId: "read-3",      status: "completed",   startDate: "2026-09-01", daysCompleted: 3, completedDate: "2026-09-04" },
  ],

  privacySettings: {
    publicProfile: true,
    showActivity: false,
    groupInvite: true,
    directMessage: false,
  },
};
