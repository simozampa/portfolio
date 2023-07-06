import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex h-screen bg-zinc-900'>
      <div className='m-auto'>
        <h3 className='text-sm text-gray-400'>Hi, my name is</h3>
        <h1 className='text-4xl font-bold text-gray-200 pt-4'>Simone Zamparini.</h1>
        <h1 className='text-4xl font-bold pt-4 text-gray-200'>I build stuff for the web and more.</h1>
        <p className='pt-4 text-sm text-gray-400'>I'm a software engineer based in California and I love building cool tech.</p>
        <p className='pt-2 text-sm text-gray-400'>Let's build the future together</p>
        <button className='mt-8 px-8 py-4 text-sm text-sky-300 border border-sky-300 rounded-md shadow-md hover:bg-sky-300 hover:text-gray-900'>
          Get In Touch
        </button>
      </div>
    </div>
  )
}
