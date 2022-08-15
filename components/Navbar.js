import Link from 'next/link';

export default function Navbar () {
        return (
         <div className='navi'>
            <div className='meny'>
               <div id="wrapper-navbar">
                  <header>
                     <div class="navbar navbar-expand-md">
                        <div class="container">
                           
                           <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropndown" aria-expanded="false" aria-label="Toggle navigation">
                           
                              <div id="nav-icon">
                                    <div> <img src='images/menu icon nav-01.svg'></img></div>
                                    <div>MENU</div>
                                 
                              </div>
                           </button>
                        </div>
                     </div>

                        <div className='main_nav'>
                           <div id="navbarNavDropdown" class="navbar-collapse collapse">
                              <ul id="main-menu" class="navbar-nav">
                                 <li class="nav-item">
                                    <Link href="/pages/koncepti"><a class="nav-link">RRETH NESH</a></Link>

                                 </li>
                                 <li class="nav-item">
                                    <a href="#" class="nav-link">TRAJNIMET</a>
                                       
                                 </li>
                                 <li class="nav-item">
                                    <a href="#" class="nav-link">SHKOLLA JOTE</a>
                                 </li>
                                 <li class="nav-item">
                                    <a href="#" class="nav-link">PYETJE TË SHPESHTA</a>
                                 </li>
                                 <li class="nav-item">
                                    <a href="#" class="nav-link">MË TË REJAT</a>
                                 </li>
                                 <li class="nav-item">
                                    <a href="#" class="nav-link">REGJISTRIMI</a>
                                 </li>
                                 <li class="nav-item">
                                    <a href="#" class="nav-link">-</a>
                                 </li>
                                 <li class="nav-item">
                                    <a href="#" class="nav-link">DEUTSCH</a>
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
