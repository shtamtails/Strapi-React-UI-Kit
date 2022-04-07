import React from 'react'
import * as FaIcons from "react-icons/fa"

export const SidebarData = [
    {
        title: 'PLUGINS',
        path: '',
        icon: '',
        type: "label"
    },
    {
        title: "Home",
        path: '/',
        icon: <FaIcons.FaHome />,
        type: 'link'
    },
    {
        title: "Media Library",
        path: '/media-library',
        icon: <FaIcons.FaPhotoVideo />,
        type: 'link'
    },
    {
        title: "Documentation",
        path: '/documentation',
        icon: <FaIcons.FaBookOpen />,
        type: 'link'
    },
    {
        title: "GENERAL",
        path: '',
        icon: '',
        type: 'label'
    },
    {
        title: "Plugins",
        path: '/plugins',
        icon: <FaIcons.FaDev />,
        type: 'link'
    },
    {
        title: "Marketplace",
        path: '/marketplace',
        icon: <FaIcons.FaShoppingCart />,
        type: 'link'
    },
    {
        title: "Settings",
        path: '/settings',
        icon: <FaIcons.FaReact />,
        type: 'link'
    },
]