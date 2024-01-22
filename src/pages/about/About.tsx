import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import { skills, experiences } from '../../components/constants/Skills';
import CTA from '../../components/about/CTA';

const About = () => {
  
  return (
    <section className="max-container">
      <h1 className="head-text text-white">
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Jude</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-400/100">
        <p>
          I am a Software Engineer from Australia with a strong tertiary education in software
          engineering, mathematics and related areas. I have professional
          experience primarily in Full Stack Engineering. I am code agnostic, teachable
          and I have professional experience in blockchain engineering.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text text-white">
          My Skills <br/><span className="text-sm">(including but not limited to)</span>
        </h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill: any) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <h3 className="subhead-text text-white">
            Experience
          </h3>

          {/* <div className="mt-5 flex flex-col gap-3 text-slate-400/100">
            <p>
              I am a Software Engineer from Australia with a strong tertiary education in software
              engineering, mathematics and related areas. I have professional
              experience primarily in Full Stack Engineering. I am code agnostic, teachable
              and I have professional experience in blockchain engineering.
            </p>
          </div> */}
        </div>

        <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience: any) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  contentStyle={{
                    borderBottom: '8px',
                    borderStyle: 'solid',
                    borderBottomColor: experience.iconBg,
                    boxShadow: 'none'
                  }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p className="text-black-500 font-medium font-base m-0">
                      {experience.company_name}
                    </p>
                  </div>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {
                      experience.points.map((point: any, index: number) => (
                        <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">
                          {point}
                        </li>
                      ))
                    }
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
        </div>

      </div>
      
      <hr className="border-slate-200" />

      <CTA />
        
    </section>
  )
}

export default About