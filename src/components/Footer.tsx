export default function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <footer>
      <div id="contactDetails">
        <h4>Andromachi Karouta</h4>
        <h4>
          email
          <span style={{ fontWeight: "normal", marginLeft: "30px" }}>
            <a style={{ color: "white", textDecoration: "none" }} href="">
              your Email here
            </a>
          </span>
        </h4>
        <h4>
          Phone
          <span style={{ fontWeight: "normal", marginLeft: "20px" }}>
            your number here
          </span>
        </h4>
      </div>
      <h2 id="scrollToTopButton" onClick={scrollToTop}>
        <i className="fa-solid fa-caret-up"></i>
        <br />
        Back to Top
      </h2>
    </footer>
  );
}
