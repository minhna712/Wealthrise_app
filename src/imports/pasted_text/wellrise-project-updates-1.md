Hãy tiếp tục CHỈNH SỬA TRỰC TIẾP project WellRise hiện tại.

KHÔNG tạo lại app.
KHÔNG redesign toàn bộ UI.
Giữ nguyên visual identity, navigation và những phần đang hoạt động tốt.

MỤC TIÊU CỦA LẦN SỬA NÀY:

1. Fix các logic còn chưa nhất quán.
2. Làm “Khám phá theo chủ đề” kéo ngang được thật.
3. Sau khi logic đúng, mở rộng mock data để MVP nhìn phong phú như một sản phẩm thật.
4. Tất cả mock data phải dùng chung data source, không copy hard-code riêng cho từng screen.

==================================================
A. GIỮ NGUYÊN NHỮNG PHẦN ĐÃ HOẠT ĐỘNG
==================================================

KHÔNG phá các phần hiện tại đã đúng:

Welcome
→ Goals
→ Pace
→ Reminder
→ Suggested Habits
→ Today

Giữ:
- localStorage cho onboarding
- localStorage cho habits
- completion theo từng ngày
- weekly fire calendar theo ngày thật
- logic hoàn thành 100% habit trong ngày → 🔥
- notification screen
- pace ảnh hưởng tới habit recommendation
- chỉ habit được user tích chọn mới được thêm vào Today.

==================================================
B. CHUẨN HÓA PERSONALIZATION ID
==================================================

Hiện đang có sự không nhất quán giữa ID của onboarding goal và topic/article.

Chuẩn hóa như sau.

USER GOAL IDS:

sleep
eat
exercise
stress
confidence
balance
growth
community

TOPIC IDS:

sleep
nutrition
movement
mindset
growth
balance
community
focus

Tạo duy nhất một mapping dùng toàn app:

const GOAL_TO_TOPIC = {
  sleep: "sleep",
  eat: "nutrition",
  exercise: "movement",
  stress: "mindset",
  confidence: "mindset",
  growth: "growth",
  balance: "balance",
  community: "community"
};

Không tạo mapping khác nhau ở Today và Explore.

Article.goalIds phải sử dụng USER GOAL IDS.

Ví dụ:

Article về chạy bộ:
goalIds: ["exercise"]

Article về ăn uống:
goalIds: ["eat"]

Article về stress:
goalIds: ["stress"]

Article về confidence:
goalIds: ["confidence", "growth"]

Tab “Dành cho bạn” phải ưu tiên article có goalIds match userGoals.

==================================================
C. FIX REMINDER → HABIT
==================================================

Reminder user chọn trong onboarding hiện phải được đưa vào habit thật.

Screen26Habits phải nhận thêm:

reminder

Khi chuyển Suggested Habit thành Habit:

reminder phải dựa trên onboarding reminder.

Ví dụ:

morning → "07:30"
noon → "12:00"
evening → "21:00"

Nếu custom:
dùng thời gian custom user đã chọn.

Không tiếp tục tạo:

reminder: ""

==================================================
D. FIX WEEKLY HABIT
==================================================

Không được tạo weekly habit với:

days: []

Nếu một suggested habit có schedule = weekly:

phải có ngày mặc định hợp lý.

Ví dụ:

weekly exercise:
["T2","T4","T6"]

social connection:
["T7"]

reading:
["T3","T5","CN"]

Hoặc bổ sung field defaultDays vào HabitDef.

Ví dụ:

defaultDays: ["T7"]

Khi user thêm habit đó:
Habit.days = defaultDays.

Today phải chỉ hiển thị weekly habit vào đúng ngày được schedule.

==================================================
E. KHÁM PHÁ THEO CHỦ ĐỀ — HORIZONTAL CAROUSEL
==================================================

Hiện tại section:

“Khám phá theo chủ đề”

đang dùng grid.

BỎ grid 3 cột.

Chuyển thành một horizontal carousel thực sự.

Yêu cầu:

- display flex
- overflow-x auto
- cards không co lại
- mỗi card width khoảng 118–130px
- gap 10–12px
- padding-left 20px
- padding-right tối thiểu 20px
- scroll-snap-type: x mandatory
- mỗi card scroll-snap-align: start
- ẩn scrollbar
- WebkitOverflowScrolling: touch

