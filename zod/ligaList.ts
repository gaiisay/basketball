import { z } from 'zod'

export const ligaList = z.object({
  timestamp: z.string(),
  status: z.string(),
  message: z.string(),
  data: z.object({
    wam: z.object({
      token: z.string(),
      verbandIds: z.array(z.unknown()),
      gebietIds: z.array(z.unknown()),
      ligatypIds: z.array(z.unknown()),
      akgGeschlechtIds: z.array(z.unknown()),
      altersklasseIds: z.array(z.unknown()),
      spielklasseIds: z.array(z.unknown()),
      sortBy: z.number(),
    }),
    verbaende: z.array(
      z.object({ id: z.number(), label: z.string(), hits: z.number() })
    ),
    gebiete: z.array(
      z.union([
        z.object({
          id: z.string(),
          bezirk: z.null(),
          kreis: z.null(),
          hits: z.number(),
        }),
        z.object({
          id: z.string(),
          bezirk: z.string(),
          kreis: z.null(),
          hits: z.number(),
        }),
        z.object({
          id: z.string(),
          bezirk: z.string(),
          kreis: z.string(),
          hits: z.number(),
        }),
      ])
    ),
    ligatypen: z.array(
      z.object({ id: z.number(), label: z.string(), hits: z.number() })
    ),
    agkGeschlechtList: z.array(
      z.object({
        id: z.string(),
        akg: z.string(),
        geschlecht: z.string(),
        hits: z.number(),
      })
    ),
    altersklassen: z.array(
      z.object({ id: z.number(), label: z.string(), hits: z.number() })
    ),
    spielklassen: z.array(
      z.object({ id: z.number(), label: z.string(), hits: z.number() })
    ),
    ligaListe: z.object({
      startAtIndex: z.number(),
      ligen: z.array(
        z.object({
          seasonId: z.null(),
          seasonName: z.null(),
          actualMatchDay: z.null(),
          ligaId: z.number(),
          liganame: z.string(),
          liganr: z.number(),
          skName: z.string(),
          skNameSmall: z.string(),
          skEbeneId: z.number(),
          skEbeneName: z.string(),
          akName: z.string(),
          geschlechtId: z.number(),
          geschlecht: z.string(),
          verbandId: z.number(),
          verbandName: z.string(),
          bezirknr: z.null(),
          bezirkName: z.null(),
          kreisnr: z.null(),
          kreisname: z.null(),
          statisticType: z.null(),
          vorabliga: z.boolean(),
          tableExists: z.null(),
          crossTableExists: z.null(),
        })
      ),
      hasMoreData: z.boolean(),
      size: z.number(),
    }),
  }),
  version: z.string(),
  dateFormat: z.string(),
  timeFormat: z.string(),
  timeFormatShort: z.string(),
  serverInstance: z.string(),
  username: z.null(),
  appContext: z.string(),
})

export const ligaListInput = z.object({
  token: z.number(),
  verbandIds: z.array(z.number()),
  gebietIds: z.array(z.number()),
  ligatypIds: z.array(z.number()),
  akgGeschlechtIds: z.array(z.number()),
  altersklasseIds: z.array(z.number()),
  spielklasseIds: z.array(z.number()),
})

export type LigaList = z.infer<typeof ligaList>

export type LigaListInput = z.infer<typeof ligaListInput>
