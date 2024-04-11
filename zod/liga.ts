import { z } from 'zod'

export const Liga = z.object({
  id: z.number(),
  liganame: z.string(),
  verband: z.string(),
  akgGeschlecht: z.string(),
  altersklasse: z.string(),
  spielklasse: z.string(),
})

export type Liga = z.infer<typeof Liga>
