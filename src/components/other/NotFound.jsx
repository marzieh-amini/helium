import { useRouteError } from "react-router-dom";

const NotFound = ({ text }) => {
  const error = useRouteError();
  return (
    <div className="section">
      <div className="container">
        <div className="notFound">
          <h1>{text}</h1>
          <p>{error.statusText || error.message}</p>
        </div>
      </div>
    </div>
  );
};
NotFound.defaultProps = {
  text: "خطا ۴۰۴",
};
export default NotFound;
