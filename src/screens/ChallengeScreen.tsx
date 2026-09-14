import { useState } from "react";
import { CHALLENGES } from "../data/challenges";
import { useUserState } from "../state/UserStateContext";
import type { Habit } from "../App";

interface Props {
  habits: Habit[];
  onNavigateToCreateHabit: () => void;
  onNavigateToHabitDetail: (id: string) => void;
  onUpdateHabit: (id: string, changes: Partial<Habit>) => void;
  onViewAllChallenges?: () => void;
  onChallengeDetail?: (id: string) => void;
}

type CSegment = "habits" | "challenges";

/* ── Habits Tab ── */
function HabitsTab({ habits, onNavigateToCreateHabit, onNavigateToHabitDetail }: {
  habits: Habit[];
  onNavigateToCreateHabit: () => void;
  onNavigateToHabitDetail: (id: string) => void;
}) {
  const active = habits.filter(h => h.status === "active");
  const paused = habits.filter(h => h.status === "paused");

  const scheduleLabel = (h: Habit) => {
    if (h.schedule === "daily") return "Hằng ngày";
    if (h.days.length === 0) return "Hằng tuần";
    return h.days.join(" · ");
  };

  const HabitRow = ({ h }: { h: Habit }) => (
    <button onClick={() => onNavigateToHabitDetail(h.id)} style={{
      display:"flex", alignItems:"center", gap:"12px", width:"100%", textAlign:"left",
      padding:"14px 16px", borderRadius:"16px", background:"#FFFFFF",
      boxShadow:"0 1px 6px rgba(0,0,0,0.06)", marginBottom:"9px", border:"none", cursor:"pointer",
    }}>
      <div style={{ width:"44px", height:"44px", borderRadius:"14px", background:h.status==="paused"?"#F0EAE4":"#EDF5EF", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"22px" }}>{h.icon}</div>
      <div style={{ flex:1 }}>
        <p style={{ margin:0, fontSize:"14px", fontWeight:700, color:"#2A2420" }}>{h.name}</p>
        <p style={{ margin:"2px 0 0", fontSize:"12px", color:"#9A9088" }}>
          {scheduleLabel(h)}{h.reminder ? ` · Nhắc lúc ${h.reminder}` : ""}
        </p>
        <div style={{ display:"flex", alignItems:"center", gap:"4px", marginTop:"4px" }}>
          <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:h.status==="active"?"#7B987E":"#C0B8B0" }}/>
          <span style={{ fontSize:"11px", fontWeight:600, color:h.status==="active"?"#7B987E":"#9A9088" }}>
            {h.status === "active" ? "Đang hoạt động" : "Tạm dừng"}
          </span>
        </div>
      </div>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0B8B0" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
    </button>
  );

  return (
    <div style={{ padding:"0 20px" }}>
      <button onClick={onNavigateToCreateHabit} style={{
        display:"flex", alignItems:"center", justifyContent:"center", gap:"8px",
        width:"100%", height:"52px", borderRadius:"16px", cursor:"pointer",
        background:"#D95C5C", border:"none",
        fontFamily:"'Nunito', sans-serif", fontSize:"15px", fontWeight:700, color:"#FFFFFF",
        boxShadow:"0 4px 14px rgba(233,93,80,0.28)", marginBottom:"20px",
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Tạo thói quen mới
      </button>

      {active.length > 0 && (
        <>
          <p style={{ margin:"0 0 10px", fontSize:"13px", fontWeight:700, color:"#9A9088", textTransform:"uppercase", letterSpacing:"0.5px" }}>Đang hoạt động</p>
          {active.map(h => <HabitRow key={h.id} h={h}/>)}
        </>
      )}
      {paused.length > 0 && (
        <>
          <p style={{ margin:"16px 0 10px", fontSize:"13px", fontWeight:700, color:"#9A9088", textTransform:"uppercase", letterSpacing:"0.5px" }}>Tạm dừng</p>
          {paused.map(h => <HabitRow key={h.id} h={h}/>)}
        </>
      )}
      {habits.length === 0 && (
        <div style={{ textAlign:"center", padding:"40px 0", color:"#9A9088" }}>
          <span style={{ fontSize:"40px" }}>🌱</span>
          <p style={{ fontSize:"14px", marginTop:"12px" }}>Chưa có thói quen nào.<br/>Tạo thói quen đầu tiên ngay nào!</p>
        </div>
      )}
    </div>
  );
}

/* ── Challenges Tab ── */
function ChallengesTab({ onChallengeDetail }: { onChallengeDetail?: (id: string) => void }) {
  const { userState, joinChallenge, stopChallenge } = useUserState();
  const { challengeProgress } = userState;

  const activeProgress = challengeProgress.filter(p => p.status === "in-progress");
  const featured = CHALLENGES.slice(0, 4);

  if (activeProgress.length > 0) {
    return (
      <div style={{ padding:"0 20px" }}>
        <p style={{ margin:"0 0 12px", fontSize:"13px", fontWeight:700, color:"#9A9088", textTransform:"uppercase", letterSpacing:"0.5px" }}>Đang tham gia</p>
        {activeProgress.map(prog => {
          const c = CHALLENGES.find(ch => ch.id === prog.challengeId);
          if (!c) return null;
          const pct = Math.round((prog.daysCompleted / c.duration) * 100);
          return (
            <button key={prog.challengeId} onClick={() => onChallengeDetail?.(c.id)} style={{
              width:"100%", textAlign:"left", padding:"16px", background:`linear-gradient(120deg,#2A2420,#3A3028)`,
              borderRadius:"20px", marginBottom:"12px", cursor:"pointer", border:"none",
            }}>
              <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"10px" }}>
                <span style={{ fontSize:"28px" }}>{c.icon}</span>
                <div style={{ flex:1 }}>
                  <p style={{ margin:0, fontSize:"11px", color:"rgba(255,255,255,0.5)", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.5px" }}>Đang tham gia</p>
                  <p style={{ margin:0, fontSize:"16px", fontWeight:800, color:"#FFFFFF" }}>{c.title}</p>
                </div>
              </div>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"8px" }}>
                <span style={{ fontSize:"12px", color:"rgba(255,255,255,0.7)" }}>Ngày {prog.daysCompleted}/{c.duration}</span>
                <span style={{ fontSize:"12px", fontWeight:700, color:"#D95C5C" }}>{pct}%</span>
              </div>
              <div style={{ height:"6px", background:"rgba(255,255,255,0.15)", borderRadius:"3px", overflow:"hidden" }}>
                <div style={{ width:`${pct}%`, height:"100%", background:"#D95C5C", borderRadius:"3px" }}/>
              </div>
            </button>
          );
        })}

        <p style={{ margin:"16px 0 10px", fontSize:"13px", fontWeight:700, color:"#9A9088", textTransform:"uppercase", letterSpacing:"0.5px" }}>Gợi ý khác</p>
        {featured.filter(c => !activeProgress.find(p => p.challengeId === c.id)).slice(0,2).map(c => {
          return (
            <div key={c.id} style={{ padding:"14px", background:"#FFFFFF", borderRadius:"16px", boxShadow:"0 1px 6px rgba(0,0,0,0.06)", marginBottom:"10px", display:"flex", alignItems:"center", gap:"12px" }}>
              <div style={{ width:"44px", height:"44px", borderRadius:"14px", background:c.color, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"22px" }}>{c.icon}</div>
              <div style={{ flex:1 }}>
                <p style={{ margin:0, fontSize:"14px", fontWeight:700, color:"#2A2420" }}>{c.title}</p>
                <p style={{ margin:"2px 0 0", fontSize:"12px", color:"#9A9088" }}>{c.duration} ngày</p>
              </div>
              <button onClick={() => { joinChallenge(c.id); }} style={{ padding:"7px 14px", borderRadius:"10px", background:c.color, border:"none", cursor:"pointer", fontSize:"12px", fontWeight:700, color:c.accent, fontFamily:"'Nunito', sans-serif" }}>Tham gia</button>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div style={{ padding:"0 20px" }}>
      <p style={{ margin:"0 0 16px", fontSize:"13px", color:"#9A9088" }}>Thử thách có thời lượng giúp bạn xây dựng thói quen bền vững.</p>
      {featured.map(c => {
        const prog = challengeProgress.find(p => p.challengeId === c.id);
        const isJoined = !!prog && prog.status === "in-progress";
        return (
          <div key={c.id} style={{ padding:"16px", background:"#FFFFFF", borderRadius:"18px", boxShadow:"0 1px 8px rgba(0,0,0,0.07)", marginBottom:"12px" }}>
            <div style={{ display:"flex", alignItems:"flex-start", gap:"12px", marginBottom:"12px" }}>
              <div style={{ width:"50px", height:"50px", borderRadius:"14px", background:c.color, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"24px" }}>{c.icon}</div>
              <div style={{ flex:1 }}>
                <p style={{ margin:0, fontSize:"15px", fontWeight:800, color:"#2A2420" }}>{c.title}</p>
                <p style={{ margin:"4px 0 0", fontSize:"12px", color:"#9A9088" }}>{c.duration} ngày · {c.dailyTask.slice(0,30)}…</p>
                <span style={{ fontSize:"11px", fontWeight:700, color:c.accent, background:c.color, padding:"2px 8px", borderRadius:"8px", display:"inline-block", marginTop:"6px" }}>{c.category}</span>
              </div>
            </div>
            <button onClick={() => isJoined ? stopChallenge(c.id) : (onChallengeDetail ? onChallengeDetail(c.id) : joinChallenge(c.id))} style={{
              width:"100%", height:"42px", borderRadius:"12px", background:isJoined?c.color:c.accent, border: isJoined?`1.5px solid ${c.accent}30`:"none",
              cursor:"pointer", fontSize:"13px", fontWeight:700, color:isJoined?c.accent:"#FFFFFF", fontFamily:"'Nunito', sans-serif",
            }}>{isJoined ? "✓ Đang tham gia" : "Xem thử thách"}</button>
          </div>
        );
      })}
    </div>
  );
}

/* ── Main screen ── */
export default function ChallengeScreen({ habits, onNavigateToCreateHabit, onNavigateToHabitDetail, onUpdateHabit, onViewAllChallenges, onChallengeDetail }: Props) {
  const [seg, setSeg] = useState<CSegment>("habits");

  return (
    <div style={{ minHeight:"100%", background:"#FFF9F3", fontFamily:"'Nunito', sans-serif" }}>
      <div style={{ padding:"16px 20px 12px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <h1 style={{ margin:0, fontSize:"24px", fontWeight:900, color:"#2A2420" }}>Thử thách</h1>
        {seg === "challenges" && (
          <button onClick={onViewAllChallenges} style={{ background:"none", border:"none", cursor:"pointer", fontSize:"12px", color:"#D95C5C", fontWeight:700, fontFamily:"'Nunito', sans-serif", padding:0 }}>Xem tất cả</button>
        )}
      </div>

      <div style={{ display:"flex", background:"#F0EAE4", borderRadius:"14px", padding:"3px", margin:"0 20px 16px", gap:"2px" }}>
        {([["habits","Thói quen"],["challenges","Thử thách"]] as [CSegment,string][]).map(([s,l]) => (
          <button key={s} onClick={() => setSeg(s)} style={{
            flex:1, height:"36px", borderRadius:"11px", border:"none", cursor:"pointer",
            background:seg===s?"#FFFFFF":"transparent",
            boxShadow:seg===s?"0 1px 4px rgba(0,0,0,0.10)":"none",
            fontFamily:"'Nunito', sans-serif", fontSize:"13px", fontWeight:700,
            color:seg===s?"#2A2420":"#9A9088", transition:"all 0.15s",
          }}>{l}</button>
        ))}
      </div>

      {seg === "habits" && (
        <HabitsTab habits={habits} onNavigateToCreateHabit={onNavigateToCreateHabit} onNavigateToHabitDetail={onNavigateToHabitDetail}/>
      )}
      {seg === "challenges" && <ChallengesTab onChallengeDetail={onChallengeDetail}/>}
    </div>
  );
}
