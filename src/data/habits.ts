import type { Habit } from "../App";

export interface HabitDef {
  id: string;
  icon: string;
  name: string;
  desc: string;
  effort: string;
  goals: string[];
  pace: ("gentle" | "balanced" | "intense")[];
  bg: string;
  accent: string;
  scheduleDefault: Habit["schedule"];
  defaultDays?: string[];
  timeOfDay: ("morning" | "noon" | "afternoon" | "evening" | "anytime")[];
  difficulty: 1 | 2 | 3;
  tags: string[];
  recommendedReminder: string;
}

export const HABIT_CATALOG: HabitDef[] = [
  /* ── GIẤC NGỦ ── */
  { id:"sleep-bedtime",       icon:"🌙", name:"Đi ngủ trước 23:00",                  desc:"Ổn định nhịp sinh học, cải thiện chất lượng giấc ngủ.",         effort:"~5 phút chuẩn bị",  goals:["sleep"],                   pace:["gentle","balanced","intense"], bg:"#F2EDF8", accent:"#A896CC", scheduleDefault:"daily",  timeOfDay:["evening"],             difficulty:1, tags:["sleep-hygiene","evening-routine"], recommendedReminder:"22:30" },
  { id:"sleep-noscreen",      icon:"📵", name:"Không màn hình 30' trước ngủ",         desc:"Giảm ánh sáng xanh, giúp buồn ngủ tự nhiên hơn.",              effort:"30 phút",           goals:["sleep"],                   pace:["balanced","intense"],          bg:"#F2EDF8", accent:"#A896CC", scheduleDefault:"daily",  timeOfDay:["evening"],             difficulty:2, tags:["sleep-hygiene","screen-time"],    recommendedReminder:"22:00" },
  { id:"sleep-no-caffeine",   icon:"☕", name:"Không caffeine sau 14:00",              desc:"Caffeine ở lại cơ thể 5–7 tiếng, ảnh hưởng giấc ngủ đêm.",     effort:"Quyết tâm nhỏ",     goals:["sleep"],                   pace:["gentle","balanced"],           bg:"#F2EDF8", accent:"#A896CC", scheduleDefault:"daily",  timeOfDay:["afternoon"],           difficulty:2, tags:["sleep-hygiene","nutrition"],       recommendedReminder:"14:00" },
  { id:"sleep-breathe",       icon:"🌬️", name:"Thở 4-7-8 trước khi ngủ",              desc:"Kích hoạt thư giãn tự nhiên, giảm lo âu trước giấc ngủ.",       effort:"~3 phút",           goals:["sleep","stress"],          pace:["gentle","balanced","intense"], bg:"#EDF5EF", accent:"#7B987E", scheduleDefault:"daily",  timeOfDay:["evening"],             difficulty:1, tags:["breathing","sleep-hygiene"],      recommendedReminder:"22:45" },
  { id:"sleep-journal",       icon:"📔", name:"Viết nhật ký 3 phút",                  desc:"Giải phóng lo lắng trước khi ngủ, làm dịu tâm trí.",            effort:"3 phút",            goals:["sleep","stress","growth"], pace:["balanced","intense"],          bg:"#FFF5EE", accent:"#F28C64", scheduleDefault:"daily",  timeOfDay:["evening"],             difficulty:1, tags:["journaling","reflection"],        recommendedReminder:"22:00" },
  { id:"sleep-room-prep",     icon:"🛏️", name:"Chuẩn bị phòng ngủ",                   desc:"Tắt đèn, làm mát phòng — điều kiện ngủ tốt tạo giấc ngủ sâu.", effort:"5 phút",            goals:["sleep"],                   pace:["gentle"],                      bg:"#F2EDF8", accent:"#A896CC", scheduleDefault:"daily",  timeOfDay:["evening"],             difficulty:1, tags:["sleep-environment","evening-routine"], recommendedReminder:"22:15" },
  { id:"sleep-wake-time",     icon:"⏰", name:"Giữ giờ thức dậy ổn định",              desc:"Đồng hồ sinh học cần nhất quán — kể cả cuối tuần.",             effort:"Kỷ luật nhỏ",       goals:["sleep"],                   pace:["balanced","intense"],          bg:"#F2EDF8", accent:"#A896CC", scheduleDefault:"daily",  timeOfDay:["morning"],             difficulty:2, tags:["sleep-rhythm","morning-routine"],  recommendedReminder:"06:30" },
  { id:"sleep-morning-light", icon:"☀️", name:"Ra ánh sáng buổi sáng 10 phút",         desc:"Ánh sáng tự nhiên đặt lại đồng hồ sinh học, giúp tỉnh táo.",    effort:"10 phút",           goals:["sleep"],                   pace:["gentle","balanced"],           bg:"#FFF5EE", accent:"#F28C64", scheduleDefault:"daily",  timeOfDay:["morning"],             difficulty:1, tags:["sleep-rhythm","outdoor","morning-routine"], recommendedReminder:"07:30" },
  { id:"sleep-no-long-nap",   icon:"💤", name:"Không ngủ trưa quá 30 phút",            desc:"Ngủ trưa dài có thể làm khó ngủ vào ban đêm.",                  effort:"Chú ý đồng hồ",     goals:["sleep"],                   pace:["balanced"],                    bg:"#F2EDF8", accent:"#A896CC", scheduleDefault:"daily",  timeOfDay:["noon","afternoon"],    difficulty:2, tags:["sleep-hygiene"],                  recommendedReminder:"12:30" },
  { id:"sleep-relax-muscles", icon:"🧘", name:"Thư giãn cơ trước khi ngủ",             desc:"Body scan hoặc PMR giúp cơ thể buông bỏ căng thẳng tích tụ.",   effort:"5–10 phút",         goals:["sleep","stress"],          pace:["gentle","balanced"],           bg:"#F2EDF8", accent:"#A896CC", scheduleDefault:"daily",  timeOfDay:["evening"],             difficulty:1, tags:["relaxation","sleep-hygiene","breathing"], recommendedReminder:"22:30" },

  /* ── VẬN ĐỘNG — GENTLE ── */
  { id:"walk-5",              icon:"🚶", name:"Đi bộ 5 phút",                         desc:"Chỉ 5 phút đủ để kích hoạt tuần hoàn và cải thiện tâm trạng.",  effort:"5 phút",            goals:["exercise"],                pace:["gentle"],                      bg:"#FFF2EC", accent:"#F28C64", scheduleDefault:"daily",  timeOfDay:["morning","anytime"],   difficulty:1, tags:["movement","beginner"],            recommendedReminder:"08:00" },
  { id:"stretch-3",           icon:"🤸", name:"Stretching 3 phút",                    desc:"Giãn cơ nhanh, giảm cứng khớp sau khi ngủ dậy.",                effort:"3 phút",            goals:["exercise"],                pace:["gentle"],                      bg:"#F2EDF8", accent:"#A896CC", scheduleDefault:"daily",  timeOfDay:["morning"],             difficulty:1, tags:["flexibility","morning-routine"],  recommendedReminder:"07:00" },
  { id:"stand-hourly",        icon:"🙋", name:"Đứng dậy sau mỗi 60 phút",             desc:"Chống tác hại của ngồi lâu, tăng tuần hoàn máu.",                effort:"~2 phút",           goals:["exercise","balance"],      pace:["gentle"],                      bg:"#FFF2EC", accent:"#F28C64", scheduleDefault:"daily",  timeOfDay:["anytime"],             difficulty:1, tags:["desk-health","movement"],         recommendedReminder:"09:00" },
  { id:"stairs",              icon:"🪜", name:"Đi cầu thang ít nhất 1 lần",            desc:"Thay thang máy bằng thang bộ — thói quen nhỏ, lợi ích lớn.",    effort:"2–5 phút",          goals:["exercise"],                pace:["gentle"],                      bg:"#FFF2EC", accent:"#F28C64", scheduleDefault:"daily",  timeOfDay:["anytime"],             difficulty:1, tags:["movement","everyday"],            recommendedReminder:"08:30" },
  { id:"mobility-morning",    icon:"🌅", name:"Mobility nhẹ buổi sáng 5 phút",         desc:"Mở rộng biên độ chuyển động, khởi động nhẹ nhàng cho ngày mới.", effort:"5 phút",            goals:["exercise"],                pace:["gentle"],                      bg:"#FFF5EE", accent:"#F28C64", scheduleDefault:"daily",  timeOfDay:["morning"],             difficulty:1, tags:["flexibility","morning-routine"],  recommendedReminder:"07:15" },

  /* ── VẬN ĐỘNG — BALANCED ── */
  { id:"walk-20",             icon:"🏃", name:"Đi bộ 20 phút",                        desc:"Tăng sức bền, cải thiện tâm trạng và sức khoẻ tim mạch.",       effort:"20 phút",           goals:["exercise"],                pace:["balanced"],                    bg:"#FFF2EC", accent:"#F28C64", scheduleDefault:"daily",  timeOfDay:["morning","evening"],   difficulty:2, tags:["cardio","movement"],              recommendedReminder:"07:00" },
  { id:"yoga-15",             icon:"🧘", name:"Yoga 15 phút",                          desc:"Kết hợp linh hoạt, sức mạnh và thư giãn tâm trí.",              effort:"15 phút",           goals:["exercise","stress"],       pace:["balanced"],                    bg:"#F2EDF8", accent:"#A896CC", scheduleDefault:"daily",  timeOfDay:["morning","evening"],   difficulty:2, tags:["yoga","flexibility","mindful-movement"], recommendedReminder:"07:30" },
  { id:"bodyweight-10",       icon:"💪", name:"Bài tập thể trọng 10 phút",             desc:"Squat, push-up, plank — không cần dụng cụ, rất hiệu quả.",      effort:"10 phút",           goals:["exercise"],                pace:["balanced"],                    bg:"#FBEDEE", accent:"#D95C5C", scheduleDefault:"daily",  timeOfDay:["morning","afternoon"],  difficulty:2, tags:["strength","bodyweight"],          recommendedReminder:"07:30" },
  { id:"steps-6000",          icon:"👟", name:"6.000 bước mỗi ngày",                   desc:"Mục tiêu bước chân có thể kiểm tra được, duy trì tốt.",          effort:"Suốt ngày",         goals:["exercise"],                pace:["balanced"],                    bg:"#FFF2EC", accent:"#F28C64", scheduleDefault:"daily",  timeOfDay:["anytime"],             difficulty:2, tags:["steps","movement"],               recommendedReminder:"19:00" },
  { id:"stretch-10",          icon:"🤸", name:"Stretching 10 phút",                    desc:"Tăng linh hoạt cơ, giảm đau mỏi sau ngày dài.",                 effort:"10 phút",           goals:["exercise"],                pace:["balanced"],                    bg:"#F2EDF8", accent:"#A896CC", scheduleDefault:"daily",  timeOfDay:["morning","evening"],   difficulty:1, tags:["flexibility","recovery"],         recommendedReminder:"20:00" },

  /* ── VẬN ĐỘNG — INTENSE ── */
  { id:"workout-30",          icon:"🏋️", name:"Tập thể dục 30 phút",                   desc:"Bài tập cường độ vừa, tăng sức mạnh và sức bền.",               effort:"30 phút",           goals:["exercise"],                pace:["intense"],                     bg:"#FBEDEE", accent:"#D95C5C", scheduleDefault:"daily",  timeOfDay:["morning","afternoon"], difficulty:3, tags:["strength","cardio"],              recommendedReminder:"06:30" },
  { id:"run-20",              icon:"🏃", name:"Chạy bộ 20 phút",                       desc:"Cardio hiệu quả, cải thiện sức bền tim phổi.",                   effort:"20 phút",           goals:["exercise"],                pace:["intense"],                     bg:"#FFF2EC", accent:"#F28C64", scheduleDefault:"daily",  timeOfDay:["morning"],             difficulty:3, tags:["running","cardio"],               recommendedReminder:"06:00" },
  { id:"strength-training",   icon:"🦾", name:"Strength training 20 phút",             desc:"Tăng cơ, cải thiện mật độ xương và trao đổi chất.",              effort:"20 phút",           goals:["exercise"],                pace:["intense"],                     bg:"#FBEDEE", accent:"#D95C5C", scheduleDefault:"daily",  timeOfDay:["morning","afternoon"], difficulty:3, tags:["strength","muscle"],              recommendedReminder:"07:00" },
  { id:"steps-10000",         icon:"👟", name:"10.000 bước mỗi ngày",                  desc:"Mục tiêu vận động cả ngày — tích lũy dần qua nhiều hoạt động.", effort:"Suốt ngày",         goals:["exercise"],                pace:["intense"],                     bg:"#FFF2EC", accent:"#F28C64", scheduleDefault:"daily",  timeOfDay:["anytime"],             difficulty:3, tags:["steps","movement"],               recommendedReminder:"19:00" },
  { id:"hiit-15",             icon:"⚡", name:"HIIT 15 phút",                           desc:"Cường độ cao, đốt calo nhanh, rất hiệu quả về thời gian.",       effort:"15 phút",           goals:["exercise"],                pace:["intense"],                     bg:"#FBEDEE", accent:"#D95C5C", scheduleDefault:"daily",  timeOfDay:["morning"],             difficulty:3, tags:["hiit","cardio","fat-burn"],       recommendedReminder:"07:00" },

  /* ── DINH DƯỠNG ── */
  { id:"water-morning",       icon:"💧", name:"Uống 1 ly nước sau khi thức",           desc:"Hydrate ngay từ đầu ngày, đánh thức hệ tiêu hoá.",               effort:"1 phút",            goals:["eat","exercise","balance"], pace:["gentle","balanced","intense"], bg:"#FFF2EC", accent:"#F28C64", scheduleDefault:"daily",  timeOfDay:["morning"],             difficulty:1, tags:["hydration","morning-routine"],    recommendedReminder:"07:00" },
  { id:"water-regular",       icon:"🫗", name:"Uống đủ nước cả ngày",                  desc:"Ít nhất 1.5–2L mỗi ngày, uống đều theo giờ.",                   effort:"Suốt ngày",         goals:["eat"],                     pace:["balanced","intense"],          bg:"#FFF2EC", accent:"#F28C64", scheduleDefault:"daily",  timeOfDay:["anytime"],             difficulty:2, tags:["hydration"],                      recommendedReminder:"10:00" },
  { id:"eat-veg",             icon:"🥦", name:"Thêm rau vào mỗi bữa ăn",              desc:"Bổ sung chất xơ, vitamin — bước nhỏ đầu tiên của ăn uống lành mạnh.", effort:"~5 phút",       goals:["eat"],                     pace:["balanced","intense"],          bg:"#EDF5EF", accent:"#7B987E", scheduleDefault:"daily",  timeOfDay:["noon","evening"],      difficulty:2, tags:["vegetables","nutrition"],         recommendedReminder:"12:00" },
  { id:"eat-fruit",           icon:"🍎", name:"Ăn 1 trái cây mỗi ngày",               desc:"Vitamin tự nhiên, đường chậm hấp thụ, dễ thực hiện.",            effort:"~5 phút",           goals:["eat"],                     pace:["gentle","balanced"],           bg:"#EDF5EF", accent:"#7B987E", scheduleDefault:"daily",  timeOfDay:["morning","afternoon"], difficulty:1, tags:["fruit","nutrition"],              recommendedReminder:"09:30" },
  { id:"eat-breakfast",       icon:"🍳", name:"Ăn sáng đủ bữa",                        desc:"Bữa sáng cân bằng cung cấp năng lượng ổn định cho buổi sáng.",   effort:"~15 phút",          goals:["eat"],                     pace:["gentle","balanced"],           bg:"#FFF5EE", accent:"#F28C64", scheduleDefault:"daily",  timeOfDay:["morning"],             difficulty:1, tags:["breakfast","nutrition"],          recommendedReminder:"07:30" },
  { id:"no-sugar-drink",      icon:"🚫", name:"Không uống đồ có đường hôm nay",        desc:"Thay thế nước ngọt bằng nước lọc hoặc trà không đường.",         effort:"Quyết tâm nhỏ",     goals:["eat"],                     pace:["balanced","intense"],          bg:"#FBEDEE", accent:"#D95C5C", scheduleDefault:"daily",  timeOfDay:["anytime"],             difficulty:2, tags:["sugar","nutrition"],              recommendedReminder:"08:00" },
  { id:"healthy-snack",       icon:"🥜", name:"Chuẩn bị snack lành mạnh",              desc:"Hạt, trái cây, sữa chua — sẵn sàng thì dễ chọn tốt.",           effort:"~5 phút",           goals:["eat"],                     pace:["balanced"],                    bg:"#EDF5EF", accent:"#7B987E", scheduleDefault:"daily",  timeOfDay:["morning","afternoon"], difficulty:1, tags:["snack","meal-prep"],              recommendedReminder:"10:30" },
  { id:"eat-slow",            icon:"🍽️", name:"Ăn chậm hơn, nhai kỹ",                  desc:"Tiêu hoá tốt hơn, nhận biết cảm giác no sớm hơn.",               effort:"Chú ý khi ăn",       goals:["eat"],                     pace:["gentle","balanced"],           bg:"#EDF5EF", accent:"#7B987E", scheduleDefault:"daily",  timeOfDay:["noon","evening"],      difficulty:1, tags:["mindful-eating","digestion"],     recommendedReminder:"12:00" },
  { id:"no-phone-eating",     icon:"📵", name:"Không dùng điện thoại khi ăn",          desc:"Tập trung vào bữa ăn, nhận thức tốt hơn về cảm giác no đói.",    effort:"Kỷ luật nhỏ",       goals:["eat","stress"],            pace:["gentle","balanced"],           bg:"#FFF5EE", accent:"#F28C64", scheduleDefault:"daily",  timeOfDay:["noon","evening"],      difficulty:2, tags:["mindful-eating","digital-detox"], recommendedReminder:"12:00" },
  { id:"meal-prep",           icon:"🥡", name:"Meal prep đơn giản cuối tuần",           desc:"Chuẩn bị sẵn thức ăn cho tuần — tiết kiệm thời gian, ăn tốt hơn.", effort:"45–60 phút",      goals:["eat"],                     pace:["intense"],                     bg:"#EDF5EF", accent:"#7B987E", scheduleDefault:"weekly", defaultDays:["CN"], timeOfDay:["afternoon"],           difficulty:3, tags:["meal-prep","nutrition"],          recommendedReminder:"14:00" },

  /* ── TINH THẦN / STRESS ── */
  { id:"meditate-3",          icon:"🪷", name:"Thiền 3 phút",                           desc:"Bắt đầu nhỏ — 3 phút mỗi ngày xây nền tảng chánh niệm.",        effort:"3 phút",            goals:["stress","balance"],        pace:["gentle"],                      bg:"#F2EDF8", accent:"#A896CC", scheduleDefault:"daily",  timeOfDay:["morning","evening"],   difficulty:1, tags:["meditation","mindfulness","beginner"], recommendedReminder:"08:00" },
  { id:"meditate-5",          icon:"🧘", name:"Thiền 5 phút",                           desc:"Làm dịu tâm trí, tăng khả năng tập trung tự nhiên.",             effort:"5 phút",            goals:["stress","balance"],        pace:["gentle","balanced"],           bg:"#F2EDF8", accent:"#A896CC", scheduleDefault:"daily",  timeOfDay:["morning","evening"],   difficulty:1, tags:["meditation","mindfulness"],       recommendedReminder:"07:30" },
  { id:"meditate-10",         icon:"🪷", name:"Thiền 10 phút",                          desc:"Giảm cortisol, cải thiện cảm xúc theo thời gian.",               effort:"10 phút",           goals:["stress"],                  pace:["intense"],                     bg:"#F2EDF8", accent:"#A896CC", scheduleDefault:"daily",  timeOfDay:["morning","evening"],   difficulty:2, tags:["meditation","mindfulness"],       recommendedReminder:"07:00" },
  { id:"breathing-5",         icon:"🌬️", name:"Breathing exercise 5 phút",              desc:"Hít thở có chủ đích giúp giảm lo âu và kích hoạt thư giãn.",    effort:"5 phút",            goals:["stress"],                  pace:["gentle","balanced"],           bg:"#EDF5EF", accent:"#7B987E", scheduleDefault:"daily",  timeOfDay:["morning","anytime"],   difficulty:1, tags:["breathing","relaxation"],         recommendedReminder:"08:30" },
  { id:"gratitude",           icon:"🙏", name:"Ghi 3 điều biết ơn",                     desc:"Tăng cảm xúc tích cực, thay đổi cách nhìn nhận ngày của bạn.",   effort:"3 phút",            goals:["stress","confidence","mindset"], pace:["gentle","balanced"],     bg:"#FFF5EE", accent:"#F28C64", scheduleDefault:"daily",  timeOfDay:["morning","evening"],   difficulty:1, tags:["gratitude","positivity"],         recommendedReminder:"08:00" },
  { id:"emotion-journal",     icon:"📝", name:"Journal cảm xúc 5 phút",                 desc:"Ghi lại cảm nhận — xử lý cảm xúc trước khi chúng tích lại.",     effort:"5 phút",            goals:["stress","growth"],         pace:["balanced"],                    bg:"#FFF5EE", accent:"#F28C64", scheduleDefault:"daily",  timeOfDay:["evening"],             difficulty:1, tags:["journaling","emotional-health"],  recommendedReminder:"21:30" },
  { id:"no-phone-morning",    icon:"🔕", name:"10 phút không điện thoại sau thức dậy",   desc:"Bắt đầu ngày với tâm trí trống, không bị kéo vào thông báo.",    effort:"10 phút",           goals:["stress","balance"],        pace:["gentle","balanced"],           bg:"#FFF5EE", accent:"#F28C64", scheduleDefault:"daily",  timeOfDay:["morning"],             difficulty:2, tags:["digital-detox","morning-routine"], recommendedReminder:"07:00" },
  { id:"outdoor-walk",        icon:"🌿", name:"Đi bộ ngoài trời 10 phút",               desc:"Tiếp xúc thiên nhiên và ánh sáng ngoài trời giảm căng thẳng.",   effort:"10 phút",           goals:["stress","exercise"],       pace:["gentle","balanced"],           bg:"#EDF5EF", accent:"#7B987E", scheduleDefault:"daily",  timeOfDay:["morning","afternoon"], difficulty:1, tags:["outdoor","movement","nature"],    recommendedReminder:"17:00" },
  { id:"body-scan",           icon:"🌊", name:"Body scan trước khi ngủ",                desc:"Kiểm tra và thư giãn từng phần cơ thể từ dưới lên.",             effort:"5–10 phút",         goals:["stress","sleep"],          pace:["balanced"],                    bg:"#F2EDF8", accent:"#A896CC", scheduleDefault:"daily",  timeOfDay:["evening"],             difficulty:1, tags:["relaxation","sleep-hygiene","mindfulness"], recommendedReminder:"22:00" },

  /* ── PHÁT TRIỂN BẢN THÂN / TỰ TIN ── */
  { id:"read-5pages",         icon:"📖", name:"Đọc 5 trang sách",                       desc:"Nhỏ hơn bạn nghĩ, nhưng sau 1 tháng là 150 trang.",              effort:"~10 phút",          goals:["growth","confidence"],     pace:["gentle"],                      bg:"#EDF5EF", accent:"#7B987E", scheduleDefault:"daily",  timeOfDay:["morning","evening"],   difficulty:1, tags:["reading","learning"],             recommendedReminder:"21:00" },
  { id:"read-10min",          icon:"📚", name:"Đọc sách 10 phút",                        desc:"Kiến thức mỗi ngày, tư duy rõ hơn theo thời gian.",              effort:"10 phút",           goals:["growth","confidence"],     pace:["gentle","balanced"],           bg:"#EDF5EF", accent:"#7B987E", scheduleDefault:"daily",  timeOfDay:["morning","evening"],   difficulty:1, tags:["reading","learning"],             recommendedReminder:"21:00" },
  { id:"read-20min",          icon:"📚", name:"Đọc sách 20 phút",                        desc:"Phát triển tư duy sâu hơn, xây thói quen đọc bền vững.",         effort:"20 phút",           goals:["growth","confidence"],     pace:["intense"],                     bg:"#EDF5EF", accent:"#7B987E", scheduleDefault:"daily",  timeOfDay:["evening"],             difficulty:2, tags:["reading","deep-learning"],        recommendedReminder:"21:00" },
  { id:"learn-language",      icon:"🗣️", name:"Học ngoại ngữ 10 phút",                   desc:"Duy trì đều đặn quan trọng hơn học nhiều một lần.",               effort:"10 phút",           goals:["growth","confidence"],     pace:["balanced"],                    bg:"#EDF5EF", accent:"#7B987E", scheduleDefault:"daily",  timeOfDay:["morning","evening"],   difficulty:2, tags:["language","learning"],            recommendedReminder:"08:30" },
  { id:"learn-skill",         icon:"🎯", name:"Học kỹ năng mới 15 phút",                 desc:"Tiến bộ dần dần qua mỗi ngày — 1% tốt hơn mỗi hôm.",            effort:"15 phút",           goals:["growth"],                  pace:["balanced","intense"],          bg:"#EDF5EF", accent:"#7B987E", scheduleDefault:"daily",  timeOfDay:["morning","afternoon"], difficulty:2, tags:["skill-building","learning"],      recommendedReminder:"09:00" },
  { id:"plan-day",            icon:"📋", name:"Lập kế hoạch ngày 3 phút",               desc:"Viết 3 ưu tiên hôm nay — rõ hướng, không lãng phí năng lượng.", effort:"3 phút",            goals:["growth","balance"],        pace:["gentle","balanced"],           bg:"#FFF5EE", accent:"#F28C64", scheduleDefault:"daily",  timeOfDay:["morning"],             difficulty:1, tags:["planning","productivity"],        recommendedReminder:"08:00" },
  { id:"deep-work-25",        icon:"🔍", name:"Deep work 25 phút",                       desc:"Một Pomodoro tập trung hoàn toàn — không thông báo, không phân tâm.", effort:"25 phút",       goals:["growth","balance"],        pace:["balanced","intense"],          bg:"#FBEDEE", accent:"#D95C5C", scheduleDefault:"daily",  timeOfDay:["morning","afternoon"], difficulty:2, tags:["focus","productivity","deep-work"], recommendedReminder:"09:00" },
  { id:"write-priorities",    icon:"✏️", name:"Viết 3 ưu tiên trong ngày",               desc:"Đơn giản hơn to-do list — chỉ 3 việc quan trọng nhất.",           effort:"3 phút",            goals:["growth"],                  pace:["gentle"],                      bg:"#FFF5EE", accent:"#F28C64", scheduleDefault:"daily",  timeOfDay:["morning"],             difficulty:1, tags:["planning","clarity"],             recommendedReminder:"07:45" },
  { id:"review-week",         icon:"🔄", name:"Review mục tiêu cuối tuần",               desc:"Nhìn lại tuần qua — điều gì đã tốt, điều gì cần cải thiện.",      effort:"10 phút",           goals:["growth","confidence"],     pace:["intense"],                     bg:"#EDF5EF", accent:"#7B987E", scheduleDefault:"weekly", defaultDays:["CN"], timeOfDay:["evening"],             difficulty:2, tags:["review","reflection","goal-setting"], recommendedReminder:"19:00" },
  { id:"affirmation",         icon:"💫", name:"1 lời khẳng định tích cực",               desc:"Tự nhắc bản thân về điểm mạnh và giá trị của mình.",             effort:"2 phút",            goals:["confidence"],              pace:["gentle"],                      bg:"#FDE8E8", accent:"#D95C5C", scheduleDefault:"daily",  timeOfDay:["morning"],             difficulty:1, tags:["confidence","positivity"],        recommendedReminder:"07:30" },

  /* ── CÂN BẰNG CUỘC SỐNG ── */
  { id:"digital-detox",      icon:"🌿", name:"30 phút không mạng xã hội",              desc:"Tái tạo năng lượng tinh thần — tâm trí cần khoảng lặng.",         effort:"30 phút",           goals:["balance","stress"],        pace:["gentle","balanced"],           bg:"#EDF5EF", accent:"#7B987E", scheduleDefault:"daily",  timeOfDay:["morning","evening"],   difficulty:2, tags:["digital-detox","screen-time"],    recommendedReminder:"21:00" },
  { id:"reflection-evening",  icon:"🌙", name:"Reflection cuối ngày 5 phút",             desc:"Khoảnh khắc dừng lại, nhìn nhận ngày đã qua.",                   effort:"5 phút",            goals:["balance","growth","stress"], pace:["gentle","balanced"],         bg:"#F2EDF8", accent:"#A896CC", scheduleDefault:"daily",  timeOfDay:["evening"],             difficulty:1, tags:["reflection","evening-routine"],   recommendedReminder:"22:00" },
  { id:"hobby-30",            icon:"🎨", name:"30 phút sở thích",                        desc:"Làm điều bạn yêu thích — không để tăng năng suất, chỉ để vui.", effort:"30 phút",           goals:["balance"],                 pace:["balanced"],                    bg:"#F2EDF8", accent:"#A896CC", scheduleDefault:"daily",  timeOfDay:["evening","afternoon"], difficulty:1, tags:["hobbies","wellbeing","joy"],      recommendedReminder:"19:30" },
  { id:"no-work-evening",     icon:"🚫", name:"Không làm việc sau 21:00",               desc:"Ranh giới rõ ràng giữa công việc và nghỉ ngơi — bảo vệ sức khoẻ.", effort:"Kỷ luật nhỏ",      goals:["balance","stress"],        pace:["balanced"],                    bg:"#F2EDF8", accent:"#A896CC", scheduleDefault:"daily",  timeOfDay:["evening"],             difficulty:2, tags:["work-life-balance","boundaries"], recommendedReminder:"21:00" },
  { id:"morning-sunlight",    icon:"🌤️", name:"5 phút với cốc trà/cà phê ngoài trời",   desc:"Khởi đầu ngày bình tĩnh, kết nối với thiên nhiên.",              effort:"5 phút",            goals:["balance","sleep"],         pace:["gentle"],                      bg:"#FFF5EE", accent:"#F28C64", scheduleDefault:"daily",  timeOfDay:["morning"],             difficulty:1, tags:["morning-routine","outdoor"],      recommendedReminder:"07:30" },

  /* ── KẾT NỐI XÃ HỘI ── */
  { id:"connect",             icon:"👥", name:"Nhắn tin hỏi thăm 1 người thân",          desc:"Duy trì kết nối — một tin nhắn nhỏ có thể tạo khác biệt lớn.",   effort:"5 phút",            goals:["community","confidence","balance"], pace:["gentle","balanced","intense"], bg:"#F2EDF8", accent:"#C8B6E2", scheduleDefault:"weekly", defaultDays:["T7"], timeOfDay:["evening"],             difficulty:1, tags:["connection","social","weekly"],   recommendedReminder:"19:00" },
  { id:"share-progress",      icon:"🌟", name:"Chia sẻ tiến độ với nhóm",               desc:"Chia sẻ tạo trách nhiệm giải trình — giúp duy trì thói quen.",   effort:"5 phút",            goals:["community","confidence"],  pace:["gentle","balanced"],           bg:"#FDF0F1", accent:"#F4A7A2", scheduleDefault:"weekly", defaultDays:["CN"], timeOfDay:["evening"],             difficulty:1, tags:["accountability","community"],     recommendedReminder:"20:00" },
  { id:"social-call",         icon:"📞", name:"Gọi điện thăm hỏi 1 bạn bè",             desc:"Giọng nói tạo kết nối sâu hơn tin nhắn — dù chỉ 10 phút.",       effort:"10–20 phút",        goals:["community"],               pace:["balanced","intense"],          bg:"#FDF0F1", accent:"#F4A7A2", scheduleDefault:"weekly", defaultDays:["T7","CN"], timeOfDay:["afternoon","evening"], difficulty:2, tags:["connection","social"],           recommendedReminder:"15:00" },

  /* ── TẬP TRUNG / NĂNG SUẤT ── */
  { id:"morning-routine-10",  icon:"🌅", name:"Routine 10 phút trước khi làm việc",      desc:"Chuẩn bị tâm lý, tạo trạng thái tập trung từ đầu.",              effort:"10 phút",           goals:["balance","growth"],        pace:["gentle","balanced"],           bg:"#FBEDEE", accent:"#D95C5C", scheduleDefault:"daily",  timeOfDay:["morning"],             difficulty:1, tags:["morning-routine","focus","productivity"], recommendedReminder:"08:00" },
  { id:"pomodoro",            icon:"🍅", name:"Làm việc theo Pomodoro 25–5",             desc:"25 phút tập trung + 5 phút nghỉ — tránh kiệt sức, tăng hiệu quả.", effort:"30 phút/vòng",      goals:["balance","growth"],        pace:["balanced","intense"],          bg:"#FBEDEE", accent:"#D95C5C", scheduleDefault:"daily",  timeOfDay:["morning","afternoon"], difficulty:2, tags:["pomodoro","focus","productivity"], recommendedReminder:"09:00" },
  { id:"single-task-30",      icon:"🎯", name:"Làm một việc trong 30 phút",              desc:"Không đa nhiệm — một việc đến nơi đến chốn trước khi sang việc khác.", effort:"30 phút",       goals:["balance"],                 pace:["balanced"],                    bg:"#FBEDEE", accent:"#D95C5C", scheduleDefault:"daily",  timeOfDay:["morning","afternoon"], difficulty:2, tags:["focus","single-tasking"],         recommendedReminder:"09:30" },
  { id:"daily-review",        icon:"📊", name:"Review công việc cuối ngày 5 phút",       desc:"Nhìn lại ngày hôm nay — tổng kết nhanh, chuẩn bị cho ngày mai.",  effort:"5 phút",            goals:["growth","balance"],        pace:["gentle","balanced"],           bg:"#FBEDEE", accent:"#D95C5C", scheduleDefault:"daily",  timeOfDay:["evening"],             difficulty:1, tags:["review","productivity"],          recommendedReminder:"17:30" },
  { id:"inbox-once",          icon:"📬", name:"Kiểm tra email/tin nhắn 1 lần",           desc:"Không để thông báo ngắt quãng — gom lại một lần duy nhất.",       effort:"15 phút",           goals:["balance","growth"],        pace:["balanced","intense"],          bg:"#FBEDEE", accent:"#D95C5C", scheduleDefault:"daily",  timeOfDay:["morning"],             difficulty:2, tags:["focus","digital-detox","productivity"], recommendedReminder:"09:00" },
];

