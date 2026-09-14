import { useState, useMemo } from "react";
import type { Habit } from "../App";
import { getSuggestions, resolveHabitReminder, type HabitDef } from "../data/habits";

interface Props {
  goals: string[];
  pace: string | null;
  reminder: string | null;
  onBack: () => void;
  onFinish: (selectedIds: string[], allSuggested: Habit[]) => void;
}

export default function Screen26Habits({ goals, pace, reminder, onBack, onFinish }: Props) {
  const suggestions = useMemo(() => getSuggestions(goals, pace), [goals, pace]);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) => setSelected(prev => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });

  const count = selected.size;
  const canContinue = count > 0;

  const handleFinish = () => {
    if (!canContinue) return;
    // Convert to Habit objects
    const today = new Date().toISOString().split("T")[0];
    const allHabits: Habit[] = suggestions.map(h => ({
      id: h.id,
      icon: h.icon,
      name: h.name,
      goalLabel: h.goals[0] ?? "",
      schedule: h.scheduleDefault,
      days: h.scheduleDefault === "weekly" ? (h.defaultDays ?? ["T2","T4","T6"]) : [],
      reminder: resolveHabitReminder(h, reminder),
      startDate: today,
      status: "active" as const,
    }));
    onFinish([...selected], allHabits);
  };

  const ctaLabel = count === 0
    ? "Chọn ít nhất 1 thói quen"
    : `Thêm ${count} thói quen`;

  return (
    <div style={{ minHeight:"100%", background:"#FFF8F4", display:"flex", flexDirection:"column", fontFamily:"'Inter', sans-serif" }}>
      {/* Header */}
      <div style={{ display:"flex", alignItems:"center", gap:"12px", padding:"12px 20px 0" }}>
        <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:"4px", lineHeight:0 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5F6368" strokeWidth="2" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        </button>
        <div style={{ flex:1 }}>
          <p style={{ margin:0, fontSize:"11px", color:"#9A8A7A", fontWeight:500, letterSpacing:"0.5px", textTransform:"uppercase" }}>Bước 4 / 4</p>
          <h1 style={{ margin:"2px 0 0", fontSize:"20px", fontWeight:700, color:"#1A1612", lineHeight:1.25 }}>Thói quen gợi ý cho bạn</h1>
        </div>
      </div>

      {/* Context pills */}
      <div style={{ padding:"10px 20px 0", display:"flex", gap:"6px", flexWrap:"wrap" }}>
        {pace && (
          <span style={{ fontSize:"11px", fontWeight:500, color:"#7B987E", background:"rgba(123,152,126,0.12)", padding:"3px 10px", borderRadius:"20px" }}>
            {pace === "gentle" ? "Nhẹ nhàng" : pace === "balanced" ? "Cân bằng" : "Thử thách"}
          </span>
        )}
      </div>

      <p style={{ margin:"10px 20px 4px", fontSize:"13px", color:"#5F6368", lineHeight:1.6 }}>
        Chọn thói quen bạn muốn bắt đầu. Bạn có thể thêm hoặc bỏ sau.
      </p>

      {/* Habit cards */}
      <div style={{ padding:"6px 20px 0", display:"flex", flexDirection:"column", gap:"8px", flex:1 }}>
        {suggestions.map(h => {
          const active = selected.has(h.id);
          return (
            <button
              key={h.id}
              onClick={() => toggle(h.id)}
              style={{
                display:"flex", alignItems:"center", gap:"14px",
                padding:"14px 16px",
                borderRadius:"14px",
                background: active ? "#FEF2EC" : "#FFFFFF",
                border:`1.5px solid ${active ? "#F28C64" : "#EDE4DC"}`,
                boxShadow: active ? "0 2px 12px rgba(242,140,100,0.18)" : "0 1px 4px rgba(0,0,0,0.05)",
                cursor:"pointer", textAlign:"left",
                transition:"all 0.15s ease",
              }}
            >
              {/* Icon */}
              <div style={{
                width:"44px", height:"44px", borderRadius:"11px",
                background: active ? "#F28C64" : "#F5EDE8",
                display:"flex", alignItems:"center", justifyContent:"center",
                fontSize:"20px", flexShrink:0,
                transition:"all 0.15s",
              }}>
                {h.icon}
              </div>

              {/* Text */}
              <div style={{ flex:1, minWidth:0 }}>
                <p style={{ margin:0, fontSize:"14px", fontWeight:600, color: active ? "#F28C64" : "#1A1612", lineHeight:1.3 }}>{h.name}</p>
                <p style={{ margin:"3px 0 0", fontSize:"12px", color:"#5F6368", lineHeight:1.4 }}>{h.desc}</p>
                <p style={{ margin:"3px 0 0", fontSize:"11px", color:"#9A8A7A" }}>⏱ {h.effort}</p>
              </div>

              {/* Checkbox */}
              <div style={{
                width:"22px", height:"22px", borderRadius:"50%", flexShrink:0,
                background: active ? "#F28C64" : "transparent",
                border:`2px solid ${active ? "#F28C64" : "#D8D0C8"}`,
                display:"flex", alignItems:"center", justifyContent:"center",
                transition:"all 0.15s",
              }}>
                {active && <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
              </div>
            </button>
          );
        })}
      </div>

      {/* CTA */}
      <div style={{ padding:"16px 20px 36px", flexShrink:0 }}>
        {count > 0 && (
          <p style={{ margin:"0 0 10px", textAlign:"center", fontSize:"13px", color:"#7B987E", fontWeight:500 }}>
            Đã chọn {count} thói quen
          </p>
        )}
        <button
          onClick={handleFinish}
          disabled={!canContinue}
          style={{
            width:"100%", height:"52px",
            display:"flex", alignItems:"center", justifyContent:"center", gap:"8px",
            background: canContinue ? "#F28C64" : "#EDE4DC",
            border:"none", borderRadius:"14px", cursor: canContinue ? "pointer" : "not-allowed",
            fontFamily:"'Inter', sans-serif", fontSize:"15px", fontWeight:600,
            color: canContinue ? "#FFFFFF" : "#9A8A7A",
            boxShadow: canContinue ? "0 4px 20px rgba(242,140,100,0.30)" : "none",
            transition:"all 0.15s",
          }}
        >
          {ctaLabel}
          {canContinue && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
