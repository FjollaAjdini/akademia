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
                                    <div>MENU</div>
                                 
                              </div>
                           </button>
                        </div>
                     </div>

                        <div className='main_nav'>
                           <div id="navbarNavDropdown" className="navbar-collapse collapse">
                              <ul id="main-menu" class="navbar-nav">

                              <li className="list-group-item">

                                 <li class="nav-item">
                                    
                                    <Link href="/AboutUs/MisioniVizioni"><a class="nav-links">BALLINA</a></Link>

                                 </li>
                              </li>
                
                                 <li class="nav-item">
                                 <p className="nav-links" data-toggle="collapse" data-target="#collapse0" >RRETH NESH</p>
                                 <div id="collapse0" className="collapse">
                                 
                                    <div className="cont ml-5 mb-5">
                                          
                                          <div className="opttitle1 mb-3 mt-1"><Link href="/AboutUs/Akademia"><a class="oll">Akademia Profesionale Gjermane</a></Link></div>
                                            
                                          <div className="opttitle1 mb-3 mt-1"><Link href="/AboutUs/MisioniVizioni"><a class="">Misioni & Vizioni & Vlerat</a></Link></div>

                                          <div className="opttitle1 mb-3 mt-1"><Link href="/AboutUs/koncepti"><a class="">Koncepti jonë (Arsimi Dual)</a></Link></div>

                                          <div className="opttitle1 mb-3 mt-1"><Link href="/AboutUs/Akreditimi"><a class="">Akreditimi</a></Link></div>

                                          <div className="opttitle1 mb-3 mt-1"><Link href="/AboutUs/Parneret"><a class="">Partnerët</a></Link></div>
                                           
                                    </div>                                                
                                 </div>   
                                 </li>
                             


                               
                                 <li class="nav-item">
                                 <p className="nav-links" data-toggle="collapse" data-target="#collapse11" >SHKOLLA JOTE</p>
                                 <div id="collapse11" className="collapse">
                                 
                                    <div className="cont ml-5 mb-3">
                                          
                                          <div className="opttitle1 mb-3 mt-1"><Link href="/AboutUs/Akademia"><a class="">Kualifikimet</a></Link></div>
                                            
                                          <div className="opttitle1 mb-3 mt-1"><Link href="/AboutUs/MisioniVizioni"><a class="">Stafi</a></Link></div>

                                          <div className="opttitle1 mb-3 mt-1"><Link href="/AboutUs/koncepti"><a class="">Laboratori</a></Link></div>

                                          <div className="opttitle1 mb-3 mt-1"><Link href="/AboutUs/Akreditimi"><a class="">Jeta e Nxënesit</a></Link></div>

                                          <div className="opttitle1 mb-3 mt-1"><Link href="/AboutUs/MisioniVizioni"><a class="">Transporti</a></Link></div>

                                          <div className="opttitle1 mb-3 mt-1"><Link href="/AboutUs/MisioniVizioni"><a class="">Kantina</a></Link></div>
                                           
                                    </div>                                                
                                 </div>

                                 </li>

                                 <li className="nav-item">
                                 <p className="nav-links" data-toggle="collapse" data-target="#collapse2" >TRAJNIMET</p>
                                 <div id="collapse2" className="collapse">
                                 
                                       <div className="cont ml-5 mb-3">
                                             
                                             <div className="opttitle1 mb-3 mt-1"><Link href="/AboutUs/Akademia"><a class="">Mëso Gjermanisht</a></Link></div>
                                             
                                             <div className="opttitle1 mb-3 mt-1"><Link href="/AboutUs/MisioniVizioni"><a class="">Aftësi të Gjelberta "green skills"</a></Link></div>

                                             <div className="opttitle1 mb-3 mt-1"><Link href="/AboutUs/koncepti"><a class="">Çërtifikimet</a></Link></div>
                                             
                                       </div>        
                                    </div>

                                 </li>

                                 <li className="nav-item">
                                 <p className="nav-links" data-toggle="collapse" data-target="#collapse3" >MUNDËSITË</p>
                                 <div id="collapse3" className="collapse">
                                 
                                       <div className="cont ml-5 mb-3">
                                             
                                             <div className="opttitle1 mb-3 mt-1"><Link href="/AboutUs/Akademia"><a class="">Mundësi Punësimi</a></Link></div>
                                             
                                             <div className="opttitle1 mb-3 mt-1"><Link href="/AboutUs/MisioniVizioni"><a class="">Praktikë në Gjermani & Austri</a></Link></div>
                                             
                                       </div>        
                                    </div>

                                 </li>
                              
                                 <li className="nav-item">
                                    <a href="#" className="nav-links"><Link href="/faq"><a class="">PYETJE TË SHPESHTA</a></Link></a>
                                 </li>
                                 <li className="nav-item">
                                    <a href="#" className="nav-links"><Link href="/faq"><a class="">MË TË REJAT</a></Link></a>
                                 </li>
                                 <li className="nav-item">
                                 <p className="nav-links" data-toggle="collapse" data-target="#collapse4" >REGJISTRIMI</p>
                                 <div id="collapse4" className="collapse">
                                 
                                       <div className="cont ml-5 mb-3">
                                             
                                             <div className="opttitle1 mb-3 mt-1"><Link href="/AboutUs/Akademia"><a class="">Procesi i Aplikimit</a></Link></div>
                                             
                                             <div className="opttitle1 mb-3 mt-1"><Link href="/AboutUs/MisioniVizioni"><a class="">Afatet e Aplikimit</a></Link></div>

                                             <div className="opttitle1 mb-3 mt-1"><Link href="/AboutUs/MisioniVizioni"><a class="">Kostot Financiare</a></Link></div>
                                             
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
