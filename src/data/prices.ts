export type PriceItem = { name: string; price: string }
export type PriceGroup = { id: string; title: string; subtitle: string; items: PriceItem[] }

export const priceGroups: PriceGroup[] = [
  {
    id: "namestaj",
    title: "Nameštaj",
    subtitle: "Stolice, sofe, garniture i detalji",
    items: [
      { name: "Stolica — sedalni deo i naslon", price: "700 RSD" },
      { name: "Stolica — sedalni deo", price: "450 RSD" },
      { name: "Trosed — standardni", price: "2.700 RSD" },
      { name: "Trosed na izvlačenje", price: "3.500 RSD" },
      { name: "Dvosed — standardni", price: "2.300 RSD" },
      { name: "Dvosed na izvlačenje", price: "2.700 RSD" },
      { name: "Garnitura — po sednom mestu", price: "1.000 RSD" },
      { name: "Tabure — mali", price: "600 RSD" },
      { name: "Tabure — veliki", price: "1.000 RSD" },
      { name: "Fotelja — mala", price: "1.200 RSD" },
      { name: "Fotelja — velika", price: "1.500 RSD" },
      { name: "Mali jastuk", price: "200 RSD" },
      { name: "Veliki jastuk", price: "350 RSD" },
    ],
  },
  {
    id: "koza",
    title: "Kožni nameštaj",
    subtitle: "Cena se obračunava po sednom mestu",
    items: [
      { name: "Kožna fotelja — po sednom mestu", price: "1.700 RSD" },
      { name: "Kožni dvosed — po sednom mestu", price: "1.700 RSD" },
      { name: "Kožni trosed — po sednom mestu", price: "1.700 RSD" },
      { name: "Kožna garnitura — po sednom mestu", price: "1.700 RSD" },
    ],
  },
  {
    id: "duseci",
    title: "Kreveti i dušeci",
    subtitle: "Jednostrano ili obostrano dubinsko pranje",
    items: [
      { name: "Bračni krevet sa dušekom", price: "3.500 RSD" },
      { name: "Okvir bračnog kreveta", price: "1.500 RSD" },
      { name: "Bračni dušek — jednostrano", price: "2.500 RSD" },
      { name: "Bračni dušek — obostrano", price: "4.000 RSD" },
      { name: "Singl dušek — jednostrano", price: "1.500 RSD" },
      { name: "Singl dušek — obostrano", price: "2.500 RSD" },
      { name: "Bračni naddušek — jednostrano", price: "2.500 RSD" },
      { name: "Bračni naddušek — obostrano", price: "4.000 RSD" },
      { name: "Singl naddušek — jednostrano", price: "1.500 RSD" },
      { name: "Singl naddušek — obostrano", price: "2.500 RSD" },
    ],
  },
  {
    id: "vozila",
    title: "Automobili",
    subtitle: "Cena zavisi od vozila i obima pranja",
    items: [{ name: "Dubinsko pranje enterijera vozila", price: "Po dogovoru" }],
  },
]
