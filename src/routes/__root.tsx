import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { ChartColumnBig, Home, Landmark, Mic } from 'lucide-react'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <div className="grid place-items-center h-screen">
        <div className="bg-white max-w-[393px] w-full h-full relative pb-[98px]">
          <Outlet />
          <nav className="bg-white w-full h-[98px] flex items-center justify-around fixed bottom-0 px-5">
            <Link
              to="/"
              className="text-neutral-400"
              activeProps={{
                className: 'text-neutral-900',
              }}
            >
              <button className="flex flex-col items-center">
                <ChartColumnBig />
                <span className="text-sm font-bold">Insights</span>
              </button>
            </Link>
            <Link
              to="/loan"
              className="text-neutral-400"
              activeProps={{
                className: 'text-neutral-900',
              }}
            >
              <button className="flex flex-col items-center">
                <Landmark />
                <span className="text-sm font-bold">Loan</span>
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}

function Nav() {
  return (
    <Link
      className="text-neutral-400"
      activeProps={{
        className: 'text-neutral-900',
      }}
    >
      <button className="flex flex-col items-center">
        <Home />
        <span className="text-sm font-bold">Home</span>
      </button>
    </Link>
  )
}
