Hãy tiếp tục CHỈNH SỬA TRỰC TIẾP project WellRise hiện tại.

ĐÂY LÀ LẦN CLEANUP FRONTEND CUỐI CÙNG TRƯỚC KHI CHUYỂN SANG BACKEND.

==================================================
0. NGUYÊN TẮC BẮT BUỘC
==================================================

KHÔNG:
- redesign toàn bộ app
- thay đổi visual identity
- thay đổi màu sắc / typography / spacing nếu không cần
- thêm module sản phẩm mới
- thêm Login/Register
- thêm backend
- thêm Supabase
- thêm API
- thay đổi mock data catalog lớn hiện tại nếu không cần
- phá các flow đang hoạt động

GIỮ NGUYÊN:
- viewport mobile hiện tại
- bottom navigation
- onboarding
- Today
- Explore
- Challenge
- Group
- Profile
- Search
- Article
- Evidence
- Habit flow
- các mock data catalog hiện có

MỤC TIÊU DUY NHẤT:

1. Chuẩn hóa user state thành ONE SOURCE OF TRUTH.
2. Xóa các state/hard-code trùng lặp giữa nhiều màn.
3. Đảm bảo thao tác ở một màn được phản ánh đúng ở màn khác.
4. Làm cấu trúc frontend đủ sạch để backend sau này thay local state bằng API mà không phải sửa lại UI architecture.

==================================================
1. TẠO ONE SOURCE OF TRUTH CHO USER STATE
==================================================

Project hiện đã có:

src/data/mockUserState.ts

với các trường kiểu:

joinedGroupIds
likedPostIds
savedPostIds
savedArticleIds
followedExpertIds
readNotificationIds
challengeProgress

KHÔNG tạo thêm một hệ mock state khác song song.

Hãy dùng MOCK_USER_STATE làm INITIAL DATA.

Sau đó tạo runtime user state dùng chung ở cấp App hoặc một reusable hook/store nhẹ.

Ưu tiên cách đơn giản:

App.tsx
→ giữ userState
→ pass data/callback xuống screen

hoặc tạo:

src/state/userState.ts
src/hooks/useUserState.ts

nếu thấy hợp lý.

KHÔNG cần Redux/Zustand.

User state phải được persist bằng localStorage.

Ví dụ key:

wr_user_state_v1

Khởi tạo:

localStorage có data
→ dùng data đó

nếu chưa có:
→ dùng MOCK_USER_STATE

==================================================
2. USER STATE MODEL
==================================================

Chuẩn hóa model gần như sau:

interface UserState {
  joinedGroupIds: string[];

  likedPostIds: number[];

  savedPostIds: number[];

  savedArticleIds: string[];

  followedExpertIds: string[];

  readNotificationIds: string[];

  challengeProgress: ChallengeProgress[];

  privacySettings: {
    publicProfile: boolean;
    showActivity: boolean;
    groupInvite: boolean;
    directMessage: boolean;
  };
}

ChallengeProgress:

interface ChallengeProgress {
  challengeId: string;

  status:
    | "in-progress"
    | "completed"
    | "stopped";

  startDate: string;

  daysCompleted: number;

  completedDate?: string;

  stoppedDate?: string;
}

Có thể thêm field nếu thực sự cần cho UI hiện tại.

KHÔNG thêm field không sử dụng.

==================================================
3. GROUP MEMBERSHIP — GLOBALIZE
==================================================

Hiện Group data có thể vẫn chứa field:

joined

hoặc một số screen tự giữ joined state riêng.

Hãy bỏ việc dùng:

group.joined

làm source of truth.

Source of truth duy nhất:

userState.joinedGroupIds

Ví dụ:

const joined =
  userState.joinedGroupIds.includes(group.id);

Khi user nhấn:

Tham gia

thì:

joinedGroupIds += groupId

Khi user nhấn:

Rời nhóm

thì:

joinedGroupIds -= groupId

Sau đó persist.

Tất cả các màn sau phải phản ánh cùng một state:

GroupScreen
AllGroupsScreen
GroupDetailScreen

Ví dụ:

All Groups
→ user join "Morning Routine"

quay lại Group screen
→ nhóm đó phải xuất hiện trong nhóm đã tham gia.

Không được reload app rồi mất.

==================================================
4. XÓA ALL_GROUPS HARDCODE RIÊNG
==================================================

