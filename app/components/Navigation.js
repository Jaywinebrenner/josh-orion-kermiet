"use client"
import React from 'react';
import { usePathname } from 'next/navigation'
import { NavItems } from '../utils/navItems';
import Link from 'next/link';

const Navigation = () => {


  const pathname = usePathname()

  const renderLink = (link, i) => (
    <a
      key={`breadcrumb-key=${i}`}
      className={pathname === link.url ? 'breadcrumb active' : 'breadcrumb'}
      href={link.url}
      target={link.newPage ? '_blank' : '_self'}
      rel={link.newPage ? 'noreferrer' : ''} 
    >
      {link.title}
    </a>
  );
  

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
        {NavItems && NavItems.map((link, i) => renderLink(link, i))}
      </div>}
    </div>
  );
};

export default Navigation;
