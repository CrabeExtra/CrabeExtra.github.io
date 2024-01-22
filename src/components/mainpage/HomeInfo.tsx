import React from 'react'
import { Link } from 'react-router-dom'

const InfoBox = ({text, link, btnText}: any) =>  (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            {/* <img src={arrow} /> */}
        </Link>
    </div>
)

const renderContent: any = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Jude</span>.
            <br/>
            A software engineer from Australia.
        </h1>
    ),
    2: (
        <InfoBox 
            text="I have 2 years professional experience and jumped into the deep-end straight out of uni, learning a lot very quickly."
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox 
            text="Considerable 'owning' contribution to some projects and smaller contributions to a lot of projects in many programming languages."
            link="/projects"
            btnText="Explore my projects"
        />
    ),
    4: (
        <InfoBox 
            text="Looking to hire a software engineer?"
            link="/contact"
            btnText="Contact me"
        />
    ),
}

const HomeInfo = (props: any) => {
  return (
    renderContent[props.currentStage] || null
  )
}

export default HomeInfo