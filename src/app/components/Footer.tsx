import Image from 'next/image'
import {Home as HomeIcon, Search, Library, ChevronRight, ChevronLeft, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2,ListPlus, MonitorSpeaker, Volume, Maximize2} from 'lucide-react'
export function Footer(){
    return(
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
    )
}