export class AppSettings {
    public static API_ENDPOINT = 'http://bull.codixfr.private:8080/v9_be_stable';

    public static USER_SESSION_KEY = '_imx.user.session';

    public static USER_SESSION_EXPIRE_TIME = { expires: Date.now() + 3999 * 60 * 60 };
}
