"use client";

import { Button } from "@/components/ui/button";
import {
  BarChart,
  LayoutGrid,
  Plus,
  RefreshCw,
  Users,
  Trash2,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ActionBarProps {
  onToggleCharts: () => void;
  showCharts: boolean;
}

const NavBar = ({ onToggleCharts, showCharts }: ActionBarProps) => {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-2 p-2 bg-white border shadow-lg rounded-md">
        <div className="flex-1 shrink-0">
          <h2 className="text-base font-semibold ">My open leads</h2>
        </div>
        <div className="flex items-center gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="px-2"
                variant={showCharts ? "secondary" : "ghost"}
                size="sm"
                onClick={onToggleCharts}
              >
                <BarChart className="h-4 w-4 text-blue-800" />
                Show chart
              </Button>
            </TooltipTrigger>
            <TooltipContent>Toggle chart view</TooltipContent>
          </Tooltip>

          <div className="hidden lg:block flex items-center gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="px-2" variant="ghost" size="sm">
                  <LayoutGrid className="h-4 w-4 text-blue-800 " />
                  Focused view
                </Button>
              </TooltipTrigger>
              <TooltipContent>Switch to focused view</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="px-2" variant="ghost" size="sm">
                  <Plus className="h-4 w-4 text-blue-800 " />
                  New
                </Button>
              </TooltipTrigger>
              <TooltipContent>Create new lead</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="px-2" variant="ghost" size="sm">
                  <RefreshCw className="h-4 w-4 text-blue-800 " />
                  Refresh
                </Button>
              </TooltipTrigger>
              <TooltipContent>Refresh data</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="px-2" variant="ghost" size="sm">
                  <Users className="h-4 w-4 text-blue-800 " />
                  Collaborate
                </Button>
              </TooltipTrigger>
              <TooltipContent>Share and collaborate</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="px-2" variant="ghost" size="sm">
                  <Trash2 className="h-4 w-4 text-red-800 " />
                  Delete
                </Button>
              </TooltipTrigger>
              <TooltipContent>Delete selected</TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default NavBar;
