import React from 'react'
import './Home.css'
import Topbar from './Components/Topbar'
import ImageCards from './Components/ImageCards'           
import ImageCards2 from './Components/ImageCards2'           
import Content from './Components/Content'
import Footer from './Components/Footer'
function Home() {
    
    return (
        <>
            <Topbar />
           <div id='imgContainer'>
           <img src={require('./Assets/images/slogan.png')} id="img" /> 
           </div>
           <ImageCards/>
           <Content/>
           <Footer/>
        </>
    )
}

export default Home;







   