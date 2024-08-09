import { NavLink, Outlet, useLocation } from "react-router-dom";
import { React, useState, useEffect } from 'react';
import Footer from "../components/marketing/Footer";
import IconFlexGridHref from "../components/marketing/IconFlexGridHref";
import ButtonBasic from "../components/marketing/ButtonBasic";

export default function LayoutRoot () {
    // Scroll to the top of the page whenever the location changes
    const location = useLocation();
    useEffect(() => {
        const currentPath = location.pathname;
        const mainPaths = ['/', '/about', '/product'];
        
        // Check if the current path is exactly one of the main paths
        if (mainPaths.includes(currentPath)) {
            window.scrollTo(0, 0);
        }
    }, [location]);

    
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div>
            {/* Navbar */}
            <nav className="p-6 bg-blue-900">
                <div className="container mx-auto flex justify-between items-center ">
                        
                    <NavLink to="/" className={'flex items-center bg-white px-5 rounded-md'}>
                        <img className="size-16 me-2" src="/HAKETDALogo.png" alt="" />
                        <p className="text-blue-900 text-3xl font-bold">HAKETDA</p>
                    </NavLink>
                    
                    {/* Large Screen Menu */}
                    <div className="hidden text-white lg:flex space-x-4 text-lg font-semibold">
                        {/* Nav List */}
                        <NavLink to="/" className="px-3 py-2 hover:bg-white hover:text-blue-900 rounded-md">Home</NavLink>
                        <NavLink to="product" className="px-3 py-2 hover:bg-white hover:text-blue-900 rounded-md">Product</NavLink>
                        <NavLink to={"about"} className="px-3 py-2 hover:bg-white hover:text-blue-900 rounded-md">About</NavLink>
                    </div>

                    {/* Hamburger Icon */}
                    <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-black focus:outline-none"
                    >
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                <div className="lg:hidden text-lg font-semibold mt-4 text-white">
                    {/* Menu List */}
                    <NavLink to={"/"} className="block px-3 py-2 hover:bg-white hover:text-blue-900 rounded-md">Home</NavLink>
                    <NavLink to={"product"} className="block px-3 py-2 hover:bg-white hover:text-blue-900 rounded-md">Product</NavLink>
                    <NavLink to={"about"} className="block px-3 py-2 hover:bg-white hover:text-blue-900 rounded-md">About</NavLink>
                </div>
                )}
            </nav>
            
            {/* Outlet */}
            <main>
                <Outlet/>
            </main>

            {/*Cara Memesan */}
            <section className="bg-blue-900 py-20 justify-items-center">
                <main className=" container px-10 mx-auto grid lg:grid-cols-2">
                    <div className="lg:border-r-2 border-white">
                        <h1 className="text-white text-4xl text-center font-bold">Our Official Store</h1>
                        <IconFlexGridHref
                        icons={icons}
                        classImg={'size-32 aspect-square object-contain bg-white bg-opacity-80 p-4 hover:bg-white'}
                        target={'_blank'}
                        />
                    </div>
                    <div className="mt-20 lg:mt-0 content-center">
                        <h3 className="text-white text-xl text-center font-semibold">Ingin Beli dalam Jumlah Besar?</h3>
                        <h1 className="text-white text-4xl text-center font-bold pb-6">Dapatkan Penawaran Terbaik!</h1>
                        <ButtonBasic
                            buttonHref={'https://wa.link/vrkp7p'}
                            buttonDesc={'Hubungi Kami Sekarang'}
                            classButton={'lg:w-2/5 mx-auto bg-white text-blue-900 text-lg font-bold rounded-md border-2 border-black hover:text-xl'}
                            target={'_blank'}
                        /> 
                    </div>
                </main>
            </section>

            <footer className="bg-gray-100">
                <Footer
                    classFooter={'text-black'}
                    companyName={'PT Lorem'}
                    companyAddress={'Pulo Gadung'}
                    companyAddress1={'Jakarta Timur, 13260'}
                    companyAddress2={'Indonesia'}
                    titleGrid1={'Contact Us'}        
                    contacts={contacts}           
                    titleGrid2={'Social Media'}
                    sosmeds={sosmeds}            // cards
                />
            </footer>           
        </div>
    )
}

const contacts = [
    {
        href:   'google.com',
        img:    'https://img.icons8.com/?size=100&id=43297&format=png&color=000000',
        text:   '0812 8600 7723',
    },
    {
        href:   'google.com',
        img:    'https://img.icons8.com/?size=100&id=13922&format=png&color=000000',
        text:   'haketda@gmail.com',
    },
];

const sosmeds = [
    {
        href:   'https://www.tiktok.com/@haketda',
        img:    'https://img.icons8.com/?size=100&id=lTkH3THtr7SL&format=png&color=000000',
        text:   'Tiktok',
    },
    {
        href:   'https://www.instagram.com/haketda.tape/',
        img:    'https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000',
        text:   'Instagram',
    },
    {
        href:   'https://www.facebook.com/profile.php?id=61563439176552',
        img:    'https://img.icons8.com/?size=100&id=13912&format=png&color=000000',
        text:   'Facebook Page',
    },
]

const icons =[
    {
        href:   'https://www.tokopedia.com/haketda',
        src:    'https://seeklogo.com/images/T/tokopedia-logo-40654CCDD6-seeklogo.com.png',
        alt:    '1',
    },
    {
        href:   'https://shopee.co.id/shop/26324773',
        src:    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopee_logo.svg/1442px-Shopee_logo.svg.png',
        alt:    '1',
    },
    {
        href:   '#',
        src:    'https://magicwacky.com/wp-content/uploads/2023/07/Tiktok-Shop-Logo-Black-PNG.png',
        alt:    '1',
    },
  ];