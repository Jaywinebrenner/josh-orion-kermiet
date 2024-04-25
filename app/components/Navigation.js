"use client"
import React from 'react';
import { usePathname } from 'next/navigation'
import { NavItems } from '../utils/navItems';
import Link from 'next/link';

const Navigation = () => {
    const pathname = usePathname()
console.log(pathname)
  return (
    <div className="navigation">
      <div className="logo-wrapper">
        <img src="/logo.png" alt="Logo" />
      </div>
      {pathname !== "/" && <div className="breadcrumbs">
        <Link href="/" passHref legacyBehavior>
          <a className={pathname === '/' ? 'breadcrumb active' : 'breadcrumb'}>
            Home
          </a>
        </Link>
        {NavItems &&
          NavItems.map((link, i) => (
            <Link href={link.url} key={`breadcrumb-key=${i}`} passHref legacyBehavior>
              <a className={pathname === link.url ? 'breadcrumb active' : 'breadcrumb'}>
                {link.title}
              </a>
            </Link>
          ))}
      </div>}
    </div>
  );
};

export default Navigation;
