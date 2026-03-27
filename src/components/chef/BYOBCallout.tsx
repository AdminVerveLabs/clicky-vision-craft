const BYOBCallout = ({ className = "" }: { className?: string }) => (
  <div
    className={`flex items-center gap-3 bg-purple/10 ${className}`}
    style={{ borderRadius: "12px", padding: "12px 14px" }}
  >
    <div
      className="bg-purple/20 flex items-center justify-center shrink-0"
      style={{ width: "22px", height: "22px", borderRadius: "6px" }}
    >
      <span style={{ fontSize: "13px" }}>🍷</span>
    </div>
    <p className="font-sans text-purple font-medium" style={{ fontSize: "14px", lineHeight: 1.4 }}>
      BYOB welcome at every event
    </p>
  </div>
);

export default BYOBCallout;
