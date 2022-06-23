import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
export default function Navbar(){
    const [status1,setStatus1]=React.useState(false);
    const [status2,setStatus2]=React.useState(false);
    const [data,setData]=React.useState({name:"",email:"",regNo:""});
    const [msg,setMsg]=React.useState("");
    function handleJoin(){
        if(status1 && !status2)
        setStatus1(prev=>false)
        else if(!status1 && !status2)
        setStatus1(prev=>true)
    }
    function handleClans(){
        if(status2 && !status1)
        setStatus2(prev=>false)
        else if(!status2 && !status1)
        setStatus2(prev=>true)
    }
    function handleChange(event){
        setData(prev=>({
            ...prev,
            [event.target.name]:event.target.value
        }))
    }
    function handleSubmit(){
            fetch('http://localhost:3000/register',{
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name:data.name,
                    email:data.email,
                    regNo:data.regNo
                })
            }).then(response=>response.json()).then(text=>setMsg(prev=>text));
            if(msg==="User Already Exists!"){
                setData(prev=>({
                    name:"",
                    email:"",
                    regNo:""
                }));
                setTimeout(function(){
                setMsg(prev=>"");
            },2000);
            }
            else{
                setData(prev=>({
                    name:"",
                    email:"",
                    regNo:""
                }));
                setTimeout(function(){
                setMsg(prev=>"");
            },2000);
        }
    }
    return(
        <>
        <div className='navBody'>
            <Link style={{textDecoration: 'none'}} to="/">
                <div className='kugegemu'>
                    <img src={process.env.PUBLIC_URL+'./images/Logo.png'} alt="logo" className='logo'/>
                    <p className='title'>KugeGemu</p>
                </div>
            </Link>
            <div className='menuBar'>
                <Link style={{textDecoration: 'none'}} to="/">
                    <span className='menu'>Home</span>
                </Link>
                <div><span className='menu' style={{cursor:'pointer'}} onClick={handleClans}>Clans</span></div>
                <Link style={{textDecoration: 'none'}} to="/events">
                    <span className='menu'>Events</span>
                </Link>
                <Link style={{textDecoration: 'none'}} to="/about">
                    <span className='menu'>About us</span>
                </Link>
            </div>
            <div className='container'>
                <button className='buttons'> <span className='btext'>Login</span></button>
                <button className='buttons' onClick={handleJoin}> <span className='btext'>Join Us</span></button>
            </div>
        </div>
        {
            status1 &&
        <div className='joinUs'>
            <img src={process.env.PUBLIC_URL+'/images/back.png'} onClick={handleJoin} alt="arrow" className='back'/>
            <div className='form'>
                <input type="text" name="name" onChange={handleChange} value={data.name} className='ele' placeholder='Name'/>
                <input type="text" name="email" onChange={handleChange} value={data.email} className='ele' placeholder='Email'/>
                <input type="text" name="regNo" onChange={handleChange} value={data.regNo} className='ele' placeholder='Reg No.'/>
                <button id='submit' onClick={handleSubmit}>Join Us</button>
                <label style={{color:'red'}}>{msg}</label>
            </div>
        </div>
        }
        {
            status2 &&
        <div className='clans' onClick={handleClans}>
            <img src={process.env.PUBLIC_URL+"/images/clans.png"} alt="clanPic" className='clanPic'/>
            <span className='clanTitle'>Kenjutsu 剣術</span>
            <span className='clanDesc'>剣術 (kenjutsu) literally means “sword technique” or “sword art” and refers to the Japanese warrior arts which were created and developed during feudal Japan. A traditional school of kenjutsu is where samurai were taught the use of classical Japanese weapons for both individual confrontations and during battlefield combat. </span>
        </div>
        }
        </>
    );
}