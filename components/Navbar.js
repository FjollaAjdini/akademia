import Link from 'next/link';

export default function Navbar () {
        return (
         <div className='navi'>
            <div className='meny'>
               <div id="wrapper-navbar">
                  <header>
                     <div className="navbar navbar-expand-md">
                        <div class="container">

                           <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropndown" aria-expanded="false" aria-label="Toggle navigation"> </button>
              
                           <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropndown" aria-expanded="false" aria-label="Toggle navigation"> </button>
                           <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">

                              <div id="nav-icon">
                                    <div> <img src='/images/menu-icon.svg'></img></div>                                 
                              </div>
                           </button>
                        </div>
                     </div>
                     <div className="navbar1">MENU</div>

                        <div className='main_nav'>
                         <div id="navbarNavDropdown" className="navbar-collapse collapse">
                         <div id="accordion">
                        {/* <div class="card">
                           <div class="card-header" id="headingOne">
                              <h5 class="mb-0">
                              <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                 Collapsible Group Item #1
                              </button>
                              </h5>
                           </div>

                           <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                              <div class="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                              </div>
                           </div>
                        </div>
                        <div class="card">
                           <div class="card-header" id="headingTwo">
                              <h5 class="mb-0">
                              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                 Collapsible Group Item #2
                              </button>
                              </h5>
                           </div>
                           <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                              <div class="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                              </div>
                           </div>
                        </div>
                        <div class="card">
                           <div class="card-header" id="headingThree">
                              <h5 class="mb-0">
                              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                 Collapsible Group Item #3
                              </button>
                              </h5>
                           </div>
                           <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                              <div class="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                              </div>
                           </div>
                        </div>
                        </div>
                     */}
                        </div>
                              <ul id="main-menu" class="navbar-nav">
                              <li className="list-group-item">

                                 <li class="nav-item">
 
                                    <Link href="/Homepage"><a class="nav-links" style={{fontSize:"35px"}}>MENU</a></Link> 

                                 </li>
                              </li>

                              
                              <li className="list-group-item">

                                 <li class="nav-item">

                                    
                                    <Link href="/Homepage"><a class="nav-links">BALLINA</a></Link>
                                    

                                 </li>
                              </li>

                              {/* <li className="list-group-item">

                                 <li class="nav-item">
                                 
                                    
                                    <Link href="/Homepage"><a class="nav-links"></a></Link>
                                    

                                 </li>
                              </li> */}

                              <li class="nav-item">
                                 <p className="nav-links" data-toggle="collapse" data-target="#collapse112" >RRETH NESH</p>
                                 <div id="collapse112" className="collapse">
                                 
                                    <div className="cont ml-2 mb-2">
                                          
                                          <div className="opttitle1 mb-1 mt-1"><Link href="/AboutUs/Akademia"><a class="">Akademia Profesionale Gjermane</a></Link></div>
                                            
                                          <div className="opttitle1 mb-1 mt-1"><Link href="/AboutUs/MisioniVizioni"><a class="">Misioni & Vizioni & Vlerat</a></Link></div>

                                          <div className="opttitle1 mb-1 mt-1"><Link href="/AboutUs/koncepti"><a class="">Koncepti jonë (Arsimi Dual)</a></Link></div>

                                          <div className="opttitle1 mb-1 mt-1"><Link href="/AboutUs/Akreditimi"><a class="">Akreditimi</a></Link></div>

                                          <div className="opttitle1 mb-1 mt-1"><Link href="/AboutUs/Partneret"><a class="">Partnerët</a></Link></div>

                                          
                                           
                                    </div>                                                
                                 </div>

                                 </li>
                
                                 {/* <li class="nav-item">
                                 <p className="nav-links" data-toggle="collapse" data-target="#collapse0" >RRETH NESH</p>
                                 <div id="collapse0" className="collapse">
                                 
                                    <div className="cont ml-5 mb-5">
                                          
                                          <div className="opttitle1 mb-1 mt-1"><Link href="/AboutUs/Akademia"><a class="">Akademia Profesionale Gjermane</a></Link></div>
                                            
                                          <div className="opttitle1 mb-1 mt-1"><Link href="/AboutUs/MisioniVizioni"><a class="">Misioni & Vizioni & Vlerat</a></Link></div>

                                          <div className="opttitle1 mb-1 mt-1"><Link href="/AboutUs/koncepti"><a class="">Koncepti jonë (Arsimi Dual)</a></Link></div>

                                          <div className="opttitle1 mb-1 mt-1"><Link href="/AboutUs/Akreditimi"><a class="">Akreditimi</a></Link></div>

                                          <div className="opttitle1 mb-1 mt-1"><Link href="/AboutUs/MisioniVizioni"><a class="">Partnerët</a></Link></div>
                                           
                                    </div>                                                
                                 </div>
                                 </li> */}
                             


                               
                                 <li class="nav-item">
                                 <p className="nav-links nx2" data-toggle="collapse" data-target="#collapse11" >SHKOLLA JOTE</p>
                                 <div id="collapse11" className="collapse">
                                 
                                    <div className="cont ml-5 mb-3">
                                          
                                          <div className="opttitle1 mb-1 mt-1"><Link href="/ShkollaJote/Kualifikimet"><a class="">Kualifikimet</a></Link></div>
                                            
                                          <div className="opttitle1 mb-1 mt-1"><Link href="/ShkollaJote/stafi"><a class="">Stafi</a></Link></div>

                                          <div className="opttitle1 mb-1 mt-1"><Link href="#"><a class="">Laboratori</a></Link></div>

                                          <div className="opttitle1 mb-1 mt-1"><Link href="/ShkollaJote/StudentLife"><a class="">Jeta e Nxënesit</a></Link></div>

                                          <div className="opttitle1 mb-1 mt-1"><Link href="/ShkollaJote/Transporti"><a class="">Transporti</a></Link></div>

                                          <div className="opttitle1 mb-1 mt-1"><Link href="/AboutUs/MisioniVizioni"><a class="">Kantina</a></Link></div>
                                           
                                    </div>                                                
                                 </div>

                                 </li>

                                 <li className="nav-item">
                                 <p className="nav-links" data-toggle="collapse" data-target="#collapse2" >TRAJNIMET</p>
                                 <div id="collapse2" className="collapse">
                                 
                                       <div className="cont ml-5 mb-3">
                                             
                                             <div className="opttitle1 mb-1 mt-1"><Link href="/Trainings/MesoGj"><a class="">Mëso Gjermanisht</a></Link></div>
                                             
                                             <div className="opttitle1 mb-1 mt-1"><Link href="/Trainings/AftesiGj"><a class="">Aftësi të Gjelberta "green skills"</a></Link></div>

                                             <div className="opttitle1 mb-1 mt-1"><Link href="/Trainings/Certifikimet"><a class="">Çërtifikimet</a></Link></div>
                                             
                                       </div>        
                                    </div>

                                 </li>

                                 <li className="nav-item">
                                 <p className="nav-links" data-toggle="collapse" data-target="#collapse3" >MUNDËSITË</p>
                                 <div id="collapse3" className="collapse">
                                 
                                       <div className="cont ml-5 mb-3">
                                             
                                             <div className="opttitle1 mb-1 mt-1"><Link href="/Mundesite/Punesimi"><a class="">Mundësi Punësimi</a></Link></div>
                                             
                                             <div className="opttitle1 mb-1 mt-1"><Link href="/Mundesite/Praktike"><a class="">Praktikë në Gjermani & Austri</a></Link></div>
                                             
                                       </div>        
                                    </div>

                                 </li>
                              
                                 <li className="nav-item">
                                    <a href="#" className="nav-links"><Link href="/faq"><a class="">PYETJE TË SHPESHTA</a></Link></a>
                                 </li>
                                 <li className="nav-item">
                                    <a href="#" className="nav-links"><Link href="#"><a class="">MË TË REJAT</a></Link></a>
                                 </li>
                                 <li className="nav-item">
                                 <p className="nav-links" data-toggle="collapse" data-target="#collapse4" >REGJISTRIMI</p>
                                 <div id="collapse4" className="collapse">
                                 
                                       <div className="cont ml-5 mb-3">
                                             
                                             <div className="opttitle1 mb-1 mt-1"><Link href="/Regjistrimi/Aplikimi"><a class="">Procesi i Aplikimit</a></Link></div>
                                             
                                             <div className="opttitle1 mb-1 mt-1"><Link href="/Regjistrimi/Afatet"><a class="">Afatet e Aplikimit</a></Link></div>

                                             <div className="opttitle1 mb-1 mt-1"><Link href="/Regjistrimi/Kosto"><a class="">Kostot Financiare</a></Link></div>
                                             
                                       </div>        
                                    </div>

                                 </li>
                                 <li className="nav-item">
                                    <a href="#" className="nav-links">-</a>
                                 </li>
                                 <li className="nav-item">
                                    <a href="#" className="nav-links">DEUTSCH</a>
                                 </li>

                              </ul>
                              
                           </div>

                           
                        </div>

                  </header>
               </div>

            </div>
            <div className='center'>
               <div className='logbackNav'>
                  <img className='logoNav' src="/images/Akademia_profesionale_green-01.svg"></img>
               </div>
            </div>
            <div className='apliko_butoni'>
               <button className='apliko'>APLIKO</button>
            </div>
            <div className='gjuha'>
               <div className='gjuhet'>
                           <p className='shq'>SHQ</p>
                           <p className='de'>DE</p>
                     </div>
            </div>

         </div>
         
)};
