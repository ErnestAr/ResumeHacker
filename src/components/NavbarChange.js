import React, {useState} from 'react'
import NavbarLarger from './NavbarLarger'
import NavbarSmaller from './NavbarSmaller'

export default function NavbarChange() {
    const [drawer, setDrawer] = useState(false)
    const [drawerActivate, setDrawerActivate] = useState(false)

    function componentWillMount(){
        if(window.innerWidth <= 600){
            setDrawerActivate(true);
            return true 
        }
    
        window.addEventListener('resize',()=>{
          if(window.innerWidth <= 600){
            setDrawerActivate(true);
            return true
          }
          else{
            setDrawerActivate(false)
            return false
          }
        });
      }
    window.addEventListener('resize', componentWillMount)
    return (
        <>  
                    {drawerActivate? <NavbarSmaller/> : <NavbarLarger/>}
        </>
    )
}
