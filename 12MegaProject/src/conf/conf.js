const conf={
    appwriteUrl: String(import.meta.env.VITE_APP_WRITE_URL),
    appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteCollectionId:String(import.meta.env.VITE_APPWRITE_COLECTION_ID),
    appwriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}  ///isse ye ensure rahega ki jo bhi ids and URLS access karenge wo string format me hi ayenge

export default conf