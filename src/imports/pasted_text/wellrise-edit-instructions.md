Hãy tiếp tục CHỈNH SỬA TRỰC TIẾP project WellRise hiện tại.

QUAN TRỌNG:
- KHÔNG redesign toàn bộ app.
- KHÔNG thay đổi visual identity hiện tại.
- KHÔNG thay đổi navigation hoặc các flow đang hoạt động tốt.
- Giữ nguyên viewport mobile 390 × 844.
- Giữ nguyên:
  + background kem/off-white
  + heading navy
  + coral/orange CTA
  + pastel green / lavender / peach / blue
  + card mềm, bo tròn
  + typography Nunito
- Ưu tiên sửa data source, model và logic hiện có.
- Không hard-code dữ liệu riêng biệt trong từng screen.
- Đây vẫn là frontend prototype/MVP, chưa cần backend.
- Mục tiêu lần này là làm mock data phong phú, đa dạng và có cảm giác như một app thật.

==================================================
1. MỤC TIÊU CHÍNH
==================================================

Mock data hiện tại còn ít.

Hãy mở rộng dữ liệu cho toàn bộ WellRise để:
- user ít gặp nội dung lặp lại;
- recommendation có nhiều lựa chọn;
- Search có nhiều kết quả;
- Group feed trông giống cộng đồng thật;
- Challenge có nhiều trạng thái;
- màn Today / Explore / Challenge / Group / Profile có cảm giác app đang được sử dụng thật.

KHÔNG hiển thị tất cả dữ liệu cùng lúc trên UI.

Data catalog có thể lớn nhưng từng màn chỉ lấy số lượng phù hợp thông qua:
- recommendation
- filter
- pagination / slice
- trạng thái người dùng.

==================================================
2. CHUẨN HÓA DATA SOURCE
==================================================

Không tiếp tục đặt mock data trực tiếp trong từng screen.

Tách data thành các file dùng chung, ví dụ:

src/data/
  goals.ts
  habits.ts
  challenges.ts
  groups.ts
  posts.ts
  topics.ts
  articles.ts
  experts.ts
  notifications.ts
  users.ts
  mockUserState.ts

Nếu project hiện có:
- exploreData.ts
- groupData.ts

thì có thể tiếp tục sử dụng hoặc refactor dần,
nhưng KHÔNG copy cùng một object sang nhiều screen.

Mọi screen phải lấy cùng một source of truth.

==================================================
3. HABIT CATALOG
==================================================

Hiện habit catalog còn ít.

Hãy tăng lên khoảng 50–60 habits.

Habits cần trải đều theo các mục tiêu:

1. Giấc ngủ
2. Dinh dưỡng
3. Vận động
4. Giảm stress / tinh thần
5. Phát triển bản thân
6. Tự tin
7. Cân bằng cuộc sống
8. Kết nối xã hội
9. Tập trung / năng suất

Mỗi mục tiêu phải có habit ở nhiều mức:

gentle
balanced
intense

Ví dụ Vận động:

gentle:
- Đi bộ 5 phút
- Stretching 3 phút
- Đứng dậy sau mỗi 60 phút
- Đi cầu thang ít nhất 1 lần
- Mobility nhẹ buổi sáng

balanced:
- Đi bộ 20 phút
- Yoga 15 phút
- Bodyweight 10 phút
- 6.000 bước/ngày
- Stretching 10 phút

intense:
- Workout 30 phút
- Chạy 20 phút
- Strength training
- 10.000 bước/ngày
- HIIT ngắn

Ví dụ Giấc ngủ:
- Đi ngủ trước 23:00
- Không dùng màn hình 30 phút trước ngủ
- Không caffeine sau 14:00
- Thở 4-7-8
- Viết journal trước ngủ
- Chuẩn bị phòng ngủ
- Giữ giờ thức dậy ổn định
- Ra ánh sáng buổi sáng
- Không ngủ trưa quá lâu
- Thư giãn cơ trước khi ngủ

