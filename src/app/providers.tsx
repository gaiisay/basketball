// 'use client'

// import { createContext, useContext, useRef, type ReactNode } from 'react'
// import { useStore, type StoreApi } from 'zustand'
// import { LigaStore, createLigaStore } from '../zustand/ligaStore'

// export const LigaStoreContext = createContext<StoreApi<LigaStore> | null>(null)

// export type LigaStoreProviderProps = {
//   children: ReactNode
// }

// export const LigaStoreProvider = ({ children }: LigaStoreProviderProps) => {
//   const storeRef = useRef<StoreApi<LigaStore>>()
//   if (!storeRef.current) {
//     storeRef.current = createLigaStore()
//   }

//   return (
//     <LigaStoreContext.Provider value={storeRef.current}>
//       {children}
//     </LigaStoreContext.Provider>
//   )
// }

// export const useLigaStore = <T,>(selector: (store: LigaStore) => T): T => {
//   const ligaStoreContext = useContext(LigaStoreContext)

//   if (!LigaStoreContext) {
//     throw new Error(`useLigaStore must be use within LigaStoreProvider`)
//   }

//   return useStore(ligaStoreContext, selector)
// }
