class EncryptionHelper {

    static encrypt(string) {
        return  CryptoJS.AES.encrypt(string, "Secret Passphrase");
    }
}
