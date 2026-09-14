import { useState } from "react";
import { ARTICLES, EXPERTS } from "../data/exploreData";

interface Props {
  onBack: () => void;
  onNavigateToArticle: (id: string) => void;
}

type Filter = "all" | "article" | "expert";

export default function SearchScreen({ onBack, onNavigateToArticle }: Props) {
  const [query, setQuery]   = useState("giấc ngủ");
  const [filter, setFilter] = useState<Filter>("all");

  const q = query.toLowerCase();
  const matchedArticles = ARTICLES.filter(a =>
    a.title.toLowerCase().includes(q) || a.topicLabel.toLowerCase().includes(q) || a.summary.toLowerCase().includes(q)
  );
  const matchedExperts = EXPERTS.filter(e =>
    e.name.toLowerCase().includes(q) || e.field.toLowerCase().includes(q)
  );

  return (
    <div style={{ minHeight:"100%", background:"#FFF9F3", fontFamily:"'Nunito', sans-serif" }}>
      {/* Header */}
      <div style={{ display:"flex", alignItems:"center", gap:"12px", padding:"16px 20px 12px" }}>
        <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:"4px" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3A3630" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        </button>
        <div style={{ flex:1, display:"flex", alignItems:"center", background:"#FFFFFF", borderRadius:"14px", border:"1.5px solid #E0D8D0", padding:"0 14px", gap:"8px", height:"44px" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9A9088" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{ flex:1, border:"none", background:"none", outline:"none", fontFamily:"'Nunito', sans-serif", fontSize:"14px", color:"#2A2420" }}
            placeholder="Tìm kiếm..."
            autoFocus
          />
          {query && <button onClick={() => setQuery("")} style={{ background:"none", border:"none", cursor:"pointer", color:"#9A9088", fontSize:"20px", lineHeight:1 }}>×</button>}
        </div>
      </div>

      {/* Filters */}
      <div style={{ display:"flex", gap:"8px", padding:"0 20px 16px" }}>
        {([["all","Tất cả"],["article","Bài viết"],["expert","Chuyên gia"]] as [Filter,string][]).map(([f,l]) => (
          <button key={f} onClick={() => setFilter(f)} style={{
            padding:"6px 16px", borderRadius:"20px", border:"none", cursor:"pointer",
            background: filter===f ? "#D95C5C" : "#FFFFFF",
            color: filter===f ? "#FFFFFF" : "#6A6060",
            fontSize:"13px", fontWeight:700, boxShadow:"0 1px 4px rgba(0,0,0,0.07)",
            fontFamily:"'Nunito', sans-serif",
          }}>{l}</button>
        ))}
      </div>

      <div style={{ padding:"0 20px" }}>
        {query.length > 0 && (
          <p style={{ margin:"0 0 14px", fontSize:"13px", color:"#9A9088" }}>
            Kết quả cho <span style={{ color:"#2A2420", fontWeight:700 }}>"{query}"</span>
          </p>
        )}

        {/* Articles */}
        {filter !== "expert" && matchedArticles.map(a => (
          <button key={a.id} onClick={() => onNavigateToArticle(a.id)} style={{
            display:"flex", alignItems:"flex-start", gap:"12px", width:"100%", textAlign:"left",
            padding:"13px 14px", borderRadius:"14px", background:"#FFFFFF",
            boxShadow:"0 1px 5px rgba(0,0,0,0.06)", marginBottom:"9px", border:"none", cursor:"pointer",
          }}>
            <div style={{ width:"44px", height:"44px", borderRadius:"12px", background:a.topicBg, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"20px" }}>{a.topicIcon}</div>
            <div style={{ flex:1, minWidth:0 }}>
              <p style={{ margin:"0 0 4px", fontSize:"14px", fontWeight:700, color:"#2A2420", lineHeight:1.35 }}>{a.title}</p>
              <p style={{ margin:0, fontSize:"11px", color:"#9A9088" }}>
                <span style={{ color:a.topicAccent, fontWeight:700 }}>{a.topicLabel}</span> · {a.readingMins} phút đọc
              </p>
            </div>
          </button>
        ))}

        {/* Experts */}
        {filter !== "article" && matchedExperts.length > 0 && (
          <>
            {filter === "all" && <p style={{ margin:"16px 0 10px", fontSize:"14px", fontWeight:800, color:"#2A2420" }}>Chuyên gia</p>}
            {matchedExperts.map(e => (
              <div key={e.id} style={{ display:"flex", alignItems:"center", gap:"12px", padding:"14px 16px", borderRadius:"16px", background:"#FFFFFF", boxShadow:"0 1px 6px rgba(0,0,0,0.06)", marginBottom:"10px" }}>
                <div style={{ width:"46px", height:"46px", borderRadius:"50%", background:e.bg, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"20px" }}>{e.avatar}</div>
                <div style={{ flex:1 }}>
                  <p style={{ margin:0, fontSize:"14px", fontWeight:700, color:"#2A2420" }}>{e.name}</p>
                  <p style={{ margin:"2px 0 0", fontSize:"12px", color:"#9A9088" }}>{e.field}</p>
                </div>
                <button style={{ padding:"7px 14px", borderRadius:"12px", background:"#F0EAE4", border:"none", cursor:"pointer", fontSize:"12px", fontWeight:700, color:"#6A5A50", fontFamily:"'Nunito', sans-serif" }}>Xem hồ sơ</button>
              </div>
            ))}
          </>
        )}

        {/* Empty state */}
        {query.length > 0 && matchedArticles.length === 0 && matchedExperts.length === 0 && (
          <div style={{ textAlign:"center", padding:"40px 0", color:"#9A9088" }}>
            <span style={{ fontSize:"32px" }}>🔍</span>
            <p style={{ fontSize:"14px", marginTop:"8px" }}>Không tìm thấy kết quả cho "{query}"</p>
          </div>
        )}
      </div>
    </div>
  );
}
