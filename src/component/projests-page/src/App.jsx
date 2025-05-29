// src/App.jsx  
import React from 'react';  
import ProjectCard from './components/ProjectCard';  
import { projectData} from './components/data.jsx';   
import './App.css'; 

const App = () => {  
  return (  
    <div className="app-container">  
      <h1>Our Projects</h1>  
      <div className="projects-container">  
        {projectData.map((project, index) => (  
          <ProjectCard key={index} project={project} />  
        ))}  
      </div>  
    </div>  
  );  
};  

export default App;