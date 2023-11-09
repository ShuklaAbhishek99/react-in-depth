import config from "../config/config";
import { Client, Account, ID } from "appwrite";

// Account API
export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client)
    }

    // creating user account, after registration forward it to login
    async createAccount({ email, password, name }) {
        // eslint-disable-next-line no-useless-catch
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                //call another method, if user exists then do this
                return this.login({ email, password })
            } else {
                return userAccount
            }
        } catch (error) {
            throw error;
        }
    }

    // logging in the user
    async login({ email, password }) {
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            throw error
        }
    }

    // if user lands on home page then if logged in or not
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        // if user doesn't exist then it will return null
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSession('current');
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService