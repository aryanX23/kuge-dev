import React from 'react';
import "./card.css";
export default function Card(props){
    return(
        <div className='CardBody'>
            <span className='cardTitle'>{props.name}</span>
            <img src={process.env.PUBLIC_URL+ `/images/${props.url}`} alt="cardImg" className='cardImg'/>
            <div className='mainTask'>Main Task</div>
            <div className='lt'></div>
            <div className='rt'></div>
        </div>
    );
}