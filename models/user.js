//needs to have a username that contains a string, unique, required, and trimmed
//email that contains a string, unique, required, must match a valid email address (look into Mongoose's matching validation), and trimmed
//thoughts that is an array that's ids are referenced to the Thought model
//friends that is an array that's ids are referenced to the User model (self-reference)

//shema settings create a virtual called friendCount that retrieves the length of the user's friends array field on query