PHẢI hỗ trợ:

1. swipe bằng ngón tay trên mobile
2. trackpad horizontal scroll
3. mouse drag trong Figma Make preview

Nếu native overflow không hỗ trợ mouse drag:
implement pointer-drag bằng useRef + pointer events.

Khi hover desktop:
cursor: grab

Khi đang kéo:
cursor: grabbing

Không click nhầm topic trong lúc drag.

Hiển thị một phần card tiếp theo ở mép phải để user nhận ra còn nội dung phía sau.

Ví dụ:

[ 🌙 Giấc ngủ ] [ 🥗 Dinh dưỡng ] [ 🏃 Vận động ] [ 🧘 ... ]

Không hiện tất cả cùng lúc.

==================================================
F. FIX MODULE NHÓM
==================================================

Trong TOÀN BỘ module Nhóm:

CHỈ GIỮ interaction:

♡ Like

BỎ:

- Comment icon
- số comment
- Share
- ShareSheet
- Comment list
- Comment input
- nút Bình luận
- nút Chia sẻ

Post Detail của bài thuộc Group chỉ gồm:

Back
Group name
Author
Time
Post content
Optional image
Like count
Heart button

Heart:

outline → filled coral
like count +1

click lại:
filled → outline
like count -1

==================================================
G. GROUP DATA PHẢI DYNAMIC
==================================================

Không hard-code GroupDetail luôn là:

“Sống năng động mỗi ngày”.

Tạo central mock data:

GROUPS

Mỗi group có:

id
name
icon
description
memberCount
activity
joined
color
accent
rules
posts
challengeIds

Khi click group:

onGroupDetail(groupId)

App phải lưu:

selectedGroupId

GroupDetailScreen nhận:

groupId

và tìm đúng group:

GROUPS.find(g => g.id === groupId)

Mỗi nhóm phải hiển thị:
- đúng tên
- đúng description
- đúng member count
- đúng rules
- đúng posts.

==================================================
H. SETTINGS — HOÀN THIỆN CHO MVP
==================================================

Notification toggles:

- Nhắc nhở thói quen
- Cập nhật thử thách
- Hoạt động cộng đồng

phải persist localStorage.

Dùng:

wr_settings

Reload app:
toggle vẫn giữ trạng thái.

BỎ English nếu chưa có localization thật.

Chỉ hiển thị:

Ngôn ngữ
Tiếng Việt

BỎ Dark mode nếu chưa có dark theme thật.

Không để control giả.

BỎ hoàn toàn:
“Đăng xuất”

vì MVP không có account/login UI.

“Trợ giúp & hỗ trợ”
phải click được.

Mở modal/screen có:

- Câu hỏi thường gặp
- Báo lỗi
- Gửi góp ý

“Về WellRise”
phải click được.

Hiển thị:

WellRise
Version 1.0.0
“Mỗi ngày là một khởi đầu mới.”

WellRise hỗ trợ người dùng xây dựng thói quen lành mạnh.
Nội dung mang tính tham khảo và không thay thế tư vấn y tế chuyên môn.

==================================================
I. EXPERT — KHÔNG CÓ DEAD BUTTON
==================================================

Trong tab Chuyên gia:

Nếu chưa có Expert Profile screen:
BỎ nút “Xem hồ sơ”.

BỎ:
“Yêu cầu kết nối”

nếu interaction này chưa được implement.

Không để bất kỳ button nào bấm mà không có phản hồi.

MVP ưu tiên ít chức năng nhưng tất cả đều hoạt động.

==================================================
J. ONBOARDING COMPLETED STATE
==================================================

Hiện user hoàn thành onboarding rồi nhưng refresh app không nên luôn quay về Welcome.

Tạo:

wr_onboarding_completed

Khi finish onboarding:

localStorage.setItem(
  "wr_onboarding_completed",
  "true"
)

Khi mở app:

nếu chưa completed:
→ onboarding

nếu completed:
→ Today

Không xóa dữ liệu đã chọn khi refresh.

Có thể thêm một nút:

“Đặt lại trải nghiệm demo”

ở cuối Settings.

Khi bấm:
- có confirm
- xóa các key WellRise trong localStorage
- quay lại Welcome.

Điều này rất hữu ích khi demo cho giám khảo.

