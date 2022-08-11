import Link from 'next/link';
import Footer from './Footer';
import Menu from './Menu';


export default function Navbar () {
        return (

       <div class="row">
           <div class="col-md-3"><Menu/></div>
           <div class="col-md-3"> 
           <div className='logbackNav'>
                <img className='logoNav' src="images/logo versioni i bardh-01.svg"></img>
             </div>
             </div>
           <div class="col-md-3">
            <button className='apliko'>APLIKO</button>
           </div>
           <div class="col-md-3">
              <div className='gjuhet'>
             <p className='shq'>SHQ</p>
             <p className='de'>DE</p>
              </div>
      

           </div>
        </div>
    

        
            
        )}