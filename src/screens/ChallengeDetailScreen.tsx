import { useState } from "react";

const CHALLENGE_DATA: Record<string, { icon:string; title:string; desc:string; duration:string; effort:string; bg:string; accent:string; goal:string; members:number; tips:string[] }> = {
  "c-sleep": { icon:"🌙", title:"7 ngày ngủ đều đặn", desc:"Xây dựng thói quen ngủ đúng giờ để cải thiện chất lượng giấc ngủ và năng lượng mỗi ngày.", duration:"7 ngày", effort:"~10 phút/ngày", bg:"#F2EDF8", accent:"#A896CC", goal:"Giấc ngủ", members:128, tips:["Tắt điện thoại trước khi ngủ 30 phút","Giữ nhiệt độ phòng mát mẻ","Ngủ và thức dậy cùng một giờ mỗi ngày"] },
  "c-water": { icon:"💧", title:"7 ngày uống đủ nước", desc:"Uống đủ 2 lít nước mỗi ngày để cơ thể hoạt động tối ưu và làn da khỏe mạnh.", duration:"7 ngày", effort:"~2 phút/ngày", bg:"#FFF2EC", accent:"#F28C64", goal:"Dinh dưỡng", members:215, tips:["Mang theo bình nước bên người","Uống 1 ly nước ngay khi thức dậy","Đặt nhắc nhở mỗi 2 tiếng"] },
  "c-walk":  { icon:"🏃", title:"21 ngày vận động mỗi ngày", desc:"Duy trì thói quen vận động 20 phút mỗi ngày trong 21 ngày để tạo thói quen bền vững.", duration:"21 ngày", effort:"~20 phút/ngày", bg:"#EDF5EF", accent:"#7B987E", goal:"Vận động", members:304, tips:["Bắt đầu với bước nhỏ, tăng dần","Đi bộ sau bữa ăn tối","Rủ bạn bè cùng tham gia"] },
};

const DEFAULT = CHALLENGE_DATA["c-sleep"];

interface Props {
  challengeId: string;
  onBack: () => void;
}

export default function ChallengeDetailScreen({ challengeId, onBack }: Props) {
  const c = CHALLENGE_DATA[challengeId] ?? DEFAULT;
  const [joined, setJoined] = useState(false);
  const [toast, setToast] = useState("");

  const showToast = (msg: string) => { setToast(msg); setTimeout(() => setToast(""), 2000); };

  const handleJoin = () => {
    setJoined(prev => {
      if (!prev) showToast("Đã tham gia thử thách!");
      else showToast("Đã rời thử thách");
      return !prev;
    });
  };

  return (
    <div style={{ minHeight:"100%", background:"#FFF9F3", fontFamily:"'Nunito', sans-serif" }}>
      {/* Header */}
      <div style={{ display:"flex", alignItems:"center", gap:"12px", padding:"16px 20px 12px" }}>
        <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:"4px" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3A3630" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        </button>
        <h1 style={{ margin:0, fontSize:"18px", fontWeight:800, color:"#2A2420" }}>Chi tiết thử thách</h1>
      </div>

      {/* Hero */}
      <div style={{ margin:"0 20px 16px", padding:"24px 20px", background:c.bg, borderRadius:"24px" }}>
        <div style={{ fontSize:"56px", textAlign:"center", marginBottom:"12px" }}>{c.icon}</div>
        <p style={{ margin:"0 0 4px", fontSize:"20px", fontWeight:900, color:"#2A2420", textAlign:"center" }}>{c.title}</p>
        <p style={{ margin:"0 0 14px", fontSize:"13px", color:"#6A6060", textAlign:"center", lineHeight:1.5 }}>{c.desc}</p>
        <div style={{ display:"flex", justifyContent:"center", gap:"12px" }}>
          <Pill label={c.duration} icon="📅"/>
          <Pill label={c.effort} icon="⏱"/>
          <Pill label={`${c.members} người`} icon="👤"/>
        </div>
      </div>

      {/* Tips */}
      <div style={{ margin:"0 20px 16px", padding:"16px", background:"#FFFFFF", borderRadius:"18px", boxShadow:"0 1px 8px rgba(0,0,0,0.07)" }}>
        <p style={{ margin:"0 0 12px", fontSize:"15px", fontWeight:800, color:"#2A2420" }}>Bí quyết thành công</p>
        {c.tips.map((tip, i) => (
          <div key={i} style={{ display:"flex", gap:"10px", marginBottom:"10px" }}>
            <div style={{ width:"24px", height:"24px", borderRadius:"50%", background:c.bg, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ fontSize:"12px", fontWeight:800, color:c.accent }}>{i+1}</span>
            </div>
            <p style={{ margin:0, fontSize:"13px", color:"#3A3630", lineHeight:1.5 }}>{tip}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ padding:"0 20px 32px" }}>
        <button onClick={handleJoin} style={{
          width:"100%", height:"52px", borderRadius:"16px", border:"none", cursor:"pointer",
          background: joined ? "#F0EAE4" : `linear-gradient(90deg,${c.accent},${c.accent}CC)`,
          color: joined ? "#6A6060" : "#FFFFFF",
          fontSize:"15px", fontWeight:700, fontFamily:"'Nunito', sans-serif",
          boxShadow: joined ? "none" : `0 4px 14px ${c.accent}44`,
        }}>{joined ? "✓ Đang tham gia" : "Tham gia thử thách"}</button>
      </div>

      {toast && (
        <div style={{ position:"fixed", bottom:"80px", left:"50%", transform:"translateX(-50%)", background:"#2A2420", color:"#FFFFFF", padding:"10px 20px", borderRadius:"14px", fontSize:"13px", fontWeight:700, zIndex:60, whiteSpace:"nowrap", fontFamily:"'Nunito', sans-serif" }}>
          {toast}
        </div>
      )}
    </div>
  );
}

function Pill({ label, icon }: { label:string; icon:string }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:"4px", padding:"5px 10px", borderRadius:"10px", background:"rgba(255,255,255,0.7)" }}>
      <span style={{ fontSize:"12px" }}>{icon}</span>
      <span style={{ fontSize:"11px", fontWeight:700, color:"#3A3630" }}>{label}</span>
    </div>
  );
}
