import React, { useState, forwardRef } from "react";
import { X } from "lucide-react"; // Assuming you're using lucide-react for icons
// import "./Dialog.css"; // Custom CSS for styling

const Dialog = ({ children, open, onOpenChange }) => {
  return (
    <div className={`dialog ${open ? "open" : ""}`}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { open, onOpenChange })
      )}
    </div>
  );
};

const DialogTrigger = ({ children, onClick }) => {
  return (
    <div className="dialog-trigger" onClick={onClick}>
      {children}
    </div>
  );
};

const DialogOverlay = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`dialog-overlay ${className || ""}`}
    {...props}
  />
));

const DialogContent = forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={`dialog-content ${className || ""}`}
    {...props}
  >
    {children}
    <button
      className="dialog-close"
      onClick={() => props.onOpenChange(false)}
    >
      <X className="close-icon" />
      <span className="sr-only">Close</span>
    </button>
  </div>
));

const DialogHeader = ({ className, children, ...props }) => (
  <div className={`dialog-header ${className || ""}`} {...props}>
    {children}
  </div>
);

const DialogFooter = ({ className, children, ...props }) => (
  <div className={`dialog-footer ${className || ""}`} {...props}>
    {children}
  </div>
);

const DialogTitle = forwardRef(({ className, children, ...props }, ref) => (
  <h2
    ref={ref}
    className={`dialog-title ${className || ""}`}
    {...props}
  >
    {children}
  </h2>
));

const DialogDescription = forwardRef(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={`dialog-description ${className || ""}`}
    {...props}
  >
    {children}
  </p>
));

export {
  Dialog,
  DialogTrigger,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};