AllGroupsScreen hiện không được duy trì một mảng ALL_GROUPS riêng nếu data đã tồn tại trong:

src/data/groupData.ts

Hãy import:

GROUPS

từ groupData.

Sau đó:

joined groups
recommended groups
search result

đều derive từ GROUPS + userState.joinedGroupIds.

Ví dụ:

const joinedGroups =
  GROUPS.filter(g =>
    joinedGroupIds.includes(g.id)
  );

const otherGroups =
  GROUPS.filter(g =>
    !joinedGroupIds.includes(g.id)
  );

Không duplicate group record.

==================================================
5. POST LIKE — GLOBALIZE
==================================================

Hiện một số màn đang dùng:

const [liked, setLiked] = useState(false)

Hãy bỏ local liked state nếu post like là user data.

Source of truth:

userState.likedPostIds

Mọi nơi:

GroupDetailScreen
PostDetailScreen
SavedPostsScreen
các feed có post

phải dùng cùng source.

Ví dụ:

const liked =
  likedPostIds.includes(post.id);

Khi like:

likedPostIds += post.id

Khi unlike:

likedPostIds -= post.id

Persist vào localStorage.

==================================================
6. LIKE COUNT
==================================================

Không mutate mock catalog.

Base post:

post.likes

User-specific like:

likedPostIds

Hiển thị count hợp lý.

Ví dụ nếu mock post ban đầu chưa được user like:

displayLikes =
  post.likes + (liked ? 1 : 0)

Nếu cấu trúc hiện tại đã tính user like trong base count thì chọn một cách duy nhất và áp dụng nhất quán.

Quan trọng:
KHÔNG để:

feed = 24 likes
post detail = 23 likes

cho cùng một post.

==================================================
7. SAVED POSTS — GLOBALIZE
==================================================

SavedPostsScreen hiện không được có:

const SAVED = [...]

hard-code riêng.

Source:

GROUPS
→ flatten posts
→ filter theo userState.savedPostIds

Ví dụ:

const allPosts =
  GROUPS.flatMap(...)

const savedPosts =
  allPosts.filter(post =>
    savedPostIds.includes(post.id)
  );

Khi unsave trong SavedPostsScreen:

savedPostIds -= post.id

Item phải biến mất khỏi danh sách.

Nếu mở lại post detail:
→ trạng thái save phải đúng.

Không copy post data sang SavedPostsScreen.

==================================================
8. SAVED ARTICLES — GLOBALIZE
==================================================

ArticleScreen hiện không dùng:

const [saved, setSaved] = useState(false)

làm source of truth nữa.

Source:

userState.savedArticleIds

Article:

const saved =
  savedArticleIds.includes(article.id);

Save:

savedArticleIds += article.id

Unsave:

savedArticleIds -= article.id

Persist.

TopicDetailScreen cũng không giữ object:

saved: Record<string, boolean>

riêng.

Nó cũng phải đọc:

savedArticleIds.

Do đó:

ArticleScreen
TopicDetailScreen
Explore
Saved content

đều nhất quán.

==================================================
9. PROFILE > SAVED CONTENT
==================================================

Giữ UI hiện tại.

Nếu Saved screen chỉ hiển thị posts:
giữ behavior đó nếu đây là scope hiện tại.

Nếu hiện UI đã có article saved:
derive từ savedArticleIds.

KHÔNG redesign.

Quan trọng nhất:

saved item phải tham chiếu record thật trong:

GROUPS
ARTICLES

Không tồn tại dữ liệu copy riêng.

==================================================
10. CHALLENGE CATALOG — ONE SOURCE
==================================================

Project đã có:

src/data/challenges.ts
→ CHALLENGES

Tất cả screen challenge phải dùng data này.

Xóa / ngừng sử dụng các mảng challenge hard-code riêng trong:

ChallengeScreen
AllChallengesScreen
ChallengeDetailScreen
ChallengeHistoryScreen

nếu chúng trùng catalog.

Không tạo:

const CHALLENGES = [...]
const EXPLORE_CHALLENGES = [...]
const CHALLENGE_DATA = {...}

ở từng screen.

Tất cả catalog info phải lấy từ:

src/data/challenges.ts

Ví dụ:

id
title
description
duration
category
difficulty
icon
color
accent
tags
dailyTask
reward
participants

