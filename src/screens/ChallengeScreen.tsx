import { useState } from "react";
import type { Habit } from "../App";

interface Props {
  habits: Habit[];
  onNavigateToCreateHabit: () => void;
  onNavigateToHabitDetail: (id: string) => void;
  onUpdateHabit: (id: string, changes: Partial<Habit>) => void;
  onNavigate?: (s: string) => void;
  onViewAllChallenges?: () => void;
}

type CSegment = "habits" | "challenges";
type CState = "none" | "active" | "completed" | "stopped";

const CHALLENGES = [
  { id:"c-sleep", icon:"🌙", title:"7 ngày ngủ đều đặn",       duration:"7 ngày",  effort:"~10 phút/ngày", bg:"#F2EDF8", accent:"#A896CC", goal:"Giấc ngủ" },
  { id:"c-water", icon:"💧", title:"7 ngày uống đủ nước",       duration:"7 ngày",  effort:"~2 phút/ngày",  bg:"#FFF2EC", accent:"#F28C64", goal:"Dinh dưỡng" },
  { id:"c-walk",  icon:"🏃", title:"21 ngày vận động mỗi ngày", duration:"21 ngày", effort:"~20 phút/ngày", bg:"#EDF5EF", accent:"#7B987E", goal:"Vận động" },
];

const DAYS = Array.from({ length:7 }, (_,i) => i+1);

