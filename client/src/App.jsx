import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import CreateNote from "./Pages/CreateNote";
import NoteDetail from "./Pages/NoteDetail";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div className="min-w-[450px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateNote />} />
          <Route path="/note/:id" element={<NoteDetail />} />
        </Routes>
        <Navbar />
      </div>
    </>
  );
}

export default App;
