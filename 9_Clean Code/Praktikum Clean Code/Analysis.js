class user {
    var id;
    var username;
    //baiknya memilih diantara 1, apakah memakai id atau username.    
    var password;
}

class userservice { 
    //userservice diganti dan diubah menjadi userService
    user[] users = [];

    user[] getallusers() { 
    //ditulis getAllusers
    //getAlluser berbedakah dengan users? 
        return users;
    }

    user getuserbyid(userid) {
    //ditulis getUserById
        return users.filter(userid);
    }
}