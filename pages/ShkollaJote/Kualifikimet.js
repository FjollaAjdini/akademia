import Navbar from "../../components/Navbar";
import Footer from '../../components/Footer';

export default function Kualifikimet () {
    return(
    <>
     <div className="koncnav">
            <Navbar/>
    </div>
    <div className="topnav2">
         KUALIFIKIMET
      </div>
      <div className="bannercontainer1">
            {/* <img className="hisimg" src="/images/historia.jpg" width="100%"></img> */}
      </div>
    <div>
        <div className="row">
          <div className="col-lg-3">..</div>
            <div className="col-lg-6">
                    <p className="mvvtitle">KUALIFIKIMET</p>
                    <p className='subtitlee'>LOREM IPSUM IS SIMPLY DUMMY</p>
                    <p className="mvvdesc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                           laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                           ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
                                           hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et
                                           <br />
                                           <br />
                                           Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                           laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                           ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
                                           hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et
                                           accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait </p>
               
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