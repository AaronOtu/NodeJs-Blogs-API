const express = require('express');
app = express();




const port = 4000

app.get('/', (req, res) => {
  res.status(200).send("Welcome to my blogs!")
})

app.listen(port, ()=>{
  console.log(`Server is listening on port ${port}`);
})