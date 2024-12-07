import React from "react"
import "./About.css"
import profile_img_4 from "../../assets/profile_img_4.png"

/* About */
const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About me</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img_4} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a versatile professional specialized in frontend web development, copywriting, and AI training. With a keen eye for design and a solid technical foundation, I craft engaging, user-friendly web interfaces that seamlessly blend functionality and attractiveness. As a copywriter, I have a proven ability to communicate complex ideas in clear, compelling language, enhancing brand presence and audience engagement. Additionally, as an AI trainer, I leverage industry knowledge to design and deliver effective training programs that demystify AI for diverse audiences. I am Passionate about innovation, and consistently brings creativity, clarity, and expertise to every project.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p><span>HTML & CSS</span></p><hr style={{width:"70%"}} /></div>
                        <div className="about-skill"><p><span>Bootstrap</span></p><hr style={{width:"70%"}} /></div>
                        <div className="about-skill"><p><span>JavaScript</span></p><hr style={{width:"55%"}} /></div>
                        <div className="about-skill"><p><span>React JS</span></p><hr style={{width:"70%"}} /></div>
                        <div className="about-skill"><p><span>TypeScript</span></p><hr style={{width:"65%"}} /></div>
                        <div className="about-skill"><p><span>Next.JS</span></p><hr style={{width:"65%"}} /></div>
                        <div className="about-skill"><p><span>Firebase</span></p><hr style={{width:"65%"}} /></div>
                        <div className="about-skill"><p><span>Github</span></p><hr style={{width:"70%"}} /></div>
                        <div className="about-skill"><p><span>Copywriting & Editing</span></p><hr style={{width:"65%"}} /></div>
                        <div className="about-skill"><p><span>AI Essentials</span></p><hr style={{width:"70%"}} /></div>
                        <div className="about-skill"><p><span>Canva</span></p><hr style={{width:"70%"}} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About