==================================================
11. CHALLENGE USER STATE — GLOBALIZE
==================================================

Catalog challenge và user progress là HAI THỨ KHÁC NHAU.

Catalog:

CHALLENGES

User state:

userState.challengeProgress

Không lưu:

joined
progress
completed

trực tiếp trong catalog.

Ví dụ:

CHALLENGES:
{
  id: "sleep-7",
  title: "...",
  duration: 7
}

USER STATE:
{
  challengeId: "sleep-7",
  status: "in-progress",
  startDate: "2026-09-12",
  daysCompleted: 3
}

==================================================
12. JOIN CHALLENGE
==================================================

ChallengeDetailScreen không được dùng:

const [joined, setJoined] = useState(false)

làm source of truth.

Khi user nhấn:

"Tham gia thử thách"

thêm:

{
  challengeId,
  status: "in-progress",
  startDate: today,
  daysCompleted: 0
}

vào:

userState.challengeProgress

Nếu đã tồn tại:
không duplicate.

Khi vào lại ChallengeDetail:
trạng thái phải vẫn đúng.

Reload app:
trạng thái vẫn đúng.

==================================================
13. CHALLENGE PROGRESS
==================================================

Các challenge đang active phải derive từ:

challengeProgress.status === "in-progress"

Completed:

status === "completed"

Stopped:

status === "stopped"

Progress UI:

daysCompleted / challenge.duration

Ví dụ:

3 / 7

progress:

3 / 7

Không hard-code:

0.43

nếu có thể derive.

==================================================
14. CHALLENGE HISTORY
==================================================

XÓA các mảng kiểu:

ACTIVE = [...]
DONE = [...]

hard-code trong ChallengeHistoryScreen.

ChallengeHistory phải derive từ:

CHALLENGES
+
userState.challengeProgress

Pseudo:

challengeProgress.map(progress => {
  const challenge =
    CHALLENGES.find(
      c => c.id === progress.challengeId
    );

  return {
    ...challenge,
    ...progress
  };
});

Sau đó chia:

in-progress
completed
stopped

Nếu user tham gia challenge ở ChallengeDetail:

Profile
→ Challenge History

phải xuất hiện ngay.

Nếu challenge completed:
→ tự chuyển sang completed history.

==================================================
15. CHALLENGE SCREEN
==================================================

ChallengeScreen phải sử dụng:

CHALLENGES
+
challengeProgress

Không giữ challenge catalog riêng.

Các trạng thái:

none
active
completed
stopped

phải derive từ user state.

Không hard-code state theo ID.

==================================================
16. PRIVACY SETTINGS
==================================================

PrivacyScreen hiện tại không được chỉ giữ:

useState(...)

trong component.

Chuyển privacy settings vào:

userState.privacySettings

Ví dụ:

{
  publicProfile: true,
  showActivity: false,
  groupInvite: true,
  directMessage: false
}

Toggle:
→ update global userState
→ persist

Đóng screen.
Mở lại.
State phải còn.

Reload app.
State phải còn.

==================================================
17. NOTIFICATION READ STATE
==================================================

Project đã có:

userState.readNotificationIds

Tiếp tục dùng source đó.

Không tạo thêm read state khác nếu không cần.

Nếu Notification object có:

read

thì coi nó là mock initial/default state.

Runtime user-specific read state phải được normalize nhất quán.

Các behavior phải hoạt động:

mark one read nếu hiện có
mark all read
badge unread count

Reload app vẫn đúng.

==================================================
18. PROFILE COUNTERS / LABEL
==================================================

Không hard-code các text như:

"3 bài viết"
"1 đã hoàn thành"

nếu có thể derive.

Profile menu:

Bài đã lưu
→ derive savedPostIds.length
hoặc tổng saved content nếu UI hiện dùng tổng.

Lịch sử thử thách
→ derive số completed challenges.

Ví dụ:

`${savedPostIds.length} bài viết`

`${completedChallenges.length} đã hoàn thành`

Không hard-code số.

==================================================
19. GROUP MEMBER COUNT
==================================================

Không cần backend realtime ở bước này.

Catalog vẫn có:

memberCount

Khi current user join/leave:

có thể display:

base memberCount
+
runtime delta

nếu dễ thực hiện.

