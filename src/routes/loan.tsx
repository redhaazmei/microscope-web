import React from 'react'
import { createFileRoute, useRouter } from '@tanstack/react-router'
import * as Slider from '@radix-ui/react-slider'
import ky from 'ky'
import { LoaderCircle } from 'lucide-react'

export const Route = createFileRoute('/loan')({
  component: RouteComponent,
})

function RouteComponent() {
  const router = useRouter()
  const [amount, setAmount] = React.useState([20000])
  const [reason, setReason] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true)
    e.preventDefault()
    const res = await ky
      .post(`${import.meta.env.VITE_BASE_URL}/business/loan/matching/`, {
        json: {
          username: 'realbarbershopkajang',
          amount: `RM${amount}`,
          tenure: '10 Years',
          reason: reason,
        },
      })
      .json()
    console.log(res)
    setIsLoading(false)
    router.navigate({
      to: '/recommendation',
      state: {
        data: res,
      },
    })
  }
  return (
    <section className="bg-white px-6">
      <div className="pt-11 pb-6 px-6">
        <h6 className="text-center text-lg font-bold text-neutral-900">
          Financing
        </h6>
      </div>
      <div className="mb-12">
        <h3 className="text-h3 text-neutral-900 mb-2">
          Your AI Guide to Perfect Business Funding
        </h3>
        <p className="text-md font-medium text-neutral-500">
          Make confident borrowing decisions with data-driven insights that help
          you understand exactly why each loan option is recommended for your
          unique situation.
        </p>
      </div>
      <h2 className="text-h2 text-center text-neutral-900">
        RM{amount.toLocaleString()}
      </h2>
      <form className="mt-4" onSubmit={handleSubmit}>
        <Slider.Root
          className="relative flex items-center select-none touch-none h-5 w-full"
          defaultValue={[20000]}
          min={20000}
          max={200000}
          step={1000}
          onValueChange={(val) => setAmount(val)}
        >
          <Slider.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-neutral-200">
            <Slider.Range className="absolute h-full bg-secondary-500" />
          </Slider.Track>
          <Slider.Thumb className="block h-5 w-5 rounded-full border-2 border-primary-500 bg-neutral-900" />
        </Slider.Root>
        <div className="flex flex-col my-8">
          <label
            htmlFor="reason"
            className="text-lg font-medium text-neutral-500 mb-3"
          >
            Reason
          </label>
          <input
            id="reason"
            name="reason"
            type="text"
            className="text-lg font-medium text-neutral-900 p-4 outline outline-neutral-900 rounded-xl"
            onChange={(e) => setReason(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-primary-500 w-full py-3.5 rounded-xl text-lg font-bold text-neutral-900 mt-36 grid place-items-center"
        >
          {isLoading ? <LoaderCircle className="animate-spin" /> : 'Submit'}
        </button>
      </form>
    </section>
  )
}

// .SliderRoot {
// 	position: relative;
// 	display: flex;
// 	align-items: center;
// 	user-select: none;
// 	touch-action: none;
// 	width: 200px;
// 	height: 20px;
// }

// .SliderTrack {
// 	background-color: var(--black-a10);
// 	position: relative;
// 	flex-grow: 1;
// 	border-radius: 9999px;
// 	height: 3px;
// }

// .SliderRange {
// 	position: absolute;
// 	background-color: white;
// 	border-radius: 9999px;
// 	height: 100%;
// }

// .SliderThumb {
// 	display: block;
// 	width: 20px;
// 	height: 20px;
// 	background-color: white;
// 	box-shadow: 0 2px 10px var(--black-a7);
// 	border-radius: 10px;
// }
// .SliderThumb:hover {
// 	background-color: var(--violet-3);
// }
// .SliderThumb:focus {
// 	outline: none;
// 	box-shadow: 0 0 0 5px var(--black-a8);
// }
