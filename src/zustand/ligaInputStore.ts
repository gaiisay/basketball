import { create } from 'zustand'
import { StateStorage, createJSONStorage, persist } from 'zustand/middleware'
import { LigaInputStore } from '../types/ligaStore'
import { LigaListInput } from '../types/zod/ligaList'

export const defaultLigaListInput: LigaListInput = {
  token: 0,
  verbandIds: [],
  gebietIds: [],
  ligatypIds: [],
  akgGeschlechtIds: [],
  altersklasseIds: [],
  spielklasseIds: [],
}

const hashStorage: StateStorage = {
  getItem: (key) => {
    const searchParams = new URLSearchParams(location.hash.slice(1))
    const storedValue = searchParams.get(key) ?? ''
    return JSON.parse(storedValue)
  },
  setItem: (key, newValue) => {
    const searchParams = new URLSearchParams(location.hash.slice(1))
    searchParams.set(key, JSON.stringify(newValue))
    location.hash = searchParams.toString()
  },
  removeItem: (key) => {
    const searchParams = new URLSearchParams(location.hash.slice(1))
    searchParams.delete(key)
    location.hash = searchParams.toString()
  },
}

export const useLigaInputStore = create<LigaInputStore>()(
  persist(
    (set, get) => ({
      _hasHydrated: false,
      setHasHydrated: (state) => set({ _hasHydrated: state }),
      ligaListInput: defaultLigaListInput,
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
    }),
    {
      name: 'ligaInput',
      storage: createJSONStorage(() => hashStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true)
      },
    }
  )
)
