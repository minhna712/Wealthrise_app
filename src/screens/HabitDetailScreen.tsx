import { useState } from "react";
import type { Habit } from "../App";

interface Props {
  habit: Habit;
  onUpdate: (changes: Partial<Habit>) => void;
  onBack: () => void;
}

export default function HabitDetailScreen({ habit, onUpdate, onBack }: Props) {
  const [editing, setEditing] = useState(false);
  const [name, setName]       = useState(habit.name);
  const [reminder, setReminder] = useState(habit.reminder);

  const scheduleLabel = () => {
    if (habit.schedule === "daily") return "Hằng ngày";
    if (habit.days.length === 0)   return "Hằng tuần";
    return habit.days.join(" · ");
  };

  const handleSave = () => {
    onUpdate({ name: name.trim(), reminder });
    setEditing(false);
  };

  const handlePause = () => {
    onUpdate({ status: habit.status === "active" ? "paused" : "active" });
    onBack();
  };

  const handleArchive = () => {
    onUpdate({ status: "archived" });
    onBack();
  };

  return (
    <div style={{ minHeight:"100%", background:"#FFF9F3", fontFamily:"'Nunito', sans-serif" }}>
      {/* Header */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 20px 14px", borderBottom:"1px solid #F0EAE4" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
          <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:"4px" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3A3630" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          </button>
          <h1 style={{ margin:0, fontSize:"18px", fontWeight:800, color:"#2A2420" }}>Chi tiết thói quen</h1>
        </div>
        <button onClick={() => setEditing(!editing)} style={{ background:"none", border:"none", cursor:"pointer", fontSize:"13px", fontWeight:700, color:"#D95C5C", fontFamily:"'Nunito', sans-serif" }}>
          {editing ? "Huỷ" : "Chỉnh sửa"}
        </button>
      </div>

      <div style={{ padding:"20px" }}>
        {/* Icon + name */}
        <div style={{ display:"flex", alignItems:"center", gap:"14px", padding:"16px 18px", background:"#FFFFFF", borderRadius:"18px", boxShadow:"0 1px 8px rgba(0,0,0,0.07)", marginBottom:"16px" }}>
          <div style={{ width:"56px", height:"56px", borderRadius:"16px", background:"#EDF5EF", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"28px", flexShrink:0 }}>{habit.icon}</div>
          <div style={{ flex:1 }}>
            {editing ? (
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                style={{ width:"100%", fontSize:"18px", fontWeight:800, color:"#2A2420", border:"none", borderBottom:"2px solid #D95C5C", background:"none", outline:"none", fontFamily:"'Nunito', sans-serif", paddingBottom:"2px" }}
              />
            ) : (
              <p style={{ margin:0, fontSize:"18px", fontWeight:800, color:"#2A2420" }}>{habit.name}</p>
            )}
            <div style={{ display:"flex", alignItems:"center", gap:"5px", marginTop:"4px" }}>
              <div style={{ width:"7px", height:"7px", borderRadius:"50%", background: habit.status==="active"?"#7B987E":"#C0B8B0" }}/>
              <span style={{ fontSize:"12px", fontWeight:600, color: habit.status==="active"?"#7B987E":"#9A9088" }}>
                {habit.status === "active" ? "Đang hoạt động" : "Tạm dừng"}
              </span>
            </div>
          </div>
        </div>

        {/* Details */}
        {[
          { label:"Mục tiêu",      value: habit.goalLabel },
          { label:"Tần suất",      value: scheduleLabel() },
          { label:"Ngày bắt đầu",  value: habit.startDate },
        ].map(item => (
          <div key={item.label} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"14px 16px", background:"#FFFFFF", borderRadius:"14px", boxShadow:"0 1px 4px rgba(0,0,0,0.05)", marginBottom:"9px" }}>
            <p style={{ margin:0, fontSize:"13px", fontWeight:600, color:"#9A9088" }}>{item.label}</p>
            <p style={{ margin:0, fontSize:"13px", fontWeight:700, color:"#2A2420" }}>{item.value}</p>
          </div>
        ))}

        {/* Reminder */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"14px 16px", background:"#FFFFFF", borderRadius:"14px", boxShadow:"0 1px 4px rgba(0,0,0,0.05)", marginBottom:"20px" }}>
          <p style={{ margin:0, fontSize:"13px", fontWeight:600, color:"#9A9088" }}>Thời gian nhắc</p>
          {editing ? (
            <input
              type="time"
              value={reminder}
              onChange={e => setReminder(e.target.value)}
              style={{ border:"none", background:"none", outline:"none", fontFamily:"'Nunito', sans-serif", fontSize:"13px", fontWeight:700, color:"#D95C5C" }}
            />
          ) : (
            <p style={{ margin:0, fontSize:"13px", fontWeight:700, color:"#2A2420" }}>
              {habit.reminder || "Không có"}
            </p>
          )}
        </div>

        {/* Save button (when editing) */}
        {editing && (
          <button onClick={handleSave} style={{
            width:"100%", height:"52px", background:"#D95C5C",
            border:"none", borderRadius:"16px", cursor:"pointer",
            fontFamily:"'Nunito', sans-serif", fontSize:"15px", fontWeight:700, color:"#FFFFFF",
            boxShadow:"0 4px 14px rgba(233,93,80,0.28)", marginBottom:"12px",
          }}>
            Lưu thay đổi
          </button>
        )}

        {/* Actions */}
        <div style={{ display:"flex", gap:"10px", marginTop: editing ? "0" : "8px" }}>
          <button onClick={handlePause} style={{
            flex:1, height:"48px", borderRadius:"14px", cursor:"pointer",
            background: habit.status==="active" ? "#FFF8E0" : "#EDF5EF",
            border: `1.5px solid ${habit.status==="active" ? "#F0D888" : "#B0D8B8"}`,
            fontFamily:"'Nunito', sans-serif", fontSize:"13px", fontWeight:700,
            color: habit.status==="active" ? "#806020" : "#7B987E",
          }}>
            {habit.status === "active" ? "⏸ Tạm dừng" : "▶ Tiếp tục"}
          </button>
          <button onClick={handleArchive} style={{
            flex:1, height:"48px", borderRadius:"14px", cursor:"pointer",
            background:"#F8F5F0", border:"1.5px solid #E0D8D0",
            fontFamily:"'Nunito', sans-serif", fontSize:"13px", fontWeight:700, color:"#9A9088",
          }}>
            📦 Lưu trữ
          </button>
        </div>
      </div>
    </div>
  );
}
