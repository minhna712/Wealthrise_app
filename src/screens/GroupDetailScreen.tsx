import { useState } from "react";
import { GROUPS, type Group, type GroupPost } from "../data/groupData";
import type { PostData } from "./PostDetailScreen";

interface Props {
  groupId: string;
  onBack: () => void;
  onPostDetail?: (post: PostData) => void;
  onChallengeDetail?: (id: string) => void;
}

type PostStatus = GroupPost["status"];

function StatusPill({ status }: { status: PostStatus }) {
  if (status === "approved") return null;
  const s = status === "pending"
    ? { label:"Đang chờ duyệt", bg:"#FFF8E0", color:"#B08020" }
    : { label:"Chưa được duyệt", bg:"#FDE8E8", color:"#C04040" };
  return (
    <div style={{ display:"inline-flex", alignItems:"center", gap:"4px", padding:"3px 10px", borderRadius:"10px", background:s.bg, marginBottom:"6px" }}>
      <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:s.color }}/>
      <span style={{ fontSize:"11px", fontWeight:700, color:s.color }}>{s.label}</span>
    </div>
  );
}

function PostCard({ p, groupName, onOpen }: { p: GroupPost; groupName: string; onOpen: (p: GroupPost) => void }) {
  const [liked, setLiked] = useState(false);
  const blur = p.mine && p.status === "rejected";
  return (
    <div
      onClick={() => p.status === "approved" && onOpen(p)}
      style={{ padding:"14px 16px", background:"#FFFFFF", borderRadius:"16px", border:"1px solid #F0EAE4", marginBottom:"10px", opacity:blur?0.6:1, cursor:p.status==="approved"?"pointer":"default" }}
    >
      <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"10px" }}>
        <div style={{ width:"38px", height:"38px", borderRadius:"50%", background:"#F0EAE4", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"20px" }}>{p.avatar}</div>
        <div style={{ flex:1 }}>
          <p style={{ margin:0, fontSize:"13px", fontWeight:700, color:"#2A2420" }}>{p.mine && p.status !== "approved" ? "Bạn" : p.author}</p>
          <p style={{ margin:0, fontSize:"11px", color:"#9A9088" }}>{p.time}</p>
        </div>
      </div>
      {p.mine && <StatusPill status={p.status}/>}
      <p style={{ margin:"0 0 12px", fontSize:"14px", color:"#3A3630", lineHeight:1.6 }}>{p.text}</p>

      {/* Only Like */}
      <div onClick={e => e.stopPropagation()} style={{ borderTop:"1px solid #F0EAE4", paddingTop:"10px" }}>
        <button
          onClick={() => setLiked(v => !v)}
          style={{ display:"flex", alignItems:"center", gap:"6px", background:"none", border:"none", cursor:"pointer", padding:"2px 0" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={liked?"#D95C5C":"none"} stroke={liked?"#D95C5C":"#9A9088"} strokeWidth="2" strokeLinecap="round">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
          <span style={{ fontSize:"13px", fontWeight:600, color:liked?"#D95C5C":"#9A9088", fontFamily:"'Nunito', sans-serif" }}>
            {p.likes + (liked ? 1 : 0)}
          </span>
        </button>
      </div>
    </div>
  );
}

