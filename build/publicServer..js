import express from 'express';
import open from 'open';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('public'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
