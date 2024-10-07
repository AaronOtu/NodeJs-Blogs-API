const express = require('express');
app = express();
const blogs = require('./routers/blogs')

app.use(express.json());

const port = 4000

app.get('/', (req, res) => {
  res.status(200).send("Welcome to my blogs!")
})

app.use('/blogs', blogs)


app.listen(port, ()=>{
  console.log(`Server is listening on port ${port}`);
})