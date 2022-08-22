import Navbar from "../../components/Navbar";
import Footer from '../../components/Footer';


export default function Afatet () {
    return (
        <>
        <div className="cnt">
                <div className="koncnav">
                    <Navbar/>
                </div>
                <div className="topnav2">
                    AFATET E APLIKIMIT
                </div>
                <div className="bannercontainer1">
                    {/* <img className="hisimg" src="/images/historia.jpg" width="100%"></img> */}
                </div>
            
            
                    <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6">
                            <p className="titt">AFATET E APLIKIMIT</p>
                            <p className="tit">INFERMIERI</p>
                            <p className="parag">Afati i parë i provimit pranues për Infermieri do të realizohet më <b> 05 Korrik 2022</b>
                                <br />
                                <br />
                                Afati i dytë i provimit pranues për Infermieri do të realizohet më <b>05 Gusht 2022 </b> 
                                <br />
                                <br />
                                <br />
                                Kandidatët e pakënaqur mund të bëjnë ankesë brenda 3 ditëve të punës, rreth rezultateve të arritura në test.
                                Komisioni i ankesave shqyrton ato brenda 5 dite të punës për të dhënë përgjigje për ankesën.</p>
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