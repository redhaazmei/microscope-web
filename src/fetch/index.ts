import { notFound } from '@tanstack/react-router'
import ky from 'ky'

type ResponseRevenue = {
  mtd_revenue: number
  percentage_change_from_last_month: number
}

type ResponseExpenses = {
  mtd_expenses: number
  percentage_change_from_last_month: number
}

type ResponseProfit = {
  mtd_net_profit: number
  percentage_change_from_last_month: number
}

type ResponseSocial = {
  score: number
  insights: string
}

export const fetchRevenue = async () => {
  const json = await ky
    .get(`${import.meta.env.VITE_BASE_URL}/home/revenue-mtd/`)
    .json<ResponseRevenue>()
  return json
}

export const fetchExpenses = async () => {
  const json = await ky
    .get(`${import.meta.env.VITE_BASE_URL}/home/expenses-mtd/`)
    .json<ResponseExpenses>()
  return json
}

export const fetchProfit = async () => {
  const json = await ky
    .get(`${import.meta.env.VITE_BASE_URL}/home/profit-mtd/`)
    .json<ResponseProfit>()
  return json
}

export const fetchSocial = async () => {
  const json = await ky
    .get(`${import.meta.env.VITE_BASE_URL}/credit-score/social-media/`)
    .json<ResponseSocial>()
  return json
}

// export const fetchPost = async (postId: string) => {
//   console.info(`Fetching post with id ${postId}...`)
//   await new Promise((r) => setTimeout(r, 500))
//   const post = await axios
//     .get<PostType>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//     .then((r) => r.data)
//     .catch((err) => {
//       if (err.status === 404) {
//         throw notFound()
//       }
//       throw err
//     })

//   return post
// }

// export const fetchPosts = async () => {
//   console.info('Fetching posts...')
//   await new Promise((r) => setTimeout(r, 500))
//   return axios
//     .get<Array<PostType>>('https://jsonplaceholder.typicode.com/posts')
//     .then((r) => r.data.slice(0, 10))
// }
