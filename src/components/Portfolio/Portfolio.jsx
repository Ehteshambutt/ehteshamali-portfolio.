import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import c from "../../img/c.PNG";
import restorent from "../../img/restorent.PNG";

import HOC from "../../img/hoc.png";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
  <>
<div className="center-text2 text-center">
  <span>Recent Projects</span>
  <br />
  <span className="text-muted text11">
    Our client projects are highly confidential and protected by login credentials. To access these exclusive insights and resources, access exclusive client projects by logging in with my test credentials. Company/Clients privacy is my priority. Thank you for your understanding and cooperation.
    <br/>
    <span class="text-muted textt" style={{textAlign: 'center', display: 'block', margin: '0 auto',marginTop:"1rem"}}>"Credentials will be provided as per requirement"</span>
  </span>
</div>


  <div className="bodys" style={{borderRadius:'50px'}}>
  <a href='http://welcome.devforhealth.com/MainScreen'>

  <div class="card-wrap bbbb">
  <div class="card-header one" style={{ height: '200px' }}>
    <img src='https://res.cloudinary.com/alpja/image/upload/v1702752171/e7dslq84hzg0wdxyyvyp.png' style={{ width: '100%', height: '100%' }} />
  </div>
  <div class="card-content">
    <h1 class="card-title">React/Nextjs</h1>
    <p class="card-text">Used bootstrap5,html,css3 and i added
    link of project here.</p>
    <a href='http://welcome.devforhealth.com/MainScreen'>
      <button class="card-btn one">Click</button>
    </a>
  </div>
</div></a>
<a href='https://tech.doingthistogether.com/login'>

<div class="card-wrap">
  <div class="card-header two" style={{ height: '200px' }}>
    <img src='https://res.cloudinary.com/alpja/image/upload/v1702752592/vffs7bx9yrfsk98aorz9.png' alt="" style={{ width: '100%', height: '100%' }} />
  </div>
  <div class="card-content">
    <h1 class="card-title">Next/Reactjs</h1>
    <p class="card-text">I used React js and next js for it with Materail UI Login credintiol will be provied if needed</p>
    <a href='https://tech.doingthistogether.com/login'>
      <button class="card-btn two">Click</button>
    </a>
  </div>
</div>
</a>
<a href='https://petite-vase.surge.sh'> 
<div class="card-wrap">
  <div class="card-header three">
  <img src='https://res.cloudinary.com/alpja/image/upload/v1704651644/ueg5qjvk46j6jhqofvfu.png' alt="" style={{ width: '100%', height: '100%' }} />
  </div>
  <div class="card-content">
    <h1 class="card-title">React js</h1>
    <p class="card-text">A basic React js project
    with bootstrap5 and some animations click below to view</p>
    <a href='https://petite-vase.surge.sh'> <button class="card-btn three">Click</button></a>
 </div>
</div></a>
<a href='https://medassist.devforhealth.com/'> 
<div class="card-wrap">
  <div class="card-header four">
  <img src='https://res.cloudinary.com/alpja/image/upload/v1702752829/crsvhuzcpfgjvgdrdgz9.png' alt="" style={{ width: '100%', height: '100%' }} />
  </div>

  <div class="card-content">
    <h1 class="card-title">Next js</h1>
    <p class="card-text">This is complete Next js project and is syetem for a USA hospital link credintiol will be shown per requirement</p>
    <a href='https://medassist.devforhealth.com/'> <button class="card-btn four">Click</button></a>
 </div>
</div>
</a>
<a href='https://dtt.devforhealth.com//'> 
<div class="card-wrap">
  <div class="card-header four">
  <img src='https://res.cloudinary.com/dgmjg9zr4/image/upload/v1713245683/mngrpaatwjx0pbjisjg9.png' alt="" style={{ width: '100%', height: '100%' }} />
  </div>

  <div class="card-content">
    <h1 class="card-title">Next js</h1>
    <p class="card-text">This is complete Next js project and is syetem for a USA hospital link credintiol will be shown per requirement</p>
    <a href='https://dtt.devforhealth.com/'> <button class="card-btn four">Click</button></a>
 </div>
</div>
</a>


<a href='https://app.silvercareagency.com/'> 
<div class="card-wrap">
  <div class="card-header four">
  <img src='https://res.cloudinary.com/dgmjg9zr4/image/upload/v1713249233/Silvercare_h51ei1.png' alt="" style={{ width: '100%', height: '100%' }} />
  </div>

  <div class="card-content">
    <h1 class="card-title">Next js</h1>
    <p class="card-text">This is complete Next js project and is syetem for a USA silvercareAgency link credintiol will be shown per requirement</p>
    <a href='https://app.silvercareagency.com/'> <button class="card-btn four">Click</button></a>
 </div>
</div>
</a>
</div>









  </>
  );
};

export default Portfolio;
