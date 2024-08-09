import CardFlexGrid from "../components/marketing/CardFlexGrid";

export default function LakbanCokelat() {
    return (
      <div>
        {/* Section 1 - */}
        <section className="">
          <main className="container mx-auto px-10">
            <CardFlexGrid
            cards={products} // map
            classFlex={'justify-evenly text-center'}
            classLi={'w-4/5 lg:w-1/4 bg-white p-8 group text-center border border-blue-900 shadow-xl shadow-xl'}
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
    img:      '/OPPBrown48mm85m.png',
    head:     'Lakban Cokelat 85 Meter',
    paragraf: '85m X 48mm X 45 micron',
  },
  {
    img:      '/OPPBrown48mm55m.png',
    head:     'Lakban Cokelat 55 Meter',
    paragraf: '85m X 48mm X 45 micron',
  },
];