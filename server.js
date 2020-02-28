const express = require('express');
const path = require('path');
//const { sync } = require('./datalayer/sync');
const PORT = process.env.PORT || 3000;
const app = express();
const { apiRouter } = require('./api/index');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/api', apiRouter);

app.get('/', (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, 'index.html'));
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  console.log(err);
})

/*
app.use((req, res, next) => {
  next({
    status: 404,
    message: `Page not found for ${req.method} ${req.url}`
  })
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    message: err.message || JSON.stringify(err)
  });
});
*/
//sync(); //not seeding
app.listen(PORT, () => console.log('Listening on PORT ', PORT))

