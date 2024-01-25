const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    textData: {
        type: String,
        required: true
    }
    ,
    author:{
        type:String,
         
    }, 

});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
