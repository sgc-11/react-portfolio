import React from 'react'
import { skills } from '../utils/data'

interface SkillsCardProps {
  icon: React.ElementType;
  iconProps?: React.SVGProps<SVGSVGElement>;
  title: string;
  comment: string;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ icon: Icon, title, comment }) => {
  return (
  <div className="bg-slate-900 rounded border border-blue-900 p-5">
      <div className='flex items-center justify-between mb-5'>
        <p className='text-base'>{title}</p>
        <Icon className="text-primary text-3xl" />
      </div>

      <p className='text-xs font-light leading-5 opacity-80'>{comment}</p> 
  </div>
    )
}

const Skills = () => {
  return (
    <section className='max-w-screen-xl px-6 mx-auto pb-20' id='skills'>
      <div className='bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 p-4 md:p-8'>
        <h5 className='text-xl font-medium mb-5'></h5>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

          {skills.map((skill)=>(
              <SkillsCard
              key={skill.id}
              icon={skill.icon}
              title={skill.title}  
              comment={skill.comment}
              />
            ))}
          </div>

        
      </div>

    </section>
  )
}

export default Skills