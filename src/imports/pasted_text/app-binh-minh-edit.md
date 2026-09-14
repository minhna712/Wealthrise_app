Hãy chỉnh sửa trực tiếp project app “Bình Minh” hiện tại.

QUAN TRỌNG:
- KHÔNG thiết kế lại toàn bộ app từ đầu.
- Giữ nguyên visual identity hiện tại:
  + nền kem/off-white
  + heading navy đậm
  + coral/red-orange là màu active/CTA
  + pastel xanh lá, tím, hồng, vàng, xanh ngọc
  + card bo góc mềm
  + shadow nhẹ
  + typography Nunito
  + cảm giác nhẹ nhàng, tích cực, không gây áp lực
- Giữ viewport mobile hiện tại 390 × 844.
- Giữ bottom navigation:
  Hôm nay | Khám phá | Thử thách | Nhóm | Cá nhân
- Không tạo mockup điện thoại có viền iPhone.
- Ưu tiên chỉnh sửa các screen/component hiện có thay vì tạo lại toàn bộ.
- Tất cả interaction phải hoạt động trong prototype.
- Không hard-code cùng một dữ liệu cho mọi màn detail.
- Giữ code/component dễ phát triển thành FE thật sau này.

==================================================
1. THAY ĐỔI VAI TRÒ CỦA MODULE “HÔM NAY”
==================================================

Module “Hôm nay” KHÔNG còn là nơi tạo hoặc thiết lập thói quen.

BỎ hoàn toàn khỏi màn Hôm nay:
- “+ Thêm thói quen”
- “Tạo thói quen”
- các CTA dẫn tới tạo habit
- các card setup habit

Màn “Hôm nay” chỉ có nhiệm vụ:

1. Hiển thị những thói quen cần thực hiện hôm nay
2. Cho người dùng check hoàn thành
3. Hiển thị tiến độ trong ngày
4. Hiển thị streak
5. Hiển thị lịch hoạt động trong tháng
6. Hiển thị một số bài viết mới

==================================================
2. THIẾT KẾ LẠI MÀN “HÔM NAY”
==================================================

Cấu trúc từ trên xuống:

A. HEADER

“Chào buổi sáng, Minh! 👋”

Subtitle:
“Hôm nay mình cùng giữ nhịp nhé.”

Không cần hero illustration lớn.
Nếu có illustration thì chỉ dùng rất nhỏ để không chiếm không gian.

==================================================
B. TIẾN ĐỘ HÔM NAY
==================================================

Tạo card:

“Tiến độ hôm nay”

Ví dụ:
3/5 hoàn thành
60%

Có progress bar màu coral.

Không cần progress ring lớn nếu đã có progress bar.

==================================================
C. THÓI QUEN HÔM NAY
==================================================

Title:
“Thói quen hôm nay”

Hiển thị checklist:

✓ Uống đủ nước
✓ Đi bộ 10 phút
✓ Thiền 5 phút
○ Viết nhật ký
○ Đọc 10 phút

Yêu cầu:
- Completed habit:
  + check coral/red hoặc success state nhẹ
  + background rất nhẹ
- Incomplete:
  + circle outline
- Cho phép click để toggle completed / incomplete.
- Khi toggle:
  + cập nhật số completed
  + cập nhật % progress ngay trên màn hình.

KHÔNG có nút thêm habit ở đây.

==================================================
D. GIỮ LỬA / STREAK
==================================================

Tạo section:

“Giữ lửa 🔥”

Hiển thị lớn:

🔥 6 ngày liên tiếp

Bên cạnh hoặc dưới:
“Kỷ lục: 12 ngày”

Bên dưới là một calendar thực theo tháng.

Ví dụ:

Tháng 9, 2026

T2  T3  T4  T5  T6  T7  CN

Các ngày:
- ngày có hoạt động → vòng tròn coral/red
- ngày không hoạt động → không tô màu hoặc nền trắng/xám nhạt
- ngày hôm nay → có viền navy để nhận biết
- ngày tương lai → trạng thái disabled nhẹ

Calendar phải giống lịch tháng thật,
không phải một hàng timeline đơn giản.

Có thể hiển thị tối đa 5–6 hàng tuần nếu cần scroll.

Dưới calendar:
“Ngày có hoạt động được tô đỏ.”

==================================================
E. LOGIC STREAK
==================================================

Prototype cần minh họa rõ:

Calendar màu đỏ = ngày có hoạt động.

Streak = số ngày liên tiếp user duy trì hoạt động.

Không cần cho user chỉnh streak thủ công.

Không đặt nút “Tạo thói quen” trong section này.

==================================================
F. BÀI VIẾT MỚI
==================================================

Sau calendar, thêm section:

“Bài viết mới”

Chỉ hiển thị khoảng 2 bài để Home không biến thành Explore.

Ví dụ:

Article 1:
🌙
“Vì sao ngủ đủ mà bạn vẫn mệt?”
Giấc ngủ · 5 phút đọc

Article 2:
🏃
“Đi bộ 10 phút mỗi ngày có ích gì?”
Vận động · 4 phút đọc

Article card cần clickable.

Click article:
→ mở đúng Article Detail tương ứng.

Có CTA nhỏ:

“Xem thêm trong Khám phá →”

Click:
→ chuyển sang module Khám phá.

Nếu có dữ liệu onboarding thì ưu tiên article mới thuộc mục tiêu của user.

==================================================
3. THAY ĐỔI MODULE “THỬ THÁCH”
==================================================

Module Thử thách sẽ có 2 nhiệm vụ:

1. Quản lý / tạo thói quen
2. Tham gia các thử thách có thời lượng

Tạo segmented control ở đầu màn:

