Hãy cập nhật trực tiếp file thiết kế mobile app “Bình Minh” hiện tại dựa trên các màn hình đã có.

QUAN TRỌNG:
- KHÔNG thiết kế lại toàn bộ app từ đầu.
- Giữ nguyên visual identity hiện tại của Bình Minh:
  + nền kem/off-white
  + heading màu navy đậm
  + coral/red-orange là màu CTA và active state
  + pastel green/lavender/peach/yellow/cyan
  + card bo tròn mềm
  + shadow nhẹ
  + illustration thiên nhiên/bình minh nhẹ nhàng
  + cảm giác thân thiện, tích cực, không gây áp lực
- Giữ typography, icon style và cảm giác thiết kế hiện tại.
- Chuẩn hóa tất cả màn hình mobile chính về viewport 390 × 844 px.
- Không tạo mockup điện thoại có viền iPhone.
- Tạo UI frame thật, editable hoàn toàn trong Figma.
- Không flatten text, icon, card hoặc button thành ảnh.
- Sử dụng Auto Layout hợp lý.
- Tạo reusable components và variants cho các thành phần lặp lại.
- Giữ khoảng cách, radius, typography và màu nhất quán trên toàn app.

==================================================
1. SỬA BOTTOM NAVIGATION TOÀN APP
==================================================

Thay toàn bộ bottom navigation cũ:

Hôm nay
Khám phá
Thực hành
Cộng đồng
Chuyên gia

bằng đúng 5 tab sau:

1. Hôm nay
2. Khám phá
3. Thử thách
4. Nhóm
5. Cá nhân

Yêu cầu:
- Active tab dùng coral/red-orange.
- Inactive tab dùng gray/navy nhạt.
- Icon + label căn giữa.
- Bottom nav cố định dưới màn hình.
- Tạo 1 reusable component “BottomNav” với property/variant:
  active = today / explore / challenge / group / profile.

Không còn “Chuyên gia” là một bottom navigation item.

==================================================
2. HOME / HÔM NAY
==================================================

Giữ 3 trạng thái Home hiện tại nhưng sửa để đồng bộ với bottom navigation mới.

STATE 1 — Chưa có mục tiêu:
- “Chào mừng đến với Bình Minh 🌅”
- “Mỗi ngày là một khởi đầu mới.”
- Card hướng dẫn:
  “Bạn muốn thay đổi điều gì đầu tiên?”
- CTA chính: “Chọn mục tiêu”
- CTA phụ: “Xem gợi ý nhanh”
- Quick goals:
  Ngủ ngon hơn
  Uống đủ nước
  Vận động mỗi ngày
  Phát triển bản thân
- Section “Gợi ý cho người mới”
- Có các habit suggestion với nút +
- Giữ card giáo dục nhỏ ở cuối.

STATE 2 — Đã chọn mục tiêu nhưng chưa có thói quen:
- Header “Chào Minh 👋”
- Hiển thị mục tiêu đã chọn.
- Section:
  “Gợi ý dành riêng cho bạn”
- Habit suggestion cards dựa trên mục tiêu.
- CTA:
  “Tạo thói quen đầu tiên”

STATE 3 — Đang sử dụng bình thường:
- Header:
  “Chào buổi sáng, Minh! 👋”
- Progress:
  2/5 hoàn thành
  🔥 5 ngày liên tiếp
- Có progress ring hoặc progress bar nhưng tránh hiển thị quá nhiều thông tin trùng lặp.
- Danh sách habit hôm nay.
- Habit completed:
  dùng check màu xanh + nền nhẹ,
  KHÔNG cần gạch ngang quá mạnh.
- CTA:
  “+ Thêm thói quen”

Tất cả 3 state sử dụng bottom nav mới.

==================================================
3. MODULE KHÁM PHÁ
==================================================

Hãy sửa màn “Khám phá” hiện tại.

Hiện tại màn này quá tập trung vào category.
Cần biến nó thành một Explore Hub có personalization.

Cấu trúc mới:

HEADER
“Khám phá”
Subtitle:
“Hiểu đúng hơn. Bắt đầu dễ hơn.”

SEARCH
Search bar:
“Tìm về giấc ngủ, vận động, tinh thần...”

SECTION 1 — DÀNH CHO BẠN
Hiển thị dựa trên mục tiêu user đã chọn.

Ví dụ:
Article 1:
“Vì sao bạn vẫn mệt dù đã ngủ đủ?”
Giấc ngủ · 5 phút đọc

Article 2:
“Đi bộ 10 phút mỗi ngày có ích gì?”
Vận động · 4 phút đọc

Article 3:
“3 cách thư giãn trước khi ngủ”
Tinh thần · 5 phút đọc

Article card nên có:
- thumbnail
- category
- title
- summary ngắn
- reading time
- save/bookmark icon

