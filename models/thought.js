//create model that contains thoughtText that is a string, required, between 1-280 characters
//createdAt that is a date, default value is the current timestamp, use a getter method to format the timestamp on query
//username that is a string and required
//reactions that is an array of nested documents created with the reactionSchema

//schema settings create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query