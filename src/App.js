import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <div className="container d-flex justify-content-center">
      <Router>
        <Route path="/" exact component={PostList} />
        <Route path="/posts/:id" component={PostDetail} />
      </Router>
    </div>
  );
}

export default App;
