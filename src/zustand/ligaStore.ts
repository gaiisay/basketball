import { create } from 'zustand'
import { LigaList, LigaListInput } from '../zod/ligaList'

export type LigaState = {
  ligaListInput: LigaListInput
  ligaList?: LigaList
}

export type LigaActions = {
  setLigaListInput: (input: LigaListInput) => void
  setLigaList: (data: LigaList) => void
  getGebiete: () => { label: string; value: string; hits: number }[]
  getVerbaende: () => { label: string; value: string; hits: number }[]
  getLigatypen: () => { label: string; value: string; hits: number }[]
  getGeschlechter: () => { label: string; value: string; hits: number }[]
  getAltersklassen: () => { label: string; value: string; hits: number }[]
  getSpielklassen: () => { label: string; value: string; hits: number }[]
  setVerbaendeInput: (input: number[]) => void
  setGebieteInput: (input: number[]) => void
  setLigatypenInput: (input: number[]) => void
  setGeschlechterInput: (input: number[]) => void
  setAltersklassenInput: (input: number[]) => void
  setSpielklassenInput: (input: number[]) => void
}

export type LigaStore = LigaState & LigaActions

export const defaultLigaListInput: LigaListInput = {
  token: 0,
  verbandIds: [],
  gebietIds: [],
  ligatypIds: [],
  akgGeschlechtIds: [],
  altersklasseIds: [],
  spielklasseIds: [],
}

export const useLigaStore = create<LigaStore>((set, get) => ({
  ligaList: undefined,
  ligaListInput: defaultLigaListInput,
  setLigaList: (data: LigaList) => set({ ligaList: data }),
  getGebiete: () => {
    return (
      get().ligaList?.data.gebiete.map((gebiet) => ({
        label: gebiet.bezirk ?? 'Unbekannt',
        value: gebiet.id.toString(),
        hits: gebiet.hits,
      })) ?? []
    )
  },
  getVerbaende: () => {
    return (
      get().ligaList?.data.verbaende.map((verband) => ({
        label: verband.label,
        value: verband.id.toString(),
        hits: verband.hits,
      })) ?? []
    )
  },
  getLigatypen: () => {
    return (
      get().ligaList?.data.ligatypen.map((ligatyp) => ({
        label: ligatyp.label,
        value: ligatyp.id.toString(),
        hits: ligatyp.hits,
      })) ?? []
    )
  },
  getGeschlechter: () => {
    return (
      get().ligaList?.data.agkGeschlechtList.map((geschlecht) => ({
        label: geschlecht.akg + ' ' + geschlecht.geschlecht,
        value: geschlecht.id.toString(),
        hits: geschlecht.hits,
      })) ?? []
    )
  },
  getAltersklassen: () => {
    return (
      get().ligaList?.data.altersklassen.map((ak) => ({
        label: ak.label,
        value: ak.id.toString(),
        hits: ak.hits,
      })) ?? []
    )
  },
  getSpielklassen: () => {
    const gebiete =
      get().ligaList?.data.gebiete.map((gebiet) => ({
        label: gebiet.bezirk ?? 'Unbekannt',
        value: gebiet.id.toString(),
        hits: gebiet.hits,
      })) ?? []

    if (gebiete.length > 1) {
      gebiete[0].label = 'Verbandsligen'
    }
    return gebiete
  },
  setVerbaendeInput: (input: number[]) => {
    const currentInput = get().ligaListInput
    set({ ligaListInput: { ...currentInput, verbandIds: input } })
  },
  setGebieteInput: (input: number[]) => {
    const currentInput = get().ligaListInput
    set({ ligaListInput: { ...currentInput, gebietIds: input } })
  },
  setLigatypenInput: (input: number[]) => {
    const currentInput = get().ligaListInput
    set({ ligaListInput: { ...currentInput, ligatypIds: input } })
  },
  setGeschlechterInput: (input: number[]) => {
    const currentInput = get().ligaListInput
    set({ ligaListInput: { ...currentInput, akgGeschlechtIds: input } })
  },
  setAltersklassenInput: (input: number[]) => {
    const currentInput = get().ligaListInput
    set({ ligaListInput: { ...currentInput, altersklasseIds: input } })
  },
  setSpielklassenInput: (input: number[]) => {
    const currentInput = get().ligaListInput
    set({ ligaListInput: { ...currentInput, spielklasseIds: input } })
  },
  setLigaListInput: (input) => set({ ligaListInput: input }),
}))
