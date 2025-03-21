import HeroImage from '/hero-background.png'

const Hero = () => {
    return (
        <>
            <section id="heroSection">
                <div className="max-w-[1620px] ml-auto">
                    <div className="flex gap-[72px] items-center">
                        <div className='max-w-[648px]'>
                            <h1 className='text-[56px] leading-[115%] font-bold mb-10'>Learn with expert anytime anywhere</h1>
                            <p className='text-[#1D2026] text-2xl leading-8 mb-10 max-w-[640px]'>Our mision is to help people to find the best course online and learn with expert anytime, anywhere.</p>
                            <button className='h-12  bg-[#FF6636] text-white font-inter font-semibold leading-12 tracking-[-0.8%] px-6'>Create Account</button>
                        </div>
                        <div>
                            <img src={HeroImage} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero