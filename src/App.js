import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import AddPost from "./components/AddPost";

function App() {
  return (
    <div className="container d-flex justify-content-center">
      <Router>
        <Route path="/" exact component={PostList} />
        <Route path="/posts/:id" component={PostDetail} />
        <Route path="/addpost" component={AddPost} />
      </Router>
    </div>
  );
}

export default App;
