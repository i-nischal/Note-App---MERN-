import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import axiosInstance from "../lib/axios";

function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required");
      return; // ✅ Stop submission if empty
    }

    setLoading(true);
    try {
      await axiosInstance.post("/notes/create", {
        title,
        content,
      });
      toast.success("Note created successfully");
      navigate("/"); // ✅ Redirect after success
    } catch (error) {
      if (error.res.status === 429) {
        toast.error("Too many requests");
      }
      toast.error("Note failed to create");
    } finally {
      setLoading(false);
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
        Back to Notes
      </button>

      {/* Card */}
      <div className="w-full max-w-lg bg-white p-10 rounded-3xl shadow-lg border border-slate-200">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Create a New Note
        </h2>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Note Title"
              className="w-full px-5 py-3 border border-slate-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all placeholder:text-slate-400"
            />
          </div>

          <div>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your note here..."
              rows="7"
              className="w-full px-5 py-3 border border-slate-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all resize-none placeholder:text-slate-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold text-lg py-3 rounded-xl shadow-md hover:bg-indigo-700 transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            disabled={loading}
          >
            {loading ? "Saving Note..." : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateNote;
