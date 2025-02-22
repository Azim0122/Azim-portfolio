import React from 'react'
import Portfolio from '../assets/portfolio.png'
import Wikipedia from '../assets/wikipedia.png'
import Youtube from '../assets/Youtube.png'
import Ai from '../assets/ai.png'
import Sneakers from '../assets/sneakers.png'
import iphone from '../assets/iphone.png'
import Translator from '../assets/translator.png'
import gta from '../assets/gta.png'
import Grilli from '../assets/grilli.png'
import Cards from './Cards'
import Skywings from '../assets/skywings.png'
import Rental from '../assets/Rental.png'
import Supercars from '../assets/supercars.png'

const Projects = () => {

    const projectJson = [
        {
          title: 'Portfolio',
          desc: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.',
          image: `${Portfolio}`,
          live: "https://azim0122.github.io/Portfolio_perdonal/",
          github: "https://github.com/Azim0122/Portfolio_perdonal"
        },
        {
          title: 'Iphone site clone',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: `${iphone}`,
          live: "https://www-iphoneappl.netlify.app/",
          github: "https://github.com/Azim0122/applee"
        },
        {
          title: 'YouTube Clone',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: Youtube,
          live: "https://youtubeee-clonee.netlify.app/",
          github: "https://github.com/Azim0122/youtube-clone"
        },
        {
          title: 'Sneakers Shop',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: Sneakers,
          live: "https://sneakers-shoppp.netlify.app/",
          github: "https://github.com/Azim0122/Sneakers-shop"
        },
        {
          title: 'Gta-5 Clone',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: `${gta}`,
          live: "https://gta-5-site.netlify.app/",
          github: "https://github.com/Azim0122/gta-5-site/tree/main/GTA-5-Clone-main"
        },
        {
          title: 'Azim Ai',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: `${Ai}`,
          live: "https://azim1ai.netlify.app/",
          github: "https://github.com/Azim0122/Ai"
        },
          {
          title: 'Wikipedi Search',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: `${Wikipedia}`,
          live: "https://wikipedia1search.netlify.app/",
          github: "https://github.com/Azim0122/Wikipedia_Search"
        },
        {
          title: 'Language Translator',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: `${Translator}`,
          live: "https://language1translator22.netlify.app/",
          github: "https://github.com/Azim0122/Aihttps://github.com/Azim0122/translate"
        },
        {
          title: 'Grilli Restaurant',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: `${Grilli}`,
          live: "https://azim0122.github.io/restaurant5/#",
          github: "https://github.com/Azim0122/restaurant5"
        },
        {
          title: 'Skywings',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: `${Skywings}`,
          live: "https://azim0122.github.io/Skywings/",
          github: "https://github.com/Azim0122/Skywings"
        },
        {
          title: 'Rental Car',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: `${Rental}`,
          live: "https://azim0122.github.io/RENTAL/#",
          github: "https://github.com/Azim0122/RENTAL"
        },
        {
          title: 'Super Cars',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: `${Supercars}`,
          live: "https://supercars1.netlify.app/",
          github: "https://github.com/Azim0122/Supercars"
        },
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
