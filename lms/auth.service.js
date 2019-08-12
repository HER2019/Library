class AuthService {

    constructor(umService, permissionService) {
        this.umService = umService;
        this.permissionService = permissionService;
    }

    login(username, password) {
        let user = this.umService.getUserByUsername(username);

        if(user == null) {
            throw new Error(`user with ${username} not found`);
        }

        if(user.password === EncryptionHelper.encrypt(password)) {
            let userPermissions = this.permissionService.getPermissions(username);

            sessionStorage.setItem(userId, {
                user: user,
                permissions: userPermissions
            })
        } else {
            throw new Error(`incorrect username or password`);
        }

        return user;
    }

    logout(username) {
        sessionStorage.removeItem(username);
    }

    isLogined(username) {
        return sessionStorage.getItem(username) != null;
    }
}
