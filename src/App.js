import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";

function App() {
  return (
    <div className="container d-flex justify-content-center">
      <Router>
        <Route path="/" exact component={PostList} />
        <Route path="/posts/:id" exact component={PostDetail} />
        <Route path="/addpost" component={AddPost} />
        <Route path="/posts/:id/edit" component={EditPost} />
      </Router>
    </div>
  );
}

export default App;
