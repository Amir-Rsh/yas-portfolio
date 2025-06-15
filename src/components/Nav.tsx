import { Link } from "react-router-dom";

export default function Nav() {
  function scrollToBottom() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  function scrollToProjects() {
    const projects = document.getElementById("projects");
    if (projects) projects.scrollIntoView({ behavior: "smooth" });
    else {
      setTimeout(() => {
        const projects = document.getElementById("projects");
        if (projects) projects.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }
  return (
    <nav>
      <Link
        to={"/"}
        style={{ textDecoration: "none", color: "rgb(108, 113, 108)" }}
      >
        <p onClick={scrollToTop} className="navElement">
          About Me
        </p>
      </Link>
      <Link
        to={"/"}
        style={{ textDecoration: "none", color: "rgb(108, 113, 108)" }}
      >
        <p onClick={scrollToProjects} className="navElement">
          Projects
        </p>
      </Link>
      <p onClick={scrollToBottom} className="navElement">
        Contact
      </p>
      <div style={{ marginLeft: "auto", display: "flex" }}>
        <a
          style={{ textDecoration: "none", color: "rgb(108, 113, 108)" }}
          href="https://gr.linkedin.com/in/andromachi-karouta"
          target="_blank"
          className="navElement-right"
        >
          LinkedIn
        </a>
        <a
          href=""
          target="_blank"
          style={{ textDecoration: "none", color: "rgb(108, 113, 108)" }}
          className="navElement-right"
        >
          CV
        </a>
      </div>
    </nav>
  );
}
