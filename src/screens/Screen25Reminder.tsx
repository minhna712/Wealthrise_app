import { useState } from "react";
import { OnboardingNav, CTAButton, ScreenTitle } from "./OnboardingShared";

interface Props {
  selected: string | null;
  onChange: (v: string) => void;
  onBack: () => void;
  onSkip: () => void;
  onNext: () => void;
}

const TIMES = [
  { id: "morning", label: "Buổi sáng",  sub: "6:00 – 9:00",   icon: "☀️" },
  { id: "noon",    label: "Buổi trưa",  sub: "10:00 – 14:00", icon: "🌤️" },
  { id: "evening", label: "Buổi tối",   sub: "18:00 – 22:00", icon: "🌙" },
  { id: "custom",  label: "Tự chọn",    sub: "Chọn giờ cụ thể", icon: "🕒" },
];

export default function Screen25Reminder({ selected, onChange, onBack, onSkip, onNext }: Props) {
  const isCustom = selected !== null && !["morning", "noon", "evening"].includes(selected);
  const [customTime, setCustomTime] = useState<string>(isCustom ? selected! : "08:00");

  const handleSelect = (id: string) => {
    if (id === "custom") {
      onChange(customTime);
    } else {
      onChange(id);
    }
  };

  const handleCustomChange = (val: string) => {
    setCustomTime(val);
    if (isCustom) onChange(val);
  };

  const isActive = (id: string) => id === "custom" ? isCustom : selected === id;

  return (
    <div style={{ minHeight: "100%", background: "#FFF8F4", display: "flex", flexDirection: "column", fontFamily: "'Inter', sans-serif" }}>
      <OnboardingNav onBack={onBack} onSkip={onSkip} step={3} total={4} />
      <ScreenTitle
        title={"Khi nào bạn muốn\nđược nhắc nhở?"}
        subtitle={"Lời nhắc đúng lúc giúp bạn duy trì thói quen tốt hơn."}
      />

      <div style={{ padding: "20px 20px 0", flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
        {TIMES.map((t) => {
          const active = isActive(t.id);
          return (
            <button
              key={t.id}
              onClick={() => handleSelect(t.id)}
              style={{
                display: "flex", alignItems: "center", gap: "14px",
                padding: "16px",
                borderRadius: "14px",
                background: active ? "#FEF2EC" : "#FFFFFF",
                border: `1.5px solid ${active ? "#F28C64" : "#EDE4DC"}`,
                boxShadow: active ? "0 2px 12px rgba(242,140,100,0.18)" : "0 1px 4px rgba(0,0,0,0.05)",
                cursor: "pointer", textAlign: "left",
                transition: "all 0.15s",
              }}
            >
              <div style={{
                width: "44px", height: "44px", borderRadius: "11px", flexShrink: 0,
                background: active ? "#F28C64" : "#F5EDE8",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "20px", transition: "all 0.15s",
              }}>
                {t.icon}
              </div>

              <div style={{ flex: 1 }}>
                <p style={{ margin: 0, fontSize: "15px", fontWeight: 600, color: active ? "#F28C64" : "#1A1612" }}>{t.label}</p>
                <p style={{ margin: "2px 0 0", fontSize: "12px", color: "#5F6368" }}>{t.sub}</p>
              </div>

              <div style={{
                width: "20px", height: "20px", borderRadius: "50%", flexShrink: 0,
                border: `2px solid ${active ? "#F28C64" : "#D8D0C8"}`,
                background: active ? "#F28C64" : "transparent",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.15s",
              }}>
                {active && <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FFFFFF" }}/>}
              </div>
            </button>
          );
        })}

        {/* Custom time picker */}
        {isCustom && (
          <div style={{
            background: "#FFFFFF", borderRadius: "14px", padding: "16px",
            border: "1.5px solid #F28C64",
            display: "flex", alignItems: "center", gap: "12px",
          }}>
            <span style={{ fontSize: "20px" }}>🕒</span>
            <div style={{ flex: 1 }}>
              <p style={{ margin: "0 0 4px", fontSize: "12px", fontWeight: 600, color: "#F28C64" }}>Chọn giờ cụ thể</p>
              <input
                type="time"
                value={customTime}
                onChange={e => handleCustomChange(e.target.value)}
                style={{
                  fontSize: "20px", fontWeight: 700, color: "#1A1612",
                  background: "transparent", border: "none", outline: "none",
                  fontFamily: "'Inter', sans-serif", cursor: "pointer", width: "100%",
                }}
              />
            </div>
          </div>
        )}
      </div>

      <CTAButton label="Tiếp tục" onClick={onNext} disabled={!selected} />
    </div>
  );
}
