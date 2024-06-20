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
        <h4>Yas Yazdanian</h4>
        <h4>
          email
          <span style={{ fontWeight: "normal", marginLeft: "30px" }}>
            yasyazdaniyan@yas.com
          </span>
        </h4>
        <h4>
          Phone
          <span style={{ fontWeight: "normal", marginLeft: "20px" }}>
            0123456789
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
