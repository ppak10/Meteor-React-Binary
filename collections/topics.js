TopicSchema = new SimpleSchema({
  _id: {
    type: String,
    optional: true
  },
  owner: {
    type: String
  },
  title: {
    type: String
  },
  description: {
    type: String,
    optional: true
  },
  date: {
    type: Date
  },
  pro: {
    type: Number,
    min: 0,
    optional: true
  },
  proUsers: {
    type: [String],
    optional: true
  },
  con: {
    type: Number,
    min: 0,
    optional: true
  },
  conUsers: {
    type: [String],
    optional: true
  },
  followers: {
    type: [String],
    optional: true
  }
});

Topics = new Mongo.Collection("topics");
Topics.attachSchema(TopicSchema);

Topics.initEasySearch("title", {
	"limit": 20,
	"use": "mongo-db"
});