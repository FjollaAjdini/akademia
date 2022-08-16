import Link from 'next/link';
import Akreditimi from './AboutUs/Akreditimi';
import Akademia from './AboutUs/Akademia';
import MisioniVizioni from './AboutUs/MisioniVizioni';
import Praktike from './Mundesite/Praktike';
import Punesimi from './Mundesite/Punesimi';
import Kualifikimet from './ShkollaJote/kualifikimet';
import AftesiGj from './Trainings/AftesiGj';
import Certifikimet from './Trainings/Certifikimet';
import MesoGj from './Trainings/MesoGj';
import Footer from '/components/Footer';
import Navbar from '/components/Navbar';
import StudentLife from './ShkollaJote/StudentLife';



export default function Homepage () {
    return(
        <div className="cnt">
          <Navbar/>
            <div className="row">
                 <div className="col-lg-3">
                    ...
                 </div>
                 <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-3">
                             <div className='titledesc'>
                                <p className='title'>ÇKA NËNKUPTON ARSIMI DUAL</p>
                                <p className='subtitle'>LOREM IPSUM IS SIMPLY DUMMY</p>
                                <p className='desc'>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                    industry. Lorem Ipsum has been the industry's standard dummy
                                                    text ever since the 1500s, when an unknown printer took a galley
                                                    of type and scrambled it to make a type specimen book. It has
                                                    survived not only five centuries, but also the leap into electronic
                                                    typesetting, remaining essentially unchanged. It was popularised
                                                    in the 1960s with the release of Letraset sheets containing Lorem
                                                    Ipsum passages, and more recently with desktop publishing
                                                    software like Aldus PageMaker including versions of Lorem
                                                    Ipsum.It is a long established fact that a reader will be distracted
                                                    by the readable content of a page when looking at its layout. The... </p>
                               </div>
                                  <button className='meshum'>MË SHUMË</button>
                         </div>
                        <div className="col-lg-3">
                             <img className='qikaa' src='images/QIKA.svg'></img>
                        </div>
                    </div>
                 </div>
                 <div className="col-lg-3"></div>
            </div>





        <div>
            <div className='abonback'>
               <div className="row">
                <div className="col-lg-3"></div>
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-lg-3">
                         <p className='title'>ABONOHU PËR TË REJAT</p>
                         <p className='desc'>Për të pranuar informacione rreth trajnimeve dhe materiale
                                             tjera, vendosni emailin tuaj dhe shtypni butonin dërgo.
                                             Ju do të jeni ndër të parët që do të pranoni informata.</p>
                   </div>

                   <div className="col-lg-3">
                     <form className='form' method='POST'>
                      <input type="email" id='email' placeholder="Enter your email" />           
                      <button className='dergo'>DËRGO</button>
                     </form>
                   </div>
                 </div>
              </div>
               <div className="col-lg-3"></div>
             </div>
        </div>


        

         <div className="mv">
        <div className="row">
           <div className="col-lg-3"></div>
           <div className="col-lg-6">
               <div className="row">
                 <div className='col-lg-4'>
                         <img className='Foto' src='images/Foto.svg'></img>
                         <p className='newpar'>LAJME DHE NGJARJE 1</p>
                         <p className='datee'>12.08.2022</p>
                         <button className='meshum'>MË SHUMË</button>
                   </div>
                   <div className='col-lg-4'>
                         <img className='Foto' src='images/Foto.svg'></img>
                         <p className='newpar'>LAJME DHE NGJARJE 2</p>
                         <p className='datee'>13.08.2022</p>
                         <button className='meshum'>MË SHUMË</button>
                   </div>
                   <div className='col-lg-4'>
                         <img className='Foto' src='images/Foto.svg'></img>
                         <p className='newpar'>LAJME DHE NGJARJE 3</p>
                         <p className='datee'>14.08.2022</p>
                         <button className='meshum'>MË SHUMË</button>
                   </div>
               </div>
           </div>
           <div className="col-lg-3"></div>
        </div>




            <hr className='hr' />
              
          <div className='wh'>
            <div className='row'>
               <div className='col-lg-3'>...</div>
               <div className='col-lg-6'>
                  <div className='row'>
                     <div className='col-lg-3'>
                        <img className='steni' src='images/Steni.png'></img>
                        <div className='namep'>
                        <p className='name'>KARSTEN KLAPP</p>
                        <p className='position'>Drejtor</p>
                        </div>
                     </div>
                     <div className='col-lg-3'>
                       <div className='tsd'>
                        <p className='title'>AKADEMIA PROFESIONALE GJERMANE</p>
                        <p className='subtitle'>LOREM IPSUM IS SIMPLY DUMMY</p>
                        <p className='desc'>Lorem Ipsum is simply dummy text of the printing and typesetting
                           industry. Lorem Ipsum has been the industry's standard dummy text ever
                           since the 1500s, when an unknown printer took a galley of type and
                           scrambled it to make a type specimen book. It has survived not only five
                           centuries, but also the leap into electronic typesetting, remaining
                           essentially unchanged. It was popularised in the 1960s with the release
                           of Letraset sheets containing Lorem Ipsum passages, and more recently
                           with desktop publishing software like Aldus PageMaker including versions
                           of Lorem Ipsum.It is a long established fact that a reader will be
                          distracted by the readable content of a page when looking at its layout.
                          The point of using Lorem Ipsum is that it has a more-or-less...
                          distribution of letters, as opposed to using 'Content here, content ... </p>
                          <button className='meshum'>MË SHUMË</button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='col-lg-3'>...</div>
            </div>
            <hr className='hr' />
          </div>




              <div className='mv'>
                     <div className="row">
                             <div className="col-lg-3"></div>
                             <div className="col-lg-6">
                                <img className='thonjeza2' src='images/thonjeza2.svg'></img>
                                 <div className="row">
                                 <div className='col-lg-4'>
                                  <div className=''>
                                    <p className='pp'>MISIONI</p>
                                    <p className='dd'>Lorem ipsum dolor sit amet,
                                       consectetuer adipiscing elit,
                                       sed diam nonummy nibh
                                       euismod tincidunt ut dolore... </p>
                                    <button className='meshum'>MË SHUMË</button>
                                   </div> 
                                 </div>
                                  <div className='col-lg-4'>
                                    <div className='gg'>
                                    <p className='pp'>VIZIONI</p>
                                    <p className='dd'>Lorem ipsum dolor sit amet,
                                       consectetuer adipiscing elit,
                                       sed diam nonummy nibh
                                       euismod tincidunt ut dolore... </p>
                                       <button className='meshum'>MË SHUMË</button>
                                    </div>
                                   </div>
                                  <div className='col-lg-4'>
                                    <div className='ggg'>
                                     <p className='pp'>VLERAT</p>
                                     <p className='dd'>Lorem ipsum dolor sit amet,
                                        consectetuer adipiscing elit,
                                        sed diam nonummy nibh
                                        euismod tincidunt ut dolore... </p>
                                       <button className='meshum'>MË SHUMË</button>
                                     </div>
                                      <img className='thonjeza' src='images/thonjeza.svg'></img>
                                  </div>
                              </div>
                           </div>
                        <div className="col-lg-3"></div>
                     </div>
                     <hr className='hr' />
               </div>
                 

                  </div>




               <div className='mv'>
                  <div className='row'>
                        <div className='col-lg-3'></div>
                            <div className='col-lg-6'>
                                <div className='row'>
                                    <div className='col-lg-3'>
                                        <p className='title'>KUALIFIKIMET</p>
                                        <p className='subtitle'>LOREM IPSUM IS SIMPLY DUMMY</p>
                                        <p className='desc'>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                             since the 1500s, when an unknown printer took a galley of type and
                                                            scrambled it to make a type specimen book. It has survived not only five
                                                             centuries, but also the leap into electronic typesetting, remaining
                                                             essentially unchanged. It was popularised in the 1960s with the release
                                                             of Letraset sheets containing Lorem Ipsum passages, and more recently
                                                             with desktop publishing software like Aldus PageMaker including versions
                                                             of Lorem Ipsum.It is a long established fact that a reader will be
                                                             distracted by the readable content of a page when looking at its layout.
                                                             The point of using Lorem Ipsum is that it has a more-or-less...
                                                             distribution of letters, as opposed to using 'Content here, content ... </p>
                                        <button className='meshum'>MË SHUMË</button>
                                     </div>
                                   <div className='col-lg-3'>
                                      <img className='qik' src='images/qik.png'></img>
                                     <div className='qikn'>
                                      <p className='name'>EMRI MBIEMRI</p>
                                      <p className='position'>Pozita</p>
                                     </div>
                                   </div>
                                </div>
                            </div>
                        <div className='col-lg-3'></div>
                     </div>

                     <hr  className='hr'/>
               </div>


           

             <div className='mv'>
            <div className='row'>
               <div className='col-lg-3'>...</div>
               <div className='col-lg-6'>
                  <div className='row'>
                     <div className='col-lg-3'>
                        <img className='steni' src='images/Steni.png'></img>
                        <div className='namep'>
                        <p className='name'>KARSTEN KLAPP</p>
                        <p className='position'>Drejtor</p>
                        </div>
                     </div>
                     <div className='col-lg-3'>
                       <div className='tsd'>
                        <p className='title'>AKADEMIA PROFESIONALE GJERMANE</p>
                        <p className='subtitle'>LOREM IPSUM IS SIMPLY DUMMY</p>
                        <p className='desc'>Lorem Ipsum is simply dummy text of the printing and typesetting
                           industry. Lorem Ipsum has been the industry's standard dummy text ever
                           since the 1500s, when an unknown printer took a galley of type and
                           scrambled it to make a type specimen book. It has survived not only five
                           centuries, but also the leap into electronic typesetting, remaining
                           essentially unchanged. It was popularised in the 1960s with the release
                           of Letraset sheets containing Lorem Ipsum passages, and more recently
                           with desktop publishing software like Aldus PageMaker including versions
                           of Lorem Ipsum.It is a long established fact that a reader will be
                          distracted by the readable content of a page when looking at its layout.
                          The point of using Lorem Ipsum is that it has a more-or-less...
                          distribution of letters, as opposed to using 'Content here, content ... </p>
                          <button className='meshum'>MË SHUMË</button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='col-lg-3'></div>
            </div>
            <hr className='hr' />
          </div>
            
            </div>

            <div className='bashk'>
               <div className='row'>
                  <div className='col-lg-3'></div>
                  <div className='col-lg-6'>
                     <div>
                        <p className='title'>BASHKËPUNIMI ME:</p>
                       <div className='tex'> <img className='shigj' src="/images/Shigj.png"></img> Pediatritë në praktikën private</div>
                       <div className='tex'> <img className='shigj' src="/images/Shigj.png"></img> Spitale për fëmijë</div>
                       <div className='tex'> <img className='shigj' src="/images/Shigj.png"></img> Shërbimet e infermierisë pediatrike</div>
                     </div>
                  </div>
                  <div className='col-lg-3'></div>
               </div>
            </div>
           <MisioniVizioni/>
           <Akreditimi/>
           <Kualifikimet/>
           <MesoGj/>
           <AftesiGj/>
           <Certifikimet/>
           <Praktike/>
           <Punesimi/>
           <Akademia/>
           <StudentLife/>
          {/* <Footer/> */}
      </div>
        
    )
}