import React from 'react'

import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"

export const NavItems = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaDungeon />,
        cName: 'navText'
    },
    {
        title: 'View All Characters',
        path: '/list',
        icon: <AiIcons.AiOutlineFolderView />,
        cName: 'navText'
    },
    {
        title: 'Create New Character',
        path: '/create',
        icon: <IoIcons.IoIosCreate />,
        cName: 'navText'
    },

]