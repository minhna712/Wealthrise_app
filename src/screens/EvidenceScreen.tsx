import { useState } from "react";
import { ARTICLES } from "../data/exploreData";

interface Props {
  claimId: string;
  onBack: () => void;
}

interface EvidenceRecord {
  topic: string;
  topicIcon: string;
  contentType: string;
  level: 1 | 2 | 3 | 4;
  levelLabel: string;
  evidenceTypes: string[];
  known: string;
  unknown: string;
  safety: string;
  updatedDate: string;
  reviewer: string;
  sources: { author: string; year: number; journal: string }[];
}

const EVIDENCE_DATA: Record<string, EvidenceRecord> = {
  "sleep-cycles": {
    topic:"Giấc ngủ & Phục hồi", topicIcon:"🌙",
    contentType:"Có cơ sở bằng chứng",
    level:3, levelLabel:"Trung bình",
    evidenceTypes:["Tổng quan hệ thống","Thử nghiệm lâm sàng","Nghiên cứu quan sát"],
    known:"Nhiều nghiên cứu xác nhận chu kỳ ngủ REM đóng vai trò quan trọng trong phục hồi thần kinh và cảm xúc. Người trưởng thành khỏe mạnh thường cần 7–9 giờ để hoàn thành đủ chu kỳ.",
    unknown:"Nhu cầu ngủ thay đổi đáng kể tùy từng người, độ tuổi và tình trạng sức khỏe. Không có con số tuyệt đối áp dụng cho tất cả.",
    safety:"Nếu bạn liên tục khó ngủ hoặc buồn ngủ ban ngày nghiêm trọng, hãy tham khảo ý kiến bác sĩ.",
    updatedDate:"07/2026", reviewer:"Ban biên tập WealthRISE",
    sources:[
      { author:"Walker M.", year:2017, journal:"Scribner — Why We Sleep" },
      { author:"Grandner M. et al.", year:2020, journal:"Sleep Medicine Reviews" },
      { author:"Hirshkowitz M. et al.", year:2015, journal:"Sleep Health" },
      { author:"Carskadon & Dement", year:2011, journal:"Principles and Practice of Sleep Medicine" },
    ],
  },
  "sleep-schedule": {
    topic:"Nhịp sinh học", topicIcon:"⏰",
    contentType:"Có cơ sở bằng chứng",
    level:4, levelLabel:"Mạnh",
    evidenceTypes:["Tổng quan hệ thống","Thử nghiệm lâm sàng có đối chứng"],
    known:"Đồng hồ sinh học (circadian rhythm) của con người hoạt động theo chu kỳ ~24 giờ. Đi ngủ và thức dậy đều đặn giúp đồng bộ hóa nhịp sinh học, cải thiện chất lượng ngủ và tỉnh táo ban ngày.",
    unknown:"Mức độ linh hoạt có thể khác nhau giữa các chronotype (người dậy sớm vs. dậy muộn). Cần thêm nghiên cứu về tác động lâu dài với các múi giờ khác nhau.",
    safety:"Thay đổi giờ ngủ đột ngột có thể gây mất ngủ tạm thời. Nên điều chỉnh dần từng 15–30 phút mỗi ngày.",
    updatedDate:"07/2026", reviewer:"Ban biên tập WealthRISE",
    sources:[
      { author:"Roenneberg T. et al.", year:2019, journal:"Current Biology" },
      { author:"Czeisler C.A.", year:2015, journal:"Science" },
      { author:"Phillips A.J.K. et al.", year:2017, journal:"Science Advances" },
    ],
  },
  "relax-claim": {
    topic:"Hô hấp & Thư giãn", topicIcon:"🌬️",
    contentType:"Bằng chứng sơ bộ",
    level:2, levelLabel:"Hạn chế",
    evidenceTypes:["Nghiên cứu quan sát","Thử nghiệm nhỏ"],
    known:"Các kỹ thuật thở chậm có kiểm soát có thể kích hoạt phản ứng thư giãn của hệ thần kinh phó giao cảm. Một số nghiên cứu nhỏ ghi nhận giảm lo âu và nhịp tim ngắn hạn.",
    unknown:"Kỹ thuật thở 4-7-8 chưa được nghiên cứu đủ quy mô lớn. Hiệu quả lâu dài và cơ chế chính xác vẫn cần thêm bằng chứng.",
    safety:"Người có vấn đề về hô hấp hoặc lo âu nghiêm trọng nên tham khảo chuyên gia trước khi áp dụng các kỹ thuật thở có thể gây chóng mặt.",
    updatedDate:"07/2026", reviewer:"Ban biên tập WealthRISE",
    sources:[
      { author:"Zaccaro A. et al.", year:2018, journal:"Frontiers in Human Neuroscience" },
      { author:"Jerath R. et al.", year:2015, journal:"Medical Hypotheses" },
      { author:"Ma X. et al.", year:2017, journal:"Frontiers in Psychology" },
    ],
  },
  "walk-claim": {
    topic:"Vận động & Chuyển hóa", topicIcon:"🚶",
    contentType:"Có cơ sở bằng chứng",
    level:3, levelLabel:"Trung bình",
    evidenceTypes:["Thử nghiệm lâm sàng có đối chứng","Nghiên cứu quan sát"],
    known:"Nghiên cứu cho thấy đi bộ ngắn sau bữa ăn giúp kiểm soát đường huyết sau ăn hiệu quả hơn so với ngồi nghỉ. Hiệu quả đặc biệt rõ ở người có nguy cơ tiểu đường.",
    unknown:"Chưa rõ thời điểm đi bộ tối ưu (ngay sau ăn hay sau 15–30 phút). Cần thêm nghiên cứu dài hạn và ở các nhóm dân số khác nhau.",
    safety:"Người mới bắt đầu nên đi bộ nhẹ nhàng. Nếu có bệnh tim mạch hay tiểu đường, tham khảo bác sĩ về cường độ phù hợp.",
    updatedDate:"07/2026", reviewer:"Ban biên tập WealthRISE",
    sources:[
      { author:"Buffey A.J. et al.", year:2022, journal:"Sports Medicine" },
      { author:"Colberg S.R. et al.", year:2016, journal:"Diabetes Care" },
      { author:"Henson J. et al.", year:2016, journal:"Diabetologia" },
    ],
  },
  "water-claim": {
    topic:"Hydration & Nhận thức", topicIcon:"💧",
    contentType:"Có cơ sở bằng chứng",
    level:4, levelLabel:"Mạnh",
    evidenceTypes:["Tổng quan hệ thống","Thử nghiệm lâm sàng","Meta-phân tích"],
    known:"Nhiều nghiên cứu nhất quán xác nhận mất nước nhẹ (1–2% trọng lượng cơ thể) làm giảm khả năng tập trung, trí nhớ ngắn hạn và hiệu suất thể chất. Tác động đặc biệt rõ trong điều kiện nhiệt độ cao.",
    unknown:"Nhu cầu nước chính xác thay đổi theo mức độ hoạt động, khí hậu và cơ địa từng người. Khuyến nghị '8 ly/ngày' thiếu cơ sở khoa học chặt chẽ.",
    safety:"Uống quá nhiều nước trong thời gian ngắn có thể gây hạ natri máu (water intoxication). Uống vừa đủ theo cảm giác khát là phù hợp cho hầu hết người.",
    updatedDate:"07/2026", reviewer:"Ban biên tập WealthRISE",
    sources:[
      { author:"Popkin B.M. et al.", year:2010, journal:"Nutrition Reviews" },
      { author:"Ganio M.S. et al.", year:2011, journal:"British Journal of Nutrition" },
      { author:"Edmonds C.J. et al.", year:2013, journal:"Appetite" },
      { author:"Masento N.A. et al.", year:2014, journal:"British Journal of Nutrition" },
    ],
  },
};

