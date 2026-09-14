export interface Claim {
  id: string;
  text: string;
  evidenceLevel: 1 | 2 | 3 | 4;
  evidenceLabel: string;
}

export interface RelatedChallenge {
  id: string;
  icon: string;
  title: string;
  duration: string;
  effort: string;
}

export interface Article {
  id: string;
  topicId: string;
  topicLabel: string;
  topicIcon: string;
  topicBg: string;
  topicAccent: string;
  title: string;
  summary: string;
  body: string[];
  author: string;
  reviewedDate: string;
  readingMins: number;
  goalIds: string[];
  claims: Claim[];
  relatedChallenge: RelatedChallenge;
  coverGradient: string;
}

export interface Topic {
  id: string;
  icon: string;
  label: string;
  description: string;
  bg: string;
  accent: string;
}

export interface Expert {
  id: string;
  name: string;
  field: string;
  experience: string;
  support: string;
  avatar: string;
  bg: string;
  topicIds: string[];
}

/* Single source-of-truth mapping: user goal ID → topic ID */
export const GOAL_TO_TOPIC: Record<string, string> = {
  sleep:      "sleep",
  eat:        "nutrition",
  exercise:   "movement",
  stress:     "mindset",
  confidence: "mindset",
  growth:     "growth",
  balance:    "balance",
  community:  "community",
};

export const TOPICS: Topic[] = [
  { id:"sleep",     icon:"🌙", label:"Giấc ngủ",              description:"Nền tảng của sức khoẻ — hiểu đúng để phục hồi tốt hơn mỗi ngày.",  bg:"#F2EDF8", accent:"#A896CC" },
  { id:"nutrition", icon:"🥗", label:"Dinh dưỡng",             description:"Dinh dưỡng không phải kiêng ăn. Ăn đúng để cảm thấy khoẻ hơn.",   bg:"#EDF5EF", accent:"#7B987E" },
  { id:"movement",  icon:"🏃", label:"Vận động",               description:"Vận động nhẹ mỗi ngày có lợi ích lớn hơn bạn nghĩ.",              bg:"#FFF2EC", accent:"#F28C64" },
  { id:"mindset",   icon:"🧘", label:"Tinh thần & Stress",     description:"Cân bằng cảm xúc và chánh niệm cho cuộc sống rõ ràng hơn.",        bg:"#F2EDF8", accent:"#A896CC" },
  { id:"growth",    icon:"📖", label:"Phát triển bản thân",    description:"Thói quen nhỏ mỗi ngày tạo ra sự thay đổi lớn theo thời gian.",    bg:"#FBEDEE", accent:"#D95C5C" },
  { id:"balance",   icon:"⚖️", label:"Cân bằng cuộc sống",    description:"Tìm nhịp sống phù hợp — không vội vàng, không áp lực.",            bg:"#EDF5EF", accent:"#7B987E" },
  { id:"community", icon:"👥", label:"Kết nối xã hội",         description:"Kết nối với người khác giúp cả tinh thần lẫn sức khoẻ tốt hơn.",   bg:"#FDF0F1", accent:"#F4A7A2" },
  { id:"focus",     icon:"🎯", label:"Tập trung & Năng suất",  description:"Làm ít hơn nhưng tập trung hơn — hiệu quả thực sự đến từ đây.",    bg:"#FBEDEE", accent:"#D95C5C" },
];

