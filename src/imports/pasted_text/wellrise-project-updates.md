Hãy CHỈNH SỬA TRỰC TIẾP project WellRise hiện tại của tôi.

QUAN TRỌNG:
- KHÔNG tạo lại app từ đầu.
- KHÔNG thay đổi toàn bộ visual identity hiện tại.
- Giữ nguyên phong cách WellRise:
  + nền kem/off-white
  + heading navy đậm
  + coral/orange là màu CTA và active state
  + pastel green / lavender / peach / yellow / blue
  + card bo góc mềm
  + shadow nhẹ
  + typography Nunito
  + cảm giác nhẹ nhàng, tích cực, khoa học, không gây áp lực
- Giữ viewport mobile hiện tại 390 × 844.
- Không tạo mockup iPhone.
- Không flatten UI thành ảnh.
- Ưu tiên sửa các screen/component đang có.
- Tất cả nút và interaction được mô tả bên dưới PHẢI hoạt động trong prototype/frontend.
- Đây là MVP nên trước mắt có thể sử dụng frontend state + localStorage, chưa cần backend.
- Dữ liệu người dùng đã chọn cần được giữ khi refresh trang bằng localStorage nếu có thể.
- Không thêm lại màn Login/Register dưới bất kỳ hình thức nào.

==================================================
1. SỬA MÀN WELCOME / MÀN ĐẦU TIÊN
==================================================

Redesign màn Welcome hiện tại theo hướng giống visual reference tôi đã cung cấp:

- Phía trên:
  + Logo WellRise.
  + Brand name WellRise.
  + Tagline ngắn hiện tại của WellRise.

- Phần trung tâm:
  + Có một illustration lớn chiếm phần chính của màn hình.
  + Phong cách tương tự ảnh reference:
    thiên nhiên, bình minh, đồi núi, cây cỏ, một nhân vật đang hướng về bình minh.
  + Cảm giác:
    khởi đầu mới,
    bình yên,
    phát triển bản thân,
    sống khỏe,
    tích cực.
  + Màu illustration phải hài hòa với palette WellRise hiện tại.
  + Không cần sao chép y hệt nhân vật hoặc bố cục reference.
  + Nếu không thể tự tạo illustration phù hợp, hãy tạo một vùng hero image/illustration có thể dễ dàng thay ảnh sau này.
  + KHÔNG biến toàn bộ màn hình thành một ảnh duy nhất.

- Copy chính:
  Một phiên bản ngắn, ví dụ:
  “Một phiên bản khỏe mạnh và hạnh phúc hơn đang chờ bạn.”

- Phía dưới:
  Chỉ có một CTA chính:
  “Bắt đầu thôi →”

BỎ HOÀN TOÀN:
- “Bạn đã có tài khoản?”
- “Đăng nhập”
- “Đăng ký”
- Login bằng Google
- Login bằng Apple
- Login email/password
- tất cả CTA liên quan đến authentication.

Khi nhấn “Bắt đầu thôi”:
→ chuyển trực tiếp sang màn chọn mục tiêu.

==================================================
2. XÓA MÀN LOGIN / REGISTER KHỎI FLOW
==================================================

Xóa Screen Login hiện tại khỏi user flow.

Flow KHÔNG được còn:

Goals
→ Login
→ Purpose

Hãy sửa thành:

Welcome
→ Goals
→ Pace
→ Reminder
→ Suggested Habits
→ Today

Nếu component Login cũ vẫn tồn tại trong source thì có thể giữ file để tránh lỗi,
nhưng KHÔNG được điều hướng người dùng tới màn đó nữa.

==================================================
3. BỎ MÀN “BẠN DÙNG WELLRISE ĐỂ LÀM GÌ?”
==================================================

Xóa màn hỏi mục đích kiểu:

“Bạn dùng WellRise để làm gì?”
“Xây dựng thói quen”
“Duy trì thói quen”
“Cải thiện sức khỏe”
...

Không cần màn này nữa.

Lý do:
Màn “Bạn muốn tập trung vào điều gì?” đã thu thập mục tiêu chính của người dùng.

Sau màn Goals:
→ chuyển thẳng sang Pace.

