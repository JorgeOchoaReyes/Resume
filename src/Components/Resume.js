import React, { Component } from 'react';
import {GoMarkGithub} from 'react-icons/go';


class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}  <a href={work.link}> <GoMarkGithub size={20} />  </a></h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em> </p>  
            <p>{work.description}</p>
        </div>
      })
      var research = this.props.data.research.map(function(research){
        // var className = 'bar-expand '+skills.name.toLowerCase();
        // //
        // return <li key={skills.name}> <span style={{width:skills.level}}className={className}></span> <em>{skills.name}</em></li>
        return <div key={research.title}><h3>{research.title}</h3>
          <a href={research.link}> PDF Link </a> <p className="info">{research.tech} <span>&bull;</span> <em className="date">{2022}</em></p>
          <p>{research.abstract}</p>
         </div>
      })
    }

    return (
      <section id="resume">

      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Projects</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
      </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span> Research </span></h1>
         </div>

         <div className="nine columns main-col">
				   <ul className="skills">
					  {research}
				  </ul>
			  </div>
      </div>


      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default Resume;
