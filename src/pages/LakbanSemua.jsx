import CardGrid from "../components/marketing/CardGrid";

export default function LakbanSemua() {
    return (
      <div>
        <section className="">
          <main className="container mx-auto px-10">
            <CardGrid
              cards={cards} // map
              classGrid={'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center '}
              classLi={'p-8 group text-center bg-white border border-blue-900 shadow-xl'} 
              classImg={'aspect-square object-cover rounded-lg size-64 mx-auto'} 
              classLine={'w-32 border-t-4 border-gray-200 group-hover:border-blue-900 mb-4 mx-auto'}/>
          </main>
        </section>
        
      </div>
    )
  }

  const cards=[
  {
    img:      '/OPPClear48mm85m.png',
    head:     'Lakban Bening 85 Meter',
    paragraf: '85m X 48mm X 45 micron',
  },
  {
    img:      '/OPPClear48mm55m.png',
    head:     'Lakban Bening 55 Meter',
    paragraf: '55m X 48mm X 45 micron',
  },
  {
    img:      '/OPPBrown48mm85m.png',
    head:     'Lakban Cokelat 85 Meter',
    paragraf: '85m X 48mm X 45 micron',
  },
  {
    img:      '/OPPBrown48mm55m.png',
    head:     'Lakban Cokelat 55 Meter',
    paragraf: '85m X 48mm X 45 micron',
  },
  {
    img:      '/OPPClear24mm.png',
    head:     'Selotip 1 Inch (24mm)',
    paragraf: '55m X 24mm X 45 micron',
  },
  {
    img:      '/OPPClear12mm.png',
    head:     'Selotip 0.5 Inch (12mm)',
    paragraf: '65m X 12mm X 45 micron',
  },
  {
    img:      '/DoubleTape24mm.png',
    head:     'Double Tape 1 Inch (24mm)',
    paragraf: '15m X 24mm X 45 micron',
  },
  {
    img:      '/DoubleTape12mm.png',
    head:     'Double Tape 0.5 Inch (12mm)',
    paragraf: '15m X 12mm X 45 micron',
  },
  {
    img:      '/ClothTape48mm.png',
    head:     'Cloth Tape 2 Inch (48mm)',
    paragraf: '9m X 48mm X 45 micron',
  },
  {
    img:      '/ClothTape24mm.png',
    head:     'Cloth Tape 1 Inch (24mm)',
    paragraf: '9m X 24mm X 45 micron',
  },
  {
    img:      '/MaskingTape48mm.png',
    head:     'Masking Tape 2 Inch (48mm)',
    paragraf: '15m X 48mm X 45 micron',
  },
  {
    img:      '/MaskingTape24mm.png',
    head:     'Masking Tape 1 Inch (24mm)',
    paragraf: '15m X 24mm X 45 micron',
  },
];