const express = require("express");
const app = express();

const path = require("path");
const notes = require(path.resolve("src/data/notes-data"));

app.use(express.json());

function validateNotes(req, res, next) {
  const { noteId } = req.params;
  const foundNote = notes.find((note) => note.id === Number(noteId));

  if (foundNote) {
    next();
  } else {
    next({
      status: 404,
      message: `Note id not found: ${req.params.noteId}`,
    });
  }
}

app.get("/notes/:noteId", validateNotes, (req, res, next) => {
  const { noteId } = req.params;
  const foundNote = notes.find((note) => note.id === Number(noteId));

  res.status(200).json({ data: foundNote });
});

app.get("/notes", (req, res) => {
  res.json({ data: notes });
});

let lastNoteId = notes.reduce((maxId, note) => Math.max(maxId, note.id), 0);

app.post("/notes", (req, res, next) => {
  const { data: { text } = {} } = req.body;
  if (text) {
    const newNote = {
      id: ++lastNoteId,
      text
    };
    notes.push(newNote);
    res.status(201).json({ data: newNote });
  } else {
    next({
      status: 400,
      message: "A 'text' property is required.",
    });
  }
});

// Not found handler
app.use((req, res, next) => {
  next({ status: 404, message: `Not found: ${req.originalUrl}` });
});

// Error handler
app.use((error, req, res, next) => {
  console.error(error);
  const { status = 500, message = "Something went wrong!" } = error;
  res.status(status).json({ error: message });
});

module.exports = app;
