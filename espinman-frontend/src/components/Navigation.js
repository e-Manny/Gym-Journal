import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="../add-exercise">Add Exercise</Link>
      </button>
    </nav>
  );
}

export default Navigation;
