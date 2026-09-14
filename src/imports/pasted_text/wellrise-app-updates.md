Hãy tiếp tục CHỈNH SỬA TRỰC TIẾP project WellRise hiện tại.

QUAN TRỌNG:
- KHÔNG redesign toàn bộ app.
- Giữ nguyên brand WellRise:
  + background kem/off-white
  + navy heading
  + coral/orange CTA
  + pastel green / lavender / peach / blue
  + card mềm, bo tròn
  + shadow nhẹ
  + typography Nunito
  + cảm giác nhẹ nhàng, hiện đại, tích cực, đáng tin cậy.
- Giữ viewport 390 × 844.
- Ưu tiên sửa component/screen hiện có.
- Tất cả interaction dưới đây phải hoạt động ở frontend.
- Không thêm lại Login/Register.
- Không phá flow Today, Challenge, Profile hiện tại nếu không liên quan.

==================================================
1. MODULE NHÓM — ĐƠN GIẢN HÓA INTERACTION
==================================================

Trong toàn bộ module Nhóm:

BỎ hoàn toàn:
- nút Comment / Bình luận
- số lượng comment
- nút Share / Chia sẻ
- ShareSheet liên quan tới post trong nhóm
- ô nhập comment
- comment list trong post detail nếu post đó được mở từ module Nhóm

CHỈ GIỮ:
- nút Tim / Like
- số lượt thích

Mỗi post card chỉ nên có một interaction ở phần dưới:

[♡ 12]

Khi bấm:
- heart chuyển sang filled coral/red
- số like tăng +1

Bấm lại:
- heart trở về outline
- số like giảm lại

Interaction phải hoạt động thật ở frontend.

Không cần social interaction phức tạp cho MVP.

Nếu người dùng bấm vào nội dung post:
- có thể mở Post Detail để đọc nội dung đầy đủ
- nhưng Post Detail cũng KHÔNG hiển thị Comment và Share
- chỉ giữ nút Like.

Thiết kế feed nên sạch, nhẹ, ít nút.

==================================================
2. SETTINGS — SỬA TOÀN BỘ INTERACTION
==================================================

Hiện tại một số phần trong Settings chưa hoạt động đúng.

Hãy rà lại toàn bộ Settings.

A. THÔNG BÁO

Các toggle:
- Nhắc nhở thói quen
- Cập nhật thử thách
- Hoạt động cộng đồng

phải:
- bật/tắt được
- state thay đổi rõ ràng
- lưu vào localStorage
- reload vẫn giữ lựa chọn.

Nếu toggle “Nhắc nhở thói quen” tắt:
- UI thể hiện rõ rằng reminder đã bị tắt.

MVP chưa cần push notification thật.

B. NGÔN NGỮ

Hiện tại nút Tiếng Việt / English chỉ đổi selected state.

Không được giả vờ rằng toàn app đã đổi ngôn ngữ nếu chưa implement localization.

Cho MVP:
- hoặc làm localization thật cho các label chính
- hoặc giữ chỉ “Tiếng Việt” và bỏ English.

Ưu tiên phương án:
CHỈ giữ Tiếng Việt trong MVP để tránh interaction giả.

C. GIAO DIỆN

Hiện tại Light / Dark chỉ đổi state nhưng không thay đổi UI.

Nếu chưa implement dark mode toàn app:
→ BỎ lựa chọn Dark.

Chỉ để:
“Giao diện sáng”

hoặc bỏ hẳn section Theme.

Không để control nhìn như hoạt động nhưng thực tế không ảnh hưởng gì.

D. TRỢ GIÚP & HỖ TRỢ

Làm row “Trợ giúp & hỗ trợ” có thể click.

Khi bấm:
→ mở một screen/modal đơn giản gồm:

Trợ giúp & hỗ trợ

- Câu hỏi thường gặp
- Báo lỗi
- Góp ý cho WellRise