Ví dụ Dinh dưỡng:
- Uống nước sau khi thức dậy
- Uống đủ nước
- Ăn thêm rau
- Ăn trái cây
- Ăn sáng
- Giảm nước ngọt
- Chuẩn bị snack lành mạnh
- Ăn chậm hơn
- Không vừa ăn vừa dùng điện thoại
- Meal prep đơn giản

Ví dụ Tinh thần:
- Thiền 3 phút
- Thiền 5 phút
- Thiền 10 phút
- Breathing exercise
- Ghi 3 điều biết ơn
- Journal cảm xúc
- 10 phút không điện thoại
- Đi bộ ngoài trời
- Body scan
- Reflection cuối ngày

Ví dụ Phát triển:
- Đọc 5 trang
- Đọc 10 phút
- Học ngoại ngữ 10 phút
- Học kỹ năng mới
- Reflection
- Lập kế hoạch ngày
- Deep work 25 phút
- Review mục tiêu tuần
- Viết 3 ưu tiên trong ngày

==================================================
4. MỞ RỘNG HABIT MODEL
==================================================

HabitDef không chỉ có:

id
icon
name
desc
effort
goals
pace
bg
accent
scheduleDefault

Hãy mở rộng nếu phù hợp:

timeOfDay:
- morning
- noon
- afternoon
- evening
- anytime

difficulty:
1 | 2 | 3

tags:
string[]

recommendedReminder:
HH:mm

frequency:
daily | weekly

defaultDays:
string[]

Ví dụ:

{
  id: "morning-sunlight-10",
  icon: "☀️",
  name: "Ra ánh sáng buổi sáng 10 phút",
  desc: "Hỗ trợ nhịp sinh học và tỉnh táo đầu ngày.",
  effort: "10 phút",

  goals: ["sleep", "energy"],
  pace: ["gentle", "balanced"],

  timeOfDay: ["morning"],
  difficulty: 1,
  frequency: "daily",

  tags: [
    "sleep-rhythm",
    "morning-routine",
    "outdoor"
  ],

  recommendedReminder: "07:30",

  bg: "#FFF5E0",
  accent: "#E0900A"
}

==================================================
5. PACE / MỨC ĐỘ
==================================================

GIỮ 3 mức hiện tại:

gentle
balanced
intense

Logic:

gentle
- ưu tiên habit đơn giản
- effort thấp
- dễ duy trì
- gợi ý khoảng 2 habits

balanced
- effort trung bình
- tạo tiến bộ ổn định
- gợi ý khoảng 3 habits

intense
- habit thử thách hơn
- effort cao hơn
- gợi ý khoảng 4 habits

Tuy nhiên recommendation KHÔNG được lúc nào cũng trả về cùng một vài habit đầu tiên.

Hãy cải thiện getSuggestions().

Có thể score dựa trên:
- goal match
- pace match
- difficulty
- timeOfDay
- diversity
- tags

Sau đó tạo variation nhỏ giữa các habit có cùng score.

Không random hoàn toàn khiến UI thay đổi mỗi render.

Có thể dùng deterministic variation hoặc shuffle một lần.

==================================================
6. REMINDER LOGIC
==================================================

Màn onboarding hiện có:

morning
noon
evening
custom

Giữ UI hiện tại.

Nhưng sửa logic.

KHÔNG gán cùng một giờ reminder cho tất cả habits.

User chọn morning/noon/evening chỉ nên được hiểu là:

preferredReminderPeriod

Ví dụ:

user chọn:
morning

Habit có recommendedReminder:

Uống nước sau thức dậy
→ 07:15

Ra ánh sáng buổi sáng
→ 07:30

Stretching buổi sáng
→ 08:00

Nếu habit phù hợp evening:

Đọc sách
→ 21:00

Chuẩn bị ngủ
→ 22:15

Ưu tiên:
habit.recommendedReminder

Nếu không có thì mới fallback theo period:

morning → 07:30
noon → 12:00
evening → 21:00

==================================================
7. FIX "TỰ CHỌN THỜI GIAN"
==================================================

Hiện custom đang chỉ lưu string:

"custom"

Điều này chưa đúng.

Khi người dùng nhấn:

