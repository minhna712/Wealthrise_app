import { useState, type ReactNode } from "react";

interface Props {
  onNext: () => void;
}

/* ── Icon components ── */
const MoonIcon = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
    <defs>
      <linearGradient id="moon-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#B8A8E8"/>
        <stop offset="100%" stopColor="#A896CC"/>
      </linearGradient>
    </defs>
    <circle cx="19" cy="19" r="18" fill="#EDE8FA"/>
    <path d="M24 10.5a10 10 0 11-13 13A12 12 0 0024 10.5z" fill="url(#moon-g)"/>
    <circle cx="21" cy="13" r="2" fill="#C8B8F0" opacity="0.6"/>
  </svg>
);

const LeafIcon = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
    <defs>
      <linearGradient id="leaf-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#90D0A0"/>
        <stop offset="100%" stopColor="#5A9E6A"/>
      </linearGradient>
    </defs>
    <circle cx="19" cy="19" r="18" fill="#E8F5EB"/>
    <path d="M19 28 Q10 22 10 14 Q14 8 22 9 Q30 10 29 20 Q28 26 19 28Z" fill="url(#leaf-g)"/>
    <path d="M19 28 Q19 18 22 12" stroke="#4A8A58" strokeWidth="1.4" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

const DumbbellIcon = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
    <defs>
      <linearGradient id="db-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#F59080"/>
        <stop offset="100%" stopColor="#E85D4A"/>
      </linearGradient>
    </defs>
    <circle cx="19" cy="19" r="18" fill="#FDECEA"/>
    <rect x="6" y="16" width="7" height="6" rx="3" fill="url(#db-g)"/>
    <rect x="25" y="16" width="7" height="6" rx="3" fill="url(#db-g)"/>
    <rect x="10" y="14" width="4" height="10" rx="2" fill="#D04030"/>
    <rect x="24" y="14" width="4" height="10" rx="2" fill="#D04030"/>
    <rect x="14" y="17" width="10" height="4" rx="2" fill="url(#db-g)"/>
  </svg>
);

const LotusIcon = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
    <defs>
      <linearGradient id="lotus-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#D0A8E8"/>
        <stop offset="100%" stopColor="#9B6CC8"/>
      </linearGradient>
    </defs>
    <circle cx="19" cy="19" r="18" fill="#F2EBF9"/>
    <path d="M19 26 Q14 22 14 17 Q16 13 19 14 Q22 13 24 17 Q24 22 19 26Z" fill="url(#lotus-g)"/>
    <path d="M19 26 Q11 24 10 18 Q11 14 14 17" fill="#C090D8" opacity="0.55"/>
    <path d="M19 26 Q27 24 28 18 Q27 14 24 17" fill="#C090D8" opacity="0.55"/>
    <path d="M19 26 Q13 28 12 24 Q12 21 14 21" fill="#D0A8E8" opacity="0.4"/>
    <path d="M19 26 Q25 28 26 24 Q26 21 24 21" fill="#D0A8E8" opacity="0.4"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
    <defs>
      <linearGradient id="heart-g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F5806A"/>
        <stop offset="100%" stopColor="#E8453A"/>
      </linearGradient>
    </defs>
    <circle cx="19" cy="19" r="18" fill="#FDECEA"/>
    <path d="M19 27 L9.5 18 Q7 14 11 11 Q14 9 17 12 L19 14 L21 12 Q24 9 27 11 Q31 14 28.5 18Z" fill="url(#heart-g)"/>
    <ellipse cx="15" cy="14" rx="2.5" ry="2" fill="#F8A090" opacity="0.55" transform="rotate(-20 15 14)"/>
  </svg>
);

const SunIcon = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
    <defs>
      <linearGradient id="sun-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFD870"/>
        <stop offset="100%" stopColor="#F5922A"/>
      </linearGradient>
    </defs>
    <circle cx="19" cy="19" r="18" fill="#FFF6E0"/>
    <circle cx="19" cy="19" r="7" fill="url(#sun-g)"/>
    {[0,45,90,135,180,225,270,315].map((deg, i) => {
      const r = deg * Math.PI / 180;
      return (
        <line key={i}
          x1={19 + Math.cos(r) * 10} y1={19 + Math.sin(r) * 10}
          x2={19 + Math.cos(r) * 13.5} y2={19 + Math.sin(r) * 13.5}
          stroke="#F5922A" strokeWidth="2" strokeLinecap="round"/>
      );
    })}
  </svg>
);

