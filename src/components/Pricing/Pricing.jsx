import Button from '../ui/Button'

function Pricing() {
    return (
        <div className='relative min-h-[1228px] z-[1000]'>
            <div className='bg-[#EF2A82] relative min-h-[1225px] z-[500] [clip-path:polygon(0%_5%,100%_0%,100%_100%,0%_100%)] md:[clip-path:polygon(0%_170px,100%_0%,100%_100%,0%_100%)] pt-6 border-b border-[#172755]'>
                <div className='bg-[#172755] dark:bg-[#0a1230] min-h-[1225px] relative [clip-path:polygon(0%_5%,100%_0%,100%_100%,0%_100%)] md:[clip-path:polygon(0%_170px,100%_0%,100%_100%,0%_100%)]'>
                    <div className='text-center pt-[272px]'>
                        <h1 className='font-bold text-[40px] leading-[47px] text-white'>Pricing Plans</h1>
                        <h3 className='text-[#8794BA] font-normal text-[18px] leading-[27px] mt-[30px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet <br /> volutpat pellentesque volutpat est.
                        </h3>
                    </div>
                    <div className='mx-[52px] 2xl:mx-[210px] mt-[80px] relative'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[36px] xl:gap-[80px] relative '>
                            <div className='bg-[#0F1F4B] dark:bg-[#050a1f] rounded-[30px] col-span-1 h-[440px] flex flex-col items-center justify-center'>
                                <h2 className='font-bold text-[30px] leading-[36px] text-white'>Starter</h2>
                                <h3 className='mt-[10px] font-normal text-[18px] leading-[27px] text-[#8794BA]'>up to 3 users</h3>
                                <div className='h-[1px] border-[#2A407C] bg-[#2A407C] w-1/2 mt-[36px]'></div>
                                <h1 className='font-bold text-[60px] leading-[70px] text-white mt-[28px]'><span className='font-bold text-[30px] leading-[35px]'>$</span>29</h1>
                                <h3 className='font-normal text-[18px] leading-[27px] text-[#8794BA]'>per month</h3>
                                <Button variant="outline" className='mt-[40px]'>Order</Button>
                            </div>
                            <div className='bg-[#FFF] dark:bg-[#172755] rounded-[30px] h-[440px] col-span-1 flex flex-col items-center justify-center relative z-[600]'>
                                <h2 className='font-bold text-[30px] leading-[36px] text-[#172755] dark:text-white'>Standard</h2>
                                <h3 className='mt-[10px] font-normal text-[18px] leading-[27px] text-[#8794BA]'>up to 20 users</h3>
                                <div className='h-[1px] border-[#2A407C] bg-[#D3D9E9] dark:bg-[#2A407C] w-1/2 mt-[36px]'></div>
                                <h1 className='font-bold text-[60px] leading-[70px] text-[#172755] dark:text-white mt-[28px]'><span className='font-bold text-[30px] leading-[35px]'>$</span>99</h1>
                                <h3 className='font-normal text-[18px] leading-[27px] text-[#8794BA]'>per month</h3>
                                <Button variant="primary" className='mt-[40px]'>Order</Button>
                            </div>
                            <div className='bg-[#0F1F4B] dark:bg-[#050a1f] rounded-[30px] h-[440px] col-span-1 flex flex-col items-center justify-center'>
                                <h2 className='font-bold text-[30px] leading-[36px] text-white'>Premium</h2>
                                <h3 className='mt-[10px] font-normal text-[18px] leading-[27px] text-[#8794BA]'>up to 200 users</h3>
                                <div className='h-[1px] border-[#2A407C] bg-[#2A407C] w-1/2 mt-[36px]'></div>
                                <h1 className='font-bold text-[60px] leading-[70px] text-white mt-[28px]'><span className='font-bold text-[30px] leading-[35px]'>$</span>299</h1>
                                <h3 className='font-normal text-[18px] leading-[27px] text-[#8794BA]'>per month</h3>
                                <Button variant="outline" className='mt-[40px]'>Order</Button>
                            </div>
                        </div>
                    </div>
                    <img src="/Pricing-icon.png" alt="" className='absolute bottom-0 right-0 z-[200]' />
                    <footer className='mt-[100px] px-[60px] 2xl:px-[210px] pb-10 xl:pb-0'>
                        <div className='border-t border-[#2A407C]'>
                            <div className='mt-[70px] flex flex-col gap-10 lg:flex-row items-center justify-between'>
                                <div>
                                    <img src='/footer-logo.png' alt="Analytics logo"/>
                                </div>
                                <div>
                                    <ul className='flex whitespace-nowrap space-x-9 font-normal text-[14px] text-[#8794BA] leading-[16px]'>
                                        <li>Product</li>
                                        <li>Pricing Plans</li>
                                        <li>FAQ</li>
                                        <li>Blog</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className='flex space-x-[40px]'>
                                        <li><img src="/Facebook.svg" alt="Facebook"/></li>
                                        <li><img src="/Twitter.svg" alt="Twitter"/></li>
                                        <li><img src="/Instagram.svg" alt="Instagram" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Pricing
