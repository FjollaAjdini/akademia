import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function faq() {
  return (
    <>
    <div className="koncnav">
            <Navbar/>
    </div>
        <div className="topnav2">
            PYETJE TË SHPESHTA
        </div>
        <div className="bannercontainerfaq">
            {/* <img className="hisimg" src="/images/historia.jpg" width="100%"></img> */}
            
        </div>
        <div className="cnt">
            
            <div className="home-container">
            <p className="mvvtitle">PYETJE TË SHPESHTA</p>
            <ul className="list-group">
            <li className="list-group-item">
                
               <div className="container-sh">
               <p className="nx1" data-toggle="collapse" data-target="#collapse0" >Cilat janë kriteret për pranim?</p>
               <div id="collapse0" className="collapse">
                
                    <div className="cont ml-5 mb-5 fqcn">
                        
                        <div className="opttitle1 mb-3 mt-5">Kriteret për pranim për programet Bachelor: </div>
                             <ul>
                                 <li>Provmi pranues 40%</li>
                                 <li>Testi i maturës 30%</li>
                                 <li>Suksesi në shkollimin e mesëm 30%</li>
                                 <li>Kriteri i kalueshmerisë 51%</li>
                             </ul>

                             <div className="opttitle1 mb-3 mt-5">Kriteret për pranim për programet Master</div>
                             <ul>
                                 <li>Intervista 60%</li>
                                 <li>Nota mesatare 20%</li>
                                 <li>Njohja e gjuheve te huaja 20%</li>
                             </ul>
                    </div>                                                
               </div>
               </div>
            </li>
            <hr></hr>
            <li className="list-group-item">
            <div className="container-sh">
               <p className="nx1" data-toggle="collapse" data-target="#collapse1" >A ofrojmë mundësi punësimi jashtë vendit?</p>
               <div id="collapse1" className="collapse">
                <div className="cont ml-5 mb-5 fqcn">
                    <div className="opttitle1 mb-3 mt-5">Ne ofrojmë mundësi praktike dhe punësimi brenda dhe jashtë vendit.</div>
                </div>                                           
               </div>
            </div>
            </li>
            <hr></hr>
            <li className="list-group-item">
            <div className="container-sh">
               <p className="nx1" data-toggle="collapse" data-target="#collapse3" >A ofrohen kurse të gjuhës gjermane?</p>
               <div id="collapse3" className="collapse">
               <div className="cont ml-5 mb-5 fqcn">
                    <div className="opttitle1 mb-3 mt-5">Ne ofrojmë kurse falas për gjuhën gjermane.</div>
                </div>                                                       
               </div>
            </div>
            </li>
            <hr></hr>
            <li className="list-group-item">
            <div className="container-sh">
               <p className="nx1" data-toggle="collapse" data-target="#collapse4" >A është obligative pjesëmarrja në ligjerata?</p>
               <div id="collapse4" className="collapse">
               <div className="cont ml-5 mb-5 fqcn">
                    <div className="opttitle1 mb-3 mt-5">Pjesëmarrja është obligative në ligjerata dhe ushtrime. </div>
                </div>                                                   
               </div>
            </div>
            </li>
            <hr></hr>
            <li className="list-group-item">
            <div className="container-sh">
               <p className="nx1" data-toggle="collapse" data-target="#collapse5" >A jeni të akredituar?</p>
               <div id="collapse5" className="collapse">
               <div className="cont ml-5 mb-5 fqcn">
                    <div className="opttitle1 mb-3 mt-5">Kolegji Heimerer është i akredituar nga Agjensioni Ndërkombëtar për Akreditim, Evalag, i cili është pjesë e ENQA dhe EQAR.</div>
                </div>                                                     
               </div>
            </div>
            </li>
            <hr></hr>
            <li className="list-group-item">
            <div className="container-sh">
               <p className="nx1" data-toggle="collapse" data-target="#collapse6" >A mundësohet studim për ndonjë semestër jashtë vendit?</p>
               <div id="collapse6" className="collapse">
               <div className="cont ml-5 mb-5 fqcn">
                    <div className="opttitle1 mb-3 mt-5">Për studentet e dalluar ne ofrojmë mundesi studimi per një semester ose edhe më shumë jashtë vendit.</div>
                </div>                                                     
               </div>
            </div>
            </li>
            <hr></hr>
            </ul>
            </div>

        </div>

        <Footer/>
    </>
  )
}