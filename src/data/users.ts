export interface MockUser {
  id: string;
  name: string;
  avatar: string; // emoji
  bio?: string;
}

export const MOCK_USERS: MockUser[] = [
  { id:"u01", name:"An Nhiên", avatar:"🌸", bio:"Yêu thích thiền và yoga buổi sáng." },
  { id:"u02", name:"Minh Khôi", avatar:"🏃", bio:"Runner nghiệp dư, chạy bộ mỗi sáng." },
  { id:"u03", name:"Bảo Châu", avatar:"🌿", bio:"Đam mê nấu ăn lành mạnh và meal prep." },
  { id:"u04", name:"Gia Hân", avatar:"📚", bio:"Đọc sách mỗi tối như một nghi lễ." },
  { id:"u05", name:"Tuấn Anh", avatar:"🎯", bio:"Theo đuổi deep work và năng suất." },
  { id:"u06", name:"Linh Trang", avatar:"🌺", bio:"Tìm cân bằng giữa công việc và cuộc sống." },
  { id:"u07", name:"Nhật Nam", avatar:"💪", bio:"Gym 4 buổi/tuần, không bỏ không về." },
  { id:"u08", name:"Mai Phương", avatar:"🧘", bio:"Chánh niệm và hơi thở là nguồn sức mạnh." },
  { id:"u09", name:"Đức Trung", avatar:"⭐", bio:"Xây dựng thói quen tốt từng ngày một." },
  { id:"u10", name:"Khánh Ly", avatar:"🌙", bio:"Đêm ngủ sớm, sáng dậy tươi." },
  { id:"u11", name:"Thanh Tùng", avatar:"🌊", bio:"Bơi lội và thiên nhiên là liệu pháp tâm hồn." },
  { id:"u12", name:"Hồng Nhung", avatar:"🌻", bio:"Tìm vui trong những việc nhỏ bé hàng ngày." },
  { id:"u13", name:"Văn Long", avatar:"🏋️", bio:"Sức mạnh cơ thể = sức mạnh tâm trí." },
  { id:"u14", name:"Ngọc Hà", avatar:"📝", bio:"Viết nhật ký giúp tôi hiểu bản thân hơn." },
  { id:"u15", name:"Đình Khoa", avatar:"🔥", bio:"Thách thức bản thân mỗi ngày để lớn lên." },
  { id:"u16", name:"Thu Hằng", avatar:"🌸", bio:"Dinh dưỡng và giấc ngủ là nền tảng của tôi." },
  { id:"u17", name:"Bình Minh", avatar:"☀️", bio:"Dậy sớm, sống chậm, suy nghĩ sâu." },
  { id:"u18", name:"Phương Linh", avatar:"🦋", bio:"Mỗi ngày là cơ hội để trở nên tốt hơn." },
  { id:"u19", name:"Trọng Nghĩa", avatar:"🎯", bio:"Focus là siêu năng lực của tôi." },
  { id:"u20", name:"Như Quỳnh", avatar:"🌷", bio:"Yêu thích thực vật và ăn chay cuối tuần." },
  { id:"u21", name:"Tiến Dũng", avatar:"🧩", bio:"Học điều mới mỗi ngày, dù chỉ 15 phút." },
  { id:"u22", name:"Hoa Linh", avatar:"🌿", bio:"Detox kỹ thuật số giúp tôi sống trọn hơn." },
  { id:"u23", name:"Quang Hùng", avatar:"🏊", bio:"Bơi 3 lần/tuần, không ngày nào nghỉ vô lý." },
  { id:"u24", name:"Yến Nhi", avatar:"💫", bio:"Biết ơn là thói quen tôi xây từng ngày." },
  { id:"u25", name:"Minh Tú", avatar:"📖", bio:"Đọc sách thay màn hình — dễ nói, khó làm, nhưng đáng." },
  { id:"u26", name:"Lan Anh", avatar:"🍎", bio:"Ăn uống lành mạnh không cần khắt khe." },
  { id:"u27", name:"Hoài Nam", avatar:"🌙", bio:"Ngủ đủ giấc là ưu tiên số 1 của tôi." },
  { id:"u28", name:"Bích Thủy", avatar:"🧘", bio:"Yoga và thiền là cách tôi bắt đầu ngày mới." },
  { id:"u29", name:"Thành Đạt", avatar:"🏄", bio:"Sống khỏe, sống vui — đơn giản vậy thôi." },
  { id:"u30", name:"Mỹ Duyên", avatar:"🌺", bio:"Cộng đồng hỗ trợ giúp tôi duy trì tốt hơn." },
];

export function getUserById(id: string): MockUser | undefined {
  return MOCK_USERS.find(u => u.id === id);
}

export function getRandomUsers(count: number, seed = 0): MockUser[] {
  const arr = [...MOCK_USERS];
  let s = seed || Date.now();
  for (let i = arr.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    const j = Math.abs(s) % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, count);
}
