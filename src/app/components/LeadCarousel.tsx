"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import LeadDialog from "./LeadDialog";

interface Lead {
  name: string;
  title: string;
  company: string;
  description: string;
  avatarUrl: string;
  action: string;
  tags: string[];
  dueDate?: string;
}

const leads: Lead[] = [
  {
    name: "Jane Reyes",
    title: "COO",
    company: "Northwind Traders",
    description:
      "Jane may be interested in upgrading espresso machines for her in-store coffee shops.",
    avatarUrl:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    action: "Engage with Jane Reyes",
    tags: ["Expand business", "High buying intent"],
  },
  {
    name: "Allan Munger",
    title: "Head of Real Estate Development",
    company: "Contoso Coffee",
    description:
      "Prepare for high-buying intent meeting Copilot scheduled for 2 PM regarding upgrading service contract.",
    avatarUrl:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    action: "Prepare for meeting with Allan",
    tags: ["Upcoming meeting"],
    dueDate: "Due today",
  },
  {
    name: "Daisy Phillips",
    title: "Procurement Manager",
    company: "Tailspin Toys",
    description:
      "Daisy has shown interest in our new line of eco-friendly packaging solutions.",
    avatarUrl:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    action: "Follow up with Daisy",
    tags: ["New product line", "Sustainability"],
  },
  {
    name: "Robert Chen",
    title: "Director of Operations",
    company: "Fabrikam, Inc.",
    description:
      "Robert is looking to streamline their supply chain management process.",
    avatarUrl:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    action: "Schedule demo with Robert",
    tags: ["Process optimization", "High potential"],
  },
  {
    name: "Megan Foster",
    title: "VP of Marketing",
    company: "Alpine Ski House",
    description:
      "Megan is interested in our data analytics tools for their upcoming winter campaign.",
    avatarUrl:
      "https://images.pexels.com/photos/764529/pexels-photo-764529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    action: "Send proposal to Megan",
    tags: ["Data analytics", "Seasonal campaign"],
  },
];

export function LeadCarousel() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [api, setApi] = useState<any>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const isAtStart = current === 0;
  const isAtEnd = current === count - 1;

  return (
    <div className="w-full">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {leads.map((lead, index) => (
            <CarouselItem
              key={index}
              className="cursor-pointer pl-2 md:pl-4 lg:basis-1/2"
            >
              <>
                <Card
                  onClick={() => {
                    setSelectedLead(lead);
                    setIsDialogOpen(true);
                  }}
                  className="border shadow-sm hover:shadow-md transition-shadow w-full"
                >
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage
                            className="object-cover"
                            src={lead.avatarUrl}
                            alt={lead.name}
                          />
                          <AvatarFallback>{lead.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{lead.name}</h4>
                          <p className="text-sm text-gray-500 min-h-[2.5rem]">
                            {lead.title} • {lead.company}
                          </p>
                        </div>
                      </div>

                      <div className="w-full rounded-md border p-3 justify-between group bg-blue-50">
                        <span className="font-medium text-base flex gap-1 items-center">
                          <Calendar className="-mt-1" size={16} /> {lead.action}
                        </span>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {lead.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 flex-wrap">
                        {lead.tags.map((tag, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="font-normal"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {lead.dueDate && (
                          <span className="text-sm text-gray-500 ml-auto">
                            {lead.dueDate}
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:flex items-center justify-between absolute top-1/2 left-8 right-8 -translate-y-1/2">
          <CarouselPrevious className={cn(isAtStart && "hidden")} />
          <CarouselNext className={cn(isAtEnd && "hidden")} />
        </div>
      </Carousel>
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: count }).map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className={cn(
              "w-2 h-2 rounded-full p-0",
              index === current
                ? "bg-blue-500 w-10 rounded-md"
                : "bg-primary/20"
            )}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      {selectedLead && (
        <LeadDialog
          isOpen={isDialogOpen}
          onClose={() => {
            setIsDialogOpen(false);
            setSelectedLead(null);
          }}
          lead={selectedLead}
        />
      )}
    </div>
  );
}
