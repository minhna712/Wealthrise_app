import { useState } from "react";

type CTab = "active" | "explore" | "done";

interface Challenge {
  id: string; icon: string; title: string; duration: string; effort: string;
  bg: string; accent: string; goal: string; members: number;
  progress?: number; daysLeft?: number;
}

const EXPLORE_CHALLENGES: Challenge[] = [
  { id:"c-sleep", icon:"🌙", title:"7 ngày ngủ đều đặn",        duration:"7 ngày",  effort:"~10 phút/ngày", bg:"#F2EDF8", accent:"#A896CC", goal:"Giấc ngủ",   members:128 },
  { id:"c-water", icon:"💧", title:"7 ngày uống đủ nước",        duration:"7 ngày",  effort:"~2 phút/ngày",  bg:"#FFF2EC", accent:"#F28C64", goal:"Dinh dưỡng", members:215 },
  { id:"c-walk",  icon:"🏃", title:"21 ngày vận động mỗi ngày",  duration:"21 ngày", effort:"~20 phút/ngày", bg:"#EDF5EF", accent:"#7B987E", goal:"Vận động",   members:304 },
  { id:"c-food",  icon:"🥗", title:"14 ngày ăn rau mỗi ngày",    duration:"14 ngày", effort:"~5 phút/ngày",  bg:"#FFF3E0", accent:"#E08830", goal:"Dinh dưỡng", members:89  },
  { id:"c-read",  icon:"📖", title:"30 ngày đọc sách mỗi ngày",  duration:"30 ngày", effort:"~15 phút/ngày", bg:"#FBEDEE", accent:"#D95C5C", goal:"Phát triển",  members:176 },
];

const ACTIVE_CHALLENGES: (Challenge & { progress: number; daysLeft: number })[] = [
  { ...EXPLORE_CHALLENGES[0], progress:0.43, daysLeft:4 },
];

const DONE_CHALLENGES: (Challenge & { completedDate: string; streak: number })[] = [
  { ...EXPLORE_CHALLENGES[1], completedDate:"01/09/2026", streak:7, progress:1, daysLeft:0 },
];

interface Props {
  onBack: () => void;
  onChallengeDetail: (id: string) => void;
}