/* PACE_COUNT: how many habits to surface per pace level */
export const PACE_COUNT: Record<string, number> = {
  gentle: 2,
  balanced: 3,
  intense: 4,
};

/* Deterministic shuffle using a seed (today's date) so it varies daily but is stable per session */
function seededShuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr];
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    const j = Math.abs(s) % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function todaySeed(): number {
  const d = new Date();
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}

export function getSuggestions(goals: string[], pace: string | null): HabitDef[] {
  const effectivePace = (pace as "gentle" | "balanced" | "intense") ?? "gentle";
  const count = PACE_COUNT[effectivePace] ?? 2;

  // Score each habit matching the pace
  const candidates = HABIT_CATALOG.filter(h => h.pace.includes(effectivePace));

  const scored = candidates.map(h => ({
    h,
    score:
      goals.filter(g => h.goals.includes(g)).length * 3 +   // goal match: strong signal
      (h.difficulty === 1 && effectivePace === "gentle" ? 2 : 0) +
      (h.difficulty === 2 && effectivePace === "balanced" ? 1 : 0) +
      (h.difficulty === 3 && effectivePace === "intense" ? 1 : 0),
  }));

  // Group by score tier, shuffle within each tier using today's date seed
  const seed = todaySeed();
  const tierMap = new Map<number, HabitDef[]>();
  for (const { h, score } of scored) {
    if (!tierMap.has(score)) tierMap.set(score, []);
    tierMap.get(score)!.push(h);
  }
  const tiers = [...tierMap.entries()].sort((a, b) => b[0] - a[0]);

  // Build final ordered list from tiers, shuffled within tier
  const ordered: HabitDef[] = [];
  for (const [, group] of tiers) {
    ordered.push(...seededShuffle(group, seed));
  }

  // Pick `count` habits ensuring goal diversity (prefer different goals)
  const seen = new Set<string>();
  const picked: HabitDef[] = [];
  // First pass: one per primary goal
  for (const h of ordered) {
    if (picked.length >= count) break;
    if (!seen.has(h.id)) {
      const primaryGoal = h.goals[0];
      if (!picked.some(p => p.goals[0] === primaryGoal)) {
        seen.add(h.id);
        picked.push(h);
      }
    }
  }
  // Second pass: fill remaining slots
  for (const h of ordered) {
    if (picked.length >= count) break;
    if (!seen.has(h.id)) {
      seen.add(h.id);
      picked.push(h);
    }
  }

  return picked;
}

/* Map reminder reminder period to a fallback time */
export const REMINDER_TIME_MAP: Record<string, string> = {
  morning: "07:30",
  noon:    "12:00",
  evening: "21:00",
};

/* Resolve reminder for a single habit */
export function resolveHabitReminder(habit: HabitDef, reminderPeriod: string | null): string {
  // Priority: habit's own recommendedReminder
  if (habit.recommendedReminder) return habit.recommendedReminder;
  // Fallback to period map
  if (reminderPeriod && REMINDER_TIME_MAP[reminderPeriod]) return REMINDER_TIME_MAP[reminderPeriod];
  // If custom (already a HH:mm string), use directly
  if (reminderPeriod && /^\d{2}:\d{2}$/.test(reminderPeriod)) return reminderPeriod;
  return "08:00";
}
