import type { ReactElement } from "react";
import { OnboardingNav, CTAButton, ScreenTitle } from "./OnboardingShared";

interface Props {
  selected: string[];
  onChange: (v: string[]) => void;
  onBack: () => void;
  onSkip: () => void;
  onNext: () => void;
}

/* Consistent icon set — outline SVG paths, no emoji mix */
const GOAL_ICONS: Record<string, ReactElement> = {
  sleep: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  ),
  eat: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/><path d="M12 6v6l4 2"/>
    </svg>
  ),
  exercise: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4v16M18 4v16M3 8h18M3 16h18"/>
    </svg>
  ),
  stress: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
    </svg>
  ),
  confidence: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
    </svg>
  ),
  balance: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="3" x2="12" y2="21"/><path d="M17 6H9.5a3.5 3.5 0 0 0 0 7H12"/><path d="M7 18h9.5a3.5 3.5 0 0 0 0-7H12"/>
    </svg>
  ),
  growth: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
    </svg>
  ),
  community: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
};

const GOALS = [
  { id: "sleep",      label: "Ngủ ngon hơn" },
  { id: "eat",        label: "Ăn uống lành mạnh" },
  { id: "exercise",   label: "Vận động đều đặn" },
  { id: "stress",     label: "Giảm căng thẳng" },
  { id: "confidence", label: "Tự tin hơn" },
  { id: "balance",    label: "Cân bằng cuộc sống" },
  { id: "growth",     label: "Phát triển bản thân" },
  { id: "community",  label: "Kết nối cộng đồng" },
];

export default function Screen21Goals({ selected, onChange, onBack, onSkip, onNext }: Props) {
  const toggle = (id: string) =>
    onChange(selected.includes(id) ? selected.filter((x) => x !== id) : [...selected, id]);

  return (
    <div style={{ minHeight: "100%", background: "#FFF8F4", display: "flex", flexDirection: "column", fontFamily: "'Inter', sans-serif" }}>
      <OnboardingNav onBack={onBack} onSkip={onSkip} step={1} total={4} />
      <ScreenTitle
        title={"Bạn muốn tập trung\nvào điều gì?"}
        subtitle={"Chọn những mục tiêu phù hợp với bạn. Có thể chọn nhiều hơn một."}
      />

      <div style={{ padding: "20px 20px 0", flex: 1, display: "flex", flexDirection: "column", gap: "0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          {GOALS.map((g) => {
            const active = selected.includes(g.id);
            return (
              <button
                key={g.id}
                onClick={() => toggle(g.id)}
                style={{
                  display: "flex", alignItems: "center", gap: "12px",
                  padding: "14px 16px",
                  borderRadius: "14px",
                  background: active ? "#FEF2EC" : "#FFFFFF",
                  border: `1.5px solid ${active ? "#F28C64" : "#EDE4DC"}`,
                  boxShadow: active
                    ? "0 2px 12px rgba(242,140,100,0.18)"
                    : "0 1px 4px rgba(0,0,0,0.05)",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.15s ease",
                  position: "relative",
                }}
              >
                {/* Icon */}
                <div style={{
                  width: "40px", height: "40px", borderRadius: "10px", flexShrink: 0,
                  background: active ? "#F28C64" : "#F5EDE8",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: active ? "#FFFFFF" : "#7A6858",
                  transition: "all 0.15s",
                }}>
                  {GOAL_ICONS[g.id]}
                </div>

                <span style={{
                  fontSize: "13px", fontWeight: active ? 600 : 500,
                  color: active ? "#F28C64" : "#1A1612",
                  lineHeight: 1.35,
                  transition: "all 0.15s",
                }}>
                  {g.label}
                </span>

                {/* Selected check */}
                {active && (
                  <div style={{
                    position: "absolute", top: "8px", right: "8px",
                    width: "18px", height: "18px", borderRadius: "50%",
                    background: "#F28C64",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {selected.length > 0 && (
        <p style={{
          margin: "12px 0 0", textAlign: "center", fontSize: "13px",
          color: "#7B987E", fontWeight: 500, fontFamily: "'Inter', sans-serif",
        }}>
          Đã chọn {selected.length} mục tiêu
        </p>
      )}

      <CTAButton label="Tiếp tục" onClick={onNext} disabled={selected.length === 0} />
    </div>
  );
}
