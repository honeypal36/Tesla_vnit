import React, { useState } from "react";
import LearnCard from "./LearnCard";
import PdfViewer from "./PdfViewer";
import pdfDetails from "./pdfDetails"; // Import PDF details
import "./learn.css";

const LearnSection = () => {
  const [currentPdf, setCurrentPdf] = useState({ title: "", link: "" });

  const openFile = (title) => {
    const details = pdfDetails[title];
    if (details) {
      setCurrentPdf({ title, link: details.link });
    } else {
      alert("Details for this PDF are not available.");
    }
  };

  const closeViewer = () => {
    setCurrentPdf({ title: "", link: "" });
  };

  return (
    <div className="learn-section">
      <h2>Learn with TESLA Club</h2>

      <div className="card-container">
        {Object.entries(pdfDetails).map(([title, details]) => (
          <LearnCard
            key={title}
            title={title}
            image={details.icon || "ppts/default.png"}
            onClick={() => openFile(title)}
          />
        ))}
      </div>

      {/* PdfViewer Component */}
      <PdfViewer
        title={currentPdf.title}
        link={currentPdf.link}
        onClose={closeViewer}
      />
    </div>
  );
};

export default LearnSection;
