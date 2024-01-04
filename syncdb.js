const UserInfo = require('./models/UserInfo');
const UserList = require('./models/UserList');
const Leaderboard = require('./models/Leaderboard');

// add new columns
UserInfo.sync({force:true});
UserList.sync({force:true});
Leaderboard.sync({force:true});


// add new columns, but not delete columns with data
// UserInfo.sync({alter:true});
// UserList.sync({alter:true});
// Leaderboard.sync({alter:true});
