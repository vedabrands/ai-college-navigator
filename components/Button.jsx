export default function Button({ children, variant = "primary", className = "" }) {
  const styles = variant === "ghost" ? "border-white/60 bg-white/35 text-slate-700 hover:bg-white/70" : "border-blue-500/20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 hover:scale-[1.01]";
  return <button className={`rounded-2xl border px-4 py-2 text-sm font-bold transition ${styles} ${className}`}>{children}</button>;
}
