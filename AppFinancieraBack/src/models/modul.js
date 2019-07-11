const {Schema, model}=require('mongoose');

const moduleSchema = new Schema({
  name: {
    type: String,
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
  
  requeriments: {
    type: Array,
    default: []
  }
})

module.exports= {
  Schema: moduleSchema,
  model: model('Modules', moduleSchema)
}