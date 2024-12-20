import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Check, ChevronRight, Trophy, Zap } from "lucide-react";
import MetricsBadge from "./MetricsBadge";

interface LeadCardProps {
  name: string;
  title: string;
  company: string;
  description: string;
  avatarUrl: string;
  dealValue?: string;
}

const LeadCard = ({
  name,
  title,
  company,
  description,
  avatarUrl,
  dealValue,
}: LeadCardProps) => {
  return (
    <TooltipProvider>
      <Dialog>
        <DialogTrigger asChild>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={avatarUrl} alt={name} />
                  <AvatarFallback>{name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{name}</h3>
                      <p className="text-sm text-gray-500">
                        {title} • {company}
                      </p>
                    </div>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View lead details</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Engage with {name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={avatarUrl} alt={name} />
                <AvatarFallback>{name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{name}</h3>
                <p className="text-sm text-gray-500">
                  {title} • {company}
                </p>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-blue-700">{description}</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <MetricsBadge
                icon={<Check className="h-4 w-4 text-blue-600" />}
                label="Decision maker"
                value="Yes"
                color="blue"
              />
              <MetricsBadge
                icon={<Trophy className="h-4 w-4 text-yellow-600" />}
                label="Potential deal value"
                value={dealValue || "$1M"}
                color="yellow"
              />
              <MetricsBadge
                icon={<Zap className="h-4 w-4 text-purple-600" />}
                label="Intent"
                value="High"
                color="purple"
              />
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold">Why I picked this lead</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  • {name} is a key decision maker and was browsing 'espresso
                  machines&apos; on First Coffee&apos;s website
                </li>
                <li>
                  • Multiple people at their company have reported 'slowness'
                  during service requests
                </li>
                <li>
                  • {company} currently sees $200M in revenue from their
                  in-store coffee shops
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold">About {name.split(" ")[0]}</h4>
              <p className="text-sm text-gray-600">
                {name}, the Chief Operating Officer of {company}, is a dynamic
                leader with a proven track record in optimizing operations and
                enhancing customer experiences. Under their guidance, {company}
                's in-store coffee shops have flourished, becoming a hallmark of
                quality and innovation. Their commitment to excellence makes
                them an ideal partner for First Coffee. She's always seeking
                top-tier equipment to elevate her coffee shops' offerings,
                ensuring consistent, high-quality service.
              </p>
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="outline">Edit</Button>
              <Button>Approve and send</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  );
};

export default LeadCard;
