import { useState } from "react";
import "./collapse.css";

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen((previousState) => !previousState);
  };

  return (
    <div className="collapse">
      <button
        type="button"
        className="collapse-header"
        onClick={toggleCollapse}
        aria-expanded={isOpen}
      >
        <span>{title}</span>

        <span
          className={`collapse-arrow ${isOpen ? "open" : ""}`}
          aria-hidden="true"
        >
          ❯
        </span>
      </button>

      <div
        className={`collapse-content-wrapper ${isOpen ? "open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="collapse-content">{content}</div>
      </div>
    </div>
  );
}