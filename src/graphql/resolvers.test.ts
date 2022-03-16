const request = require('supertest');

const url = 'http://localhost:8080/';

describe('Graphql mutation', () => {
  it('Returns 400 status code if title was null', (done) => {
    request(url).post('/')
      .send({ query: '{ addItem(itemData: {content: "test content"}) { _id } }' })
      .expect(400)
      .end((err: Error) => {
        if (err) return done(err);

        return done();
      });
  });
});
