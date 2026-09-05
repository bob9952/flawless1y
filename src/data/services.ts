import { Armchair, CarFront, Grid2X2, LampFloor, type LucideIcon } from "lucide-react"

export type Service = {
  title: string
  description: string
  price: string
  icon: LucideIcon
  accent: string
}

export const services: Service[] = [
  {
    title: "Trosedi i garniture",
    description: "Dubinsko pranje tapaciranih troseda, dvoseda i garnitura različitih dimenzija.",
    price: "od 2.300 RSD",
    icon: Armchair,
    accent: "bg-[#e6f3ff]",
  },
  {
    title: "Automobili",
    description: "Pranje sedišta, patosnica, gepeka i drugih tapaciranih površina u vozilu.",
    price: "Cena po dogovoru",
    icon: CarFront,
    accent: "bg-[#dcecff]",
  },
  {
    title: "Dušeci",
    description: "Dubinsko pranje singl i bračnih dušeka, kreveta i naddušeka.",
    price: "od 1.500 RSD",
    icon: Grid2X2,
    accent: "bg-[#eef6ff]",
  },
  {
    title: "Stolice i fotelje",
    description: "Pranje sedalnog dela, naslona, fotelja, taburea i jastuka.",
    price: "od 450 RSD",
    icon: LampFloor,
    accent: "bg-[#d7edff]",
  },
]
