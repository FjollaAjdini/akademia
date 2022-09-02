import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

export default function Laboratori () {
    return (
        <>
            <div className="koncnav">
               <Navbar/>
            </div>
            <div className="topnav2">
               LABORATORI
            </div>
            <div className="bannercontainer1">
                  {/* <img className="hisimg" src="/images/historia.jpg" width="100%"></img> */}
            </div>
        

        <div>
            <div className="row">
               <div className="col-lg-3"></div>
               <div  className="col-lg-6">
                   <p className="labp">LABORATORI</p>
                   <p className="labpar1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                     laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                     ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                     in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero </p>
                     <div>

              <div className="BrandSliderr">
                 <div className="carousel">
                     <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                       <div className="carousel-inner">
                          <div className="carousel-item active">
             
                             <div className="row">
                                <div className="col-lg-6">
                                   <img className="imgSlider" src="/images/noimg.jpg" alt="First slide"/>
                               </div>
                                <div className="col-lg-6"> 
                                  <img className="imgSlider1"  src="/images/noimg.jpg" alt="First slide"/>
                               </div>
                             </div> 
                          </div>


                 <div className="carousel-item">
                      <div className="row">
                         <div className="col-lg-6">
                                <img className="imgSlider" src="/images/noimg.jpg" alt="First slide"/>
                         </div>
                         <div className="col-lg-6"> 
                               <img className="imgSlider1"   src="/images/noimg.jpg" alt="First slide"/>
                         </div>
                     </div> 
                </div>
             </div>


              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                 <span className="carousel-control-prev-icon" ></span>
                 <span className="sr-only">Previous</span>
             </a>
             <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                 <span className="carousel-control-next-icon" ></span>
                 <span className="sr-only">Next</span>
             </a>
           </div>
          </div>
         </div>
              </div>
               </div>


               <div  className="col-lg-3"></div>
            </div>
        </div>
        <Footer/>
        </>
    )
}