==================================================
4. MÀN CHỌN MỤC TIÊU
==================================================

Giữ màn:

“Bạn muốn tập trung vào điều gì?”

Các lựa chọn hiện tại có thể giữ như:
- Ngủ ngon hơn
- Ăn uống lành mạnh
- Vận động đều đặn
- Giảm căng thẳng
- Tự tin hơn
- Cân bằng cuộc sống
...

Cho phép chọn nhiều mục tiêu.

Các mục tiêu đã chọn PHẢI thực sự ảnh hưởng đến habit suggestion ở bước sau.

Ví dụ:

Nếu chọn:
“Ngủ ngon hơn”

thì Suggested Habits phải ưu tiên:
- Đi ngủ trước 23:00
- Không dùng điện thoại trước khi ngủ
- Thư giãn trước khi ngủ
...

Nếu chọn:
“Vận động đều đặn”

thì ưu tiên:
- Đi bộ
- Stretching
- Vận động nhẹ
...

Không hiển thị cùng một bộ recommendation cho tất cả người dùng.

==================================================
5. MÀN “CHỌN NHỊP ĐỘ”
==================================================

GIỮ màn chọn nhịp độ.

Các mức:

1. Nhẹ nhàng, dễ duy trì
2. Cân bằng
3. Thử thách hơn

NHƯNG lựa chọn này phải HOẠT ĐỘNG THẬT.

Không được chỉ lưu lựa chọn để trang trí.

Logic frontend:

GENTLE / NHẸ NHÀNG:
- ưu tiên habit rất dễ bắt đầu
- khoảng 1–2 habit chính được đề xuất nổi bật
- thời lượng thường khoảng 2–10 phút
- hành vi nhỏ, ít áp lực

BALANCED / CÂN BẰNG:
- khoảng 2–3 habit phù hợp
- mức độ vừa phải
- khoảng 10–20 phút nếu có thời lượng

INTENSE / THỬ THÁCH HƠN:
- khoảng 3–4 habit phù hợp
- độ khó / commitment cao hơn
- khoảng 15–30 phút nếu phù hợp

Ví dụ cùng mục tiêu “Vận động”:

Gentle:
- Đi bộ 10 phút
- Stretching 5 phút

Balanced:
- Đi bộ 20 phút
- Stretching 10 phút
- Bài tập nhẹ 15 phút

Intense:
- Vận động 30 phút
- Strength training
- Stretching
- Theo dõi hoạt động

LƯU Ý:
Pace chỉ ảnh hưởng đến recommendation.
KHÔNG ép người dùng phải chọn đúng số habit đó.

==================================================
6. MÀN NHẮC NHỞ
==================================================

Giữ màn chọn thời gian nhắc:

- Buổi sáng
- Buổi trưa
- Buổi tối
- Tự chọn

Lựa chọn này cần được lưu lại.

Sau này có thể dùng cho notification thật,
nhưng MVP trước mắt chỉ cần frontend state/localStorage.

Sau màn Reminder:
→ chuyển sang Suggested Habits.

==================================================
7. MÀN “ĐÂY LÀ VÀI GỢI Ý DÀNH CHO BẠN”
==================================================

Đây là màn RẤT QUAN TRỌNG.

Recommendation phải dựa trên:

USER GOALS
+
PACE
+
có thể kết hợp REMINDER TIME nếu hợp lý

→ tạo danh sách Suggested Habits phù hợp.

QUAN TRỌNG:

CHỈ habit nào người dùng TÍCH CHỌN
mới trở thành habit thật của người dùng.

Không tự động thêm tất cả habit suggestion vào danh sách.

Mỗi habit card cần có:
- icon
- tên habit
- mô tả ngắn
- estimated effort/time nếu phù hợp
- checkbox/select state

Selected state phải rõ ràng:
- border/fill đổi màu
- checkmark rõ
- vẫn giữ style nhẹ nhàng.

CTA cuối màn phải thay đổi theo số habit đã chọn.

Ví dụ:

0 selected:
“Chọn ít nhất 1 thói quen”

2 selected:
“Thêm 2 thói quen”

4 selected:
“Thêm 4 thói quen”

