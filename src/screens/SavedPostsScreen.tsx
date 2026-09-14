import { useState } from "react";
import ShareSheet from "../components/ShareSheet";

interface Props {
  onBack: () => void;
}

const SAVED = [
  { id:1, author:"Lan Phương", avatar:"🌸", time:"Hôm qua", text:"5 thói quen buổi sáng giúp tôi thay đổi hoàn toàn. Bắt đầu từ việc nhỏ nhất: uống 1 ly nước ngay khi thức dậy.", likes:24, comments:8 },
  { id:2, author:"Thanh Tuấn", avatar:"🧑", time:"3 ngày trước", text:"Nghiên cứu cho thấy ngủ đúng giờ cải thiện trí nhớ đến 40%. Mình đã áp dụng được 2 tuần và cảm thấy tuyệt vời!", likes:31, comments:12 },
  { id:3, author:"Dr. Hoa",    avatar:"👩‍⚕️", time:"1 tuần trước", text:"Uống đủ nước không chỉ giúp da đẹp mà còn tăng năng suất làm việc lên đến 14% theo một nghiên cứu từ University of East London.", likes:47, comments:19 },
];

export default function SavedPostsScreen({ onBack }: Props) {
  const [saved, setSaved]       = useState<Set<number>>(new Set(SAVED.map(p=>p.id)));
  const [shareId, setShareId]   = useState<number|null>(null);
  const [toast, setToast]       = useState("");
  const showToast = (msg: string) => { setToast(msg); setTimeout(() => setToast(""), 2200); };
  const [likedIds, setLikedIds] = useState<Set<number>>(new Set());

  const unsave = (id: number) => setSaved(prev => { const n=new Set(prev); n.delete(id); return n; });
  const toggleLike = (id: number) => setLikedIds(prev => { const n=new Set(prev); n.has(id)?n.delete(id):n.add(id); return n; });

  const visible = SAVED.filter(p => saved.has(p.id));

  return (
    <div style={{ minHeight:"100%", background:"#FFF9F3", fontFamily:"'Nunito', sans-serif" }}>
      <div style={{ display:"flex", alignItems:"center", gap:"12px", padding:"16px 20px 12px" }}>
        <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:"4px" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3A3630" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        </button>
        <h1 style={{ margin:0, fontSize:"20px", fontWeight:800, color:"#2A2420" }}>Bài đã lưu</h1>
      </div>

      <div style={{ padding:"0 20px 24px" }}>
        {visible.length === 0 && (
          <div style={{ textAlign:"center", padding:"60px 0", color:"#9A9088" }}>
            <span style={{ fontSize:"40px" }}>🔖</span>
            <p style={{ fontSize:"14px", marginTop:"12px" }}>Chưa có bài viết nào được lưu.</p>
          </div>
        )}
        {visible.map(p => {
          const liked = likedIds.has(p.id);
          return (
            <div key={p.id} style={{ padding:"14px 16px", background:"#FFFFFF", borderRadius:"16px", boxShadow:"0 1px 6px rgba(0,0,0,0.06)", marginBottom:"10px" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"10px" }}>
                <div style={{ width:"38px", height:"38px", borderRadius:"50%", background:"#F0EAE4", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"20px" }}>{p.avatar}</div>
                <div style={{ flex:1 }}>
                  <p style={{ margin:0, fontSize:"13px", fontWeight:700, color:"#2A2420" }}>{p.author}</p>
                  <p style={{ margin:0, fontSize:"11px", color:"#9A9088" }}>{p.time}</p>
                </div>
                <button onClick={()=>unsave(p.id)} style={{ background:"none", border:"none", cursor:"pointer", padding:"4px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#D95C5C" stroke="#D95C5C" strokeWidth="2" strokeLinecap="round"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>
                </button>
              </div>
              <p style={{ margin:"0 0 12px", fontSize:"14px", color:"#3A3630", lineHeight:1.6 }}>{p.text}</p>
              <div style={{ display:"flex", gap:"16px", borderTop:"1px solid #F0EAE4", paddingTop:"10px" }}>
                <button onClick={()=>toggleLike(p.id)} style={{ display:"flex", alignItems:"center", gap:"5px", background:"none", border:"none", cursor:"pointer" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill={liked?"#D95C5C":"none"} stroke={liked?"#D95C5C":"#9A9088"} strokeWidth="2" strokeLinecap="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                  <span style={{ fontSize:"12px", color:liked?"#D95C5C":"#9A9088", fontFamily:"'Nunito', sans-serif", fontWeight:600 }}>{p.likes+(liked?1:0)}</span>
                </button>
                <button style={{ display:"flex", alignItems:"center", gap:"5px", background:"none", border:"none", cursor:"pointer" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9A9088" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                  <span style={{ fontSize:"12px", color:"#9A9088", fontFamily:"'Nunito', sans-serif", fontWeight:600 }}>{p.comments}</span>
                </button>
                <button onClick={()=>setShareId(p.id)} style={{ display:"flex", alignItems:"center", gap:"5px", background:"none", border:"none", cursor:"pointer" }}>
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
