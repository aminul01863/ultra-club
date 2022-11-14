import "./App.css";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
// import "bootstrap/dist/css/bootstrap.min.css";
import UltraClub from "./component/UltarClub/UltraClub";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <p className="fs-3 mt-2 mx-5 text-danger">Select Today Exercise</p>
      <UltraClub></UltraClub>
      <Footer></Footer>
    </div>
  );
}

export default App;
