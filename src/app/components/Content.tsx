import Image from 'next/image'
import {  ChevronRight, ChevronLeft} from 'lucide-react'
import ListTop from './List_top'
import PlayIcon from './Icons/PlayIcon'


export default function ContentMain(){
    return(
        <main className='flex-1 p-6'>
            <div className='flex items-center gap-4'>
                <button className='rounded-full bg-black/40'>
                    <ChevronLeft></ChevronLeft>
                </button>
                <button className='rounded-full bg-black/40'>
                <ChevronRight ></ChevronRight>
                </button>
            </div>

            <h1 className='font-xs font-semibold sm:text-base md:text-3xl mt-10'>Good Morning</h1>
            
            <ListTop />

            <div className='flex'>
                <h1 className='font-xs font-semibold sm:text-base md:text-3xl mt-10'>Recently Played</h1>
                <a href='#' className=' ml-auto mt-12 font-semibold uppercase text-sm hover:underline sm:text-xs md:text-xs'>Ver tudo</a>
            </div>
            
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-4'>
            <a href="" className='bg-white/5 p-3 group overflow-hidden rounded-md hover:bg-white/10 transition-colors'>
                <button className='w-12 h-12 flex absolute ml-[105px] mt-24 items-center justify-center rounded-full bg-green-400 text-black invisible group-hover:visible'>
                    <PlayIcon />
                </button>
                <Image className='w-full' src="/ramones.jpg" width={300} height={300} alt="Capa do Album" />
                <strong className='font-semibold'>Rocket to Russia </strong>
                <span className='text-sm text-zinc-400 flex'>Ramones</span>
            </a>

            <a href="" className='bg-white/5 p-3 group rounded-md hover:bg-white/10 flex flex-col'>
                <button className='w-12 h-12 flex absolute ml-[105px] mt-24 items-center justify-center rounded-full bg-green-400 text-black invisible group-hover:visible'>
                    <PlayIcon />
                </button> 
                <Image className='w-full' src="/bleach.jpg" width={300} height={300} alt="Capa do Album" />
                <strong className='font-semibold'>Bleach </strong>
                <span className='text-sm text-zinc-400'>Nirvana</span>
            </a>

            <a href="" className='bg-white/5 p-3 group rounded-md hover:bg-white/10 flex flex-col'>
                <button className='w-12 h-12 flex absolute ml-[105px] mt-24 items-center justify-center rounded-full bg-green-400 text-black invisible group-hover:visible'>
                    <PlayIcon />
                </button> 
                <Image className='w-full rounded-full' src="/sp.jpg" width={300} height={300} alt="Capa do Album" />
                <strong className='font-semibold'>The Smashing Pumpkins</strong>
                <span className='text-sm text-zinc-400 '>Artista</span>
            </a>  

            <a href="" className='bg-white/5 p-3 group rounded-md hover:bg-white/10 flex flex-col'>
                <button className='w-12 h-12 flex absolute ml-[105px] mt-24 items-center justify-center rounded-full bg-green-400 text-black invisible group-hover:visible'>
                    <PlayIcon />
                </button> 
                <Image className='w-full' src="/weezeralbum.jpg" width={300} height={300} alt="Capa do Album" />
                <strong className='font-semibold'>Blue Album</strong>
                <span className='text-sm text-zinc-400 hover:underline'>Weezere</span>
            </a>  

            <a href="" className='bg-white/5 p-3 group rounded-md hover:bg-white/10 flex flex-col'>
                <button className='w-12 h-12 flex absolute ml-[105px] mt-24 items-center justify-center rounded-full bg-green-400 text-black invisible group-hover:visible'>
                    <PlayIcon />
                </button>    
                <Image className='w-full rounded-full' src="/akg.jpg" width={300} height={300} alt="Capa do Album" />
                <strong className='font-semibold'>Asian Kung Fu Generation</strong>
                <span className='text-sm text-zinc-400 '>Artista</span>
            </a>

            <a href="" className='bg-white/5 p-3 group rounded-md hover:bg-white/10 flex flex-col'>
                <button className='w-12 h-12 flex absolute ml-[105px] mt-24 items-center justify-center rounded-full bg-green-400 text-black invisible group-hover:visible'>
                    <PlayIcon />
                </button> 
                <Image className='w-full rounded-full' src="/nirvanacapa.jpg" width={300} height={300} alt="Capa do Album" />
                <strong className='font-semibold'>Nirvana</strong>
                <span className='text-sm text-zinc-400 '>Artista</span>
            </a>

            <a href="" className='bg-white/5 p-3 group rounded-md hover:bg-white/10 flex flex-col'>
                <button className='w-12 h-12 flex absolute ml-[105px] mt-24 items-center justify-center rounded-full bg-green-400 text-black invisible group-hover:visible'>
                    <PlayIcon />
                </button> 
                <Image className='w-full' src="/albumbsv4.jpg" width={300} height={300} alt="Capa do Album" />
                <strong className='font-semibold'>Vol. 4</strong>
                <span className='text-sm text-zinc-400 hover:underline'>Black Sabbath</span>
            </a>

            <a href="" className='bg-white/5 p-3 group rounded-md hover:bg-white/10 flex flex-col'>
                <button className='w-12 h-12 flex absolute ml-[105px] mt-24 items-center justify-center rounded-full bg-green-400 text-black invisible group-hover:visible'>
                    <PlayIcon />
                </button> 
                <Image className='w-full rounded-full' src="/sexpistolscapa.jpg" width={300} height={300} alt="Capa do Album" />
                <strong className='font-semibold'>Sex Pistols</strong>
                <span className='text-sm text-zinc-400 '>Artista</span>
            </a>
            </div>

            <div className='flex'>
                <h1 className='font-xs font-semibold sm:text-base md:text-3xl mt-10'>Made For JJ Koscky</h1>
                <a href='#' className=' ml-auto mt-12 font-semibold uppercase text-sm hover:underline sm:text-xs md:text-xs'>Ver tudo</a>
            </div>


            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-4'>
              <a href="" className='bg-white/5 p-3 group rounded-md hover:bg-white/10 flex flex-col'>
                <button className='w-12 h-12 flex absolute ml-[105px] mt-24 items-center justify-center rounded-full bg-green-400 text-black invisible group-hover:visible'>
                    <PlayIcon />
                </button>  
                <Image className='w-full' src="/dailymix1.jpg" width={300} height={300} alt="Capa do Album" />
                <strong className='font-semibold'>Daily Mix 1</strong>
                <span className='text-sm text-zinc-400 '>David Bowie, Queen, The Ronlling Stones</span>
            </a>

            <a href="" className='bg-white/5 p-3 group rounded-md hover:bg-white/10 flex flex-col'>
                <button className='w-12 h-12 flex absolute ml-[105px] mt-24 items-center justify-center rounded-full bg-green-400 text-black invisible group-hover:visible'>
                    <PlayIcon />
                </button>  
                <Image className='w-full' src="/dailymix2.jpg" width={300} height={300} alt="Capa do Album" />
                <strong className='font-semibold'>Daily Mix 2</strong>
                <span className='text-sm text-zinc-400 '>Charlie Brown Jr, CPM 22, Pitty  </span>
            </a>

            <a href="" className='bg-white/5 p-3 group rounded-md hover:bg-white/10 flex flex-col'>
                <button className='w-12 h-12 flex absolute ml-[105px] mt-24 items-center justify-center rounded-full bg-green-400 text-black invisible group-hover:visible'>
                    <PlayIcon />
                </button>  
                <Image className='w-full' src="/dailymix3.jpg" width={300} height={300} alt="Capa do Album" />
                <strong className='font-semibold'>Daily Mix 3</strong>
                <span className='text-sm text-zinc-400 '>Slipknot, Linkin Park, Paparochi</span>
            </a>

            <a href="" className='bg-white/5 p-3 group rounded-md hover:bg-white/10 flex flex-col'>
                <button className='w-12 h-12 flex absolute ml-[105px] mt-24 items-center justify-center rounded-full bg-green-400 text-black invisible group-hover:visible'>
                    <PlayIcon />
                </button>  
                <Image className='w-full' src="/dailymix4.jpg" width={300} height={300} alt="Capa do Album" />
                <strong className='font-semibold'>Daily Mix 4</strong>
                <span className='text-sm text-zinc-400 '>Red Hot Chili Paper, Foo Fighters, Oasis</span>
            </a>

            <a href="" className='bg-white/5 p-3 group rounded-md hover:bg-white/10 flex flex-col '>
                <button className='w-12 h-12 flex absolute ml-[105px] mt-24 items-center justify-center rounded-full bg-green-400 text-black invisible group-hover:visible'>
                    <PlayIcon />
                </button>  
                <Image className='w-full' src="/dailymix5.jpg" width={300} height={300} alt="Capa do Album" />
                <strong className='font-semibold'>Daily Mix 5</strong>
                <span className='text-sm text-zinc-400 '>The Offspring, Ramones, Green Day, Lagwagon</span>
            </a>

            <a href="" className='bg-white/5 p-3 group rounded-md hover:bg-white/10 flex flex-col '>
                <button className='w-12 h-12 flex absolute ml-[105px] mt-24 items-center justify-center rounded-full bg-green-400 text-black invisible group-hover:visible'>
                    <PlayIcon />
                </button>  
                <Image className='w-full' src="/bestof80.jpg" width={300} height={300} alt="Capa do Album" />
                <strong className='font-semibold'>Top Hits 1980</strong>
                <span className='text-sm text-zinc-400 '>The Offspring, Ramones, Green Day, Lagwagon</span>
            </a>

        </div>
        <div className='flex'>
            <h1 className='font-semibold text-2xl mt-10'>Suggested Artists</h1>
            <a href='#' className=' ml-auto mt-12 font-semibold uppercase text-sm hover:underline sm:text-xs md:text-xs'>Ver tudo</a>
        </div>
        
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-4'>
        <a href="" className='bg-white/5 p-3 group rounded-md hover:bg-white/10 flex flex-col'>
            <button className='w-12 h-12 flex absolute ml-[105px] mt-24 items-center justify-center rounded-full bg-green-400 text-black invisible group-hover:visible'>
                <PlayIcon />
            </button> 
            <Image className='w-full rounded-full' src="/aliceinchainscapa.jpg" width={300} height={300} alt="Capa do Album" />
            <strong className='font-semibold'>Alice In Chains </strong>
            <span className='text-sm text-zinc-400 '>Artista</span>
        </a>

        <a href="" className='bg-white/5 p-3 group rounded-md hover:bg-white/10 flex flex-col'>
            <button className='w-12 h-12 flex absolute ml-[105px] mt-24 items-center justify-center rounded-full bg-green-400 text-black invisible group-hover:visible'>
                <PlayIcon />
            </button> 
            <Image className='w-full rounded-full' src="/sexpistolscapa.jpg" width={300} height={300} alt="Capa do Album" />
            <strong className='font-semibold'>Sex Pistols</strong>
            <span className='text-sm text-zinc-400 '>Artista</span>
        </a>

        <a href="" className='bg-white/5 p-3 group rounded-md hover:bg-white/10 flex flex-col'>
            <button className='w-12 h-12 flex absolute ml-[105px] mt-24 items-center justify-center rounded-full bg-green-400 text-black invisible group-hover:visible'>
                <PlayIcon />
            </button> 
            <Image className='w-full rounded-full' src="/metallicacapa.jpg" width={300} height={300} alt="Capa do Album" />
            <strong className='font-semibold'>Metallica</strong>
            <span className='text-sm text-zinc-400 '>Artista</span>
        </a> 

        <a href="" className='bg-white/5 p-3 group rounded-md hover:bg-white/10 flex flex-col'>
            <button className='w-12 h-12 flex absolute ml-[105px] mt-24 items-center justify-center rounded-full bg-green-400 text-black invisible group-hover:visible'>
                <PlayIcon />
            </button> 
            <Image className='w-full rounded-full' src="/sgcapa.jpg" width={300} height={300} alt="Capa do Album" />
            <strong className='font-semibold'>Sondgarden</strong>
            <span className='text-sm text-zinc-400 '>Artista</span>
        </a>

        <a href="" className='bg-white/5 p-3 group rounded-md hover:bg-white/10 flex flex-col'>
            <button className='w-12 h-12 flex absolute ml-[105px] mt-24 items-center justify-center rounded-full bg-green-400 text-black invisible group-hover:visible'>
                <PlayIcon />
            </button> 
            <Image className='w-full rounded-full' src="/pixiescapa.jpg" width={300} height={300} alt="Capa do Album" />
            <strong className='font-semibold'>Pixies</strong>
            <span className='text-sm text-zinc-400 '>Artista</span>
        </a>

        <a href="" className='bg-white/5 p-3 group rounded-md hover:bg-white/10 flex flex-col'>
            <button className='w-12 h-12 flex absolute ml-[105px] mt-24 items-center justify-center rounded-full bg-green-400 text-black invisible group-hover:visible'>
                <PlayIcon />
            </button> 
            <Image className='w-full rounded-full' src="/ffcapa.jpg" width={300} height={300} alt="Capa do Album" />
            <strong className='font-semibold'>Foo Fighters</strong>
            <span className='text-sm text-zinc-400 '>Artista</span>
        </a>

        <a href="" className='bg-white/5 p-3 group rounded-md hover:bg-white/10 flex flex-col'>
            <button className='w-12 h-12 flex absolute ml-[105px] mt-24 items-center justify-center rounded-full bg-green-400 text-black invisible group-hover:visible'>
                <PlayIcon />
            </button> 
            <Image className='w-full rounded-full' src="/thedistilerscapa.jpg" width={300} height={300} alt="Capa do Album" />
            <strong className='font-semibold'>The Distilers</strong>
            <span className='text-sm text-zinc-400 '>Artista</span>
        </a>

        <a href="" className='bg-white/5 p-3 group rounded-md hover:bg-white/10 flex flex-col'>
            <button className='w-12 h-12 flex absolute ml-[105px] mt-24 items-center justify-center rounded-full bg-green-400 text-black invisible group-hover:visible'>
                <PlayIcon />
            </button> 
            <Image className='w-full rounded-full' src="/stpcapa.jpg" width={300} height={300} alt="Capa do Album" />
            <strong className='font-semibold'>Stone Temple Pistols</strong>
            <span className='text-sm text-zinc-400 '>Artista</span>
        </a>

        </div>
    </main>
    )
}