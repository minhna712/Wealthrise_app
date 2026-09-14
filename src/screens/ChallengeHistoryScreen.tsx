interface Props { onBack: () => void; }

const ACTIVE = [
  { id:"a1", icon:"🌙", title:"7 ngày ngủ đều đặn", startDate:"10/09/2026", progress:0.43, currentDay:3, totalDays:7, bg:"#F2EDF8", accent:"#A896CC" },
];

const DONE = [
  { id:"d1", icon:"💧", title:"7 ngày uống đủ nước", completedDate:"01/09/2026", streak:7, rate:100, bg:"#FFF2EC", accent:"#F28C64" },
];

export default function ChallengeHistoryScreen({ onBack }: Props) {
  return (
    <div style={{ minHeight:"100%", background:"#FFF9F3", fontFamily:"'Nunito', sans-serif" }}>
      <div style={{ display:"flex", alignItems:"center", gap:"12px", padding:"16px 20px 12px" }}>
        <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:"4px" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3A3630" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        </button>
        <h1 style={{ margin:0, fontSize:"20px", fontWeight:800, color:"#2A2420" }}>Lịch sử thử thách</h1>
      </div>

      <div style={{ padding:"0 20px 24px" }}>
        {/* Active */}
        <p style={{ margin:"0 0 10px", fontSize:"13px", fontWeight:700, color:"#9A9088", textTransform:"uppercase", letterSpacing:"0.5px" }}>Đang tham gia</p>
        {ACTIVE.map(c => (
          <div key={c.id} style={{ padding:"16px", background:"linear-gradient(120deg,#3A2E28,#5A4030)", borderRadius:"20px", marginBottom:"12px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"10px" }}>
              <span style={{ fontSize:"26px" }}>{c.icon}</span>
              <div>
                <p style={{ margin:0, fontSize:"15px", fontWeight:800, color:"#FFFFFF" }}>{c.title}</p>
                <p style={{ margin:0, fontSize:"11px", color:"rgba(255,255,255,0.6)" }}>Bắt đầu {c.startDate}</p>
              </div>
            </div>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"6px" }}>
              <span style={{ fontSize:"12px", color:"rgba(255,255,255,0.7)" }}>Ngày {c.currentDay}/{c.totalDays}</span>
              <span style={{ fontSize:"12px", fontWeight:700, color:"#D95C5C" }}>{Math.round(c.progress*100)}%</span>
            </div>
            <div style={{ height:"6px", background:"rgba(255,255,255,0.15)", borderRadius:"3px", overflow:"hidden" }}>
              <div style={{ width:`${c.progress*100}%`, height:"100%", background:"#D95C5C", borderRadius:"3px" }}/>
            </div>
          </div>
        ))}

        {/* Done */}
        <p style={{ margin:"16px 0 10px", fontSize:"13px", fontWeight:700, color:"#9A9088", textTransform:"uppercase", letterSpacing:"0.5px" }}>Đã hoàn thành</p>
        {DONE.map(c => (
          <div key={c.id} style={{ padding:"16px", background:"#FFFFFF", borderRadius:"18px", boxShadow:"0 1px 8px rgba(0,0,0,0.07)", marginBottom:"12px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"12px" }}>
              <div style={{ width:"52px", height:"52px", borderRadius:"14px", background:c.bg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"26px" }}>{c.icon}</div>
              <div style={{ flex:1 }}>
                <p style={{ margin:0, fontSize:"15px", fontWeight:800, color:"#2A2420" }}>{c.title}</p>
                <p style={{ margin:"2px 0 0", fontSize:"12px", color:"#9A9088" }}>Hoàn thành {c.completedDate}</p>
              </div>
              <div style={{ padding:"4px 10px", borderRadius:"10px", background:"#EDF5EF" }}>
                <span style={{ fontSize:"11px", fontWeight:700, color:"#7B987E" }}>✓ Xong</span>
              </div>
            </div>
            <div style={{ display:"flex", gap:"12px" }}>
              <StatBadge value={`${c.streak} ngày`} label="Streak"/>
              <StatBadge value={`${c.rate}%`} label="Tỷ lệ"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatBadge({ value, label }: { value:string; label:string }) {
  return (
    <div style={{ flex:1, padding:"10px", background:"#F8F5F0", borderRadius:"12px", textAlign:"center" }}>
      <p style={{ margin:0, fontSize:"16px", fontWeight:900, color:"#D95C5C" }}>{value}</p>
      <p style={{ margin:"2px 0 0", fontSize:"10px", color:"#9A9088", fontWeight:600 }}>{label}</p>
    </div>
  );
}