"Tự chọn thời gian"

hãy mở time picker hoặc một UI chọn giờ phù hợp với style WellRise.

Ví dụ:

20:30

Sau đó state phải lưu giờ thật:

"20:30"

KHÔNG lưu:

"custom"

Nếu custom time được chọn thì thời gian này được ưu tiên khi tạo habit.

==================================================
8. CHALLENGES
==================================================

Tăng challenge catalog lên khoảng 20–25 challenges.

Đa dạng duration:

3 ngày
5 ngày
7 ngày
14 ngày
21 ngày
30 ngày

Các nhóm:

Sleep:
- 7 ngày ngủ đúng giờ
- 5 ngày không màn hình trước ngủ
- 14 ngày giữ giờ thức dậy

Movement:
- 7 ngày đi bộ
- 21 ngày vận động
- 14 ngày stretching
- 30 ngày 6.000 bước

Nutrition:
- 7 ngày uống đủ nước
- 14 ngày ăn rau
- 7 ngày không nước ngọt
- 5 ngày ăn sáng

Mindset:
- 7 ngày thiền
- 5 ngày gratitude
- 14 ngày journal

Growth:
- 7 ngày đọc sách
- 21 ngày đọc 10 phút
- Deep work challenge

Digital balance:
- Digital detox 7 ngày
- Không điện thoại khi ăn
- Không điện thoại 30 phút sau thức dậy

Mỗi challenge cần có:
id
title
description
duration
effort
goal
members
tips
status metadata phù hợp.

==================================================
9. MOCK USER CHALLENGE STATE
==================================================

Không để tất cả challenge cùng một trạng thái.

Mock user cần có ví dụ:

- chưa tham gia
- đang tham gia
- đã hoàn thành
- đã dừng / bỏ dở

Ví dụ:

challenge A
progress 3/7

challenge B
progress 9/14

challenge C
completed

challenge D
stopped

Màn Challenge History phải có dữ liệu đa dạng.

==================================================
10. GROUPS
==================================================

Tăng số group từ khoảng 8 lên 15–20 groups.

Giữ các group hiện tại và bổ sung ví dụ:

- Đi bộ sau giờ làm
- Người mới tập thể dục
- Ngủ sớm cùng nhau
- 30 ngày không thức khuya
- Ăn sáng mỗi ngày
- Meal prep đơn giản
- Giảm đồ uống có đường
- Sinh viên sống lành mạnh
- Dân văn phòng vận động
- Chăm sóc sức khỏe tinh thần
- Morning routine
- Deep work cùng nhau
- Học ngoại ngữ mỗi ngày
- Đọc 10 trang/ngày
- Digital minimalism
- Bắt đầu lại từ những bước nhỏ

Mỗi group cần khác nhau về:

memberCount
activity
joined
rules
challengeIds
description
color
accent

Không để memberCount hoặc activity quá giống nhau.

==================================================
11. GROUP POSTS
==================================================

Tạo ít nhất khoảng 100 mock group posts tổng cộng.

Mỗi group có khoảng 6–12 posts.

KHÔNG viết tất cả post theo cùng một kiểu.

Phân loại nội dung:

achievement
question
failure
comeback
tip
reflection
challenge update
new member
recommendation
photo post
moderator announcement

Ví dụ:

achievement:
"Hôm nay mình hoàn thành ngày thứ 14..."

question:
"Mọi người thường xử lý thế nào khi..."

failure:
"Tuần này mình bỏ lỡ 3 ngày..."

comeback:
"Đã nghỉ gần một tháng, hôm nay mình bắt đầu lại..."

tip:
"Mẹo giúp mình nhớ uống nước..."

reflection:
"Trước đây mình nghĩ phải làm thật nhiều..."

Posts cần có:
- nhiều tên user khác nhau
- avatar khác nhau
- thời gian khác nhau
- likes khác nhau
- một số là mine
- approved / pending / rejected khi phù hợp
- một số có image

Không để tất cả posts có status approved.

==================================================
12. USER MOCK DATA
==================================================

Tạo pool khoảng 25–40 mock users.

