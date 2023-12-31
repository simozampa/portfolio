import ScrollArrow from "./(components)/ScrollArrow"

const technologies = [
  'React', 'Vue', 'Next', 'Express', 'Laravel', '.NET Core', 'Tailwind CSS', 'MySQL', 'PostgreSQL', 'Prisma', 'MongoDB', 'AWS'
]

const languages = [
  'JavaScript', 'TypeScript', 'PHP', 'Python', 'C#', 'C++', 'SQL'
]

export default function Home() {
  return (
    <div>

      {/* Home */}
      <div className='relative h-screen pt-32'>
        <div>
          {/* Header */}
          <h3 className='text-sm text-sky-300'>Hi, my name is</h3>
          <h1 className='text-6xl font-bold text-gray-200 pt-4'>Simone Zamparini.</h1>
          <h1 className='text-6xl font-bold pt-4 text-gray-200'>I build stuff for the web.</h1>
          <p className='pt-4 text-sm text-gray-400'>I'm a software engineer based in California and I love building cool tech.</p>
          <p className='pt-2 text-sm text-gray-400'>Let's build something together</p>
          <button className='mt-8 px-8 py-4 text-sm text-sky-300 border border-sky-300 rounded-md shadow-md hover:bg-sky-300/10'>
            Get In Touch
          </button>
        </div>

        {/* Scroll Icon */}
        <ScrollArrow scrollTo="/#about" />

      </div>

      {/* About */}
      <div className='relative h-screen pt-32 mx-auto px-16' id='about'>
        <span className='text-sky-300 mr-1'>01.</span>
        <span className='text-gray-300 text-2xl font-semibold'>About Me</span>
        <p className='mt-1 text-sm text-gray-400'>
          Hello! My name is Simone and I enjoy building things that live online. My interest in software engineering started when I wanted to building stuff for VR in Unity.
        </p>
        <p className='mt-1 text-sm text-gray-400'>
          I was born and raised in a tiny city in Italy, however I moved to the USA to study.
        </p>

        {/* Scroll Icon */}
        <ScrollArrow scrollTo="/#skills" />
      </div>

      {/* Skills */}
      <div className='mt-16 mx-auto px-16' id='skills'>
        <span className='text-sm text-sky-300 mr-1'> 02. </span>
        <span className='text-gray-300'>Skills</span>
        <p className='mt-1 text-sm text-gray-400'>I love to try out new technology and stay on the edge of modern web development.</p>

        {/* Programming Languages */}
        <div className="mt-4">
          <span className="text-sm text-gray-300 font-medium">Programming languages that I love:</span>
          <div className='mt-2 flex items-center space-x-2'>
            {languages.map((language) => (
              <span key={language} className="rounded-lg px-2 py-1 border border-sky-300 bg-sky-300/10 text-center text-sm text-sky-300" >
                {language}
              </span>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-4">
          <p className="text-sm text-gray-300 font-medium">Some Technologies I have used recently:</p>
          <div className='mt-2 flex flext-wrap items-center space-x-2'>
            {technologies.map((tech) => (
              <span key={tech} className="m-1 rounded-lg px-2 py-1 border border-sky-300 bg-sky-300/10 text-center text-sm text-sky-300" >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className='mt-16 mx-auto px-16' id='about'>
        <span className='text-sm text-sky-300 mr-1'> 03. </span>
        <span className='text-gray-300'>Projects</span>
        <p className='mt-1 text-sm text-gray-400'>Some stuff that I worked on professionally:</p>

      </div>

      {/* Contact */}

    </div>

  )
}
