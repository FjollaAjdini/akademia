import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='whole'>
      <div className='logback'>
        <img className='logo' src="images/logo versioni i gjelbert-01.svg"></img>
       </div>
          <Link href="/Homepage"><button className="button">SHKOLLA E MESME</button></Link>
    </div>
  )
}
