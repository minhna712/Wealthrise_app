import { useState } from "react";
import { GROUPS } from "../data/groupData";
import ShareSheet from "../components/ShareSheet";
import { useUserState } from "../state/UserStateContext";

interface Props {
  onBack: () => void;
}

export default function SavedPostsScreen({ onBack }: Props) {
  const { userState, unsavePost, likePost, unlikePost } = useUserState();
  const { savedPostIds, likedPostIds } = userState;
  const [shareId, setShareId] = useState<number|null>(null);
  const [toast, setToast] = useState("");
  const showToast = (msg: string) => { setToast(msg); setTimeout(() => setToast(""), 2200); };

  const allPosts = GROUPS.flatMap(g => g.posts);
  const savedPosts = allPosts.filter(p => savedPostIds.includes(p.id));

  return (
    <div style={{ minHeight:"100%", background:"#FFF9F3", fontFamily:"'Nunito', sans-serif" }}>
      <div style={{ display:"flex", alignItems:"center", gap:"12px", padding:"16px 20px 12px" }}>
        <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:"4px" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3A3630" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        </button>
        <h1 style={{ margin:0, fontSize:"20px", fontWeight:800, color:"#2A2420" }}>Bài đã lưu</h1>
        <span style={{ marginLeft:"auto", fontSize:"12px", color:"#9A9088" }}>{savedPosts.length} bài</span>
      </div>

      <div style={{ padding:"0 20px 24px" }}>
        {savedPosts.length === 0 && (
          <div style={{ textAlign:"center", padding:"60px 0", color:"#9A9088" }}>
            <span style={{ fontSize:"40px" }}>🔖</span>
            <p style={{ fontSize:"14px", marginTop:"12px" }}>Chưa có bài viết nào được lưu.</p>
          </div>
        )}
        {savedPosts.map(p => {
          const liked = likedPostIds.includes(p.id);
          return (
            <div key={p.id} style={{ padding:"14px 16px", background:"#FFFFFF", borderRadius:"16px", boxShadow:"0 1px 6px rgba(0,0,0,0.06)", marginBottom:"10px" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"10px" }}>
                <div style={{ width:"38px", height:"38px", borderRadius:"50%", background:"#F0EAE4", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"20px" }}>{p.avatar}</div>
                <div style={{ flex:1 }}>
                  <p style={{ margin:0, fontSize:"13px", fontWeight:700, color:"#2A2420" }}>{p.author}</p>
                  <p style={{ margin:0, fontSize:"11px", color:"#9A9088" }}>{p.time}</p>
                </div>
                <button onClick={() => unsavePost(p.id)} style={{ background:"none", border:"none", cursor:"pointer", padding:"4px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#D95C5C" stroke="#D95C5C" strokeWidth="2" strokeLinecap="round"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>
                </button>
              </div>
              <p style={{ margin:"0 0 12px", fontSize:"14px", color:"#3A3630", lineHeight:1.6 }}>{p.text}</p>
              <div style={{ display:"flex", gap:"16px", borderTop:"1px solid #F0EAE4", paddingTop:"10px" }}>
                <button onClick={() => liked ? unlikePost(p.id) : likePost(p.id)} style={{ display:"flex", alignItems:"center", gap:"5px", background:"none", border:"none", cursor:"pointer" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill={liked?"#D95C5C":"none"} stroke={liked?"#D95C5C":"#9A9088"} strokeWidth="2" strokeLinecap="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                  <span style={{ fontSize:"12px", color:liked?"#D95C5C":"#9A9088", fontFamily:"'Nunito', sans-serif", fontWeight:600 }}>{p.likes + (liked ? 1 : 0)}</span>
                </button>
                <button onClick={() => setShareId(p.id)} style={{ display:"flex", alignItems:"center", gap:"5px", background:"none", border:"none", cursor:"pointer" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9A9088" strokeWidth="2" strokeLinecap="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                  <span style={{ fontSize:"12px", color:"#9A9088", fontFamily:"'Nunito', sans-serif", fontWeight:600 }}>Chia sẻ</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {shareId !== null && <ShareSheet onClose={() => setShareId(null)} onToast={showToast}/>}

      {toast && (
        <div style={{ position:"fixed", bottom:"80px", left:"50%", transform:"translateX(-50%)", background:"#2A2420", color:"#FFFFFF", padding:"10px 20px", borderRadius:"14px", fontSize:"13px", fontWeight:700, zIndex:60, whiteSpace:"nowrap", fontFamily:"'Nunito', sans-serif" }}>
          {toast}
        </div>
      )}
    </div>
  );
}
