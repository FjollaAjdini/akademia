import Navbar from "../../components/Navbar";
import Footer from '../../components/Footer';
import Link from 'next/link';


export default function Partneret () {
    return(
            <>

            <div className="koncnav">
               <Navbar/>
            </div>
            <div className="topnav2">
               PARTNERËT
            </div>
            <div className="bannercontainer1">
                  {/* <img className="hisimg" src="/images/historia.jpg" width="100%"></img> */}
            </div>
        
            <div>
               <div className="row">
                  <div className="col-lg-3"></div>
                  <div className="col-lg-6">
                     <div className="mvvwhole">
                     <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                           <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">KOSOVË</button>
                           <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">GJERMANI</button>
                           <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">AUSTRI</button>
                           </div>
                     </nav>

                  <div class="tab-content" id="nav-tabContent">
                     <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className="row">
                           <div className="col-lg-4 partn">
                              <Link href="https://spitalialoka.com/al/"><img className="partneret" src="/images/aloka.png"></img></Link> <hr className='h' /> 
                              <Link href="https://kavajahospital.com/"><img  className="partneret"  src="/images/kavaja.png"></img></Link><hr className='h' /> 
                              <Link href="http://www.spitalilindja.com/"><img  className="partneret"  src="/images/lindja.png"></img></Link><hr className='h' /> 
                              <Link href="https://qt-heimerer.eu/"><img  className="partneret"  src="/images/qth.png"></img></Link><hr className='h' /> 
                           </div>
                           <div className="col-lg-4 partn">
                              <Link href="https://kolegji-heimerer.eu/"><img className="partneret" src="/images/heimerer.png"></img></Link><hr className='h' /> 
                              <img  className="partneret"  src="/images/dshms.png"></img><hr className='h' /> 
                              <img  className="partneret"  src="/images/dshmskline.png"></img><hr className='h' /> 
                              <img  className="partneret"  src="/images/qkmfMitrovice.png"></img><hr className='h' /> 
                           </div>
                           <div className="col-lg-4 partn">
                              <img className="partneret" src="/images/dshmsIstog.png"></img><hr className='h' /> 
                              <img  className="partneret"  src="/images/qkmfObiliq.png"></img><hr className='h' /> 
                              <img  className="partneret"  src="/images/dshmsDrenas.png"></img><hr className='h' /> 
                           </div>
                        </div> 
                     </div>
                     <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div className="mvv"> 
                           
                           
                        </div>
                     </div>
                     <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <div className="mvv">
                           

                        </div> 
                     </div>
                  </div>
               </div>
                  </div>
                  <div className="col-lg-3"></div>
               </div>
            </div>  
            <div>
               <Footer/>
            </div> 
       </>
             
    )
   
}