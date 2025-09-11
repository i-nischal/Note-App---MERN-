import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router";
import axiosInstance from "../lib/axios";
import toast from "react-hot-toast";

function NoteCard({ note, setNotes }) {
  const navigate = useNavigate();

  const handleDelete = async (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    if (!window.confirm("Delete the delete ?")) return;
    try {
      const deleteNote = axiosInstance.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((n) => n._id !== id));
      toast.success("Note Deleted successfully");
    } catch (error) {
      toast.error("Failed to delete");
    }
  };
  return (
    <div
      className="border border-gray-200 rounded-lg p-4
     bg-indigo-50 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between"
      onClick={() => navigate(`/note/${note._id}`)}
    >
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {note.title}
        </h2>
        <p className="text-gray-700 mb-3">{note.content}</p>
      </div>

      <div className="flex justify-between items-center mt-3">
        <p className="text-sm text-gray-500">
          {new Date(note.createdAt).toLocaleDateString()}
        </p>

        <div className="flex space-x-3">
          <button>
            <PenSquareIcon className="w-5 h-5 hover:text-indigo-800" />
          </button>
          <button onClick={(e) => handleDelete(e, note._id)}>
            <Trash2Icon className="w-5 h-5 text-red-500 hover:text-red-700" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
