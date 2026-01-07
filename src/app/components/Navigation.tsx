'use client'
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              {/* <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center overflow-hidden"> */}
                <div className="relative w-12 h-12 items-center justify-center overflow-hidden">
                <Image 
                  src="/logo.png" 
                  alt="DIVINU Investment Group Logo"
                  fill
                  className="object-contain p-0"
                  unoptimized
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900 text-sm leading-tight">DIVINUS</span>
                <span className="text-xs text-gray-600 leading-tight">INVESTMENT GROUP</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#impact" className="text-gray-700 hover:text-blue-600 transition-colors">Impact</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#about" className="block text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="block text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#impact" className="block text-gray-700 hover:text-blue-600 transition-colors">Impact</a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
          </div>
        )}
      </div>
    </nav>
  );
}
