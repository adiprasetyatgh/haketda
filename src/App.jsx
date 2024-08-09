// App.js

import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

// import layout
import LayoutRoot from "./layouts/LayoutRoot";

// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import LakbanSemua from "./pages/LakbanSemua";
import LakbanBening from "./pages/LakbanBening";
import LakbanCokelat from "./pages/LakbanCokelat";
import LakbanSelotip from "./pages/LakbanSelotip";
import LakbanDoubleTape from "./pages/LakbanDoubleTape";
import LakbanClothTape from "./pages/LakbanClothTape";
import LakbanMaskingTape from "./pages/LakbanMaskingTape";

// router settings
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutRoot />}>
      <Route path='/' element={<Home />}> 
        <Route index element={<LakbanSemua />} />
        <Route path='lakbansemua' element={<LakbanSemua />} />
        <Route path="lakbanbening" element={<LakbanBening />} />
        <Route path="lakbancokelat" element={<LakbanCokelat />} />
        <Route path="selotip" element={<LakbanSelotip />} />
        <Route path="doubletape" element={<LakbanDoubleTape />} />
        <Route path="clothtape" element={<LakbanClothTape />} />
        <Route path="maskingtape" element={<LakbanMaskingTape />} />
      </Route>
      <Route path="about" element={<About />} />
      <Route path="product" element={<Product />}>
        <Route index element={<LakbanSemua />} />
        <Route path='lakbansemua' element={<LakbanSemua />} />
        <Route path="lakbanbening" element={<LakbanBening />} />
        <Route path="lakbancokelat" element={<LakbanCokelat />} />
        <Route path="selotip" element={<LakbanSelotip />} />
        <Route path="doubletape" element={<LakbanDoubleTape />} />
        <Route path="clothtape" element={<LakbanClothTape />} />
        <Route path="maskingtape" element={<LakbanMaskingTape />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
