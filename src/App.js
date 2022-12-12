import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Nav/Navbar';
import working from './images/illustration-working.svg'
import UrlShortner from './components/urlShortner/urlShortner';
// import Stats from './components/statistics/stats';
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
             <section className='page2'>
                <div className='stats-info'>
                  <div className='box'>
                    <h2>Advanced Statistics</h2>
                    <h4 >Track how your links are performing in the web with our advanced statistics dashboard</h4>
                </div>
                </div>
                <div  className='list'>
                   {/* <List/> */}
                </div>
             </section>
          </div>
  );
}

export default App;
