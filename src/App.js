import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Nav/Navbar';
import working from './images/illustration-working.svg'
import UrlShortner from './components/urlShortner/urlShortner';
import Advance from './pages/Advance';
import data from '../src/data'
import List from './components/List/list';


function App() {
     const[stat,setStat] = useState(data);

  return (
          <div className='container'>
            <section className='page1'>
            <Navbar/>
            <div className='heros'>
             <div className='body-info'>
                <div className='info-text'>
                 <h1 className='info1'>More than just shorter links.</h1>
               <h4> Build your brand's recognition and get detailed insights on how your links are performing</h4>
                  <button className='getstarted'>Get Started</button>             
                 </div>
                 <img src={working} className='working'/>
             </div>
             </div>
            </section>
             <UrlShortner/>
             <section>
               <Advance/>
             </section>
             <section>
              <div  className='boost'>
                <div className='boost-info'>
                <h2>Boost your links today</h2>
                <button className='boost-btn'>Get Started</button>
                </div>
                
              </div>
             </section>
             
          </div>
  );
}

export default App;
