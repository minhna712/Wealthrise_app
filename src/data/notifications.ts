export type NotifType = "reminder" | "milestone" | "community" | "challenge" | "tip" | "system";

export interface AppNotification {
  id: string;
  type: NotifType;
  title: string;
  body: string;
  time: string;
  read: boolean;
  icon: string;
  actionLabel?: string;
  actionScreen?: string;
}

export const NOTIFICATIONS: AppNotification[] = [
  {
    id:"notif-01", type:"reminder", icon:"🌅",
    title:"Bắt đầu ngày mới",
    body:"Đã đến giờ thực hiện thói quen buổi sáng của bạn. Bắt đầu với thói quen đầu tiên nhé!",
    time:"Hôm nay, 07:00", read:true,
    actionLabel:"Mở Today", actionScreen:"today",
  },
  {
    id:"notif-02", type:"milestone", icon:"🔥",
    title:"Chuỗi 3 ngày liên tiếp!",
    body:"Tuyệt vời! Bạn đã duy trì thói quen được 3 ngày liên tục. Hãy tiếp tục!",
    time:"Hôm qua, 20:00", read:true,
    actionLabel:"Xem tiến độ", actionScreen:"today",
  },
  {
    id:"notif-03", type:"community", icon:"💬",
    title:"Nhóm Vận Động Mỗi Ngày",
    body:"Minh Khôi vừa chia sẻ: \"Hôm nay chạy được 5km, cảm giác tuyệt vời!\"",
    time:"Hôm qua, 18:30", read:true,
    actionLabel:"Xem bài viết", actionScreen:"group",
  },
  {
    id:"notif-04", type:"tip", icon:"💡",
    title:"Mẹo giấc ngủ hôm nay",
    body:"Nhiệt độ phòng lý tưởng để ngủ là 18-20°C. Thử điều chỉnh máy lạnh tối nay xem sao!",
    time:"Hôm qua, 14:00", read:true,
  },
  {
    id:"notif-05", type:"challenge", icon:"🏆",
    title:"Thử thách \"7 Ngày Đi Bộ\"",
    body:"Bạn đang ở ngày 4/7. Còn 3 ngày nữa để hoàn thành thử thách. Cố lên!",
    time:"Hôm qua, 10:00", read:true,
    actionLabel:"Xem thử thách", actionScreen:"challenge",
  },
  {
    id:"notif-06", type:"community", icon:"👥",
    title:"Bảo Châu thích bài viết của bạn",
    body:"Bài viết của bạn trong nhóm \"Ăn uống lành mạnh\" nhận được 5 lượt thích.",
    time:"2 ngày trước, 19:00", read:false,
    actionLabel:"Xem bài viết", actionScreen:"group",
  },
  {
    id:"notif-07", type:"milestone", icon:"⭐",
    title:"Hoàn thành thử thách đầu tiên!",
    body:"Bạn đã hoàn thành \"7 Ngày Ngủ Đúng Giờ\". Nhận huy hiệu Giấc Ngủ Ngàn Sao!",
    time:"2 ngày trước, 09:00", read:false,
    actionLabel:"Xem huy hiệu", actionScreen:"challenge",
  },
  {
    id:"notif-08", type:"reminder", icon:"🌙",
    title:"Nhắc nhở buổi tối",
    body:"22:30 rồi — đã đến lúc bắt đầu thói quen trước khi ngủ. Tắt màn hình và thư giãn nhé!",
    time:"3 ngày trước, 22:30", read:false,
    actionLabel:"Check-in tối", actionScreen:"today",
  },
  {
    id:"notif-09", type:"tip", icon:"🥦",
    title:"Dinh dưỡng: Rau xanh và sức đề kháng",
    body:"Ăn đa dạng 5 màu rau củ mỗi ngày giúp cơ thể nhận đủ vi chất. Hôm nay bạn có ăn rau chưa?",
    time:"3 ngày trước, 12:00", read:false,
  },
  {
    id:"notif-10", type:"community", icon:"🌟",
    title:"Nhóm Thiền Chánh Niệm",
    body:"\"Sáng nay thiền 10 phút, cảm thấy bình tĩnh hơn hẳn trước cuộc họp lớn.\" — Mai Phương",
    time:"3 ngày trước, 08:15", read:false,
    actionLabel:"Xem nhóm", actionScreen:"group",
  },
  {
    id:"notif-11", type:"system", icon:"🎉",
    title:"WealthRISE cập nhật mới!",
    body:"Phiên bản mới có thêm 15 nhóm mới và tính năng thử thách cá nhân hoá. Khám phá ngay!",
    time:"4 ngày trước, 10:00", read:false,
    actionLabel:"Khám phá", actionScreen:"explore",
  },
  {
    id:"notif-12", type:"challenge", icon:"💪",
    title:"Thử thách mới: 21 Ngày Tập Thể Trọng",
    body:"Phù hợp với mục tiêu vận động của bạn. Tham gia cùng 765 người khác!",
    time:"4 ngày trước, 09:00", read:false,
    actionLabel:"Xem thử thách", actionScreen:"challenge",
  },
  {
    id:"notif-13", type:"reminder", icon:"💧",
    title:"Uống nước chưa?",
    body:"Đã 10:00, bạn đã uống đủ nước sáng nay chưa? Mục tiêu: 2 ly trước giờ trưa.",
    time:"5 ngày trước, 10:00", read:false,
  },
  {
    id:"notif-14", type:"tip", icon:"🧠",
    title:"Mẹo: Nghỉ ngắn hiệu quả",
    body:"Sau 25 phút tập trung, nghỉ 5 phút không nhìn màn hình. Mắt và não sẽ cảm ơn bạn.",
    time:"5 ngày trước, 14:30", read:false,
  },
  {
    id:"notif-15", type:"community", icon:"🤝",
    title:"Tuấn Anh bắt đầu theo dõi bạn",
    body:"Tuấn Anh và bạn cùng trong 2 nhóm. Cùng nhau sẽ duy trì tốt hơn!",
    time:"5 ngày trước, 16:00", read:false,
  },
  {
    id:"notif-16", type:"milestone", icon:"🔥",
    title:"Chuỗi 7 ngày — Tuần đầu tiên!",
    body:"Bạn đã hoàn thành tuần đầu tiên với chuỗi thói quen liên tục. Đây là khởi đầu tuyệt vời!",
    time:"6 ngày trước, 21:00", read:false,
    actionLabel:"Xem thành tích", actionScreen:"today",
  },
  {
    id:"notif-17", type:"tip", icon:"🌬️",
    title:"Thử thở 4-7-8 tối nay",
    body:"Hít vào 4 giây, giữ 7 giây, thở ra 8 giây. Lặp lại 3 lần để giảm căng thẳng ngay tức thì.",
    time:"6 ngày trước, 22:00", read:false,
  },
  {
    id:"notif-18", type:"community", icon:"💬",
    title:"Nhóm Đọc Sách Mỗi Ngày",
    body:"Gia Hân chia sẻ: \"Cuốn sách 'Atomic Habits' thật sự thay đổi cách tôi nhìn nhận thói quen!\"",
    time:"1 tuần trước, 20:00", read:false,
    actionLabel:"Xem nhóm", actionScreen:"group",
  },
  {
    id:"notif-19", type:"system", icon:"📊",
    title:"Tổng kết tuần của bạn",
    body:"Tuần qua bạn hoàn thành 5/7 ngày. Thói quen mạnh nhất: Thiền. Cần cải thiện: Uống nước.",
    time:"1 tuần trước, 09:00", read:false,
  },
  {
    id:"notif-20", type:"challenge", icon:"🌿",
    title:"Đang tham gia: 5 Ngày Không Điện Thoại Buổi Sáng",
    body:"Ngày 3/5. Bạn đang làm rất tốt! Nhóm cùng thực hiện: 2.678 người.",
    time:"1 tuần trước, 07:30", read:false,
    actionLabel:"Cập nhật tiến độ", actionScreen:"challenge",
  },
  {
    id:"notif-21", type:"tip", icon:"☀️",
    title:"Ra ngoài 10 phút buổi sáng",
    body:"Ánh sáng mặt trời buổi sáng giúp điều chỉnh đồng hồ sinh học, cải thiện giấc ngủ tối.",
    time:"1 tuần trước, 07:00", read:false,
  },
  {
    id:"notif-22", type:"community", icon:"🏆",
    title:"Nhóm Khởi Đầu Nhẹ Nhàng",
    body:"Linh Trang đã hoàn thành 7 ngày liên tục thói quen nhẹ nhàng. Cộng đồng chúc mừng!",
    time:"1 tuần trước, 18:00", read:false,
    actionLabel:"Xem bài viết", actionScreen:"group",
  },
  {
    id:"notif-23", type:"system", icon:"🔔",
    title:"Nhắc nhở thông minh được bật",
    body:"WealthRISE sẽ gửi nhắc nhở đúng lúc dựa trên thói quen của bạn. Bạn có thể tắt trong Cài đặt.",
    time:"2 tuần trước, 10:00", read:false,
  },
  {
    id:"notif-24", type:"milestone", icon:"🌟",
    title:"Bạn là thành viên tích cực!",
    body:"Top 20% thành viên WealthRISE có chuỗi dài nhất tuần này. Tiếp tục phát huy nhé!",
    time:"2 tuần trước, 20:00", read:false,
  },
  {
    id:"notif-25", type:"tip", icon:"🧘",
    title:"Mindfulness không phải thiền",
    body:"Chánh niệm có thể thực hành khi rửa chén, ăn sáng, hoặc đi bộ — không cần ngồi yên.",
    time:"2 tuần trước, 12:00", read:false,
  },
  {
    id:"notif-26", type:"challenge", icon:"📖",
    title:"Thử thách đề xuất: 3 Ngày Đọc Sách",
    body:"Chỉ 5 trang/ngày trong 3 ngày. Phù hợp với mục tiêu phát triển bản thân của bạn!",
    time:"2 tuần trước, 09:00", read:false,
    actionLabel:"Tham gia ngay", actionScreen:"challenge",
  },
  {
    id:"notif-27", type:"community", icon:"🌺",
    title:"Nhóm Cân Bằng Học Tập",
    body:"Đức Trung hỏi: \"Bạn có tips nào để cân bằng học tập và sức khoẻ không?\" — 12 bình luận.",
    time:"2 tuần trước, 16:30", read:false,
    actionLabel:"Xem thảo luận", actionScreen:"group",
  },
  {
    id:"notif-28", type:"system", icon:"🎊",
    title:"Chào mừng đến WealthRISE!",
    body:"Bạn đã thiết lập thành công hành trình cá nhân. Mỗi ngày một thói quen nhỏ — thay đổi lớn.",
    time:"3 tuần trước, 10:00", read:false,
    actionLabel:"Bắt đầu ngay", actionScreen:"today",
  },
];
