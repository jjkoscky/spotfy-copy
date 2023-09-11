import Image from 'next/image'
import {Home as HomeIcon, Search, Library, ChevronRight, ChevronLeft, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2,ListPlus, MonitorSpeaker, Volume, Maximize2} from 'lucide-react'


export default function Home() {
  return (
    <main className="h-screen flex flex-col">
      <div className='flex flex-1'>
            <aside className='w-72 p-6 '>
            <div className='flex items-center gap-2'>
                  <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                  <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                  <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                </div>
              <nav className='space-y-5 mt-10'>
                <a href="#" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
                  <HomeIcon />
                  Home
                </a>
                <a href="#" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
                  <Search />
                  Search
                </a>
                <a href="#" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
                  <Library />
                  Your Library
                </a>
              </nav>
              <nav className='mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3'>
                <a href="" className='txt-sm text-zinc-400 hover:text-zinc-100'>Hot Hit Brasil</a>
                <a href="" className='txt-sm text-zinc-400 hover:text-zinc-100'>Punk Rock</a>
                <a href="" className='txt-sm text-zinc-400 hover:text-zinc-100'>Funk Maime</a>
                <a href="" className='txt-sm text-zinc-400 hover:text-zinc-100'>Rock & Roll</a>
              </nav>
            </aside>
            <main className='flex-1 p-6'>
              <div className='flex items-center gap-4'>
                <button className='rounded-full bg-black/40'>
                  <ChevronLeft></ChevronLeft>
                </button>
                <button className='rounded-full bg-black/40'>
                <ChevronRight ></ChevronRight>
                </button>
              </div>
              <h1 className='font-semibold text-3xl mt-10'>Good Afternoom</h1>

              <div className='grid grid-cols-3 gap-4 mt-4'>
                
                  <a href="" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                    <Image src="/albumbsv4.jpg" width={104} height={104} alt="Capa do Album" />
                    <strong>Vol. 4</strong>
                    <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                      <Play />
                    </button>
                  </a>

                  <a href="" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                    <Image src="/albumbsv4.jpg" width={104} height={104} alt="Capa do Album" />
                    <strong>Vol. 4</strong>
                    <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                      <Play />
                    </button>
                  </a>

                  <a href="" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                    <Image src="/albumbsv4.jpg" width={104} height={104} alt="Capa do Album" />
                    <strong>Vol. 4</strong>
                    <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                      <Play />
                    </button>
                  </a>

                  <a href="" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                    <Image src="/albumbsv4.jpg" width={104} height={104} alt="Capa do Album" />
                    <strong>Vol. 4</strong>
                    <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                      <Play />
                    </button>
                  </a>

                  <a href="" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                    <Image src="/albumbsv4.jpg" width={104} height={104} alt="Capa do Album" />
                    <strong>Vol. 4</strong>
                    <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                      <Play />
                    </button>
                  </a>

                  <a href="" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                    <Image src="/albumbsv4.jpg" width={104} height={104} alt="Capa do Album" />
                    <strong>Vol. 4</strong>
                    <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                      <Play />
                    </button>
                  </a>

              </div>

              <h1 className='font-semibold text-2xl mt-10'>Made For JJ Koscky</h1>

              <div className='grid grid-cols-8 gap-4 mt-4'>
                <a href="" className='bg-white/5 p-3  rounded-md hover:bg-white/10'> 
                  <Image className='w-full' src="/albumbsv4.jpg" width={300} height={300} alt="Capa do Album" />
                  <strong className='font-semibold'>Daily Mix 1</strong>
                  <span className='text-sm text-zinc-400 '>The Offspring, Ramones, Green Day, Lagwagon</span>
                </a>

                <a href="" className='bg-white/5 p-3  rounded-md hover:bg-white/10'> 
                  <Image className='w-full' src="/albumbsv4.jpg" width={300} height={300} alt="Capa do Album" />
                  <strong className='font-semibold'>Daily Mix 1</strong>
                  <span className='text-sm text-zinc-400 '>The Offspring, Ramones, Green Day, Lagwagon</span>
                </a>

                <a href="" className='bg-white/5 p-3  rounded-md hover:bg-white/10'> 
                  <Image className='w-full' src="/albumbsv4.jpg" width={300} height={300} alt="Capa do Album" />
                  <strong className='font-semibold'>Daily Mix 1</strong>
                  <span className='text-sm text-zinc-400 '>The Offspring, Ramones, Green Day, Lagwagon</span>
                </a>

                <a href="" className='bg-white/5 p-3  rounded-md hover:bg-white/10'> 
                  <Image className='w-full' src="/albumbsv4.jpg" width={300} height={300} alt="Capa do Album" />
                  <strong className='font-semibold'>Daily Mix 1</strong>
                  <span className='text-sm text-zinc-400 '>The Offspring, Ramones, Green Day, Lagwagon</span>
                </a>

                <a href="" className='bg-white/5 p-3  rounded-md hover:bg-white/10'> 
                  <Image className='w-full' src="/albumbsv4.jpg" width={300} height={300} alt="Capa do Album" />
                  <strong className='font-semibold'>Daily Mix 1</strong>
                  <span className='text-sm text-zinc-400 '>The Offspring, Ramones, Green Day, Lagwagon</span>
                </a>

                
                

                
              </div>

            </main>
        
      </div>
      <footer className='bg-zinc-800 border-t border-zinc-700 px-6 py-6 flex items-center justify-between'>
        <div className='flex itens-center gap-3'>
        <Image src="/albumbsv4.jpg" width={56} height={56} alt="Capa do Album" />
          <div className='flex flex-col'>
            <strong className='font-normal'>Supernaut</strong>
            <span className='text-xs text-zinc-400'>Black Sabbath</span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-4'>
            <Shuffle size={20} className='text-zinc-200'/>
            <SkipBack size={20} className='text-zinc-200'/>

            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
              <Play />
            </button>

            <SkipForward size={20} className='text-zinc-200'/>
            <Repeat size={20} className='text-zinc-200'/>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>0:31</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='h-1 rounded-full w-32 bg-zinc-200'>
              </div>
            </div>
            <span className='text-xs text-zinc-400'>3:21</span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Mic2 size={20}/>
          <ListPlus size={20}/>
          <MonitorSpeaker size={20}/>
          <div className='flex items-center gap-2'>
            <Volume size={20}/>
            <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='h-1 rounded-full w-10 bg-zinc-200'></div>
            </div>
          </div>
          <Maximize2 size={20}/>
        </div>
      </footer>
    </main>
  )
}
