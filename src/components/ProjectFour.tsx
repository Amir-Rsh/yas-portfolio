export default function ProjectFour() {
  return (
    <>
      {" "}
      <h1
        style={{ color: "darkgreen", marginTop: "150px", textAlign: "center" }}
      >
        Treasure-Hunt Fighter{" "}
      </h1>
      <div style={{ backgroundColor: "rgb(211, 245, 211)" }}>
        <p id="projectOneText" style={{ paddingBottom: "30px" }}>
          <h2 style={{ color: "darkgreen" }}>Background</h2>
          Our project, Treasure-Hunt Fighter, is an engaging and challenging
          game developed using OpenGL and C++. The game requires players to
          maneuver a spaceship in space to hunt for treasure balls while
          avoiding asteroids. The objective is to collect all treasure balls
          scattered throughout the space environment. The game's design
          emphasizes strategic navigation and quick reflexes, with randomly
          placed asteroids that respawn in different positions, adding an
          element of unpredictability. This project demonstrates the effective
          integration of 3D modeling, collision detection, and game state
          management, offering a dynamic and immersive gameplay experience.{" "}
          <br />{" "}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              margin: "50px 0px 50px 0px",
            }}
          >
            <iframe
              style={{ borderColor: "transparent", borderRadius: "5%" }}
              className="pOneImgSize"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/AaTl8v0tbUs?si=fdFZIHQGxqENjXJ2"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <h2 style={{ color: "darkgreen" }}>Key Features</h2>
          <span style={{ fontWeight: "bold" }}>3D Modeling:</span> Detailed 3D
          model of the spaceship enhances the visual experience. <br /> <br />{" "}
          <span style={{ fontWeight: "bold" }}>
            Randomized Asteroid Placement:
          </span>{" "}
          Asteroids are randomly placed and respawn in new positions, providing
          a unique challenge each time the game is played. <br /> <br />{" "}
          <span style={{ fontWeight: "bold" }}>Collision Detection:</span>
          Realistic collision detection between the spaceship and asteroids adds
          to the game's difficulty. <br /> <br />{" "}
          <span style={{ fontWeight: "bold" }}>
            Texture Change on Collision:{" "}
          </span>{" "}
          The spaceship's texture changes upon collision, offering visual
          feedback to the player. <br /> <br />{" "}
          <span style={{ fontWeight: "bold" }}>Life Points System:</span>{" "}
          Players lose life points when colliding with asteroids, increasing the
          stakes and encouraging careful navigation.
          <br /> <br />
          <span style={{ fontWeight: "bold" }}>Camera Tracking:</span> The
          camera follows the spaceship, ensuring the player has a clear view of
          the action.
          <br /> <br />
          <span style={{ fontWeight: "bold" }}>
            Game State Management:
          </span>{" "}
          Effective game state management to handle different stages and
          conditions of the game.
        </p>
      </div>
    </>
  );
}
