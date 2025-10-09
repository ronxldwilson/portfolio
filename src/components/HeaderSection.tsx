'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export default function HeaderSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '#projects' },
    { name: 'Hackathons', href: '#hackathons' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '/resume' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      if (pathname !== '/') {
        // Navigate to home page + section
        router.push('/' + href);
      } else {
        // Smooth scroll on the same page
        const target = document.querySelector(href);
        if (target) {
          const header = document.querySelector('header');
          const headerOffset = header ? header.offsetHeight : 80;
          const elementPosition =
            target.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }
      // Close mobile menu after short delay
      setTimeout(() => setMenuOpen(false), 50);
    } else {
      // External navigation
      router.push(href);
      setMenuOpen(false);
    }
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full sticky top-0 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-end p-4 md:p-6">
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-secondary hover:text-primary transition-colors font-medium"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-secondary hover:text-primary transition-colors"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <ul className="flex flex-col items-start p-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="block text-secondary hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
