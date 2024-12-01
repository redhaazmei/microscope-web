import { createFileRoute } from '@tanstack/react-router'
import { Instagram } from 'lucide-react'
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'
import { fetchSocial } from '../fetch'

export const Route = createFileRoute('/')({
  loader: async () => fetchSocial(),
  component: RouteComponent,
})

const data = [
  {
    month: 'Jun',
    revenue: 3700,
    expenses: 1700,
    net_profit: 2000,
    date: '2024-06-25',
  },
  {
    month: 'Jul',
    revenue: 5500,
    expenses: 2200,
    net_profit: 3300,
    date: '2024-07-25',
  },
  {
    month: 'Aug',
    revenue: 4700,
    expenses: 2500,
    net_profit: 2200,
    date: '2024-08-25',
  },
  {
    month: 'Sept',
    revenue: 7500,
    expenses: 3400,
    net_profit: 4100,
    date: '2024-09-25',
  },
  {
    month: 'Oct',
    revenue: 6000,
    expenses: 2700,
    net_profit: 3300,
    date: '2024-10-25',
  },
  {
    month: 'Nov',
    revenue: 4800,
    expenses: 2000,
    net_profit: 2800,
    date: '2024-11-25',
  },
]

function RouteComponent() {
  const social = Route.useLoaderData()
  return (
    <section className="bg-white px-6">
      <div className="pt-11 pb-6 px-6">
        <h6 className="text-center text-lg font-bold text-neutral-900">
          Insights
        </h6>
      </div>
      <div className="bg-secondary-500 rounded-xl py-4">
        <div className="pb-12 px-5">
          <span className="text-sm font-medium text-secondary-300">
            Total Revenue YTD
          </span>
          <h3 className="text-h3 text-white">
            RM
            {data
              .reduce((sum, item) => sum + item.revenue, 0)
              .toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
          </h3>
        </div>
        <div className="grid place-items-center">
          <BarChart width={320} height={250} data={data}>
            <XAxis
              dataKey="month"
              stroke="#BDB5FF"
              tick={{
                fill: '#BDB5FF',
                fontSize: 12,
                fontWeight: 'medium',
              }}
            />
            <Bar
              dataKey="revenue"
              fill={'#D2F801'}
              label={{ fill: '#BDB5FF', fontSize: 12, position: 'top' }}
              radius={8}
            />
          </BarChart>
        </div>
      </div>
      <div className="pt-6">
        <h6 className="text-h6">Digital Presence Score</h6>
        <div className="py-4">
          <div className="p-3 border border-neutral-200 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-100 grid place-items-center">
                <Instagram />
              </div>
              <div>
                <p className="text-md font-bold">Instagram</p>
                <p className="text-sm font-medium text-neutral-500">
                  9002 followers
                </p>
              </div>
            </div>
            <p className="text-md font-medium">Score of {social.score}</p>
          </div>
          <div className="my-6 p-3 border border-neutral-200 rounded-xl">
            <p className="text-lg font-medium pb-4">Summary</p>
            <p className="text-sm font-medium text-neutral-500">
              {social.insights}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
