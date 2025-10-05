import React from 'react'
import Style from "./Layout.module.css"
import Navbar from '../Navbar/Navbar'

import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <main className='from-blue-700 bg-gradient-to-t bg-slate-100 dark:bg-gray-900 dark:text-white dark:from-blue-300'>

            <Navbar />

            <div className='min-h-[90vh]'>
                <Outlet />
            </div>

            

        </main>
    )
}

export default Layout