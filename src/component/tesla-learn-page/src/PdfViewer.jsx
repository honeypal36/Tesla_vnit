import React from "react";

const PdfViewer = ({ title, link, onClose }) => {
  return (
    <div
      id="fileViewerSection"
      className="pdf-viewer"
      style={{ display: title && link ? "block" : "none" }}
    >
      <div className="pdf-viewer-header">
        <h3 id="fileTitle">{title}</h3>

        <iframe
          id="fileViewer"
          title="PDF Viewer"
          src={link}
          width="100%"
          height="600px"
          frameBorder="0"
        ></iframe>
        <button className="close-btn" onClick={onClose}>
          Close Viewer
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;
