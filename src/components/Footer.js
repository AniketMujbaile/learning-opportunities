import React from 'react';
import { Phone, MapPin, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <FooterColumn title="Company Info">
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Carrier</FooterLink>
            <FooterLink href="#">We are hiring</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
          </FooterColumn>

          <FooterColumn title="Legal">
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Carrier</FooterLink>
            <FooterLink href="#">We are hiring</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
          </FooterColumn>

          <FooterColumn title="Features">
            <FooterLink href="#">Business Marketing</FooterLink>
            <FooterLink href="#">User Analytic</FooterLink>
            <FooterLink href="#">Live Chat</FooterLink>
            <FooterLink href="#">Unlimited Support</FooterLink>
          </FooterColumn>

          <FooterColumn title="Resources">
            <FooterLink href="#">IOS & Android</FooterLink>
            <FooterLink href="#">Watch a Demo</FooterLink>
            <FooterLink href="#">Customers</FooterLink>
            <FooterLink href="#">API</FooterLink>
          </FooterColumn>

          <FooterColumn title="Get In Touch">
            <FooterLink href="tel:(480)555-0103" icon={<Phone size={16} className="text-[#b3db97]" />}>
              (480) 555-0103
            </FooterLink>
            <FooterLink href="#" icon={<MapPin size={16} className="text-[#b3db97]" />}>
              4517 Washington Ave. Manchester, Kentucky 39495
            </FooterLink>
            <FooterLink href="mailto:debra.holt@example.com" icon={<Mail size={16} className="text-[#b3db97]" />}>
              debra.holt@example.com
            </FooterLink>
          </FooterColumn>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            Made With Love By Figmaland All Right Reserved
          </p>
          <div className="flex space-x-4">
            <SocialIcon href="#" icon={<Facebook size={24} className="text-[#b3db97]" />} />
            <SocialIcon href="#" icon={<Instagram size={24} className="text-[#b3db97]" />} />
            <SocialIcon href="#" icon={<Twitter size={24} className="text-[#b3db97]" />} />
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => (
  <div>
    <h3 className="font-bold text-lg mb-4">{title}</h3>
    <ul>{children}</ul>
  </div>
);

const FooterLink = ({ href, children, icon }) => (
  <li className="mb-2">
    <a href={href} className="text-gray-600 hover:text-gray-900 flex items-center">
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </a>
  </li>
);

const SocialIcon = ({ href, icon }) => (
  <a href={href} className="text-gray-600 hover:text-gray-900">
    {icon}
  </a>
);

export default Footer;
