export default function ProjectTwo() {
  return (
    <>
      <h1
        style={{ color: "darkgreen", marginTop: "150px", textAlign: "center" }}
      >
        Ivana Kupala: a Virtual Reality Experience
      </h1>
      <div style={{ backgroundColor: "rgb(211, 245, 211)" }}>
        <p id="projectOneText" style={{ paddingBottom: "30px" }}>
          <h2 style={{ color: "darkgreen" }}>Background</h2>
          Our project aims to create an immersive virtual reality experience
          that brings the Ivana Kupala celebration to life, providing users with
          an interactive and culturally enriching experience. Utilizing the
          SteamVR platform and the Unity development engine, our application
          allows users to explore and participate in the traditional Ukrainian
          midsummer festival within a virtual environment. This VR project not
          only provides entertainment but also serves as a valuable educational
          tool, offering insigh insights into Ukrainian culture and traditions.
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              margin: "50px 0px 50px 0px",
            }}
          >
            <iframe
              className="pOneImgSize"
              style={{ borderRadius: "5%", borderColor: "transparent" }}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/1OqGnDggMN8?si=UeinjBv8mjFRj3h8"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <h2 style={{ color: "darkgreen" }}>Key Features</h2>
          <span style={{ fontWeight: "bold" }}>Cultural Immersion:</span>{" "}
          Experience elements inspired by the Ivana Kupala festival, including
          traditional rituals, music, and folklore. <br /> <br />{" "}
          <span style={{ fontWeight: "bold" }}>Interactive Elements:</span>{" "}
          Users can engage in various festival activities, such as jumping over
          bonfires, weaving flower crowns, and searching for the mythical fern
          flower. <br /> <br />{" "}
          <span style={{ fontWeight: "bold" }}>Realistic Environments:</span>
          High-quality 3D models and animations create a visually stunning and
          immersive experience. <br /> <br />
          More information about our work can be found in this{" "}
          <a
            style={{ textDecorationColor: "darkgreen", color: "darkgreen" }}
            href="https://www.design.lth.se/article/samarbete-oever-nationsgraenserna-med-virtual-reality/"
            target="_blank"
          >
            article
          </a>
          .
        </p>
      </div>
    </>
  );
}
