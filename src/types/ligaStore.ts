import { LigaList, LigaListInput } from './zod/ligaList'

export type LigaState = {
  ligaList?: LigaList
}

export type LigaActions = {
  setLigaList: (data: LigaList) => void
  getGebiete: () => { label: string; value: string; hits: number }[]
  getVerbaende: () => { label: string; value: string; hits: number }[]
  getLigatypen: () => { label: string; value: string; hits: number }[]
  getGeschlechter: () => { label: string; value: string; hits: number }[]
  getAltersklassen: () => { label: string; value: string; hits: number }[]
  getSpielklassen: () => { label: string; value: string; hits: number }[]
}

export type LigaStore = LigaState & LigaActions

export type LigaInputState = {
  _hasHydrated: boolean
  ligaListInput: LigaListInput
}

export type LigaInputActions = {
  setHasHydrated: (value: boolean) => void
  setLigaListInput: (input: LigaListInput) => void
  setVerbaendeInput: (input: number[]) => void
  setGebieteInput: (input: number[]) => void
  setLigatypenInput: (input: number[]) => void
  setGeschlechterInput: (input: number[]) => void
  setAltersklassenInput: (input: number[]) => void
  setSpielklassenInput: (input: number[]) => void
}

export type LigaInputStore = LigaInputState & LigaInputActions
