Hãy tiếp tục chỉnh sửa trực tiếp project mobile app hiện tại.

## QUAN TRỌNG

* KHÔNG tạo lại toàn bộ app từ đầu.
* Giữ nguyên flow, navigation và các màn hình đã có nếu không được yêu cầu thay đổi.
* Chỉ tập trung vào:

  1. Redesign **màn hình bắt đầu / Welcome Screen**
  2. Chuẩn hóa visual identity theo thương hiệu **WellRise**
  3. Hoàn thiện interaction **Evidence / Có căn cứ → Thẻ bằng chứng**
* Giữ nguyên viewport mobile hiện tại.
* Không tạo mockup điện thoại có viền iPhone.
* UI phải editable, responsive và có thể tiếp tục phát triển thành frontend thật.
* Ưu tiên reusable components và Auto Layout.
* Không flatten UI thành ảnh.

---

# 1. BRAND IDENTITY MỚI — WELLRISE

Sử dụng logo WellRise tôi đã cung cấp làm logo chính.

Logo có hình tượng:

* bình minh / mặt trời mọc
* đường chân trời
* chiếc lá
* chuyển động đi lên
* cảm giác khởi đầu mới, phát triển và sống tốt hơn

Không tự thiết kế lại logo.
Không thay đổi cấu trúc logo.
Không thêm icon khác vào logo.

## Brand name

**WellRise**

## Tagline

**Sống tốt hơn, bắt đầu từ hôm nay.**

---

# 2. HỆ MÀU CHÍNH

Áp dụng hệ màu thương hiệu sau một cách có chủ đích:

### Lavender

`#C8B6E2`
Vai trò:

* reflection
* calm
* mental wellbeing
* secondary soft surfaces

### Peach pink

`#F4A7A2`
Vai trò:

* emotional highlights
* community
* soft cards

### Coral orange — PRIMARY

`#F28C64`

Đây là màu chính của thương hiệu.

Dùng cho:

* CTA chính
* selected states
* active navigation
* primary highlights
* progress
* important actions

### Coral red

`#D95C5C`

Chỉ dùng có chọn lọc cho:

* điểm nhấn mạnh
* cảnh báo nhẹ
* evidence uncertainty
* quan trọng

KHÔNG phủ màu đỏ trên diện rộng.

### Sage green

`#7B987E`

Dùng cho:

* healthy actions
* success
* completed state
* verified / known information
* progress tích cực

### Warm cream

`#FFF8F4`

Đây là background chính của app.

Không sử dụng pure white làm toàn bộ background.

### Charcoal

`#5F6368`

Dùng cho:

* body text
* neutral icon
* secondary text
* information hierarchy

Heading có thể dùng charcoal rất đậm hoặc dark navy-charcoal để tăng contrast.

---

# 3. NGUYÊN TẮC SỬ DỤNG MÀU

Rất quan trọng:

KHÔNG sử dụng tất cả màu cùng lúc trên mỗi màn hình.

Mỗi screen chỉ nên có:

* Warm cream làm nền
* 1 primary accent
* tối đa 1–2 supporting colors

App phải tạo cảm giác như:

**một hành trình từ bình minh đến một ngày mới**

chứ không giống:
**một bảng màu pastel nhiều màu rời rạc**.

Visual keywords:

* sunrise
* wellbeing
* calm confidence
* trustworthy
* evidence-based
* warm
* optimistic
* premium
* human
* modern

---

# 4. REDESIGN MÀN HÌNH BẮT ĐẦU

Thay thế thiết kế Welcome / Onboarding Screen đầu tiên hiện tại bằng một màn hình mới theo brand WellRise.

Mục tiêu của màn này:

Ngay trong 3 giây đầu, người dùng phải hiểu:

**WellRise là một người bạn giúp họ sống tốt hơn từng ngày bằng những thay đổi nhỏ, thực tế và đáng tin cậy.**

Không biến màn này thành màn chứa quá nhiều thông tin.

---

## BỐ CỤC ĐỀ XUẤT

### A. Background

Background:
`#FFF8F4`