Ví dụ:

Ngọc Mai
Lan Phương
Thanh Tuấn
Bảo Châu
Minh Đức
Khánh Ly
Hoàng Nam
Trâm Anh
Quỳnh Anh
Nhật Lệ
Gia Hân
Bình An
Quang Minh
Phương Thảo
...

Dùng pool này nhất quán trong:
- groups
- posts
- saved posts
- notifications

Không tạo cùng một người với thông tin khác nhau ở các screen.

==================================================
13. ARTICLES
==================================================

Tăng số article lên khoảng 40–50.

Giữ 8 topics hiện tại.

Mỗi topic có khoảng 5–7 articles.

Ví dụ topic Sleep:

- Vì sao bạn vẫn mệt dù đã ngủ đủ?
- Caffeine tồn tại trong cơ thể bao lâu?
- Có nên ngủ bù cuối tuần?
- Ngủ trưa bao nhiêu phút là phù hợp?
- Ánh sáng màn hình ảnh hưởng giấc ngủ thế nào?
- Nhiệt độ phòng ngủ có quan trọng không?
- Stress ảnh hưởng đến giấc ngủ ra sao?
- Vì sao ánh sáng buổi sáng giúp ngủ tốt hơn?

Nutrition:
- Có cần uống đúng 2L nước?
- Vì sao không nên bỏ bữa sáng?
- Chất xơ quan trọng thế nào?
- Làm sao giảm đồ uống có đường?
- Ăn chậm có lợi gì?
- Healthy snack là gì?

Movement:
- Đi bộ có đủ để cải thiện sức khỏe?
- Bao nhiêu bước mỗi ngày là hợp lý?
- Có cần tập nặng mỗi ngày?
- Stretching trước hay sau workout?
- Tại sao ngồi lâu có hại?

Mindset:
- Stress khác anxiety như thế nào?
- Breathing exercise hoạt động ra sao?
- Gratitude có thực sự hữu ích?
- Vì sao nghỉ ngơi không phải lười?
- Digital overload ảnh hưởng tâm trạng thế nào?

Mỗi bài phải dùng cấu trúc Article hiện tại.

Không phá:
- ArticleScreen
- EvidenceScreen
- Related Articles
- Search
- For You recommendation

==================================================
14. EVIDENCE
==================================================

Đảm bảo article có claims đa dạng.

Không phải bài nào cũng cùng evidenceLevel.

Phân bố:

Level 1
Level 2
Level 3
Level 4

EvidenceScreen phải có đủ mock record tương ứng cho các claim được click.

Không để user click một claim rồi rơi vào fallback sai nội dung.

==================================================
15. EXPERTS
==================================================

Tăng experts lên khoảng 12–16.

Đa dạng:

- giấc ngủ
- dinh dưỡng
- vận động
- tâm lý
- stress
- phục hồi
- phát triển hành vi
- productivity / occupational wellbeing

Giữ cấu trúc data hiện tại.

Không dùng danh xưng hoặc credential quá cụ thể nếu chỉ là mock data.

Có thể dùng:

"Chuyên gia An (Giấc ngủ)"
"Chuyên gia Minh (Vận động)"
"Chuyên gia Hoa (Tinh thần)"

để tránh tạo thông tin chuyên môn giả quá chi tiết.

==================================================
16. NOTIFICATIONS
==================================================

Tăng notifications lên khoảng 25–30.

Đa dạng type:

habit reminder
habit streak
challenge progress
challenge completed
new article
group post
group moderation
saved content
weekly summary
encouragement

Ví dụ:

"Đã đến giờ đi bộ 10 phút."
"Bạn còn 1 thói quen để giữ lửa hôm nay."
"Bạn đã hoàn thành 5/7 ngày thử thách."
"Bài viết của bạn trong nhóm đã được duyệt."
"Nhóm Ngủ tốt hơn có bài viết mới."
"Bạn đã duy trì thói quen 7 ngày liên tiếp."

Có:
- read
- unread
- hôm nay
- hôm qua
- vài ngày trước

==================================================
17. SAVED CONTENT
==================================================

