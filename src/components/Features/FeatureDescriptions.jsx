function FeatureDescriptions() {
    return (
        <div className='mx-[24px] sm:mx-[60px] lg:mx-[210px] mt-[130px] flex flex-col gap-[120px]'>
            <div className='flex flex-col xl:flex-row xl:gap-[60px] 2xl:gap-[100px] px-0 sm:px-10'>
                <div className='w-full xl:w-1/2 flex flex-col items-center justify-center '>
                    <div className='text-center xl:text-start'>
                        <h1 className='font-bold text-[30px] 2xl:text-[40px] leading-[47px] text-[#172755] dark:text-white'>
                            Automated Reports <br className='hidden lg:block' /> & Widget Alerts
                        </h1>
                        <h3 className='mt-[20px] 2xl:mt-[30px] font-normal xl:text-[16px] 2xl:text-[18px] leading-[27px] text-[#8794BA]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.
                        </h3>
                    </div>
                </div>
                <div className='w-full xl:w-1/2'>
                    <img src="/features-chart-1.png" alt="Automated reports chart" className='w-full h-auto' />
                </div>
            </div>
            <div className='flex flex-col xl:flex-row gap-[60px] 2xl:gap-[100px] px-0 sm:px-10'>
                <div className='w-full xl:w-1/2 flex flex-col items-center justify-center order-1 xl:order-2'>
                    <div className='text-center xl:text-start'>
                        <h1 className='font-bold text-[30px] 2xl:text-[40px] leading-[47px] text-[#172755] dark:text-white'>
                            Fully customizable to <br className='hidden lg:block' /> address your needs
                        </h1>
                        <h3 className='mt-[20px] 2xl:mt-[30px] font-normal xl:text-[16px] 2xl:text-[18px] leading-[27px] text-[#8794BA]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.
                        </h3>
                    </div>
                </div>
                <div className='w-full xl:w-1/2 order-2 xl:order-1'>
                    <img src="/features-chart-2.png" alt="Customization chart" className='w-full h-auto' />
                </div>
            </div>
            <div className='flex flex-col xl:flex-row gap-[60px] 2xl:gap-[100px] px-0 sm:px-10'>
                <div className='w-full xl:w-1/2 flex flex-col items-center justify-center'>
                    <div className='text-center xl:text-start'>
                        <h1 className='font-bold text-[30px] 2xl:text-[40px] leading-[47px] text-[#172755] dark:text-white'>
                            Pre-built Dashboard <br className='hidden lg:block' /> Templates
                        </h1>
                        <h3 className='mt-[20px] 2xl:mt-[30px] font-normal xl:text-[16px] 2xl:text-[18px] leading-[27px] text-[#8794BA]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.
                        </h3>
                    </div>
                </div>
                <div className='w-full xl:w-1/2'>
                    <img src="/features-chart-3.png" alt="Dashboard templates chart" className='w-full h-auto' />
                </div>
            </div>
        </div>
    )
}

export default FeatureDescriptions
