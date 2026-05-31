import './App.css'
import Hero from './components/Hero/Hero'
import FeatureItems from './components/Features/FeatureItems'
import FeatureDescriptions from './components/Features/FeatureDescriptions'
import Pricing from './components/Pricing/Pricing'

function App() {
  return (
    <div className='overflow-hidden bg-white dark:bg-[#0b1430] text-[#172755] dark:text-white transition-colors'>
      <Hero/>
      <FeatureItems/>
      <FeatureDescriptions/>
      <Pricing/>
    </div>
  )
}

export default App
