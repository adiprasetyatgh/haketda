import LayoutTabs from "../layouts/LayoutTabs";

export default function Product() {
    return (
      <div>
        <section className="bg-gray-100">
          <main className="container mx-auto px-10 pb-20">
            <div className='flex justify-center items-center py-6'>
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