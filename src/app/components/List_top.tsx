import {Play, Heart} from 'lucide-react'
import Image from 'next/image'
import HeartIcon from './Icons/HeartIcon'
import PlayIcon from './Icons/PlayIcon'
export default function ListTop(){
    return(
        
        <div className='grid grid-cols-3 gap-4 mt-4'>

<a href="" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
            <div className='w-[6.5rem] h-[6.5rem] bg-gradient-to-r from-purple-800 to-white'>
                <div className='ml-9 mt-9'>
                    <HeartIcon />
                </div>
            </div>
            <strong>Liked Songs</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <PlayIcon />
            </button>
            </a>
                
            <a href="" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
            <Image src="/albumbsv4.jpg" width={104} height={104} alt="Capa do Album" />
            <strong>Vol. 4</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <PlayIcon />
            </button>
            </a>

            <a href="" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
            <Image src="/nirvanacapa.jpg" width={104} height={104} alt="Capa do Album" />
            <strong>Nirvana</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <PlayIcon />
            </button>
            </a>

            <a href="" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
            <Image src="/bleach.jpg" width={104} height={104} alt="Capa do Album" />
            <strong>Bleach</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <PlayIcon />
            </button>
            </a>

            <a href="" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
            <Image src="/ramones.jpg" width={104} height={104} alt="Capa do Album" />
            <strong>Roket To Russia</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <PlayIcon />
            </button>
            </a>

            <a href="" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
            <Image src="/weezeralbum.jpg" width={104} height={104} alt="Capa do Album" />
            <strong>Vol. 4</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <PlayIcon />
            </button>
            </a>

            

              </div>
    )
}