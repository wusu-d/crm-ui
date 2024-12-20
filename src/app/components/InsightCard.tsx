import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Calendar, Clock } from "lucide-react";
import MultiProgress from "./MultiProgress";

import { LeadCarousel } from "./LeadCarousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const progressSegments = [
  { label: "Won", value: 18, color: "bg-emerald-500" },
  { label: "Committed", value: 8, color: "bg-blue-500" },
  { label: "Best case", value: 7, color: "bg-rose-500" },
  { label: "Qualified", value: 3, color: "bg-amber-500" },
  { label: "Leads", value: 75, color: "bg-gray-300" },
];
const InsightsCard = () => {
  return (
    <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-100">
      <CardHeader className="pb-2 grid grid-cols-1 lg:grid-cols-[60%,1fr] xl:grid-cols-[auto,auto] gap-3">
        <CardTitle className="flex items-center justify-between ">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full shrink-0 bg-blue-600 flex items-center justify-center">
              <span className="text-white text-sm">🎯</span>
            </div>
            <h3 className="md:text-xl font-semibold">
              Hi Mona, <span className="text-blue-600">68%</span> of goal
              achieved and rest can be achieved by focusing on 20 top leads.
            </h3>
          </div>
        </CardTitle>
        <div className="space-y-2 min-w-[40%]">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="h-4 w-4" />
            <span className="text-xs">1 month until Q4 ends</span>
          </div>
          <MultiProgress segments={progressSegments} total={111} />
        </div>
      </CardHeader>
      <CardContent className="mt-4 space-x-3 gap-3 h-max items-center grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-1 lg:col-span-2">
          <p className="text-gray-600 text-sm mb-2">
            Copilot has pinpointed 20 key leads that show strong purchase intent
            and are actively engaging. These leads need your focus.
          </p>

          <LeadCarousel />
        </div>

        <div className="flex flex-col justify-between items-start space-y-4 lg:pl-4 lg:border-l shrink-0">
          <h4 className="font-semibold">Other key activities</h4>
          <div className="rounded-xl shadow-md border p-3 self-stretch bg-white">
            <div className="flex items-center gap-1">
              <Avatar>
                <AvatarImage
                  className="object-cover"
                  src="https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="icon"
                />
                <AvatarFallback>IO</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-sm">
                  Cafe A100 for Woodland Bank
                </p>
                <p className="text-xs">Woodland • $280,000 • 8 days to Close</p>
              </div>
            </div>
            <div className="rounded-xl bg-blue-50 flex gap-1 items-center p-2 py-1 mt-2 text-blue-500 font-medium text-xs ">
              <Calendar size={12} />
              Review draft and reply to Chris Nadio
            </div>
          </div>
          <div className="rounded-xl shadow-md border p-3 self-stretch bg-white">
            <div className="flex items-center gap-1">
              <Avatar>
                <AvatarImage
                  className="object-cover"
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="icon"
                />
                <AvatarFallback>IO</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-sm">
                  Partnership opportunity for Fabrikam
                </p>
                <p className="text-xs">Fabrikam • $280,000 • 8 days to Close</p>
              </div>
            </div>
            <div className="rounded-xl bg-blue-50 flex gap-1 items-center p-2 py-1 mt-2 text-blue-500 font-medium text-xs ">
              <Calendar size={12} /> Prepare me for Fabrikam&apos;s key meeting
            </div>
          </div>
          <Button variant="link" className="text-blue-600">
            Show all key activities
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default InsightsCard;