Có thể thêm rất nhẹ một sunrise glow / radial gradient phía trên:

Peach → Coral → transparent

Opacity thấp.

Không tạo hình minh họa phức tạp.

Có thể sử dụng chính các đường cong lấy cảm hứng từ logo làm decorative background shapes.

Ví dụ:

* một đường cong coral rất mờ phía trên
* một vùng sage green rất nhẹ ở góc dưới
* gradient mềm, không quá rõ

---

## B. Logo area

Đặt logo WellRise ở vùng upper third.

Không để logo quá nhỏ.

Có thể sử dụng:

Logo symbol
+
Wordmark **WellRise**

Bên dưới:

**Sống tốt hơn, bắt đầu từ hôm nay.**

Logo phải có đủ breathing space.

Không đặt logo trong card.

Không thêm vòng tròn phía sau logo.

---

## C. Hero message

Bên dưới logo, tạo headline chính:

**Mỗi ngày tốt hơn một chút.**

Typography:

* Bold
* khoảng 30–34px
* tối đa 2 dòng
* dark charcoal / navy-charcoal

Subtext:

**Xây dựng thói quen lành mạnh, khám phá kiến thức đáng tin cậy và tiến bộ theo nhịp của riêng bạn.**

Khoảng 15–16px.

Không dài quá 3 dòng.

Text alignment có thể center nhưng cần giữ cảm giác trưởng thành.

---

# 5. HERO VISUAL

Không dùng hình người hoạt hình.

Thay bằng một abstract sunrise visual lấy cảm hứng trực tiếp từ logo.

Có thể gồm:

* một vòng cung coral/orange
* một vòng cung peach
* một đường chân trời
* một chiếc lá sage green
* gradient mềm

Visual cần giống “brand extension” của logo chứ không phải một illustration khác.

Kích thước khoảng 180–220px.

Không chiếm quá nhiều không gian.

Có thể animate nhẹ trong prototype:

* sunrise shape fade/slide upward
* duration 400–600ms
* subtle only

---

# 6. TRUST MESSAGE

Trước CTA, thêm một dòng nhỏ:

✓ **Kiến thức có căn cứ**
✓ **Tiến bộ theo nhịp của bạn**

Có thể thể hiện dưới dạng 2 mini badges hoặc 2 dòng inline.

Không tạo card lớn.

Màu:

* sage green cho verified/evidence
* charcoal cho text

Mục tiêu là ngay màn đầu người dùng hiểu đây không chỉ là app habit tracker.

---

# 7. CTA

Primary CTA:

**Bắt đầu hành trình**

Full-width button.

Background:
`#F28C64`

Text:
white

Height:
52–56px

Border radius:
16–18px

Không gradient quá mạnh.

Pressed state:
slightly darker.

Khi nhấn:
→ tiếp tục flow onboarding hiện tại.

Bên dưới CTA có thể có secondary text:

**Đã có tài khoản? Đăng nhập**

Không cần button lớn thứ hai.

“Đăng nhập” dùng coral orange.

---

# 8. VISUAL HIERARCHY MÀN ĐẦU

Thứ tự thị giác:

1. Logo WellRise
2. Hero visual
3. “Mỗi ngày tốt hơn một chút.”
4. Supporting text
5. Trust message
6. CTA “Bắt đầu hành trình”
7. Đăng nhập

Không thêm:

* nhiều card
* nhiều icon
* nhiều statistic
* nhiều option

Màn đầu phải rất sạch.

---

# 9. TYPOGRAPHY

Tiếp tục dùng font hiện tại nếu phù hợp, ưu tiên **Nunito** để giữ consistency.

Hierarchy:

### Hero

30–34px
800 / Extra Bold

### Section heading

20–24px
700–800

### Body

15–16px
500–600

### Caption

12–13px

Tránh body text quá nhạt.

Accessibility:
đảm bảo contrast đủ rõ trên nền cream.

---

# 10. COMPONENT EVIDENCE / “CÓ CĂN CỨ”

Trong các bài viết có nội dung được đánh dấu:

**Có căn cứ**

hoặc

**Evidence**

khi người dùng nhấn vào nội dung này:

→ mở màn hình **Thẻ bằng chứng / Evidence Card**.

Không chỉ mở danh sách nguồn đơn giản như hiện tại.

---

# 11. THẺ BẰNG CHỨNG

Thiết kế theo reference image tôi đã cung cấp.

Không copy y nguyên bố cục desktop.

Hãy chuyển design language đó thành một **mobile Evidence Detail Screen** phù hợp viewport app.

Mục tiêu:

Người dùng phải hiểu nhanh:

1. Đang nói về vấn đề gì?
2. Tuyên bố là gì?
3. Độ chắc chắn của bằng chứng đến đâu?
4. Khoa học đã biết gì?
5. Chưa biết gì?
6. Có lưu ý an toàn không?
7. Nguồn ở đâu?

---

# 12. EVIDENCE DETAIL — MOBILE STRUCTURE

## Header

Top navigation:

← Back

Title:
**Thẻ bằng chứng**

Có thể thêm icon leaf/evidence nhỏ.

Không hiển thị bottom navigation tại màn evidence detail.

---

## Brand header nhỏ

Ở đầu nội dung có thể dùng logo symbol WellRise nhỏ.

Label:

**KIẾN THỨC HÔM NAY
CHO MỘT BẠN TỐT HƠN NGÀY MAI**

Typography nhỏ, letter spacing nhẹ.

Không để chiếm quá nhiều diện tích.

---

## Main title

**Thẻ bằng chứng**

Có thể thêm decorative leaf shape lấy từ brand.

Bên dưới:

**Thông tin đáng tin cậy · Lựa chọn sáng suốt hơn**

---

# 13. EVIDENCE CONTENT

### Card 1 — Chủ đề

Label:
**Chủ đề**

Ví dụ:
**Thiền chánh niệm**

Icon nhẹ.

Background:
lavender tint.

---

### Card 2 — Loại nội dung

Label:
**Loại nội dung**

Value:
**Có cơ sở bằng chứng**

Sử dụng sage green tint.

Có verified icon.

---

# 14. CLAIM CARD

Tạo card nổi bật:

Label:
**Tuyên bố**

Ví dụ:

**Thiền chánh niệm có thể hỗ trợ giảm căng thẳng ở một số người.**

Background:
soft peach / warm coral tint.

Quote icon lớn nhưng opacity thấp.

Đây phải là thông tin nổi bật nhất sau title.

---

# 15. MỨC ĐỘ CHẮC CHẮN CỦA BẰNG CHỨNG

Section:

**Mức độ chắc chắn của bằng chứng**

Dùng 4 dots/bars.

Ví dụ:

● ● ● ○

**Trung bình**

Không dùng star rating.

Meaning:

1/4 = Rất hạn chế
2/4 = Hạn chế
3/4 = Trung bình / khá
4/4 = Mạnh

Color từ muted coral → coral.

Luôn hiển thị text label, không chỉ màu.

---

# 16. LOẠI BẰNG CHỨNG

Section:

**Loại bằng chứng**

Ví dụ:

* Tổng quan hệ thống
* Thử nghiệm lâm sàng
* Nghiên cứu quan sát

Hiển thị ngắn gọn.

Không trình bày như paper database.

---

# 17. “ĐIỀU ĐÃ BIẾT”

Card màu sage green tint.

Icon check.

Heading:

**Điều đã biết**

Body ví dụ:

“Một số nghiên cứu cho thấy thiền chánh niệm có thể giúp giảm mức độ căng thẳng và cải thiện cảm nhận bình tĩnh ở một số nhóm người dùng. Mức độ hiệu quả phụ thuộc vào cách thực hành, thời lượng và đặc điểm từng người.”

Giữ paragraph dễ đọc.

---

# 18. “ĐIỀU CHƯA BIẾT”

Card peach/coral tint.

Icon ?

Heading:

**Điều chưa biết**

Body:

“Không phải ai cũng có trải nghiệm giống nhau. Hiệu quả có thể khác nhau giữa từng người và từng bối cảnh.”

Không làm phần này trông giống warning nguy hiểm.

