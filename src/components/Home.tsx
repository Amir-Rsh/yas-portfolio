import { Link } from "react-router-dom";
import andromachiPicture from "../assets/andromachi.jpeg";
import projectOneImageOne from "../assets/IMG-20240620-WA0007.jpg";
import projectOneImageTwo from "../assets/image.jpg";
import projectTwoImageOne from "../assets/IMG-20240620-WA0011.jpg";
import projectTwoImageTwo from "../assets/IMG-20240620-WA0012.jpg";
import projectThreeImageOne from "../assets/IMG-20240620-WA0003.jpg";
import projectThreeImageTwo from "../assets/IMG-20240620-WA0002.jpg";
import projectFourImageOne from "../assets/IMG-20240620-WA0014.jpg";
import projectFourImageTwo from "../assets/IMG-20240620-WA0015.jpg";
import projectFiveImageOne from "../assets/1726137723033.jpeg";
import projectFiveImageTwo from "../assets/Screenshot from 2024-09-18 12-31-09.png";
import projectSixImageOne from "../assets/Screenshot from 2024-03-21 06-52-36-portrait.png";
import projectSevenImageOne from "../assets/Screenshot_20240611-202102-portrait.png";

export default function Home() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <div id="img-about">
        <img id="yasImage" src={andromachiPicture} alt="" />
        <div id="aboutYas">
          <h1 id="yasTitle">Andromachi Karouta</h1>
          <p id="yasProfession">Drug Development Scientist</p>
          <p id="aboutMeInfo">
            Your Bio Here... p.s. sorry i used your X profile picture for
            reference
            <br /> <br />{" "}
            <span id="secondAboutParagraph">E.G. Hire me you putas</span>{" "}
            <span id="techStack">
              <br />
            </span>
            <span id="additionalAboutInfo">
              How everyone is trash compared to you here
            </span>
          </p>
        </div>
      </div>
      <div
        id="projects"
        style={{
          backgroundColor: "rgb(239, 211, 255)",
          paddingTop: "20px",
          paddingBottom: "40px",
          marginTop: "80px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "rgb(183, 79, 224)",
            fontWeight: "bold",
          }}
        >
          MY PROJECTS
        </h1>

        <div className="projects-div">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img width={350} src={projectSixImageOne} alt="" />
          </div>

          <div className="projectInfo">
            <h2 style={{ color: "rgb(183, 79, 224)" }}>Project News</h2>
            <p className="textOfProject">
              News was built using JavaScript and React. PSQL was used for the
              backend and the project was hosted using Render and Netlify. The
              aim of the project was to showcase my frontend and backend
              abilities.
              <br />
              <br />
              The users can create an acount and login or use the website as
              guest. the registered users have the ability to leave comments and
              vote on different articles. <br /> <br />
              Tech Stack: <br />
              <br />
              Node <br />
              PSQL <br />
              JavaScript <br />
              Bootstrap <br />
              Express <br /> Render <br /> Netlify <br />
              react
            </p>
            <a href="https://my-cool-news-app.netlify.app/">
              <button className="evenProjectButton">Project Page</button>
            </a>
          </div>
        </div>
        <div className="projects-div">
          <div className="projectInfo">
            <h2 style={{ color: "rgb(183, 79, 224)" }}>Peran Clothing</h2>
            <p className="textOfProject">
              The aim of Peran clothing was to showcase my knowledge of
              TypeScript and also my interest in development of shopping
              websites that require technologies like Stripe which was used for
              this app. cookie JS was used to store temporary basket
              information. <br />
              <br />
              the users can add items to their basket and choose different
              colors and are able to use the sandbox payment on stripe for
              checkout. <br /> <br /> Tech Stack:
              <br /> <br />
              React <br /> TypeScript <br /> MongoDB <br /> Cookie JS <br />
              Supertest <br />
              Stripe <br /> <br /> <br />
            </p>

            <a href="https://peran-clothing.netlify.app/">
              <button className="oddProjectButton">Project Page</button>
            </a>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img width={350} src={projectSevenImageOne} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
