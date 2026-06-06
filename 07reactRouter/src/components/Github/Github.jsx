import { useEffect,useState } from 'react'

import {useLoaderData} from 'react-router-dom'  ///useLoaderData....iski help se hab ham cursor ko kisi link ya navigator ke upar lejate hain tabhi fetch karke rakh leta hai cache me and jab we clck it showa resu;t
                                                /// thus helps in more optimisation.....lag reduces even more
export default function Github(){
    /////jab useLoaderData nhi use kar rahe the tab aise fetch kar rahe the
    // const [data,setdata]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/SHIV24116')
    //     .then(response=> response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setdata(data)
    //     })
    // },[])

    const data = useLoaderData()  //new...it basucally retries alraedy stored data in react

    return (
        <div className=' m-4 bg-gray-600 text-white p-4 text-3xl'>
             
            <div className='flex align-middle justify-center'>
                <img src={data.avatar_url} alt="Git Profile Picture" className='p-4 rounded-full' />
            </div>
            <div className='flex align-middle justify-center'>
                <div className='m-5'>Github Username: {data.login}</div>
                <div className='m-5'>Github followers: {data.followers}</div>
            </div>
        </div>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/SHIV24116')
    return response.json()
}