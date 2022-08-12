import Link from 'next/link';

import { Dropdown } from '@nextui-org/react';
import Footer from './Footer';
import Menu from './Menu';


export default function Navbar () {
        return (
         <div>
       <div class="row">
           <div className="col-md-3 menu">
            {/* <Link href="../components/nav-link.js">MENU</Link> */}
            <Dropdown>
            <Dropdown.Button flat>MENU</Dropdown.Button>
            <Dropdown.Menu aria-label="Static Actions" className="menu1">
               <Dropdown.Item key="new">RRETH NESH</Dropdown.Item>
               <Dropdown.Item key="copy">SHKOLLA JOTE</Dropdown.Item>
               <Dropdown.Item key="edit">TRAJNIMET</Dropdown.Item>
               <Dropdown.Item key="delete">MUNDËSITË</Dropdown.Item>
               <Dropdown.Item key="delete1">PYETJE TË SHPESHTA</Dropdown.Item>
               <Dropdown.Item key="delete2">MË TË REJAT</Dropdown.Item>
               <Dropdown.Item key="delete3">REGJISTRIMI</Dropdown.Item>
            </Dropdown.Menu>
         </Dropdown>
            </div>
           <div className="col-md-3"> 

           <div class="col-md-3"><Menu/></div>
           <div class="col-md-3"> 
           <div className='logbackNav'>
                <img className='logoNav' src="images/logo versioni i bardh-01.svg"></img>
             </div>
             </div>
           <div className="col-md-3">
            <button className='apliko'>APLIKO</button>
           </div>
           <div className="col-md-3">
              <div className='gjuhet'>
             <p className='shq'>SHQ</p>
             <p className='de'>DE</p>
              </div>
           </div>
        </div>
         </div>
        <div/>
        </div>
)};