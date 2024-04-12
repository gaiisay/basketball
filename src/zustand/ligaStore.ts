import { create } from 'zustand'
import { LigaStore } from '../types/ligaStore'
import { LigaList } from '../types/zod/ligaList'

export const useLigaStore = create<LigaStore>((set, get) => ({
  ligaList: undefined,
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
}))
