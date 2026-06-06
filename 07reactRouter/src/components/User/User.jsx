import {useParams} from 'react-router-dom'

export default function User(){
    const  {userid} = useParams()
    return (
        <div className='bg-gray-500 flex justify-center text-cyan-50 text-2xl p-4'>User: {userid}</div>
    )
}

// url/user/userid(100,etc)...........karenge to userid display hogi
//is block ke through jo bhi url me ayega hame uska access mil jayega