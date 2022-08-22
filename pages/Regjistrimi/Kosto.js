import Navbar from "../../components/Navbar";
import Footer from '../../components/Footer';


export default function Kosto () {
    return (
        <>
            <div className="cnt">
                    <div className="koncnav">
                        <Navbar/>
                    </div>
                    <div className="topnav2">
                        KOSTOT FINANCIARE
                    </div>
                    <div className="bannercontainer1">
                        {/* <img className="hisimg" src="/images/historia.jpg" width="100%"></img> */}
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-6">
                                <p className="titt">KOSTOT FINANCIARE</p>
                                <p className="tit">INFERMIERI</p>
                                <p className="parag">Çmimi i rregullt për vit shkollorë <b>2670 euro</b>
                                    <br />
                                    <br />
                                Çmimi i rregullt për tri vite <b>8010 euro</b>
                                <br />
                                <br />
                                Çmimi për vit për nxënësit që kalojnë provimin pranues me sukses përfitojnë bursë me <span style={{color:"#2A7EE6"}}>25%</span> zbritje, cmimi për një vit shkollorë: <b>2002.5</b> 
                                <br />
                                <br />
                                Çmimi për tri vite për nxënësit që kalojnë provimin pranues me sukses përfitojnë bursë me <span style={{color:"#2A7EE6"}}>25%</span> zbritje, cmimi për tri vite shkollorë: <b>6007.5</b>
                                <br />
                                <br />
                                Nxënësit që plotësojnë kriteret e kërkuara gjatë vitit të parë përfitojnë bursë me zbritje <span style={{color:"#2A7EE6"}}>20%</span> për vitin e dytë.</p>
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