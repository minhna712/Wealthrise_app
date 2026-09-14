Hãy tiếp tục chỉnh sửa dự án app hiện tại, giữ nguyên visual style, màu sắc, typography, spacing, component system và kích thước mobile frame đang có. Không redesign toàn bộ giao diện. Tập trung vào việc hoàn thiện navigation và interaction của các module sau.

### 1. MODULE NHÓM

#### A. Nút “Xem tất cả”

Hiện tại nút **“Xem tất cả”** trong khu vực Nhóm chưa hoạt động.

Hãy làm cho nút này có thể bấm được.

Khi người dùng nhấn **“Xem tất cả”**:

* Điều hướng tới màn hình **Danh sách nhóm / Tất cả nhóm**
* Hiển thị các nhóm người dùng:

  * Đã tham gia
  * Có thể quan tâm / đề xuất
* Mỗi nhóm nên có:

  * Avatar hoặc ảnh nhóm
  * Tên nhóm
  * Số thành viên
  * Mô tả ngắn
  * Trạng thái “Đã tham gia” hoặc nút “Tham gia”
* Có thanh tìm kiếm nhóm ở phía trên.
* Có nút Back để quay lại màn trước.

#### B. Mở bài viết trong nhóm

Hiện tại khi nhấn vào một bài viết trong nhóm, hãy điều hướng tới màn hình **Chi tiết bài viết**.

Màn hình Chi tiết bài viết bao gồm:

**Header**

* Nút Back
* Tên nhóm
* Menu “…” nếu cần

**Thông tin bài viết**

* Avatar người đăng
* Tên người đăng
* Thời gian đăng
* Nội dung bài viết đầy đủ
* Hình ảnh nếu bài viết có ảnh
* Reaction/Like count nếu có

**Thanh hành động**

* Thích
* Bình luận
* Chia sẻ

**Phần bình luận**

* Danh sách comment
* Avatar người comment
* Tên
* Nội dung comment
* Thời gian
* Reply nếu cần
* Ô nhập “Viết bình luận…”
* Nút gửi comment

Khi nhấn vào ô bình luận, người dùng có thể nhập nội dung và gửi comment.

### 2. CHỨC NĂNG CHIA SẺ BÀI VIẾT

Hiện tại nút **Chia sẻ** trên các bài viết chưa hoạt động.

Hãy làm nút Share có interaction.

Khi nhấn Share, mở một **Bottom Sheet** từ dưới lên.

Bottom Sheet gồm các lựa chọn:

* Chia sẻ vào nhóm
* Gửi cho bạn bè
* Sao chép liên kết
* Chia sẻ qua ứng dụng khác

Có nút:

* “Hủy”

Với prototype hiện tại, không cần tích hợp API chia sẻ thật nhưng tất cả lựa chọn phải có trạng thái tương tác.

Ví dụ:

* “Sao chép liên kết” → hiện toast “Đã sao chép liên kết”
* “Gửi cho bạn bè” → mở danh sách bạn bè
* “Chia sẻ vào nhóm” → mở danh sách nhóm
* “Chia sẻ qua ứng dụng khác” → mô phỏng native share sheet

Áp dụng chức năng Share cho tất cả bài viết trong app, không chỉ riêng bài trong nhóm.

### 3. MODULE THỬ THÁCH

Hiện tại nút **“Xem tất cả”** tại phần Thử thách chưa hoạt động.

Hãy làm nút này có thể bấm.

Khi nhấn:
→ Điều hướng tới màn hình **Tất cả thử thách**.

Màn hình này gồm:

* Header: “Thử thách”
* Nút Back
* Search nếu phù hợp

Có thể chia thành các tab:

* Đang tham gia
* Khám phá
* Đã hoàn thành

Mỗi Challenge Card có:

* Tên thử thách
* Hình ảnh/icon
* Mô tả ngắn
* Thời gian thử thách
* Số người tham gia
* Tiến độ nếu người dùng đang tham gia
* CTA:

  * “Tham gia”
  * hoặc “Tiếp tục”

Khi nhấn một challenge:
→ mở màn hình **Chi tiết thử thách**.

### 4. MODULE CÁ NHÂN

Đơn giản hóa module Cá nhân.

Không cần biến Profile thành một social profile phức tạp.

Chỉ giữ các nội dung chính sau:

#### A. Thông tin người dùng

Ở đầu màn hình:

* Avatar
* Tên
* Thông tin cá nhân ngắn nếu cần
* Nút “Chỉnh sửa hồ sơ”

#### B. Bài đã lưu

Menu:
**Bài viết đã lưu**

Khi nhấn:
→ mở màn hình danh sách tất cả các bài viết người dùng đã Save.

Các bài vẫn sử dụng cùng Post Card component của app.

#### C. Lịch sử thử thách

Menu:
**Lịch sử thử thách**

Khi nhấn:
→ mở màn hình hiển thị:

* Thử thách đang tham gia
* Thử thách đã hoàn thành
* Ngày tham gia
* Kết quả/progress

#### D. Quyền riêng tư

Menu:
**Quyền riêng tư**

Có thể chứa:

* Hồ sơ công khai / riêng tư
* Ai có thể xem hoạt động
* Ai có thể gửi lời mời nhóm
* Ai có thể gửi tin nhắn

Sử dụng toggle switch.

#### E. Cài đặt

Menu:
**Cài đặt**

Có thể chứa:

* Thông báo
* Ngôn ngữ
* Giao diện
* Tài khoản
* Trợ giúp
* Đăng xuất

### 5. QUY TẮC INTERACTION

Tất cả thành phần có vẻ là button hoặc card phải có trạng thái tương tác.

Bao gồm:

* Xem tất cả
* Post Card
* Challenge Card
* Group Card
* Like
* Comment
* Share
* Save
* Back
* Search
* Join Group
* Join Challenge

Không tạo button chỉ mang tính trang trí mà không có interaction.

Khi nhấn card:
→ mở màn hình Detail tương ứng.

Khi nhấn Back:
→ quay về đúng màn hình trước đó.

Khi thực hiện action thành công:
→ dùng feedback nhẹ như:

* Toast
* Snackbar
* Icon state change

Ví dụ:

* Save → icon bookmark chuyển sang trạng thái active
* Like → trạng thái liked
* Copy link → toast “Đã sao chép liên kết”
* Join challenge → button đổi thành “Đang tham gia”

### 6. UX/UI

Giữ thiết kế:

* Mobile-first
* Hiện đại
* Tối giản
* Thân thiện
* Không quá nhiều text
* Không tạo quá nhiều card lồng nhau
* Khoảng cách rõ ràng
* Touch target đủ lớn
* Bottom sheet dùng cho quick actions
* Full screen dùng cho nội dung cần đọc nhiều

Đặc biệt:
**Module Cá nhân cần đơn giản và thiên về quản lý tài khoản, không biến thành một mạng xã hội cá nhân.**

### 7. YÊU CẦU CUỐI

Hãy tạo đầy đủ các màn hình và interaction cần thiết để có thể chạy prototype end-to-end.

Không tạo mockup điện thoại có viền iPhone.

Chỉ tạo UI mobile frame thật theo đúng viewport hiện tại để tôi có thể tiếp tục chỉnh sửa trong Figma.

Không thay đổi những màn hình đã có nếu không cần thiết.

Ưu tiên tái sử dụng component hiện tại thay vì tạo component mới có style khác.
