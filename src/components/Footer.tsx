"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { CardStackDemo } from "@/components/Card";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';

export function Footer() {
  return (
    <footer className="min-h-[24rem] md:h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col md:flex-row items-center justify-between p-8">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      
      <div className="flex flex-col items-center md:items-start justify-center relative z-20 w-full md:w-auto mb-8 md:mb-0">
        <Image 
          id="footer-how-logo" 
          src="/favicon.png" 
          alt="footer" 
          width={150} 
          height={50}
        />
                <Image 
          id="footer-how-logo" 
          src="/write.png" 
          alt="footer" 
          width={300} 
          height={150}
          className="mb-4"
        />
        <div className="social-media flex space-x-4 mb-4">
          <Link href="https://www.linkedin.com/company/house-of-wisdom.online/" target="_blank" className="text-white hover:text-gray-300">
            <FaLinkedin size={20} />
          </Link>
          <Link href="contact@houseofwisdom.online" className="text-white hover:text-gray-300">
            <MdEmail size={20} />
          </Link>
          <Link href="https://github.com/House-of-Wisdom-edu" target="_blank" className="text-white hover:text-gray-300">
            <FaInstagram size={20} />
          </Link>          
          <Link href="#" className="text-white hover:text-gray-300">
            <FaYoutube size={20} />
          </Link>
        </div>
        <p className="flex items-center text-white text-sm text-center md:text-left">
          <MdLocationOn size={16} className="mr-2" /> Batla House, Jamia Nagar, New Delhi-110025
        </p>
        <p className="text-neutral-400 text-xs mt-2 text-center md:text-left">
          © 2022-{new Date().getFullYear()} House of Wisdom All Rights Reserved.
        </p>
      </div>
      
      <div className="relative z-20 hidden md:block">
        <CardStackDemo />
      </div>
      
      <Boxes />
    </footer>
  );
}