Nếu chưa chọn habit nào:
CTA disable.

Khi nhấn CTA:
→ CHỈ đưa các habit đã selected vào danh sách Habit của user
→ chuyển tới Today.

Các habit không chọn:
KHÔNG được xuất hiện trong Today.

==================================================
8. REDESIGN MÀN “HÔM NAY”
==================================================

Hãy thay đổi cấu trúc màn Today.

Ưu tiên:

1. Weekly fire calendar
2. Habits cần làm hôm nay
3. Các content khác nếu thực sự cần

BỎ thanh progress tổng thể hiện tại.

==================================================
9. WEEKLY “LỊCH GIỮ LỬA”
==================================================

Đưa “Lịch giữ lửa” lên gần đầu màn hình Today.

Nó phải nằm ở vị trí nổi bật và được giữ cố định về mặt hierarchy.

KHÔNG hiển thị lịch tháng.

CHỈ hiển thị 7 ngày của TUẦN HIỆN TẠI.

Ví dụ:

T2   T3   T4   T5   T6   T7   CN
14   15   16   17   18   19   20

Ngày/thứ PHẢI lấy theo thời gian thật của thiết bị/browser.

Không hard-code September 2026.

Dùng JavaScript Date hoặc logic tương đương để:
- xác định hôm nay
- xác định thứ hiện tại
- tính ngày thứ Hai → Chủ nhật của tuần đó.

Highlight ngày hiện tại.

==================================================
10. LOGIC “GIỮ LỬA”
==================================================

Đây là logic chính của Today.

Một ngày CHỈ được tính là “Giữ lửa”
khi user đã hoàn thành TẤT CẢ habit được lên lịch cho ngày đó.

Ví dụ hôm nay có:

☑ Uống nước
☑ Đi bộ
☐ Đọc sách

→ CHƯA được tính giữ lửa.

Khi:

☑ Uống nước
☑ Đi bộ
☑ Đọc sách

→ ngày hôm nay chuyển thành trạng thái GIỮ LỬA 🔥.

Nếu hôm nay chỉ có 2 habit scheduled:
hoàn thành 2/2 → 🔥.

Không tính những habit không được scheduled cho ngày hôm đó.

Ví dụ:
Habit “Vận động” chỉ schedule T2-T4-T6.

Thứ Ba:
habit này KHÔNG được dùng để tính giữ lửa.

==================================================
11. VISUAL CỦA WEEKLY FIRE CALENDAR
==================================================

Thiết kế đơn giản, dễ hiểu.

Các trạng thái:

A. Completed day:
- hiển thị 🔥 hoặc visual tương đương
- pastel warm accent
- không quá game-like

B. Today chưa hoàn thành hết:
- highlight rõ hôm nay
- có thể dùng dot/circle active
- chưa hiển thị 🔥

C. Past day không hoàn thành:
- neutral/soft state
- KHÔNG dùng dấu X đỏ gây cảm giác thất bại

D. Future day:
- neutral/light state

Phong cách WellRise:
khuyến khích, không gây áp lực.

==================================================
12. DANH SÁCH HABIT HÔM NAY
==================================================

Ngay dưới Weekly Calendar:

Title:
“Hôm nay”

Subtitle có thể là:
“Mỗi bước nhỏ đều đáng giá.”

Hiển thị một danh sách/card các habit cần làm hôm nay.

Mỗi row/card gồm:

[checkbox] [icon] Habit name
                     time/reminder hoặc effort nếu có

Ví dụ:

○ 💧 Uống nước sau khi thức dậy
○ 🚶 Đi bộ 10 phút
○ 🌙 Đi ngủ trước 23:00

Khi click checkbox:
→ chuyển thành completed state.

Completed:
✓
text vẫn đọc rõ
có thể giảm opacity nhẹ nhưng KHÔNG làm quá mờ.

Không cần thanh progress lớn.

Có thể hiển thị text nhỏ:

“2/3 đã hoàn thành”

nhưng không sử dụng progress bar.

Khi habit cuối cùng được hoàn thành:
- cập nhật weekly fire calendar ngay lập tức
- hôm nay chuyển thành 🔥
- có thể hiển thị một micro celebration nhỏ:

