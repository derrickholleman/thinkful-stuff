const notes = require("../data/notes-data");

// VALIDATION
function noteExists(req, res, next) {
  const noteId = Number(req.params.noteId);
  const foundNote = notes.find((note) => note.id === noteId);
  if (foundNote) {
    return next();
  } else {
    return next({
      status: 404,
      message: `Note id not found: ${req.params.noteId}`,
    });
  }
}
function hasText(req, res, next) {
  const { data: { text } = {} } = req.body;
  if (text) {
    return next();
  }
  return next({ status: 400, message: "A 'text' property is required." });
}

// GET REQUEST
function list(req, res) {
  res.json({ data: notes });
}

// READ REQUEST
function read(req, res, next) {
  const noteId = Number(req.params.noteId);
  const foundNote = notes.find((note) => note.id === noteId);
  res.json({ data: foundNote });
}

// POST REQUEST
function create(req, res, next) {
  const { data: { text } = {} } = req.body;

  const newNote = {
    id: notes.length + 1, // Assign the next ID
    text,
  };
  notes.push(newNote);
  res.status(201).json({ data: newNote });
}

// PUT REQUEST
function update(req, res) {
  const { noteId } = req.params;
  const foundNote = notes.find((note) => note.id === Number(noteId));

  const originalResult = foundNote.text;
  const { data: { text } = {} } = req.body;

  if (originalResult !== text) {
    // update the flip
    foundNote.text = text;
  }

  res.json({ data: foundNote });
}

// DELETE REQUEST
function destroy(req, res) {
  const noteId = Number(req.params.noteId);
  const foundIndex = notes.findIndex((note) => note.id === noteId);
  notes.splice(foundIndex, 1);
  res.sendStatus(204);
}

module.exports = {
  list,
  read: [noteExists, read],
  create: [hasText, create],
  update: [noteExists, hasText, update],
  delete: [noteExists, destroy],
};
