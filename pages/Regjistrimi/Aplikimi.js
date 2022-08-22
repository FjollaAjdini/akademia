import Navbar from "../../components/Navbar";
import Footer from '../../components/Footer';


export default function Aplikimi () {
    return (

        <>
        <div className="cnt">
                <div className="koncnav">
                    <Navbar/>
                </div>
                <div className="topnav2">
                    PROCESI I APLIKIMIT
                </div>
                <div className="bannercontainer1">
                    {/* <img className="hisimg" src="/images/historia.jpg" width="100%"></img> */}
                </div>
                <div>
                    <div className="row">
                        <div className="col-lg-3">..</div>
                        <div className="col-lg-6">
                            <div className="row">
                            <div className="col-lg-3">
                                <p className="tt">PROCESI I APLIKIMIT</p>
                                <button className="shkarkoo">SHKARKO APLIKACIONIN</button>
                                <div className="prov">
                                    <p className="ppp">PROVIMI PRANUES</p>
                                    <p>Ketu do te gjenu informata lidhur me
                                    lendet te cilat kerkohen ne provim
                                    pranues</p>
                                    <button className="meshumee">MË SHUMË</button>
                                </div>
                            </div>
                            <div className="col-lg-3">
                            <div className="dscc">
                                <p className="prc">PROCESI I APLIKIMIT</p>
                                <p className="subtitle">LOREM IPSUM IS SIMPLY DUMMY</p>
                                <p className="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                sed diam nonummy nibh euismod tincidunt ut laoreet
                                dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                                veniam. </p>
                                    <br />
                                <p className="prc">DOKUMENTET QË DUHET TË DORËZOHEN PËR REGJISTRIM</p>
                                <p className="inf">INFERMIERI</p>  
                                <p>
                                    <ul>
                                        <li className="desc">Dokumenti</li>
                                        <li className="desc">Dokumenti</li>
                                        <li className="desc">Dokumenti</li>
                                        <li className="desc">Dokumenti</li>
                                    </ul>
                                </p>
                            </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3">...</div>
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>

        </div>

        </>
    )
}