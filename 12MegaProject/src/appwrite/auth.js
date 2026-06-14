//this is one of the services of appwrite

import { Client, Account, ID} from 'appwrite';
import conf from '../conf/conf';

export class AuthService{
    client=new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account=new Account(this.client);
    }

    async createAccount({email,password,name}){
        try{
            const userAccount=await this.account.create(ID.unique(),email,password,name); //can refer these methods from appwrite documentations(authentication section)
            if(userAccount){
                //call another method
                return this.login({email,password});
            }else {
                return userAccount;
            }
        }
        catch(error){
            throw error;
        }
    }
    async login({email,password}){
        try{
            await this.account.createEmailPasswordSession({email,password }) //this method too from documentation
        }catch(error){
            throw error;
        }
    }
    async getCurrentUser(){
        try{
            return await this.account.get();
        }
        catch(error){
            console.log("Appwrite service:: getCurrentUser::error",error);
        }

        return null; //agar account mila hi nhi to......try ke andar if else bhi laga ke handle kar sakte the
    }
    async logOut(){
        try{
            return await this.account.deleteSession('current');
        }
        catch(error){
            console.log("Appwrite service:: logout ::error",error);
        }

        return null; //agar account mila hi nhi to......try ke andar if else bhi laga ke handle kar sakte the
    }
    async deleteAccount(){
        try{
            return await this.account.deleteSessions();
        }
        catch(error){
            console.log("Appwrite service:: logout ::error",error);
        }

        return null; //agar account mila hi nhi to......try ke andar if else bhi laga ke handle kar sakte the
    }
}  ///code same standard wala hi hai....just usko classes and object ke form me convert kar diya hai


const authService = new AuthService();

export default authService





// export const client = new Client();

// client
//     .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
//     .setProject('<PROJECT_ID>'); // Replace with your project ID

// export const account = new Account(client);
// export { ID } from 'appwrite';
