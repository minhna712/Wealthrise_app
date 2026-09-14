import { useState } from "react";
import { GROUPS } from "../data/groupData";
import { useUserState } from "../state/UserStateContext";

interface Props {
  onBack: () => void;
  onGroupDetail: (id: string) => void;
}

export default function AllGroupsScreen({ onBack, onGroupDetail }: Props) {
  const { userState, joinGroup, leaveGroup } = useUserState();
  const [query, setQuery] = useState("");

  const { joinedGroupIds } = userState;

  const filtered = GROUPS.filter(g =>
    g.name.toLowerCase().includes(query.toLowerCase()) ||
    g.description.toLowerCase().includes(query.toLowerCase())
  );

  const myGroups  = filtered.filter(g => joinedGroupIds.includes(g.id));
  const suggested = filtered.filter(g => !joinedGroupIds.includes(g.id));

  return (
    <div style={{ minHeight:"100%", background:"#FFF9F3", fontFamily:"'Nunito', sans-serif" }}>
      <div style={{ display:"flex", alignItems:"center", gap:"12px", padding:"16px 20px 12px" }}>
        <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:"4px" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3A3630" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        </button>
        <h1 style={{ margin:0, fontSize:"20px", fontWeight:800, color:"#2A2420" }}>Tất cả nhóm</h1>
      </div>

      <div style={{ margin:"0 20px 16px", display:"flex", alignItems:"center", gap:"10px", background:"#FFFFFF", borderRadius:"14px", padding:"0 14px", boxShadow:"0 1px 6px rgba(0,0,0,0.07)" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9A9088" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <input
          value={query} onChange={e=>setQuery(e.target.value)}
          placeholder="Tìm kiếm nhóm..."
          style={{ flex:1, height:"44px", border:"none", background:"transparent", fontSize:"14px", color:"#2A2420", fontFamily:"'Nunito', sans-serif", outline:"none" }}
        />
      </div>

      <div style={{ padding:"0 20px 24px" }}>
        {myGroups.length > 0 && (
          <>
            <p style={{ margin:"0 0 10px", fontSize:"13px", fontWeight:700, color:"#9A9088", textTransform:"uppercase", letterSpacing:"0.5px" }}>Nhóm của bạn</p>
            {myGroups.map(g => (
              <GroupCard key={g.id} g={g} joined={true} onEnter={() => onGroupDetail(g.id)} onToggle={() => leaveGroup(g.id)}/>
            ))}
          </>
        )}
        {suggested.length > 0 && (
          <>
            <p style={{ margin:"16px 0 10px", fontSize:"13px", fontWeight:700, color:"#9A9088", textTransform:"uppercase", letterSpacing:"0.5px" }}>Gợi ý cho bạn</p>
            {suggested.map(g => (
              <GroupCard key={g.id} g={g} joined={false} onEnter={() => onGroupDetail(g.id)} onToggle={() => joinGroup(g.id)}/>
            ))}
          </>
        )}
        {filtered.length === 0 && (
          <div style={{ textAlign:"center", padding:"40px 0", color:"#9A9088" }}>
            <span style={{ fontSize:"36px" }}>🔍</span>
            <p style={{ fontSize:"14px", marginTop:"10px" }}>Không tìm thấy nhóm nào.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function GroupCard({ g, joined, onEnter, onToggle }: {
  g: typeof GROUPS[0]; joined: boolean;
  onEnter: () => void; onToggle: () => void;
}) {
  return (
    <div style={{ padding:"14px 16px", background:"#FFFFFF", borderRadius:"18px", boxShadow:"0 1px 8px rgba(0,0,0,0.07)", marginBottom:"10px" }}>
      <div style={{ display:"flex", alignItems:"flex-start", gap:"12px", marginBottom:"12px" }}>
        <div style={{ width:"48px", height:"48px", borderRadius:"14px", background:g.color, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"22px" }}>{g.icon}</div>
        <div style={{ flex:1 }}>
          <p style={{ margin:0, fontSize:"15px", fontWeight:700, color:"#2A2420" }}>{g.name}</p>
          <p style={{ margin:"2px 0 4px", fontSize:"12px", color:"#9A9088" }}>{g.description}</p>
          <span style={{ fontSize:"11px", color:"#9A9088" }}>👥 {g.memberCount} thành viên</span>
        </div>
        {joined && (
          <div style={{ padding:"4px 10px", borderRadius:"10px", background:g.color }}>
            <span style={{ fontSize:"11px", fontWeight:700, color:g.accent }}>Đã tham gia</span>
          </div>
        )}
      </div>
      <div style={{ display:"flex", gap:"8px" }}>
        {joined ? (
          <>
            <button onClick={onEnter} style={{ flex:2, height:"38px", borderRadius:"12px", background:g.color, border:"none", cursor:"pointer", fontSize:"13px", fontWeight:700, color:g.accent, fontFamily:"'Nunito', sans-serif" }}>Vào nhóm</button>
            <button onClick={onToggle} style={{ flex:1, height:"38px", borderRadius:"12px", background:"#F0EAE4", border:"none", cursor:"pointer", fontSize:"12px", fontWeight:600, color:"#9A7060", fontFamily:"'Nunito', sans-serif" }}>Rời</button>
          </>
        ) : (
          <button onClick={onToggle} style={{ flex:1, height:"38px", borderRadius:"12px", background:g.color, border:`1.5px solid ${g.accent}30`, cursor:"pointer", fontSize:"13px", fontWeight:700, color:g.accent, fontFamily:"'Nunito', sans-serif" }}>Tham gia</button>
        )}
      </div>
    </div>
  );
}