export const ARTICLES: Article[] = [
  /* ── GIẤC NGỦ ── */
  {
    id: "sleep-tired",
    topicId: "sleep", topicLabel:"Giấc ngủ", topicIcon:"🌙", topicBg:"#F2EDF8", topicAccent:"#A896CC",
    title: "Vì sao bạn vẫn mệt dù đã ngủ đủ?",
    summary: "Ngủ đủ giờ nhưng vẫn mệt là dấu hiệu chất lượng giấc ngủ đang có vấn đề.",
    body: [
      "Nhiều người ngủ đủ 7–8 tiếng mỗi đêm nhưng vẫn thức dậy trong trạng thái uể oải. Điều này không có nghĩa bạn cần ngủ nhiều hơn — mà giấc ngủ chưa đủ chất lượng.",
      "Chất lượng giấc ngủ được quyết định bởi số lần bạn đi qua đủ các giai đoạn ngủ, đặc biệt giai đoạn REM và giấc ngủ sâu NREM. Nếu bị gián đoạn, dù nằm đủ giờ, cơ thể vẫn chưa được phục hồi.",
      "Các nguyên nhân phổ biến: ánh sáng màn hình trước khi ngủ, nhiệt độ phòng quá cao, caffeine sau 14h, và căng thẳng tâm lý chưa được giải tỏa. Thay đổi từng điểm nhỏ thường tạo ra sự khác biệt rõ sau 7–14 ngày.",
    ],
    author: "Chuyên gia Sức khoẻ WealthRISE", reviewedDate:"Tháng 9, 2026", readingMins:5,
    goalIds: ["sleep"],
    claims: [{ id:"sleep-cycles", text:"Người lớn cần đủ 4–6 chu kỳ ngủ REM mỗi đêm để phục hồi hoàn toàn.", evidenceLevel:3, evidenceLabel:"Trung bình" }],
    relatedChallenge: { id:"c-sleep", icon:"🌙", title:"7 ngày xây dựng giờ ngủ đều đặn", duration:"7 ngày", effort:"~10 phút/ngày" },
    coverGradient: "linear-gradient(135deg,#3A2850,#7A5898)",
  },
  {
    id: "sleep-routine",
    topicId: "sleep", topicLabel:"Giấc ngủ", topicIcon:"🌙", topicBg:"#F2EDF8", topicAccent:"#A896CC",
    title: "Làm thế nào để giữ giờ ngủ ổn định?",
    summary: "Đi ngủ đúng giờ không khó nếu bạn chuẩn bị đúng cách trong 30 phút cuối ngày.",
    body: [
      "Một giờ ngủ cố định là nền tảng của giấc ngủ chất lượng. Đồng hồ sinh học hoạt động tốt nhất khi bạn ngủ và thức dậy đúng giờ mỗi ngày, kể cả cuối tuần.",
      "5 thói quen đơn giản trước khi ngủ: (1) Tắt màn hình điện tử, (2) Giảm ánh sáng phòng, (3) Uống một ly nước ấm, (4) Viết 3 điều biết ơn hôm nay, (5) Thực hiện 3–5 phút thở sâu.",
      "Những thói quen này không cần nhiều thời gian nhưng khi thực hiện đều đặn, chúng gửi tín hiệu rõ ràng đến não bộ rằng đã đến giờ nghỉ ngơi.",
    ],
    author: "Chuyên gia Sức khoẻ WealthRISE", reviewedDate:"Tháng 8, 2026", readingMins:6,
    goalIds: ["sleep"],
    claims: [{ id:"sleep-schedule", text:"Đi ngủ và thức dậy đúng giờ mỗi ngày giúp đồng hồ sinh học ổn định hơn, kể cả cuối tuần.", evidenceLevel:4, evidenceLabel:"Mạnh" }],
    relatedChallenge: { id:"c-sleep", icon:"🌙", title:"7 ngày xây dựng giờ ngủ đều đặn", duration:"7 ngày", effort:"~10 phút/ngày" },
    coverGradient: "linear-gradient(135deg,#2A3048,#5060A0)",
  },
  {
    id: "sleep-weekend",
    topicId: "sleep", topicLabel:"Giấc ngủ", topicIcon:"🌙", topicBg:"#F2EDF8", topicAccent:"#A896CC",
    title: "Cuối tuần nên ngủ bù như thế nào?",
    summary: "Ngủ bù cuối tuần có thể giúp ích — nhưng cũng có thể làm lệch đồng hồ sinh học của bạn.",
    body: [
      "Nhiều người cảm thấy mệt mỏi vào sáng thứ Hai dù đã ngủ nhiều hơn vào cuối tuần. Hiện tượng này gọi là 'social jet lag' — lệch pha giữa đồng hồ sinh học và lịch sinh hoạt xã hội.",
      "Ngủ bù cuối tuần có thể hỗ trợ phục hồi một phần năng lượng. Tuy nhiên, nếu ngủ quá nhiều hơn ngày thường, bạn sẽ khó ngủ vào tối Chủ nhật và khởi đầu tuần mới trong trạng thái mệt mỏi.",
      "Cách tiếp cận được khuyến nghị: giữ giờ thức dậy ổn định 7 ngày/tuần. Nếu cần ngủ thêm, ngủ sớm hơn một chút thay vì thức khuya rồi ngủ bù vào buổi sáng.",
    ],
    author: "Chuyên gia Sức khoẻ WealthRISE", reviewedDate:"Tháng 9, 2026", readingMins:4,
    goalIds: ["sleep"],
    claims: [{ id:"sleep-weekend-claim", text:"Ngủ bù cuối tuần có thể hỗ trợ phục hồi một phần nhưng không thay thế giấc ngủ đều đặn trong tuần.", evidenceLevel:3, evidenceLabel:"Trung bình" }],
    relatedChallenge: { id:"c-sleep", icon:"🌙", title:"7 ngày xây dựng giờ ngủ đều đặn", duration:"7 ngày", effort:"~10 phút/ngày" },
    coverGradient: "linear-gradient(135deg,#3A2858,#7A58B0)",
  },

  /* ── DINH DƯỠNG ── */
  {
    id: "nutrition-breakfast",
    topicId: "nutrition", topicLabel:"Dinh dưỡng", topicIcon:"🥗", topicBg:"#EDF5EF", topicAccent:"#7B987E",
    title: "Bắt đầu ngày mới với một bữa sáng đơn giản",
    summary: "Bữa sáng không cần cầu kỳ. Thậm chí một lựa chọn đơn giản cũng giúp bạn tập trung tốt hơn.",
    body: [
      "Bỏ bữa sáng thường khiến bạn cảm thấy đói vào giữa buổi, dẫn đến ăn nhiều hơn ở bữa trưa hoặc chọn đồ ăn vặt kém lành mạnh. Dù vậy, không phải ai cũng cần ăn ngay khi thức dậy.",
      "Một bữa sáng nhẹ — như trứng luộc, bánh mì nguyên cám với bơ đậu phộng, hoặc cháo yến mạch — có thể cung cấp năng lượng ổn định cho buổi sáng mà không cần chuẩn bị nhiều.",
      "Hiệu quả có thể khác nhau giữa mỗi người. Điều quan trọng nhất là lắng nghe cơ thể: nếu bạn cảm thấy tập trung và năng lượng tốt hơn khi ăn sáng, đó là tín hiệu tốt để duy trì.",
    ],
    author: "Chuyên gia Dinh dưỡng WealthRISE", reviewedDate:"Tháng 8, 2026", readingMins:4,
    goalIds: ["eat"],
    claims: [{ id:"breakfast-claim", text:"Ăn bữa sáng đều đặn thường được liên quan đến khả năng tập trung và quản lý cân nặng tốt hơn.", evidenceLevel:2, evidenceLabel:"Hạn chế" }],
    relatedChallenge: { id:"c-nutrition", icon:"🥗", title:"14 ngày ăn sáng lành mạnh", duration:"14 ngày", effort:"~10 phút/ngày" },
    coverGradient: "linear-gradient(135deg,#1A3828,#2A7048)",
  },
  {
    id: "water-benefits",
    topicId: "nutrition", topicLabel:"Dinh dưỡng", topicIcon:"🥗", topicBg:"#EDF5EF", topicAccent:"#7B987E",
    title: "Làm thế nào để uống nước đều hơn?",
    summary: "Uống đủ nước là thói quen đơn giản nhất nhưng lại bị bỏ quên nhiều nhất.",
    body: [
      "Cơ thể người trưởng thành gồm khoảng 60% là nước. Nước tham gia vào hầu hết mọi quá trình sinh lý — từ điều tiết nhiệt độ, vận chuyển chất dinh dưỡng đến loại bỏ chất thải.",
      "Chỉ cần mất 1–2% lượng nước đã khiến bạn cảm thấy khó tập trung, mệt mỏi và nhức đầu — những triệu chứng thường bị nhầm với các vấn đề khác.",
      "Cách đơn giản nhất: uống một ly nước ngay khi thức dậy, đặt bình nước ở nơi dễ thấy, và uống trước khi cảm thấy khát. Khát nước đã là dấu hiệu của mất nước nhẹ.",
    ],
    author: "Chuyên gia Dinh dưỡng WealthRISE", reviewedDate:"Tháng 8, 2026", readingMins:3,
    goalIds: ["eat"],
    claims: [{ id:"water-claim", text:"Mất nước chỉ 1–2% trọng lượng cơ thể làm giảm hiệu suất nhận thức và thể chất đáng kể.", evidenceLevel:4, evidenceLabel:"Mạnh" }],
    relatedChallenge: { id:"c-water", icon:"💧", title:"7 ngày uống đủ nước", duration:"7 ngày", effort:"~2 phút/ngày" },
    coverGradient: "linear-gradient(135deg,#1A3828,#2A8050)",
  },
  {
    id: "nutrition-veggies",
    topicId: "nutrition", topicLabel:"Dinh dưỡng", topicIcon:"🥗", topicBg:"#EDF5EF", topicAccent:"#7B987E",
    title: "Cách tăng rau trong bữa ăn mà không quá áp lực",
    summary: "Ăn nhiều rau hơn không có nghĩa phải ăn rau sống cả ngày. Đây là vài cách dễ hơn nhiều.",
    body: [
      "Nhiều người biết rau xanh rất tốt nhưng lại không thích ăn hoặc không biết cách nấu ngon. Điểm khởi đầu tốt nhất là thêm rau vào món bạn đã thích — không cần thay thế.",
      "Thêm rau vào trứng chiên, trộn cà chua vào cơm trắng, hay cho thêm bông cải vào mì gói — những thay đổi nhỏ này không đòi hỏi kỹ năng nấu ăn đặc biệt.",
      "Đặt mục tiêu thực tế: mỗi ngày thêm một loại rau vào một bữa. Khi đã thành thói quen, việc ăn rau trở nên tự nhiên hơn nhiều so với việc ép bản thân theo một chế độ ăn nghiêm ngặt.",
    ],
    author: "Chuyên gia Dinh dưỡng WealthRISE", reviewedDate:"Tháng 9, 2026", readingMins:3,
    goalIds: ["eat"],
    claims: [{ id:"veggies-claim", text:"Ăn đủ rau và trái cây hàng ngày có liên quan đến sức khoẻ tim mạch và hệ miễn dịch tốt hơn.", evidenceLevel:4, evidenceLabel:"Mạnh" }],
    relatedChallenge: { id:"c-nutrition", icon:"🥗", title:"14 ngày thêm rau vào bữa ăn", duration:"14 ngày", effort:"~5 phút/ngày" },
    coverGradient: "linear-gradient(135deg,#1A3820,#3A8040)",
  },

  /* ── VẬN ĐỘNG ── */
  {
    id: "walk-10min",
    topicId: "movement", topicLabel:"Vận động", topicIcon:"🏃", topicBg:"#FFF2EC", topicAccent:"#F28C64",
    title: "10 phút đi bộ có đáng để bắt đầu?",
    summary: "Chỉ 10 phút đi bộ nhẹ mỗi ngày đã đủ tạo ra sự thay đổi đáng kể cho sức khoẻ tim mạch.",
    body: [
      "Bạn không cần chạy marathon hay tập gym mỗi ngày. Một số nghiên cứu cho thấy đi bộ chỉ 10 phút sau mỗi bữa ăn có tác động tích cực đến sức khoẻ tim mạch và chuyển hoá.",
      "Đặc biệt, đi bộ sau bữa ăn giúp cơ bắp hấp thụ glucose từ máu hiệu quả hơn, có thể giảm đường huyết sau ăn. Đây là một trong những cách đơn giản nhất để hỗ trợ sức khoẻ chuyển hoá.",
      "Bắt đầu từ nhỏ: đặt mục tiêu đi bộ 10 phút sau bữa trưa. Khi đã hình thành thói quen, thêm dần các bữa khác hoặc tăng thời gian.",
    ],
    author: "Chuyên gia Vận động WealthRISE", reviewedDate:"Tháng 9, 2026", readingMins:4,
    goalIds: ["exercise"],
    claims: [{ id:"walk-claim", text:"Đi bộ 10 phút sau bữa ăn có thể hỗ trợ kiểm soát đường huyết sau ăn.", evidenceLevel:3, evidenceLabel:"Trung bình" }],
    relatedChallenge: { id:"c-walk", icon:"🚶", title:"21 ngày vận động mỗi ngày", duration:"21 ngày", effort:"~20 phút/ngày" },
    coverGradient: "linear-gradient(135deg,#3A2018,#A84830)",
  },
  {
    id: "stretch-morning",
    topicId: "movement", topicLabel:"Vận động", topicIcon:"🏃", topicBg:"#FFF2EC", topicAccent:"#F28C64",
    title: "Stretching buổi sáng cho người ít vận động",
    summary: "5 phút giãn cơ buổi sáng giúp cơ thể thức dậy nhẹ nhàng và tăng lưu thông máu.",
    body: [
      "Sau 6–8 tiếng nằm yên, cơ thể cần được khởi động nhẹ nhàng. Stretching buổi sáng giúp tăng lưu thông máu, giảm cứng khớp và cải thiện tâm trạng ngay từ đầu ngày.",
      "Bạn không cần dụng cụ hay không gian rộng. 5 động tác đơn giản ngay trên giường: xoay cổ, kéo giãn vai, vặn người, ôm gối vào ngực, và gập người về phía trước khi ngồi.",
      "Hiệu quả thường cảm nhận được ngay sau khi thực hiện — cơ thể thư giãn hơn, tinh thần tỉnh táo hơn. Đây là điểm khởi đầu hoàn hảo cho người chưa có thói quen vận động.",
    ],
    author: "Chuyên gia Vận động WealthRISE", reviewedDate:"Tháng 8, 2026", readingMins:3,
    goalIds: ["exercise"],
    claims: [{ id:"stretch-claim", text:"Stretching thường xuyên có thể hỗ trợ linh hoạt khớp và giảm đau cơ nhẹ.", evidenceLevel:3, evidenceLabel:"Trung bình" }],
    relatedChallenge: { id:"c-stretch", icon:"🤸", title:"7 ngày stretching buổi sáng", duration:"7 ngày", effort:"~5 phút/ngày" },
    coverGradient: "linear-gradient(135deg,#3A2818,#B86028)",
  },
  {
    id: "movement-desk",
    topicId: "movement", topicLabel:"Vận động", topicIcon:"🏃", topicBg:"#FFF2EC", topicAccent:"#F28C64",
    title: "Vận động khi phải ngồi nhiều",
    summary: "Ngồi nhiều là một trong những thói quen ảnh hưởng sức khoẻ phổ biến nhất. Đây là cách cân bằng.",
    body: [
      "Ngồi liên tục nhiều giờ ảnh hưởng đến lưu thông máu, tư thế và sức khoẻ cơ xương. Điều này không chỉ là vấn đề của người lớn tuổi — học sinh và nhân viên văn phòng đều có thể gặp phải.",
      "Một chiến lược đơn giản: cứ 45–60 phút đứng dậy 2–5 phút. Đi lấy nước, đứng khi nghe điện thoại, hoặc đi bộ nhỏ quanh phòng. Những khoảng nghỉ ngắn này có thể hỗ trợ lưu thông và giảm mệt mỏi.",
      "Cài đặt một lời nhắc nhỏ trên điện thoại mỗi giờ. Điều này đơn giản hơn nhiều so với cố gắng thay đổi toàn bộ thói quen làm việc.",
    ],
    author: "Chuyên gia Vận động WealthRISE", reviewedDate:"Tháng 9, 2026", readingMins:4,
    goalIds: ["exercise", "balance"],
    claims: [{ id:"desk-claim", text:"Ngồi liên tục nhiều giờ thường được liên quan đến các vấn đề về lưu thông máu và tư thế.", evidenceLevel:3, evidenceLabel:"Trung bình" }],
    relatedChallenge: { id:"c-walk", icon:"🚶", title:"21 ngày vận động mỗi ngày", duration:"21 ngày", effort:"~20 phút/ngày" },
    coverGradient: "linear-gradient(135deg,#3A2818,#C07030)",
  },

  /* ── TINH THẦN & STRESS ── */
  {
    id: "relax-sleep",
    topicId: "mindset", topicLabel:"Tinh thần & Stress", topicIcon:"🧘", topicBg:"#F2EDF8", topicAccent:"#A896CC",
    title: "Một bài thở ngắn khi bạn thấy căng thẳng",
    summary: "Tâm trí không bình yên là lý do lớn nhất khiến bạn khó tập trung. Thử 3 kỹ thuật đơn giản này.",
    body: [
      "Hầu hết căng thẳng không đến từ sự kiện bên ngoài — mà từ cách chúng ta phản ứng với nó. Kỹ thuật thở có thể giúp bạn dừng vòng lặp lo âu trong vài phút.",
      "Kỹ thuật 4-7-8: Hít vào 4 giây, nín thở 7 giây, thở ra 8 giây. Lặp lại 3–4 lần. Phương pháp này có thể kích hoạt hệ thần kinh phó giao cảm, giúp làm dịu cơ thể tự nhiên.",
      "Không cần chuẩn bị gì đặc biệt. Bạn có thể thực hiện ngay tại bàn học, trên xe bus, hoặc trước khi bước vào một tình huống gây áp lực.",
    ],
    author: "Chuyên gia Sức khoẻ Tâm lý WealthRISE", reviewedDate:"Tháng 7, 2026", readingMins:4,
    goalIds: ["stress"],
    claims: [{ id:"relax-claim", text:"Thở 4-7-8 có thể kích hoạt hệ thần kinh phó giao cảm, hỗ trợ làm dịu cơ thể trong tình huống căng thẳng.", evidenceLevel:2, evidenceLabel:"Hạn chế" }],
    relatedChallenge: { id:"c-mindset", icon:"🧘", title:"7 ngày thở 3 phút mỗi ngày", duration:"7 ngày", effort:"~3 phút/ngày" },
    coverGradient: "linear-gradient(135deg,#3A2818,#906840)",
  },
  {
    id: "mindset-rest",
    topicId: "mindset", topicLabel:"Tinh thần & Stress", topicIcon:"🧘", topicBg:"#F2EDF8", topicAccent:"#A896CC",
    title: "Nghỉ ngơi mà không cảm thấy tội lỗi",
    summary: "Nhiều người cảm thấy tội lỗi khi nghỉ ngơi. Nhưng nghỉ ngơi chính là một phần của năng suất.",
    body: [
      "Văn hoá 'luôn bận rộn' khiến nhiều người cảm thấy rằng ngồi im một lúc là lãng phí thời gian. Nhưng não bộ cần những khoảng nghỉ để xử lý thông tin và phục hồi năng lượng tập trung.",
      "Nghỉ ngơi thực sự không phải là cuộn mạng xã hội vô tận — đó là ngồi yên, đi dạo ngắn, nghe nhạc, hay chỉ nhìn ra cửa sổ. Những khoảng dừng này thường được gọi là 'nghỉ ngơi phục hồi'.",
      "Thử thách nhỏ: cho phép bản thân nghỉ ngơi 10 phút hoàn toàn sau mỗi 90 phút học hoặc làm việc. Không làm gì cả — và không cảm thấy tội lỗi vì điều đó.",
    ],
    author: "Chuyên gia Sức khoẻ Tâm lý WealthRISE", reviewedDate:"Tháng 8, 2026", readingMins:4,
    goalIds: ["stress", "balance"],
    claims: [{ id:"rest-claim", text:"Não bộ cần những khoảng nghỉ định kỳ để duy trì hiệu suất tập trung theo thời gian.", evidenceLevel:3, evidenceLabel:"Trung bình" }],
    relatedChallenge: { id:"c-balance", icon:"⚖️", title:"14 ngày routine buổi tối", duration:"14 ngày", effort:"~15 phút/ngày" },
    coverGradient: "linear-gradient(135deg,#402818,#9A6838)",
  },
  {
    id: "mindset-journal",
    topicId: "mindset", topicLabel:"Tinh thần & Stress", topicIcon:"🧘", topicBg:"#F2EDF8", topicAccent:"#A896CC",
    title: "Nhật ký 3 phút cuối ngày",
    summary: "Viết 3 dòng ngắn trước khi ngủ có thể giúp bạn xử lý cảm xúc và ngủ ngon hơn.",
    body: [
      "Nhật ký không cần phải dài hay văn vẻ. Chỉ cần 3 phút và 3 câu: (1) Hôm nay bạn đã làm được gì dù nhỏ? (2) Điều gì khiến bạn cảm thấy tốt? (3) Bạn muốn làm khác đi điều gì ngày mai?",
      "Hành động viết ra cảm xúc giúp não bộ xử lý và 'đóng lại' ngày hôm đó — giảm việc các suy nghĩ tiếp tục quay vòng khi bạn cố gắng ngủ.",
      "Bắt đầu với một cuốn sổ nhỏ hoặc một ứng dụng ghi chú. Không cần hoàn hảo — chỉ cần thành thật và ngắn gọn.",
    ],
    author: "Chuyên gia Sức khoẻ Tâm lý WealthRISE", reviewedDate:"Tháng 9, 2026", readingMins:3,
    goalIds: ["stress", "growth"],
    claims: [{ id:"journal-claim", text:"Viết nhật ký cảm xúc thường được khuyến nghị như một công cụ hỗ trợ sức khoẻ tinh thần.", evidenceLevel:2, evidenceLabel:"Hạn chế" }],
    relatedChallenge: { id:"c-gratitude", icon:"📔", title:"14 ngày viết điều biết ơn", duration:"14 ngày", effort:"~3 phút/ngày" },
    coverGradient: "linear-gradient(135deg,#3A2018,#8A4828)",
  },

  /* ── PHÁT TRIỂN BẢN THÂN ── */
  {
    id: "growth-reading",
    topicId: "growth", topicLabel:"Phát triển bản thân", topicIcon:"📖", topicBg:"#FBEDEE", topicAccent:"#D95C5C",
    title: "Đọc 10 phút mỗi ngày có thể bắt đầu thế nào?",
    summary: "10 phút đọc sách mỗi ngày nghe nhỏ — nhưng sau 1 năm bạn đã đọc được hơn 12 cuốn sách.",
    body: [
      "Rào cản lớn nhất của thói quen đọc sách không phải là thiếu thời gian — mà là chưa tạo được điều kiện dễ bắt đầu. Một cuốn sách để cạnh giường, hay ứng dụng đọc sách đặt ở màn hình chính, tạo ra khác biệt lớn.",
      "Bắt đầu với thể loại bạn thực sự muốn đọc, không phải những gì bạn 'nên' đọc. Tiểu thuyết, phát triển cá nhân, hay sách về sở thích — miễn là bạn muốn tiếp tục.",
      "10 phút trước khi ngủ là thời điểm lý tưởng. Tắt điện thoại, mở sách, đọc dù chỉ vài trang. Sau vài tuần, thói quen này thường trở nên dễ duy trì hơn bạn nghĩ.",
    ],
    author: "Chuyên gia Phát triển Cá nhân WealthRISE", reviewedDate:"Tháng 8, 2026", readingMins:4,
    goalIds: ["growth", "confidence"],
    claims: [{ id:"reading-claim", text:"Đọc sách thường xuyên thường được liên quan đến khả năng tư duy và từ vựng tốt hơn.", evidenceLevel:3, evidenceLabel:"Trung bình" }],
    relatedChallenge: { id:"c-reading", icon:"📖", title:"7 ngày đọc sách 10 phút", duration:"7 ngày", effort:"~10 phút/ngày" },
    coverGradient: "linear-gradient(135deg,#401818,#A84838)",
  },
  {
    id: "growth-small-goals",
    topicId: "growth", topicLabel:"Phát triển bản thân", topicIcon:"📖", topicBg:"#FBEDEE", topicAccent:"#D95C5C",
    title: "Vì sao mục tiêu nhỏ dễ duy trì hơn?",
    summary: "Mục tiêu lớn tạo động lực ban đầu — nhưng chính những bước nhỏ mỗi ngày mới tạo ra thay đổi thật sự.",
    body: [
      "Não bộ được thiết kế để tìm kiếm phần thưởng ngắn hạn. Khi mục tiêu quá xa, não khó duy trì động lực. Nhưng khi bạn chia nhỏ mục tiêu thành từng bước có thể hoàn thành trong hôm nay, mỗi bước nhỏ đều tạo ra cảm giác thành công.",
      "Thay vì 'tôi muốn khoẻ mạnh hơn', hãy thử 'tôi sẽ đi bộ 10 phút sau bữa trưa hôm nay'. Thay vì 'tôi muốn đọc nhiều hơn', thử 'tôi sẽ đọc 5 trang trước khi ngủ tối nay'.",
      "Khi thói quen nhỏ trở thành phần tự nhiên của ngày, bạn sẽ thấy mình sẵn sàng thêm dần mà không cần ép buộc.",
    ],
    author: "Chuyên gia Phát triển Cá nhân WealthRISE", reviewedDate:"Tháng 9, 2026", readingMins:5,
    goalIds: ["growth", "confidence"],
    claims: [{ id:"small-goals-claim", text:"Chia nhỏ mục tiêu thành các hành động cụ thể thường giúp duy trì thói quen tốt hơn.", evidenceLevel:3, evidenceLabel:"Trung bình" }],
    relatedChallenge: { id:"c-reading", icon:"📖", title:"7 ngày đọc sách 10 phút", duration:"7 ngày", effort:"~10 phút/ngày" },
    coverGradient: "linear-gradient(135deg,#481808,#B84828)",
  },
  {
    id: "growth-motivation",
    topicId: "growth", topicLabel:"Phát triển bản thân", topicIcon:"📖", topicBg:"#FBEDEE", topicAccent:"#D95C5C",
    title: "Cách quay lại sau khi mất động lực",
    summary: "Mất động lực không có nghĩa là thất bại. Đây là cách tiếp tục mà không phán xét bản thân.",
    body: [
      "Mất động lực là một phần tự nhiên của bất kỳ thay đổi nào. Không ai duy trì được đà 100% mỗi ngày. Vấn đề không phải là không vấp ngã — mà là cách bạn phản ứng sau đó.",
      "Khi mất đà, hãy bắt đầu lại với một bước nhỏ hơn phiên bản gốc. Nếu bạn bỏ đọc sách 2 tuần, đừng cố đọc 30 phút ngay hôm nay — đọc 5 phút thôi.",
      "Tránh tâm lý 'tất cả hoặc không có gì'. Thực hiện 20% kế hoạch gốc vẫn tốt hơn 0%. Mỗi lần quay lại, dù nhỏ, đều là một chiến thắng.",
    ],
    author: "Chuyên gia Phát triển Cá nhân WealthRISE", reviewedDate:"Tháng 9, 2026", readingMins:4,
    goalIds: ["growth", "confidence"],
    claims: [{ id:"motivation-claim", text:"Bắt đầu lại với bước nhỏ hơn thường hiệu quả hơn cố gắng quay về kế hoạch ban đầu ngay lập tức.", evidenceLevel:2, evidenceLabel:"Hạn chế" }],
    relatedChallenge: { id:"c-reading", icon:"📖", title:"7 ngày đọc sách 10 phút", duration:"7 ngày", effort:"~10 phút/ngày" },
    coverGradient: "linear-gradient(135deg,#402008,#906020)",
  },

  /* ── CÂN BẰNG CUỘC SỐNG ── */
  {
    id: "balance-no-social",
    topicId: "balance", topicLabel:"Cân bằng cuộc sống", topicIcon:"⚖️", topicBg:"#EDF5EF", topicAccent:"#7B987E",
    title: "Một buổi tối không mạng xã hội",
    summary: "Thử một buổi tối hoàn toàn không cuộn feed. Nhiều người cảm thấy bình tĩnh hơn sau đó.",
    body: [
      "Mạng xã hội không xấu, nhưng việc cuộn vô tận trước khi ngủ thường không giúp bạn thư giãn — ngược lại, nó giữ não bộ ở trạng thái kích thích cao.",
      "Thử tắt mạng xã hội từ 8 giờ tối. Thay vào đó: đọc sách, nghe nhạc yên tĩnh, nói chuyện với ai đó, hay chỉ ngồi yên. Nhiều người báo cáo cảm giác bình tĩnh và ngủ dễ hơn sau một vài lần thử.",
      "Không cần cai hoàn toàn. Chỉ cần tạo ra một khoảng thời gian trong ngày không có màn hình — và quan sát xem bạn cảm thấy thế nào.",
    ],
    author: "Chuyên gia Cân bằng Cuộc sống WealthRISE", reviewedDate:"Tháng 8, 2026", readingMins:3,
    goalIds: ["balance", "stress"],
    claims: [{ id:"social-media-claim", text:"Sử dụng mạng xã hội nhiều trước khi ngủ có thể ảnh hưởng đến chất lượng giấc ngủ.", evidenceLevel:3, evidenceLabel:"Trung bình" }],
    relatedChallenge: { id:"c-detox", icon:"📵", title:"7 ngày digital detox", duration:"7 ngày", effort:"~30 phút/ngày" },
    coverGradient: "linear-gradient(135deg,#3A2850,#7A5898)",
  },
  {
    id: "balance-study-rest",
    topicId: "balance", topicLabel:"Cân bằng cuộc sống", topicIcon:"⚖️", topicBg:"#EDF5EF", topicAccent:"#7B987E",
    title: "Tạo khoảng nghỉ giữa học tập và nghỉ ngơi",
    summary: "Chuyển ngay từ học/làm việc sang giải trí không cho não bộ thời gian chuyển trạng thái.",
    body: [
      "Não bộ cần thời gian để chuyển từ trạng thái tập trung cao sang thư giãn. Nếu bạn đóng sách rồi cầm điện thoại ngay lập tức, não vẫn đang ở trạng thái xử lý.",
      "Tạo một 'nghi thức chuyển trạng thái' ngắn: đứng dậy, uống nước, đi bộ vài bước, hoặc nhìn ra ngoài cửa sổ vài phút. Những hành động nhỏ này giúp não bộ 'tắt' chế độ làm việc.",
      "Sau nghi thức này, thời gian giải trí của bạn thường chất lượng hơn — bạn thực sự thư giãn thay vì chỉ nhìn màn hình trong khi vẫn nghĩ về công việc.",
    ],
    author: "Chuyên gia Cân bằng Cuộc sống WealthRISE", reviewedDate:"Tháng 9, 2026", readingMins:4,
    goalIds: ["balance"],
    claims: [{ id:"transition-claim", text:"Tạo ranh giới rõ ràng giữa thời gian làm việc và nghỉ ngơi thường giúp chất lượng cả hai tốt hơn.", evidenceLevel:2, evidenceLabel:"Hạn chế" }],
    relatedChallenge: { id:"c-balance", icon:"⚖️", title:"14 ngày routine buổi tối", duration:"14 ngày", effort:"~15 phút/ngày" },
    coverGradient: "linear-gradient(135deg,#3A2858,#7858A8)",
  },
  {
    id: "balance-weekend",
    topicId: "balance", topicLabel:"Cân bằng cuộc sống", topicIcon:"⚖️", topicBg:"#EDF5EF", topicAccent:"#7B987E",
    title: "Routine cuối tuần nhẹ nhàng",
    summary: "Cuối tuần không nhất thiết phải năng suất hay hoàn toàn thư giãn — tìm điểm giữa là chìa khoá.",
    body: [
      "Nhiều người cảm thấy áp lực phải 'tận dụng' cuối tuần — học thêm, tập thể dục, dọn nhà, gặp gỡ bạn bè. Kết quả là đầu tuần còn mệt hơn.",
      "Một cuối tuần cân bằng có thể bao gồm: một hoạt động vui vẻ bạn thực sự muốn làm, một khoảng thời gian nghỉ ngơi thật sự, và một vài việc cần làm nhưng không vì áp lực.",
      "Điều quan trọng không phải là làm được bao nhiêu — mà là bạn cảm thấy thế nào khi bước vào thứ Hai. Nếu bạn cảm thấy được nạp năng lượng, cuối tuần đó thành công.",
    ],
    author: "Chuyên gia Cân bằng Cuộc sống WealthRISE", reviewedDate:"Tháng 8, 2026", readingMins:4,
    goalIds: ["balance"],
    claims: [{ id:"weekend-claim", text:"Xen kẽ thời gian nghỉ ngơi và hoạt động có kế hoạch trong cuối tuần thường giúp phục hồi năng lượng tốt hơn.", evidenceLevel:2, evidenceLabel:"Hạn chế" }],
    relatedChallenge: { id:"c-balance", icon:"⚖️", title:"14 ngày routine buổi tối", duration:"14 ngày", effort:"~15 phút/ngày" },
    coverGradient: "linear-gradient(135deg,#3A2858,#8060B0)",
  },

  /* ── KẾT NỐI XÃ HỘI ── */
  {
    id: "community-message",
    topicId: "community", topicLabel:"Kết nối xã hội", topicIcon:"👥", topicBg:"#FDF0F1", topicAccent:"#F4A7A2",
    title: "Một tin nhắn nhỏ cũng có thể duy trì kết nối",
    summary: "Kết nối với người thân không cần phải là cuộc gặp gỡ dài — đôi khi chỉ một tin nhắn ngắn là đủ.",
    body: [
      "Chúng ta thường chờ có nhiều thời gian rồi mới liên lạc với bạn bè hay người thân. Nhưng thời gian 'hoàn hảo' thường không đến — và kết nối dần trở nên xa cách.",
      "Nghiên cứu về mạng lưới xã hội cho thấy tần suất tiếp xúc — dù ngắn — quan trọng hơn độ sâu của mỗi lần gặp. Một tin nhắn 'Dạo này bạn thế nào?' gửi đến đúng người, đúng lúc có thể duy trì mối quan hệ hiệu quả.",
      "Thử một thử thách nhỏ: mỗi tuần nhắn tin hoặc gọi điện cho một người bạn chưa liên lạc một thời gian. Không cần lý do đặc biệt — chỉ để hỏi thăm.",
    ],
    author: "Chuyên gia Sức khoẻ Cộng đồng WealthRISE", reviewedDate:"Tháng 9, 2026", readingMins:4,
    goalIds: ["community"],
    claims: [{ id:"connection-claim", text:"Duy trì các mối quan hệ xã hội thường xuyên được liên quan đến sức khoẻ tinh thần và tuổi thọ tốt hơn.", evidenceLevel:4, evidenceLabel:"Mạnh" }],
    relatedChallenge: { id:"c-community", icon:"👥", title:"7 ngày kết nối với người thân", duration:"7 ngày", effort:"~5 phút/ngày" },
    coverGradient: "linear-gradient(135deg,#3A2018,#A84830)",
  },
  {
    id: "community-habits",
    topicId: "community", topicLabel:"Kết nối xã hội", topicIcon:"👥", topicBg:"#FDF0F1", topicAccent:"#F4A7A2",
    title: "Làm sao tìm người cùng xây thói quen?",
    summary: "Thực hiện thói quen cùng người khác — dù chỉ là nhắn tin chia sẻ — thường dễ duy trì hơn một mình.",
    body: [
      "Một trong những yếu tố dự đoán tốt nhất về việc duy trì thói quen là có người đồng hành. Đây không nhất thiết phải là bạn cùng phòng gym hay bạn tập yoga — có thể chỉ là một người bạn cùng cam kết và nhắn tin chia sẻ tiến độ.",
      "Nhóm WealthRISE được thiết kế cho điều này: bạn không cần gặp mặt, không cần có cùng lịch — chỉ cần chia sẻ hành trình và nhận sự động viên từ người đang làm điều tương tự.",
      "Bắt đầu bằng cách mời một người bạn cùng thử một thói quen mới trong 7 ngày. Đặt quy tắc đơn giản: mỗi tối, ai hoàn thành thì nhắn 'xong' vào group chat.",
    ],
    author: "Chuyên gia Sức khoẻ Cộng đồng WealthRISE", reviewedDate:"Tháng 8, 2026", readingMins:4,
    goalIds: ["community", "growth"],
    claims: [{ id:"accountability-claim", text:"Có người đồng hành và cam kết công khai thường giúp duy trì thói quen tốt hơn.", evidenceLevel:3, evidenceLabel:"Trung bình" }],
    relatedChallenge: { id:"c-community", icon:"👥", title:"7 ngày kết nối với người thân", duration:"7 ngày", effort:"~5 phút/ngày" },
    coverGradient: "linear-gradient(135deg,#301828,#884868)",
  },
  {
    id: "community-support",
    topicId: "community", topicLabel:"Kết nối xã hội", topicIcon:"👥", topicBg:"#FDF0F1", topicAccent:"#F4A7A2",
    title: "Hỗ trợ bạn bè mà không tạo áp lực",
    summary: "Đôi khi cách tốt nhất để giúp người khác là lắng nghe — không phải đưa ra lời khuyên.",
    body: [
      "Khi bạn bè chia sẻ khó khăn, bản năng tự nhiên của chúng ta thường là cố gắng 'giải quyết' vấn đề cho họ. Nhưng nhiều khi, người kia chỉ cần được lắng nghe.",
      "Câu hỏi đơn giản 'Bạn muốn mình giúp tìm giải pháp, hay chỉ muốn được nói chuyện?' có thể thay đổi hoàn toàn cuộc trò chuyện. Nó cho người kia quyền kiểm soát và tạo cảm giác được tôn trọng.",
      "Hỗ trợ tốt nhất không phải lúc nào cũng là thay đổi hoàn cảnh của người khác — đôi khi chỉ là hiện diện và nói 'Mình hiểu, điều đó nghe có vẻ khó thật.'",
    ],
    author: "Chuyên gia Sức khoẻ Cộng đồng WealthRISE", reviewedDate:"Tháng 7, 2026", readingMins:3,
    goalIds: ["community", "confidence"],
    claims: [{ id:"support-claim", text:"Lắng nghe tích cực thường hiệu quả hơn đưa ra lời khuyên trong việc hỗ trợ cảm xúc.", evidenceLevel:3, evidenceLabel:"Trung bình" }],
    relatedChallenge: { id:"c-community", icon:"👥", title:"7 ngày kết nối với người thân", duration:"7 ngày", effort:"~5 phút/ngày" },
    coverGradient: "linear-gradient(135deg,#3A2818,#C07030)",
  },

  /* ── GIẤC NGỦ (thêm) ── */
  {
    id: "sleep-nap",
    topicId: "sleep", topicLabel:"Giấc ngủ", topicIcon:"🌙", topicBg:"#F2EDF8", topicAccent:"#A896CC",
    title: "Ngủ trưa ngắn: lợi ích và cách làm đúng",
    summary: "Giấc ngủ trưa 10–20 phút có thể phục hồi sự tỉnh táo và tăng hiệu suất chiều.",
    body: [
      "Giấc ngủ trưa ngắn (power nap) đã được nghiên cứu rộng rãi và cho thấy có thể cải thiện sự tỉnh táo, phản ứng, và tâm trạng trong vài giờ sau đó.",
      "Thời gian lý tưởng là 10–20 phút. Ngủ quá 30 phút có nguy cơ rơi vào giấc ngủ sâu, khiến bạn thức dậy cảm thấy lơ mơ ('sleep inertia').",
      "Thời điểm tốt nhất: 13:00–15:00, khi cơ thể tự nhiên có xu hướng giảm tỉnh táo. Tránh ngủ trưa sau 15:00 vì có thể ảnh hưởng đến giấc ngủ tối.",
    ],
    author: "Chuyên gia Sức khoẻ WealthRISE", reviewedDate:"Tháng 9, 2026", readingMins:4,
    goalIds: ["sleep"],
    claims: [{ id:"nap-claim", text:"Ngủ trưa 10–20 phút có thể cải thiện sự tỉnh táo và hiệu suất nhận thức trong vài giờ tiếp theo.", evidenceLevel:3, evidenceLabel:"Trung bình" }],
    relatedChallenge: { id:"sleep-7", icon:"🌙", title:"7 ngày ngủ đúng giờ", duration:"7 ngày", effort:"~5 phút/ngày" },
    coverGradient: "linear-gradient(135deg,#301840,#705098)",
  },
  {
    id: "sleep-caffeine",
    topicId: "sleep", topicLabel:"Giấc ngủ", topicIcon:"🌙", topicBg:"#F2EDF8", topicAccent:"#A896CC",
    title: "Caffeine và giấc ngủ: những điều bạn chưa biết",
    summary: "Caffeine có thể ở lại trong cơ thể lâu hơn bạn nghĩ — và không chỉ ảnh hưởng đến giấc ngủ tối.",
    body: [
      "Thời gian bán thải của caffeine trong cơ thể là khoảng 5–6 giờ. Điều này có nghĩa một nửa lượng caffeine từ cốc cà phê lúc 14:00 vẫn còn trong người bạn lúc 20:00.",
      "Caffeine không chỉ khó ngủ — nó còn làm giảm giấc ngủ sâu (slow-wave sleep), dù bạn có thể vẫn ngủ được. Đây có thể là lý do bạn ngủ đủ tiếng nhưng vẫn mệt.",
      "Hướng dẫn đơn giản: không dùng caffeine sau 14:00. Nếu bạn nhạy cảm hơn trung bình, 12:00 là thời điểm an toàn hơn.",
    ],
    author: "Chuyên gia Sức khoẻ WealthRISE", reviewedDate:"Tháng 8, 2026", readingMins:3,
    goalIds: ["sleep", "eat"],
    claims: [{ id:"caffeine-claim", text:"Caffeine có thể giảm chất lượng giấc ngủ sâu ngay cả khi uống nhiều giờ trước khi ngủ.", evidenceLevel:4, evidenceLabel:"Mạnh" }],
    relatedChallenge: { id:"sleep-no-caffeine", icon:"☕", title:"Không caffeine sau 14:00", duration:"7 ngày", effort:"Quyết tâm nhỏ" },
    coverGradient: "linear-gradient(135deg,#3A1828,#8A4068)",
  },

  /* ── DINH DƯỠNG (thêm) ── */
  {
    id: "nutrition-sugar",
    topicId: "nutrition", topicLabel:"Dinh dưỡng", topicIcon:"🥗", topicBg:"#EDF5EF", topicAccent:"#7B987E",
    title: "Đường ẩn trong thực phẩm hàng ngày",
    summary: "Nhiều thực phẩm 'lành mạnh' vẫn chứa nhiều đường ẩn. Biết cách đọc nhãn là kỹ năng cần thiết.",
    body: [
      "Đường không chỉ có trong kẹo và nước ngọt. Sữa chua có hương vị, nước ép đóng hộp, bánh mì trắng, và nhiều sốt đóng gói đều có thể chứa lượng đường đáng kể.",
      "Trên nhãn dinh dưỡng, đường thường được liệt kê dưới nhiều tên khác nhau: sucrose, fructose, glucose, maltose, corn syrup. Tổng cộng chúng lại để hiểu lượng đường thật sự.",
      "Mục tiêu thực tế: giảm dần đồ uống có đường và thay bằng nước lọc, trà không đường. Không cần loại bỏ hoàn toàn — nhận thức và giảm dần đã tạo ra khác biệt lớn.",
    ],
    author: "Chuyên gia Dinh dưỡng WealthRISE", reviewedDate:"Tháng 9, 2026", readingMins:4,
    goalIds: ["eat"],
    claims: [{ id:"sugar-claim", text:"Tiêu thụ nhiều đường thêm thường được liên quan đến tăng cân và nguy cơ bệnh chuyển hoá.", evidenceLevel:4, evidenceLabel:"Mạnh" }],
    relatedChallenge: { id:"no-sugar-7", icon:"🚫", title:"7 ngày không đồ uống có đường", duration:"7 ngày", effort:"Quyết tâm nhỏ" },
    coverGradient: "linear-gradient(135deg,#1A3018,#3A6828)",
  },
  {
    id: "nutrition-meal-timing",
    topicId: "nutrition", topicLabel:"Dinh dưỡng", topicIcon:"🥗", topicBg:"#EDF5EF", topicAccent:"#7B987E",
    title: "Ăn đúng giờ có quan trọng không?",
    summary: "Không chỉ ăn gì mà còn khi nào ăn — khoa học về nhịp sinh học và dinh dưỡng.",
    body: [
      "Khoa học về 'chronobiology' cho thấy thời điểm ăn có thể ảnh hưởng đến cách cơ thể xử lý thức ăn. Cùng một bữa ăn ăn vào buổi sáng và buổi tối có thể ảnh hưởng khác nhau đến đường huyết và chuyển hoá.",
      "Nói chung, tập trung bữa ăn lớn hơn vào buổi sáng và chiều, giảm ăn muộn buổi tối có xu hướng hỗ trợ chuyển hoá và giấc ngủ tốt hơn.",
      "Điều quan trọng nhất vẫn là ăn đủ chất, đủ lượng phù hợp với nhu cầu cá nhân. Thời điểm ăn là yếu tố bổ sung, không phải yếu tố quyết định duy nhất.",
    ],
    author: "Chuyên gia Dinh dưỡng WealthRISE", reviewedDate:"Tháng 8, 2026", readingMins:5,
    goalIds: ["eat", "sleep"],
    claims: [{ id:"meal-timing-claim", text:"Ăn bữa chính vào sáng và chiều thay vì tối muộn có thể hỗ trợ kiểm soát đường huyết và chất lượng giấc ngủ.", evidenceLevel:3, evidenceLabel:"Trung bình" }],
    relatedChallenge: { id:"breakfast-14", icon:"🍳", title:"14 ngày ăn sáng đều đặn", duration:"14 ngày", effort:"~15 phút/ngày" },
    coverGradient: "linear-gradient(135deg,#1A3018,#387028)",
  },

  /* ── VẬN ĐỘNG (thêm) ── */
  {
    id: "movement-steps",
    topicId: "movement", topicLabel:"Vận động", topicIcon:"🏃", topicBg:"#FFF2EC", topicAccent:"#F28C64",
    title: "10.000 bước mỗi ngày — có cần thiết không?",
    summary: "Con số 10.000 bước nổi tiếng đến từ đâu? Và bao nhiêu bước thật sự đủ?",
    body: [
      "Con số 10.000 bước/ngày thực ra xuất phát từ một chiến dịch marketing của Nhật Bản vào thập niên 1960, không phải từ nghiên cứu khoa học. Tuy nhiên, các nghiên cứu sau đó đã xác nhận lợi ích thực sự của việc tăng số bước chân.",
      "Nghiên cứu gần đây cho thấy lợi ích sức khoẻ tăng đáng kể từ khoảng 4.000–7.500 bước/ngày. Sau đó, lợi ích tăng thêm nhưng chậm hơn. 10.000 bước là mục tiêu tốt — nhưng 6.000 bước vẫn mang lại lợi ích đáng kể.",
      "Quan trọng hơn số tuyệt đối là xu hướng: nếu bạn đang đi 2.000 bước/ngày, tăng lên 4.000 sẽ có tác động lớn hơn nhiều so với tăng từ 9.000 lên 10.000.",
    ],
    author: "Chuyên gia Vận động WealthRISE", reviewedDate:"Tháng 9, 2026", readingMins:4,
    goalIds: ["exercise"],
    claims: [{ id:"steps-claim", text:"Nghiên cứu cho thấy lợi ích sức khoẻ đáng kể bắt đầu từ 4.000–7.500 bước/ngày.", evidenceLevel:3, evidenceLabel:"Trung bình" }],
    relatedChallenge: { id:"steps-5k-14", icon:"👟", title:"14 ngày 5000 bước", duration:"14 ngày", effort:"Suốt ngày" },
    coverGradient: "linear-gradient(135deg,#0A2A5A,#1A5AAA)",
  },
  {
    id: "movement-strength",
    topicId: "movement", topicLabel:"Vận động", topicIcon:"🏃", topicBg:"#FFF2EC", topicAccent:"#F28C64",
    title: "Tập sức mạnh: không cần gym mới bắt đầu được",
    summary: "Bài tập thể trọng tại nhà có hiệu quả thật sự — và dễ duy trì hơn khi không cần di chuyển.",
    body: [
      "Tập sức mạnh không có nghĩa phải đến phòng gym hay có dụng cụ. Squat, push-up, plank, lunge, và bridge là 5 động tác thể trọng cơ bản có thể xây dựng sức mạnh toàn thân.",
      "Ưu điểm của tập tại nhà: không tốn thời gian di chuyển, không áp lực về môi trường, và dễ hình thành thói quen hơn. Nhiều người duy trì tốt hơn khi thực hiện được ngay sau khi thức dậy hoặc trước khi ngủ.",
      "Bắt đầu với 10 phút: 10 squat, 5 push-up (có thể trên gối), 20 giây plank. Tăng dần mỗi tuần. Sau 4 tuần, bạn sẽ ngạc nhiên với sự thay đổi.",
    ],
    author: "Chuyên gia Vận động WealthRISE", reviewedDate:"Tháng 8, 2026", readingMins:4,
    goalIds: ["exercise"],
    claims: [{ id:"strength-claim", text:"Tập sức mạnh đều đặn có thể cải thiện mật độ xương và trao đổi chất ngay cả khi không dùng tạ.", evidenceLevel:4, evidenceLabel:"Mạnh" }],
    relatedChallenge: { id:"bodyweight-21", icon:"💪", title:"21 ngày tập thể trọng", duration:"21 ngày", effort:"10 phút/ngày" },
    coverGradient: "linear-gradient(135deg,#1A3A5A,#3A7A9A)",
  },

  /* ── TINH THẦN (thêm) ── */
  {
    id: "mindset-anxiety",
    topicId: "mindset", topicLabel:"Tinh thần & Stress", topicIcon:"🧘", topicBg:"#F2EDF8", topicAccent:"#A896CC",
    title: "Phân biệt lo lắng bình thường và lo âu cần hỗ trợ",
    summary: "Lo lắng là cảm xúc bình thường. Nhưng khi nào thì cần tìm đến hỗ trợ chuyên nghiệp?",
    body: [
      "Lo lắng là phản ứng tự nhiên trước tình huống không chắc chắn. Nó giúp chúng ta chuẩn bị và đề phòng. Tuy nhiên, khi lo lắng trở nên liên tục, khó kiểm soát và ảnh hưởng đến sinh hoạt hàng ngày, đó có thể là dấu hiệu cần chú ý hơn.",
      "Dấu hiệu lo âu cần tìm hỗ trợ: khó tập trung do lo lắng kéo dài hơn 2 tuần, tránh né các hoạt động thường ngày vì sợ hãi, hoặc cơ thể liên tục căng thẳng mà không có lý do rõ ràng.",
      "Nếu bạn nhận ra những dấu hiệu này, đó không phải là điểm yếu — đó là sự nhận thức. Tìm đến chuyên gia tâm lý là bước trưởng thành và dũng cảm.",
    ],
    author: "Chuyên gia Sức khoẻ Tâm lý WealthRISE", reviewedDate:"Tháng 9, 2026", readingMins:5,
    goalIds: ["stress"],
    claims: [{ id:"anxiety-claim", text:"Lo âu kéo dài ảnh hưởng đến chức năng hàng ngày thường được điều trị hiệu quả với hỗ trợ chuyên nghiệp.", evidenceLevel:4, evidenceLabel:"Mạnh" }],
    relatedChallenge: { id:"meditate-5", icon:"🪷", title:"5 ngày thiền đầu tiên", duration:"5 ngày", effort:"3 phút/ngày" },
    coverGradient: "linear-gradient(135deg,#4A2A0A,#8A5A20)",
  },
  {
    id: "mindset-gratitude",
    topicId: "mindset", topicLabel:"Tinh thần & Stress", topicIcon:"🧘", topicBg:"#F2EDF8", topicAccent:"#A896CC",
    title: "Khoa học đằng sau tập luyện biết ơn",
    summary: "Viết điều biết ơn mỗi ngày có thể thay đổi não bộ theo nghĩa đen — và cảm xúc theo nghĩa bóng.",
    body: [
      "Nghiên cứu về tâm lý học tích cực cho thấy thực hành biết ơn thường xuyên có liên quan đến tăng cảm giác hạnh phúc, giảm triệu chứng trầm cảm và lo âu nhẹ.",
      "Cơ chế được đề xuất: khi bạn cố ý tìm kiếm điều tốt trong ngày, não bộ dần hình thành thói quen chú ý nhiều hơn đến những điều tích cực — thay vì mặc định tập trung vào vấn đề.",
      "Không cần phức tạp: chỉ 3 câu mỗi sáng hoặc tối. Cụ thể hơn thường tốt hơn — 'Biết ơn vì ly cà phê ngon sáng nay' có thể hiệu quả hơn 'Biết ơn vì có sức khoẻ'.",
    ],
    author: "Chuyên gia Sức khoẻ Tâm lý WealthRISE", reviewedDate:"Tháng 8, 2026", readingMins:4,
    goalIds: ["stress", "confidence"],
    claims: [{ id:"gratitude-claim", text:"Thực hành biết ơn đều đặn thường được liên quan đến cải thiện cảm xúc tích cực và giảm lo âu.", evidenceLevel:3, evidenceLabel:"Trung bình" }],
    relatedChallenge: { id:"gratitude-7", icon:"🙏", title:"7 ngày biết ơn", duration:"7 ngày", effort:"3 phút/ngày" },
    coverGradient: "linear-gradient(135deg,#3A2808,#7A5818)",
  },

  /* ── PHÁT TRIỂN BẢN THÂN (thêm) ── */
  {
    id: "growth-habit-stacking",
    topicId: "growth", topicLabel:"Phát triển bản thân", topicIcon:"📖", topicBg:"#FBEDEE", topicAccent:"#D95C5C",
    title: "Habit stacking: ghép thói quen để không quên",
    summary: "Gắn thói quen mới vào thói quen đã có là một trong những cách xây dựng thói quen hiệu quả nhất.",
    body: [
      "Habit stacking là kỹ thuật gắn một hành vi mới vào một hành vi đã có sẵn, theo công thức: 'SAU KHI [thói quen cũ], tôi sẽ [thói quen mới]'.",
      "Ví dụ: 'Sau khi rót cà phê sáng, tôi sẽ viết 3 điều biết ơn.' Hoặc 'Sau khi đánh răng tối, tôi sẽ đọc 5 trang sách.' Thói quen cũ trở thành dấu hiệu tự động nhắc nhở thói quen mới.",
      "Ưu điểm: không cần nhớ thêm điều gì cả. Bộ não liên kết hai hành vi theo thời gian, biến thói quen mới thành phần tự nhiên của ngày.",
    ],
    author: "Chuyên gia Phát triển Cá nhân WealthRISE", reviewedDate:"Tháng 9, 2026", readingMins:4,
    goalIds: ["growth"],
    claims: [{ id:"stacking-claim", text:"Gắn thói quen mới vào thói quen đã có giúp tăng tỷ lệ duy trì theo các nghiên cứu về thay đổi hành vi.", evidenceLevel:3, evidenceLabel:"Trung bình" }],
    relatedChallenge: { id:"plan-7", icon:"📋", title:"7 ngày lập kế hoạch ngày", duration:"7 ngày", effort:"3 phút/ngày" },
    coverGradient: "linear-gradient(135deg,#480818,#B83030)",
  },
  {
    id: "growth-identity",
    topicId: "growth", topicLabel:"Phát triển bản thân", topicIcon:"📖", topicBg:"#FBEDEE", topicAccent:"#D95C5C",
    title: "Thay đổi thật sự bắt đầu từ danh tính",
    summary: "Thay vì hỏi 'Làm sao để chạy bộ?', hãy hỏi 'Người chạy bộ sẽ làm gì hôm nay?'",
    body: [
      "Có hai cách tiếp cận thay đổi hành vi: tập trung vào kết quả ('Tôi muốn gầy hơn') hoặc tập trung vào danh tính ('Tôi là người sống lành mạnh'). Cách tiếp cận thứ hai thường bền vững hơn.",
      "Khi bạn hành động nhất quán với danh tính mong muốn, mỗi hành động nhỏ trở thành bằng chứng về người bạn đang trở thành. Uống ly nước sáng: 'Đây là điều người chăm sóc sức khoẻ làm.' Đọc 5 trang: 'Tôi là người đọc sách.'",
      "Bắt đầu từ đây: Bạn muốn trở thành ai? Người đó làm gì mỗi ngày? Chọn một hành động nhỏ phù hợp và thực hiện hôm nay — không phải vì mục tiêu, mà vì đó là con người bạn muốn trở thành.",
    ],
    author: "Chuyên gia Phát triển Cá nhân WealthRISE", reviewedDate:"Tháng 9, 2026", readingMins:5,
    goalIds: ["growth", "confidence"],
    claims: [{ id:"identity-claim", text:"Thay đổi hành vi dựa trên danh tính thường bền vững hơn so với thay đổi dựa trên kết quả.", evidenceLevel:2, evidenceLabel:"Hạn chế" }],
    relatedChallenge: { id:"learn-5", icon:"🎯", title:"5 ngày học điều mới", duration:"5 ngày", effort:"15 phút/ngày" },
    coverGradient: "linear-gradient(135deg,#401828,#A03858)",
  },

  /* ── CÂN BẰNG (thêm) ── */
  {
    id: "balance-boundaries",
    topicId: "balance", topicLabel:"Cân bằng cuộc sống", topicIcon:"⚖️", topicBg:"#EDF5EF", topicAccent:"#7B987E",
    title: "Học cách nói không mà không cảm thấy tội lỗi",
    summary: "Ranh giới rõ ràng là dấu hiệu của sức khoẻ tinh thần, không phải sự ích kỷ.",
    body: [
      "Nhiều người khó nói không vì sợ làm người khác thất vọng, sợ bị đánh giá, hoặc cảm thấy mình phải 'gánh' mọi thứ. Nhưng nói có với mọi thứ thường có nghĩa nói không với sức khoẻ và thời gian của bản thân.",
      "Ranh giới lành mạnh không có nghĩa là thờ ơ. Nó có nghĩa bạn biết mình có thể và không thể làm gì một cách chân thật. Khi bạn giúp đỡ từ vị trí có đủ năng lượng, sự hỗ trợ đó thường chất lượng hơn.",
      "Bước đầu tiên: tập nhận ra khi nào bạn nói 'có' vì thật sự muốn, và khi nào vì áp lực. Nhận thức đó là nền tảng để thay đổi dần dần.",
    ],
    author: "Chuyên gia Cân bằng Cuộc sống WealthRISE", reviewedDate:"Tháng 9, 2026", readingMins:4,
    goalIds: ["balance", "confidence"],
    claims: [{ id:"boundaries-claim", text:"Ranh giới lành mạnh thường được liên quan đến sức khoẻ tinh thần tốt hơn và mối quan hệ bền vững hơn.", evidenceLevel:3, evidenceLabel:"Trung bình" }],
    relatedChallenge: { id:"no-work-evening", icon:"🚫", title:"Không làm việc sau 21:00", duration:"7 ngày", effort:"Kỷ luật nhỏ" },
    coverGradient: "linear-gradient(135deg,#382050,#784098)",
  },

  /* ── KẾT NỐI (thêm) ── */
  {
    id: "community-alone",
    topicId: "community", topicLabel:"Kết nối xã hội", topicIcon:"👥", topicBg:"#FDF0F1", topicAccent:"#F4A7A2",
    title: "Cô đơn không phải là xấu — nhưng cô lập thì có thể là vấn đề",
    summary: "Phân biệt giữa 'một mình chọn lựa' và 'cô lập không muốn' — và cách nhận ra sự khác biệt.",
    body: [
      "Không phải mọi thời gian một mình đều có hại. Thời gian một mình có chủ đích — thiền, đọc sách, suy nghĩ — có thể rất bổ ích và cần thiết cho sức khoẻ tinh thần.",
      "Cô lập xã hội không mong muốn — khi bạn muốn kết nối nhưng không có cơ hội hoặc cảm thấy không thể — là vấn đề khác và thường có ảnh hưởng tiêu cực đến sức khoẻ.",
      "Dấu hiệu cần chú ý: cảm thấy không ai hiểu mình, tránh né xã hội vì sợ bị từ chối, hoặc cảm thấy cô đơn dù đang ở giữa đám đông. Những cảm giác này đáng được nói chuyện với ai đó.",
    ],
    author: "Chuyên gia Sức khoẻ Cộng đồng WealthRISE", reviewedDate:"Tháng 8, 2026", readingMins:4,
    goalIds: ["community", "stress"],
    claims: [{ id:"isolation-claim", text:"Cô lập xã hội kéo dài có liên quan đến nguy cơ cao hơn về các vấn đề sức khoẻ tinh thần và thể chất.", evidenceLevel:4, evidenceLabel:"Mạnh" }],
    relatedChallenge: { id:"connect", icon:"👥", title:"Nhắn tin hỏi thăm 1 người thân", duration:"Hàng tuần", effort:"5 phút" },
    coverGradient: "linear-gradient(135deg,#301828,#804060)",
  },

  /* ── TẬP TRUNG & NĂNG SUẤT ── */
  {
    id: "focus-routine",
    topicId: "focus", topicLabel:"Tập trung & Năng suất", topicIcon:"🎯", topicBg:"#FBEDEE", topicAccent:"#D95C5C",
    title: "Routine 10 phút để bắt đầu làm việc",
    summary: "Khởi đầu tốt là một nửa công việc. 10 phút chuẩn bị có thể tiết kiệm 2 giờ phân tâm.",
    body: [
      "Một trong những rào cản lớn nhất của năng suất là 'khởi động chậm' — bạn ngồi vào bàn nhưng mất 30 phút để thực sự bắt đầu. Routine khởi đầu giúp não chuyển vào chế độ tập trung nhanh hơn.",
      "Routine 10 phút gợi ý: (1) Đặt điện thoại sang một bên, (2) Viết 3 việc cần hoàn thành hôm nay, (3) Chọn 1 việc ưu tiên nhất, (4) Đặt timer 25 phút và bắt đầu ngay.",
      "Tính nhất quán quan trọng hơn nội dung cụ thể. Một routine đơn giản thực hiện mỗi ngày sẽ tạo phản xạ tâm lý: 'Sau bước này, mình bắt đầu làm việc thật sự.'",
    ],
    author: "Chuyên gia Năng suất WealthRISE", reviewedDate:"Tháng 9, 2026", readingMins:4,
    goalIds: ["balance", "growth"],
    claims: [{ id:"focus-routine-claim", text:"Routine khởi đầu nhất quán có thể giúp rút ngắn thời gian chuyển vào trạng thái tập trung.", evidenceLevel:2, evidenceLabel:"Hạn chế" }],
    relatedChallenge: { id:"c-focus", icon:"🎯", title:"7 ngày không phân tâm khi làm việc", duration:"7 ngày", effort:"~25 phút/ngày" },
    coverGradient: "linear-gradient(135deg,#380808,#A03030)",
  },
  {
    id: "focus-tasks",
    topicId: "focus", topicLabel:"Tập trung & Năng suất", topicIcon:"🎯", topicBg:"#FBEDEE", topicAccent:"#D95C5C",
    title: "Chia nhỏ một nhiệm vụ đang khiến bạn trì hoãn",
    summary: "Trì hoãn thường không phải vì lười — mà vì nhiệm vụ quá mơ hồ hoặc quá lớn.",
    body: [
      "Khi nhìn vào một nhiệm vụ lớn mà không biết bắt đầu từ đâu, não bộ thường chọn cách an toàn nhất: tránh né. Đây là cơ chế bình thường, không phải thiếu ý chí.",
      "Phương pháp đơn giản để bắt đầu: hỏi 'Bước nhỏ nhất tôi có thể làm ngay bây giờ là gì?' Không phải 'làm xong cả việc' — mà chỉ bước đầu tiên. Mở file lên. Viết 1 câu. Đọc 1 trang tài liệu.",
      "Sau khi bắt đầu, não bộ thường tự động muốn tiếp tục. Rào cản lớn nhất là khởi đầu — không phải duy trì.",
    ],
    author: "Chuyên gia Năng suất WealthRISE", reviewedDate:"Tháng 8, 2026", readingMins:4,
    goalIds: ["growth", "confidence"],
    claims: [{ id:"procrastination-claim", text:"Trì hoãn thường liên quan đến sự mơ hồ của nhiệm vụ hơn là thiếu động lực.", evidenceLevel:3, evidenceLabel:"Trung bình" }],
    relatedChallenge: { id:"c-focus", icon:"🎯", title:"7 ngày không phân tâm khi làm việc", duration:"7 ngày", effort:"~25 phút/ngày" },
    coverGradient: "linear-gradient(135deg,#481808,#B84828)",
  },
  {
    id: "focus-breaks",
    topicId: "focus", topicLabel:"Tập trung & Năng suất", topicIcon:"🎯", topicBg:"#FBEDEE", topicAccent:"#D95C5C",
    title: "Nghỉ ngắn thế nào để quay lại tập trung?",
    summary: "Không phải mọi nghỉ ngơi đều giúp phục hồi. Có những cách nghỉ giúp bạn tiếp tục tốt hơn.",
    body: [
      "Có sự khác biệt lớn giữa nghỉ 'phục hồi' và nghỉ 'phân tâm'. Cuộn mạng xã hội trong 15 phút thường khiến bạn khó quay lại công việc hơn là trước khi nghỉ.",
      "Nghỉ phục hồi hiệu quả: đứng dậy và đi bộ nhỏ, nhìn ra xa ngoài cửa sổ (giúp mắt nghỉ ngơi), uống nước, thở sâu vài lần. Không nhìn màn hình — kể cả điện thoại.",
      "Thời gian lý tưởng: 5–10 phút sau mỗi 45–90 phút tập trung. Ngắn hơn bạn nghĩ, nhưng chất lượng hơn nhiều so với nghỉ dài nhưng không thực sự nghỉ.",
    ],
    author: "Chuyên gia Năng suất WealthRISE", reviewedDate:"Tháng 9, 2026", readingMins:3,
    goalIds: ["balance", "stress"],
    claims: [{ id:"breaks-claim", text:"Nghỉ ngơi ngắn không dùng màn hình thường giúp phục hồi năng lực tập trung hiệu quả hơn.", evidenceLevel:3, evidenceLabel:"Trung bình" }],
    relatedChallenge: { id:"c-focus", icon:"🎯", title:"7 ngày không phân tâm khi làm việc", duration:"7 ngày", effort:"~25 phút/ngày" },
    coverGradient: "linear-gradient(135deg,#401818,#9A3838)",
  },
];

