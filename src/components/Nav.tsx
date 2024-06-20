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
      <p onClick={scrollToProjects} className="navElement">
        Projects
      </p>
      <p onClick={scrollToBottom} className="navElement">
        Contact
      </p>
      <div style={{ marginLeft: "auto", display: "flex" }}>
        <a
          style={{ textDecoration: "none", color: "rgb(108, 113, 108)" }}
          href="https://www.linkedin.com/in/yas-yazdanian-221038273/"
          target="_blank"
          className="navElement-right"
        >
          LinkedIn
        </a>
        <a
          style={{ textDecoration: "none", color: "rgb(108, 113, 108)" }}
          href="https://github.com/yasyazdaniyan"
          target="_blank"
          className="navElement-right"
        >
          GitHub
        </a>
        <a
          href="https://drive.google.com/file/d/1ZsloZXWVLR2hBZt4IMt1ih95YH-HdiQi/view?usp=sharing"
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
