"use client";

import * as React from "react";
import { ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface Lead {
  id: string;
  name: string;
  topic: string;
  status: string;
  createdAt: string;
}

const leads: Lead[] = [
  {
    id: "1",
    name: "Winford Asher",
    topic: "Cafe A100 for commercial use",
    status: "New",
    createdAt: "4/02/2024 12:00 PM",
  },
  {
    id: "2",
    name: "Josia Love",
    topic: "Upgrading service plan",
    status: "New",
    createdAt: "3/30/2024 7:45 AM",
  },
  {
    id: "3",
    name: "Harrison Curtis",
    topic: "Issue with throughput on EspressoMaster",
    status: "New",
    createdAt: "3/28/2024 3:30 PM",
  },
  {
    id: "4",
    name: "Jermaine Berrett",
    topic: "New roaster in distribution facility",
    status: "New",
    createdAt: "3/25/2024 11:05 AM",
  },
  {
    id: "5",
    name: "Gerald Stephens",
    topic: "Concerns on current machines",
    status: "New",
    createdAt: "3/23/2024 4:50 PM",
  },
  {
    id: "6",
    name: "Halle Griffiths",
    topic: "Expanding business",
    status: "New",
    createdAt: "3/21/2024 10:20 AM",
  },
  {
    id: "7",
    name: "Rachel Michael",
    topic: "Addressing service concerns",
    status: "New",
    createdAt: "3/19/2024 1:15 PM",
  },
  {
    id: "8",
    name: "Alex Baker",
    topic: "Premium coffee beans",
    status: "New",
    createdAt: "3/17/2024 8:00 AM",
  },
  {
    id: "9",
    name: "Lilly Pyles",
    topic: "Cafe A100 bulk rate",
    status: "New",
    createdAt: "3/13/2024 2:45 PM",
  },
  {
    id: "10",
    name: "Jane Reyes",
    topic: "Improving cost per cup",
    status: "New",
    createdAt: "3/10/2024 9:30 AM",
  },
];

type SortConfig = {
  key: keyof Lead;
  direction: "asc" | "desc";
} | null;

const LeadsTable = () => {
  const [selectedLeads, setSelectedLeads] = React.useState<Set<string>>(
    new Set()
  );
  const [sortConfig, setSortConfig] = React.useState<SortConfig>(null);
  const [searchQuery, setSearchQuery] = React.useState("");

  const sortedAndFilteredLeads = React.useMemo(() => {
    let filteredLeads = [...leads];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredLeads = filteredLeads.filter(
        (lead) =>
          lead.name.toLowerCase().includes(query) ||
          lead.topic.toLowerCase().includes(query) ||
          lead.status.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    if (sortConfig) {
      filteredLeads.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }

    return filteredLeads;
  }, [leads, sortConfig, searchQuery]);

  const handleSort = (key: keyof Lead) => {
    setSortConfig((current) => {
      if (current?.key === key) {
        if (current.direction === "asc") {
          return { key, direction: "desc" };
        }
        return null;
      }
      return { key, direction: "asc" };
    });
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedLeads(new Set(sortedAndFilteredLeads.map((lead) => lead.id)));
    } else {
      setSelectedLeads(new Set());
    }
  };

  const handleSelectLead = (leadId: string, checked: boolean) => {
    const newSelected = new Set(selectedLeads);
    if (checked) {
      newSelected.add(leadId);
    } else {
      newSelected.delete(leadId);
    }
    setSelectedLeads(newSelected);
  };

  const getSortIcon = (key: keyof Lead) => {
    if (sortConfig?.key !== key) {
      return <ChevronDown className="ml-2 h-4 w-4 text-gray-400" />;
    }
    return (
      <ChevronDown
        className={`ml-2 h-4 w-4 ${
          sortConfig.direction === "asc"
            ? "text-gray-900 rotate-180"
            : "text-gray-900"
        }`}
      />
    );
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        <Input
          placeholder="Sort, filter and search with Copilot"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-white"
        />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40px]">
                <Checkbox
                  checked={selectedLeads.size === sortedAndFilteredLeads.length}
                  onCheckedChange={handleSelectAll}
                  aria-label="Select all"
                />
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("name")}
                  className="flex items-center font-semibold"
                >
                  Name {getSortIcon("name")}
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("topic")}
                  className="flex items-center font-semibold"
                >
                  Topic {getSortIcon("topic")}
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("status")}
                  className="flex items-center font-semibold"
                >
                  Status reason {getSortIcon("status")}
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort("createdAt")}
                  className="flex items-center font-semibold"
                >
                  Created on {getSortIcon("createdAt")}
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedAndFilteredLeads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedLeads.has(lead.id)}
                    onCheckedChange={(checked) =>
                      handleSelectLead(lead.id, checked as boolean)
                    }
                    aria-label={`Select ${lead.name}`}
                  />
                </TableCell>
                <TableCell className="font-medium">{lead.name}</TableCell>
                <TableCell>{lead.topic}</TableCell>
                <TableCell>{lead.status}</TableCell>
                <TableCell>{lead.createdAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LeadsTable;
