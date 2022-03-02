import "./assets/ContentCard.css";
import ContentCard from "./component/ContentCard/ContentCard";
import "./assets/Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <div className="row">
        <div className="col-6 offset-3">
          <ContentCard username="Jamal" numberOfLikes={123123} location="Ukraine" caption="Let there be no russian!" />
        </div>
      </div>
    </>
  );
}

export default App;
