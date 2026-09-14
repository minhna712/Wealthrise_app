import { useState } from "react";

interface Props {
  onBack: () => void;
}

const MOODS = [
  { emoji: "😞", label: "Không ổn" },
  { emoji: "😐", label: "Bình thường" },
  { emoji: "🙂", label: "Tốt" },
  { emoji: "😊", label: "Tuyệt" },
];

export default function JournalScreen({ onBack }: Props) {
  const [mood, setMood] = useState(2);
  const [text, setText] = useState("");
  const [saved, setSaved] = useState(false);

  const save = () => {
    setSaved(true);
    setTimeout(() => { setSaved(false); onBack(); }, 1200);
  };

  return (
    <div className="flex flex-col min-h-full" style={{ background: "#FAF6F0" }}>
      <div className="flex items-center justify-between px-6 py-3 mb-2">
        <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8A7068" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        </button>
        <h1 style={{ fontSize: "16px", fontWeight: 800, color: "#2D2520" }}>Viết nhật ký</h1>
        <div style={{ width: "20px" }} />
      </div>

      <div className="px-6 flex flex-col gap-4 pb-6">
        {/* Date + tabs */}
        <div className="flex gap-2">
          {["Hôm nay", "Cảm xúc"].map((t, i) => (
            <button key={t} style={{ padding: "6px 16px", borderRadius: "20px", fontSize: "13px", fontWeight: 700, cursor: "pointer", background: i === 0 ? "#E8563A" : "#FFFFFF", color: i === 0 ? "#FFFFFF" : "#8A7068", border: i === 0 ? "none" : "1px solid #EDE0D6" }}>
              {t}
            </button>
          ))}
        </div>

        {/* Prompt */}
        <div className="rounded-2xl p-4" style={{ background: "#FFFFFF", border: "1px solid #EDE0D6" }}>
          <p style={{ fontSize: "16px", fontWeight: 800, color: "#2D2520", marginBottom: "4px" }}>Hôm nay, bạn thế nào?</p>
          <p style={{ fontSize: "13px", color: "#8A7068" }}>Hãy viết dòng về cảm xúc, suy nghĩ hoặc điều khiến bạn biết ơn hôm nay...</p>
        </div>

        {/* Text area */}
        <div className="rounded-2xl p-4" style={{ background: "#FFFFFF", border: "1px solid #EDE0D6" }}>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Mình cảm thấy..."
            rows={5}
            style={{
              width: "100%", border: "none", background: "none", resize: "none", outline: "none",
              fontFamily: "'Nunito', sans-serif", fontSize: "14px", color: "#2D2520", lineHeight: 1.7
            }}
          />
        </div>

        {/* Mood */}
        <div className="rounded-2xl p-4" style={{ background: "#FFFFFF", border: "1px solid #EDE0D6" }}>
          <p style={{ fontSize: "14px", fontWeight: 700, color: "#2D2520", marginBottom: "12px" }}>Bạn đang cảm thấy thế nào?</p>
          <div className="flex justify-around">
            {MOODS.map((m, i) => (
              <button
                key={i}
                onClick={() => setMood(i)}
                className="flex flex-col items-center gap-1"
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                <div style={{
                  fontSize: "28px", width: "48px", height: "48px", borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: mood === i ? "#FFF0EB" : "transparent",
                  border: mood === i ? "2px solid #E8563A" : "2px solid transparent",
                  transition: "all 0.15s"
                }}>
                  {m.emoji}
                </div>
                <span style={{ fontSize: "10px", color: mood === i ? "#E8563A" : "#B0A09A", fontWeight: 600 }}>{m.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Gratitude prompt */}
        <div className="rounded-2xl p-3 flex items-center gap-3" style={{ background: "#EEF5F0" }}>
          <span style={{ fontSize: "20px" }}>🙏</span>
          <p style={{ fontSize: "13px", color: "#5A7D63", fontWeight: 600 }}>Cảm ơn bạn vì đã chia sẻ.<br />Mỗi cảm xúc đều có giá trị. ❤️</p>
        </div>

        <button
          onClick={save}
          className="w-full py-4 font-bold text-white rounded-2xl"
          style={{ background: saved ? "#5A7D63" : "#E8563A", border: "none", cursor: "pointer", fontSize: "16px", transition: "background 0.3s" }}
        >
          {saved ? "✓ Đã lưu!" : "Lưu nhật ký"}
        </button>
      </div>
    </div>
  );
}
