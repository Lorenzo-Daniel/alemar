import React, { createContext, useContext, useState } from 'react'
const NavbarContext = createContext()
export const useNavbarContext = ()=> useContext(NavbarContext)

function NavbarProvider({ children }) {
    const [initial, setInitial] = useState();

    const openPopUpMenu = () => {
        setInitial(true)
    }
    const closePopUpMenu = () => {
        setInitial(false)
    }

    return (
        <NavbarContext.Provider value={{
            initial,
            openPopUpMenu,
            closePopUpMenu
        }}>
            {children}
        </NavbarContext.Provider>
    )
}

export default NavbarProvider;


