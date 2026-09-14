import { useState } from "react";
import { CHALLENGES } from "../data/challenges";
import { useUserState } from "../state/UserStateContext";

interface Props {
  challengeId: string;
  onBack: () => void;
}

export default function ChallengeDetailScreen({ challengeId, onBack }: Props) {
  const { userState, joinChallenge, stopChallenge, markChallengeCompleted } = useUserState();
  const [toast, setToast] = useState("");

  const c = CHALLENGES.find(ch => ch.id === challengeId) ?? CHALLENGES[0];
  const progress = userState.challengeProgress.find(p => p.challengeId === c.id);
  const isJoined = !!progress && progress.status !== "stopped";
  const isCompleted = progress?.status === "completed";
  const isStopped = progress?.status === "stopped";

  const showToast = (msg: string) => { setToast(msg); setTimeout(() => setToast(""), 2000); };

  const handleJoin = () => {
    if (isCompleted) return;
    if (isJoined) {
      stopChallenge(c.id);
      showToast("Đã rời thử thách");
    } else {
      joinChallenge(c.id);
      showToast("Đã tham gia thử thách!");
    }
  };

  const tips = [
    "Bắt đầu nhỏ và tăng dần mỗi ngày",
    "Ghi chú tiến độ sau mỗi ngày hoàn thành",
    "Rủ bạn bè cùng tham gia để duy trì động lực",
  ];

  return (
    <div style={{ minHeight:"100%", background:"#FFF9F3", fontFamily:"'Nunito', sans-serif" }}>
      <div style={{ display:"flex", alignItems:"center", gap:"12px", padding:"16px 20px 12px" }}>
        <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:"4px" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3A3630" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        </button>
        <h1 style={{ margin:0, fontSize:"18px", fontWeight:800, color:"#2A2420" }}>Chi tiết thử thách</h1>
      </div>

      <div style={{ margin:"0 20px 16px", padding:"24px 20px", background:c.color, borderRadius:"24px" }}>
        <div style={{ fontSize:"56px", textAlign:"center", marginBottom:"12px" }}>{c.icon}</div>
        <p style={{ margin:"0 0 4px", fontSize:"20px", fontWeight:900, color:"#2A2420", textAlign:"center" }}>{c.title}</p>
        <p style={{ margin:"0 0 14px", fontSize:"13px", color:"#6A6060", textAlign:"center", lineHeight:1.5 }}>{c.description}</p>
        <div style={{ display:"flex", justifyContent:"center", gap:"12px" }}>
          <Pill label={`${c.duration} ngày`} icon="📅"/>
          <Pill label={c.dailyTask.length > 20 ? c.dailyTask.slice(0,20)+"…" : c.dailyTask} icon="⏱"/>
          <Pill label={`${c.participants} người`} icon="👤"/>
        </div>
      </div>

      {progress && progress.status === "in-progress" && (
        <div style={{ margin:"0 20px 16px", padding:"16px", background:"#FFFFFF", borderRadius:"18px", boxShadow:"0 1px 8px rgba(0,0,0,0.07)" }}>
          <p style={{ margin:"0 0 8px", fontSize:"14px", fontWeight:700, color:"#2A2420" }}>Tiến độ của bạn</p>
          <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"6px" }}>
            <span style={{ fontSize:"13px", color:"#6A6060" }}>Ngày {progress.daysCompleted}/{c.duration}</span>
            <span style={{ fontSize:"13px", fontWeight:700, color:c.accent }}>{Math.round((progress.daysCompleted/c.duration)*100)}%</span>
          </div>
          <div style={{ height:"8px", background:"#F0EAE4", borderRadius:"4px", overflow:"hidden" }}>
            <div style={{ width:`${(progress.daysCompleted/c.duration)*100}%`, height:"100%", background:c.accent, borderRadius:"4px" }}/>
          </div>
        </div>
      )}

      {isCompleted && (
        <div style={{ margin:"0 20px 16px", padding:"16px", background:"#EDF5EF", borderRadius:"18px", display:"flex", alignItems:"center", gap:"10px" }}>
          <span style={{ fontSize:"28px" }}>🎉</span>
          <div>
            <p style={{ margin:0, fontSize:"14px", fontWeight:800, color:"#7B987E" }}>Đã hoàn thành!</p>
            <p style={{ margin:"2px 0 0", fontSize:"12px", color:"#9A9088" }}>Bạn đã hoàn thành thử thách này.</p>
          </div>
        </div>
      )}

      <div style={{ margin:"0 20px 16px", padding:"16px", background:"#FFFFFF", borderRadius:"18px", boxShadow:"0 1px 8px rgba(0,0,0,0.07)" }}>
        <p style={{ margin:"0 0 12px", fontSize:"15px", fontWeight:800, color:"#2A2420" }}>Bí quyết thành công</p>
        {tips.map((tip, i) => (
          <div key={i} style={{ display:"flex", gap:"10px", marginBottom:"10px" }}>
            <div style={{ width:"24px", height:"24px", borderRadius:"50%", background:c.color, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ fontSize:"12px", fontWeight:800, color:c.accent }}>{i+1}</span>
            </div>
            <p style={{ margin:0, fontSize:"13px", color:"#3A3630", lineHeight:1.5 }}>{tip}</p>
          </div>
        ))}
      </div>

      <div style={{ padding:"0 20px 32px" }}>
        {!isCompleted && (
          <button onClick={handleJoin} style={{
            width:"100%", height:"52px", borderRadius:"16px", border:"none", cursor:"pointer",
            background: isJoined ? "#F0EAE4" : `linear-gradient(90deg,${c.accent},${c.accent}CC)`,
            color: isJoined ? "#6A6060" : "#FFFFFF",
            fontSize:"15px", fontWeight:700, fontFamily:"'Nunito', sans-serif",
            boxShadow: isJoined ? "none" : `0 4px 14px ${c.accent}44`,
          }}>{isJoined ? "✓ Đang tham gia · Rời thử thách" : isStopped ? "Tham gia lại" : "Tham gia thử thách"}</button>
        )}
        {isCompleted && (
          <div style={{ height:"52px", borderRadius:"16px", background:"#EDF5EF", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <span style={{ fontSize:"15px", fontWeight:700, color:"#7B987E" }}>✓ Đã hoàn thành</span>
          </div>
        )}
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
