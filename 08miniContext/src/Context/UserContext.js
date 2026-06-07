import { createContext } from "react"


const UserContext =createContext()

export default UserContext;

{/* <UserContext>
    <Login/>
    <Card/>
</UserContext>    /// now wrapping different components inside the UserContext will make them provider
//now these components can get the access of all user states

//////will do it in a seperate file///// */}