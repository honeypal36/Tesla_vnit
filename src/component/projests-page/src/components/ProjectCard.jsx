// src/components/ProjectCard.jsx  
import React, { useEffect, useState } from 'react';  
import './ProjectCard.css';  
import TeamModal from './TeamModal';  
import ProjectDetail from './ProjectDetail';  

const ProjectCard = ({ project }) => {  
  const [showTeam, setShowTeam] = useState(false);  
  const [showDetail, setShowDetail] = useState(false);  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);  

  const handleMeetOurTeam = () => {  
    setShowTeam(true);  
  };  

  const handleKnowMoreAboutProject = () => {  
    setShowDetail(true);  
  };  

  const handleClose = () => {  
    setShowTeam(false);  
    setShowDetail(false);  
  };  

  useEffect(() => {  
    const interval = setInterval(() => {  
      setCurrentImageIndex((prevIndex) =>   
        (prevIndex + 1) % project.images.length  
      );  
    }, 3000); // Change the image every 3 seconds  

    return () => clearInterval(interval); // Cleanup interval on component unmount  
  }, [project.images.length]);  

  return (  
    <div className="project-card">  
      <h1 className="project-title">{project.title}</h1>  
      <p className="project-description">{project.description}</p>  

      <div className="project-images">  
        {project.images.map((image, index) => (  
          <img   
            key={index}   
            src={image}   
            alt={`Project image ${index + 1}`}   
            className={`project-image ${index === currentImageIndex ? 'active' : ''}`}   
          />  
        ))}  
      </div>  

      <div className="project-buttons">  
        <button className="button know-more" onClick={handleKnowMoreAboutProject}>  
          Know More About Project  
        </button>  
        <button className="button meet-team" onClick={handleMeetOurTeam}>  
          Meet Our Team  
        </button>  
      </div>  

      {showTeam && (  
        <TeamModal teamMembers={project.teamMembers} onClose={handleClose} />  
      )}  

      {showDetail && (  
        <ProjectDetail project={project} onClose={handleClose} />  
      )}  
    </div>  
  );  
};  

export default ProjectCard;