---

# 19. LƯU Ý AN TOÀN

Card neutral / very light blue-grey.

Shield icon.

Heading:

**Lưu ý an toàn**

Ví dụ:

“Nếu căng thẳng kéo dài, ảnh hưởng rõ đến giấc ngủ, học tập, công việc hoặc cuộc sống hằng ngày, người dùng nên tìm hỗ trợ từ người có chuyên môn phù hợp.”

Phần này phải dễ nhìn nhưng không tạo cảm giác cảnh báo y tế nặng nề.

---

# 20. METADATA

Tạo compact information rows:

### Cập nhật lần cuối

07/2026

### Người rà soát

Ban biên tập WellRise

Có thể dùng icon calendar + reviewer.

Không cần card quá lớn.

---

# 21. NGUỒN THAM KHẢO

Section:

**Nguồn tham khảo**

Hiển thị tối đa 3 nguồn đầu tiên.

Ví dụ:

• Feil, Fritsch & Rhodes (2023)
• Suarez-Lledo & Alvarez-Galvez (2021)
• Zhu và cộng sự (2024)

Có CTA nhỏ:

**Xem tất cả nguồn →**

Khi nhấn:
→ mở danh sách nguồn đầy đủ.

Không hiển thị URL dài trực tiếp trên main card.

---

# 22. DISCLAIMER

Cuối màn:

icon leaf nhỏ

**Thông tin này nhằm hỗ trợ hiểu và thực hành sống khỏe, không thay thế chẩn đoán hoặc điều trị y khoa.**

Typography nhỏ.
Màu charcoal nhẹ.

---

# 23. EVIDENCE INTERACTION

Trong Article Screen:

Khi có claim có căn cứ, hiển thị một compact evidence chip/card:

✓ **Có căn cứ**
**Xem mức độ bằng chứng →**

hoặc:

**Bằng chứng: Trung bình**

Khi nhấn bất kỳ vùng nào của card:

→ Evidence Detail Screen.

Back:
→ quay lại đúng article đang đọc và giữ nguyên vị trí scroll nếu có thể.

---

# 24. KHÔNG DÙNG IMAGE CỦA THẺ BẰNG CHỨNG LÀM SCREEN

Reference image chỉ dùng để hiểu:

* hierarchy
* palette
* information architecture
* visual style

Phải dựng toàn bộ Evidence Screen bằng:

* text
* auto layout
* reusable cards
* icons
* components

Không chèn reference image trực tiếp vào UI.

---

# 25. CHUẨN HÓA DESIGN SYSTEM

Tạo / cập nhật color tokens:

Brand / Primary / Coral
`#F28C64`

Brand / Coral Red
`#D95C5C`

Brand / Peach
`#F4A7A2`

Brand / Lavender
`#C8B6E2`

Brand / Sage
`#7B987E`

Surface / Background
`#FFF8F4`

Text / Primary
dark charcoal

Text / Secondary
`#5F6368`

Border:
warm neutral với opacity thấp.

---

# 26. COMPONENTS CẦN TÁI SỬ DỤNG

Tạo reusable components khi phù hợp:

* Primary Button
* Secondary/Text Button
* Evidence Badge
* Evidence Level Indicator
* Evidence Info Card
* Safety Card
* Source Row
* Article Evidence CTA
* Top Navigation
* Brand Logo Lockup

---

# 27. CUỐI CÙNG

Sau khi chỉnh sửa, đảm bảo các flow sau hoạt động:

Welcome
→ Bắt đầu hành trình
→ onboarding hiện tại

Article
→ Có căn cứ / Evidence
→ Thẻ bằng chứng
→ Back
→ Article

Evidence screen phải scroll được nếu nội dung dài.

Không phá các flow khác trong app.

Thiết kế phải tạo cảm giác:

**WellRise = wellbeing + personal growth + credible knowledge.**

Không phải:

* app y tế bệnh viện
* app habit tracker trẻ con
* social network
* dashboard enterprise

Hãy giữ sự cân bằng giữa:

**ấm áp + khoa học + đáng tin cậy + dễ tiếp cận.**
