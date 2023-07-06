import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<h1 className="text-4xl font-bold">Home page</h1>}
        />
        <Route
          path="/login"
          element={<h1 className="text-4xl font-bold">login </h1>}
        />
        <Route
          path="/register"
          element={<h1 className="text-4xl font-bold">register </h1>}
        />
        <Route
          path="/tasks"
          element={<h1 className="text-4xl font-bold">Tasks</h1>}
        />
        <Route
          path="/add-task"
          element={<h1 className="text-4xl font-bold">New Taks </h1>}
        />
        <Route
          path="/tasks/:id"
          element={<h1 className="text-4xl font-bold">Update tasks</h1>}
        />
        <Route
          path="/profile"
          element={<h1 className="text-4xl font-bold">Profile</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
