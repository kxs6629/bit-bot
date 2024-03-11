const UserInfo = require('./models/UserInfo');
// add new columns
// UserInfo.drop();

UserInfo.sync({force:true});


// add new columns, but not delete columns with data
// UserInfo.sync({alter:true});
// UserList.sync({alter:true});
// Leaderboard.sync({alter:true});
