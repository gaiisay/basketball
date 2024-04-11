import { LigaListInput } from '@/zod/ligaList'
import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const ligaListInputAtom = atomWithStorage<LigaListInput>(
  'ligaList',
  {
    token: 0,
    verbandIds: [],
    gebietIds: [],
    ligatypIds: [],
    akgGeschlechtIds: [],
    altersklasseIds: [],
    spielklasseIds: [],
  },
  undefined,
  { getOnInit: true }
)

export const verbaendeInputAtom = atom(
  (get) => get(ligaListInputAtom).verbandIds,
  (get, set, update: number[]) => {
    set(ligaListInputAtom, { ...get(ligaListInputAtom), verbandIds: update })
  }
)

export const gebieteInputAtom = atom(
  (get) => get(ligaListInputAtom).gebietIds,
  (get, set, update: number[]) => {
    set(ligaListInputAtom, { ...get(ligaListInputAtom), gebietIds: update })
  }
)

export const ligatypenInputAtom = atom(
  (get) => get(ligaListInputAtom).ligatypIds,
  (get, set, update: number[]) => {
    set(ligaListInputAtom, { ...get(ligaListInputAtom), ligatypIds: update })
  }
)

export const geschlechterInputAtom = atom(
  (get) => get(ligaListInputAtom).akgGeschlechtIds,
  (get, set, update: number[]) => {
    set(ligaListInputAtom, {
      ...get(ligaListInputAtom),
      akgGeschlechtIds: update,
    })
  }
)

export const altersklassenInputAtom = atom(
  (get) => get(ligaListInputAtom).altersklasseIds,
  (get, set, update: number[]) => {
    set(ligaListInputAtom, {
      ...get(ligaListInputAtom),
      altersklasseIds: update,
    })
  }
)

export const spielklassenInputAtom = atom(
  (get) => get(ligaListInputAtom).spielklasseIds,
  (get, set, update: number[]) => {
    set(ligaListInputAtom, {
      ...get(ligaListInputAtom),
      spielklasseIds: update,
    })
  }
)
