import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout(){
    return (
        <>
        <Header/>
        <Outlet/>  
        <Footer/>
        </>
    )  //Outlet tag wala part dynamically change hoga and Header and Footer remain as it is in every page
}

export default Layout