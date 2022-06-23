import React from 'react';
import './events.css';
import Navbar from './navbar.js';
import bgImage from './bodyImages/eventBody.png'
import Card from './Card';
import Data from './data';
export default function Events(){
    const [index,setIndex]=React.useState(0);
    function handleClick(name){
        if(name==="btnR" && index<Data.length-1){
            setIndex(prev=>prev+1)
        }
        if(name==="btnL" && index>0){
            setIndex(prev=>prev-1)
        }
    }
    return(
        <div className='eventsBody' style={{backgroundImage: `url(${bgImage})`,backgroundRepeat:'round'}}>
            <Navbar/>
            <div className='cardBody'>
                <Card key={Data[index].id} name={Data[index].name} url={Data[index].url} />
            </div>
            <button id="btnR" onClick={()=>handleClick("btnR")}>
                <img src={process.env.PUBLIC_URL+"/images/btnR.png"} alt="right"/>
            </button>
            <button id="btnL" onClick={()=>handleClick("btnL")}>
                <img src={process.env.PUBLIC_URL+"/images/btnL.png"} alt="left"/>
            </button>
        </div>
    );
}