SECTION 2 — KHÁM PHÁ THEO CHỦ ĐỀ
Dùng horizontal scroll chips/cards:

Giấc ngủ
Ăn uống
Vận động
Tinh thần
Phát triển bản thân
Cân bằng cuộc sống

Không cần hiển thị quá nhiều card lớn 2×2 như thiết kế cũ.

SECTION 3 — ĐƯỢC QUAN TÂM
3 article cards dạng vertical/list.

SECTION 4 — THỬ MỘT ĐIỀU NHỎ
Compact challenge card:

“7 ngày xây dựng giờ ngủ đều đặn”
Khoảng 10 phút/ngày
CTA:
“Xem thử thách →”

SECTION 5 — KHI BẠN MUỐN ĐƯỢC HỖ TRỢ THÊM
Expert preview card:

Avatar
Tên chuyên gia
Lĩnh vực
Hình thức hỗ trợ

CTA:
“Xem chuyên gia →”

Chuyên gia nằm BÊN TRONG Khám phá,
không còn ở bottom navigation.

==================================================
4. THÊM CÁC MÀN CON CHO KHÁM PHÁ
==================================================

Tạo thêm các editable mobile screens:

A. Search Results
- back arrow
- search input
- query example: “giấc ngủ”
- filter:
  Tất cả / Bài viết / Chuyên gia
- article results

B. Topic Detail
Ví dụ:
“Giấc ngủ”

Có:
- short description
- chips:
  Mới nhất / Phổ biến / Dễ bắt đầu
- article list
- related challenge CTA

C. Article Detail
Ví dụ title:
“5 điều giúp bạn xây dựng giờ ngủ đều đặn”

Hiển thị:
- title
- author
- ngày rà soát
- thời gian đọc
- cover
- nội dung
- save
- share
- button/card:
  “Xem căn cứ”
- cuối bài:
  “Bạn muốn thử áp dụng?”
- related challenge
- CTA:
  “Xem thử thách liên quan”

D. Evidence Detail
Title:
“Nguồn & bằng chứng”

Hiển thị:
- nhận định đang được giải thích
- “Mức căn cứ: Có căn cứ tương đối rõ”
- không chỉ dùng màu, phải có text label
- Nguồn chính
- Áp dụng cho
- Giới hạn
- Ngày kiểm tra
- Người thẩm định
- CTA:
  “Xem nguồn gốc”

E. Expert List
Expert nằm trong Explore.

Header:
“Chuyên gia”
Subtitle:
“Khi bạn muốn được hỗ trợ thêm”

Expert card gồm:
- avatar
- tên
- lĩnh vực
- kinh nghiệm ngắn
- hình thức hỗ trợ
- các trạng thái xác minh tách biệt:
  “Danh tính đã kiểm”
  “Bằng cấp đã kiểm”
  “Phương pháp đã rà soát”

KHÔNG dùng một badge chung kiểu “Verified Expert”.

KHÔNG hiển thị rating giả như:
4.9 / 312 đánh giá
nếu dữ liệu này chưa có thật.

CTA thay “Đặt lịch” bằng:
“Xem hồ sơ”
hoặc
“Yêu cầu kết nối”

==================================================
5. MODULE THỬ THÁCH
==================================================

Đổi tên toàn bộ “Thực hành” → “Thử thách”.

Bottom nav label phải là:
“Thử thách”

Màn chính không nên chỉ có một challenge đang làm.
Tạo các state:

STATE A — Chưa tham gia challenge
Header:
“Thử thách”

Section:
“Dành cho bạn”

Ví dụ cards:
“7 ngày ngủ đều đặn”
“7 ngày uống đủ nước”
“21 ngày vận động mỗi ngày”

Mỗi card:
- title
- duration
- goal/category
- estimated effort
- CTA:
  “Xem thử thách”

STATE B — Đang tham gia
Giữ concept hiện tại:
- challenge title
- ngày hiện tại
- progress
- lịch 1–N
- CTA:
  “Tiếp tục hôm nay”

STATE C — Hoàn thành
- congratulation state
- số ngày hoàn thành
- summary
- CTA:
  “Xem hành trình”
  “Thử thử thách khác”

STATE D — Đã dừng
- không dùng wording tiêu cực
- CTA:
  “Bắt đầu lại”
  “Chọn thử thách khác”

==================================================
6. MODULE NHÓM
==================================================

Đổi:
“Cộng đồng” → “Nhóm”

Không mở trực tiếp bằng một public social feed như hiện tại.

Thiết kế màn landing:

Header:
“Nhóm”

Section:
“Nhóm của bạn”

Ví dụ:
“Sống năng động mỗi ngày”
“Ngủ tốt hơn cùng nhau”

Card gồm:
- group name
- short description
- member count
- activity status
- CTA:
  “Vào nhóm”

Section:
“Khám phá nhóm”

Các group suggestion cards.

