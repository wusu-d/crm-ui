interface ProgressSegment {
  label: string;
  value: number;
  color: string;
}

interface MultiProgressProps {
  segments: ProgressSegment[];
  total: number;
}

const MultiProgress = ({ segments, total }: MultiProgressProps) => {
  return (
    <div className="space-y-2">
      <div className="flex h-2 overflow-hidden rounded-full bg-gray-100">
        {segments.map((segment) => {
          const width = (segment.value / total) * 100;
          return (
            <div
              key={segment.label}
              className={`${segment.color} first:rounded-l-full last:rounded-r-full`}
              style={{ width: `${width}%` }}
            />
          );
        })}
      </div>
      <div className="flex flex-wrap gap-2 text-xs">
        {segments.map((segment) => (
          <div key={segment.label} className="flex items-center gap-1.5">
            <div className={`h-2 w-2 rounded-full ${segment.color}`} />
            <span>{segment.label}</span>
            <span className="font-medium">${segment.value.toFixed(0)}m</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiProgress;
