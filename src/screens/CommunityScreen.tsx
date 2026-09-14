import { useState } from "react";
import type { Screen } from "../App";

interface Props {
  onNavigate: (s: Screen) => void;
}

const POSTS = [
  {
    name: "Phương Anh",
    time: "2 giờ trước",
    avatar: "👩",
    text: "Hôm nay mình hoàn thành 21 ngày đi bộ mỗi ngày rồi! Cảm ơn cộng đồng đã luôn động lực cho mình. Bình minh luôn ở đó mà. 🌅",
    likes: 128,
    comments: 24,
    liked: false,
    isImage: false,
  },
  {
    name: "Hoàng Nam",
    time: "5 giờ trước",
    avatar: "👨",
    text: "Bỏ lỡ 2 ngày vì bận việc, nhưng mình quay lại rồi! Bình minh luôn ở đó mà. 😄",
    likes: 56,
    comments: 8,
    liked: true,
    isImage: false,
  },
];

const TABS = ["Tất cả", "Nhóm", "Đang theo dõi"];

export default function CommunityScreen({ onNavigate }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const [posts, setPosts] = useState(POSTS);

  const toggleLike = (i: number) => {
    setPosts((prev) => prev.map((p, idx) =>
      idx === i ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 } : p
    ));
  };

  return (
    <div className="flex flex-col min-h-full" style={{ background: "#FAF6F0" }}>
      <div className="px-6 pt-2 pb-2">
        <h1 style={{ fontSize: "22px", fontWeight: 800, color: "#2D2520", marginBottom: "12px" }}>Cộng đồng</h1>

        {/* Tabs */}
        <div className="flex gap-2 mb-4 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setActiveTab(i)} style={{
              padding: "6px 16px", borderRadius: "20px", fontSize: "13px", fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap",
              background: activeTab === i ? "#E8563A" : "#FFFFFF",
              color: activeTab === i ? "#FFFFFF" : "#8A7068",
              border: activeTab === i ? "none" : "1px solid #EDE0D6",
            }}>{t}</button>
          ))}
        </div>
      </div>

      {/* Posts */}
      <div className="px-6 flex flex-col gap-4 pb-6">
        {posts.map((p, i) => (
          <div key={i} className="rounded-2xl p-4" style={{ background: "#FFFFFF", border: "1px solid #EDE0D6" }}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center rounded-full" style={{ width: "36px", height: "36px", background: "#FFF0EB", fontSize: "20px" }}>{p.avatar}</div>
                <div>
                  <p style={{ fontSize: "13px", fontWeight: 700, color: "#2D2520" }}>{p.name}</p>
                  <p style={{ fontSize: "11px", color: "#B0A09A" }}>{p.time}</p>
                </div>
              </div>
              <button style={{ background: "none", border: "none", cursor: "pointer" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B0A09A" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
              </button>
            </div>

            <p style={{ fontSize: "14px", color: "#4A3930", lineHeight: 1.6, marginBottom: "12px" }}>{p.text}</p>

            {/* Image post */}
            {i === 1 && (
              <div className="rounded-xl mb-3 flex items-center justify-center" style={{ height: "140px", background: "linear-gradient(135deg, #EEF5F0, #FDDBB4)" }}>
                <div className="text-center">
                  <span style={{ fontSize: "40px" }}>🌸</span>
                  <p style={{ fontSize: "12px", color: "#7B9E87", fontWeight: 700, marginTop: "4px" }}>Những bước chân nhỏ<br />tạo nên hành trình lớn</p>
                </div>
              </div>
            )}

            <div className="flex items-center gap-4">
              <button onClick={() => toggleLike(i)} className="flex items-center gap-1.5" style={{ background: "none", border: "none", cursor: "pointer" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill={p.liked ? "#E8563A" : "none"} stroke={p.liked ? "#E8563A" : "#B0A09A"} strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                <span style={{ fontSize: "13px", color: p.liked ? "#E8563A" : "#B0A09A", fontWeight: 600 }}>{p.likes}</span>
              </button>
              <button className="flex items-center gap-1.5" style={{ background: "none", border: "none", cursor: "pointer" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B0A09A" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                <span style={{ fontSize: "13px", color: "#B0A09A", fontWeight: 600 }}>{p.comments}</span>
              </button>
            </div>
          </div>
        ))}

        {/* Inspiring image card */}
        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #EDE0D6" }}>
          <div style={{ height: "200px", background: "linear-gradient(135deg, #7B9E87 0%, #FDDBB4 50%, #E8563A 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="text-center px-8">
              <p style={{ fontSize: "22px", fontWeight: 900, color: "#FFFFFF", textShadow: "0 2px 8px rgba(0,0,0,0.2)", lineHeight: 1.4 }}>
                "Bình minh nào cũng<br />xứng đáng được đón chào"
              </p>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.8)", marginTop: "8px" }}>— WealthRISE community</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
