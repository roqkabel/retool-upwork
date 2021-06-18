import React from 'react'
import Navmenu from './Navmenu'
export default function Layout({pageTitle,children}) {
    return (
        <main>
            <title>{pageTitle}</title>



            {/* NAVBAR */}

            <Navmenu />

            <div>
                {children}
            </div>
        </main>
    )
} 
