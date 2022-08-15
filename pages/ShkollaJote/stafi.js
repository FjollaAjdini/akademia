import Navbar from "../../components/Navbar";
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function StudentLife () {
    return (
       <>
       <div className="koncnav">
        <Navbar/>
        </div>
        <div className="stafi">
        <div className="topnav2">
           STAFI
        </div>
            <div className="row">
                <div className="col-lg-3">

                </div>
                <div className="col-lg-6">
                    <div className="row">
                                <div className="col-lg-4 mb-5">
                                    <img src="/images/stafi.jpg" width="90%"></img>
                                    <div className="staffname mt-2">Emri Mbiemri</div>
                                    <div className="staffdesc">BSc.</div>
                                    <div className="staffpos">Përgjegjëse për praktikat e logopedisë</div>
                                    <div className="staffcont">adelina.haxhiu@kolegji-heimerer.eu</div>
                                    
                                </div>

                                <div className="col-lg-4 mb-5">
                                    <img src="/images/stafi.jpg" width="90%"></img>
                                    <div className="staffname mt-2">Adem Spahiu </div>
                                    <div className="staffdesc">Ph.D. cand.</div>
                                    <div className="staffpos">Profesor</div>
                                    <div className="staffcont">adem.spahiu@kolegji-heimerer.eu</div>
                               
                                </div>

                                <div className="col-lg-4 mb-5">
                                    <img src="/images/stafi.jpg" width="90%"></img>
                                    <div className="staffname mt-2">Adnan Hoxha</div>
                                    <div className="staffdesc">Ph.D. cand.</div>
                                    <div className="staffpos">Pro-Rektor për Projekte dhe Bashkëpunim Ndërkombëtar, Profesor</div>
                                    <div className="staffcont">adnan.hoxha@kolegji-heimerer.eu</div>
                                   
                                </div>
                        
                        </div>
                </div>
                <div className="col-lg-3">

                </div>

            </div>
        </div>
        <div>
        <Footer/>
        </div>
    </>
    )
}