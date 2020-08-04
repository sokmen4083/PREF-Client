

class UserService{

    static getCurrentUser(){
        let user =  JSON.parse(window.localStorage.getItem("user"));
        console.log("user", user);
        return user;
    }

    static setCurrentUser(pUser){
        window.localStorage.setItem("user", JSON.stringify(pUser));
    }
}

export default UserService;