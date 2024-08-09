import CardFlexGrid from "../components/marketing/CardFlexGrid";

export default function LakbanMaskingTape() {
    return (
      <div>
        {/* Section 1 - */}
        <section className="">
          <main className="container mx-auto px-10">
            <CardFlexGrid
            cards={products} // map
            classFlex={'justify-evenly text-center'}
            classLi={'w-4/5 lg:w-1/4 bg-white p-8 group text-center border border-blue-900 shadow-xl'}
            classImg={'rounded-md aspect-square rounded-lg object-contain'}  
            classLine={'w-32 border-t-4 border-gray-200 group-hover:border-blue-900 mb-4 mx-auto'}
            />
          </main>
        </section>
        
      </div>
    )
  }

const products=[
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