import Navbar from "../../components/Navbar";
import Footer from '../../components/Footer';


export default function Akreditimi () {
    return(

      <>
      <div className="koncnav">
         <Navbar/>
      </div>
      <div className="topnav2">
         AKREDITIMI
      </div>
      <div className="bannercontainer1">
            {/* <img className="hisimg" src="/images/historia.jpg" width="100%"></img> */}
      </div>
      <div className="wh">
          <div className="row">
          <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <div className="akreditimi">
                <p className="mvvtitle">AKREDITIMI</p>
                <p className="mvvdesc">Akademia Profesionale Gjermane është shkollë profesionale, (niveli i V-të) e akredituar nga Autoriteti
                                       Kombetar i Kualifikimeve dhe ka licencën e punës nga MAShT.</p>
                <button className="shkarko">SHKARKO</button>  
            </div>
          </div>
          <div className="col-lg-3"></div>
       </div>

       <div>
        <Footer/>
       </div>
       </div>
      </>
    )
}