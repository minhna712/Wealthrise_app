import { CHALLENGES } from "../data/challenges";
import { useUserState } from "../state/UserStateContext";

interface Props { onBack: () => void; }

export default function ChallengeHistoryScreen({ onBack }: Props) {
  const { userState } = useUserState();
  const { challengeProgress } = userState;

  const active = challengeProgress.filter(p => p.status === "in-progress");
  const done   = challengeProgress.filter(p => p.status === "completed");

  return (
    <div style={{ minHeight:"100%", background:"#FFF9F3", fontFamily:"'Nunito', sans-serif" }}>
      <div style={{ display:"flex", alignItems:"center", gap:"12px", padding:"16px 20px 12px" }}>
        <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:"4px" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3A3630" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        </button>
        <h1 style={{ margin:0, fontSize:"20px", fontWeight:800, color:"#2A2420" }}>Lịch sử thử thách</h1>
      </div>

      <div style={{ padding:"0 20px 24px" }}>
        <p style={{ margin:"0 0 10px", fontSize:"13px", fontWeight:700, color:"#9A9088", textTransform:"uppercase", letterSpacing:"0.5px" }}>Đang tham gia</p>
        {active.length === 0 && (
          <p style={{ fontSize:"13px", color:"#C0B8B0", marginBottom:"16px" }}>Chưa có thử thách nào đang tham gia.</p>
        )}
        {active.map(prog => {
          const c = CHALLENGES.find(ch => ch.id === prog.challengeId);
          if (!c) return null;
          const pct = Math.round((prog.daysCompleted / c.duration) * 100);
          return (
            <div key={prog.challengeId} style={{ padding:"16px", background:"linear-gradient(120deg,#3A2E28,#5A4030)", borderRadius:"20px", marginBottom:"12px" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"10px" }}>
                <span style={{ fontSize:"26px" }}>{c.icon}</span>
                <div>
                  <p style={{ margin:0, fontSize:"15px", fontWeight:800, color:"#FFFFFF" }}>{c.title}</p>
                  <p style={{ margin:0, fontSize:"11px", color:"rgba(255,255,255,0.6)" }}>Bắt đầu {prog.startDate}</p>
                </div>
              </div>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"6px" }}>
                <span style={{ fontSize:"12px", color:"rgba(255,255,255,0.7)" }}>Ngày {prog.daysCompleted}/{c.duration}</span>
                <span style={{ fontSize:"12px", fontWeight:700, color:"#D95C5C" }}>{pct}%</span>
              </div>
              <div style={{ height:"6px", background:"rgba(255,255,255,0.15)", borderRadius:"3px", overflow:"hidden" }}>
                <div style={{ width:`${pct}%`, height:"100%", background:"#D95C5C", borderRadius:"3px" }}/>
              </div>
            </div>
          );
        })}

        <p style={{ margin:"16px 0 10px", fontSize:"13px", fontWeight:700, color:"#9A9088", textTransform:"uppercase", letterSpacing:"0.5px" }}>Đã hoàn thành</p>
        {done.length === 0 && (
          <p style={{ fontSize:"13px", color:"#C0B8B0" }}>Chưa có thử thách nào hoàn thành.</p>
        )}
        {done.map(prog => {
          const c = CHALLENGES.find(ch => ch.id === prog.challengeId);
          if (!c) return null;
          return (
            <div key={prog.challengeId} style={{ padding:"16px", background:"#FFFFFF", borderRadius:"18px", boxShadow:"0 1px 8px rgba(0,0,0,0.07)", marginBottom:"12px" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"12px" }}>
                <div style={{ width:"52px", height:"52px", borderRadius:"14px", background:c.color, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"26px" }}>{c.icon}</div>
                <div style={{ flex:1 }}>
                  <p style={{ margin:0, fontSize:"15px", fontWeight:800, color:"#2A2420" }}>{c.title}</p>
                  <p style={{ margin:"2px 0 0", fontSize:"12px", color:"#9A9088" }}>Hoàn thành {prog.completedDate ?? ""}</p>
                </div>
                <div style={{ padding:"4px 10px", borderRadius:"10px", background:"#EDF5EF" }}>
                  <span style={{ fontSize:"11px", fontWeight:700, color:"#7B987E" }}>✓ Xong</span>
                </div>
              </div>
              <div style={{ display:"flex", gap:"12px" }}>
                <StatBadge value={`${prog.daysCompleted} ngày`} label="Hoàn thành"/>
                <StatBadge value="100%" label="Tỷ lệ"/>
              </div>
            </div>
          );
        })}
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
