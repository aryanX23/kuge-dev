import React from 'react';
import './about.css';
import bgImage from "./bodyImages/About_us.png";
import Navbar from "./navbar.js";
export default function About(){
    return(
        <div className='aboutBody' style={{backgroundImage: `url(${bgImage})`,backgroundRepeat:'round'}}>
            <Navbar/>
            <div className='main'>
                <img src={process.env.PUBLIC_URL+"/images/Ellipse3.png"} alt="logo1" className='mainLogo'/>
                <span className='mainTitle'>Kuge Gemu Clan</span>
                <span className='mainDesc'>The kuge (公家) was a Japanese aristocratic class that dominated the Japanese Imperial Court in Kyoto. </span>
            </div>
            <div className='tl'>
                <img src={process.env.PUBLIC_URL+"/images/tlCard.png"} alt="tlCard" className='tlCard'/>
                <img src={process.env.PUBLIC_URL+"/images/tlLogo.png"} alt="tlLogo" className='tlLogo'/>
                <span className='tlTitle'>Kenjutsu 剣術</span>
                <span className='tlDesc'><strong>Art of Sword</strong> <br/> refers to the Japanese warrior arts which were created and developed during feudal Japan</span>
            </div>
            <div className='tr'>
                <img src={process.env.PUBLIC_URL+"/images/trCard.png"} alt="trCard" className='trCard'/>
                <img src={process.env.PUBLIC_URL+"/images/trLogo.png"} alt="trLogo" className='trLogo'/>
                <span className='trTitle'>Bojutsu 棒術</span>
                <span className='trDesc'><strong>Art of Staff</strong> <br /> martial art of stick fighting using a bō, which is the Japanese word for staff.</span>
            </div>
            <div className='bl'>
                <img src={process.env.PUBLIC_URL+"/images/blCard.png"} alt="blCard" className='blCard'/>
                <img src={process.env.PUBLIC_URL+"/images/blLogo.png"} alt="blLogo" className='blLogo'/>
                <span className='blTitle'>Kyujutsu 弓術</span>
                <span className='blDesc'><strong>Art of Archery</strong> <br />the traditional Japanese martial art of wielding a bow (yumi) as practiced by the samurai class of feudal Japan.</span>
            </div>
            <div className='br'>
                <img src={process.env.PUBLIC_URL+"/images/brCard.png"} alt="brCard" className='brCard'/>
                <img src={process.env.PUBLIC_URL+"/images/brLogo.png"} alt="brLogo" className='brLogo'/>
                <span className='brTitle'>Sojutsu 槍術</span>
                <span className='brDesc'><strong>Art of the Spear</strong> <br />the Japanese martial art of fighting with a Japanese spear (槍, yari)</span>
            </div>
        </div>
    );
}