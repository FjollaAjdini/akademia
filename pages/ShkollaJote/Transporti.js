import Navbar from "../../components/Navbar";
import Footer from '../../components/Footer';


export default function Transporti () {
    return (
        <>
            <div className="cnt">
                    <div className="koncnav">
                        <Navbar/>
                    </div>
                    <div className="topnav2">
                        TRANSPORTI
                    </div>
                    <div className="bannercontainer1">
                        {/* <img className="hisimg" src="/images/historia.jpg" width="100%"></img> */}
                    </div>
                    <div className="wh">
                        <div className="row">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-6">
                                <p className="titt">TRANSPORTI</p>

                                <div className="conttitle">ORARI I TRANSPORTIT</div>

                                    <img src="/images/Tabela_e_Transportit-01.png" width="100%"></img>
                                
                                
                                    
                            </div>
                            <div className="col-lg-3"></div>
                        </div>
                    </div>
                    <div>
                        <Footer/>
                    </div>
            </div>
        </>
    )

}