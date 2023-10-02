import Image from 'next/image'
import {  ChevronRight, ChevronLeft} from 'lucide-react'
import ListTop from './List_top'
import PlayIcon from './Icons/PlayIcon'
import ListaBandasRecentes from '../Listas/BandasRecentes.json'
import ListaDaily from '../Listas/BandasDaily.json'
import ListaSugeridos from '../Listas/BandasSugeridas.json'


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
                <h1 className='font-xs font-semibold md:text-base 2xl:text-3xl mt-10'>Recently Played</h1>
                <a href='#' className=' ml-auto mt-12 font-semibold uppercase text-sm hover:underline sm:text-xs md:text-xs'>Ver tudo</a>
            </div>
            
            <div className='grid grid-cols-3 lg:grid-cols-4 2xl:grid-cols-8 gap-4 mt-4'>
            {ListaBandasRecentes.map( (item, i) => (
                <a href="" className='bg-white/5 p-3 group overflow-hidden rounded-md hover:bg-white/10 transition-colors'>
                    <button className='hidden w-12 h-12 2xl:flex absolute ml-[105px] mt-24 items-center justify-center rounded-full bg-green-400 text-black invisible group-hover:visible' key={i}>
                        <PlayIcon />
                    </button>
                    <Image className={` w-full ${item.classe} `} src={item.img} width={300} height={300} alt="Capa do Album" />
                    <strong className='text-sm lg:text-base font-semibold '>{item.album}</strong>
                    <span className='text-xs lg:text-sm text-zinc-400 flex '>{item.banda}</span>
                </a>
            ))}
            
            </div>

            <div className='flex'>
                <h1 className='font-xs font-semibold sm:text-base md:text-3xl mt-10'>Made For JJ Koscky</h1>
                <a href='#' className=' ml-auto mt-12 font-semibold uppercase text-sm hover:underline sm:text-xs md:text-xs'>Ver tudo</a>
            </div>


            <div className='grid grid-cols-3 lg:grid-cols-4 2xl:grid-cols-8 gap-4 mt-4'>
            {ListaDaily.map( (item, i) => (
                <a href="" className='bg-white/5 p-3 group rounded-md hover:bg-white/10 flex flex-col' key={i}>
                    <button className='hidden w-12 h-12 2xl:flex absolute ml-[105px] mt-24 items-center justify-center rounded-full bg-green-400 text-black invisible group-hover:visible'>
                        <PlayIcon />
                    </button>  
                    <Image className='w-full' src={item.img} width={300} height={300} alt="Capa do Album" />
                    <strong className='text-sm lg:text-base font-semibold'>{item.titulo}</strong>
                    <span className='text-xs lg:text-sm text-zinc-400 '>{item.sub}</span>
                </a>
            ))}
            

        </div>
        <div className='flex'>
            <h1 className='font-semibold text-2xl mt-10'>Suggested Artists</h1>
            <a href='#' className=' ml-auto mt-12 font-semibold uppercase text-sm hover:underline sm:text-xs md:text-xs'>Ver tudo</a>
        </div>
        
        <div className='grid grid-cols-3 lg:grid-cols-4 2xl:grid-cols-8 gap-4 mt-4'>
        {ListaSugeridos.map( (item, i) => (    
            <a href="#" className='bg-white/5 p-3 group rounded-md hover:bg-white/10 flex flex-col' key={i}>
                <button className='hidden w-12 h-12 2xl:flex absolute ml-[105px] mt-24 items-center justify-center rounded-full bg-green-400 text-black invisible group-hover:visible'>
                    <PlayIcon />
                </button> 
                <Image className='w-full rounded-full' src={item.img} width={300} height={300} alt="Capa do Album" />
                <strong className='text-sm lg:text-base font-semibold'>{item.banda}</strong>
                <span className='text-xs lg:text-base text-zinc-400 '>Artista</span>
            </a>
        ))}
        
        </div>
    </main>
    )
}