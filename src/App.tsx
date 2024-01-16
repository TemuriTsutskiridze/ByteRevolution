import Header from "./components/Header";
import AddBlog from "./pages/AddBlog";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:blog" element={<Blog />} />
        <Route path="/addblog" element={<AddBlog />} />
      </Routes>
    </>
  );
}

export default App;
