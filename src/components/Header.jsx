import Logo from '/logo.svg';
import DownArrow from '/down-arrow.svg';

const Header = () => {
    return (
        <header>
            {/* Top Header */}
            <section className='bg-[#1D2026]'>
                <div className="max-w-[1856px] mx-auto flex items-center justify-between font-inter">
                    <nav>
                        <ul className='flex gap-2 font-medium text-sm leading-5 tracking-[-1%] text-white'>
                            <li className='p-4'>Home</li>
                            <li className='p-4'>Courses</li>
                            <li className='p-4'>About</li>
                            <li className='p-4'>Contact</li>
                            <li className='p-4'>Become an Instructor</li>
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
            <section className='max-w-[1856px] mx-auto py-6'>
                <div className="flex justify-between">
                    {/* Left Part */}
                    <div className="flex items-center justify-between gap-12">
                        {/* Logo */}
                        <div className=''>
                            <img src={Logo} alt="Logo" />
                        </div>
                        <div className="flex items-center gap-4">
                            {/* Browse */}
                            <div className="flex items-center border border-[#E9EAF0] h-12 w-[200px] justify-between px-4 font-inter leading-6 text-[#1D2026]">
                                <span>Browse</span>
                                <img src={DownArrow} alt="" />
                            </div>
                            {/* Input */}
                            <div className="flex items-center gap-3 border border-[#E9EAF0] h-12 w-[420px] px-4 tracking-[-1%] text-[#8C94A3]">
                                <svg width="24" height="24" color='#1D2026' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z" stroke="#1D2026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16.4431 16.4438L20.9994 21.0001" stroke="#1D2026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <input className='h-full w-full border-none outline-none' type="text" placeholder='What do you want to learn' />
                            </div>
                        </div>
                    </div>
                    {/* Right Part */}
                    <div className="flex items-center gap-6">
                        {/* Icons */}
                        <div className="flex items-center gap-6">
                            <svg width="24" height="24" color='#1D2026' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.26904 9.75C5.2678 8.86051 5.44262 7.97957 5.78343 7.15796C6.12424 6.33635 6.6243 5.59031 7.25477 4.96286C7.88525 4.33541 8.63368 3.83895 9.45693 3.5021C10.2802 3.16525 11.1619 2.99467 12.0514 3.00019C15.763 3.02778 18.7317 6.11282 18.7317 9.83474V10.5C18.7317 13.8577 19.4342 15.8062 20.0529 16.8711C20.1196 16.9849 20.1551 17.1142 20.1558 17.2461C20.1565 17.378 20.1224 17.5077 20.0569 17.6222C19.9915 17.7367 19.8971 17.8319 19.7831 17.8982C19.6691 17.9646 19.5397 17.9997 19.4078 18H4.59222C4.46034 17.9997 4.33087 17.9645 4.21689 17.8982C4.1029 17.8318 4.00844 17.7366 3.94301 17.6221C3.87759 17.5076 3.84352 17.3778 3.84425 17.2459C3.84498 17.1141 3.88048 16.9847 3.94716 16.8709C4.56622 15.806 5.26904 13.8575 5.26904 10.5L5.26904 9.75Z" stroke="#1D2026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9 18V18.75C9 19.5456 9.31607 20.3087 9.87868 20.8713C10.4413 21.4339 11.2044 21.75 12 21.75C12.7956 21.75 13.5587 21.4339 14.1213 20.8713C14.6839 20.3087 15 19.5456 15 18.75V18" stroke="#1D2026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg width="24" height="24" color='#1D2026' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 20.25C12 20.25 2.625 15 2.625 8.625C2.62519 7.49825 3.01561 6.40634 3.72989 5.53492C4.44416 4.6635 5.4382 4.06635 6.54299 3.84501C7.64778 3.62366 8.79514 3.79178 9.78999 4.32078C10.7848 4.84978 11.5658 5.70701 12 6.74672L12 6.74673C12.4342 5.70701 13.2152 4.84979 14.21 4.32078C15.2049 3.79178 16.3522 3.62366 17.457 3.84501C18.5618 4.06635 19.5558 4.6635 20.2701 5.53492C20.9844 6.40634 21.3748 7.49825 21.375 8.625C21.375 15 12 20.25 12 20.25Z" stroke="#1D2026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg width="24" height="24" color='#1D2026' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.25 20.25C8.25 20.6642 7.91421 21 7.5 21C7.08579 21 6.75 20.6642 6.75 20.25C6.75 19.8358 7.08579 19.5 7.5 19.5C7.91421 19.5 8.25 19.8358 8.25 20.25Z" fill="#1D2026" stroke="#1D2026" stroke-width="1.5" />
                                <path d="M17.25 21.75C18.0784 21.75 18.75 21.0784 18.75 20.25C18.75 19.4216 18.0784 18.75 17.25 18.75C16.4216 18.75 15.75 19.4216 15.75 20.25C15.75 21.0784 16.4216 21.75 17.25 21.75Z" fill="#1D2026" />
                                <path d="M3.96429 6.75H20.7857L18.3108 15.4121C18.2213 15.7255 18.0321 16.0012 17.7718 16.1975C17.5116 16.3938 17.1945 16.5 16.8685 16.5H7.88145C7.55549 16.5 7.23839 16.3938 6.97816 16.1975C6.71792 16.0012 6.52872 15.7255 6.43917 15.4121L3.04827 3.54396C3.0035 3.38725 2.90889 3.24939 2.77878 3.15124C2.64866 3.05309 2.49011 3 2.32713 3H0.75" stroke="#1D2026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        {/* Buttons */}
                        <div className="flex gap-2">
                            <button className='h-12  bg-[#FFEEE8] text-[#FF6636] font-bold leading-12 px-6'>Create Account</button>
                            <button className='h-12  bg-[#FF6636] text-white font-inter font-semibold leading-12 tracking-[-0.8%] px-6'>Sign In</button>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
}

export default Header;
