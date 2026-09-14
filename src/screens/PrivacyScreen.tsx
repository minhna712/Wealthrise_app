import { useState } from "react";

interface Props { onBack: () => void; }

const SETTINGS = [
  { key:"publicProfile", label:"Hồ sơ công khai", desc:"Ai cũng có thể xem trang cá nhân" },
  { key:"showActivity",  label:"Hiển thị hoạt động", desc:"Mọi người thấy bạn đang hoạt động" },
  { key:"groupInvite",   label:"Cho phép lời mời nhóm", desc:"Nhận lời mời từ bất kỳ ai" },
  { key:"directMessage", label:"Nhận tin nhắn trực tiếp", desc:"Ai cũng có thể gửi tin nhắn" },
];

export default function PrivacyScreen({ onBack }: Props) {
  const [vals, setVals] = useState<Record<string,boolean>>({ publicProfile:true, showActivity:false, groupInvite:true, directMessage:false });

  const toggle = (k: string) => setVals(p => ({ ...p, [k]: !p[k] }));

  return (
    <div style={{ minHeight:"100%", background:"#FFF9F3", fontFamily:"'Nunito', sans-serif" }}>
      <div style={{ display:"flex", alignItems:"center", gap:"12px", padding:"16px 20px 12px" }}>
        <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:"4px" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3A3630" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        </button>
        <h1 style={{ margin:0, fontSize:"20px", fontWeight:800, color:"#2A2420" }}>Quyền riêng tư</h1>
      </div>

      <div style={{ margin:"8px 20px 24px", background:"#FFFFFF", borderRadius:"20px", boxShadow:"0 1px 8px rgba(0,0,0,0.07)", overflow:"hidden" }}>
        {SETTINGS.map((s, i) => (
          <div key={s.key} style={{ display:"flex", alignItems:"center", gap:"14px", padding:"16px", borderBottom: i<SETTINGS.length-1?"1px solid #F0EAE4":"none" }}>
            <div style={{ flex:1 }}>
              <p style={{ margin:0, fontSize:"14px", fontWeight:700, color:"#2A2420" }}>{s.label}</p>
              <p style={{ margin:"2px 0 0", fontSize:"12px", color:"#9A9088" }}>{s.desc}</p>
            </div>
            <Toggle on={vals[s.key]} onToggle={()=>toggle(s.key)}/>
          </div>
        ))}
      </div>
    </div>
  );
}

function Toggle({ on, onToggle }: { on:boolean; onToggle:()=>void }) {
  return (
    <button onClick={onToggle} style={{
      width:"48px", height:"28px", borderRadius:"14px", border:"none", cursor:"pointer",
      background: on ? "#D95C5C" : "#D0C8C0", position:"relative", flexShrink:0, transition:"background 0.2s",
    }}>
      <div style={{
        position:"absolute", top:"3px", left: on?"23px":"3px", width:"22px", height:"22px",
        borderRadius:"50%", background:"#FFFFFF", transition:"left 0.2s", boxShadow:"0 1px 4px rgba(0,0,0,0.2)",
      }}/>
    </button>
  );
}
