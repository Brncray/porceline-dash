const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors')

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if(!origin) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  }
}))

app.get('/api/members', (req, res) => {
  res.json({ count: 500 }); // replace with your actual data
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});