import { Routes, Route } from "react-router-dom";
import {
  Admin,
  Login,
  Dashboard,
  Create,
  Layout,
  Edit,
  LikePage,
} from "./pages";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="liked-posts" element={<LikePage />} />
          <Route path="admin" element={<Admin />}>
            <Route path="create" element={<Create />} />
            <Route path="posts/:id/edit" element={<Edit />} />
            <Route path="posts/:id" element={<Admin />} />
          </Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
