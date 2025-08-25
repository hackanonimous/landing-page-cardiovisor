import {Navbar} from './components/Navbar/Navbar'
import {Hero} from './components/Hero/Hero'
import {Problem} from './components/Problem/Problem'
import { Solution } from './components/Solution/Solution'
import { Technologie } from './components/Technologie/Technologie'
import { Contact } from './components/Contact/Contact'
function App(){
  return(
    <>
      <Navbar/>
      <Hero/>
      <Problem/>
      <Solution/>
      <Technologie/>
      <Contact/>
    </>
  )
}

export default App