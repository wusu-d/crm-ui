"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Check, Edit, ThumbsUp, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface LeadDialogProps {
  isOpen: boolean;
  onClose: () => void;
  lead: {
    name?: string;
    title?: string;
    company?: string;
    description?: string;
    avatarUrl?: string;
    dealValue?: string;
  };
}

const LeadDialog = ({ isOpen, onClose, lead }: LeadDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-2 text-sm font-medium">
              <span className="mr-1 h-3 w-3 bg-blue-800" /> Engage with{" "}
              {lead?.name}
            </DialogTitle>
            {/* <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button> */}
          </div>
        </DialogHeader>

        <div className="space-y-3">
          {/* Profile Section */}
          <div className="flex items-center gap-2 border shadow-md p-2 rounded-lg">
            <Avatar className="h-10 w-10 object-cover">
              <AvatarImage src={lead?.avatarUrl} alt={lead?.name} />
              <AvatarFallback>AO</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-base">{lead?.name}</h3>
              </div>

              <p className="text-sm text-gray-500">
                {lead?.title} • {lead?.company}
              </p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-gradient-to-b from-white via-white to-pink-300 space-y-3">
            <div className="rounded-lg shadow-inner border text-blue-600 bg-gradient-to-r bg-purple-200 p-2 flex items-center justify-between">
              <p className="text-xs">{lead.description}</p>
              <div className="flex gap-2">
                <Button
                  className="border-purple-500 text-purple-600"
                  variant="outline"
                  size="sm"
                >
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Button>
                <Button
                  className="bg-blue-800 font-normal text-white"
                  size="sm"
                >
                  Approve and send
                </Button>
              </div>
            </div>
            {/* Description Section */}
            <div className="bg-white p-3 rounded-lg shadow-md">
              <div className="rounded-lg bg-blue-50 border border-blue-100 p-2">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-blue-900">
                    Why I picked this lead
                  </h4>
                  <ul
                    style={{ listStyleType: "disc" }}
                    className="space-y-1 text-xs text-gray-600 pl-4"
                  >
                    <li>
                      {lead?.name} is a key decision maker and was browsing
                      &apos;espresso machines&apos; on First Coffee&apos;s
                      website
                    </li>
                    <li>
                      Multiple people at their company have reported
                      &apos;slowness&apos; during service requests
                    </li>
                    <li>
                      {lead?.company} currently sees $200M in revenue from their
                      in-store coffee shops
                    </li>
                  </ul>
                  <div className="w-3/4">
                    <div className="grid grid-cols-3 gap-1 ">
                      <div className="flex items-center gap-2 p-2 bg-white rounded-lg">
                        <div className="p-2 bg-blue-100 rounded-full">
                          <Check className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">
                            Decision maker
                          </p>
                          <p className="font-semibold text-blue-500">Yes</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-white rounded-lg">
                        <div className="p-2 bg-amber-100 rounded-full">
                          <ThumbsUp className="h-4 w-4 text-amber-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">Deal value</p>
                          <p className="font-semibold text-blue-500">$1m</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-white rounded-lg">
                        <div className="p-2 bg-purple-100 rounded-full">
                          <Zap className="h-4 w-4 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">Intent</p>
                          <p className="font-semibold text-blue-500">High</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-x-1 mt-2">
                <Badge variant="secondary">D365 Sales</Badge>
                <Badge variant="secondary">+2</Badge>
              </div>
            </div>

            {/* About Section */}
            <div className="space-y-2 bg-white rounded-lg border shadow-md p-2">
              <h4 className="font-semibold text-sm">
                About {lead.name ? lead.name.split(" ")[0] : ""}
              </h4>
              <p className="text-xs text-gray-600">
                {lead?.name}, the Chief Operating Officer of {lead?.company}, is
                a dynamic leader with a proven track record in optimizing
                operations and enhancing customer experiences. Under their
                guidance, {lead?.company}&apos;s in-store coffee shops have
                flourished, becoming a hallmark of quality and innovation. Their
                commitment to excellence makes them an ideal partner for First
                Coffee. She&apos;s always seeking top-tier equipment to elevate
                her coffee shops&apos; offerings, ensuring consistent,
                high-quality service.
              </p>
            </div>
          </div>

          {/* Footer */}
          {/* <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Avatar className="h-6 w-6">
                <AvatarImage src="/placeholder.svg" alt="AI" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <span>D365 Sales</span>
              <Badge variant="secondary">+2</Badge>
            </div>
          </div> */}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadDialog;
