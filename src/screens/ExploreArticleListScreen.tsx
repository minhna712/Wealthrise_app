import { ARTICLES, TOPICS, getArticlesByGoals } from "../data/exploreData";

interface Props {
  mode: "popular" | "for-you" | "topic";
  topicId: string;
  userGoals: string[];
  onBack: () => void;
  onNavigateToArticle: (id: string) => void;
}

const MODE_LABELS: Record<string, string> = {
  popular: "Được quan tâm",
  "for-you": "Dành cho bạn",
  topic: "",
};

export default function ExploreArticleListScreen({ mode, topicId, userGoals, onBack, onNavigateToArticle }: Props) {
  let articles = ARTICLES;
  let title = MODE_LABELS[mode] || "Bài viết";

  if (mode === "topic") {
    articles = ARTICLES.filter(a => a.topicId === topicId);
    const topic = TOPICS.find(t => t.id === topicId);
    title = topic ? `${topic.icon} ${topic.label}` : "Chủ đề";
  } else if (mode === "for-you") {
    const forYou = getArticlesByGoals(userGoals);
    const rest   = ARTICLES.filter(a => !a.goalIds.some(g => userGoals.includes(g)));
    articles = [...forYou, ...rest];
  }

  return (
    <div style={{ minHeight:"100%", background:"#FFF9F3", fontFamily:"'Nunito', sans-serif" }}>
      {/* Header */}
      <div style={{ display:"flex", alignItems:"center", gap:"12px", padding:"16px 20px 14px" }}>
        <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:"4px" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3A3630" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        </button>
        <h1 style={{ margin:0, fontSize:"20px", fontWeight:900, color:"#2A2420" }}>{title}</h1>
      </div>

      <div style={{ padding:"0 20px" }}>
        <p style={{ margin:"0 0 16px", fontSize:"12px", color:"#9A9088" }}>{articles.length} bài viết</p>

        {articles.map(a => (
          <button key={a.id} onClick={() => onNavigateToArticle(a.id)} style={{
            display:"flex", alignItems:"flex-start", gap:"12px", width:"100%", textAlign:"left",
            padding:"14px 16px", borderRadius:"16px", background:"#FFFFFF",
            boxShadow:"0 1px 6px rgba(0,0,0,0.06)", marginBottom:"10px", border:"none", cursor:"pointer",
          }}>
            <div style={{ width:"50px", height:"50px", borderRadius:"14px", background:a.topicBg, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"24px" }}>
              {a.topicIcon}
            </div>
            <div style={{ flex:1, minWidth:0 }}>
              <div style={{ display:"flex", alignItems:"center", gap:"6px", marginBottom:"5px", flexWrap:"wrap" }}>
                <span style={{ fontSize:"11px", fontWeight:700, color:a.topicAccent, background:a.topicBg, padding:"2px 8px", borderRadius:"8px" }}>{a.topicLabel}</span>
                <span style={{ fontSize:"11px", color:"#C0B8B0" }}>·</span>
                <span style={{ fontSize:"11px", color:"#9A9088" }}>{a.readingMins} phút</span>
              </div>
              <p style={{ margin:"0 0 4px", fontSize:"14px", fontWeight:700, color:"#2A2420", lineHeight:1.4 }}>{a.title}</p>
              <p style={{ margin:"0 0 6px", fontSize:"12px", color:"#9A9088", lineHeight:1.5 }}>{a.summary}</p>
              <p style={{ margin:0, fontSize:"11px", color:"#B8B0A8" }}>Rà soát: {a.reviewedDate} · {a.author}</p>
            </div>
          </button>
        ))}

        <div style={{ height:"20px" }}/>
      </div>
    </div>
  );
}
