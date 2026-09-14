import WealthRISELogo from "../components/WealthRISELogo";

interface Props {
  onContinue: () => void;
}

export default function Screen22Login({ onContinue }: Props) {
  return (
    <div style={{
      minHeight: "100%", background: "#FFF8F4",
      display: "flex", flexDirection: "column",
      fontFamily: "'Nunito', sans-serif",
    }}>
      {/* Logo + brand */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "28px", gap: "2px" }}>
        {/* WealthRISE logo */}
        <WealthRISELogo size={64}/>
        <h2 style={{ margin: "8px 0 0", fontSize: "26px", fontWeight: 900, color: "#F28C64", letterSpacing: "-0.3px" }}>
          WealthRISE
        </h2>
        <p style={{ margin: "4px 0 0", fontSize: "13px", fontWeight: 500, color: "#9A9088" }}>
          Mỗi ngày là một khởi đầu mới.
        </p>
      </div>

      {/* Main copy */}
      <div style={{ padding: "24px 24px 0", textAlign: "center" }}>
        <h1 style={{ margin: 0, fontSize: "22px", fontWeight: 800, color: "#2A2420", lineHeight: 1.4 }}>
          Lưu hành trình của bạn<br />cùng WealthRISE
        </h1>
        <p style={{ margin: "10px 0 0", fontSize: "14px", color: "#888", lineHeight: 1.6 }}>
          Đăng nhập để theo dõi tiến bộ, đồng bộ dữ liệu<br />và nhận gợi ý phù hợp hơn.
        </p>
      </div>

      {/* Auth buttons */}
      <div style={{ padding: "24px 22px 0", display: "flex", flexDirection: "column", gap: "12px" }}>
        {/* Google */}
        <AuthButton
          onClick={onContinue}
          bg="#FFFFFF" textColor="#1F2A35"
          border="1.5px solid #E0D8D0"
          shadow="0 2px 8px rgba(0,0,0,0.07)"
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          }
          label="Tiếp tục với Google"
        />

        {/* Apple */}
        <AuthButton
          onClick={onContinue}
          bg="#0A0A0A" textColor="#FFFFFF"
          border="none" shadow="0 2px 10px rgba(0,0,0,0.18)"
          icon={
            <svg width="18" height="22" viewBox="0 0 24 29" fill="white">
              <path d="M17.05 14.5c-.03-2.97 2.43-4.4 2.54-4.47-1.39-2.03-3.55-2.31-4.31-2.34-1.83-.19-3.58 1.08-4.51 1.08-.93 0-2.37-1.05-3.9-1.02C4.96 7.79 3.08 8.94 2.04 10.74c-2.13 3.69-.55 9.15 1.52 12.14 1.01 1.46 2.22 3.1 3.8 3.04 1.53-.06 2.11-1 3.96-1 1.85 0 2.38 1 3.99.97 1.64-.03 2.69-1.49 3.69-2.96 1.17-1.7 1.65-3.35 1.68-3.43-.04-.01-3.21-1.23-3.24-4.88-0 0 .01-.02.01-.02z"/>
              <path d="M14.38 5.12c.84-1.02 1.4-2.43 1.25-3.85-1.21.05-2.67.81-3.54 1.83-.78.9-1.46 2.34-1.28 3.72 1.35.1 2.73-.69 3.57-1.7z"/>
            </svg>
          }
          label="Tiếp tục với Apple"
        />

        {/* Email */}
        <AuthButton
          onClick={onContinue}
          bg="#FFFFFF" textColor="#1F2A35"
          border="1.5px solid #E0D8D0" shadow="0 2px 8px rgba(0,0,0,0.07)"
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D95C5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          }
          label="Đăng ký bằng email"
        />

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "4px 0" }}>
          <div style={{ flex: 1, height: "1px", background: "#E8E0D8" }}/>
          <span style={{ fontSize: "13px", color: "#AAA098", fontWeight: 500 }}>hoặc</span>
          <div style={{ flex: 1, height: "1px", background: "#E8E0D8" }}/>
        </div>

        {/* Skip */}
        <button
          onClick={onContinue}
          style={{
            width: "100%", height: "50px", background: "none",
            border: "1.5px solid #E0D8D0", borderRadius: "16px",
            cursor: "pointer", fontFamily: "'Nunito', sans-serif",
            fontSize: "15px", fontWeight: 600, color: "#9A9088",
          }}
        >
          Tôi sẽ làm sau
        </button>
      </div>

      {/* Bottom illustration + quote */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 22px 24px" }}>
        {/* Mini landscape */}
        <svg viewBox="0 0 346 90" width="100%" height="90" style={{ display: "block", marginBottom: "10px" }}>
          <defs>
            <linearGradient id="l22-land-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFF0DC"/>
              <stop offset="100%" stopColor="#FFE0C0"/>
            </linearGradient>
          </defs>
          <rect width="346" height="90" fill="url(#l22-land-sky)" rx="16"/>
          <circle cx="280" cy="42" r="22" fill="#FFCC70" opacity="0.8"/>
          <ellipse cx="280" cy="42" r="32" fill="#FFD080" opacity="0.2"/>
          <path d="M0 70 Q60 48 120 60 Q180 72 240 54 Q293 40 346 52 L346 90 L0 90Z" fill="#A8C8A0"/>
          <path d="M0 80 Q80 66 180 74 Q260 80 346 68 L346 90 L0 90Z" fill="#78917A"/>
          <rect x="40"  y="52" width="4" height="24" rx="2" fill="#3A5840"/>
          <ellipse cx="42" cy="48" rx="11" ry="14" fill="#507858"/>
          <rect x="300" y="55" width="4" height="20" rx="2" fill="#3A5840"/>
          <ellipse cx="302" cy="51" rx="10" ry="13" fill="#608860"/>
          {/* Path */}
          <path d="M140 90 Q160 74 173 66 Q186 58 200 62" fill="none" stroke="#D0B890" strokeWidth="8" strokeLinecap="round" opacity="0.6"/>
        </svg>

        <p style={{ margin: 0, textAlign: "center", fontSize: "13px", fontWeight: 600, color: "#7A8878", lineHeight: 1.6 }}>
          "Hành trình tốt đẹp hơn<br />bắt đầu từ hôm nay 🌱"
        </p>
      </div>
    </div>
  );
}

function AuthButton({
  onClick, bg, textColor, border, shadow, icon, label,
}: {
  onClick: () => void; bg: string; textColor: string;
  border: string; shadow: string; icon: React.ReactNode; label: string;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%", height: "52px", display: "flex",
        alignItems: "center", justifyContent: "center", gap: "12px",
        background: bg, border, borderRadius: "16px",
        cursor: "pointer", boxShadow: shadow,
        fontFamily: "'Nunito', sans-serif", fontSize: "15px",
        fontWeight: 700, color: textColor,
        transition: "opacity 0.15s",
      }}
    >
      {icon}
      {label}
    </button>
  );
}
