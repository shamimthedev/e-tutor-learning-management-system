import Logo from '/logo.png'

const Header = () => {
    return (
        <>
            <section className='max-w-[1856px] mx-auto'>
                <div className="flex justify-between">
                    {/* Left Part */}
                    <div className="flex items-center">
                        {/* Logo here  */}
                        <div className="">
                            <img src={Logo} alt="" />
                        </div>
                        {/* Browse  */}
                        <div className="flex">
                            <span>Browse</span>
                        </div>
                        {/* Input  */}
                        <div className="flex">
                            <input type="text" placeholder='What do you want to learn' />
                        </div>
                    </div>
                    {/* Right Part */}
                    <div className="flex items-center">
                        {/* Icons */}
                        <div className="flex"></div>
                        {/* Btns */}
                        <div className="flex">
                            <button>Create Account</button>
                            <button>Sign In</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header