[ Thói quen ] [ Thử thách ]

==================================================
4. TAB “THÓI QUEN”
==================================================

Khi mở tab Thói quen:

Header:
“Thói quen của bạn”

CTA chính:
“+ Tạo thói quen mới”

Bên dưới hiển thị danh sách habit.

Ví dụ:

🌙 Ngủ trước 23:00
Hằng ngày · Nhắc lúc 22:30
Đang hoạt động
>

💧 Uống đủ nước
Hằng ngày
Đang hoạt động
>

🚶 Đi bộ 10 phút
T2 · T4 · T6
Đang hoạt động
>

Mỗi HabitCard clickable.

Click habit:
→ Habit Detail / Edit Habit.

==================================================
5. MÀN “TẠO THÓI QUEN”
==================================================

Click:
“+ Tạo thói quen mới”

→ mở screen mới:

← Tạo thói quen

Tên thói quen
[ Đi bộ 20 phút ]

Mục tiêu
[ Vận động đều đặn ]

Tần suất
[ Hằng ngày / Một số ngày trong tuần ]

Nếu chọn một số ngày:
[T2] [T3] [T4] [T5] [T6] [T7] [CN]

Thời gian nhắc
[ 18:30 ]

Ngày bắt đầu
[ Hôm nay ]

CTA:
“Tạo thói quen”

Sau khi tạo:
→ quay lại danh sách Thói quen
→ habit mới xuất hiện
→ habit cũng xuất hiện trên Hôm nay nếu lịch của nó áp dụng cho hôm nay.

==================================================
6. HABIT DETAIL / EDIT
==================================================

Khi click vào một habit:

Hiển thị:
- tên
- lịch
- reminder
- ngày bắt đầu
- trạng thái

Actions:

“Chỉnh sửa”
“Tạm dừng”
“Lưu trữ”

Không cần xóa cứng ngay trong MVP.

==================================================
7. TAB “THỬ THÁCH”
==================================================

Khi bấm tab “Thử thách”:

Title:
“Thử thách dành cho bạn”

Hiển thị:

🌙 7 ngày ngủ đều đặn
7 ngày
Khoảng 10 phút/ngày
[ Xem thử thách ]

💧 7 ngày uống đủ nước
7 ngày
Khoảng 2 phút/ngày
[ Xem thử thách ]

🏃 21 ngày vận động mỗi ngày
21 ngày
Khoảng 20 phút/ngày
[ Xem thử thách ]

Giữ các state hiện tại nếu đã có:

- chưa tham gia
- đang tham gia
- hoàn thành
- đã dừng

==================================================
8. KẾT NỐI THỬ THÁCH VỚI ARTICLE
==================================================

Một challenge có thể được mở từ cuối Article Detail.

Ví dụ:

Article:
“5 điều giúp bạn xây dựng giờ ngủ đều đặn”

Cuối article có:

“Biến kiến thức thành hành động”

🌙 7 ngày ngủ đều đặn
7 ngày · 10 phút/ngày

[ Xem thử thách → ]

Click:
→ chuyển sang module Thử thách
→ mở đúng challenge liên quan.

Không đặt challenge promotion trong Home.

==================================================
9. KHÁM PHÁ GIỮ CẤU TRÚC MỚI
==================================================

Module Khám phá tiếp tục dùng:

[ Khám phá ] [ Dành cho bạn ] [ Chuyên gia ]

Tab Khám phá:
- Khám phá theo chủ đề
- Được quan tâm
- “Xem tất cả” phải hoạt động

Tab Dành cho bạn:
- article recommendation theo mục tiêu user

Tab Chuyên gia:
- expert list

BỎ:
“Thử một điều nhỏ”

Challenge chỉ được giới thiệu ở cuối Article Detail.

==================================================
10. NAVIGATION LOGIC
==================================================

Bottom nav:

Hôm nay
Khám phá
Thử thách
Nhóm
Cá nhân

Root screen:
→ có bottom nav

Detail screen:
- Article Detail
- Evidence
- Topic Detail
- Search
- Create Habit
- Edit Habit
- Challenge Detail
- Expert Detail

→ ẩn bottom navigation
→ dùng back button.

==================================================
11. COMPONENT / CODE STRUCTURE
==================================================

Tái sử dụng component:

BottomNav
HabitRow
HabitCard
ProgressBar
MonthlyCalendar
StreakCard
ArticleCard
SegmentedControl
ChallengeCard
PrimaryButton

Không copy nhiều phiên bản giống nhau.

State cần có:

Habit:
active / completed / paused

CalendarDay:
active / inactive / today / future

Challenge:
available / active / completed / stopped

Article:
default / saved

==================================================
12. QUAN TRỌNG VỀ UI
==================================================

Màn Hôm nay phải ưu tiên “above the fold”:

1. greeting
2. progress
3. habits

Calendar nằm ngay sau habit.

Bài viết mới nằm cuối màn.

Không để illustration lớn đẩy habit xuống dưới.

Màn Hôm nay phải có cảm giác:
“mở app → biết ngay hôm nay mình cần làm gì”.

Module Thử thách phải có cảm giác:
“đây là nơi tôi thiết lập hành động và chương trình mình muốn theo”.

==================================================
13. KHÔNG XÓA BẢN CŨ NGAY
==================================================

Nếu cần thay đổi lớn:
- giữ lại screen cũ
- tạo phiên bản mới hoặc chỉnh một copy
- đặt tên rõ:

Home/Today-V2
Challenge/Habits
Challenge/CreateHabit
Challenge/HabitDetail
Challenge/List
Challenge/Detail

để tôi có thể so sánh trước khi quyết định thay thế.