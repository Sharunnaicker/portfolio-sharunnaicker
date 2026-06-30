interface TechTagProps {
  label: string;
}

export default function TechTag({ label }: TechTagProps) {
  return (
    <span
      className="text-xs font-mono px-2 py-1 rounded"
      style={{
        color: 'var(--accent)',
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border)',
      }}
    >
      {label}
    </span>
  );
}
