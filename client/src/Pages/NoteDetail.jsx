import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axiosInstance from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeft } from "lucide-react";
import Loading from "../Components/Loading";

function NoteDetail() {
  const [note, setNote] = useState({ title: "", content: "" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axiosInstance.get(`/notes/${id}`);
        setNote(res.data.note);
      } catch (error) {
        toast.error("Failed to fetch the note.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchNote();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Any fields cannot be empty");
      return;
    }

    setSaving(true);

    try {
      const saveNote = await axiosInstance.put(`/notes/${id}`, note);

      navigate("/");
      toast.success("Note updated Successfully");
    } catch (error) {
      toast.error("Failed to save the changes");
    } finally {
      setSaving(false);
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 p-6">
      {/* Back Button */}
      <button
        className="flex items-center gap-2 mb-8 px-4 py-2 text-slate-600 font-medium rounded-lg transition-all duration-200 hover:bg-slate-200 hover:text-slate-800"
        onClick={() => navigate("/")}
      >
        <ArrowLeft className="h-5 w-5" />
        Back
      </button>

      {/* Card */}
      <div className="w-full max-w-lg bg-white p-10 rounded-3xl shadow-lg border border-slate-200">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Edit Note
        </h2>

        <form className="space-y-5">
          {/* Title */}
          <div>
            <input
              type="text"
              value={note.title}
              onChange={(e) => setNote({ ...note, title: e.target.value })}
              placeholder="Note Title"
              className="w-full px-5 py-3 border border-slate-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all placeholder:text-slate-400"
            />
          </div>

          {/* Content */}
          <div>
            <textarea
              value={note.content}
              onChange={(e) => setNote({ ...note, content: e.target.value })}
              placeholder="Write your note here..."
              rows="7"
              className="w-full px-5 py-3 border border-slate-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all resize-none placeholder:text-slate-400"
            />
          </div>

          {/* Update Button */}
          <button
            type="button"
            className="w-full bg-indigo-600 text-white font-semibold text-lg py-3 rounded-xl shadow-md hover:bg-indigo-700 transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            disabled={saving}
            onClick={handleSave}
          >
            {saving ? "Saving Note ..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default NoteDetail;
