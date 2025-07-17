import './Projects.css'

export default function Projects() {
  const projects = [
    {
      name: 'Todo Manager',
      hostedLink: 'https://todo-manager-gilt.vercel.app/',
      githubLink: 'https://github.com/elenatrr/todo-manager'
    },
    {
      name: 'All Movies',
      hostedLink: 'https://all-movies-rho.vercel.app/',
      githubLink: 'https://github.com/elenatrr/all-movies'
    },
    {
      name: 'Star Wars Heroes',
      hostedLink: 'https://star-wars-heroes-lyart.vercel.app/',
      githubLink: 'https://github.com/elenatrr/star-wars-heroes'
    },
    {
      name: 'Three.js 3D Text',
      hostedLink: 'https://webgl-3d-text-cyan-seven.vercel.app/',
      githubLink: 'https://github.com/elenatrr/webgl-3d-text'
    },
  ]
  return (
    <div className='projects'>
      <ul className='projects-list'>
        {projects.map((project, index) => {
          return (
            <li key={index} className='projects-list-item'>
                <a className='projects-link' href={project.hostedLink} target='_blank' rel="noopener noreferrer">
                  <h4 className='projects-heading'>
                    {project.name}
                    </h4>
                  </a>
              <div className='projects-link-container'>
                <a className='projects-link' href={project.hostedLink} target='_blank' rel="noopener noreferrer">Hosted Version</a>
                <span>|</span>
                <a className='projects-link' href={project.githubLink} target='_blank' rel="noopener noreferrer">GitHub</a>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}