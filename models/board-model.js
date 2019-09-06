const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BoardSchema = new Schema({
    boardName: { type: String, required: true },
	author: {
		displayName: { type: String, required: true },
		pic: { type: String, required: true },
		uid: { type: String, required: true }
	},
	createdDate: { type: Date, default: Date.now},	
	sections: [ {
		section: { type: String },
		author: {
			displayName: { type: String, required: true },
			pic: { type: String, required: true },
			uid: { type: String, required: true }
		},
		createdDate: { type: Date, default: Date.now },
		likes: [ {
			author: {
				displayName: { type: String, required: true },
				pic: { type: String, required: true },
				uid: { type: String, required: true }
			},
			createdDate: { type: Date, default: Date.now },
		} ], 
		dislikes: [ {
			author: {
				displayName: { type: String, required: true },
				pic: { type: String, required: true },
				uid: { type: String, required: true }
			},
			createdDate: { type: Date, default: Date.now },
		} ],
		posts: [ {
			post: { type: String },
			author: {
				displayName: { type: String, required: true },
				pic: { type: String, required: true },
				uid: { type: String, required: true }
			},
			createdDate: { type: Date, default: Date.now }, 
			claps: [ {
				author: {
					displayName: { type: String, required: true },
					pic: { type: String, required: true },
					uid: { type: String, required: true }
				},
				createdDate: { type: Date, default: Date.now },
			} ], 
			disagree: [ {
				author: {
					displayName: { type: String, required: true },
					pic: { type: String, required: true },
					uid: { type: String, required: true }
				},
				createdDate: { type: Date, default: Date.now },
			} ],
			comments: [ {
				comment: { type: String },
				author: {
					displayName: { type: String, required: true },
					pic: { type: String, required: true },
					uid: { type: String, required: true }
				},
				createdDate: { type: Date, default: Date.now }, 	
				claps: [ {
						author: {
							displayName: { type: String, required: true },
							pic: { type: String, required: true },
							uid: { type: String, required: true }
						},
						createdDate: { type: Date, default: Date.now },
				} ], 
				disagree: [ {
					author: {
						displayName: { type: String, required: true },
						pic: { type: String, required: true },
						uid: { type: String, required: true }
					},
					createdDate: { type: Date, default: Date.now },
				} ]
			} ]
		} ]
	} ]
			 
},{collection: 'boards'});

// Export the model
module.exports = mongoose.model('boards', BoardSchema);