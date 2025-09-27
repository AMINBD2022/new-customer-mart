import React from 'react';

export default function Footer() {
  return (
    <div className='bg-base-200'>
        <div className="footer-section max-w-[1440px] mx-auto">
           <footer className="footer flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-5 sm:footer-horizontal text-base-content p-4 md:p-10">
                <nav className='text-[#A1A1AA] col-span-2 max-w-[350px]'>
                    <h6 className="footer-title opacity-100 text-white text-xl">CS — Ticket System</h6>
                    <p className='font-[400]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </nav>
                <nav className='text-[#A1A1AA]'>
                    <h6 className="footer-title opacity-100 text-white text-xl">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                </nav>
                <nav className='text-[#A1A1AA]'>
                    <h6 className="footer-title opacity-100 text-white text-xl">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </nav>
                <nav className='text-[#A1A1AA]'>
                    <h6 className="footer-title opacity-100 text-white text-xl">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </nav>
                <nav className='text-[#A1A1AA]'>
                    <h6 className="footer-title opacity-100 text-white text-xl">Social Links</h6>
                    <a className="link link-hover flex justify-center items-center gap-2"><i className="fa-brands fa-x-twitter flex w-[22px] h-[22px] bg-white text-black" style={{display : "flex", width: "22px", height : "22px", justifyContent : "center", alignItems : "center", borderRadius: "50%"}}></i> @CS — Ticket System</a>
                    <a className="link link-hover flex justify-center items-center gap-2"><i className="fa-brands fa-linkedin-in flex w-[22px] h-[22px] bg-white text-black" style={{display : "flex", width: "22px", height : "22px", justifyContent : "center", alignItems : "center", borderRadius: "50%"}}></i> @CS — Ticket System</a>
                    <a className="link link-hover flex justify-center items-center gap-2"><i className="fa-brands fa-facebook-f flex w-[22px] h-[22px] bg-white text-black" style={{display : "flex", width: "22px", height : "22px", justifyContent : "center", alignItems : "center", borderRadius: "50%"}}></i> @CS — Ticket System</a>
                    <a className="link link-hover flex justify-center items-center gap-2"><i className="fa-solid fa-envelope flex w-[22px] h-[22px] bg-white text-black" style={{display : "flex", width: "22px", height : "22px", justifyContent : "center", alignItems : "center", borderRadius: "50%"}}></i> support@cst.com</a>
                </nav>
            </footer>
            <div className="footer-bottom border-t-1 border-[#e5e7eb1f]">
                <p className='text-[#FAFAFA] text-center py-8'>
                    © 2025 CS — Ticket System. All rights reserved.
                </p>
            </div>
        </div>
    </div>
  )
}
