import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease";
  icon: React.ReactNode;
}

const DashboardCard = ({
  title,
  value,
  change,
  changeType,
  icon,
}: MetricCardProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          {icon}
        </div>
        <div className="flex flex-col items-baseline justify-between">
          <h2 className="text-xl font-bold">{value}</h2>
          <p
            className={cn(
              "text-xs",
              changeType === "increase" ? "text-green-600" : "text-red-600"
            )}
          >
            {change}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
