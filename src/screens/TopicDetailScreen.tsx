import { useState } from "react";
import { TOPICS, ARTICLES } from "../data/exploreData";

interface Props {
  topicId: string;
  onBack: () => void;
  onNavigateToArticle: (id: string) => void;
}

type Chip = "latest" | "popular" | "easy";

export default function TopicDetailScreen({ topicId, onBack, onNavigateToArticle }: Props) {
  const [chip, setChip]     = useState<Chip>("latest");
  const [saved, setSaved]   = useState<Record<string,boolean>>({});

  const topic    = TOPICS.find(t => t.id === topicId) ?? TOPICS[0];
  const articles = ARTICLES.filter(a => a.topicId === topicId);
  const fallback = ARTICLES.slice(0, 3);
  const list     = (articles.length > 0 ? articles : fallback);

  return (
    <div style={{ minHeight:"100%", background:"#FFF9F3", fontFamily:"'Nunito', sans-serif" }}>
      {/* Header */}
      <div style={{ display:"flex", alignItems:"center", gap:"12px", padding:"16px 20px 12px" }}>
        <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:"4px" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3A3630" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        </button>
        <div style={{ flex:1 }}>
          <p style={{ margin:0, fontSize:"11px", color:"#9A9088", fontWeight:600 }}>Chủ đề</p>
          <h1 style={{ margin:0, fontSize:"22px", fontWeight:900, color:"#2A2420" }}>{topic.icon} {topic.label}</h1>
        </div>
      </div>

      {/* Description */}
      <div style={{ margin:"0 20px 16px", padding:"14px 16px", background:topic.bg, borderRadius:"16px" }}>
        <p style={{ margin:0, fontSize:"13px", color:"#3A3630", lineHeight:1.6 }}>{topic.description}</p>
      </div>

      {/* Sort chips */}
      <div style={{ display:"flex", gap:"8px", padding:"0 20px 16px" }}>
        {([["latest","Mới nhất"],["popular","Phổ biến"],["easy","Dễ bắt đầu"]] as [Chip,string][]).map(([c,l]) => (
          <button key={c} onClick={() => setChip(c)} style={{
            padding:"6px 14px", borderRadius:"20px", border:"none", cursor:"pointer",
            background: chip===c ? "#2A2420" : "#FFFFFF",
            color: chip===c ? "#FFFFFF" : "#6A6060",
            fontSize:"13px", fontWeight:700, boxShadow:"0 1px 4px rgba(0,0,0,0.07)",
            fontFamily:"'Nunito', sans-serif",
          }}>{l}</button>
        ))}
      </div>

      {/* Article list */}
      <div style={{ padding:"0 20px" }}>
        {list.map(a => (
          <button key={a.id} onClick={() => onNavigateToArticle(a.id)} style={{
            display:"flex", alignItems:"flex-start", gap:"12px", width:"100%", textAlign:"left",
            padding:"14px 16px", borderRadius:"16px", background:"#FFFFFF",
            boxShadow:"0 1px 6px rgba(0,0,0,0.06)", marginBottom:"10px", border:"none", cursor:"pointer",
          }}>
            <div style={{ width:"52px", height:"52px", borderRadius:"12px", background:topic.bg, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"24px" }}>{topic.icon}</div>
            <div style={{ flex:1, minWidth:0 }}>
              <p style={{ margin:"0 0 4px", fontSize:"14px", fontWeight:700, color:"#2A2420", lineHeight:1.4 }}>{a.title}</p>
              <p style={{ margin:0, fontSize:"11px", color:"#9A9088" }}>{topic.label} · {a.readingMins} phút đọc</p>
            </div>
            <button onClick={e => { e.stopPropagation(); setSaved(s => ({...s,[a.id]:!s[a.id]})); }} style={{ background:"none", border:"none", cursor:"pointer", padding:"4px", flexShrink:0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill={saved[a.id]?"#D95C5C":"none"} stroke={saved[a.id]?"#D95C5C":"#C0B8B0"} strokeWidth="2" strokeLinecap="round"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>
            </button>
          </button>
        ))}
      </div>

      {/* Challenge CTA */}
      <div style={{ margin:"8px 20px 24px", padding:"16px", borderRadius:"18px", background:`linear-gradient(120deg,#3A2E28,#5A4030)` }}>
        <p style={{ margin:"0 0 4px", fontSize:"12px", color:"rgba(255,255,255,0.6)", fontWeight:600 }}>Thử thách gợi ý</p>
        <p style={{ margin:"0 0 12px", fontSize:"16px", fontWeight:800, color:"#FFFFFF" }}>
          {topic.id === "sleep" ? "7 ngày ngủ đều đặn" : topic.id === "movement" ? "21 ngày vận động mỗi ngày" : "7 ngày thử thách mới"}
        </p>
        <button style={{
          padding:"9px 20px", borderRadius:"12px", background:"#D95C5C", border:"none", cursor:"pointer",
          fontSize:"13px", fontWeight:700, color:"#FFFFFF", fontFamily:"'Nunito', sans-serif",
        }}>Xem thử thách →</button>
      </div>
    </div>
  );
}
