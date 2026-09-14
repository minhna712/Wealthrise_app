import { useState } from "react";
import type { Screen } from "../App";

interface Props {
  onNavigate: (s: Screen) => void;
}

const EXPERTS = [
  { name: "ThS. BS. Nguyễn Thị Lan", spec: "Dinh dưỡng", rating: 4.9, reviews: 312, avatar: "👩‍⚕️", badge: "Đặt lịch" },
  { name: "ThS. Trần Minh Đức", spec: "Tâm lý / Tham vấn", rating: 4.8, reviews: 198, avatar: "👨‍⚕️", badge: "Đặt lịch" },
  { name: "BS. Lê Hoàng Anh", spec: "Sức khỏe tổng quát", rating: 4.5, reviews: 267, avatar: "👩‍⚕️", badge: "Đặt lịch" },
  { name: "CN. Phạm Thu Hà", spec: "Vận động trị liệu", rating: 4.9, reviews: 184, avatar: "👩‍⚕️", badge: "Đặt lịch" },
];

const FILTER_TABS = ["Tất cả", "Dinh dưỡng", "Tâm lý", "Sức khỏe"];

export default function ExpertsScreen({ onNavigate }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col min-h-full" style={{ background: "#FAF6F0" }}>
      <div className="px-6 pt-2 pb-4">
        <h1 style={{ fontSize: "22px", fontWeight: 800, color: "#2D2520", marginBottom: "12px" }}>Chuyên gia</h1>

        {/* Search */}
        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl mb-4" style={{ background: "#FFFFFF", border: "1px solid #EDE0D6" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B0A09A" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Tìm chuyên gia, lĩnh vực..."
            style={{ border: "none", background: "none", flex: 1, fontSize: "14px", color: "#2D2520", outline: "none", fontFamily: "'Nunito', sans-serif" }}
          />
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-4 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {FILTER_TABS.map((t, i) => (
            <button key={t} onClick={() => setActiveTab(i)} style={{
              padding: "6px 16px", borderRadius: "20px", fontSize: "13px", fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap",
              background: activeTab === i ? "#E8563A" : "#FFFFFF",
              color: activeTab === i ? "#FFFFFF" : "#8A7068",
              border: activeTab === i ? "none" : "1px solid #EDE0D6",
            }}>{t}</button>
          ))}
        </div>

        {/* Expert list */}
        <div className="flex flex-col gap-3 pb-4">
          {EXPERTS.map((e, i) => (
            <div key={i} className="flex items-center gap-3 p-4 rounded-2xl" style={{ background: "#FFFFFF", border: "1px solid #EDE0D6" }}>
              <div className="flex items-center justify-center rounded-full flex-shrink-0" style={{ width: "52px", height: "52px", background: "#FFF0EB", fontSize: "28px" }}>{e.avatar}</div>
              <div className="flex-1 min-w-0">
                <p style={{ fontSize: "14px", fontWeight: 700, color: "#2D2520" }}>{e.name}</p>
                <p style={{ fontSize: "12px", color: "#8A7068", marginBottom: "4px" }}>{e.spec}</p>
                <div className="flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#F0A070" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "#2D2520" }}>{e.rating}</span>
                  <span style={{ fontSize: "11px", color: "#B0A09A" }}>({e.reviews} đánh giá)</span>
                </div>
              </div>
              <button style={{
                padding: "8px 14px", borderRadius: "12px", fontSize: "12px", fontWeight: 700, cursor: "pointer", border: "none",
                background: "#FFF0EB", color: "#E8563A"
              }}>
                {e.badge}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
