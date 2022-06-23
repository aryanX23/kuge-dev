import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './home';
import About from './about';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Events from './events';
function App(){
    return(
        <div className='App'>
            <Routes>
                <Route exact path="/about" element={<About/>} />
                <Route exact path="/events" element={<Events/>} /> 
                <Route exact path="/" element={<Home/>} />              
            </Routes>
        </div>
    );
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
<BrowserRouter>
<App/>
</BrowserRouter>
);