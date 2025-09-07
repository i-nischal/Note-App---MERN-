import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNotesByID,
  updateNote,
} from "../Controller/notesController.js";

const notesRouter = express.Router();

// RESTful routes
notesRouter.get("/", getAllNotes); // GET all notes
notesRouter.get("/:id", getNotesByID); // GET note by ID
notesRouter.post("/", createNote); // POST create note
notesRouter.put("/:id", updateNote); // PUT update note
notesRouter.delete("/:id", deleteNote); // DELETE note

export default notesRouter;
