const moongoose = require('mongoose');

const BlogsSchema = new moongoose.Schema ({
  postMessage:{
    type:String,
    required:true,
    trim:true

  }
})


module.exports = moongoose.model("Blogs", BlogsSchema)