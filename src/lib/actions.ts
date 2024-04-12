'use server'

import { LigaListInput } from '@/types/zod/ligaList'

export const ligaListAction = async (input: LigaListInput) => {
  const res = await fetch(`https://www.basketball-bund.net/rest/wam/data`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
    next: {
      revalidate: 900,
    },
  })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()

  return data
}
