import type { Screen } from "../App";
import { GROUPS } from "../data/groupData";

interface Props {
  onNavigate: (s: Screen) => void;
  onGroupDetail: (groupId: string) => void;
}

function GroupCard({ g, onGroupDetail }: { g: typeof GROUPS[0]; onGroupDetail: (id: string) => void }) {
  return (
    <div style={{ padding:"14px 16px", background:"#FFFFFF", borderRadius:"18px", boxShadow:"0 1px 8px rgba(0,0,0,0.07)", marginBottom:"10px" }}>
      <div style={{ display:"flex", alignItems:"flex-start", gap:"12px" }}>
        <div style={{ width:"48px", height:"48px", borderRadius:"14px", background:g.color, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"22px" }}>
          {g.icon}
        </div>
        <div style={{ flex:1 }}>
          <p style={{ margin:0, fontSize:"15px", fontWeight:700, color:"#2A2420" }}>{g.name}</p>
          <p style={{ margin:"2px 0 6px", fontSize:"12px", color:"#9A9088" }}>{g.description}</p>
          <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
            <span style={{ fontSize:"11px", color:"#9A9088" }}>👥 {g.memberCount} thành viên</span>
            <div style={{ width:"3px", height:"3px", borderRadius:"50%", background:"#C0B8B0" }}/>
            <span style={{ fontSize:"11px", color:g.accent, fontWeight:700 }}>{g.activity}</span>
          </div>
        </div>
      </div>
      <div style={{ marginTop:"12px" }}>
        <button
          onClick={() => onGroupDetail(g.id)}
          style={{
            width:"100%", height:"40px", borderRadius:"12px", border:"none", cursor:"pointer",
            background: g.joined ? g.color : "#F0EAE4",
            color: g.joined ? g.accent : "#6A5A50",
            fontSize:"13px", fontWeight:700, fontFamily:"'Nunito', sans-serif",
          }}
        >
          {g.joined ? "Vào nhóm" : "Khám phá nhóm"}
        </button>
      </div>
    </div>
  );
}

export default function GroupScreen({ onGroupDetail }: Props) {
  const myGroups = GROUPS.filter(g => g.joined);
  const discover = GROUPS.filter(g => !g.joined);

  return (
    <div style={{ minHeight:"100%", background:"#FFF9F3", fontFamily:"'Nunito', sans-serif" }}>
      {/* Header */}
      <div style={{ padding:"16px 20px 12px" }}>
        <h1 style={{ margin:0, fontSize:"24px", fontWeight:900, color:"#2A2420" }}>Nhóm</h1>
        <p style={{ margin:"4px 0 0", fontSize:"13px", color:"#9A9088" }}>Cùng nhau dễ hơn. Vui hơn.</p>
      </div>

      <div style={{ padding:"0 20px" }}>
        {/* My groups */}
        <p style={{ margin:"0 0 12px", fontSize:"16px", fontWeight:800, color:"#2A2420" }}>Nhóm của bạn</p>
        {myGroups.map(g => <GroupCard key={g.id} g={g} onGroupDetail={onGroupDetail}/>)}

        {/* Discover */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", margin:"20px 0 12px" }}>
          <p style={{ margin:0, fontSize:"16px", fontWeight:800, color:"#2A2420" }}>Khám phá nhóm</p>
        </div>
        {discover.map(g => <GroupCard key={g.id} g={g} onGroupDetail={onGroupDetail}/>)}
      </div>
    </div>
  );
}
