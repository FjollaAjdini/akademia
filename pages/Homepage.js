import Link from 'next/link';
import Footer from '/components/Footer';
import Navbar from '/components/Navbar';


export default function Homepage () {
    return(
        <div>
          <Navbar/>
          <div className='textimg'>
            <div className='row'>
             
              <div className='col-md-2'>
                  <img className='socialsfb' src="images/fb-01.svg"></img>
                     <img className='socialsinsta' src="images/insta-01.svg"></img>
                     <img className='socialsln' src="images/ln-01.svg"></img>
              </div>
              
              <div className='col-md-4'>
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
              <div className='col-md-5'> <img className='qika' src='images/QIKA.svg'></img></div>
            </div>
          </div>


         <div>
            <div className='abonback'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='textt'>
                   <p className='titlee'>ABONOHU PËR TË REJAT</p>
                       <p className='desc'>Për të pranuar informacione rreth trajnimeve dhe materiale
                         tjera, vendosni emailin tuaj dhe shtypni butonin dërgo.
                         Ju do të jeni ndër të parët që do të pranoni informata.</p>
                  </div>
                </div>
                <div className='col-md-6'>
                   <form method='POST'>
                    <input id='email' type="email" placeholder='Email Address' onChange={e => setEmail(e.target.value)}/>
                    <button className='dergo'>DËRGO</button>
                   </form>
                </div>
              </div>
            </div>


            
            <div className='lajme'>
                <p className='newparr'> MË TË REJAT</p>
               <div className='row'>
                   <div className='col-md-4'>
                         <img className='Foto' src='images/Foto.svg'></img>
                         <p className='newpar'>LAJME DHE NGJARJE 1</p>
                         <p className='datee'>12.08.2022</p>
                         <button className='meshum'>MË SHUMË</button>
                   </div>
                   <div className='col-md-4'>
                         <img className='Foto' src='images/Foto.svg'></img>
                         <p className='newpar'>LAJME DHE NGJARJE 2</p>
                         <p className='datee'>13.08.2022</p>
                         <button className='meshum'>MË SHUMË</button>
                   </div>
                   <div className='col-md-4'>
                         <img className='Foto' src='images/Foto.svg'></img>
                         <p className='newpar'>LAJME DHE NGJARJE 3</p>
                         <p className='datee'>14.08.2022</p>
                         <button className='meshum'>MË SHUMË</button>
                   </div>
                    <hr className='hrhr' />
               </div>
            </div>
          </div>
              


            <div className='pipsteni'>
                <div className='row'>
                   <div className='col-md-6'>
                    <img className='steni' src='images/KARSTENI.svg'></img>
                   </div>
                  <div className='col-md-6'>
                      <div className='stenidesc'>
                         <p className='title'>AKADEMIA PROFESIONALE GJERMANE</p>
                         <p className='subtitle'>LOREM IPSUM IS SIMPLY DUMMY</p>
                         <p className='desc'>Lorem Ipsum is simply dummy text of the    printing and typesetting
                         industry. Lorem Ipsum has been the industry's standard dummy
                         text ever since the 1500s, when an unknown printer took a galley
                         of type and scrambled it to make a type specimen book. It has
                         survived not only five centuries, but also the leap into   electronic
                         typesetting, remaining essentially unchanged. It was popularised
                         in the 1960s with the release of Letraset sheets containing Lorem
                         Ipsum passages, and more recently with desktop publishing
                         software like Aldus PageMaker including versions of Lorem
                         Ipsum.It is a long established fact that a reader will be distracted
                         by the readable content of a page when looking at its layout. The... </p>
                        <button className='meshum'>MË SHUMË</button>
                       </div>
                   </div>
                        <hr className='hrhrr' />
                </div>
            </div>


              <div className='misioni'>
                  <img className='thonjeza2' src='images/thonjeza2.svg'></img>
               <div className='row'>
                   <div className='col-md-4'>
                        <p className='misparr'> MISIONI</p>
                         <p className='mispar'>
                            Lorem ipsum   dolor sit amet,
                            consectetuer adipiscing elit,
                            sed diam nonummy nibh
                            euismod tincidunt ut dolore... </p>
                         <button className='meshum'>MË SHUMË</button>
                   </div>
                   <div className='col-md-4'>
                         <p className='misparr'> VIZIONI</p>
                        <p className='mispar'>
                            Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit,
                            sed diam nonummy nibh
                            euismod tincidunt ut dolore... </p>
                         <button className='meshum'>MË SHUMË</button>
                   </div>
                   <div className='col-md-4'> 
                         <p className='misparr'> VLERAT</p>
                        <p className='mispar'>
                            Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit,
                            sed diam nonummy nibh
                            euismod tincidunt ut dolore... </p>
                         <button className='meshum'>MË SHUMË</button>
                   </div>
                   <img className='thonjeza' src='images/thonjeza.svg'></img>
                    <hr className='hrhr' />
               </div>
            </div>
      



                <div className='kualifikimet'>
                   <div className='row'>
                      <div className='col-md-6'>
                        <div className='kualdesc'>
                          <p className='ttitle'>KUALIFIKIMET</p>
                         <p className='subtitle'>LOREM IPSUM IS SIMPLY DUMMY</p>
                         <p className='desc'>Lorem Ipsum is simply dummy text of the    printing and typesetting
                         industry. Lorem Ipsum has been the industry's standard dummy
                         text ever since the 1500s, when an unknown printer took a galley
                         of type and scrambled it to make a type specimen book. It has
                         survived not only five centuries, but also the leap into   electronic
                         typesetting, remaining essentially unchanged. It was popularised
                         in the 1960s with the release of Letraset sheets containing Lorem
                         Ipsum passages, and more recently with desktop publishing
                         software like Aldus PageMaker including versions of Lorem
                         Ipsum.It is a long established fact that a reader will be distracted
                         by the readable content of a page when looking at its layout. The... </p>
                          <button className='meshum'>MË SHUMË</button>
                         </div>
                      </div>
                      <div className='col-md-6'>
                         <img className='stenii' src='images/KARSTENI.svg'></img>
                      </div>
                         <hr className='hrhrr' />
                   </div>
                </div>

                 

                 <div className='pipsteni'>
                <div className='row'>
                   <div className='col-md-6'>
                    <img className='steni' src='images/KARSTENI.svg'></img>
                   </div>
                  <div className='col-md-6'>
                      <div className='stenidesc'>
                         <p className='title'>AKADEMIA PROFESIONALE GJERMANE</p>
                         <p className='subtitle'>LOREM IPSUM IS SIMPLY DUMMY</p>
                         <p className='desc'>Lorem Ipsum is simply dummy text of the    printing and typesetting
                         industry. Lorem Ipsum has been the industry's standard dummy
                         text ever since the 1500s, when an unknown printer took a galley
                         of type and scrambled it to make a type specimen book. It has
                         survived not only five centuries, but also the leap into   electronic
                         typesetting, remaining essentially unchanged. It was popularised
                         in the 1960s with the release of Letraset sheets containing Lorem
                         Ipsum passages, and more recently with desktop publishing
                         software like Aldus PageMaker including versions of Lorem
                         Ipsum.It is a long established fact that a reader will be distracted
                         by the readable content of a page when looking at its layout. The... </p>
                        <button className='meshum'>MË SHUMË</button>
                       </div>
                   </div>
                </div>
                <br />
                <br />
                <br />
                 <br />
            </div>

             
          <Footer/>
      
        </div>
    )
}