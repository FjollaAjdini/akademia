import Link from 'next/link';

export default function Navbar () {
        return (
         <div className='navi'>
            <div className='meny'>
               <div id="wrapper-navbar">
                  <header>
                     <div className="navbar navbar-expand-md">
                        <div class="container">
                           
<<<<<<< HEAD
                           <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropndown" aria-expanded="false" aria-label="Toggle navigation">
=======
                           <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
>>>>>>> 7970eb35e27ec7f280872a50e077d9a9ac922d02
                           
                              <div id="nav-icon">
                                    <div> <img src='images/menu icon nav-01.svg'></img></div>
                                    <div>MENU</div>
                                 
                              </div>
                           </button>
                        </div>
                     </div>

                        <div className='main_nav'>
                           <div id="navbarNavDropdown" className="navbar-collapse collapse">
                              <ul id="main-menu" class="navbar-nav">
<<<<<<< HEAD
                                 <li class="nav-item">
                                    <Link href="/pages/koncepti"><a class="nav-link">RRETH NESH</a></Link>

                                 </li>
                                 <li class="nav-item">
                                    <a href="#" class="nav-link">TRAJNIMET</a>
                                       
=======
                                 <li className="nav-item">
                                    <a href="#" className="nav-link">RRETH NESH</a>
                                 </li>
                                 <li className="nav-item">
                                    <a href="#" className="nav-link">TRAJNIMET</a>
>>>>>>> 7970eb35e27ec7f280872a50e077d9a9ac922d02
                                 </li>
                                 <li className="nav-item">
                                    <a href="#" className="nav-link">SHKOLLA JOTE</a>
                                 </li>
                                 <li className="nav-item">
                                    <a href="#" className="nav-link">PYETJE TË SHPESHTA</a>
                                 </li>
                                 <li className="nav-item">
                                    <a href="#" className="nav-link">MË TË REJAT</a>
                                 </li>
                                 <li className="nav-item">
                                    <a href="#" className="nav-link">REGJISTRIMI</a>
                                 </li>
                                 <li className="nav-item">
                                    <a href="#" className="nav-link">-</a>
                                 </li>
                                 <li className="nav-item">
                                    <a href="#" className="nav-link">DEUTSCH</a>
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
