import React from 'react'
import './Skill.css'
import { FaHtml5,FaJs,FaReact,FaBootstrap,FaJava,FaGitAlt,FaGithub } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { SiTailwindcss,SiMongodb } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { FcLinux } from "react-icons/fc";
function Skill() {
 return(
  <>
    <div className='skill' style={{marginTop:"-15rem"}}>
      <h1>Tools and Technology</h1>
      <h3 id='p'>From structuring layouts to building dynamic user experiences, My daily toolkit includes</h3>
      <div className='skill-container'>
        <div className='one' id='one'>
        <div className='skill-icon'>
          <FaHtml5 className='icon' style={{color:"rgb(241, 106, 48)"}}/>
          <p style={{position:"relative",left:"13px"}}>HTML</p>
        </div>
        <div className='skill-icon'>
          <DiCss3 className='icon' style={{color:"#306AF1"}}/>
          <p style={{position:"relative",left:"15px"}}>CSS</p>
        </div>
        <div className='skill-icon'>
          <FaJs className='icon' style={{color:" #FDCF08"}}/>
          <p>JavaScript</p>
        </div>
        </div>
        <div className='one' id='two'>
        <div className='skill-icon'>
          <FaReact className='icon' style={{color:"#08D9FF"}}/>
          <p style={{position:"relative",left:"13px"}}>React</p>
        </div>
        <div className='skill-icon'>
          <FaBootstrap className='icon' style={{color:"#7818F7"}}/>
          <p>Bootstrap</p>
        </div>
        <div className='skill-icon'>
          <SiTailwindcss className='icon' style={{color:"#25AEBF"}}/>
          <p>Tailwind CSS</p>
        </div>
        </div>
       <div className='one' id='three'>
       <div className='skill-icon'>
          <TbSql className='icon' style={{color:"#D97120"}}/>
          <p style={{position:"relative",left:"13px"}}>SQL</p>
        </div>
        <div className='skill-icon'>
          <SiMongodb className='icon' style={{color:"#4DA53F"}}/>
          <p>MongoDB</p>
        </div>
        <div className='skill-icon'>
          <FaJava className='icon' style={{color:"#507E9C"}}/>
          <p style={{position:"relative",left:"13px"}}>Java</p>
        </div>
       </div>
        <div className='one' id='four'>
        <div className='skill-icon'>
          <FcLinux className='icon' style={{color:"#306AF1"}}/>
          <p style={{position:"relative",left:"13px"}}>Linux</p>
        </div>
        <div className='skill-icon'>
          <FaGitAlt className='icon' style={{color:"#F1502F"}}/>
          <p style={{position:"relative",left:"15px"}}>Git</p>
        </div>
        <div className='skill-icon'>
          <FaGithub className='icon' style={{color:"#181717"}}/>
          <p style={{position:"relative",left:"13px"}}>GitHub</p>
        </div>
        </div>
      </div>
      <div className='loader'>
        <h1>M - Mongo DB</h1>
        <h1>E - Express</h1>
        <h1>R - React</h1>
        <h1>N - Node</h1>
        <h1>Developer</h1>
        <h1>Problem Solver</h1>
      </div>
    </div>
  </>
 )
}

export default Skill;