Khi user vào Group Detail mới hiển thị feed.

GROUP DETAIL:
- group name
- description
- rules
- members
- challenge chung nếu có
- post feed

Post states:
- Đã duyệt
- Đang chờ duyệt
- Không được duyệt

User chỉ thấy trạng thái moderation của bài mình một cách nhẹ nhàng.

Giữ tone hỗ trợ, không thiết kế giống mạng xã hội cạnh tranh.

==================================================
7. MODULE CÁ NHÂN
==================================================

Tạo tab mới:
“Cá nhân”

Màn Profile/Cá nhân gồm:

Header:
Avatar
Minh
“Thành viên Bình Minh”

Section:
“Hành trình của bạn”

Hiển thị:
- Mục tiêu hiện tại
- số thói quen đang theo
- thử thách đã hoàn thành
- streak

Menu:
“Mục tiêu của tôi”
“Thói quen của tôi”
“Bài đã lưu”
“Lịch sử thử thách”
“Thông báo”
“Quyền riêng tư”
“Cài đặt”

Có CTA nhẹ:
“Chỉnh sửa hồ sơ”

==================================================
8. COMPONENT SYSTEM
==================================================

Hãy chuyển các thành phần lặp lại thành reusable components:

BottomNav
PrimaryButton
SecondaryButton
SearchBar
GoalCard
HabitCard
HabitRow
ArticleCard
TopicChip
ChallengeCard
ExpertCard
GroupCard
ProfileMenuRow
ProgressBar
ProgressRing
StatusTag
EmptyState
LoadingSkeleton

Tạo variants cho các state:

Button:
default / pressed / disabled

Habit:
default / completed

Article:
default / saved

Topic:
default / selected

Challenge:
default / active / completed

StatusTag:
neutral / success / warning

BottomNav:
today / explore / challenge / group / profile

==================================================
9. FRAME NAMING
==================================================

Đổi tên các frame chung chung như:
“App”
“Container”
“Màn hình chính 2”
“Màn hình chính 3”

thành semantic names.

Ví dụ:

Onboarding/Goals/Default
Onboarding/Goals/Selected
Onboarding/Login
Home/NoGoal
Home/GoalNoHabit
Home/Active
Explore/Landing
Explore/Search
Explore/Topic/Sleep
Explore/ArticleDetail
Explore/Evidence
Explore/Experts
Challenge/Landing
Challenge/Active
Challenge/Completed
Group/Landing
Group/Detail
Profile/Main

Giữ layer con có tên dễ hiểu cho FE handoff.

==================================================
10. INTERACTION / PROTOTYPE
==================================================

Tạo prototype navigation cơ bản:

Bottom navigation:
Hôm nay → Home
Khám phá → Explore
Thử thách → Challenge
Nhóm → Group
Cá nhân → Profile

Explore:
search → Search Results
topic → Topic Detail
article → Article Detail
“Xem căn cứ” → Evidence Detail
“Xem chuyên gia” → Expert List
challenge card → Challenge Detail

Home:
“Chọn mục tiêu” → Goal Selection
“+ Thêm thói quen” → Add Habit
habit checkbox → completed state

Challenge:
“Xem thử thách” → Challenge Detail
“Bắt đầu thử thách” → Active Challenge
“Tiếp tục hôm nay” → Current Day Task

Group:
Group card → Group Detail

Profile:
menu items → corresponding placeholder screens

==================================================
11. RESPONSIVE / FE HANDOFF
==================================================

Primary viewport:
390 × 844

Giữ:
- horizontal padding khoảng 20–24 px
- card spacing thống nhất
- touch target ít nhất khoảng 44 px
- bottom nav không che nội dung scroll
- content scroll độc lập phía trên bottom nav

Tất cả màn phải sẵn sàng để dev FE triển khai:
- không overlap bất thường
- không dùng absolute positioning nếu Auto Layout có thể giải quyết
- không tạo khoảng trắng giả để căn layout
- text phải resize hợp lý
- card phải hug/fill đúng
- scrolling behavior rõ ràng

==================================================
MỤC TIÊU CUỐI CÙNG
==================================================

Sau khi chỉnh, app Bình Minh phải có một information architecture thống nhất:

Hôm nay
→ thói quen cá nhân và việc cần làm hôm nay

Khám phá
→ kiến thức, bài viết, nguồn/bằng chứng và chuyên gia

Thử thách
→ chương trình có thời lượng và tiến độ

Nhóm
→ nhóm cộng đồng có điều phối

Cá nhân
→ hồ sơ, mục tiêu, dữ liệu cá nhân và cài đặt

Ưu tiên sửa các màn hiện có trước, sau đó mới bổ sung màn còn thiếu.
Không xóa các frame cũ ngay; hãy đặt phiên bản mới sang một khu vực/page rõ ràng để tôi có thể so sánh trước khi thay thế.