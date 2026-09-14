import { OnboardingNav, CTAButton, ScreenTitle, Checkmark } from "./OnboardingShared";

interface Props {
  selected: string | null;
  onChange: (v: string) => void;
  onBack: () => void;
  onSkip: () => void;
  onNext: () => void;
}

const PURPOSES = [
  { id: "habit-build", icon: "🎯", label: "Xây dựng thói quen mới",       bg: "#FBEDEE", accent: "#E85D4A" },
  { id: "habit-keep",  icon: "📊", label: "Duy trì thói quen tốt",         bg: "#EDF5EF", accent: "#7B987E" },
  { id: "quit-bad",    icon: "🚫", label: "Bỏ thói quen xấu",              bg: "#FFF0E0", accent: "#E0900A" },
  { id: "health",      icon: "❤️", label: "Cải thiện sức khỏe",            bg: "#FDE8EE", accent: "#E84A6A" },
  { id: "procrastin",  icon: "⏳", label: "Giảm trì hoãn",                 bg: "#F2EDF8", accent: "#A896CC" },
  { id: "focus",       icon: "🧠", label: "Tăng sự tập trung",             bg: "#FFF2EC", accent: "#F28C64" },
  { id: "discipline",  icon: "⭐", label: "Sống kỷ luật hơn",              bg: "#FFF5E0", accent: "#E0900A" },
  { id: "growth",      icon: "🌱", label: "Phát triển bản thân mỗi ngày",  bg: "#EDF5EF", accent: "#7B987E" },
];

export default function Screen23Purpose({ selected, onChange, onBack, onSkip, onNext }: Props) {
  return (
    <div style={{ minHeight: "100%", background: "#FFF9F5", display: "flex", flexDirection: "column", fontFamily: "'Nunito', sans-serif" }}>
      <OnboardingNav onBack={onBack} onSkip={onSkip} step={3} total={6} />
      <ScreenTitle
        title={"Bạn dùng WealthRISE\nđể làm gì?"}
        subtitle={"Chọn mục đích chính để chúng tôi cá nhân hoá\ntrải nghiệm cho bạn."}
      />

      <div style={{ padding: "16px 22px 0", flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
        {PURPOSES.map((p) => {
          const active = selected === p.id;
          return (
            <button
              key={p.id}
              onClick={() => onChange(p.id)}
              style={{
                display: "flex", alignItems: "center", gap: "14px",
                padding: "14px 16px",
                borderRadius: "16px",
                background: active ? p.bg : "#FFFFFF",
                border: `2px solid ${active ? p.accent : "transparent"}`,
                boxShadow: active
                  ? `0 2px 12px ${p.accent}22`
                  : "0 1px 4px rgba(0,0,0,0.06)",
                cursor: "pointer",
                transition: "all 0.18s ease",
              }}
            >
              {/* Icon */}
              <div style={{
                width: "42px", height: "42px", borderRadius: "12px",
                background: p.bg,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "20px", flexShrink: 0,
              }}>
                {p.icon}
              </div>

              {/* Label */}
              <span style={{
                flex: 1, fontSize: "15px", fontWeight: 700,
                color: active ? p.accent : "#3A3630",
                textAlign: "left",
                transition: "color 0.18s",
              }}>
                {p.label}
              </span>

              {/* Right indicator */}
              {active ? (
                <Checkmark color={p.accent} />
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="#C8C0B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              )}
            </button>
          );
        })}
      </div>

      <CTAButton label="Tiếp tục" onClick={onNext} disabled={!selected} />
    </div>
  );
}
