import React from 'react';
import Cards from './card';
import Data from './data';
import Navigation from './nav';
import Hero from './hero'


function App() {
 let newData = Data.map(item =>{
   return(
     <Cards 
     key= {item.name}
     {...item}/>
   )
 })
  return (
   <>
    <Navigation />
    <Hero />
    <div className='card_div'>
      {newData}
    </div>
  </>
  )
}

export default App;
