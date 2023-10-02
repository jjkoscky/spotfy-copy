import Image from 'next/image'
import HeartIcon from './Icons/HeartIcon'
import PlayIcon from './Icons/PlayIcon'
import BandasCurtidas from '../Listas/BandasCurtidas.json'

export default function ListTop(){

    return(
        
        <div className='text-xs grid grid-cols-2 gap-4 mt-4 2xl:grid-cols-3 sm:text-sm md:text-base'>

            <a href="" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
            <div className='w-[70px] h-[70px] sm:w-[104px] sm:h-[104px] bg-gradient-to-r from-purple-800 to-gray-300'>
                <div className='ml-6 mt-5 sm:ml-9 sm:mt-9'>
                    <HeartIcon />
                </div>
            </div>
            <strong>Liked Songs</strong>
            <button className='hidden w-12 h-12 lg:flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <PlayIcon />
            </button>
            </a>
            
            {BandasCurtidas.map( (item, i) => (
                <a href="" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors' key={i}>
                <Image src={item.img} width={104} height={104} alt="Capa do Album" className='w-[70px] h-[70px] sm:w-[104px] sm:h-[104px]'/>
                <strong>{item.album}</strong>
                <button className='hidden w-12 h-12 lg:flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                    <PlayIcon />
                </button>
                </a>
            ))}
            

              </div>
    )
}