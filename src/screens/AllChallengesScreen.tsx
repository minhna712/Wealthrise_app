import { useState } from "react";
import { CHALLENGES } from "../data/challenges";
import { useUserState } from "../state/UserStateContext";

type CTab = "active" | "explore" | "done";

interface Props {
  onBack: () => void;
  onChallengeDetail: (id: string) => void;
}

export default function AllChallengesScreen({ onBack, onChallengeDetail }: Props) {
  const [tab, setTab] = useState<CTab>("explore");
  const { userState, joinChallenge, stopChallenge } = useUserState();
  const { challengeProgress } = userState;

  const activeProgresses = challengeProgress.filter(p => p.status === "in-progress");
  const doneProgresses   = challengeProgress.filter(p => p.status === "completed");

  const TABS: [CTab, string][] = [["active","Đang tham gia"], ["explore","Khám phá"], ["done","Đã hoàn thành"]];

  return (
    <div style={{ minHeight:"100%", background:"#FFF9F3", fontFamily:"'Nunito', sans-serif" }}>
      <div style={{ display:"flex", alignItems:"center", gap:"12px", padding:"16px 20px 12px" }}>
        <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:"4px" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3A3630" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        </button>
        <h1 style={{ margin:0, fontSize:"20px", fontWeight:800, color:"#2A2420" }}>Thử thách</h1>
      </div>

      <div style={{ display:"flex", borderBottom:"2px solid #F0EAE4", margin:"0 20px" }}>
        {TABS.map(([t,l]) => (
          <button key={t} onClick={() => setTab(t)} style={{
            flex:1, height:"40px", background:"none", border:"none", cursor:"pointer",
            fontFamily:"'Nunito', sans-serif", fontSize:"12px", fontWeight:tab===t?700:500,
            color:tab===t?"#D95C5C":"#9A9088",
            borderBottom:tab===t?"2px solid #D95C5C":"2px solid transparent", marginBottom:"-2px",
          }}>{l}</button>
        ))}
      </div>

      <div style={{ padding:"16px 20px 24px" }}>

        {tab === "active" && (
          <>
            {activeProgresses.length === 0 && (
              <div style={{ textAlign:"center", padding:"40px 0", color:"#9A9088" }}>
                <span style={{ fontSize:"36px" }}>🌱</span>
                <p style={{ fontSize:"14px", marginTop:"10px" }}>Chưa tham gia thử thách nào.<br/>Khám phá tab bên cạnh nhé!</p>
              </div>
            )}
            {activeProgresses.map(prog => {
              const c = CHALLENGES.find(ch => ch.id === prog.challengeId);
              if (!c) return null;
              const pct = Math.round((prog.daysCompleted / c.duration) * 100);
              const daysLeft = c.duration - prog.daysCompleted;
              return (
                <div key={prog.challengeId} onClick={() => onChallengeDetail(c.id)} style={{ padding:"16px", background:"linear-gradient(120deg,#3A2E28,#5A4030)", borderRadius:"20px", marginBottom:"12px", cursor:"pointer" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"10px" }}>
                    <span style={{ fontSize:"28px" }}>{c.icon}</span>
                    <div>
                      <p style={{ margin:0, fontSize:"11px", color:"rgba(255,255,255,0.5)", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.5px" }}>Đang tham gia</p>
                      <p style={{ margin:0, fontSize:"16px", fontWeight:800, color:"#FFFFFF" }}>{c.title}</p>
                    </div>
                  </div>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"8px" }}>
                    <span style={{ fontSize:"12px", color:"rgba(255,255,255,0.7)" }}>Tiến độ {pct}%</span>
                    <span style={{ fontSize:"12px", color:"#D95C5C", fontWeight:700 }}>Còn {daysLeft} ngày</span>
                  </div>
                  <div style={{ height:"6px", background:"rgba(255,255,255,0.15)", borderRadius:"3px", overflow:"hidden" }}>
                    <div style={{ width:`${pct}%`, height:"100%", background:"#D95C5C", borderRadius:"3px" }}/>
                  </div>
                </div>
              );
            })}
          </>
        )}

        {tab === "explore" && CHALLENGES.map(c => {
          const prog = challengeProgress.find(p => p.challengeId === c.id);
          const isJoined = !!prog && prog.status === "in-progress";
          return (
            <div key={c.id} style={{ padding:"16px", background:"#FFFFFF", borderRadius:"18px", boxShadow:"0 1px 8px rgba(0,0,0,0.07)", marginBottom:"12px" }}>
              <div onClick={() => onChallengeDetail(c.id)} style={{ display:"flex", alignItems:"flex-start", gap:"12px", marginBottom:"12px", cursor:"pointer" }}>
                <div style={{ width:"52px", height:"52px", borderRadius:"14px", background:c.color, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"26px" }}>{c.icon}</div>
                <div style={{ flex:1 }}>
                  <p style={{ margin:0, fontSize:"15px", fontWeight:800, color:"#2A2420" }}>{c.title}</p>
                  <p style={{ margin:"3px 0 4px", fontSize:"12px", color:"#9A9088" }}>{c.duration} ngày</p>
                  <div style={{ display:"flex", gap:"6px", alignItems:"center" }}>
                    <span style={{ fontSize:"11px", fontWeight:700, color:c.accent, background:c.color, padding:"2px 8px", borderRadius:"8px" }}>{c.category}</span>
                    <span style={{ fontSize:"11px", color:"#9A9088" }}>👤 {c.participants}</span>
                  </div>
                </div>
              </div>
              <button onClick={() => isJoined ? stopChallenge(c.id) : joinChallenge(c.id)} style={{
                width:"100%", height:"40px", borderRadius:"12px", border:"none", cursor:"pointer",
                background:isJoined?c.color:c.accent,
                color:isJoined?c.accent:"#FFFFFF",
                fontSize:"13px", fontWeight:700, fontFamily:"'Nunito', sans-serif",
              }}>{isJoined ? "✓ Đang tham gia" : "Tham gia"}</button>
            </div>
          );
        })}

        {tab === "done" && (
          <>
            {doneProgresses.length === 0 && (
              <div style={{ textAlign:"center", padding:"40px 0", color:"#9A9088" }}>
                <span style={{ fontSize:"36px" }}>🏆</span>
                <p style={{ fontSize:"14px", marginTop:"10px" }}>Chưa có thử thách nào hoàn thành.</p>
              </div>
            )}
            {doneProgresses.map(prog => {
              const c = CHALLENGES.find(ch => ch.id === prog.challengeId);
              if (!c) return null;
              return (
                <div key={prog.challengeId} style={{ padding:"16px", background:"#FFFFFF", borderRadius:"18px", boxShadow:"0 1px 8px rgba(0,0,0,0.07)", marginBottom:"12px" }}>
                  <div style={{ display:"flex", alignItems:"flex-start", gap:"12px", marginBottom:"10px" }}>
                    <div style={{ width:"52px", height:"52px", borderRadius:"14px", background:c.color, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"26px" }}>{c.icon}</div>
                    <div style={{ flex:1 }}>
                      <p style={{ margin:0, fontSize:"15px", fontWeight:800, color:"#2A2420" }}>{c.title}</p>
                      <p style={{ margin:"3px 0 4px", fontSize:"12px", color:"#9A9088" }}>Hoàn thành {prog.completedDate ?? ""}</p>
                      <div style={{ display:"flex", gap:"6px", alignItems:"center" }}>
                        <span style={{ fontSize:"11px", fontWeight:700, color:"#7B987E", background:"#EDF5EF", padding:"2px 8px", borderRadius:"8px" }}>✓ Hoàn thành</span>
                        <span style={{ fontSize:"11px", color:"#D95C5C", fontWeight:600 }}>🔥 {prog.daysCompleted} ngày</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
