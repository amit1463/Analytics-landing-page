const kpis = [
    { value: '7.4x', label: 'Average ROAS' },
    { value: '4.8%', label: 'Click-through rate' },
    { value: '$2.1M', label: 'Managed ad spend' },
]

function Advertising() {
    return (
        <section className='bg-[#0F1F4B] mx-[52px] 2xl:mx-[210px] mt-[80px] rounded-[30px] px-[40px] sm:px-[60px] py-[60px] sm:py-[80px] relative z-[600]'>
            <div className='text-center'>
                <h2 className='font-bold text-[40px] leading-[47px] text-white'>Advertising Intelligence</h2>
                <p className='text-[#C5CBE0] font-normal text-[18px] leading-[27px] mt-[20px] max-w-[680px] mx-auto'>
                    Plan, launch, and optimize paid campaigns with attribution built right into your analytics workspace.
                </p>
            </div>

            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-[24px] mt-[50px] max-w-[760px] mx-auto'>
                {kpis.map(({ value, label }) => (
                    <li
                        key={label}
                        className='bg-[#1E2F57] rounded-[20px] flex flex-col items-center justify-center py-[36px] px-[16px]'
                    >
                        <h3 className='font-bold text-[44px] leading-[52px] text-white'>{value}</h3>
                        <p className='font-normal text-[16px] leading-[22px] text-[#C5CBE0] mt-[10px] text-center'>{label}</p>
                    </li>
                ))}
            </ul>

            <div className='mt-[50px] flex justify-center'>
                <button
                    type='button'
                    className='bg-[#EF2A82] font-normal text-[16px] leading-[19px] px-[60px] py-[20px] rounded-[68px] text-white'
                >
                    Launch a campaign
                </button>
            </div>
        </section>
    )
}

export default Advertising
