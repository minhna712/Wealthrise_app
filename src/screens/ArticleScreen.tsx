import { useState } from "react";
import { ARTICLES, getRelatedArticles } from "../data/exploreData";
import ShareSheet from "../components/ShareSheet";

interface Props {
  articleId: string;
  onBack: () => void;
  onNavigateToEvidence: (claimId: string) => void;
  onNavigateToArticle:  (id: string) => void;
  onNavigateToChallenge: () => void;
  onNavigate?: (s: string) => void;
}

export default function ArticleScreen({ articleId, onBack, onNavigateToEvidence, onNavigateToArticle, onNavigateToChallenge }: Props) {
  const [saved, setSaved] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const article = ARTICLES.find(a => a.id === articleId) ?? ARTICLES[0];
  const related = getRelatedArticles(article.id);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <div style={{ minHeight:"100%", background:"#FFF8F4", fontFamily:"'Nunito', sans-serif", position:"relative" }}>
      {/* Top nav */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"14px 20px 12px" }}>
        <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:"4px" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5F6368" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        </button>
        <div style={{ display:"flex", gap:"10px" }}>
          <button onClick={() => setSaved(!saved)} style={{ background:"none", border:"none", cursor:"pointer", padding:"4px" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill={saved?"#D95C5C":"none"} stroke={saved?"#D95C5C":"#5F6368"} strokeWidth="2" strokeLinecap="round"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>
          </button>
          <button onClick={() => setShowShare(true)} style={{ background:"none", border:"none", cursor:"pointer", padding:"4px" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5F6368" strokeWidth="2" strokeLinecap="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
          </button>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div style={{ position:"fixed", bottom:"84px", left:"50%", transform:"translateX(-50%)", background:"#2A2420", color:"#FFF", fontSize:"13px", fontWeight:600, padding:"10px 20px", borderRadius:"24px", zIndex:200, whiteSpace:"nowrap", boxShadow:"0 4px 16px rgba(0,0,0,0.2)" }}>
          {toast}
        </div>
      )}

      {/* Share sheet */}
      {showShare && (
        <ShareSheet onClose={() => setShowShare(false)} onToast={(msg) => { showToast(msg); setShowShare(false); }}/>
      )}

      <div style={{ padding:"0 20px" }}>
        {/* Topic + meta */}
        <div style={{ marginBottom:"12px" }}>
          <span style={{ fontSize:"11px", fontWeight:700, color:article.topicAccent, background:article.topicBg, padding:"4px 12px", borderRadius:"20px", display:"inline-block", marginBottom:"10px" }}>
            {article.topicIcon} {article.topicLabel}
          </span>
          <h1 style={{ margin:"0 0 8px", fontSize:"21px", fontWeight:900, color:"#2A2420", lineHeight:1.35 }}>{article.title}</h1>
          <p style={{ margin:"0 0 12px", fontSize:"14px", color:"#7A6A60", lineHeight:1.6 }}>{article.summary}</p>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", flexWrap:"wrap" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"5px" }}>
              <div style={{ width:"26px", height:"26px", borderRadius:"50%", background:article.topicBg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"13px" }}>👤</div>
              <span style={{ fontSize:"12px", fontWeight:600, color:"#2A2420" }}>{article.author}</span>
            </div>
            <span style={{ fontSize:"11px", color:"#B0A8A0" }}>Rà soát: {article.reviewedDate}</span>
            <span style={{ fontSize:"11px", color:"#B0A8A0" }}>📖 {article.readingMins} phút</span>
          </div>
        </div>

        {/* Cover */}
        <div style={{
          height:"180px", borderRadius:"18px", marginBottom:"20px",
          background: article.coverGradient,
          display:"flex", alignItems:"center", justifyContent:"center",
          overflow:"hidden",
        }}>
          <span style={{ fontSize:"64px", opacity:0.6 }}>{article.topicIcon}</span>
        </div>

        {/* Body */}
        {article.body.map((para, i) => (
          <p key={i} style={{ margin:"0 0 14px", fontSize:"14px", color:"#3A3630", lineHeight:1.75 }}>{para}</p>
        ))}

        {/* Evidence claim cards — WealthRISE brand */}
        {article.claims.map(claim => (
          <button key={claim.id} onClick={() => onNavigateToEvidence(claim.id)} style={{
            width:"100%", textAlign:"left", padding:"14px 16px",
            background:"rgba(244,167,162,0.10)", borderRadius:"16px",
            border:"1.5px solid rgba(242,140,100,0.28)",
            marginBottom:"14px", cursor:"pointer",
          }}>
            <div style={{ display:"flex", alignItems:"center", gap:"6px", marginBottom:"8px" }}>
              <div style={{ width:"18px", height:"18px", borderRadius:"50%", background:"#7B987E", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <span style={{ fontSize:"11px", fontWeight:700, color:"#7B987E", textTransform:"uppercase", letterSpacing:"0.4px", fontFamily:"'Nunito', sans-serif" }}>Có căn cứ · Bằng chứng: {claim.evidenceLabel}</span>
            </div>
            <p style={{ margin:"0 0 10px", fontSize:"13px", color:"#2A2420", lineHeight:1.6, fontStyle:"italic", fontFamily:"'Nunito', sans-serif" }}>"{claim.text}"</p>
            <div style={{ display:"flex", alignItems:"center", gap:"5px" }}>
              <span style={{ fontSize:"13px", fontWeight:700, color:"#F28C64", fontFamily:"'Nunito', sans-serif" }}>Xem mức độ bằng chứng →</span>
            </div>
          </button>
        ))}

        {/* Related articles */}
        {related.length > 0 && (
          <>
            <h2 style={{ margin:"24px 0 12px", fontSize:"16px", fontWeight:800, color:"#2A2420" }}>Có thể bạn cũng quan tâm</h2>
            {related.map(r => (
              <button key={r.id} onClick={() => onNavigateToArticle(r.id)} style={{
                display:"flex", alignItems:"flex-start", gap:"12px", width:"100%", textAlign:"left",
                padding:"13px 14px", borderRadius:"14px", background:"#FFFFFF",
                boxShadow:"0 1px 5px rgba(0,0,0,0.06)", marginBottom:"9px", border:"none", cursor:"pointer",
              }}>
                <div style={{ width:"44px", height:"44px", borderRadius:"12px", background:r.topicBg, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"22px" }}>{r.topicIcon}</div>
                <div style={{ flex:1, minWidth:0 }}>
                  <p style={{ margin:"0 0 3px", fontSize:"13px", fontWeight:700, color:"#2A2420", lineHeight:1.4 }}>{r.title}</p>
                  <p style={{ margin:0, fontSize:"11px", color:"#9A9088" }}>{r.topicLabel} · {r.readingMins} phút</p>
                </div>
              </button>
            ))}
          </>
        )}

        {/* Challenge CTA */}
        <div style={{ marginTop:"24px", marginBottom:"32px", padding:"18px", borderRadius:"20px", background:"linear-gradient(130deg,#3A2E28,#5A4030)" }}>
          <p style={{ margin:"0 0 4px", fontSize:"10px", fontWeight:700, color:"rgba(255,255,255,0.5)", textTransform:"uppercase", letterSpacing:"0.8px" }}>Biến kiến thức thành hành động</p>
          <div style={{ display:"flex", alignItems:"flex-start", gap:"10px", margin:"10px 0 14px" }}>
            <span style={{ fontSize:"28px" }}>{article.relatedChallenge.icon}</span>
            <div>
              <p style={{ margin:0, fontSize:"16px", fontWeight:800, color:"#FFFFFF", lineHeight:1.35 }}>{article.relatedChallenge.title}</p>
              <p style={{ margin:"4px 0 0", fontSize:"12px", color:"rgba(255,255,255,0.6)" }}>Áp dụng từng bước nhỏ từ những gì bạn vừa đọc.</p>
              <p style={{ margin:"4px 0 0", fontSize:"11px", color:"rgba(255,255,255,0.5)" }}>{article.relatedChallenge.duration} · {article.relatedChallenge.effort}</p>
            </div>
          </div>
          <button onClick={onNavigateToChallenge} style={{
            padding:"11px 22px", borderRadius:"13px", background:"#F28C64", border:"none", cursor:"pointer",
            fontSize:"13px", fontWeight:700, color:"#FFFFFF", fontFamily:"'Nunito', sans-serif",
            boxShadow:"0 3px 10px rgba(242,140,100,0.35)",
          }}>Xem thử thách →</button>
        </div>
      </div>
    </div>
  );
}
