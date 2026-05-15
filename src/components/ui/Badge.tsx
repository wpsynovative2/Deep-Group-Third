
export default function Badge({ children, className = '' }: { children: string; className?: string }) {
  return (
    <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-secondary text-white shadow-md ${className}`}>
      {children}
    </span>
  );
}
