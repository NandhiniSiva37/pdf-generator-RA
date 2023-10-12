import NotFoundIcon from "../assets/404.gif";

function NotFound() {
  return (
    <div style={{ marginLeft: "270px" }}>
      <img
        alt=""
        src={NotFoundIcon}
        style={{ width: "800px", height: "100vh" }}
      />
    </div>
  );
}

export default NotFound;
