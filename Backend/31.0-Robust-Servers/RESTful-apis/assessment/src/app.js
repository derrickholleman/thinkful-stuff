const express = require("express");
const app = express();
app.use(express.json());
const notes = require("./data/notes-data");

app.get("/notes/:noteId", (req, res, next) => {
  const noteId = Number(req.params.noteId);
  const validNoteId = notes.find((note) => note.id === noteId);

  if (validNoteId) {
    const foundNote = notes.find((note) => note.id === noteId);
    res.json({ data: foundNote });
  } else {
    next(`Note id not found: ${req.params.noteId}`);
  }
});

app.get("/notes", (req, res) => {
  res.json({ data: notes });
});

// POST route
app.post("/notes", (req, res, next) => {
  // check for data property
  const { data } = req.body;
  if (!data) {
    next(
      "Request was invalid - please make sure the body object contains a data property"
    );
  }
  // check for text
  const { data: { text } = {} } = req.body;
  if (!data.text) {
    next(`Body Text Empty`);
  }
  // if all checks out, create new note
  const newId = notes.reduce((maxId, note) => Math.max(maxId, note.id), 0) + 1;
  const newNote = { id: newId, text: text };
  notes.push(newNote);
  res.status(201).json({ data: newNote });
});

// Not found handler
app.use((req, res, next) => {
  next(`Not found: ${req.originalUrl}`);
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  // all errors get a status of 400 if passed into next()
  res.status(400).send(err);
});

module.exports = app;
