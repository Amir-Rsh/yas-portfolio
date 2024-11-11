import { Link } from "react-router-dom";
import yasPicture from "../assets/IMG-20240610-WA0007.jpg";
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
        <img id="yasImage" src={yasPicture} alt="" />
        <div id="aboutYas">
          <h1 id="yasTitle">Yas Yazdanian</h1>
          <p id="yasProfession">Extended Reality And Frontend Developer</p>
          <p id="aboutMeInfo">
            Hi there {":)"} welcome to my portfolio. I'm Yas, an XR developer
            with a Master's degree in Virtual and Augmented Reality from Lund
            University and a Bachelor's degree in Mathematics and Computer
            Science from Eastern Mediterranean University. <br /> <br />{" "}
            <span id="secondAboutParagraph">
              I love creating immersive and innovative experiences using
              programming languages like C#, Python, and C++, along with game
              engines like Unity and graphics libraries like OpenGL. I also
              enjoy designing user-friendly interfaces with Figma and creating
              3D models with Blender and AutoCAD.
            </span>{" "}
            <span id="techStack">
              <br /> Tech Stack: C#, Python, C++, Unity, OpenGL, Figma, Blender,
              AutoCAD, JavaScript, TypeScript, React, Node, Jest, React Native
            </span>
            <br /> <br />
            <span id="additionalAboutInfo">
              Throughout my studies and my professional journey I've worked on
              several exciting projects that showcase my skills and passion for
              XR development. These projects highlight how I utilize emerging
              technologies to create XR products that are user-friendly and
              enjoyable for everyone.
            </span>
          </p>
        </div>
      </div>
      <div
        id="projects"
        style={{
          backgroundColor: "rgb(211, 245, 211)",
          paddingTop: "20px",
          paddingBottom: "40px",
          marginTop: "80px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "darkgreen",
            fontWeight: "bold",
          }}
        >
          MY PROJECTS
        </h1>
        <div className="projects-div">
          <div className="projectInfo">
            <h2 style={{ color: "darkgreen" }}>
              Compensation for Latency in XR Offloaded Tasks Using Pose
              Prediction
            </h2>
            <p className="textOfProject">
              This project was the Master’s thesis for my degree in Virtual and
              Augmented Reality. The aim was to minimize perceived latency in
              AR/MR applications by using head movement tracking and pose
              prediction algorithms to synchronize content with user movements,
              ensuring a seamless and immersive experience. <br /> <br /> As AR
              and MR glasses advance, offloading computational tasks to edge
              networks or the cloud enhances their capabilities but introduces
              latency issues. Latency, caused by data transmission delays, can
              negatively impact user experience, for example, causing VR
              sickness. By addressing this challenge, our research contributes
              to the development of more practical and user-friendly AR/MR
              devices.
            </p>
            <Link onClick={scrollToTop} to={"/project1"}>
              <button className="oddProjectButton">Project Page</button>
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img className="projectImages" src={projectOneImageOne} alt="" />
            <img className="projectImages" src={projectOneImageTwo} alt="" />
          </div>
        </div>
        <div className="projects-div">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img className="projectImages" src={projectTwoImageOne} alt="" />
            <img className="projectImages" src={projectTwoImageTwo} alt="" />
          </div>

          <div className="projectInfo">
            <h2 style={{ color: "darkgreen" }}>
              Ivana Kupala: a Virtual Reality Experience
            </h2>
            <p className="textOfProject">
              An immersive VR project developed in collaboration with Ukrainian
              students at Zhytomyr Polytechnic State University. It showcases
              the traditional Ukrainian midsummer celebration, Ivana Kupala.
              This project aims to bring cultural heritage to life by allowing
              users to experience the vibrant festivities, folklore, and rituals
              associated with this ancient holiday. <br /> <br /> Through
              detailed virtual environments and interactive elements, users can
              explore various aspects of the celebration, including bonfires and
              floral wreath-making. This project highlights the potential of
              virtual reality in promoting cultural traditions.
            </p>
            <Link onClick={scrollToTop} to={"/project2"}>
              <button className="evenProjectButton">Project Page</button>
            </Link>
          </div>
        </div>
        <div className="projects-div">
          <div className="projectInfo">
            <h2 style={{ color: "darkgreen" }}>
              Real Time Visualization of 5G Signal Waves in AR and VR
              Environment
            </h2>
            <p className="textOfProject">
              This project involved collaborating with Ericsson to develop a
              system for visualizing real-time 5G directional beams. This
              project aimed to enhance the understanding of 5G technology by
              creating a visual representation of 5G signals within augmented
              and virtual reality environments. <br /> <br /> The visualization
              was deployed in the Ericsson lobby, providing an interactive and
              educational tool to demonstrate the capabilities and behavior of
              5G signal waves. Two versions of the application were developed:
              an AR version for use within the actual Ericsson lobby, and a VR
              version for remote use, allowing users to experience the 5G
              visualizations in a virtual recreation of the lobby.
            </p>
            <Link onClick={scrollToTop} to={"/project3"}>
              <button className="oddProjectButton">Project Page</button>
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img className="projectImages" src={projectThreeImageOne} alt="" />
            <img className="projectImages" src={projectThreeImageTwo} alt="" />
          </div>
        </div>
        <div className="projects-div">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img className="projectImages" src={projectFourImageOne} alt="" />
            <img className="projectImages" src={projectFourImageTwo} alt="" />
          </div>

          <div className="projectInfo">
            <h2 style={{ color: "darkgreen" }}>Treasure-Hunt Fighter</h2>
            <p className="textOfProject">
              Treasure-Hunt Fighter is an engaging and challenging game where
              players maneuver a spaceship in space to hunt for treasure balls.
              The game emphasizes strategic navigation and quick reflexes to
              avoid asteroids that are randomly placed and respawn with
              different positions, adding an element of unpredictability.
              <br />
              <br />
              Players must constantly adapt their strategies to successfully
              navigate through the changing obstacles, making each playthrough a
              unique experience. The thrill of collecting treasure balls while
              dodging hazards keeps players on the edge of their seats,
              fostering both excitement and a sense of accomplishment. With its
              combination of strategic gameplay and reflex-based challenges,
              Treasure-Hunt Fighter offers an immersive and dynamic gaming
              experience.
            </p>
            <Link onClick={scrollToTop} to={"/project4"}>
              <button className="evenProjectButton">Project Page</button>
            </Link>
          </div>
        </div>
        <div className="projects-div">
          <div className="projectInfo">
            <h2 style={{ color: "darkgreen" }}>Plantiverse</h2>
            <p className="textOfProject">
              Plant parenthood can be tricky, especially for beginners. We were
              inspired by the idea of using XR and AI to simplify plant care,
              helping users identify plants, track their needs, and remember
              essential care instructions in a more immersive way. The goal was
              to combine technology with nature to create a seamless and fun
              experience for plant lovers. <br />
              <br />
              Plantiverse, which earned the Runner-Up Prize at XR Hack 2024 in
              Stockholm, reflects this vision. We're proud of its success as an
              innovative tool that brings plant lovers closer to nature through
              cutting-edge technology.
            </p>
            <Link onClick={scrollToTop} to={"/project5"}>
              <button className="oddProjectButton">Project Page</button>
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img className="projectImages" src={projectFiveImageOne} alt="" />
            <img className="projectImages" src={projectFiveImageTwo} alt="" />
          </div>
        </div>
        <div className="projects-div">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img width={350} src={projectSixImageOne} alt="" />
          </div>

          <div className="projectInfo">
            <h2 style={{ color: "darkgreen" }}>Project News</h2>
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
            <h2 style={{ color: "darkgreen" }}>Peran Clothing</h2>
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
        <div className="projects-div">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <iframe
              style={{
                borderRadius: 30,
                borderStyle: "solid",
                borderColor: "black",
                borderWidth: 5,
                marginTop: 10,
                justifySelf: "center",
              }}
              height="600"
              src="https://www.youtube.com/embed/-urPIJykL7k?si=fNiC-vlu07CpJDuc"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>{" "}
          </div>

          <div className="projectInfo">
            <h2 style={{ color: "darkgreen" }}>Animal Rescues</h2>
            <p className="textOfProject">
              This project was made to showcase my React Native abilities and my
              interest in mobile first app development. MapView was used to
              implement the location functionality and MongoDB was used to store
              the data.
              <br />
              <br />
              the users can report injured animals by pinning their location on
              the map and also check back on them by tracking their treatment
              process afterwards. <br /> <br />
              Tech Stack: <br />
              <br />
              React Native <br />
              MapView <br />
              MongoDB <br />
              Render <br />
              Expo <br /> Express <br /> Node <br />
              Supertest
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
