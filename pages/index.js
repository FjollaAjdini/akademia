import Head from 'next/head';
import Link from 'next/link';
export default function Home() {
  return (
    <div className='whole'>
      <div className='logback'>
        <img className='logo' src="images/logo versioni i gjelbert-01.svg"></img>
       </div>
          <Link href="/Homepage"><button className="button">SHKOLLA E MESME</button></Link>
          <hr className='hrr'/>

          <div className='foot' >
              <div class="row">
                 <div class="col-md-3">
                   <p className='parfoot'>Veranda D4, Hyrja B Lagjia Kalabri,(Rruga për Veternik)</p>
                   <p className='parfoot'>10000 Prishtinë, Republika e Kosovës</p>
                 </div>
                 <div class="col-md-3">
                   <p className='parfoot'>+383 (0) 49 947 383</p>
                   <p className='parfoot'>+383 (0) 49 947 612</p>
                   <p className='parfoot'>info@akademiaprofesionale.eu</p>
                 </div>
                 <div class="col-md-3">
                    <img className='socials' src="images/fb-01 e bardhe-01.svg"></img>
                    <img className='socials' src="images/insta-01 e bardhe-01.svg"></img>
                    <img className='socials' src="images/in-01 e bardhe-01.svg"></img>
                 </div>
              </div>
          </div>
    </div>
  )
}