export default function AllChallengesScreen({ onBack, onChallengeDetail }: Props) {
  const [tab, setTab] = useState<CTab>("explore");
  const [joined, setJoined] = useState<Set<string>>(new Set(["c-sleep"]));

  const TABS: [CTab, string][] = [["active","Đang tham gia"], ["explore","Khám phá"], ["done","Đã hoàn thành"]];

  return (
    <div style={{ minHeight:"100%", background:"#FFF9F3", fontFamily:"'Nunito', sans-serif" }}>
      {/* Header */}
      <div style={{ display:"flex", alignItems:"center", gap:"12px", padding:"16px 20px 12px" }}>
        <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:"4px" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3A3630" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        </button>
        <h1 style={{ margin:0, fontSize:"20px", fontWeight:800, color:"#2A2420" }}>Thử thách</h1>
      </div>

      {/* Tabs */}
      <div style={{ display:"flex", borderBottom:"2px solid #F0EAE4", margin:"0 20px" }}>
        {TABS.map(([t,l]) => (
          <button key={t} onClick={()=>setTab(t)} style={{
            flex:1, height:"40px", background:"none", border:"none", cursor:"pointer",
            fontFamily:"'Nunito', sans-serif", fontSize:"12px", fontWeight:tab===t?700:500,
            color: tab===t?"#D95C5C":"#9A9088",
            borderBottom: tab===t?"2px solid #D95C5C":"2px solid transparent", marginBottom:"-2px",
          }}>{l}</button>
        ))}
      </div>

      <div style={{ padding:"16px 20px 24px" }}>
        {tab === "active" && (
          <>
            {ACTIVE_CHALLENGES.map(c => (
              <div key={c.id} onClick={()=>onChallengeDetail(c.id)} style={{ padding:"16px", background:"linear-gradient(120deg,#3A2E28,#5A4030)", borderRadius:"20px", marginBottom:"12px", cursor:"pointer" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"10px" }}>
                  <span style={{ fontSize:"28px" }}>{c.icon}</span>
                  <div>
                    <p style={{ margin:0, fontSize:"11px", color:"rgba(255,255,255,0.5)", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.5px" }}>Đang tham gia</p>
                    <p style={{ margin:0, fontSize:"16px", fontWeight:800, color:"#FFFFFF" }}>{c.title}</p>
                  </div>
                </div>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"8px" }}>
                  <span style={{ fontSize:"12px", color:"rgba(255,255,255,0.7)" }}>Tiến độ {Math.round(c.progress*100)}%</span>
                  <span style={{ fontSize:"12px", color:"#D95C5C", fontWeight:700 }}>Còn {c.daysLeft} ngày</span>
                </div>
                <div style={{ height:"6px", background:"rgba(255,255,255,0.15)", borderRadius:"3px", overflow:"hidden" }}>
                  <div style={{ width:`${c.progress*100}%`, height:"100%", background:"#D95C5C", borderRadius:"3px" }}/>
                </div>
              </div>
            ))}
            {ACTIVE_CHALLENGES.length === 0 && (
              <div style={{ textAlign:"center", padding:"40px 0", color:"#9A9088" }}>
                <span style={{ fontSize:"36px" }}>🌱</span>
                <p style={{ fontSize:"14px", marginTop:"10px" }}>Chưa tham gia thử thách nào.<br/>Khám phá tab bên cạnh nhé!</p>
              </div>
            )}
          </>
        )}

        {tab === "explore" && EXPLORE_CHALLENGES.map(c => {
          const isJoined = joined.has(c.id);
          return (
            <div key={c.id} style={{ padding:"16px", background:"#FFFFFF", borderRadius:"18px", boxShadow:"0 1px 8px rgba(0,0,0,0.07)", marginBottom:"12px" }}>
              <div onClick={()=>onChallengeDetail(c.id)} style={{ display:"flex", alignItems:"flex-start", gap:"12px", marginBottom:"12px", cursor:"pointer" }}>
                <div style={{ width:"52px", height:"52px", borderRadius:"14px", background:c.bg, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"26px" }}>{c.icon}</div>
                <div style={{ flex:1 }}>
                  <p style={{ margin:0, fontSize:"15px", fontWeight:800, color:"#2A2420" }}>{c.title}</p>
                  <p style={{ margin:"3px 0 4px", fontSize:"12px", color:"#9A9088" }}>{c.duration} · {c.effort}</p>
                  <div style={{ display:"flex", gap:"6px", alignItems:"center" }}>
                    <span style={{ fontSize:"11px", fontWeight:700, color:c.accent, background:c.bg, padding:"2px 8px", borderRadius:"8px" }}>{c.goal}</span>
                    <span style={{ fontSize:"11px", color:"#9A9088" }}>👤 {c.members}</span>
                  </div>
                </div>
              </div>
              <button onClick={() => {
                const n = new Set(joined);
                if (n.has(c.id)) n.delete(c.id); else n.add(c.id);
                setJoined(n);
              }} style={{
                width:"100%", height:"40px", borderRadius:"12px", border:"none", cursor:"pointer",
                background: isJoined ? c.bg : c.accent,
                color: isJoined ? c.accent : "#FFFFFF",
                fontSize:"13px", fontWeight:700, fontFamily:"'Nunito', sans-serif",
              }}>{isJoined ? "✓ Đang tham gia" : "Tham gia"}</button>
            </div>
          );
        })}

        {tab === "done" && (
          <>
            {DONE_CHALLENGES.map(c => (
              <div key={c.id} style={{ padding:"16px", background:"#FFFFFF", borderRadius:"18px", boxShadow:"0 1px 8px rgba(0,0,0,0.07)", marginBottom:"12px" }}>
                <div style={{ display:"flex", alignItems:"flex-start", gap:"12px", marginBottom:"10px" }}>
                  <div style={{ width:"52px", height:"52px", borderRadius:"14px", background:c.bg, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"26px" }}>{c.icon}</div>
                  <div style={{ flex:1 }}>
                    <p style={{ margin:0, fontSize:"15px", fontWeight:800, color:"#2A2420" }}>{c.title}</p>
                    <p style={{ margin:"3px 0 4px", fontSize:"12px", color:"#9A9088" }}>Hoàn thành {c.completedDate}</p>
                    <div style={{ display:"flex", gap:"6px", alignItems:"center" }}>
                      <span style={{ fontSize:"11px", fontWeight:700, color:"#7B987E", background:"#EDF5EF", padding:"2px 8px", borderRadius:"8px" }}>✓ Hoàn thành</span>
                      <span style={{ fontSize:"11px", color:"#D95C5C", fontWeight:600 }}>🔥 {c.streak} ngày</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {DONE_CHALLENGES.length === 0 && (
              <div style={{ textAlign:"center", padding:"40px 0", color:"#9A9088" }}>
                <span style={{ fontSize:"36px" }}>🏆</span>
                <p style={{ fontSize:"14px", marginTop:"10px" }}>Chưa có thử thách nào hoàn thành.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
