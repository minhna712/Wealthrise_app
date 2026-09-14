import { OnboardingNav, CTAButton, ScreenTitle } from "./OnboardingShared";

interface Props {
  selected: string | null;
  onChange: (v: string) => void;
  onBack: () => void;
  onSkip: () => void;
  onNext: () => void;
}

const PACES = [
  {
    id: "gentle",
    label: "Nhẹ nhàng",
    sub: "Bắt đầu từ những thói quen nhỏ, phù hợp với người mới.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 10 10c0 4.4-3.6 8-8 8H8a6 6 0 0 1 0-12h.5"/>
        <path d="M12 6v6"/>
      </svg>
    ),
  },
  {
    id: "balanced",
    label: "Cân bằng",
    sub: "Thử thách vừa phải, xây tiến bộ ổn định theo thời gian.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
  {
    id: "intense",
    label: "Thử thách",
    sub: "Dành cho ai muốn thay đổi rõ rệt và sẵn sàng bứt phá.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
];

export default function Screen24Pace({ selected, onChange, onBack, onSkip, onNext }: Props) {
  return (
    <div style={{ minHeight: "100%", background: "#FFF8F4", display: "flex", flexDirection: "column", fontFamily: "'Inter', sans-serif" }}>
      <OnboardingNav onBack={onBack} onSkip={onSkip} step={2} total={4} />
      <ScreenTitle
        title={"Bạn muốn bắt đầu\nnhư thế nào?"}
        subtitle={"Chọn nhịp độ phù hợp — bạn có thể điều chỉnh sau."}
      />

      <div style={{ padding: "20px 20px 0", flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
        {PACES.map((p) => {
          const active = selected === p.id;
          return (
            <button
              key={p.id}
              onClick={() => onChange(p.id)}
              style={{
                display: "flex", alignItems: "center", gap: "16px",
                padding: "18px 16px",
                borderRadius: "16px",
                background: active ? "#FEF2EC" : "#FFFFFF",
                border: `1.5px solid ${active ? "#F28C64" : "#EDE4DC"}`,
                boxShadow: active
                  ? "0 2px 16px rgba(242,140,100,0.20)"
                  : "0 1px 4px rgba(0,0,0,0.05)",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.18s ease",
              }}
            >
              {/* Icon */}
              <div style={{
                width: "48px", height: "48px", borderRadius: "12px", flexShrink: 0,
                background: active ? "#F28C64" : "#F5EDE8",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: active ? "#FFFFFF" : "#9A7860",
                transition: "all 0.15s",
              }}>
                {p.icon}
              </div>

              {/* Text */}
              <div style={{ flex: 1 }}>
                <p style={{
                  margin: 0, fontSize: "15px", fontWeight: 600,
                  color: active ? "#F28C64" : "#1A1612",
                  transition: "color 0.15s",
                }}>
                  {p.label}
                </p>
                <p style={{
                  margin: "3px 0 0", fontSize: "13px", fontWeight: 400,
                  color: "#5F6368", lineHeight: 1.5,
                }}>
                  {p.sub}
                </p>
              </div>

              {/* Radio */}
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
      </div>

      {/* Insight card */}
      <div style={{ padding: "16px 20px 0" }}>
        <div style={{
          background: "#FFFFFF", borderRadius: "14px", padding: "14px 16px",
          border: "1px solid #EDE4DC",
          display: "flex", alignItems: "flex-start", gap: "10px",
        }}>
          <div style={{ fontSize: "18px", flexShrink: 0, marginTop: "2px" }}>💡</div>
          <p style={{ margin: 0, fontSize: "13px", color: "#5F6368", lineHeight: 1.6, fontFamily: "'Inter', sans-serif" }}>
            Nghiên cứu cho thấy thói quen nhỏ dễ duy trì hơn mục tiêu lớn. Bạn luôn có thể nâng cấp sau.
          </p>
        </div>
      </div>

      <CTAButton label="Tiếp tục" onClick={onNext} disabled={!selected} />
    </div>
  );
}
