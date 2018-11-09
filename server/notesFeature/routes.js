const express = require('express');
const router = express.Router();

const {
  createNote,
  getNoteFromUid,
  getAllNotes,
  updateNoteFromUid,
  deleteNoteFromUid
} = require('./controller');

router.get('/ping', (req, res) => res.status(200).send({ ping: 'ok' }));

/* create */
router.post('/create', createNote);

/* read */
router.get('/all', getAllNotes);
router.get('/id/:uid', getNoteFromUid);

/* update */
router.patch('/id/:uid', updateNoteFromUid);

/* delete */
router.delete('/id/:uid', deleteNoteFromUid);

/* unrecognized route */
router.get('/*', (_, res) => res.send(404).end());

module.exports = router;
