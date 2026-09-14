import { useState } from "react";

interface Props {
  onBack: () => void;
  onGroupDetail: (id: string) => void;
}

const ALL_GROUPS = [
  { id:"g1", name:"Sống năng động mỗi ngày", desc:"Cùng duy trì thói quen vận động", members:24, color:"#EDF5EF", accent:"#7B987E", joined:true  },
  { id:"g2", name:"Ngủ tốt hơn cùng nhau",   desc:"Hỗ trợ nhau xây dựng giờ ngủ đều", members:18, color:"#F2EDF8", accent:"#A896CC", joined:true  },
  { id:"g3", name:"Ăn uống lành mạnh",        desc:"Chia sẻ bữa ăn & công thức",      members:41, color:"#FFF3E0", accent:"#E08830", joined:false },
  { id:"g4", name:"Thiền & Thở chánh niệm",   desc:"Cùng tập thiền mỗi sáng",         members:33, color:"#FFF2EC", accent:"#F28C64", joined:false },
  { id:"g5", name:"Phát triển bản thân",       desc:"Sách, podcast & thói quen tốt",   members:57, color:"#FBEDEE", accent:"#D95C5C", joined:false },
  { id:"g6", name:"Chạy bộ mỗi sáng",         desc:"Cùng khởi động ngày mới",         members:29, color:"#FFF8E0", accent:"#C09820", joined:false },
];

const EMOJIS: Record<string, string> = { g1:"✨", g2:"🌙", g3:"🥗", g4:"🧘", g5:"📚", g6:"🏃" };

export default function AllGroupsScreen({ onBack, onGroupDetail }: Props) {
  const [query, setQuery] = useState("");
  const [joinedIds, setJoinedIds] = useState<Set<string>>(new Set(ALL_GROUPS.filter(g=>g.joined).map(g=>g.id)));

  const filtered = ALL_GROUPS.filter(g =>
    g.name.toLowerCase().includes(query.toLowerCase()) ||
    g.desc.toLowerCase().includes(query.toLowerCase())
  );

  const myGroups = filtered.filter(g => joinedIds.has(g.id));
  const suggested = filtered.filter(g => !joinedIds.has(g.id));

  const toggle = (id: string) => {
    setJoinedIds(prev => {
      const n = new Set(prev);
      if (n.has(id)) n.delete(id); else n.add(id);
      return n;
    });
  };

  return (
    <div style={{ minHeight:"100%", background:"#FFF9F3", fontFamily:"'Nunito', sans-serif" }}>
      {/* Header */}
      <div style={{ display:"flex", alignItems:"center", gap:"12px", padding:"16px 20px 12px" }}>
        <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:"4px" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3A3630" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        </button>
        <h1 style={{ margin:0, fontSize:"20px", fontWeight:800, color:"#2A2420" }}>Tất cả nhóm</h1>
      </div>

      {/* Search */}
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
              <GroupCard key={g.id} g={g} joined={true} emoji={EMOJIS[g.id]} onEnter={() => onGroupDetail(g.id)} onToggle={()=>toggle(g.id)}/>
            ))}
          </>
        )}
        {suggested.length > 0 && (
          <>
            <p style={{ margin:"16px 0 10px", fontSize:"13px", fontWeight:700, color:"#9A9088", textTransform:"uppercase", letterSpacing:"0.5px" }}>Gợi ý cho bạn</p>
            {suggested.map(g => (
              <GroupCard key={g.id} g={g} joined={false} emoji={EMOJIS[g.id]} onEnter={() => onGroupDetail(g.id)} onToggle={()=>toggle(g.id)}/>
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

function GroupCard({ g, joined, emoji, onEnter, onToggle }: {
  g: typeof ALL_GROUPS[0]; joined: boolean; emoji: string;
  onEnter: () => void; onToggle: () => void;
}) {
  return (
    <div style={{ padding:"14px 16px", background:"#FFFFFF", borderRadius:"18px", boxShadow:"0 1px 8px rgba(0,0,0,0.07)", marginBottom:"10px" }}>
      <div style={{ display:"flex", alignItems:"flex-start", gap:"12px", marginBottom:"12px" }}>
        <div style={{ width:"48px", height:"48px", borderRadius:"14px", background:g.color, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"22px" }}>{emoji}</div>
        <div style={{ flex:1 }}>
          <p style={{ margin:0, fontSize:"15px", fontWeight:700, color:"#2A2420" }}>{g.name}</p>
          <p style={{ margin:"2px 0 4px", fontSize:"12px", color:"#9A9088" }}>{g.desc}</p>
          <span style={{ fontSize:"11px", color:"#9A9088" }}>👥 {g.members} thành viên</span>
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