MVP chưa cần gửi form thật.

Khi nhấn một mục:
hiển thị panel/modal phù hợp.

E. VỀ ỨNG DỤNG

Row “Về WellRise” phải click được.

Mở screen:

WellRise
Phiên bản 1.0.0

“Mỗi ngày là một khởi đầu mới.”

Nội dung ngắn:
- WellRise giúp người dùng xây dựng thói quen lành mạnh
- nội dung có căn cứ
- không thay thế tư vấn y tế chuyên môn.

F. BỎ “ĐĂNG XUẤT”

Vì MVP hiện tại không có Login/Register/Auth UI.

XÓA hoàn toàn nút:
“Đăng xuất”

Không để bất kỳ account action nào không còn phù hợp.

==================================================
3. REDESIGN MODULE KHÁM PHÁ
==================================================

Màn Khám phá hiện tại chưa có hierarchy tốt:
- quá nhiều card trắng giống nhau
- các topic card nhỏ
- thiếu focal point
- nội dung nhìn giống danh sách hơn là trải nghiệm khám phá.

Hãy redesign riêng màn Khám phá nhưng GIỮ:
- top-level tab:
  Khám phá | Dành cho bạn | Chuyên gia
- search
- topic
- article
- evidence
- expert data hiện tại.

Không thay đổi logic dữ liệu chính.

==================================================
4. HEADER KHÁM PHÁ
==================================================

Header:

Khám phá

Subtitle:
“Kiến thức đáng tin cậy cho một cuộc sống tốt hơn.”

hoặc câu ngắn tương tự.

Ngay dưới header:
giữ segmented tabs:

Khám phá
Dành cho bạn
Chuyên gia

Thiết kế tabs tinh tế hơn:
- nền rất nhẹ
- active tab rõ
- không quá giống button group kỹ thuật.

==================================================
5. SEARCH
==================================================

Search bar đặt ngay dưới tabs.

Thiết kế:
- full width
- 48px height
- bo tròn 14–16px
- icon search
- placeholder:
  “Tìm về giấc ngủ, vận động, dinh dưỡng…”

Có thể thêm filter icon nhỏ bên phải nếu hợp lý,
nhưng MVP chưa cần filter logic phức tạp.

==================================================
6. FEATURED / HERO ARTICLE
==================================================

Thêm một section nổi bật ngay sau Search.

Title:
“Dành cho bạn hôm nay”
hoặc
“Nổi bật hôm nay”

Chỉ hiển thị 1 featured article lớn.

Card nên khác hẳn các card còn lại.

Layout gợi ý:

┌───────────────────────────────┐
│  large soft illustration     │
│                              │
│  Giấc ngủ                    │
│  Vì sao bạn vẫn mệt dù       │
│  đã ngủ đủ?                  │
│                              │
│  5 phút đọc · Có căn cứ      │
└───────────────────────────────┘

Yêu cầu:
- card cao khoảng 180–220px
- có image/illustration hoặc gradient visual nhẹ
- title lớn hơn
- topic badge
- reading time
- badge “Có căn cứ” nếu có evidence
- toàn card click được.

Không dùng emoji quá lớn thay cho toàn bộ hình ảnh.

Nếu không có ảnh:
dùng gradient + abstract botanical/wellness illustration nhẹ.

==================================================
7. KHÁM PHÁ THEO CHỦ ĐỀ
==================================================

Không dùng grid 3 cột nhỏ như hiện tại.

Thay thành horizontal scroll hoặc grid 2 cột rộng hơn.

Ưu tiên horizontal cards:

[ 🌙 Giấc ngủ ]
[ 🏃 Vận động ]
[ 🥗 Dinh dưỡng ]
[ 🧘 Tinh thần ]

Mỗi card:
- khoảng 110–135px width
- màu pastel riêng theo topic
- icon/illustration
- label rõ
- không quá nhiều shadow.

Các topic có thể scroll ngang.

