import profilePic from "../assets/IMG_3831.jpg"
import hobbiePic1 from "../assets/hobbiePic1.webp"
import hobbiePic2 from "../assets/hobbiePic2.jpg"
import hobbiePic3 from "../assets/sports.avif"


import {aboutMe} from "../utils/data"

const AboutMe = () => {
  return (
    <section className='max-w-screen-xl px-6 mx-auto py-10 md:py-24' id='about'>
      <h5 className='text-primary text 2xl md:text-4xl font-semibold text-center md:text-left pb-10 md:pb-14'>About Me</h5>

      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4'>
        <img className='w-full h-80 object-cover rounded-lg mb-4 md:mb-0' src={profilePic} alt="profile pic" />

        <div className='col-span-2 bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 p-6'>
          <p className='text-blue-50 text-xs md:text-[13px] font-normal text-justify leading-6'>{aboutMe.introduction}{" "}{aboutMe.background}{" "}{aboutMe.interests}</p>

          <br />

          <p className='text-blue-50 text-xs md:text-[13px] font-normal text-justify leading-6'>{aboutMe.skills}{aboutMe.careerGoals}</p>
        </div>

      </div>

<div className="flex flex-col md:flex-row justify-around mt-5 gap-8">
  <div className="text-center max-w-xs mx-auto w-full">
    <div className="bg-white p-4 shadow-lg rounded-lg h-full flex flex-col">
      <div className="flex-grow">
        <a href="https://www.scientificamerican.com/article/mens-world-cup-soccer-ball-the-al-rihla-has-the-aerodynamics-of-a-champion/" target='_blank'>
          <img src={hobbiePic1} alt="soccer" className="w-full h-64 object-cover rounded mb-4"/>
        </a>      
      </div>
      <p className="text-sm text-gray-600">Soccer is my favorite sport, and the one I enjoy the most</p>
    </div>
  </div>
  <div className="text-center max-w-xs mx-auto w-full">
    <div className="bg-white p-4 shadow-lg rounded-lg h-full flex flex-col">
      <div className="flex-grow">
        <a href="https://www.piedmont.org/living-real-change/health-benefits-of-reading" target='_blank'>
          <img src={hobbiePic2} alt="reading" className="w-full h-64 object-cover rounded mb-4"/>
        </a>      
      </div>
      <p className="text-sm text-gray-600">Reading is fundamental for my daily routine</p>
    </div>
  </div>
  <div className="text-center max-w-xs mx-auto w-full">
    <div className="bg-white p-4 shadow-lg rounded-lg h-full flex flex-col">
      <div className="flex-grow">
        <a href="https://www.freepik.com/photos/sports" target='_blank'>
         <img src={hobbiePic3} alt="Sports" className="w-full h-64 object-cover rounded mb-4"/>
        </a>
      </div>
      <p className="text-sm text-gray-600">Sports have been part of my life, I have trained boxing, table tennis, soccer and nowadays I do gym</p>
    </div>
  </div>
</div>

    </section>
  )
}

export default AboutMe