“Bạn đã giữ lửa hôm nay 🔥”

Không cần animation quá phức tạp.

==================================================
13. LOGIC REAL-TIME / FRONTEND
==================================================

Tất cả phần này phải hoạt động trên frontend.

Sử dụng:
- React state
- JavaScript Date
- localStorage nếu cần

Persist ít nhất:
- selected goals
- selected pace
- reminder
- selected habits
- habit completion state theo ngày

Reload browser:
không được mất toàn bộ lựa chọn của người dùng.

Dữ liệu completion phải gắn theo ngày.

Ví dụ:

2026-09-14:
habit1 = true
habit2 = true

2026-09-15:
habit1 = false
habit2 = false

Không chỉ lưu một boolean global cho habit.

==================================================
14. BIỂU TƯỢNG THÔNG BÁO
==================================================

Hiện tại notification icon chưa hoạt động.

Hãy làm nó hoạt động.

Khi click icon:
→ mở Notification Panel / Notification Screen.

MVP chưa cần push notification thật.

Có thể dùng mock notification data.

Ví dụ:

“🌱 Đã đến giờ đi bộ 10 phút”

“🔥 Bạn còn 1 thói quen để giữ lửa hôm nay”

“🌙 Bài viết mới dành cho mục tiêu Giấc ngủ”

Panel cần có:
- title “Thông báo”
- list notification
- timestamp
- trạng thái đã đọc/chưa đọc
- back/close

Nếu có unread:
notification icon có một small badge/dot.

Không để icon click mà không phản hồi.

==================================================
15. FLOW CUỐI CÙNG
==================================================

Flow chính sau khi chỉnh phải là:

WELCOME
↓
GOALS
“Bạn muốn tập trung vào điều gì?”
↓
PACE
“Bạn muốn tiến bộ theo nhịp nào?”
↓
REMINDER
“Bạn muốn được nhắc khi nào?”
↓
SUGGESTED HABITS
“Đây là vài gợi ý dành cho bạn”
↓
User select habit
↓
“Thêm X thói quen”
↓
TODAY

TODAY:
Weekly Fire Calendar
↓
Habits scheduled today
↓
Complete all
↓
🔥 Fire day

==================================================
16. KHÔNG ĐƯỢC LÀM
==================================================

- Không tạo lại toàn bộ project.
- Không thay đổi brand WellRise.
- Không thêm Login/Register.
- Không giữ màn “Bạn dùng WellRise để làm gì?”
- Không hard-code lịch tuần.
- Không hard-code cùng recommendation cho mọi goal/pace.
- Không tự động coi tất cả suggested habit là habit của user.
- Không tính fire day nếu chưa hoàn thành đủ habit scheduled hôm đó.
- Không để notification icon chết.
- Không tạo progress bar mới.
- Không biến màn hình thành static mockup.
- Không phá các module Explore / Challenge / Profile hiện có nếu không liên quan.

==================================================
17. ACCEPTANCE CRITERIA
==================================================

Sau khi hoàn thành, tôi phải test được flow:

1. Mở app.
2. Welcome có illustration.
3. Không thấy Login/Register.
4. Nhấn “Bắt đầu thôi”.
5. Chọn “Ngủ ngon hơn”.
6. Chọn “Nhẹ nhàng”.
7. Chọn Reminder buổi tối.
8. Suggested Habits thay đổi phù hợp với Sleep + Gentle.
9. Tôi tích đúng 2 habit.
10. Nhấn “Thêm 2 thói quen”.
11. Today chỉ có đúng 2 habit đó.
12. Weekly calendar hiển thị đúng tuần hiện tại theo ngày thật.
13. Tick 1/2 habit → chưa có 🔥.
14. Tick 2/2 habit → hôm nay chuyển thành 🔥.
15. Reload trang → habit và trạng thái cơ bản vẫn còn.
16. Nhấn notification icon → notification panel mở.
17. Không có nút chính nào trong flow bị dead click.

Hãy sửa trực tiếp các component và navigation hiện tại để đạt đúng behaviour trên.
Không redesign các phần không liên quan.