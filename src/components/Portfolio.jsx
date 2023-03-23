import styles, { layout } from '../style'
import { projects } from '../constants'

const ProjectCard = ({ id, img, logo, title, content, url }) => (
  <div className={`h-[500px] w-full relative bg-primary rounded-[20px] overflow-hidden box-shadow ${styles.border}`}>

  <div className='h-full w-full bg-no-repeat bg-cover bg-center p-8 opacity-50 absolute' style={{
    backgroundImage: `url(${img})`
  }}>
  </div>

  <div className='absolute p-8 flex flex-col justify-between h-full w-full'>
    <div className='self-end'>
      <img className='max-w-[182px] max-h-[75px]' src={logo} alt="logo" />
    </div>
    <div className='flex flex-col gap-2'>
      <h4 className={`${styles.heading4} text-white`}>{title}</h4>
      <p className={`${styles.paragraph} text-white max-w-[500px]`}>{content}</p>
      <a className={`font-medium ${styles.paragraph} text-white underline duration-500 hover:text-dimWhite`} href={url} target="_blank">Podívat se na web</a>
    </div>
  </div>
</div>

)

const Portfolio = () => {
  return (
    <section id='projekty' className={`${layout.sectionCol} relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full gradient__section"></div>
      <div className={`${layout.sectionInfo} sm:items-center`}>
        <h3 className={styles.heading3}>Naše práce</h3>
        <h2 className={styles.heading2}>Realizované projekty</h2>
      </div>
      <div className={`grid sm:grid-cols-2 gap-8`}>
        {projects.map((projects, index) => (
          <ProjectCard key={projects.id} {...projects} index={index} />
        ))}
        
      </div>
      
    </section>
  )
}

export default Portfolio