Nếu điều này làm code phức tạp:
giữ base memberCount.

Ưu tiên STATE CONSISTENCY hơn số member realtime.

==================================================
20. ARTICLE / TOPIC SAVED CONSISTENCY
==================================================

Kiểm tra flow:

Topic Detail
→ save article A

Article detail A
→ icon phải ở trạng thái saved

Unsave ở Article Detail

quay lại Topic Detail
→ phải unsaved.

Không dùng 2 state khác nhau.

==================================================
21. POST LIKE CONSISTENCY
==================================================

Kiểm tra:

Group detail
→ like post 203

Post detail
→ post 203 phải liked.

Unlike ở Post Detail.

Back về group
→ phải unliked.

Reload:
→ state vẫn đúng.

==================================================
22. GROUP MEMBERSHIP CONSISTENCY
==================================================

Kiểm tra:

All Groups
→ join group X

Group main
→ X nằm trong joined groups.

Group detail
→ trạng thái joined đúng.

Rời group.

Back:
→ group không còn trong joined list.

Reload:
→ đúng.

==================================================
23. CHALLENGE CONSISTENCY
==================================================

Kiểm tra:

All Challenges
→ mở Challenge X

Join

Back Challenge screen
→ X nằm trong active.

Profile
→ Challenge History
→ X nằm trong in-progress.

Reload
→ vẫn active.

Không có bất kỳ screen nào coi challenge đó là chưa join.

==================================================
24. REMOVE / DEPRECATE LEGACY LOGIN + PURPOSE
==================================================

Main onboarding flow hiện tại là:

Welcome
→ Goals
→ Pace
→ Reminder
→ Suggested Habits
→ Today

KHÔNG thêm Login/Register.

Screen22Login và Screen23Purpose hiện là legacy.

Nếu không còn được main flow sử dụng:

- xóa import khỏi App.tsx
- xóa khỏi Screen union/router
- xóa callback/navigation không còn cần

Có thể giữ file source nếu muốn tham khảo,
nhưng production flow không được phụ thuộc vào chúng.

Không đưa Purpose trở lại onboarding.

==================================================
25. KHÔNG XÓA MOCK CATALOG
==================================================

Giữ:

habits.ts
challenges.ts
groupData.ts
exploreData.ts
notifications.ts
users.ts

Catalog data vẫn là static mock data.

Chỉ user-specific state mới nằm trong userState.

Phân biệt rõ:

STATIC CATALOG DATA
vs
USER-SPECIFIC STATE

Ví dụ:

STATIC:
GROUPS
ARTICLES
CHALLENGES
HABIT_CATALOG

USER:
joinedGroupIds
likedPostIds
savedPostIds
savedArticleIds
challengeProgress
privacySettings

Đây là kiến trúc bắt buộc.

==================================================
26. KHÔNG MUTATE STATIC DATA
==================================================

Không làm:

GROUPS[index].joined = true

Không làm:

POST.likes++

Không làm:

ARTICLE.saved = true

Static catalog phải immutable.

User interaction cập nhật userState.

UI derive trạng thái từ:

catalog + userState.

==================================================
27. LOCALSTORAGE
==================================================

Persist toàn bộ user state dưới một key rõ ràng:

wr_user_state_v1

Có helper an toàn:

loadUserState()
saveUserState()

Nếu localStorage corrupt:
fallback MOCK_USER_STATE.

Không crash app.

==================================================
28. RESET DEMO
==================================================

Settings hiện có reset demo.

Khi reset:

xóa:

wr_user_state_v1

và các wr_* runtime keys liên quan nếu cần.

Sau đó restore:

MOCK_USER_STATE

Onboarding reset vẫn giữ behavior hiện tại.

Không phá Reset Demo.

==================================================
29. BACKEND-READY DATA SHAPE
==================================================

Sau cleanup, frontend phải có conceptual mapping rõ ràng:

STATIC CATALOG

CHALLENGES
GROUPS
POSTS
ARTICLES
HABIT_CATALOG


USER DATA

userState
├── joinedGroupIds
├── likedPostIds
├── savedPostIds
├── savedArticleIds
├── followedExpertIds
├── readNotificationIds
├── challengeProgress
└── privacySettings

Sau này backend chỉ cần thay:

localStorage
→ API / database

mà không phải redesign screen.