export const EXPERTS: Expert[] = [
  {
    id: "linh-nguyen",
    name: "Chuyên gia An (Giấc ngủ)",
    field: "Giấc ngủ & Tâm lý",
    experience: "Chuyên về hỗ trợ rối loạn giấc ngủ và lo âu, với nhiều năm tư vấn thực hành.",
    support: "Hướng dẫn thực hành · Tư vấn trực tuyến",
    avatar: "🌙", bg: "#F2EDF8",
    topicIds: ["sleep", "mindset"],
  },
  {
    id: "minh-tran",
    name: "Chuyên gia Minh (Vận động)",
    field: "Y học thể thao & Phục hồi",
    experience: "Chuyên sâu về vận động phục hồi và hiệu suất thể chất dài hạn.",
    support: "Đánh giá kế hoạch · Chia sẻ kiến thức",
    avatar: "🏋️", bg: "#FFF2EC",
    topicIds: ["movement", "balance"],
  },
  {
    id: "hoa-le",
    name: "Chuyên gia Hoa (Tâm lý)",
    field: "Sức khoẻ tinh thần & Chánh niệm",
    experience: "Hỗ trợ phát triển cá nhân và cân bằng cảm xúc qua các phương pháp chánh niệm.",
    support: "Hướng dẫn chánh niệm · Tư vấn cá nhân",
    avatar: "🪷", bg: "#F2EDF8",
    topicIds: ["mindset", "stress"],
  },
  {
    id: "nam-do",
    name: "Chuyên gia Nam (Dinh dưỡng)",
    field: "Dinh dưỡng ứng dụng",
    experience: "Tư vấn về dinh dưỡng hàng ngày và xây dựng thói quen ăn uống lành mạnh.",
    support: "Tư vấn cá nhân · Kế hoạch ăn uống",
    avatar: "🥗", bg: "#E8F5EC",
    topicIds: ["nutrition"],
  },
  {
    id: "linh-pham",
    name: "Chuyên gia Linh (Phát triển)",
    field: "Phát triển cá nhân & Năng suất",
    experience: "Hỗ trợ xây dựng thói quen, mục tiêu, và duy trì động lực dài hạn.",
    support: "Workshop trực tuyến · Kế hoạch cá nhân",
    avatar: "📖", bg: "#FBEDEE",
    topicIds: ["growth", "focus"],
  },
  {
    id: "thu-nguyen",
    name: "Chuyên gia Thu (Cân bằng)",
    field: "Cân bằng cuộc sống & Stress",
    experience: "Chuyên về quản lý stress và xây dựng nhịp sống lành mạnh cho học sinh, sinh viên.",
    support: "Nhóm hỗ trợ · Tư vấn nhỏ nhóm",
    avatar: "⚖️", bg: "#EDF5EF",
    topicIds: ["balance", "mindset"],
  },
  {
    id: "bao-tran",
    name: "Chuyên gia Bảo (Kết nối)",
    field: "Kết nối xã hội & Kỹ năng mềm",
    experience: "Hỗ trợ xây dựng mối quan hệ lành mạnh và kỹ năng giao tiếp hiệu quả.",
    support: "Tư vấn cá nhân · Workshop nhóm",
    avatar: "👥", bg: "#FDF0F1",
    topicIds: ["community", "growth"],
  },
  {
    id: "mai-le",
    name: "Chuyên gia Mai (Tập trung)",
    field: "Năng suất & Quản lý thời gian",
    experience: "Chuyên về kỹ thuật tập trung sâu và chống trì hoãn trong môi trường học tập.",
    support: "Kế hoạch học tập · Tư vấn cá nhân",
    avatar: "🎯", bg: "#FBEDEE",
    topicIds: ["focus", "growth"],
  },
  {
    id: "khoa-nguyen",
    name: "Chuyên gia Khoa (Giấc ngủ)",
    field: "Y học giấc ngủ & Đồng hồ sinh học",
    experience: "Nghiên cứu và ứng dụng khoa học giấc ngủ vào thực hành cải thiện chất lượng nghỉ ngơi.",
    support: "Đánh giá thói quen ngủ · Tư vấn cá nhân",
    avatar: "🌙", bg: "#F2EDF8",
    topicIds: ["sleep"],
  },
  {
    id: "phuong-le",
    name: "Chuyên gia Phương (Dinh dưỡng)",
    field: "Dinh dưỡng lâm sàng & Ăn có ý thức",
    experience: "Tư vấn xây dựng mối quan hệ lành mạnh với thức ăn, không áp lực hay kiêng khem cực đoan.",
    support: "Kế hoạch ăn uống · Workshop nhóm",
    avatar: "🥗", bg: "#E8F5EC",
    topicIds: ["nutrition", "balance"],
  },
  {
    id: "duc-tran",
    name: "Chuyên gia Đức (Tâm lý tích cực)",
    field: "Tâm lý học tích cực & Biết ơn",
    experience: "Ứng dụng nghiên cứu tâm lý học tích cực vào thực hành hàng ngày để tăng hạnh phúc bền vững.",
    support: "Workshop chánh niệm · Tư vấn nhỏ nhóm",
    avatar: "🙏", bg: "#FFF5E0",
    topicIds: ["mindset", "community"],
  },
  {
    id: "lan-thi",
    name: "Chuyên gia Lan (Vận động trị liệu)",
    field: "Vật lý trị liệu & Vận động phục hồi",
    experience: "Hỗ trợ phục hồi sau chấn thương và xây dựng thói quen vận động an toàn, đặc biệt với người mới bắt đầu.",
    support: "Đánh giá tư thế · Kế hoạch phục hồi",
    avatar: "🤸", bg: "#FFF2EC",
    topicIds: ["movement"],
  },
  {
    id: "tung-do",
    name: "Chuyên gia Tùng (Sức khoẻ toàn diện)",
    field: "Sức khoẻ toàn diện & Tích hợp",
    experience: "Kết hợp nhiều lĩnh vực — dinh dưỡng, vận động, giấc ngủ, tâm lý — để hỗ trợ lối sống bền vững.",
    support: "Tư vấn toàn diện · Kế hoạch cá nhân",
    avatar: "🌿", bg: "#E8F5EC",
    topicIds: ["sleep", "nutrition", "movement", "balance"],
  },
];

export const getArticlesByTopic = (topicId: string) =>
  ARTICLES.filter(a => a.topicId === topicId);

export const getArticlesByGoals = (goalIds: string[]) =>
  ARTICLES.filter(a => a.goalIds.some(g => goalIds.includes(g)));

export const getRelatedArticles = (articleId: string) =>
  ARTICLES.filter(a => a.id !== articleId).slice(0, 2);
