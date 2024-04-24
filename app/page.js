import Image from "next/image";
import "./styles/app.scss"
import { NavItems } from "./utils/navItems";
import Link from 'next/link';

export default function Home() {





  return (
    <main className="home">
    <div className="container">
      <div className="logo-wrapper">
        <img src="/logo.png"/>
      </div>
      <div className="nav-wrapper">
        {
          NavItems && NavItems.map((item, i) => {
            return (
              <Link href={item.url} className="nav-item" key={`nav-item-key=${i}`}>
                <img src={item.imageSrc}/>
                <p>{item.title}</p>

              </Link>
            )
          })
        }

      </div>


    </div>

    </main>
  );
}
