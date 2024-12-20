import { cn } from "@/lib/utils";

interface MetricsBadgeProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  color?: "blue" | "yellow" | "purple";
}

const MetricsBadge = ({
  icon,
  label,
  value,
  color = "blue",
}: MetricsBadgeProps) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className={cn(
          "p-2 rounded-lg",
          color === "blue" && "bg-blue-100",
          color === "yellow" && "bg-yellow-100",
          color === "purple" && "bg-purple-100"
        )}
      >
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-sm text-gray-600">{label}</span>
        <span className="font-semibold">{value}</span>
      </div>
    </div>
  );
};

export default MetricsBadge;
