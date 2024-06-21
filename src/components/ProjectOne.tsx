export default function ProjectOne() {
  return (
    <>
      <h1
        style={{ color: "darkgreen", marginTop: "150px", textAlign: "center" }}
      >
        Compensation for Latency in XR Offloaded Tasks Using Pose Prediction
      </h1>
      <div style={{ backgroundColor: "rgb(211, 245, 211)" }}>
        <p id="projectOneText" style={{ paddingBottom: "30px" }}>
          <h2 style={{ color: "darkgreen" }}>Background</h2>
          Imagine a scenario where a user in an AR setup is observing a cat
          through their HMD, as depicted in the figure. At the initial moment{" "}
          <span style={{ fontSize: "23px" }}>t</span>
          <span style={{ fontSize: "14px", fontWeight: "bold" }}>0</span> the
          image is transmitted to a remote server which processes the visual
          data by performming semantic segmentation. The server identifies and
          spatially locates the cat within the scene as it appeared at{" "}
          <span style={{ fontSize: "23px" }}>t</span>
          <span style={{ fontSize: "14px", fontWeight: "bold" }}>0</span>.
          However, during the time it takes for this information to be processed
          and sent back to the user, the user's perspect perspective shifts from{" "}
          <span style={{ fontWeight: "bold" }}>P</span>
          <span style={{ fontSize: "14px", fontWeight: "bold" }}>
            1
          </span> to <span style={{ fontWeight: "bold" }}>P</span>
          <span style={{ fontSize: "14px", fontWeight: "bold" }}>2</span>,
          altering the image coordinate system due to the change in the user's
          viewpoint. Our thesis addresses the challenge of updating the returned
          data to align it with the user's new perspective. We aim to apply a
          transformation, specifically a projective transformation (also known
          as homography), to adjust the virtual content. This transformation
          recalculates the positions of known objects to reflect changes in the
          user's orientation and position, effectively adapting the virtual
          content to correspond with the user’s current view. <br />{" "}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              margin: "50px 0px 50px 0px",
            }}
          >
            <img
              className="pOneImgSize"
              src="https://i.ibb.co/vVb9HH1/IMG-20240620-WA0007.jpg"
              alt=""
            />
          </div>
          <h2 style={{ color: "darkgreen" }}>Result</h2>
          To evaluate the effectiveness of our homography-based estimation
          method, we placed the VR headset on a tripod and continuously captured
          frames along with their corresponding poses. The experimental setup
          included a scene containing five Aruco codes. During the testing, the
          headset remained stationary at a distance of 0.75 meters from the
          Aruco code markers, while we either rotated the headset horizontally
          or translated the tripod along the x-axis. By using only the pose
          information and not the image data, we employed the homography method
          to predict the locations of the Aruco codes in subsequent frames. In
          the following image, you can see the result along with the
          corresponding camera trajectory. The results compare the predicted
          points without any compensation to the points when homography was used
          for compensation, demonstrating the effectiveness of our approach in
          aligning the predicted points more closely with the actual positions
          of the Aruco codes.
          <br />
          More information about our work can be found in our{" "}
          <a
            style={{ textDecorationColor: "darkgreen", color: "darkgreen" }}
            href="https://drive.google.com/file/d/1s36m3zu90r9Fs-pS2wF9JRLbGvO1IXCS/view?usp=sharing"
            target="_blank"
          >
            thesis document
          </a>
          .
        </p>
        <div id="projectOneImages">
          <img
            className="pOneImgSize"
            src="https://i.ibb.co/VQVZcRz/image.gif"
            alt=""
          />
          <img
            className="pOneImgSize"
            src="https://i.ibb.co/p0QxmMd/cameratrajectory-ezgif-com-video-to-gif-converter.gif"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
