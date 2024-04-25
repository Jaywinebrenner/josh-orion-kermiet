import Image from "next/image";
import { NavItems } from "./utils/navItems";
import Link from 'next/link';
import Navigation from "./components/Navigation";



export default function Home() {


  return (
    <main className="home">
    <div className="container">
      <Navigation/>
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
