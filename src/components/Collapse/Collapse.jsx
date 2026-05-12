import { useState } from "react";
import "./collapse.css";

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <button
        type="button"
        className="collapse-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className={isOpen ? "collapse-arrow open" : "collapse-arrow"}>
          ❯
        </span>
      </button>

      {isOpen && (
        <div className="collapse-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}