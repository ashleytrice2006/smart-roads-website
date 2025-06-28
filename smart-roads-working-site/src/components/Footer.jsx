import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-orange-500 text-sm text-gray-700 py-4 px-6 text-center">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 font-medium">
        <span className="text-[#333]">© Smart Roads Limited</span>

        <a
          href="/terms"
          className="text-[#E65100] hover:underline"
        >
          Terms & Conditions
        </a>

        <a
          href="/privacy"
          className="text-[#E65100] hover:underline"
        >
          Privacy Policy
        </a>

        <a
          href="mailto:support@smartroads.co.nz"
          className="text-[#E65100] hover:underline"
        >
          support@smartroads.co.nz
        </a>
      </div>
    </footer>
  );
};

export default Footer;