/* ── Habits Tab ── */
function HabitsTab({ habits, onNavigateToCreateHabit, onNavigateToHabitDetail, onUpdateHabit }: {
  habits: Habit[];
  onNavigateToCreateHabit: () => void;
  onNavigateToHabitDetail: (id: string) => void;
  onUpdateHabit: (id: string, changes: Partial<Habit>) => void;
}) {
  const active   = habits.filter(h => h.status === "active");
  const paused   = habits.filter(h => h.status === "paused");

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
          {scheduleLabel(h)}
          {h.reminder ? ` · Nhắc lúc ${h.reminder}` : ""}
        </p>
        <div style={{ display:"flex", alignItems:"center", gap:"4px", marginTop:"4px" }}>
          <div style={{ width:"6px", height:"6px", borderRadius:"50%", background: h.status==="active"?"#7B987E":"#C0B8B0" }}/>
          <span style={{ fontSize:"11px", fontWeight:600, color: h.status==="active"?"#7B987E":"#9A9088" }}>
            {h.status === "active" ? "Đang hoạt động" : "Tạm dừng"}
          </span>
        </div>
      </div>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0B8B0" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
    </button>
  );

  return (
    <div style={{ padding:"0 20px" }}>
      {/* Create CTA */}
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
function ChallengesTab() {
  const [state, setState]   = useState<CState>("none");
  const [todayDone, setTodayDone] = useState(false);
  const currentDay = 3;

  if (state === "none") {
    return (
      <div style={{ padding:"0 20px" }}>
        <p style={{ margin:"0 0 16px", fontSize:"13px", color:"#9A9088" }}>Thử thách có thời lượng giúp bạn xây dựng thói quen bền vững.</p>
        {CHALLENGES.map(c => (
          <div key={c.id} style={{ padding:"16px", background:"#FFFFFF", borderRadius:"18px", boxShadow:"0 1px 8px rgba(0,0,0,0.07)", marginBottom:"12px" }}>
            <div style={{ display:"flex", alignItems:"flex-start", gap:"12px", marginBottom:"12px" }}>
              <div style={{ width:"50px", height:"50px", borderRadius:"14px", background:c.bg, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"24px" }}>{c.icon}</div>
              <div style={{ flex:1 }}>
                <p style={{ margin:0, fontSize:"15px", fontWeight:800, color:"#2A2420" }}>{c.title}</p>
                <p style={{ margin:"4px 0 0", fontSize:"12px", color:"#9A9088" }}>{c.duration} · {c.effort}</p>
                <span style={{ fontSize:"11px", fontWeight:700, color:c.accent, background:c.bg, padding:"2px 8px", borderRadius:"8px", display:"inline-block", marginTop:"6px" }}>{c.goal}</span>
              </div>
            </div>
            <button onClick={() => setState("active")} style={{
              width:"100%", height:"42px", borderRadius:"12px", background:c.bg, border:`1.5px solid ${c.accent}30`,
              cursor:"pointer", fontSize:"13px", fontWeight:700, color:c.accent, fontFamily:"'Nunito', sans-serif",
            }}>Xem thử thách</button>
          </div>
        ))}
      </div>
    );
  }

  if (state === "active") {
    return (
      <div style={{ padding:"0 20px" }}>
        <div style={{ padding:"18px", background:"linear-gradient(120deg,#2A2420,#2A3A5A)", borderRadius:"20px", marginBottom:"16px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"10px" }}>
            <span style={{ fontSize:"28px" }}>🌙</span>
            <div>
              <p style={{ margin:0, fontSize:"11px", color:"rgba(255,255,255,0.5)", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.5px" }}>Đang tham gia</p>
              <p style={{ margin:0, fontSize:"17px", fontWeight:800, color:"#FFFFFF" }}>7 ngày ngủ đều đặn</p>
            </div>
          </div>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"10px" }}>
            <span style={{ fontSize:"13px", color:"rgba(255,255,255,0.7)" }}>Ngày {currentDay}/7</span>
            <span style={{ fontSize:"13px", color:"#D95C5C", fontWeight:700 }}>🔥 3 ngày liên tiếp</span>
          </div>
          <div style={{ height:"6px", background:"rgba(255,255,255,0.15)", borderRadius:"3px", overflow:"hidden", marginBottom:"14px" }}>
            <div style={{ width:`${(currentDay/7)*100}%`, height:"100%", background:"#D95C5C", borderRadius:"3px" }}/>
          </div>
          <button onClick={() => setTodayDone(!todayDone)} style={{
            width:"100%", height:"46px", borderRadius:"14px", background: todayDone?"#7B987E":"#D95C5C",
            border:"none", cursor:"pointer", fontSize:"14px", fontWeight:700, color:"#FFFFFF",
            fontFamily:"'Nunito', sans-serif", transition:"background 0.2s",
          }}>{todayDone ? "✓ Hôm nay đã xong!" : "Tiếp tục hôm nay"}</button>
        </div>

        <h2 style={{ margin:"0 0 12px", fontSize:"15px", fontWeight:800, color:"#2A2420" }}>Lịch trình</h2>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:"6px", marginBottom:"16px" }}>
          {DAYS.map(d => {
            const done = d < currentDay;
            const cur  = d === currentDay;
            return (
              <div key={d} style={{ aspectRatio:"1", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center",
                background: done?"#7B987E": cur?"#D95C5C":"#F0EAE4",
                border: cur?"2px solid #C84030":"2px solid transparent",
              }}>
                {done
                  ? <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  : <span style={{ fontSize:"12px", fontWeight:700, color: cur?"#FFFFFF":"#9A9088" }}>{d}</span>
                }
              </div>
            );
          })}
        </div>
        <div style={{ display:"flex", gap:"8px" }}>
          <button onClick={() => setState("stopped")} style={{ flex:1, height:"44px", borderRadius:"14px", background:"#F0EAE4", border:"none", cursor:"pointer", fontSize:"13px", fontWeight:700, color:"#9A7060", fontFamily:"'Nunito', sans-serif" }}>Tạm dừng</button>
          <button onClick={() => setState("completed")} style={{ flex:2, height:"44px", borderRadius:"14px", background:"#EDF5EF", border:"none", cursor:"pointer", fontSize:"13px", fontWeight:700, color:"#7B987E", fontFamily:"'Nunito', sans-serif" }}>Đánh dấu hoàn thành</button>
        </div>
      </div>
    );
  }

  if (state === "completed") {
    return (
      <div style={{ padding:"0 20px", textAlign:"center" }}>
        <div style={{ padding:"32px 20px 24px" }}>
          <div style={{ fontSize:"60px", marginBottom:"12px" }}>🎉</div>
          <h2 style={{ margin:"0 0 8px", fontSize:"22px", fontWeight:900, color:"#2A2420" }}>Xuất sắc!</h2>
          <p style={{ margin:"0 0 20px", fontSize:"14px", color:"#9A9088", lineHeight:1.6 }}>Bạn đã hoàn thành <strong>7 ngày ngủ đều đặn</strong>.</p>
          <div style={{ display:"flex", justifyContent:"center", gap:"20px", marginBottom:"24px" }}>
            {[["7","Ngày"],["🔥5","Streak"],["100%","Tỷ lệ"]].map(([v,l]) => (
              <div key={l} style={{ textAlign:"center" }}>
                <p style={{ margin:0, fontSize:"22px", fontWeight:900, color:"#D95C5C" }}>{v}</p>
                <p style={{ margin:"2px 0 0", fontSize:"11px", color:"#9A9088" }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
        <button style={{ width:"100%", height:"52px", background:"#D95C5C", border:"none", borderRadius:"16px", cursor:"pointer", fontSize:"15px", fontWeight:700, color:"#FFFFFF", fontFamily:"'Nunito', sans-serif", boxShadow:"0 4px 14px rgba(233,93,80,0.28)", marginBottom:"10px" }}>Xem hành trình</button>
        <button onClick={() => setState("none")} style={{ width:"100%", height:"48px", background:"#FFFFFF", border:"1.5px solid #E0D8D0", borderRadius:"16px", cursor:"pointer", fontSize:"14px", fontWeight:600, color:"#6A6060", fontFamily:"'Nunito', sans-serif" }}>Thử thử thách khác</button>
      </div>
    );
  }

  return (
    <div style={{ padding:"0 20px", textAlign:"center" }}>
      <div style={{ padding:"32px 20px 24px" }}>
        <div style={{ fontSize:"48px", marginBottom:"12px" }}>🌱</div>
        <h2 style={{ margin:"0 0 8px", fontSize:"20px", fontWeight:800, color:"#2A2420" }}>Nghỉ ngơi một chút</h2>
        <p style={{ margin:"0 0 24px", fontSize:"14px", color:"#9A9088", lineHeight:1.6 }}>Không sao cả. Bạn đã đi được 3 ngày — đó là thành tích thật sự.</p>
      </div>
      <button onClick={() => setState("active")} style={{ width:"100%", height:"52px", background:"#D95C5C", border:"none", borderRadius:"16px", cursor:"pointer", fontSize:"15px", fontWeight:700, color:"#FFFFFF", fontFamily:"'Nunito', sans-serif", boxShadow:"0 4px 14px rgba(233,93,80,0.28)", marginBottom:"10px" }}>Bắt đầu lại</button>
      <button onClick={() => setState("none")} style={{ width:"100%", height:"48px", background:"#FFFFFF", border:"1.5px solid #E0D8D0", borderRadius:"16px", cursor:"pointer", fontSize:"14px", fontWeight:600, color:"#6A6060", fontFamily:"'Nunito', sans-serif" }}>Chọn thử thách khác</button>
    </div>
  );
}

/* ── Main screen ── */
export default function ChallengeScreen({ habits, onNavigateToCreateHabit, onNavigateToHabitDetail, onUpdateHabit, onViewAllChallenges }: Props) {
  const [seg, setSeg] = useState<CSegment>("habits");

  return (
    <div style={{ minHeight:"100%", background:"#FFF9F3", fontFamily:"'Nunito', sans-serif" }}>
      {/* Header */}
      <div style={{ padding:"16px 20px 12px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <h1 style={{ margin:0, fontSize:"24px", fontWeight:900, color:"#2A2420" }}>Thử thách</h1>
        {seg === "challenges" && (
          <button onClick={onViewAllChallenges} style={{ background:"none", border:"none", cursor:"pointer", fontSize:"12px", color:"#D95C5C", fontWeight:700, fontFamily:"'Nunito', sans-serif", padding:0 }}>Xem tất cả</button>
        )}
      </div>

      {/* Segmented control */}
      <div style={{ display:"flex", background:"#F0EAE4", borderRadius:"14px", padding:"3px", margin:"0 20px 16px", gap:"2px" }}>
        {([["habits","Thói quen"],["challenges","Thử thách"]] as [CSegment,string][]).map(([s,l]) => (
          <button key={s} onClick={() => setSeg(s)} style={{
            flex:1, height:"36px", borderRadius:"11px", border:"none", cursor:"pointer",
            background: seg===s ? "#FFFFFF" : "transparent",
            boxShadow: seg===s ? "0 1px 4px rgba(0,0,0,0.10)" : "none",
            fontFamily:"'Nunito', sans-serif", fontSize:"13px", fontWeight:700,
            color: seg===s ? "#2A2420" : "#9A9088",
            transition:"all 0.15s",
          }}>{l}</button>
        ))}
      </div>

      {seg === "habits" && (
        <HabitsTab
          habits={habits}
          onNavigateToCreateHabit={onNavigateToCreateHabit}
          onNavigateToHabitDetail={onNavigateToHabitDetail}
          onUpdateHabit={onUpdateHabit}
        />
      )}
      {seg === "challenges" && <ChallengesTab/>}
    </div>
  );
}
