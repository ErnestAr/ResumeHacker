const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');
const pdf = require('html-pdf');
const cors = require('cors');
// const pdfTemplate = require('./documents/template1');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});

// app.post('/create-pdf', (req, res) => {
//   pdf.create(pdfTemplate(req.body), {}).toFile('result1.pdf', (err) => {
//       if(err) {
//           res.send(Promise.reject());
//       }

//       res.send(Promise.resolve());
//   });
// });

// app.get('/fetch-pdf', (req, res) => {
//   res.sendFile(path.join(__dirname, '../server/result1.pdf'));
// })

