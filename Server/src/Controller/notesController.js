import Note from "../Model/note.model.js";

// Get all notes
export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      message: "All notes",
      notes,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get a note by ID
export const getNotesByID = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);

    if (!note) {
      return res
        .status(404)
        .json({ success: false, message: "Note not found" });
    }

    res.status(200).json({
      success: true,
      message: `Get note by ID ${id}`,
      note,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create a new note
export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = await Note.create({ title, content });
    res.status(201).json({ message: "Note Created Successfully", newNote });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a note
export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true, runValidators: true } // return updated doc + validate
    );

    if (!updatedNote) {
      return res
        .status(404)
        .json({ success: false, message: "Note not found" });
    }

    res.status(200).json({
      success: true,
      message: "Note Updated Successfully",
      note: updatedNote, // this is now safe to return
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a note
export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findByIdAndDelete(id);

    if (!note) {
      return res
        .status(404)
        .json({ success: false, message: "Note Id Not Found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Note Deleted Successfully", note });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
