class LMS {

    constructor() {
        this._authService = new AuthService(new UmService(), new PermissionService());
    }


    get authService() {
        return this._authService;
    }
}