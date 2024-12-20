"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import DashboardCard from "./DashboardCard";

const lineData = [
  { month: "Jan", value: 1200 },
  { month: "Feb", value: 1900 },
  { month: "Mar", value: 1500 },
  { month: "Apr", value: 2400 },
  { month: "May", value: 2800 },
  { month: "Jun", value: 3200 },
];

const data = [
  { month: "Jan", total: 2800 },
  { month: "Feb", total: 3000 },
  { month: "Mar", total: 5000 },
  { month: "Apr", total: 1500 },
  { month: "May", total: 4000 },
  { month: "Jun", total: 3200 },
  { month: "Jul", total: 1500 },
  { month: "Aug", total: 1500 },
  { month: "Sep", total: 1500 },
  { month: "Oct", total: 2000 },
  { month: "Nov", total: 3000 },
  { month: "Dec", total: 4000 },
];
const ChartsView = () => {
  return (
    <div className="space-y-4 p-3">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Total Revenue"
          value="$45,231.89"
          change="+20.1% from last month"
          changeType="increase"
          icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
        />
        <DashboardCard
          title="Subscriptions"
          value="+2,350"
          change="+180.1% from last month"
          changeType="increase"
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
        />
        <DashboardCard
          title="Sales"
          value="+12,234"
          change="+19% from last month"
          changeType="increase"
          icon={<CreditCard className="h-4 w-4 text-muted-foreground" />}
        />
        <DashboardCard
          title="Active Now"
          value="+573"
          change="+201 since last hour"
          changeType="increase"
          icon={<Activity className="h-4 w-4 text-muted-foreground" />}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={data}>
                <XAxis
                  dataKey="month"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value}`}
                />
                <Bar
                  dataKey="total"
                  fill="currentColor"
                  radius={[4, 4, 0, 0]}
                  className="text-blue-800"
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Monthly Revenue Trend</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="10 0" />
                <XAxis
                  dataKey="month"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#8884d8"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        {/* <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentSales />
          </CardContent>
        </Card> */}
      </div>
    </div>
  );
};

export default ChartsView;
