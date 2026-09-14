interface Props {
  onBack: () => void;
}

const EXPERTS = [
  {
    name:"BS. CK1 Linh Nguyễn",
    field:"Giấc ngủ & Tâm lý",
    exp:"7 năm kinh nghiệm lâm sàng, chuyên về rối loạn giấc ngủ và lo âu",
    support:"Tư vấn trực tuyến · Hướng dẫn thực hành",
    avatar:"🩺",
    bg:"#FFF2EC",
  },
  {
    name:"TS. Minh Trần",
    field:"Y học thể thao & Dinh dưỡng",
    exp:"10 năm nghiên cứu về phục hồi và hiệu suất thể chất",
    support:"Đánh giá kế hoạch · Chia sẻ kiến thức",
    avatar:"🏋️",
    bg:"#EDF5EF",
  },
  {
    name:"ThS. Hoa Lê",
    field:"Sức khoẻ tinh thần",
    exp:"5 năm hỗ trợ phát triển cá nhân và cân bằng cảm xúc",
    support:"Hướng dẫn chánh niệm · Tư vấn cá nhân",
    avatar:"🌸",
    bg:"#F2EDF8",
  },
];

const CHECK_BADGE = ({ label, color, bg }: { label:string, color:string, bg:string }) => (
  <div style={{ display:"flex", alignItems:"center", gap:"4px", padding:"3px 8px", borderRadius:"8px", background:bg }}>
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    <span style={{ fontSize:"10px", fontWeight:700, color, fontFamily:"'Nunito', sans-serif" }}>{label}</span>
  </div>
);

export default function ExpertListScreen({ onBack }: Props) {
  return (
    <div style={{ minHeight:"100%", background:"#FFF9F3", fontFamily:"'Nunito', sans-serif" }}>
      {/* Header */}
      <div style={{ display:"flex", alignItems:"center", gap:"12px", padding:"16px 20px 4px" }}>
        <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:"4px" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3A3630" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        </button>
        <div style={{ flex:1 }}>
          <h1 style={{ margin:0, fontSize:"22px", fontWeight:900, color:"#2A2420" }}>Chuyên gia</h1>
          <p style={{ margin:"2px 0 0", fontSize:"13px", color:"#9A9088" }}>Khi bạn muốn được hỗ trợ thêm</p>
        </div>
      </div>

      {/* Notice */}
      <div style={{ margin:"12px 20px", padding:"12px 14px", background:"#FFF8E0", borderRadius:"14px", border:"1px solid #F0D888" }}>
        <p style={{ margin:0, fontSize:"12px", color:"#806020", lineHeight:1.5 }}>
          <strong>Lưu ý:</strong> WealthRISE kiểm tra thông tin chuyên gia độc lập, nhưng không thay thế tư vấn y tế chính thức. Hãy tham khảo bác sĩ của bạn cho các vấn đề sức khoẻ cụ thể.
        </p>
      </div>

      <div style={{ padding:"0 20px" }}>
        {EXPERTS.map((e,i)=>(
          <div key={i} style={{ padding:"16px", background:"#FFFFFF", borderRadius:"18px", boxShadow:"0 1px 8px rgba(0,0,0,0.07)", marginBottom:"12px" }}>
            <div style={{ display:"flex", alignItems:"flex-start", gap:"12px", marginBottom:"12px" }}>
              <div style={{ width:"54px", height:"54px", borderRadius:"16px", background:e.bg, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"24px" }}>{e.avatar}</div>
              <div style={{ flex:1 }}>
                <p style={{ margin:0, fontSize:"15px", fontWeight:800, color:"#2A2420" }}>{e.name}</p>
                <p style={{ margin:"2px 0 4px", fontSize:"12px", fontWeight:700, color:"#9A9088" }}>{e.field}</p>
                <p style={{ margin:0, fontSize:"12px", color:"#6A6060", lineHeight:1.5 }}>{e.exp}</p>
              </div>
            </div>

            {/* Verification badges — separate, transparent */}
            <div style={{ display:"flex", flexWrap:"wrap", gap:"6px", marginBottom:"12px" }}>
              <CHECK_BADGE label="Danh tính đã kiểm"    color="#7B987E" bg="#EDF5EF"/>
              <CHECK_BADGE label="Bằng cấp đã kiểm"     color="#F28C64" bg="#FFF2EC"/>
              <CHECK_BADGE label="Phương pháp đã rà soát" color="#A896CC" bg="#F2EDF8"/>
            </div>

            <div style={{ padding:"10px 12px", background:"#F8F5F0", borderRadius:"12px", marginBottom:"12px" }}>
              <p style={{ margin:0, fontSize:"11px", fontWeight:700, color:"#9A9088", marginBottom:"2px" }}>Hình thức hỗ trợ</p>
              <p style={{ margin:0, fontSize:"12px", color:"#3A3630" }}>{e.support}</p>
            </div>

            <div style={{ display:"flex", gap:"8px" }}>
              <button style={{
                flex:1, height:"40px", borderRadius:"12px", background:"#F0EAE4", border:"none", cursor:"pointer",
                fontSize:"13px", fontWeight:700, color:"#6A5A50", fontFamily:"'Nunito', sans-serif",
              }}>Xem hồ sơ</button>
              <button style={{
                flex:1, height:"40px", borderRadius:"12px", background:"#D95C5C", border:"none", cursor:"pointer",
                fontSize:"13px", fontWeight:700, color:"#FFFFFF", fontFamily:"'Nunito', sans-serif",
              }}>Yêu cầu kết nối</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