export default function GroupDetailScreen({ groupId, onBack, onPostDetail, onChallengeDetail }: Props) {
  const group: Group = GROUPS.find(g => g.id === groupId) ?? GROUPS[0];
  const [tab, setTab] = useState<"feed"|"members"|"challenge">("feed");

  const handleOpen = (p: GroupPost) => {
    onPostDetail?.({ id:p.id, author:p.author, avatar:p.avatar, time:p.time, text:p.text, likes:p.likes, groupName:group.name, isMine:p.mine });
  };

  return (
    <div style={{ minHeight:"100%", background:"#FFF8F4", fontFamily:"'Nunito', sans-serif" }}>
      {/* Header */}
      <div style={{ display:"flex", alignItems:"center", gap:"12px", padding:"16px 20px 12px" }}>
        <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:"4px" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5F6368" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        </button>
        <div style={{ flex:1 }}>
          <h1 style={{ margin:0, fontSize:"18px", fontWeight:800, color:"#2A2420" }}>{group.name}</h1>
          <p style={{ margin:0, fontSize:"12px", color:"#9A9088" }}>👥 {group.memberCount} thành viên · {group.activity}</p>
        </div>
      </div>

      {/* Info card */}
      <div style={{ margin:"0 20px 14px", padding:"14px 16px", background:`rgba(${group.accent.length>6?'123,152,126':'123,152,126'},0.10)`, borderRadius:"16px", border:`1px solid ${group.color}` }}>
        <p style={{ margin:"0 0 6px", fontSize:"13px", fontWeight:700, color:group.accent }}>Về nhóm này</p>
        <p style={{ margin:"0 0 8px", fontSize:"13px", color:"#3A3630", lineHeight:1.5 }}>{group.description}</p>
        <div style={{ display:"flex", gap:"6px", flexWrap:"wrap" }}>
          {group.rules.map(r => (
            <span key={r} style={{ fontSize:"11px", padding:"3px 10px", background:"rgba(0,0,0,0.06)", borderRadius:"10px", color:group.accent, fontWeight:600 }}>{r}</span>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display:"flex", borderBottom:"2px solid #F0EAE4", margin:"0 20px" }}>
        {([["feed","Bài viết"],["members","Thành viên"],["challenge","Thử thách"]] as const).map(([t,l]) => (
          <button key={t} onClick={() => setTab(t)} style={{ flex:1, height:"40px", background:"none", border:"none", cursor:"pointer", fontFamily:"'Nunito', sans-serif", fontSize:"13px", fontWeight:tab===t?700:500, color:tab===t?"#F28C64":"#9A9088", borderBottom:tab===t?"2px solid #F28C64":"2px solid transparent", marginBottom:"-2px" }}>{l}</button>
        ))}
      </div>

      <div style={{ padding:"14px 20px" }}>
        {tab === "feed" && (
          <>
            <div style={{ padding:"12px 14px", background:"#FFFFFF", borderRadius:"14px", border:"1px solid #F0EAE4", marginBottom:"12px", display:"flex", alignItems:"center", gap:"10px" }}>
              <div style={{ width:"36px", height:"36px", borderRadius:"50%", background:"#F0EAE4", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"18px" }}>🙋</div>
              <span style={{ fontSize:"13px", color:"#9A9088" }}>Chia sẻ điều gì đó với nhóm...</span>
            </div>
            {group.posts.filter(p => p.status === "approved").map(p => <PostCard key={p.id} p={p} groupName={group.name} onOpen={handleOpen}/>)}
          </>
        )}
        {tab === "members" && (
          <div style={{ textAlign:"center", padding:"40px 0", color:"#9A9088" }}>
            <span style={{ fontSize:"32px" }}>👥</span>
            <p style={{ fontSize:"14px", marginTop:"8px" }}>{group.memberCount} thành viên</p>
          </div>
        )}
        {tab === "challenge" && group.challengeIds.length > 0 && (
          <div style={{ padding:"18px", background:"linear-gradient(120deg,#2A2420,#3A3A5A)", borderRadius:"18px" }}>
            <p style={{ margin:"0 0 4px", fontSize:"12px", color:"rgba(255,255,255,0.6)" }}>Thử thách nhóm</p>
            <p style={{ margin:"0 0 14px", fontSize:"17px", fontWeight:800, color:"#FFFFFF" }}>Thử thách đang diễn ra</p>
            <button onClick={() => onChallengeDetail?.(group.challengeIds[0])} style={{ width:"100%", height:"44px", borderRadius:"14px", background:"#F28C64", border:"none", cursor:"pointer", fontSize:"14px", fontWeight:700, color:"#FFFFFF", fontFamily:"'Nunito', sans-serif" }}>Xem thử thách</button>
          </div>
        )}
        {tab === "challenge" && group.challengeIds.length === 0 && (
          <div style={{ textAlign:"center", padding:"40px 0", color:"#9A9088" }}>
            <span style={{ fontSize:"32px" }}>🏆</span>
            <p style={{ fontSize:"14px", marginTop:"8px" }}>Chưa có thử thách nào</p>
          </div>
        )}
      </div>
    </div>
  );
}
