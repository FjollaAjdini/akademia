import Link from 'next/link';


export default function FootNav () {
        return (
      <div className="home-containerr">
            <ul className="list-group">
            <li className="list-group-itemm">
                
               <div className="container-shh">
               <p className="nx12" data-toggle="collapse" data-target="#collapse0" >RRETH NESH</p>
               <div id="collapse0" className="collapse">       
                        <div className="ol">
                                 
                                 <div className="oll"><Link href="/AboutUs/Akademia"><p class="">Akademia Profesionale Gjermane</p></Link></div>
                                 <div className="oll"><Link href="/AboutUs/MisioniVizioni"><p class="">Misioni &#38;Vizioni&#38;Vlerat</p></Link></div> 
                                 <div className="oll"><Link href="/AboutUs/koncepti"><p class="">Koncepti jonë (Arsimi Dual)</p></Link></div>
                                 <div className="oll"><Link href="/AboutUs/Akreditimi"><p class="">Akreditimi</p></Link></div>
                                 <div><Link href="/AboutUs/Partneret"><p class="">Partnerët</p></Link></div>
                         </div>                                              
               </div>                 
               </div>
            </li>
            <li className="list-group-itemm">
            <div className="container-shh">
               <p className="nx12" data-toggle="collapse" data-target="#collapse1" >SHKOLLA JOTE</p>
               <div id="collapse1" className="collapse">
                    <div className="ol">
                                <div className="opttitle1 mb-3 mt-1"><Link href="/ShkollaJote/Kualifikimet"><p class="">Kualifikimet</p></Link></div>
                                            
                                       <div className="oll"><Link href="/ShkollaJote/stafi"><p class="">Stafi</p></Link></div>

                                       <div className="oll"><Link href="/ShkollaJote/Laboratori"><p class="">Laboratori</p></Link></div>

                                       <div className="oll"><Link href="/ShkollaJote/StudentLife"><p class="">Jeta e Nxënesit</p></Link></div>

                                       <div className="oll"><Link href="/ShkollaJote/Transporti"><p class="">Transporti</p></Link></div>

                                       <div><Link href="/ShkollaJote/Kantina"><p class="">Kantina</p></Link></div>

                    </div>                                          
               </div>
            </div>
            </li>
            <li className="list-group-itemm        ">
            <div className="container-shh">
               <p className="nx12" data-toggle="collapse" data-target="#collapse2" >TRAJNIMET</p>
               <div id="collapse2" className="collapse">
                      <div className="ol"> 
                            
                                  <div className="oll"><Link href="/Trainings/MesoGj"><p class="">Mëso Gjermanisht</p></Link></div>
                                             
                                             <div className="oll"><Link href="/Trainings/AftesiGj"><p class="">Aftësi të Gjelberta</p></Link></div>

                                             <div><Link href="/Trainings/Certifikimet"><p class="">Çërtifikimet</p></Link></div>
                      </div>
               </div>
            </div>
            </li>
            <li className="list-group-itemm">
            <div className="container-shh">
               <p className="nx12" data-toggle="collapse" data-target="#collapse3" > MUNDËSITË</p>
               <div id="collapse3" className="collapse">
                        <div className="ol"> 
                                 <div className="oll"><Link href="/Mundesite/Punesimi"><p  class="">Mundësi Punësimi</p></Link></div>
                                             
                                 <div className="oll"><Link href="/Mundesite/Praktike"><p class="">Praktikë në Gjermani & Austri</p></Link></div>
                        </div>
                                                                        
               </div>
            </div>
            </li>
            <div className="list-group-itemm">
            <div className="container-shh">
              <Link href="/faq"><p className="nx12" data-toggle="collapse" data-target="#collapse4" >PYETJE TE SHPESHTA</p></Link> 
            </div>
            </div>
            <div className="list-group-itemm">
            <div className="container-shh">
              <Link href="/MeTeRejat/MeTeRejat"><p className="nx12" data-toggle="collapse" data-target="#collapse5" >ME TE REJAT</p></Link> 
            </div>
            </div>
            <li className="list-group-itemm">
            <div className="container-shh">
               <p className="nx12" data-toggle="collapse" data-target="#collapse6" >REGJISTRIMI</p>
               <div id="collapse6" className="collapse">
                       <div className="ol"> 
                                  <div className="oll"><Link href="/Regjistrimi/Aplikimi"><p class="">Procesi i Aplikimit</p></Link></div>
                                             
                                             <div className="oll"><Link href="/Regjistrimi/Afatet"><p class="">Afatet e Aplikimit</p></Link></div>

                                             <div className="oll"><Link href="/Regjistrimi/Kosto"><p class="">Kostot Financiare</p></Link></div>
                        </div>                                                  
               </div>
            </div>
            </li>
            <div className="list-group-itemm">
            <div className="container-shh">
               <p className="nx12" data-toggle="collapse" data-target="#collapse7" >DEUTSCH</p>
            </div>
            </div>
            </ul>
            </div>
       
              )
              }