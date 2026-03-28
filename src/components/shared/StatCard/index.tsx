type Props = {
  value: string;
  label: string;
  change?: string;
  icon?: string;
  className?: string;
};

export function StatCard({ value, label, change, icon, className = '' }: Props) {
  return (
    <div className={`bg-surface-container-low p-8 rounded-xl ${className}`}>
      {icon && (
        <div className="flex justify-between items-start mb-4">
          <span className="material-symbols-outlined text-primary text-4xl">{icon}</span>
          {change && (
            <span className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-md text-xs font-bold">
              {change}
            </span>
          )}
        </div>
      )}
      <div className="text-4xl font-headline font-bold text-on-surface mb-2">{value}</div>
      <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant">{label}</p>
    </div>
  );
}
