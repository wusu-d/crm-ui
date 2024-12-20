"use client";

import * as React from "react";
import {
  ChevronDown,
  Home,
  Clock,
  Pin,
  Briefcase,
  LayoutDashboard,
  ClipboardList,
  Users,
  UserCircle,
  Target,
  FileText,
  ShoppingCart,
  FileBox,
  Package,
  BookOpen,
  Mail,
  BarChart2,
  Bot,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { AgentSkillModal } from "./AgentSkillModal";

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  list?: { label: string; href: string }[];
}

function NavItem({ icon: Icon, label, isActive, list }: NavItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const hasChildren = list && list.length > 0;

  if (hasChildren) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-between",
              isActive && "bg-slate-800 text-slate-50"
            )}
          >
            <div className="flex items-center">
              <Icon className="mr-2 h-4 w-4" />
              {label}
            </div>
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform",
                isOpen && "transform rotate-180"
              )}
            />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="pl-6 pt-1">
          <div className="flex flex-col space-y-1">
            {list.map((child) => (
              <Button
                key={child.label}
                variant="ghost"
                className="justify-start h-8"
              >
                {child.label}
              </Button>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start",
        isActive && "bg-slate-800 text-slate-50"
      )}
    >
      <Icon className="mr-2 h-4 w-4" />
      {label}
    </Button>
  );
}

interface NavGroupProps {
  title?: string;
  children: React.ReactNode;
}

function NavGroup({ title, children }: NavGroupProps) {
  return (
    <div className="px-3 py-2">
      {title && (
        <h2 className="mb-2 px-2 text-xs font-semibold text-slate-500">
          {title}
        </h2>
      )}
      <div className="space-y-1">{children}</div>
    </div>
  );
}

export function Sidebar() {
  const [isAgentSkillOpen, setIsAgentSkillOpen] = React.useState(false);
  return (
    <>
      <div className="flex flex-col h-full w-64 bg-slate-900 text-slate-200">
        <div className="flex-1 overflow-auto py-2">
          <NavGroup>
            <NavItem icon={Home} label="Home" />
            <NavItem
              icon={Clock}
              label="Recent"
              list={[
                { label: "Today", href: "#" },
                { label: "Yesterday", href: "#" },
                { label: "Last Week", href: "#" },
              ]}
            />
            <NavItem
              icon={Pin}
              label="Pinned"
              list={[
                { label: "Important", href: "#" },
                { label: "Starred", href: "#" },
              ]}
            />
          </NavGroup>
          <NavGroup title="AI Features">
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => setIsAgentSkillOpen(true)}
            >
              <Bot className="mr-2 h-4 w-4" />
              Agent Skill
            </Button>
          </NavGroup>
          <NavGroup title="My work">
            <NavItem icon={Briefcase} label="Sales accelerator" />
            <NavItem icon={LayoutDashboard} label="Dashboards" />
            <NavItem icon={ClipboardList} label="Activities" />
          </NavGroup>

          <NavGroup title="Customers">
            <NavItem icon={Users} label="Accounts" />
            <NavItem icon={UserCircle} label="Contacts" />
          </NavGroup>

          <NavGroup title="Sales">
            <NavItem icon={Target} label="Leads" />
            <NavItem icon={BarChart2} label="Opportunities" />
            <NavItem icon={Users} label="Competitors" />
          </NavGroup>

          <NavGroup title="Collateral">
            <NavItem icon={FileText} label="Quotes" />
            <NavItem icon={ShoppingCart} label="Orders" />
            <NavItem icon={FileBox} label="Invoices" />
            <NavItem icon={Package} label="Products" />
            <NavItem icon={BookOpen} label="Sales Literature" />
          </NavGroup>

          <NavGroup title="Marketing">
            <NavItem icon={Mail} label="Marketing lists" />
            <NavItem icon={Mail} label="Quick Campaigns" />
          </NavGroup>

          <NavGroup title="Performance">
            <NavItem icon={BarChart2} label="Sales" isActive />
          </NavGroup>
        </div>
      </div>
      <AgentSkillModal
        isOpen={isAgentSkillOpen}
        onClose={() => setIsAgentSkillOpen(false)}
      />
    </>
  );
}
