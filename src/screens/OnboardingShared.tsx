/* Shared onboarding primitives — WealthRISE brand */

const FONT = "'Inter', sans-serif";
const CORAL = "#F28C64";
const TEXT_PRIMARY = "#1A1612";
const TEXT_MUTED = "#5F6368";
const BORDER = "#EDE4DC";

/* ── Top nav bar ── */
export function OnboardingNav({
  onBack, onSkip, step, total,
}: {
  onBack?: () => void;
  onSkip?: () => void;
  step?: number;
  total?: number;
}) {
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "12px 20px 0",
    }}>
      <button
        onClick={onBack}
        style={{ background: "none", border: "none", cursor: "pointer", padding: "6px", lineHeight: 0 }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke={TEXT_MUTED} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 5l-7 7 7 7"/>
        </svg>
      </button>

      {/* Step indicator — slim pill track */}
      {step !== undefined && total !== undefined && (
        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          {Array.from({ length: total }).map((_, i) => (
            <div key={i} style={{
              width: i === step - 1 ? "20px" : "6px",
              height: "6px", borderRadius: "3px",
              background: i < step ? CORAL : BORDER,
              transition: "all 0.25s",
            }}/>
          ))}
        </div>
      )}

      <button
        onClick={onSkip}
        style={{
          background: "none", border: "none", cursor: "pointer",
          fontSize: "13px", fontWeight: 500, color: TEXT_MUTED,
          fontFamily: FONT, padding: "6px",
          letterSpacing: "0.1px",
        }}
      >
        Bỏ qua
      </button>
    </div>
  );
}

/* ── Primary CTA button ── */
export function CTAButton({ label, onClick, disabled }: {
  label: string; onClick: () => void; disabled?: boolean;
}) {
  return (
    <div style={{ padding: "16px 20px 36px" }}>
      <button
        onClick={onClick}
        disabled={disabled}
        style={{
          width: "100%", height: "52px",
          display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
          background: disabled ? "#EDE4DC" : CORAL,
          border: "none", borderRadius: "14px", cursor: disabled ? "default" : "pointer",
          fontFamily: FONT, fontSize: "15px", fontWeight: 600,
          color: disabled ? TEXT_MUTED : "#FFFFFF",
          boxShadow: disabled ? "none" : "0 4px 20px rgba(242,140,100,0.30)",
          transition: "all 0.15s",
        }}
      >
        {label}
        {!disabled && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        )}
      </button>
    </div>
  );
}

/* ── Checkmark icon ── */
export function Checkmark({ color }: { color: string }) {
  return (
    <div style={{
      width: "20px", height: "20px", borderRadius: "50%",
      background: color, display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
    }}>
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
        stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    </div>
  );
}

/* ── Section title block ── */
export function ScreenTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div style={{ padding: "20px 20px 0" }}>
      <h1 style={{
        margin: 0, fontSize: "24px", fontWeight: 700, color: TEXT_PRIMARY,
        lineHeight: 1.35, letterSpacing: "-0.4px", fontFamily: FONT,
      }}
        dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, "<br/>") }}
      />
      {subtitle && (
        <p style={{
          margin: "8px 0 0", fontSize: "14px", fontWeight: 400,
          color: TEXT_MUTED, lineHeight: 1.6, fontFamily: FONT,
        }}
          dangerouslySetInnerHTML={{ __html: subtitle.replace(/\n/g, "<br/>") }}
        />
      )}
    </div>
  );
}
