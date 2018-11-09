const Notes = require('./model');
const isNormalInteger = require('./util');

function createNote(req, res) {
  Notes.create({ ...req.body }, (err, note) => {
    if (err || !note) {
      return res.status(400).end(err);
    } else {
      return res.status(200).send(note);
    }
  });
}

function getNoteFromUid(req, res) {
  const { uid } = req.params;
  if (isNormalInteger(uid)) {
    Notes.findOne({ uid }, (err, note) => {
      if (err || !note) {
        return res.status(400).end(err);
      } else {
        return res.status(200).send(note);
      }
    });
  } else {
    res.status(400).end(
      `The value ${uid} is not a recognized format. 
      getNoteFromUid requires either '0' or a positive integer.
    `
    );
  }
}

function getAllNotes(req, res) {
  Notes.find({}, (err, notes) => {
    if (err || !notes) {
      return res.status(400).end(err);
    } else {
      console.log({ notes });
      return res.status(200).send(notes);
    }
  });
}

function updateNoteFromUid(req, res) {
  const { uid } = req.params;

  if (isNormalInteger(uid)) {
    const { property, replace } = req.body;
    Notes.findOneAndUpdate(
      { uid },
      {
        [property]: replace
      },
      { new: true },
      (err, note) => {
        if (err || !note) {
          return res.status(400).end(err);
        } else {
          return res.status(200).send(note);
        }
      }
    );
  } else {
  }
}

function deleteNoteFromUid(req, res) {
  const { uid } = req.params;

  if (isNormalInteger(uid)) {
    Notes.findOneAndRemove({ uid }, (err, note) => {
      if (err || !note) {
        return res.status(400).end(err);
      } else {
        return res.status(200).send(note);
      }
    });
  } else {
    res.status(400).end(
      `The value ${uid} is not a recognized format. 
      getNoteFromUid requires either '0' or a positive integer.
    `
    );
  }
}

module.exports = {
  createNote,
  getNoteFromUid,
  getAllNotes,
  updateNoteFromUid,
  deleteNoteFromUid
};
