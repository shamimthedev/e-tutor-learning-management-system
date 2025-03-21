import { useState } from "react";
import Logo from "/logo.svg";
import DownArrow from "/down-arrow.svg";
import { Menu, X } from "lucide-react"; // Icons for the mobile menu

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            {/* Top Header (Hidden on Small Screens) */}
            <section className="bg-[#1D2026] hidden md:block">
                <div className="max-w-[1856px] mx-auto flex items-center justify-between px-6 font-inter">
                    <nav>
                        <ul className="flex gap-2 font-medium text-sm leading-5 tracking-[-1%] text-white">
                            <li className="p-4">Home</li>
                            <li className="p-4">Courses</li>
                            <li className="p-4">About</li>
                            <li className="p-4">Contact</li>
                            <li className="p-4">Become an Instructor</li>
                        </ul>
                    </nav>
                    <div className="flex gap-6 font-normal text-sm leading-[22px] tracking-[-1%] text-[#A1A5B3]">
                        <div className="flex gap-2 items-center">
                            <span>USD</span>
                            <img src={DownArrow} alt="" />
                        </div>
                        <div className="flex gap-2 items-center">
                            <span>English</span>
                            <img src={DownArrow} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Header */}
            <section className="max-w-[1856px] mx-auto py-4 px-6">
                <div className="flex justify-between items-center">
                    {/* Left Section */}
                    <div className="flex items-center gap-6">
                        {/* Logo */}
                        <img src={Logo} alt="Logo" className="h-10" />

                        {/* Browse Menu (Hidden on Mobile) */}
                        <div className="hidden lg:flex items-center border border-[#E9EAF0] h-12 w-[200px] justify-between px-4 font-inter text-[#1D2026]">
                            <span>Browse</span>
                            <img src={DownArrow} alt="" />
                        </div>

                        {/* Search Bar (Hidden on Small Screens) */}
                        <div className="hidden md:flex items-center gap-3 border border-[#E9EAF0] h-12 w-[420px] px-4 text-[#8C94A3]">
                            <svg width="24" height="24" color="#1D2026" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z" stroke="#1D2026" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16.4431 16.4438L20.9994 21.0001" stroke="#1D2026" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <input className="h-full w-full border-none outline-none" type="text" placeholder="What do you want to learn" />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-4">
                        {/* Search Icon (Only on Small Screens) */}
                        <div className="md:hidden">
                            <svg width="24" height="24" color="#1D2026" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z" stroke="#1D2026" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16.4431 16.4438L20.9994 21.0001" stroke="#1D2026" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        {/* Cart & Notification Icons */}
                        <div className="flex items-center gap-4">
                            <svg width="24" height="24" color="#1D2026" viewBox="0 0 24 24" fill="none">
                                <path d="M5.26904 9.75C5.2678 8.86051 5.44262 7.97957 5.78343 7.15796C6.12424 6.33635 6.6243 5.59031 7.25477 4.96286C7.88525 4.33541 8.63368 3.83895 9.45693 3.5021C10.2802 3.16525 11.1619 2.99467 12.0514 3.00019C15.763 3.02778 18.7317 6.11282 18.7317 9.83474V10.5" stroke="#1D2026" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            <svg width="24" height="24" color="#1D2026" viewBox="0 0 24 24" fill="none">
                                <path d="M3.96429 6.75H20.7857L18.3108 15.4121C18.2213 15.7255 18.0321 16.0012 17.7718 16.1975C17.5116 16.3938 17.1945 16.5 16.8685 16.5H7.88145" stroke="#1D2026" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        {/* Buttons (Hidden on Mobile) */}
                        <div className="hidden md:flex gap-2">
                            <button className="h-10 bg-[#FFEEE8] text-[#FF6636] font-bold px-4">Create Account</button>
                            <button className="h-10 bg-[#FF6636] text-white font-semibold px-4">Sign In</button>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Header;
