import { useEffect, useState } from "react";
import RateLimitedUI from "../Components/RateLimitedUI";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "../Components/Loading";
import NoteCard from "../Components/NoteCard";
import NotesNotFound from "./NotesNotFound";

function Home() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isRateLimited, setIsRateLimited] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/notes");
        setNotes(res.data.notes);
      } catch (error) {
        console.error("Error fetching notes data.");
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load notes.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  if (isRateLimited) return <RateLimitedUI />;

  if (loading) return <Loading />;

  return (
    <div className="max-w-7xl mx-auto p-4 mt-6">
      {notes.length > 0 ? (
        <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <NoteCard key={note._id} note={note} setNotes={setNotes} />
          ))}
        </div>
      ) : (
        <NotesNotFound />
      )}
    </div>
  );
}

export default Home;
