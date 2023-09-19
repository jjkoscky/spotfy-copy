import {Home as HomeIcon, Search, Library, PlusSquare} from 'lucide-react'
import HeartIcon2 from './Icons/HeartIcon2'

export function Sidebar(){
    return(
        <aside className='hidden md:block w-72 p-6'>
            <div className='flex items-center gap-2'>
                  <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                  <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                  <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                </div>
              <nav className='space-y-5 mt-10'>
                <a href="#" className='flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-100'>
                  <HomeIcon />
                  Home
                </a>
                <a href="#" className='flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-100'>
                  <Search />
                  Search
                </a>
                <a href="#" className='flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-100'>
                  <Library />
                  Your Library
                </a>
                <a href="#" className='flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-100'>
                  <PlusSquare />
                  Create Playlist
                </a>
                <a href='#' className='flex gap-3'>
                  <div className='pt-1 pl-[7px] flex w-7 h-7 bg-gradient-to-r from-purple-800 to-gray-300 rounded-sm'>
                      <HeartIcon2 /> 
                  </div>
                  <span className='flex text-sm font-semibold text-zinc-400 hover:text-zinc-100'>Liked Songs</span>
                  
                </a>
              </nav>
              <nav className='mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3'>
                <a href="" className='txt-sm text-zinc-400 hover:text-zinc-100 cursor-default'>Hot Hit Brasil</a>
                <a href="" className='txt-sm text-zinc-400 hover:text-zinc-100 cursor-default'>JJ 2023</a>
                <a href="" className='txt-sm text-zinc-400 hover:text-zinc-100 cursor-default'>Punk Rock</a>
                <a href="" className='txt-sm text-zinc-400 hover:text-zinc-100 cursor-default'>Punk Rock California</a>
                <a href="" className='txt-sm text-zinc-400 hover:text-zinc-100 cursor-default'>Punk Rock British</a>
                <a href="" className='txt-sm text-zinc-400 hover:text-zinc-100 cursor-default'>Canadian Bands </a>
                <a href="" className='txt-sm text-zinc-400 hover:text-zinc-100 cursor-default'>Brazilian Bands </a>
                <a href="" className='txt-sm text-zinc-400 hover:text-zinc-100 cursor-default'>Japanense Bands </a>
                <a href="" className='txt-sm text-zinc-400 hover:text-zinc-100 cursor-default'>Mexican Bands </a>
                <a href="" className='txt-sm text-zinc-400 hover:text-zinc-100 cursor-default'>Australian Bands </a>
                <a href="" className='txt-sm text-zinc-400 hover:text-zinc-100 cursor-default'>Rock 80'</a>
                <a href="" className='txt-sm text-zinc-400 hover:text-zinc-100 cursor-default'>Pos Punk Goth</a>
                <a href="" className='txt-sm text-zinc-400 hover:text-zinc-100 cursor-default'>Rock & Roll</a>
                <a href="" className='txt-sm text-zinc-400 hover:text-zinc-100 cursor-default'>Funk miami</a>
                <a href="" className='txt-sm text-zinc-400 hover:text-zinc-100 cursor-default'>Naruto Openings</a>
                <a href="" className='txt-sm text-zinc-400 hover:text-zinc-100 cursor-default'>One Piece Openings</a>
                <a href="" className='txt-sm text-zinc-400 hover:text-zinc-100 cursor-default'>Neo Genesis Evangelion Soundtrack</a>
                <a href="" className='txt-sm text-zinc-400 hover:text-zinc-100 cursor-default'>Animes Opening</a>
                
              </nav>
            </aside>
    )
}