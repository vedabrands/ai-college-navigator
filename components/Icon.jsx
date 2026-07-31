const map = { Dashboard:"⌘", Explorer:"⌕", Chat:"✦", Applications:"◷", Profile:"◉", Counselors:"★", Booking:"✓", Admin:"▦", Platform:"◆", Search:"⌕" };
export default function Icon({ name, className = "" }) { return <span className={`inline-flex h-5 w-5 items-center justify-center ${className}`}>{map[name] || "•"}</span>; }
