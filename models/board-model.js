const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BoardSchema = new Schema({
    boardName: { type: String, required: true },
	createdBy: { type: String, required: true },
	createdDate: { type: Date, default: Date.now},	
	sections: [ {
		section: { type: String },
		createdBy: { type: String },
		createdDate: { type: Date, default: Date.now },
		likes: [ {
			createdBy: { type: String },
			createdDate: { type: Date, default: Date.now },
		} ], 
		dislikes: [ {
			createdBy: { type: String },
			createdDate: { type: Date, default: Date.now },
		} ],
		posts: [ {
			post: { type: String },
			createdBy: { type: String },
			createdDate: { type: Date, default: Date.now }, 
			claps: [ {
				createdBy: { type: String },
				createdDate: { type: Date, default: Date.now },
			} ], 
			disagree: [ {
				createdBy: { type: String },
				createdDate: { type: Date, default: Date.now },
			} ],
			comments: [ {
				comment: { type: String },
				createdBy: { type: String },
				createdDate: { type: Date, default: Date.now }, 	
				claps: [ {
						createdBy: { type: String },
						createdDate: { type: Date, default: Date.now },
				} ], 
				disagree: [ {
					createdBy: { type: String },
					createdDate: { type: Date, default: Date.now },
				} ]
			} ]
		} ]
	} ]
			 
},{collection: 'boards'});

// Export the model
module.exports = mongoose.model('boards', BoardSchema);