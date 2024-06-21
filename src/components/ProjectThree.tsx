export default function ProjectThree() {
  return (
    <>
      {" "}
      <h1
        style={{ color: "darkgreen", marginTop: "150px", textAlign: "center" }}
      >
        Real Time Visualization of 5G Signal Waves in AR and VR Environment
      </h1>
      <div style={{ backgroundColor: "rgb(211, 245, 211)" }}>
        <p id="projectOneText" style={{ paddingBottom: "30px" }}>
          <h2 style={{ color: "darkgreen" }}>Background</h2>
          Our project aims to create an interactive AR application that
          visualizes 5G directional beams as vectors, aiding in the
          understanding and optimization of signal propagation in real-time and
          spatial contexts. By utilizing the Microsoft Hololens 2 headset and
          the Unity development platform, our application provides valuable
          insights for network planning and optimization by visualizing 5G beams
          as directional vectors in real-time and spatial contexts.
          Additionally, recognizing the need for flexibility in demonstrating
          the application outside the specific physical location of the Ericsson
          lobby, we developed a virtual reality (VR) version using the Meta
          Quest 3 headset. This VR version allows users to be virtually
          "transported" to the lobby, offering the same 5G signal visualization
          and interaction capabilities. The combination of AR and VR
          applications ensures a comprehensive tool for understanding and
          optimizing 5G network deployment in various settings. <br />{" "}
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
              src="https://www.youtube.com/embed/1yYBcH4S4fk?si=CyIAA_o8FECbb8fO"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen={true}
            ></iframe>
          </div>
          <h2 style={{ color: "darkgreen" }}>Key Features</h2>
          <span style={{ fontWeight: "bold" }}>
            Visualization of 5G Beams:
          </span>{" "}
          Representing 5G beams as directional vectors, providing a clear and
          intuitive understanding of signal propagation. <br /> <br />{" "}
          <span style={{ fontWeight: "bold" }}>
            Real-Time Data Integration:
          </span>{" "}
          Utilizing the MQTT protocol for real-time data transmission and
          processing, ensuring up-to-date visualizations. <br /> <br />{" "}
          <span style={{ fontWeight: "bold" }}>
            Spatial Mapping Techniques:
          </span>
          Comparison of various spatial mapping techniques for indoor
          environments to highlight benefits and limitations. <br /> <br />{" "}
          <span style={{ fontWeight: "bold" }}>User Interaction:</span>{" "}
          Interactive AR environment allowing users to explore and analyze 5G
          signal patterns. <br /> <br />{" "}
          <span style={{ fontWeight: "bold" }}>VR Version:</span> A virtual
          reality version of the application was developed to allow
          demonstrations outside the specific physical location, using the Meta
          Quest 3 headset.
          <br /> <br />
          More information in this{" "}
          <a
            style={{ textDecorationColor: "darkgreen", color: "darkgreen" }}
            href="https://drive.google.com/file/d/12BetP-MyLmMZIQ6ujEo5iLTx7cZgtyFj/view"
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
