function Footer(props) {
  return (
    <footer
      className={props.mode}
      style={{ textAlign: "center", paddingBottom: "10px", paddingTop: "10px" }}
    >
      <div className="fade-in footer">
        Dockerized and built with React and Bootstrap. Deployed on GitHub. ✌️
      </div>
    </footer>
  );
}

export default Footer;
