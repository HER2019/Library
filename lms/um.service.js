class UmService {

    getUserByUsername() {
        for(let i = 0; i < sessionStorage.length; i++) {
            let key = localStorage.key(i);
            if (key == username){
                return {username: username, password: password}
            }
            //   alert(`${key}: ${localStorage.getItem(key)}`);
        }
        return null;
    }
}
