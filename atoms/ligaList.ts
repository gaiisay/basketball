import { LigaList } from '@/zod/ligaList'
import { get } from 'http'
import { atom } from 'jotai'

export const ligaListAtom = atom<LigaList | undefined>(undefined)

export const getVerbaendeAtom = atom(
  (get) =>
    get(ligaListAtom)?.data.verbaende.map((verband) => ({
      label: verband.label,
      value: verband.id.toString(),
      hits: verband.hits,
    })) ?? []
)

export const getGebieteAtom = atom((get) => {
  const gebiete =
    get(ligaListAtom)?.data.gebiete.map((gebiet) => ({
      label: gebiet.bezirk ?? 'Unbekannt',
      value: gebiet.id.toString(),
      hits: gebiet.hits,
    })) ?? []

  if (gebiete.length > 1) {
    gebiete[0].label = 'Verbandsligen'
  }
  return gebiete
})

export const getLigatypenAtom = atom(
  (get) =>
    get(ligaListAtom)?.data.ligatypen.map((ligatyp) => ({
      label: ligatyp.label,
      value: ligatyp.id.toString(),
      hits: ligatyp.hits,
    })) ?? []
)

export const getGeschlechterAtom = atom(
  (get) =>
    get(ligaListAtom)?.data.agkGeschlechtList.map((geschlecht) => ({
      label: geschlecht.akg + ' ' + geschlecht.geschlecht,
      value: geschlecht.id.toString(),
      hits: geschlecht.hits,
    })) ?? []
)

export const getAltersklassenAtom = atom(
  (get) =>
    get(ligaListAtom)?.data.altersklassen.map((ak) => ({
      label: ak.label,
      value: ak.id.toString(),
      hits: ak.hits,
    })) ?? []
)

export const getSpielklassenAtom = atom(
  (get) =>
    get(ligaListAtom)?.data.spielklassen.map((sk) => ({
      label: sk.label,
      value: sk.id.toString(),
      hits: sk.hits,
    })) ?? []
)
