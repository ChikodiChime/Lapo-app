

import { StatCard as StatCardComponent } from "@/components/blocks/StatCard";
import QuickAccessCard from "@/components/blocks/QuickAccessCard";

import { CalendarIcon, CardCheckIcon, CardPenIcon, CardPlusIcon, CardsIcon, HourglassIcon, ManageIcon, MoneyIcon } from "@/components/icons";

import { ChartModal } from "@/components/blocks/ChartModal";
import { lazy } from "react";

const MonthlyIssuanceChart = lazy(() => import("@/components/blocks/MonthlyIssuanceChart"));
const CardStatusDistribution = lazy(() => import("@/components/blocks/CardStatusDistribution"));
const RecentRequests = lazy(() => import("@/components/blocks/RecentRequests"));
const WeeklyIncomeChart = lazy(() => import("@/components/blocks/WeeklyIncomeChart"));



export default function Page() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
        <div className="">
           <h2 className="text-lg font-bold">
          Hi Nazeer, what would you like to do today?
        </h2>
        <span className="text-xs">
          <span className="font-medium ">Last login: </span>26/11/2024 14:39:58
        </span>
        </div>
       
       <div className="flex items-center justify-start w-fit border text-[11px] gap-4 border-[#D0D5DD] rounded px-4 py-2">
        <div className="flex items-center gap-2 border-r pr-4">
          <CalendarIcon className="w-5 h-5"/>
          <span className="font-medium">Today</span>
        </div>
               <span className="whitespace-nowrap"> {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>   

       </div>
      </div>

      <section className="mb-5 bg-white rounded-lg border p-5">
        <h2 className="text-lg font-medium mb-4">Your Quick Access</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <QuickAccessCard
            title="Manage a Card"
            icon={<ManageIcon className="h-5 w-5 text-white" />}
            href="/manage-card"
          />
          <QuickAccessCard
            title="Issue Instant Card"
            icon={<CardsIcon className="h-5 w-5 text-white" />}
            href="/issue-instant-card"
          />
          <QuickAccessCard
            title="Issue Personalized Card"
            icon={<CardPenIcon className="h-5 w-5 text-white" />}
            href="/issue-personalized-card"
          />
          <QuickAccessCard
            title="Review Card Requests"
            icon={<CardPlusIcon className="h-5 w-5 text-white" />}
            href="/review-requests"
          />
        </div>
      </section>

      {/* Analytics Section */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-5 gap-4">
          <h2 className="text-lg font-bold">Analytics</h2>
          <div className="h-[0.38px] bg-[#D0D5DD] w-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCardComponent
            title="Total Active Cards"
            value="26,478"
            trend={{ value: "+ 9%", positive: true }}
            icon={<CardCheckIcon className="h-5 w-5  text-green-600" />}
            iconColor="text-green-600"
            range="this month"
          />
          <StatCardComponent
            title="Total Personalized Cards"
            value="12,487"
            trend={{ value: "8.5%", positive: true }}
            icon={<CardPenIcon className="h-5 w-5 text-purple-600" />}
            iconColor="text-purple-600"
            range="this month"
          />
          <StatCardComponent
            title="Today's Revenue"
            value="₦5.6M"
            trend={{ value: "4%", positive: true }}
            icon={<MoneyIcon className="h-5 w-5 text-blue-600" />}
            iconColor="text-blue-600"
            range="vs yesterday"
          />
          <StatCardComponent
            title="Pending Requests"
            value="38"
            icon={<HourglassIcon className="h-5 w-5 text-orange-600" />}
            iconColor="text-orange-600"
            required="Requires attention"
          />
        </div>
      </section>

      {/* Monthly Issuance & Recent Requests Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-3">
        <section className="bg-white p-4 rounded-lg border">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-[#121212]">
              Monthly Issuance
            </h2>
            <button className="text-[#D0D5DD] hover:text-gray-600">
            </button>
            <ChartModal title="Monthly Issuance">
              <MonthlyIssuanceChart
                data={[
                  { name: "May", personalized: 10, instant: 52 },
                  { name: "Jun", personalized: 20, instant: 70 },
                  { name: "Jul", personalized: 7, instant: 32 },
                  { name: "Aug", personalized: 8, instant: 58 },
                  { name: "Sep", personalized: 10, instant: 48 },
                  { name: "Oct", personalized: 18, instant: 80 },
                  { name: "Nov", personalized: 10, instant: 72 },
                ]}
              />
            </ChartModal>

          </div>
          <MonthlyIssuanceChart
            data={[
              { name: "May", personalized: 10, instant: 52 },
              { name: "Jun", personalized: 20, instant: 70 },
              { name: "Jul", personalized: 7, instant: 32 },
              { name: "Aug", personalized: 8, instant: 58 },
              { name: "Sep", personalized: 10, instant: 48 },
              { name: "Oct", personalized: 18, instant: 80 },
              { name: "Nov", personalized: 10, instant: 72 },
            ]}
          />
        </section>

        <section className="bg-white p-4 rounded-lg border h-fit">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-[#121212]">
              Recent Card Requests
            </h2>
            <button className="text-[#D0D5DD] hover:text-gray-600">
            </button>
            <ChartModal title="Recent Card Requests">
              <RecentRequests
                requests={[
                  {
                    branch: "Corporate",
                    type: "Instant",
                    quantity: "10",
                    status: "Ready",
                  },
                  {
                    branch: "Ikeja",
                    type: "Personalized",
                    quantity: "15",
                    status: "In Progress",
                  },
                  {
                    branch: "Victoria Island",
                    type: "Personalized",
                    quantity: "8",
                    status: "Acknowledged",
                  },
                  {
                    branch: "Lekki",
                    type: "Instant",
                    quantity: "12",
                    status: "Pending",
                  },
                  {
                    branch: "Abuja",
                    type: "Personalized",
                    quantity: "20",
                    status: "Ready",
                  },
                  {
                    branch: "Port Harcourt",
                    type: "Instant",
                    quantity: "5",
                    status: "In Progress",
                  },
                ]}
              />
            </ChartModal>
          </div>
          <RecentRequests
            requests={[
              {
                branch: "Corporate",
                type: "Instant",
                quantity: "10",
                status: "Ready",
              },
              {
                branch: "Ikeja",
                type: "Personalized",
                quantity: "15",
                status: "In Progress",
              },
              {
                branch: "Victoria Island",
                type: "Personalized",
                quantity: "8",
                status: "Acknowledged",
              },
              {
                branch: "Lekki",
                type: "Instant",
                quantity: "12",
                status: "Pending",
              },
              {
                branch: "Abuja",
                type: "Personalized",
                quantity: "20",
                status: "Ready",
              },
            ]}
          />
        </section>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-8">
        <section className="bg-white rounded-lg border">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-lg font-medium">This Week&apos;s Income</h2>
            <ChartModal title="This Week&apos;s Income">
              <WeeklyIncomeChart
                data={[
                  { name: "Mon", value: 50 },
                  { name: "Tue", value: 12 },
                  { name: "Wed", value: 48 },
                  { name: "Thu", value: 30 },
                  { name: "Fri", value: 60 },
                  { name: "Sat", value: 20 },
                  { name: "Sun", value: 80 },
                ]}
              />
            </ChartModal>
          </div>
          <WeeklyIncomeChart
            data={[
              { name: "Mon", value: 50 },
              { name: "Tue", value: 12 },
              { name: "Wed", value: 48 },
              { name: "Thu", value: 30 },
              { name: "Fri", value: 60 },
              { name: "Sat", value: 20 },
              { name: "Sun", value: 80 },
            ]}
          />
        </section>

        <section className="bg-white rounded-lg border lg:-mt-[61px]">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-lg font-medium">Card Status Distribution</h2>
            <ChartModal title="Card Status Distribution">
              <CardStatusDistribution />
            </ChartModal>
          </div>
          <CardStatusDistribution />
        </section>
      </div>
    </div>
  );
}