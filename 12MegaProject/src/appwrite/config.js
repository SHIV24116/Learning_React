import conf from "../conf/conf";
import { Client,ID,Databases,Storage,Query,Permission,Role} from "appwrite";

export class Service{
    client=new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client)
    }
    
    //// Services related to the DataBase

    async createPost({title,slug,content,featuredImage,status,userId}) {
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userid: userId,
                }
            )
        }catch(error){
            console.log("Appwrie service::createPost::error",error);
        } 
    }
    async updatePost(slug,{title,content,featuredImage,status,userId}) {
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,   //document id
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userid:userId,
                }
            )
        }catch(error){
            console.log("Appwrie service::updatePost::error",error);
        } 
    }
    async deletePost(slug) { //only document id needed
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,   //document id
            )
            return true
        }catch(error){
            console.log("Appwrie service::deletePost::error",error);
        } 
    }
    async getPost(slug) { //only document id needed
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,   //document id
            )
            return true
        }catch(error){
            console.log("Appwrie service::getPost::error",error);
            return false
        } 
    }
    async getPosts(queries=[Query.equal("status","active",)]) { //to get all posts acc. to some property we define query
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,

            )
            return true
        }catch(error){
            console.log("Appwrie service::getPost::error",error);
            return false
        } 
    }
    
    //Services related to the Storage
    //file Upload Services
    async uploadFile(file){
        try{
           return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file,
            [
             Permission.read(Role.any())
            ]
           )
           return true;
        }catch(error){
            console.log("Appwrie service::fileUpload::error",error);
            return false
        }
    }
    async deleteFile(fileId){
        try{
           return await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId,
           )
           return true;
        }catch(error){
            console.log("Appwrie service::deleteFile::error",error);
            return false
        }
    }
    getFilePreview(fileId){    // can write it too in async await butits response is actually very fast so dont need it
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service()
export default service