"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import {
  AlignLeft,
  CircleUser,
  Copy,
  Mail,
  NotepadText,
  SquareArrowRight,
} from "lucide-react";

interface AgentSkillModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AgentSkillModal({ isOpen, onClose }: AgentSkillModalProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <div className="flex items-center justify-between pt-10">
            <DialogTitle className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center"></span>
              Agent skill
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <Collapsible
            open={!isCollapsed}
            onOpenChange={() => setIsCollapsed(!isCollapsed)}
            className="border rounded-lg shadow-md"
          >
            <CollapsibleTrigger className="flex w-full items-center justify-between p-4 text-left">
              <span className="font-medium">
                Check if on-hand inventory will allow all sales orders to ship
                without delay
              </span>
              <svg
                className={`h-4 w-4 transition-transform ${
                  isCollapsed ? "" : "transform rotate-180"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 pt-0 text-sm">
              <span className="space-x-1 leading-7">
                When
                <Badge
                  variant="secondary"
                  className="bg-blue-50 text-blue-700 "
                >
                  <CircleUser size={12} className="mr-1" /> any vendor
                </Badge>
                sends an email with changes to
                <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                  <NotepadText size={12} className="mr-1" /> confirmed purchase
                  orders
                </Badge>
                , check if the resulting
              </span>
              <span className="space-x-1 leading-7">
                <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                  <AlignLeft size={12} className="mr-1" /> on-hand inventory
                </Badge>
                will allow
                <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                  <Copy size={12} className="mr-1" /> all sales orders
                </Badge>
                to
                <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                  <SquareArrowRight size={12} className="mr-1" /> ship without
                  delay
                </Badge>
                . If so,
              </span>
              <span className="space-x-1 leading-7">
                <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                  <SquareArrowRight size={12} className="mr-1" /> update the
                  purchase order
                </Badge>
                to reflect the change.
              </span>
            </CollapsibleContent>
          </Collapsible>

          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium flex gap-2">
                <Mail size={20} className="text-blue-700" />
                Enable email access
              </h4>
              <p className="text-sm text-gray-500">
                Allow the agent to access email inboxes to read mail from known
                vendors
              </p>
            </div>
            <div className="flex">
              <Input
                type="email"
                placeholder="purchasing@contoso.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-none outline-none focus-visible:ring-blue-600"
              />
              <Button
                className="bg-blue-500 text-white rounded-none"
                variant="secondary"
              >
                Allow access
              </Button>
            </div>
          </div>
        </div>

        <DialogFooter className="gap-2 mt-4">
          <Button disabled>Activate</Button>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
