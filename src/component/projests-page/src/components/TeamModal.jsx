// src/components/TeamModal.jsx
import React, { useEffect, useRef } from 'react';
import './TeamModal.css';

const TeamModal = ({ teamMembers, onClose }) => {
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
    <div className="team-modal">
      <div className="modal-content" ref={modalRef}>
        <span className="close" onClick={onClose}>X</span>
        <h2>Meet Our Team</h2>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={member.name} className="team-member-img" />
              <h4>{member.name}</h4>
              <p className="team-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamModal;