const LEVEL_LABELS = ["", "Rất hạn chế", "Hạn chế", "Trung bình", "Mạnh"];

export default function EvidenceScreen({ claimId, onBack }: Props) {
  const [showAllSources, setShowAllSources] = useState(false);

  const claimFromArticle = ARTICLES.flatMap(a => a.claims).find(c => c.id === claimId);
  const record = EVIDENCE_DATA[claimId];

  /* Claim text is always from the article data */
  const claimText = claimFromArticle?.text ?? null;

  /* No matching evidence record → neutral pending state */
  if (!record || !claimText) {
    return (
      <div style={{ minHeight:"100%", background:"#FFF8F4", fontFamily:"'Nunito', sans-serif" }}>
        <Header onBack={onBack}/>
        <div style={{ padding:"40px 20px", textAlign:"center" }}>
          <span style={{ fontSize:"36px" }}>🔍</span>
          <p style={{ margin:"12px 0 0", fontSize:"15px", fontWeight:700, color:"#2A2420" }}>Thông tin bằng chứng đang được cập nhật.</p>
          <p style={{ margin:"8px 0 0", fontSize:"13px", color:"#9A8A7A", lineHeight:1.6 }}>Đội ngũ WealthRISE đang rà soát và hoàn thiện nội dung này. Vui lòng quay lại sau.</p>
        </div>
      </div>
    );
  }

  const visibleSources = showAllSources ? record.sources : record.sources.slice(0, 3);

  return (
    <div style={{ minHeight:"100%", background:"#FFF8F4", fontFamily:"'Nunito', sans-serif" }}>
      <Header onBack={onBack}/>

      <div style={{ padding:"14px 20px 40px" }}>
        {/* Brand micro-copy */}
        <div style={{ textAlign:"center", marginBottom:"14px" }}>
          <p style={{ margin:0, fontSize:"10px", fontWeight:700, color:"#B0A090", letterSpacing:"0.9px", textTransform:"uppercase" }}>
            KIẾN THỨC HÔM NAY · CHO MỘT BẠN TỐT HƠN NGÀY MAI
          </p>
        </div>

        {/* Topic + content type */}
        <div style={{ display:"flex", gap:"8px", marginBottom:"10px" }}>
          <InfoChip icon={record.topicIcon} label="Chủ đề" value={record.topic} bg="rgba(200,182,226,0.15)" border="rgba(200,182,226,0.4)" accent="#A896CC"/>
          <InfoChip icon="✓" label="Loại nội dung" value={record.contentType} bg="rgba(123,152,126,0.10)" border="rgba(123,152,126,0.35)" accent="#7B987E"/>
        </div>

        {/* Claim */}
        <div style={{ padding:"16px 16px 14px", background:"rgba(244,167,162,0.11)", borderRadius:"16px", border:"1.5px solid rgba(244,167,162,0.32)", marginBottom:"10px", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", top:"8px", right:"12px", fontSize:"44px", color:"rgba(242,140,100,0.10)", lineHeight:1, fontFamily:"Georgia,serif", userSelect:"none" }}>"</div>
          <p style={{ margin:"0 0 5px", fontSize:"10px", fontWeight:700, color:"#D95C5C", textTransform:"uppercase", letterSpacing:"0.5px" }}>Tuyên bố</p>
          <p style={{ margin:0, fontSize:"14px", fontWeight:700, color:"#2A2420", lineHeight:1.6 }}>{claimText}</p>
        </div>

        {/* Evidence level */}
        <div style={{ padding:"14px 16px", background:"#FFFFFF", borderRadius:"16px", boxShadow:"0 1px 6px rgba(0,0,0,0.05)", marginBottom:"10px" }}>
          <p style={{ margin:"0 0 10px", fontSize:"13px", fontWeight:800, color:"#2A2420" }}>Mức độ chắc chắn</p>
          <div style={{ display:"flex", gap:"6px", marginBottom:"7px" }}>
            {[1,2,3,4].map(d => (
              <div key={d} style={{ flex:1, height:"7px", borderRadius:"3.5px", background:d<=record.level?"#F28C64":"#EDE6DF", transition:"background 0.2s" }}/>
            ))}
          </div>
          <div style={{ display:"flex", justifyContent:"space-between" }}>
            <span style={{ fontSize:"10px", color:"#B0A090" }}>Rất hạn chế</span>
            <span style={{ fontSize:"12px", fontWeight:800, color:"#F28C64" }}>{LEVEL_LABELS[record.level]}</span>
            <span style={{ fontSize:"10px", color:"#B0A090" }}>Mạnh</span>
          </div>
        </div>

        {/* Evidence types */}
        <div style={{ padding:"12px 16px", background:"#FFFFFF", borderRadius:"16px", boxShadow:"0 1px 6px rgba(0,0,0,0.05)", marginBottom:"10px" }}>
          <p style={{ margin:"0 0 8px", fontSize:"13px", fontWeight:800, color:"#2A2420" }}>Loại bằng chứng</p>
          <div style={{ display:"flex", gap:"6px", flexWrap:"wrap" }}>
            {record.evidenceTypes.map(et => (
              <span key={et} style={{ fontSize:"11px", fontWeight:600, color:"#5F6368", background:"#F0EAE4", padding:"4px 11px", borderRadius:"20px" }}>{et}</span>
            ))}
          </div>
        </div>

        {/* Known */}
        <SectionCard
          dotColor="#7B987E" dotBg="#7B987E" icon={<CheckIcon/>}
          heading="Điều đã biết" headingColor="#3A5A40"
          body={record.known} bodyColor="#3A5A40"
          bg="rgba(123,152,126,0.09)" border="rgba(123,152,126,0.22)"
        />

        {/* Unknown */}
        <SectionCard
          dotColor="#F28C64" dotBg="#F28C64" icon={<span style={{ fontSize:"12px", fontWeight:900, color:"white", lineHeight:1 }}>?</span>}
          heading="Điều chưa biết" headingColor="#8A4020"
          body={record.unknown} bodyColor="#5A3820"
          bg="rgba(242,140,100,0.07)" border="rgba(242,140,100,0.20)"
        />

        {/* Safety */}
        <SectionCard
          dotColor="#5F6368" dotBg="#5F6368" icon={<ShieldIcon/>}
          heading="Lưu ý an toàn" headingColor="#3A3D42"
          body={record.safety} bodyColor="#4A4D52"
          bg="rgba(95,99,104,0.05)" border="rgba(95,99,104,0.13)"
          last
        />

        {/* Metadata */}
        <div style={{ display:"flex", gap:"8px", marginBottom:"14px", marginTop:"10px" }}>
          <MetaCell label="📅 Cập nhật" value={record.updatedDate}/>
          <MetaCell label="👤 Rà soát" value={record.reviewer} wide/>
        </div>

        {/* Sources */}
        <p style={{ margin:"0 0 8px", fontSize:"13px", fontWeight:800, color:"#2A2420" }}>Nguồn tham khảo</p>
        <div style={{ overflow:"hidden" }}>
          {visibleSources.map((s, i) => (
            <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:"10px", padding:"10px 14px", background:"#FFFFFF", borderRadius:"12px", boxShadow:"0 1px 5px rgba(0,0,0,0.05)", marginBottom:"7px" }}>
              <span style={{ fontSize:"13px", color:"#F28C64", fontWeight:900, flexShrink:0, lineHeight:1.5 }}>•</span>
              <div>
                <p style={{ margin:0, fontSize:"13px", fontWeight:700, color:"#2A2420" }}>{s.author} ({s.year})</p>
                <p style={{ margin:"2px 0 0", fontSize:"11px", color:"#9A8A7A" }}>{s.journal}</p>
              </div>
            </div>
          ))}
        </div>

        {record.sources.length > 3 && (
          <button onClick={() => setShowAllSources(v => !v)} style={{ display:"flex", alignItems:"center", gap:"4px", background:"none", border:"none", cursor:"pointer", padding:"4px 0", marginBottom:"16px" }}>
            <span style={{ fontSize:"13px", fontWeight:700, color:"#F28C64", fontFamily:"'Nunito', sans-serif" }}>
              {showAllSources ? "Thu gọn ↑" : `Xem tất cả nguồn (${record.sources.length}) →`}
            </span>
          </button>
        )}

        {/* Disclaimer */}
        <div style={{ display:"flex", alignItems:"flex-start", gap:"8px", padding:"12px 14px", background:"rgba(242,140,100,0.06)", borderRadius:"12px", marginTop: record.sources.length > 3 ? 0 : "12px" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F28C64" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink:0, marginTop:"2px" }}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          <p style={{ margin:0, fontSize:"11px", color:"#7A6A60", lineHeight:1.6 }}>
            Thông tin này nhằm hỗ trợ hiểu và thực hành sống khỏe,{" "}
            <strong>không thay thế chẩn đoán hoặc điều trị y khoa.</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Sub-components ── */

function Header({ onBack }: { onBack: () => void }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:"12px", padding:"16px 20px 12px", background:"#FFF8F4", borderBottom:"1px solid rgba(242,140,100,0.13)" }}>
      <button onClick={onBack} style={{ background:"none", border:"none", cursor:"pointer", padding:"4px" }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5F6368" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
      </button>
      {/* Mini logo SVG (brand mark only, not the full redraw) */}
      <svg width="20" height="20" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="hdr-arc" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F28C64"/><stop offset="100%" stopColor="#F4A7A2"/>
          </linearGradient>
        </defs>
        <path d="M 30 115 A 72 72 0 1 1 170 115" stroke="url(#hdr-arc)" strokeWidth="28" fill="none" strokeLinecap="round"/>
        <path d="M 68 115 A 34 34 0 1 1 132 115" fill="#F8B87A"/>
        <path d="M 42 120 Q 75 105 100 118 Q 130 132 165 122" stroke="#F4A7A2" strokeWidth="18" fill="none" strokeLinecap="round"/>
        <path d="M 148 106 Q 172 98 175 116 Q 162 120 148 106 Z" fill="#7B987E"/>
      </svg>
      <h1 style={{ margin:0, fontSize:"17px", fontWeight:800, color:"#2A2420" }}>Thẻ bằng chứng</h1>
    </div>
  );
}

function InfoChip({ icon, label, value, bg, border, accent }: { icon:string; label:string; value:string; bg:string; border:string; accent:string }) {
  return (
    <div style={{ flex:1, padding:"10px 12px", background:bg, borderRadius:"14px", border:`1.5px solid ${border}` }}>
      <p style={{ margin:"0 0 3px", fontSize:"10px", fontWeight:700, color:accent, textTransform:"uppercase", letterSpacing:"0.4px" }}>{label}</p>
      <div style={{ display:"flex", alignItems:"center", gap:"4px" }}>
        <span style={{ fontSize:"14px" }}>{icon}</span>
        <span style={{ fontSize:"12px", fontWeight:700, color:"#2A2420" }}>{value}</span>
      </div>
    </div>
  );
}

function SectionCard({ icon, dotBg, heading, headingColor, body, bodyColor, bg, border, last }: {
  icon: React.ReactNode; dotBg:string; heading:string; headingColor:string;
  body:string; bodyColor:string; bg:string; border:string; last?:boolean;
  dotColor?: string;
}) {
  return (
    <div style={{ padding:"14px 16px", background:bg, borderRadius:"16px", border:`1.5px solid ${border}`, marginBottom:last?0:"8px" }}>
      <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"7px" }}>
        <div style={{ width:"20px", height:"20px", borderRadius:"50%", background:dotBg, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
          {icon}
        </div>
        <p style={{ margin:0, fontSize:"13px", fontWeight:800, color:headingColor }}>{heading}</p>
      </div>
      <p style={{ margin:0, fontSize:"13px", color:bodyColor, lineHeight:1.65 }}>{body}</p>
    </div>
  );
}

function MetaCell({ label, value, wide }: { label:string; value:string; wide?:boolean }) {
  return (
    <div style={{ flex:wide?2:1, padding:"10px 13px", background:"#FFFFFF", borderRadius:"12px", boxShadow:"0 1px 5px rgba(0,0,0,0.05)" }}>
      <p style={{ margin:"0 0 2px", fontSize:"10px", color:"#9A8A7A", textTransform:"uppercase", letterSpacing:"0.4px", fontWeight:700 }}>{label}</p>
      <p style={{ margin:0, fontSize:"12px", fontWeight:700, color:"#2A2420" }}>{value}</p>
    </div>
  );
}

function CheckIcon() {
  return <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;
}

function ShieldIcon() {
  return <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
}
