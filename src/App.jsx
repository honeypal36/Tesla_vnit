import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Achieve from './component/Achieve'
import Council from "./component/Council";
import Projects from "./component/Projects";
import Gallery from "./component/Gallery";
import Learn from "./component/tesla-learn-page/src/App.jax";
import Nav from './component/Nav'
import Hero from './component/Hero'


function App(){
  return(
    
    <>
     
     <div className="">
     <Nav />
     <Routes>
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Achieve' element={<Achieve />} />
        <Route path='/Council' element={<Council />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/Learn' element={<Learn />} />
     </Routes>
     <Hero />
     {/* Footer */}
     <footer
       className="w-full mt-10 px-4 text-white font-mono"
       style={{
         background: "linear-gradient(90deg, #000000 0%, #1a1a2e 50%, #232526 100%)"
       }}
     >
       {/* Social Icons Row */}
       <div className="flex justify-center gap-6 py-8">
         
        
         <a href="https://drive.google.com/file/d/1FuFJwtfSJm7PVASgWZE8JFzfKmzJKATQ/view" target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-white w-12 h-12 flex items-center justify-center text-xl hover:bg-white hover:text-black transition-colors duration-200">
           <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21.805 10.023h-9.765v3.955h5.627c-.242 1.236-1.457 3.627-5.627 3.627-3.389 0-6.146-2.805-6.146-6.25s2.757-6.25 6.146-6.25c1.93 0 3.227.822 3.97 1.53l2.713-2.637C16.07 2.422 13.97 1.5 11.5 1.5 5.977 1.5 1.5 5.977 1.5 11.5s4.477 10 10 10c5.73 0 9.5-4.02 9.5-9.75 0-.65-.07-1.15-.195-1.727z"/></svg>
         </a>
         <a href="https://www.instagram.com/teslavnit/" target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-white w-12 h-12 flex items-center justify-center text-xl hover:bg-white hover:text-black transition-colors duration-200">
           <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344c-.98.98-1.213 2.092-1.272 3.373C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.281.292 2.393 1.272 3.373.98.98 2.092 1.213 3.373 1.272C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.292 3.373-1.272.98-.98 1.213-2.092 1.272-3.373.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.292-2.393-1.272-3.373-.98-.98-2.092-1.213-3.373-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
         </a>
         <a href="https://in.linkedin.com/company/tesla-club-of-innovation" target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-white w-12 h-12 flex items-center justify-center text-xl hover:bg-white hover:text-black transition-colors duration-200">
           <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
         </a>
         <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-white w-12 h-12 flex items-center justify-center text-xl hover:bg-white hover:text-black transition-colors duration-200">
           <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
         </a>
       </div>
       {/* Copyright Row */}
       <div className="py-4 text-center text-sm md:text-base border-t border-white/10">
         &copy; {new Date().getFullYear()} Tesla Club. All rights reserved.
       </div>
     </footer>
     </div>
     
     

    
     

     
     
    </>
  );
}

export default App
