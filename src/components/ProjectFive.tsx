export default function ProjectFive() {
  return (
    <>
      {" "}
      <h1
        style={{ color: "darkgreen", marginTop: "150px", textAlign: "center" }}
      >
        Plantiverse
      </h1>
      <div style={{ backgroundColor: "rgb(211, 245, 211)" }}>
        <p id="projectOneText" style={{ paddingBottom: "30px" }}>
          <h2 style={{ color: "darkgreen" }}>Background</h2>
          Plant parenthood can be tricky, especially for beginners. We were
          inspired by the idea of using XR and AI to simplify plant care,
          helping users identify plants, track their needs, and remember
          essential care instructions in a more immersive way. The goal was to
          combine technology with nature to create a seamless and fun experience
          for plant lovers. <br /> <br /> Plantiverse is an XR application that
          uses AI to assist users in taking care of their plants. By using
          images, the app can identify the plant species, determine the best
          placement, diagnose potential sickness, and offer care instructions.
          These instructions can be placed on cards and viewed permanently in
          the XR space, where users can create plant cards with concise care
          tips. The app also tracks watering schedules, providing reminders and
          a visual slider to indicate when plants need to be watered again. All
          of this is delivered to you by a cute plant avatar, whose tone can be
          customized however you wish, from straightforward to sassy. <br />{" "}
          <br /> We built Plantiverse using Unity and the Meta SDK for XR
          interactions, integrating AI (ChatGPT) using AI Kit: Image Capture for
          Meta Quest by roberto@blackwhale.dev <br /> <br /> Plantiverse won the
          Runner-Up Prize at XR Hack 2024 Stockholm, and we are proud of its
          success as an innovative tool that merges technology with nature for
          plant enthusiasts. <br /> <br /> We plan to expand Plantiverse by
          incorporating more advanced AI features, such as soil health analysis
          and automatic pest detection. Long-term, we aim to integrate smart
          device support for automatic soil moisture measurement and establish
          partnerships with local plant shops to connect plant sellers with
          buyers, fostering a more connected and supportive community for plant
          lovers.
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
              src="https://www.youtube.com/embed/AoEmpD7vgRc?si=hExtbm9AhpxbmsES"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen={true}
            ></iframe>
          </div>
          More information on{" "}
          <a
            style={{ textDecorationColor: "darkgreen", color: "darkgreen" }}
            href="https://devpost.com/software/plantiverse-xr"
            target="_blank"
          >
            devpost
          </a>
          .
        </p>
      </div>
    </>
  );
}
