// src/components/ProjectDetail.jsx
import React, { useRef, useEffect } from 'react';
import './ProjectDetail.css';

const ProjectDetail = ({ project, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div className="project-detail-modal">
      <div className="modal-content" ref={modalRef}>
        <span className="close" onClick={onClose}>X</span>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="project-images">
          {project.images.map((image, index) => (
            <img key={index} src={image} alt={`Project image ${index + 1}`} className="project-image" />
          ))}
        </div>
        <h3>Upcoming Workshops</h3>
        <ul>
          {project.upcomingWorkshops.map((workshop, index) => (
            <li key={index}>{workshop.title} - {workshop.date}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetail;
