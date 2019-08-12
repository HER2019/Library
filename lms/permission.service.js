class PermissionService {

    getPermissions(username) {
        for (let i = 0; i < users.length; i++){
            let user = users[i];
            if (user.username == username){
                return user.permission;
            }
        }
    }
}
