import Image from 'next/image'

export default function Home() {
  return (
    <div className='py-16 lg:py-32'>

      {/* Header */}
      <div className='flex h-screen'>
        <div className=''>
          <h3 className='text-sm text-sky-300'>Hi, my name is</h3>
          <h1 className='text-6xl font-bold text-gray-200 pt-4'>Simone Zamparini.</h1>
          <h1 className='text-6xl font-bold pt-4 text-gray-200'>I build stuff for the web.</h1>
          <p className='pt-4 text-sm text-gray-400'>I'm a software engineer based in California and I love building cool tech.</p>
          <p className='pt-2 text-sm text-gray-400'>Let's build something together</p>
          <button className='mt-8 px-8 py-4 text-sm text-sky-300 border border-sky-300 rounded-md shadow-md hover:bg-sky-300 hover:text-gray-900'>
            Get In Touch
          </button>
        </div>
      </div>

      {/* About */}
      <div className='mx-auto w-1/2'>
        <span className='text-[11px] text-sky-300 mr-1'>
          01.
        </span>
        <span className='text-gray-300 text-sm'>
          About Me
        </span>
        <p className='mt-4 text-sm text-gray-400'>
          Hello! My name is Simone and I enjoy building things that live online. My interest in software engineering started when I wanted to building stuff for VR in Unity.
        </p>
        <p className='mt-1 text-sm text-gray-400'>
          I was born and raised in a tiny city in Italy, however I moved to the USA to study.
        </p>
      </div>

      {/* Skills */}


      {/* Projects */}


      {/* Contact */}

    </div>

  )
}
