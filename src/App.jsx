import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

import "bootstrap/dist/css/bootstrap.min.css";
import MainComponent from "./components/Iteration-2/MainComponent";
import Footer from "./components/Iteration-2/Footer";
function App() {
  return (
    <div className="m-0 p-0 h-screen ">
      <Switch>
        <Route path="/*" component={MainComponent} exact />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
