const {Schema, model}=require('mongoose');

const themeSchema = new Schema({
  name:{
    type:String,
    minlength: 3,
    maxlength: 50,
    required: true
    },

  icon:{
    type: String,
    required: true
  },
  
  description:{
    type: String,
    minlength: 10,
    maxlength: 50000,
    required: true
    },

  points:{
    type: Number,
    required: true
  },

  content:{
    type: String,
  },
      
  video:{
    type: String,
  },

  level:{
    type: Number,
    required: true
  }

})

module.exports={
    Schema: themeSchema,
    model: model('Themes', themeSchema)
}