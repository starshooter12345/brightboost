const mongoose = require ('mongoose')
const Student = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    quote:{type:String},

},
{collection:'student-data'}
)
const model = mongoose.model('StudentData', Student)

module.exports = model