==================================================
K. SAU KHI FIX LOGIC — MỞ RỘNG MOCK DATA
==================================================

Không làm mock data sơ sài.

Tạo data đủ để khi giám khảo scroll/search/filter,
app có cảm giác như đã có nội dung thật.

-----------------------------
1. TOPICS
-----------------------------

Tạo 8 topic:

1. Giấc ngủ & Phục hồi
2. Dinh dưỡng
3. Vận động
4. Tinh thần & Stress
5. Phát triển bản thân
6. Cân bằng cuộc sống
7. Kết nối xã hội
8. Tập trung & Năng suất

Mỗi topic có:

id
icon
label
description
bg
accent

==================================================
2. ARTICLES
==================================================

Tạo khoảng 24 mock articles.

Mỗi topic có ít nhất 3 articles.

Không để topic nào phải dùng article fallback không liên quan.

Các title phải đa dạng, tự nhiên.

Ví dụ:

GIẤC NGỦ:
- Vì sao bạn vẫn mệt dù đã ngủ đủ?
- Làm thế nào để giữ giờ ngủ ổn định?
- Một routine 20 phút trước khi ngủ
- Cuối tuần nên ngủ bù như thế nào?

DINH DƯỠNG:
- Bắt đầu ngày mới với một bữa sáng đơn giản
- Làm thế nào để uống nước đều hơn?
- Cách tăng rau trong bữa ăn mà không quá áp lực
- Ăn nhẹ thế nào khi học hoặc làm việc lâu?

VẬN ĐỘNG:
- 10 phút đi bộ có đáng để bắt đầu?
- Stretching buổi sáng cho người ít vận động
- Làm sao quay lại tập luyện sau khi bỏ vài ngày?
- Vận động khi phải ngồi nhiều

TINH THẦN:
- Một bài thở ngắn khi bạn thấy căng thẳng
- Nghỉ ngơi mà không cảm thấy tội lỗi
- Cách nhận ra mình đang quá tải
- Nhật ký 3 phút cuối ngày

PHÁT TRIỂN:
- Đọc 10 phút mỗi ngày có thể bắt đầu thế nào?
- Xây dựng thói quen học một kỹ năng mới
- Vì sao mục tiêu nhỏ dễ duy trì hơn?
- Cách quay lại sau khi mất động lực

CÂN BẰNG:
- Một buổi tối không mạng xã hội
- Tạo khoảng nghỉ giữa học tập và nghỉ ngơi
- Khi nào nên giảm bớt mục tiêu?
- Routine cuối tuần nhẹ nhàng

KẾT NỐI:
- Một tin nhắn nhỏ cũng có thể duy trì kết nối
- Làm sao tìm người cùng xây thói quen?
- Hỗ trợ bạn bè mà không tạo áp lực

TẬP TRUNG:
- Routine 10 phút để bắt đầu làm việc
- Chia nhỏ một nhiệm vụ đang khiến bạn trì hoãn
- Nghỉ ngắn thế nào để quay lại tập trung?

Mỗi article:

id
topicId
topicLabel
topicIcon
topicBg
topicAccent
title
summary
body
author
reviewedDate
readingMins
goalIds
claims
relatedChallenge
coverGradient

Body:
2–4 đoạn ngắn.

Không viết claim y khoa quá mức.

Không bịa số liệu chính xác như:
“tăng trí nhớ 47%”
nếu không có nguồn thật.

Vì đây là mock MVP:
giữ wording thận trọng:

“có thể hỗ trợ”
“thường được khuyến nghị”
“một số nghiên cứu cho thấy”
“hiệu quả có thể khác nhau giữa mỗi người”.

==================================================
3. EVIDENCE MOCK DATA
==================================================

Mỗi article có 1–2 claim.

Các claim có:

text
evidenceLevel
evidenceLabel

Evidence Screen phải có data cho các claim mới.

Không tạo tên nghiên cứu/hospital/tạp chí giả để khiến mock data trông như nguồn thật.

Nếu chưa dùng nguồn thật:
hiển thị:

“Nguồn minh họa cho prototype”

hoặc dùng source type chung:

- Tổng quan hệ thống
- Nghiên cứu quan sát
- Hướng dẫn sức khỏe cộng đồng

Không bịa citation cụ thể.

