import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./ErrorPage.css";

export default function ErrorPage() {
  const history = useHistory();

  const handleGoHome = () => {
    history.push("/user");
  };

  return (
    <div className="errorContainer">
      <div>
        <h1>404</h1>
        <p>The page you are looking for is not availble.</p>
        <button className="button" onClick={handleGoHome}>
          Go Home
        </button>
      </div>
    </div>
  );
}
