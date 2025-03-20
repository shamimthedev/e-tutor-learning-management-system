import Logo from '/logo.svg';
import DownArrow from '/down-arrow.svg';
import SearchIcon from '/search.svg';

const Header = () => {
    console.log(Logo);
    return (
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
                            <img src={SearchIcon} alt="" className='text-[#1D2026]' />
                            <input className='h-full w-full border-none outline-none' type="text" placeholder='What do you want to learn' />
                        </div>
                    </div>
                </div>
                {/* Right Part */}
                <div className="flex items-center">
                    {/* Icons */}
                    <div className="flex"></div>
                    {/* Buttons */}
                    <div className="flex gap-2">
                        <button>Create Account</button>
                        <button>Sign In</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;