==================================================
30. KHÔNG LÀM BACKEND TRONG LẦN NÀY
==================================================

KHÔNG:
- Supabase
- Firebase
- REST API
- server
- database
- authentication
- WebSocket
- push notification thật

Đây chỉ là bước final frontend architecture cleanup.

==================================================
31. TYPESCRIPT TYPES
==================================================

Không dùng any nếu tránh được.

Tạo / dùng interface rõ ràng.

Nếu cần, tách types:

src/types/userState.ts
src/types/challenge.ts

Nhưng không refactor quá mức.

Ưu tiên code dễ đọc.

==================================================
32. GIỮ NGUYÊN UI
==================================================

Không thay đổi layout nếu không cần để sửa interaction.

Đặc biệt giữ nguyên:

Today UI
Explore UI
Challenge UI
Group UI
Profile UI
Onboarding UI

Không đổi copywriting hoặc thiết kế chỉ vì đang refactor state.

==================================================
33. ACCEPTANCE TEST — PHẢI KIỂM TRA
==================================================

Sau khi sửa xong, tự kiểm tra toàn bộ các case:

CASE 1 — GROUP
All Groups
→ Join
→ Group screen
→ group xuất hiện
→ reload
→ vẫn joined

CASE 2 — POST LIKE
Group feed
→ Like
→ Post detail
→ liked
→ Unlike
→ back
→ unliked

CASE 3 — SAVED POST
Save post
→ Profile
→ Saved Posts
→ xuất hiện

Unsave
→ biến mất

CASE 4 — SAVED ARTICLE
Topic
→ save article
→ Article detail
→ vẫn saved

CASE 5 — CHALLENGE
Challenge detail
→ Join
→ Challenge main
→ active
→ Profile
→ Challenge History
→ active
→ reload
→ vẫn active

CASE 6 — PRIVACY
Privacy
→ toggle setting
→ back
→ mở lại
→ giữ đúng state

CASE 7 — NOTIFICATION
Mark read
→ badge giảm
→ reload
→ vẫn read

CASE 8 — RESET
Settings
→ Reset Demo
→ user state trở về MOCK_USER_STATE

==================================================
34. DATA CONSISTENCY CHECK
==================================================

Kiểm tra:

- không duplicate group ID
- không duplicate post ID
- không duplicate challenge ID
- savedPostIds đều trỏ đến post tồn tại
- savedArticleIds đều trỏ đến article tồn tại
- likedPostIds đều trỏ đến post tồn tại
- joinedGroupIds đều trỏ đến group tồn tại
- challengeProgress.challengeId đều trỏ đến challenge tồn tại

Nếu mockUserState có ID cũ không tồn tại:
sửa ID để khớp catalog hiện tại.

==================================================
35. BUILD CHECK
==================================================

Sau khi hoàn thành:

- kiểm tra import
- kiểm tra TypeScript
- kiểm tra unused import quan trọng
- kiểm tra missing props
- kiểm tra screen routing
- không để duplicate component definitions
- không để stale hard-coded arrays còn được sử dụng

Đảm bảo:

npm run build

có thể chạy thành công nếu môi trường Figma Make hỗ trợ.

==================================================
36. SAU KHI HOÀN THÀNH — BÁO CÁO
==================================================

Cuối cùng hãy trả lại một báo cáo ngắn:

1. File nào đã sửa.
2. File nào đã tạo.
3. Những hard-coded state nào đã loại bỏ.
4. Group membership hiện được quản lý ở đâu.
5. Like/save hiện được quản lý ở đâu.
6. Challenge progress hiện được quản lý ở đâu.
7. Challenge History derive từ đâu.
8. Privacy persist bằng cách nào.
9. Legacy Login/Purpose đã được xử lý ra sao.
10. Có lỗi build/TypeScript nào còn lại hay không.

==================================================
MỤC TIÊU CUỐI CÙNG
==================================================

Sau lần chỉnh sửa này, hãy coi frontend WellRise là FEATURE-COMPLETE CHO MVP.

Không thêm tính năng mới.

Kiến trúc cần đạt:

STATIC MOCK CATALOG
        +
GLOBAL USER STATE
        ↓
       UI

để bước tiếp theo tôi có thể triển khai backend và thay:

GLOBAL USER STATE / localStorage
        ↓
DATABASE + API

mà không phải thiết kế lại frontend.