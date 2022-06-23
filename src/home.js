import React from 'react'
import './home.css';
import Navbar from './navbar.js';
export default function Home(){
    function redirect(name){
        if(name==="discord")
        window.location.replace("https://discord.com/invite/uyhcMg9nvp");
        if(name==="insta")
        window.location.replace("https://www.instagram.com/kugegemuclan/");
        if(name==="linked")
        window.location.replace("");
        if(name==="tweet")
        window.location.replace("");
        if(name==="yt")
        window.location.replace("https://www.youtube.com/channel/UCWq3uvjo-Lc4HJfOyQx5hIA");
    }
    return(
        <>
        <Navbar/>
        <div className='homeBody'>
            <div className='centerText'>
                <span id='ct-heading'>ESPORTS CLUB</span>
                <span id='ct-body'>Watch, Analyze, Seek and Destroy</span>
            </div>
            <img src={process.env.PUBLIC_URL+"./images/chessBoys.png"} alt="chessBoys" className='chessBoys' />
            <img src={process.env.PUBLIC_URL+"./images/logo1.png"} alt="logo1" className='logo1'/>
            <img src={process.env.PUBLIC_URL+"./images/bonsai.png"} alt="bonsai" className='bonsai' />
            <div className='descriptionBox'>
                <img src={process.env.PUBLIC_URL+"./images/controller.png"} alt="xbox"  className='xbox'/>
                <div className='socials'>
                    <img src={process.env.PUBLIC_URL+"./images/Discord.png"} onClick={()=>redirect("discord")} alt="discord" className='socialElements'/>
                    <img src={process.env.PUBLIC_URL+"./images/Insta.png"} onClick={()=>redirect("insta")} alt="insta" className='socialElements'/>
                    <img src={process.env.PUBLIC_URL+"./images/Linked.png"} onClick={()=>redirect("linked")} alt="linked" className='socialElements'/>
                    <img src={process.env.PUBLIC_URL+"./images/Twitter.png"} onClick={()=>redirect("tweet")} alt="tweet" className='socialElements'/>
                    <img src={process.env.PUBLIC_URL+"./images/Youtube.png"} onClick={()=>redirect("yt")} alt="yt" id='yt'/>
                </div>
                <span className='description'>The kuge (公家) was a Japanese aristocratic class that dominated the Japanese Imperial Court in Kyoto. The kuge were important from the establishment of Kyoto as the capital during the Heian period in the late 8th century until the rise of the Kamakura shogunate in the 12th century, at which point it was eclipsed by the bushi. </span>
            </div>
            <div className='frame'>
                <span className='feedback'>Feedback ^</span>
            </div>
        </div>
        </>
    );
}