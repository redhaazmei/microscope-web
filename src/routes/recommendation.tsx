import {
  createFileRoute,
  useLocation,
  useParams,
  useRouterState,
  useSearch,
} from '@tanstack/react-router'
import { Landmark } from 'lucide-react'

export const Route = createFileRoute('/recommendation')({
  component: RouteComponent,
})

function RouteComponent() {
  const state = useRouterState({ select: (s) => s.location.state })
  console.log(state.data)
  return (
    <section className="bg-white px-6">
      <div className="pt-11 pb-6 px-6">
        <h6 className="text-center text-lg font-bold text-neutral-900">
          Loan Recommendations
        </h6>
      </div>
      <div className="flex flex-col gap-4">
        {state.data.map((d) => (
          <div
            key={d['Product_Code']}
            className="p-3 border border-neutral-200 rounded-xl flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-100 grid place-items-center">
                <Landmark />
              </div>
              <div>
                <p className="text-md font-bold">{d['Product_Name']}</p>
                <p className="text-sm font-medium text-neutral-500">
                  {d['Bank_Name']}
                </p>
                <p className="text-sm font-medium text-neutral-500">
                  {d['Financing_Size']}
                </p>
                <p className="text-sm font-medium text-neutral-500">
                  {d['Financing_Rate_(Per_Annum)1']}
                </p>
                <p className="text-sm font-medium text-neutral-500">
                  {d['Purpose_of_Financing']}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