const BookIcon = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
    <defs>
      <linearGradient id="book-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#70C8C0"/>
        <stop offset="100%" stopColor="#3A9A92"/>
      </linearGradient>
    </defs>
    <circle cx="19" cy="19" r="18" fill="#E4F5F4"/>
    <rect x="11" y="11" width="16" height="18" rx="3" fill="url(#book-g)"/>
    <rect x="9" y="11" width="4" height="18" rx="2" fill="#2E8880"/>
    <path d="M14 16 h8 M14 19 h8 M14 22 h5" stroke="white" strokeWidth="1.3" strokeLinecap="round" opacity="0.7"/>
  </svg>
);

const PeopleIcon = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
    <defs>
      <linearGradient id="ppl-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#B090E0"/>
        <stop offset="100%" stopColor="#A896CC"/>
      </linearGradient>
    </defs>
    <circle cx="19" cy="19" r="18" fill="#EFE8FA"/>
    {/* Left person */}
    <circle cx="14" cy="14" r="4.5" fill="#9870C8" opacity="0.85"/>
    <path d="M7 28 Q7 21 14 21 Q21 21 21 28" fill="#9870C8" opacity="0.7"/>
    {/* Right person – slightly in front */}
    <circle cx="24" cy="13" r="4.5" fill="url(#ppl-g)"/>
    <path d="M17 28 Q17 21 24 21 Q31 21 31 28" fill="url(#ppl-g)"/>
  </svg>
);

interface Goal {
  id: string;
  bg: string;
  selectedBg: string;
  accentColor: string;
  icon: ReactNode;
  label: string;
}

const GOALS: Goal[] = [
  { id: "sleep",      bg: "#F2EEFB", selectedBg: "#E8DEFA", accentColor: "#A896CC", icon: <MoonIcon/>,    label: "Ngủ ngon hơn" },
  { id: "eat",        bg: "#EAF6EC", selectedBg: "#D4EDDA", accentColor: "#5A9E6A", icon: <LeafIcon/>,    label: "Ăn uống lành mạnh" },
  { id: "exercise",   bg: "#FDECEA", selectedBg: "#FAD9D6", accentColor: "#E85D4A", icon: <DumbbellIcon/>,label: "Vận động đều đặn" },
  { id: "stress",     bg: "#F5EEF9", selectedBg: "#EAD9F2", accentColor: "#9B6CC8", icon: <LotusIcon/>,   label: "Giảm căng thẳng" },
  { id: "confidence", bg: "#FDECEA", selectedBg: "#FAD9D6", accentColor: "#E8453A", icon: <HeartIcon/>,   label: "Tự tin hơn" },
  { id: "balance",    bg: "#FFF7E0", selectedBg: "#FDEDB8", accentColor: "#F5922A", icon: <SunIcon/>,     label: "Cân bằng cuộc sống" },
  { id: "growth",     bg: "#E6F5F4", selectedBg: "#C8ECEB", accentColor: "#3A9A92", icon: <BookIcon/>,    label: "Phát triển bản thân" },
  { id: "community",  bg: "#EFE8FA", selectedBg: "#E0D0F4", accentColor: "#A896CC", icon: <PeopleIcon/>,  label: "Kết nối cộng đồng" },
];

