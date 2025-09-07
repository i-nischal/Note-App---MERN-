import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import CreateNote from "./Pages/CreateNote";
import NoteDetail from "./Pages/NoteDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateNote />} />
        <Route path="/note/:id" element={<NoteDetail />} />
      </Routes>
    </>
  );
}

export default App;
