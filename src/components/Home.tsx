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
          <p id="yasProfession">Extended Reality Developer</p>
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
              AutoCAD
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
      </div>
    </>
  );
}
