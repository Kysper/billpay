const User = {
    
    createUser (id,username,password,email,iconList){
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.iconList = [iconList];
    }

}