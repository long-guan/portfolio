function Footer(props) {
  return (
    <footer
      className={props.mode}
      style={{ textAlign: "center", paddingBottom: "10px", paddingTop: "10px" }}
    >
      Dockerized and built with React and Bootstrap. Deployed on GitHub. ✌️
    </footer>
  );
}

export default Footer;
