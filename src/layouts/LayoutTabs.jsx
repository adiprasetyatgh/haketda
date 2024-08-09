// src/components/Tabs.jsx
import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function LayoutTabs () {
    const [activeTab, setActiveTab] = useState(1);

  return (
    <section>
        <nav className="flex justify-center p-4">
            <div className="flex flex-wrap justify-center rounded-lg p-1">
                
                {tabs.map((tab) => (
                <NavLink
                    to={tab.to}
                    key={tab.id}
                    className={`px-4 py-2 rounded-lg m-1 text-center w-40 border border-blue-900 ${
                    activeTab === tab.id ? 'bg-blue-900 text-white font-bold' : 'bg-white font-semibold text-blue-900'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                >
                    {tab.label}
                </NavLink>
                ))}
            </div>
        </nav>

        <main>
            <Outlet/> 
        </main>
    </section>   
  );
};

const tabs = [
    { id: 1, label: 'Semua Produk', to:'lakbansemua', },
    { id: 2, label: 'Lakban Bening', to:'lakbanbening', },
    { id: 3, label: 'Lakban Cokelat', to:'lakbancokelat', },
    { id: 4, label: 'Selotip', to:'selotip', },
    { id: 5, label: 'Double Tape', to:'doubletape', },
    { id: 6, label: 'Cloth Tape', to:'clothtape', },
    { id: 7, label: 'Masking Tape', to:'maskingtape', },
];