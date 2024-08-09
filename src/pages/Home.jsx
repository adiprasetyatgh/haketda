import ButtonLink from "../components/marketing/ButtonLink";
import CardGrid from "../components/marketing/CardGrid";
import CarouselAbsolute from "../components/marketing/CarouselAbsolute";
import LayoutTabs from "../layouts/LayoutTabs";

export default function Home() {
  const images = [
    'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];
  
  return (
    <div>
      {/* Section 1 */}
      <section className="relative carousel-height flex items-center ">
        <CarouselAbsolute
          classCarousel={'h-full'}
          images={images}
        />
        <main className="relative container mx-auto px-10 py-20 bg-black bg-opacity-75">
          <h1 className="text-5xl text-center text-white font-bold">HAKETDA</h1>
          <svg 
            className="w-20 font-bold text-blue-900 mx-auto"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
          <p className="text-white text-center text-xl font-semibold 20 mb-16 ">Solusi perekat dengan berbagai macam pilihan yang terpercaya dengan pengiriman Gratis di Jakarta 
          <br /> 
          Ukuran akurat dengan layanan pelanggan 24/7</p>
          <ButtonLink
            buttonHref={'product'}
            buttonDesc={'JELAJAHI PRODUK KAMI'}
            classButton={'justify-center md:w-1/3 bg-blue-900 text-white text-center mx-auto text-lg hover:text-xl font-bold rounded-md border border-white'}
          />
        </main>
      </section>

      {/* Section 2 */}
      <section className='py-20'>
        <main className='container mx-auto px-10 lg:px-40'>         
          <CardGrid
          cards={whyUs}
          classGrid={'grid-cols-1 xl:grid-cols-3 gap-8'} // 
          classLi={'p-8 group text-center bg-gray-50'}
          classImg={'size-32 mx-auto aspect-square object-contain '}
          classLine={'w-32 border-t-4 border-gray-200 group-hover:border-blue-900 mt-2 mb-4 mx-auto'}
          />
        </main>
      </section>


      {/* Section 3 */}
      <section className="py-20 bg-gray-100">
        <main className="container mx-auto px-10">
          <div className='flex justify-center items-center pb-6'>
            <div className="w-20 border-t-4 border-blue-900 my-6 "/>
            <h1 className='text-4xl text-black text-center font-bold mx-4'>Produk Kami</h1>
            <div className="w-20 border-t-4 border-blue-900 my-6"/>
          </div>
          <LayoutTabs/>
        </main>
      </section>

    </div>
  )
}

const whyUs=[
  {
      img:      'https://i.pinimg.com/564x/ba/3d/c8/ba3dc8823d60e8f3d6e5b950110375bc.jpg',
      head:     'Ukuran Akurat',
      paragraf: 'Kami memastikan setiap produk kami memiliki ukuran yang konsisten dan tepat sesuai kebutuhan Anda.',
  },
  {
      img:      'https://i.pinimg.com/564x/01/32/57/013257004df80ac9f1ad41497cd7517a.jpg',
      head:     'Pengiriman Gratis (Jakarta)',
      paragraf: 'Pengiriman cepat dan gratis, membuat bisnis Anda tetap berjalan lancar tanpa hambatan. untuk lokasi lainnya, silakan hubungi layanan kami',
  },
  {
    img:        'https://cdn-icons-png.flaticon.com/512/950/950299.png',
    head:       'Layanan Pelanggan 24/7',
    paragraf:   '⁠Layanan pelanggan kami siap sedia—hubungi kami kapan saja dan kami akan siap membantu',
  },
];

const products=[
  {
      img:      'OPPClear48mm85m.png',
      head:     'Lakban OPP',
      paragraf: 'Lorem ipsum dolor Lorem ipsum dolor ',
  },
  {
      img:      'OPPBrown48mm85m.png',
      head:     'Lakban OPP',
      paragraf: 'Lorem ipsum dolor adfs asfasd f asdfdsafasdf asdf asdf asd f ',
  },
  {
    img:      'OPPClear24mm.png',
    head:     'Lakban OPP',
    paragraf: 'Lorem ipsum dolor adfs asfasd f asdfdsafasdf asdf asdf asd f ',
  },
  {
    img:      'DoubleTape24mm.png',
    head:     'Lakban OPP',
    paragraf: 'Lorem ipsum dolor adfs asfasd f asdfdsafasdf asdf asdf asd f ',
  },
  {
    img:      'ClothTape48mm.png',
    head:     'Lakban OPP',
    paragraf: 'Lorem ipsum dolor adfs asfasd f asdfdsafasdf asdf asdf asd f ',
  },
  {
    img:      'MaskingTape48mm.png',
    head:     'Lakban OPP',
    paragraf: 'Lorem ipsum dolor adfs asfasd f asdfdsafasdf asdf asdf asd f ',
  },
];

const icons =[
  {
      href:   '#',
      src:    'https://seeklogo.com/images/T/tokopedia-logo-40654CCDD6-seeklogo.com.png',
      alt:    '1',
  },
  {
      href:   '#',
      src:    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopee_logo.svg/1442px-Shopee_logo.svg.png',
      alt:    '1',
  },
  {
      href:   '#',
      src:    'https://magicwacky.com/wp-content/uploads/2023/07/Tiktok-Shop-Logo-Black-PNG.png',
      alt:    '1',
  },
];