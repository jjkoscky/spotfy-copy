import { Sidebar } from './components/Sidebar'
import ContentMain from './components/Content'
import { Footer } from './components/Footer'


export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className='flex flex-1'>
        <Sidebar />
        <ContentMain />        
      </div>
      <Footer />
    </div>
  )
}
