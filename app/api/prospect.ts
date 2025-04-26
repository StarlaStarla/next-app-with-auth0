import { PaginationState } from '@tanstack/react-table'

export async function queryCandidates(pageParam?: PaginationState) {
  const paramUri = pageParam ? `?pageIndex=${pageParam?.pageIndex}&pageSize=${pageParam?.pageSize}` : ''
  const response = await fetch('https://nextjs14-mock-api.vercel.app/api/prospect' + paramUri, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return await response.json()
}
