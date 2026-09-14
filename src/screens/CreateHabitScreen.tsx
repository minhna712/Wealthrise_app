import { useState } from "react";
import type { Habit } from "../App";

interface Props {
  onSave: (h: Habit) => void;
  onBack: () => void;
}

const WEEK_DAYS = ["T2","T3","T4","T5","T6","T7","CN"];

const GOAL_OPTIONS = [
  { value:"Vận động",         icon:"🏃" },
  { value:"Giấc ngủ",         icon:"🌙" },
  { value:"Dinh dưỡng",       icon:"🥗" },
  { value:"Tinh thần",        icon:"🧘" },
  { value:"Phát triển",       icon:"📖" },
  { value:"Cân bằng",         icon:"⚖️" },
];

const ICON_OPTIONS = ["💧","🚶","🧘","📔","📖","🌙","🏃","🥗","💪","🌿","⚡","🎯"];

export default function CreateHabitScreen({ onSave, onBack }: Props) {
  const [name,      setName]      = useState("");
  const [icon,      setIcon]      = useState("🎯");
  const [goalLabel, setGoalLabel] = useState("Vận động");
  const [schedule,  setSchedule]  = useState<"daily"|"weekly">("daily");
  const [days,      setDays]      = useState<string[]>([]);
  const [reminder,  setReminder]  = useState("08:00");
  const [showIcons, setShowIcons] = useState(false);

  const toggleDay = (d: string) =>
    setDays(prev => prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]);

  const canSave = name.trim().length > 0;

  const handleSave = () => {
    if (!canSave) return;
    const h: Habit = {
      id: `habit-${Date.now()}`,
      icon,
      name: name.trim(),
      goalLabel,
      schedule,
      days: schedule === "daily" ? [] : days,
      reminder,
      startDate: "2026-09-13",
      status: "active",
    };
    onSave(h);
  };

  return (
    <div style={{ minHeight:"100%", background:"#FFF9F3", fontFamily:"'Nunito', sans-serif" }}>
      {/* Header */}
      <div style={{ display:"flex", alignItems:"center", gap:"12px", padding:"16px 20px 14px", borderBottom:"1px solid #F0EAE4" }}>
        <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:"4px" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3A3630" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        </button>
        <h1 style={{ margin:0, fontSize:"18px", fontWeight:800, color:"#2A2420" }}>Tạo thói quen</h1>
      </div>

      <div style={{ padding:"20px" }}>
        {/* Icon picker */}
        <div style={{ marginBottom:"18px" }}>
          <p style={{ margin:"0 0 10px", fontSize:"13px", fontWeight:700, color:"#6A6060" }}>Biểu tượng</p>
          <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
            <button onClick={() => setShowIcons(!showIcons)} style={{
              width:"56px", height:"56px", borderRadius:"16px", background:"#F0EAE4",
              border:"2px solid #E0D8D0", cursor:"pointer", fontSize:"28px",
              display:"flex", alignItems:"center", justifyContent:"center",
            }}>{icon}</button>
            {showIcons && (
              <div style={{ display:"flex", flexWrap:"wrap", gap:"8px", flex:1 }}>
                {ICON_OPTIONS.map(ic => (
                  <button key={ic} onClick={() => { setIcon(ic); setShowIcons(false); }} style={{
                    width:"40px", height:"40px", borderRadius:"12px", fontSize:"20px",
                    background: icon===ic ? "#FBEDEE" : "#FFFFFF",
                    border: `2px solid ${icon===ic ? "#D95C5C" : "#F0EAE4"}`,
                    cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center",
                  }}>{ic}</button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Name */}
        <div style={{ marginBottom:"18px" }}>
          <label style={{ fontSize:"13px", fontWeight:700, color:"#6A6060", display:"block", marginBottom:"8px" }}>Tên thói quen</label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Vd: Đi bộ 20 phút"
            style={{
              width:"100%", height:"48px", padding:"0 16px", borderRadius:"14px",
              border:"1.5px solid #E0D8D0", background:"#FFFFFF", outline:"none",
              fontFamily:"'Nunito', sans-serif", fontSize:"14px", color:"#2A2420",
              boxSizing:"border-box",
            }}
          />
        </div>

        {/* Goal */}
        <div style={{ marginBottom:"18px" }}>
          <label style={{ fontSize:"13px", fontWeight:700, color:"#6A6060", display:"block", marginBottom:"8px" }}>Mục tiêu</label>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"8px" }}>
            {GOAL_OPTIONS.map(g => (
              <button key={g.value} onClick={() => setGoalLabel(g.value)} style={{
                display:"flex", alignItems:"center", gap:"5px",
                padding:"7px 14px", borderRadius:"20px", border:"none", cursor:"pointer",
                background: goalLabel===g.value ? "#D95C5C" : "#FFFFFF",
                color: goalLabel===g.value ? "#FFFFFF" : "#6A6060",
                fontSize:"13px", fontWeight:700, boxShadow:"0 1px 4px rgba(0,0,0,0.07)",
                fontFamily:"'Nunito', sans-serif",
              }}>
                <span>{g.icon}</span> {g.value}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div style={{ marginBottom:"18px" }}>
          <label style={{ fontSize:"13px", fontWeight:700, color:"#6A6060", display:"block", marginBottom:"8px" }}>Tần suất</label>
          <div style={{ display:"flex", background:"#F0EAE4", borderRadius:"14px", padding:"3px", gap:"2px", marginBottom:"12px" }}>
            {([["daily","Hằng ngày"],["weekly","Một số ngày"]] as ["daily"|"weekly",string][]).map(([s,l]) => (
              <button key={s} onClick={() => setSchedule(s)} style={{
                flex:1, height:"36px", borderRadius:"11px", border:"none", cursor:"pointer",
                background: schedule===s ? "#FFFFFF" : "transparent",
                boxShadow: schedule===s ? "0 1px 4px rgba(0,0,0,0.10)" : "none",
                fontFamily:"'Nunito', sans-serif", fontSize:"13px", fontWeight:700,
                color: schedule===s ? "#2A2420" : "#9A9088",
              }}>{l}</button>
            ))}
          </div>
          {schedule === "weekly" && (
            <div style={{ display:"flex", gap:"6px" }}>
              {WEEK_DAYS.map(d => (
                <button key={d} onClick={() => toggleDay(d)} style={{
                  flex:1, height:"36px", borderRadius:"10px", border:"none", cursor:"pointer",
                  background: days.includes(d) ? "#D95C5C" : "#FFFFFF",
                  color: days.includes(d) ? "#FFFFFF" : "#6A6060",
                  fontSize:"12px", fontWeight:700, boxShadow:"0 1px 4px rgba(0,0,0,0.07)",
                  fontFamily:"'Nunito', sans-serif",
                }}>{d}</button>
              ))}
            </div>
          )}
        </div>

        {/* Reminder */}
        <div style={{ marginBottom:"18px" }}>
          <label style={{ fontSize:"13px", fontWeight:700, color:"#6A6060", display:"block", marginBottom:"8px" }}>Thời gian nhắc</label>
          <input
            type="time"
            value={reminder}
            onChange={e => setReminder(e.target.value)}
            style={{
              height:"48px", padding:"0 16px", borderRadius:"14px", border:"1.5px solid #E0D8D0",
              background:"#FFFFFF", outline:"none", fontFamily:"'Nunito', sans-serif",
              fontSize:"14px", color:"#2A2420", width:"140px",
            }}
          />
        </div>

        {/* Start date */}
        <div style={{ marginBottom:"28px", padding:"13px 16px", background:"#F8F5F0", borderRadius:"14px" }}>
          <p style={{ margin:"0 0 2px", fontSize:"12px", fontWeight:700, color:"#9A9088" }}>Ngày bắt đầu</p>
          <p style={{ margin:0, fontSize:"14px", fontWeight:700, color:"#2A2420" }}>Hôm nay — 13/09/2026</p>
        </div>

        {/* Save */}
        <button onClick={handleSave} disabled={!canSave} style={{
          width:"100%", height:"52px", borderRadius:"16px", border:"none", cursor: canSave?"pointer":"default",
          background: canSave ? "#D95C5C" : "#F0EAE4",
          color: canSave ? "#FFFFFF" : "#B0A8A0",
          fontFamily:"'Nunito', sans-serif", fontSize:"15px", fontWeight:700,
          boxShadow: canSave ? "0 4px 14px rgba(233,93,80,0.28)" : "none",
          transition:"all 0.2s",
        }}>
          Tạo thói quen
        </button>
      </div>
    </div>
  );
}