export default function GoalSelectionScreen({ onNext }: Props) {
  const [selected, setSelected] = useState<Set<string>>(new Set(["sleep", "eat"]));

  const toggle = (id: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const rows = [GOALS.slice(0, 3), GOALS.slice(3, 6), GOALS.slice(6, 8)];

  return (
    <div style={{
      minHeight: "100%",
      background: "#FFF9F5",
      display: "flex",
      flexDirection: "column",
      fontFamily: "'Nunito', sans-serif",
    }}>

      {/* ── Top nav ── */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 22px 6px",
      }}>
        <button style={{ background: "none", border: "none", cursor: "pointer", padding: "6px", lineHeight: 0 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
        </button>
        <button style={{
          background: "none", border: "none", cursor: "pointer",
          fontSize: "14px", fontWeight: 600, color: "#888",
          fontFamily: "'Nunito', sans-serif",
        }}>
          Bỏ qua
        </button>
      </div>

      {/* ── Heading ── */}
      <div style={{ padding: "12px 24px 4px" }}>
        <h1 style={{
          margin: 0,
          fontSize: "27px",
          fontWeight: 800,
          color: "#2A2420",
          lineHeight: 1.35,
          letterSpacing: "-0.3px",
        }}>
          Bạn muốn tập trung<br />vào điều gì?
        </h1>
        <p style={{
          margin: "8px 0 0",
          fontSize: "14px",
          fontWeight: 500,
          color: "#888",
          lineHeight: 1.55,
        }}>
          Chọn những mục tiêu phù hợp với bạn<br />(có thể chọn nhiều hơn một)
        </p>
      </div>

      {/* ── Goal grid ── */}
      <div style={{ padding: "16px 20px 0", flex: 1 }}>

        {/* Row 1 & 2 – 3 columns */}
        {rows.slice(0, 2).map((row, ri) => (
          <div key={ri} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", marginBottom: "12px" }}>
            {row.map((g) => {
              const active = selected.has(g.id);
              return (
                <button
                  key={g.id}
                  onClick={() => toggle(g.id)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "16px 8px 14px",
                    borderRadius: "18px",
                    background: active ? g.selectedBg : g.bg,
                    border: active ? `2px solid ${g.accentColor}` : "2px solid transparent",
                    cursor: "pointer",
                    boxShadow: active ? `0 2px 12px ${g.accentColor}22` : "0 1px 4px rgba(0,0,0,0.05)",
                    transition: "all 0.18s ease",
                    minHeight: "96px",
                  }}
                >
                  {/* Icon with subtle lift shadow when selected */}
                  <div style={{
                    filter: active ? `drop-shadow(0 3px 6px ${g.accentColor}44)` : "drop-shadow(0 2px 4px rgba(0,0,0,0.10))",
                    transition: "filter 0.18s",
                  }}>
                    {g.icon}
                  </div>
                  <span style={{
                    fontSize: "11.5px",
                    fontWeight: 700,
                    color: active ? g.accentColor : "#3A3630",
                    textAlign: "center",
                    lineHeight: 1.35,
                    transition: "color 0.18s",
                  }}>
                    {g.label}
                  </span>
                </button>
              );
            })}
          </div>
        ))}

        {/* Row 3 – 2 columns centered */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
          marginBottom: "20px",
          padding: "0 6px",
        }}>
          {rows[2].map((g) => {
            const active = selected.has(g.id);
            return (
              <button
                key={g.id}
                onClick={() => toggle(g.id)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "18px 12px 16px",
                  borderRadius: "18px",
                  background: active ? g.selectedBg : g.bg,
                  border: active ? `2px solid ${g.accentColor}` : "2px solid transparent",
                  cursor: "pointer",
                  boxShadow: active ? `0 2px 14px ${g.accentColor}22` : "0 1px 4px rgba(0,0,0,0.05)",
                  transition: "all 0.18s ease",
                  minHeight: "104px",
                }}
              >
                <div style={{
                  filter: active ? `drop-shadow(0 3px 6px ${g.accentColor}44)` : "drop-shadow(0 2px 4px rgba(0,0,0,0.10))",
                  transition: "filter 0.18s",
                }}>
                  {g.icon}
                </div>
                <span style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: active ? g.accentColor : "#3A3630",
                  textAlign: "center",
                  lineHeight: 1.35,
                  transition: "color 0.18s",
                }}>
                  {g.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{ padding: "8px 22px 32px", display: "flex", justifyContent: "center" }}>
        <button
          onClick={onNext}
          style={{
            width: "100%",
            maxWidth: "340px",
            height: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            background: "linear-gradient(90deg, #E95E55 0%, #E4574F 100%)",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            fontFamily: "'Nunito', sans-serif",
            fontSize: "16px",
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "0.1px",
            boxShadow: "0 6px 20px rgba(233,94,85,0.32)",
            transition: "opacity 0.15s",
          }}
        >
          Tiếp tục
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

    </div>
  );
}