Điều này giúp màn hình nhẹ và hiện đại hơn.

==================================================
8. “ĐƯỢC QUAN TÂM”
==================================================

Section:

Được quan tâm                        Xem tất cả >

Không dùng toàn bộ card giống nhau.

Mỗi article item nên có:
- thumbnail/visual ở trái khoảng 80×80
- topic nhỏ
- title 2–3 dòng tối đa
- reading time
- optional evidence badge

Layout:

┌────────┬──────────────────────┐
│ image  │ Giấc ngủ            │
│        │ Vì sao...            │
│        │ 5 phút · Có căn cứ   │
└────────┴──────────────────────┘

Giảm shadow.
Dùng border / spacing tinh tế hơn.

==================================================
9. TAB “DÀNH CHO BẠN”
==================================================

Tab này phải thể hiện personalization rõ hơn.

Ở đầu:
“Dựa trên mục tiêu của bạn”

Hiển thị goal chips mà user đã chọn.

Sau đó có:
1. “Ưu tiên cho bạn”
2. “Có thể bạn quan tâm”

Không trộn tất cả article vào cùng một danh sách.

Articles có goal matching userGoals:
→ nằm trong “Ưu tiên cho bạn”.

Các article khác:
→ nằm trong “Có thể bạn quan tâm”.

Card nên đồng bộ với visual mới của Explore.

Nếu user chưa có goal:
hiển thị empty state nhẹ:
“Chọn mục tiêu để WellRise cá nhân hóa nội dung cho bạn.”

==================================================
10. TAB CHUYÊN GIA
==================================================

Giữ Expert tab nhưng làm nhẹ hơn.

Hiện tại mỗi expert card quá nhiều badge và text.

Simplify mỗi expert card:

Avatar
Tên
Chuyên môn
1 dòng mô tả
2 verification badges quan trọng
CTA:
“Xem hồ sơ”

BỎ hoặc giảm:
- quá nhiều badge
- block “Hình thức hỗ trợ” quá lớn
- nhiều CTA ngang nhau.

Chỉ giữ một CTA chính.

Nếu “Yêu cầu kết nối” chưa có logic thật:
→ KHÔNG hiển thị nút đó.

Không để dead button.

==================================================
11. HỆ THỐNG CARD KHÁM PHÁ
==================================================

Tạo 3 cấp visual hierarchy:

LEVEL 1:
Featured article
- lớn
- nổi bật nhất

LEVEL 2:
Topic cards
- pastel
- visual

LEVEL 3:
Article rows
- compact
- ít shadow

Không để tất cả card cùng:
- màu trắng
- shadow
- chiều cao giống nhau.

Mục tiêu:
màn Explore phải có nhịp thị giác rõ.

==================================================
12. INTERACTION
==================================================

Tất cả phải hoạt động:

- segmented tab
- search
- topic card
- featured article
- article row
- Xem tất cả
- expert filter
- expert profile nếu có screen tương ứng.

Không tạo CTA chưa có destination.

Nếu chưa có screen:
bỏ CTA đó khỏi MVP.

==================================================
13. ACCEPTANCE CRITERIA
==================================================

Sau khi chỉnh:

MODULE NHÓM
- không còn comment icon
- không còn comment count
- không còn share
- chỉ còn Like
- Like hoạt động.

SETTINGS
- không còn Logout
- không có fake Dark mode
- không có fake localization
- notification toggles hoạt động và persist
- Help hoạt động
- About hoạt động.

EXPLORE
- có hero/featured article
- topic không còn grid 3 cột chật chội
- hierarchy rõ
- ít card trắng giống nhau
- ít shadow hơn
- visual hiện đại hơn
- vẫn đúng brand WellRise
- Dành cho bạn thể hiện personalization rõ
- Chuyên gia đơn giản hơn
- không có dead button.

Hãy sửa trực tiếp component hiện tại.
Không tạo project mới.