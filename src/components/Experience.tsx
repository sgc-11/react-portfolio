import React from 'react'
import { ExperienceData } from '../utils/data';

interface ExperienceItem {
  id: string;
  name: string;
  environment: string;
  description: string;
}

interface ExperienceCardProps {
  name: string;
  environment: string;
  description: string;
  index: number;
  isLast: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  name,
  environment,
  description,
  index,
  isLast
}) => {
  return (
    <div className="relative mb-8 md:mb-12">
      <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-500"></div>
      
      <div className="ml-6 bg-gradient-to-br from-blue-900 to-slate-800 rounded-lg border border-blue-700/30 p-6 shadow-lg">
        <div className="flex items-center mb-4">
          <div className="bg-blue-500 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold mr-4">
            {index + 1}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">{name}</h3>
            <p className="text-blue-300 text-sm">{environment}</p>
          </div>
        </div>
        
        <div className="bg-blue-950/50 rounded-md p-3 mb-4">
          <p className="text-sky-200 text-xs font-medium">Key Experience</p>
        </div>
        
        <p className="text-blue-100 text-sm leading-relaxed">{description}</p>
        
        {!isLast && (
          <div className="absolute left-0 bottom-0 h-8 w-0.5 bg-blue-500"></div>
        )}
      </div>
    </div>
  )
}

const Experience: React.FC = () => {
  return (
    <section className='max-w-screen-xl mx-auto py-20 px-6 md:px-20 relative' id='experience'>
      <h2 className='text-primary text-3xl md:text-4xl font-bold text-center mb-12'>
        Project Experience
      </h2>

      <div className="relative">
        {ExperienceData.map((item: ExperienceItem, index: number) => (
          <ExperienceCard
            key={item.id}
            index={index}
            name={item.name}
            environment={item.environment}
            description={item.description}
            isLast={ExperienceData.length === index + 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;