Tăng mock saved items lên khoảng 10–15.

Không hard-code SavedPostsScreen riêng.

Saved items phải tham chiếu tới post/article thật trong data source.

Nếu post đã bị unsave:
chỉ thay mock user state.

Không tạo bản copy khác của post.

==================================================
18. MOCK USER STATE
==================================================

Tạo:

mockUserState.ts

Dùng để mô phỏng người dùng thật.

Ví dụ:

export const MOCK_USER_STATE = {
  joinedGroupIds: [...],

  likedPostIds: [...],

  savedPostIds: [...],

  savedArticleIds: [...],

  challengeProgress: {...},

  completedChallenges: [...],

  stoppedChallenges: [...],

  readNotificationIds: [...]
}

Các màn hình phải dùng state này khi phù hợp.

Không hard-code riêng:

joined: true

hoặc:

liked: true

ở nhiều nơi nếu có thể derive từ mockUserState.

==================================================
19. DIVERSITY RULES
==================================================

Dữ liệu mock phải có diversity thực sự.

Không làm kiểu:

"Uống nước 1"
"Uống nước 2"
"Uống nước 3"

Chỉ để tăng số lượng.

Mỗi record phải có lý do tồn tại khác nhau.

Đảm bảo:

- title khác nhau
- description khác nhau
- effort khác nhau
- trạng thái khác nhau
- goal khác nhau
- timeOfDay khác nhau
- member count khác nhau
- thời gian post khác nhau
- likes khác nhau

Không dùng cùng một pattern câu liên tục.

==================================================
20. KHÔNG NHỒI DỮ LIỆU LÊN UI
==================================================

Catalog lớn hơn KHÔNG có nghĩa:

- Today hiển thị 30 habits
- Explore hiển thị 50 articles
- Group hiển thị 20 groups cùng lúc

Giữ UI gọn như hiện tại.

Ví dụ:

Today:
2–5 habits phù hợp

Explore:
một số article nổi bật

Group:
joined groups + recommended groups

Challenge:
một số challenge đang tham gia + explore

Các màn "Xem tất cả" mới hiển thị catalog lớn hơn.

==================================================
21. PERFORMANCE
==================================================

Mock data nhiều hơn nhưng app vẫn phải nhẹ.

Không tạo loop/render không cần thiết.

Dùng:
filter()
slice()
useMemo()

khi phù hợp.

Không duplicate object nặng.

==================================================
22. GIỮ NGUYÊN INTERACTION
==================================================

Sau khi mở rộng data phải kiểm tra:

Onboarding
→ Goals
→ Pace
→ Reminder
→ Suggested Habits
→ Today

Today
→ complete habit
→ fire calendar

Explore
→ Topic
→ Article
→ Evidence

Search
→ Article

Challenge
→ all challenges
→ challenge detail

Group
→ all groups
→ group detail
→ post detail

Profile
→ saved content
→ challenge history
→ privacy
→ settings

Không để việc refactor mock data làm hỏng các flow này.

==================================================
23. SAU KHI HOÀN THÀNH
==================================================

Hãy kiểm tra:

1. TypeScript compile.
2. Không missing import.
3. Không duplicate id.
4. Không broken references.
5. Article → claim → Evidence đúng.
6. Group → Post đúng.
7. Challenge IDs tồn tại.
8. Habit goals tồn tại.
9. Recommendation hoạt động.
10. Search hoạt động với data mới.
11. Custom reminder lưu giờ thật.
12. Không screen nào hard-code duplicate data không cần thiết.

Sau cùng hãy báo ngắn gọn:

- những file đã tạo;
- những file đã sửa;
- số lượng habits;
- số lượng challenges;
- số lượng groups;
- số lượng posts;
- số lượng articles;
- số lượng experts;
- số lượng notifications;
- logic recommendation đã thay đổi như thế nào;
- custom reminder đã được sửa ra sao.

KHÔNG redesign UI.
Mục tiêu chính của lần này là:
MỞ RỘNG + CHUẨN HÓA MOCK DATA + CẢI THIỆN RECOMMENDATION.