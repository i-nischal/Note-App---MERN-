import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router";

function NoteCard({ note, setNotes }) {
  const navigate = useNavigate();
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
          <PenSquareIcon className="w-5 h-5 hover:text-indigo-800" />
          <Trash2Icon className="w-5 h-5 text-red-500 hover:text-red-700" />
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
