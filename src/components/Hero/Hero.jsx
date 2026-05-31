import Header from '../Header/Header'
import Button from '../ui/Button'

function Hero() {
    return (
        <div className='relative min-h-screen'>
            <div className='bg-[#EF2A82] min-h-[798px] [clip-path:polygon(0%_0%,100%_0%,100%_85%,0%_100%)] md:[clip-path:polygon(0%_0%,100%_0%,100%_75%,0%_100%)] border-b'>
                <div className='bg-[#172755] dark:bg-[#0a1230] min-h-[798px] [clip-path:polygon(0%_0%,100%_0%,100%_85%,0%_100%)] md:[clip-path:polygon(0%_0%,100%_0%,100%_75%,0%_100%)] mb-6'>
                    <Header />
                    <div className='px-[24px] sm:px-[60px] 2xl:px-[210px] mx-auto'>
                        <div className='inline-flex text-center xl:text-start flex-col 2xl:justify-start mt-[80px] xl:mt-[152px]'>
                            <h1 className='font-semibold text-[36px] sm:text-[50px] leading-[60px] text-white xl:max-w-[570px]'>
                                Monitor your business on real-time dashboard
                            </h1>
                            <h3 className='font-normal text-[18px] leading-[27px] text-[#8794BA] mt-4 xl:max-w-[550px]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.
                            </h3>
                            <div>
                                <Button variant="cta" size="cta">
                                    Try for free
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden md:block absolute top-0'>
                <img src="/Subtract.svg" alt="" />
            </div>
            <div className='absolute top-0 right-0 hidden 2xl:block'>
                <img src="/Subtract.png" alt="" />
            </div>
            <div className='absolute bottom-36 right-0 hidden xl:block'>
                <img
                    src='/dashboard.png'
                    alt="Dashboard preview"
                    className='xl:max-w-[600px] 2xl:max-w-full 3xl:max-w-[800px]'
                />
                <div className='absolute top-32 -left-20'>
                    <img src="/hero_chart.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
