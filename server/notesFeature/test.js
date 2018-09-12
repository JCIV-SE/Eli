const request = require('supertest')
const app = require('../server')

describe('Notes', () => {
  describe('routes', () => {
    const newEntry = {
      code: 404,
      technology: 'web',
      description: "we're missing a page, yo!"
    }

    it('should respond to a basic GET request', done => {
      request(app)
        .get('/notes/ping')
        .expect(200)
        .expect('Content-Type', /application\/json/, done)
    })

    it('should return 4xx for an unrecognized request', done => {
      request(app)
        .get('/notes/im-a-string-doot-doot')
        .expect(404, done)
    })

    it('should return 4xx for an unrecognized uid format', done => {
      request(app)
        .get('/notes/id/im-a-string-doot-doot')
        .expect(400, done)
    })

    it('should save a note to the database', done => {
      request(app)
        .post({ ...newEntry })
        .expect(200, done)
    })
  })
})