==================================================
4. EXPERTS
==================================================

Tạo khoảng 8 mock expert profiles để UI đa dạng.

Mỗi expert có:

id
name
field
experience
support
avatar
bg
topicIds

Các profile này là DEMO DATA.

Không sử dụng tên bác sĩ/người nổi tiếng có thật.

Không bịa:
- bệnh viện thật
- số giấy phép thật
- tổ chức thật
- chứng chỉ thật.

Có chuyên gia thuộc:
- sleep
- nutrition
- movement
- mindset
- growth
- balance.

==================================================
5. CHALLENGES
==================================================

Tạo khoảng 12 challenge.

Bao phủ:

Sleep
Nutrition
Movement
Mindset
Growth
Balance

Ví dụ:

7 ngày ngủ đúng giờ
7 ngày uống nước đều
14 ngày thêm rau
7 ngày đi bộ 10 phút
21 ngày vận động
7 ngày stretching buổi sáng
7 ngày thở 3 phút
14 ngày viết điều biết ơn
7 ngày đọc 10 phút
7 ngày digital detox
14 ngày routine buổi tối
7 ngày kết nối với người thân

Mỗi challenge có:
id
icon
title
description
duration
effort
goal
members
tips

==================================================
6. GROUPS
==================================================

Tạo khoảng 8 group:

Sống năng động mỗi ngày
Ngủ tốt hơn cùng nhau
Ăn uống lành mạnh
Thiền & thở chánh niệm
Đọc sách mỗi ngày
Bắt đầu lại thật nhẹ
Cân bằng học tập & nghỉ ngơi
Digital detox cùng nhau

Mỗi group:

4–6 mock posts.

Post content đa dạng:
- chia sẻ tiến độ
- quay lại sau khi bỏ lỡ
- động viên
- câu chuyện nhỏ
- hoàn thành challenge.

CHỈ có:
Like interaction.

Không comment.
Không share.

==================================================
7. NOTIFICATIONS
==================================================

Tạo khoảng 10–12 notification mock.

Đa dạng:

habit reminder
fire streak
challenge
new article
group activity

Ví dụ:

🌱 Đã đến giờ đi bộ 10 phút.
🔥 Bạn còn 1 thói quen để giữ lửa hôm nay.
🌙 Có bài viết mới phù hợp với mục tiêu Giấc ngủ.
🏆 Bạn đã đi được 5/7 ngày trong thử thách.
📖 Đến giờ đọc 10 phút.
💧 Một lời nhắc nhỏ: uống nước nhé.

Có:
read / unread
timestamp.

==================================================
L. SEARCH PHẢI HOẠT ĐỘNG VỚI MOCK DATA MỚI
==================================================

Search không được chỉ tìm vài item ban đầu.

Search trên toàn bộ:

ARTICLES
EXPERTS

Tìm theo:

article.title
article.summary
article.topicLabel

expert.name
expert.field

Search phải cập nhật theo input.

==================================================
M. ACCEPTANCE TEST
==================================================

Sau khi hoàn thành tôi phải test được:

1. Welcome → Goals → Pace → Reminder → Habit → Today.
2. Pace thay đổi recommendation.
3. Chỉ habit tích chọn xuất hiện ở Today.
4. Reminder được gắn vào habit.
5. Weekly habit xuất hiện đúng ngày.
6. Refresh sau onboarding → vào Today, không quay lại Welcome.
7. Lịch giữ lửa theo tuần thật.
8. Hoàn thành chưa đủ habit → chưa 🔥.
9. Hoàn thành đủ → 🔥.
10. Notification hoạt động.
11. Explore → “Khám phá theo chủ đề” swipe ngang được.
12. Có thể kéo bằng mouse trong desktop preview.
13. Click từng topic → đúng nội dung topic.
14. “Dành cho bạn” thay đổi theo goal thật.
15. Search có nhiều kết quả khác nhau.
16. Group A và Group B mở detail khác nhau.
17. Group chỉ còn Like.
18. Settings không còn Logout / fake Dark mode / fake English.
19. Settings persist.
20. Không còn dead button.

QUAN TRỌNG:
Sau khi hoàn thành, hãy tự rà lại toàn bộ navigation và interaction.
Không chỉ thay đổi giao diện.
Phải sửa behaviour/frontend logic thật.