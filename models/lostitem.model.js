const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const Lostitem = new Schema({

    item_name: {
       type: String
   },
    location: {
       type: String,
   },
    description: {
       type: String
   },
   date: {
    type: String
},
   image_url: {
       type: String
   },
   is_deleted: {
       type: Boolean,
       default: false
   }
});

Lostitem.plugin(mongoosePaginate);

module.exports = mongoose.model("Lostitem", Lostitem);