import { useUserState } from "../state/UserStateContext";
import type { Screen } from "../App";

interface Props {
  onNavigate: (s: Screen) => void;
}

export default function ProfileScreen({ onNavigate }: Props) {
  const { userState } = useUserState();
  const savedCount = userState.savedPostIds.length;
  const completedCount = userState.challengeProgress.filter(p => p.status === "completed").length;

  const MENU: { icon:string; label:string; desc:string; screen:Screen }[] = [
    { icon:"🔖", label:"Bài đã lưu",        desc:`${savedCount} bài viết`,       screen:"saved-posts"       },
    { icon:"🏆", label:"Lịch sử thử thách", desc:`${completedCount} đã hoàn thành`, screen:"challenge-history" },
    { icon:"🔒", label:"Quyền riêng tư",    desc:"",                             screen:"privacy"           },
    { icon:"⚙️", label:"Cài đặt",           desc:"",                             screen:"settings"          },
  ];

  return (
    <div style={{ minHeight:"100%", background:"#FFF9F3", fontFamily:"'Nunito', sans-serif" }}>
      <div style={{ padding:"32px 20px 24px", textAlign:"center" }}>
        <div style={{ position:"relative", display:"inline-block", marginBottom:"14px" }}>
          <div style={{ width:"84px", height:"84px", borderRadius:"50%", background:"linear-gradient(135deg,#F28C64,#F4A7A2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"38px", margin:"0 auto" }}>🙋</div>
          <button style={{ position:"absolute", bottom:"0", right:"0", width:"26px", height:"26px", borderRadius:"50%", background:"#FFFFFF", border:"2px solid #F0EAE4", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6A6060" strokeWidth="2.5" strokeLinecap="round"><path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
          </button>
        </div>
        <h1 style={{ margin:"0 0 14px", fontSize:"22px", fontWeight:900, color:"#2A2420" }}>Minh</h1>
        <button style={{ padding:"9px 24px", borderRadius:"12px", background:"#FFFFFF", border:"1.5px solid #E0D8D0", cursor:"pointer", fontSize:"13px", fontWeight:600, color:"#6A6060", fontFamily:"'Nunito', sans-serif" }}>
          Chỉnh sửa hồ sơ
        </button>
      </div>

      <div style={{ margin:"0 20px 24px", background:"#FFFFFF", borderRadius:"20px", boxShadow:"0 1px 8px rgba(0,0,0,0.07)", overflow:"hidden" }}>
        {MENU.map((m, i) => (
          <button key={m.label} onClick={() => onNavigate(m.screen)} style={{
            display:"flex", alignItems:"center", gap:"14px", width:"100%", textAlign:"left",
            padding:"16px", background:"none", border:"none", cursor:"pointer",
            borderBottom:i < MENU.length - 1 ? "1px solid #F0EAE4" : "none",
          }}>
            <div style={{ width:"40px", height:"40px", borderRadius:"13px", background:"#F8F5F0", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"20px" }}>{m.icon}</div>
            <div style={{ flex:1 }}>
              <p style={{ margin:0, fontSize:"15px", fontWeight:700, color:"#2A2420" }}>{m.label}</p>
              {m.desc && <p style={{ margin:"2px 0 0", fontSize:"12px", color:"#9A9088" }}>{m.desc}</p>}
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0B8B0" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        ))}
      </div>
    </div>
  );
}
