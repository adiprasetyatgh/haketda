export default function About() {
  return (
    <div>
      <section className='py-20 bg-gray-100'>
        <main className='container mx-auto px-10 lg:grid grid-cols-2 py-12 bg-white'>
          <img 
          className="size-full object-cover aspect-video"
          src="https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="" />
          <div className=' mt-8 lg:mt-0 lg:pb-12 lg:px-12 flex flex-col justify-between '>
            <h1 className='text-4xl text-gray-900 font-bold text-start'> Our Story </h1>
            <div className="w-20 border-t-4 border-blue-900 my-4"></div> 
            <p className='text-md text-gray-700 text-justify mb-8'>Kisah kami dimulai pada tahun 1990-an dengan nama UD Teguh Jaya, yang dikenal sebagai supplier toko plastik dan alat pesta. Seiring berjalannya waktu dan kebutuhan pasar yang semakin berkembang, kami melihat peluang untuk memberikan solusi perekat berkualitas bagi para pemilik bisnis. 
            <br /> <br />  
            Pada tahun 2010, HAKETDA lahir sebagai merek yang didedikasikan untuk mendukung kebutuhan bisnis dalam proses pengemasan yang efisien dan aman. Dengan semangat inovasi yang tak pernah padam, kami melangkah ke platform digital pada tahun 2020, membawa HAKETDA menjadi pilihan utama bagi banyak bisnis. 
            <br /><br />
            Kami berkomitmen untuk selalu menyediakan produk berkualitas yang dapat Anda andalkan, serta layanan pelanggan yang siap selalu membantu Anda!
            </p>           
          </div>
        </main>
      </section>
      

      <section className="pb-20 bg-gray-100">
        <main className="container mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white py-12">
          <div className="">
            <h1 className='text-4xl text-gray-900 font-bold'> Visi </h1>
            <div className="w-20 border-t-4 border-blue-900 my-4"></div> 
            <p className='text-lg text-gray-700 text-justify mb-8'>Menjadi bagian tak terpisahkan dari setiap Industri dan rumah tangga
            </p>

            <h1 className='text-4xl text-gray-900 font-bold'> Misi </h1>
            <div className="w-20 border-t-4 border-blue-900 my-4"></div> 
            <ul className="list-disc ms-4 text-lg">
              <li>Menjadi simbol kualitas dan keandalan dalam industri lakban</li>
              <li>Memperluas jaringan distribusi hingga ke pelosok negeri</li>
              <li>Membangun hubungan yang kuat dengan pelanggan</li>
            </ul>

          </div>
          <img 
          className='aspect-video size-full object-cover'
          src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D " alt="" />
        </main>

      </section>
    </div>
  )
}
