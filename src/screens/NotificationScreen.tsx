interface Notification {
  id: string;
  icon: string;
  text: string;
  time: string;
  read: boolean;
}

interface Props {
  notifications: Notification[];
  readIds: Set<string>;
  onBack: () => void;
  onMarkAllRead: () => void;
}

export default function NotificationScreen({ notifications, readIds, onBack, onMarkAllRead }: Props) {
  const hasUnread = notifications.some(n => !n.read && !readIds.has(n.id));

  return (
    <div style={{ minHeight:"100%", background:"#FFF8F4", fontFamily:"'Nunito', sans-serif" }}>
      {/* Header */}
      <div style={{ display:"flex", alignItems:"center", gap:"12px", padding:"16px 20px 14px", borderBottom:"1px solid rgba(242,140,100,0.12)" }}>
        <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:"4px" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5F6368" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        </button>
        <h1 style={{ margin:0, flex:1, fontSize:"18px", fontWeight:900, color:"#2A2420" }}>Thông báo</h1>
        {hasUnread && (
          <button onClick={onMarkAllRead} style={{ background:"none", border:"none", cursor:"pointer", padding:"4px 8px" }}>
            <span style={{ fontSize:"12px", fontWeight:700, color:"#F28C64" }}>Đọc tất cả</span>
          </button>
        )}
      </div>

      {/* List */}
      <div style={{ padding:"12px 0" }}>
        {notifications.length === 0 ? (
          <div style={{ padding:"48px 24px", textAlign:"center" }}>
            <p style={{ fontSize:"32px", margin:0 }}>🔔</p>
            <p style={{ margin:"12px 0 0", fontSize:"15px", fontWeight:700, color:"#2A2420" }}>Chưa có thông báo nào</p>
            <p style={{ margin:"6px 0 0", fontSize:"13px", color:"#9A8A7A" }}>Chúng tôi sẽ nhắc bạn khi có điều quan trọng.</p>
          </div>
        ) : (
          notifications.map((n) => {
            const isRead = n.read || readIds.has(n.id);
            return (
              <div
                key={n.id}
                style={{
                  display:"flex", alignItems:"flex-start", gap:"14px",
                  padding:"14px 20px",
                  background: isRead ? "transparent" : "rgba(242,140,100,0.05)",
                  borderBottom:"1px solid rgba(0,0,0,0.04)",
                }}
              >
                {/* Icon */}
                <div style={{
                  width:"40px", height:"40px", borderRadius:"14px", flexShrink:0,
                  background: isRead ? "#F0EAE4" : "rgba(242,140,100,0.12)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontSize:"20px",
                }}>
                  {n.icon}
                </div>

                {/* Body */}
                <div style={{ flex:1, minWidth:0 }}>
                  <p style={{
                    margin:"0 0 4px", fontSize:"14px", lineHeight:1.5,
                    fontWeight: isRead ? 500 : 700,
                    color: isRead ? "#5F6368" : "#2A2420",
                  }}>
                    {n.text}
                  </p>
                  <p style={{ margin:0, fontSize:"11px", color:"#B0A8A0" }}>{n.time}</p>
                </div>

                {/* Unread dot */}
                {!isRead && (
                  <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:"#F28C64", flexShrink:0, marginTop:"6px" }}/>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Footer note */}
      <div style={{ padding:"16px 20px", textAlign:"center" }}>
        <p style={{ margin:0, fontSize:"12px", color:"#C8C0B8" }}>
          Thông báo đẩy thực sẽ có trong phiên bản đầy đủ.
        </p>
      </div>
    </div>
  );
}
