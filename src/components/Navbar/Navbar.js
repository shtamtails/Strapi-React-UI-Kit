import * as FaIcons from 'react-icons/fa'
import { useState } from "react"
import { SidebarData } from './SidebarData'

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false)
  const [sidebarAnimation, setSidebarAnimation] = useState(false);

  return (
    <>
    <aside className={`navbar${sidebar ? " navbar-mini" : ""}`}>
      <div className={`navbar-header`}>
        <div className={`navbar-header-logo`}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="4" fill="#4945FF"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M22.2804 9.3335H11.9448V20.0668L11.945 20.0669V14.6176H17.0022C17.2154 14.6176 17.3883 14.7905 17.3883 15.0037V20.0669L22.6665 20.0668V9.71958C22.6665 9.50635 22.4936 9.3335 22.2804 9.3335Z" fill="white"/>
          <path opacity="0.404989" fillRule="evenodd" clipRule="evenodd" d="M11.9449 9.3335V14.6176H7.13219C6.96026 14.6176 6.87411 14.4098 6.99562 14.2881L11.9449 9.3335Z" fill="white"/>
          <path opacity="0.404989" fillRule="evenodd" clipRule="evenodd" d="M17.7173 25.0211C17.5957 25.1428 17.3877 25.0567 17.3877 24.8847V20.067H22.666L17.7173 25.0211Z" fill="white"/>
          <path opacity="0.404989" d="M11.9448 14.6177H17.1951C17.3017 14.6177 17.3881 14.7041 17.3881 14.8107V20.0669H12.3309C12.1177 20.0669 11.9448 19.8941 11.9448 19.6808V14.6177Z" fill="white"/>
        </svg>
        </div>
        <div className={`navbar-header-text${sidebar ? " hide-element" : ""}${sidebar === false & sidebarAnimation === true ? " show-element" : ""}`}>
          <div className="navbar-header-text-top">
            Twitch Helper
          </div>
          <div className="navbar-header-text-bottom">
            Workplace
          </div>
        </div>
      </div>

      <ul className={`links-tab${sidebar ? " minimized" : ""}`}>

      {SidebarData.map((item, index) => {
        if(item.type === "label") {
          return (
            <div className={`links-tab-title${sidebar ? " hide-element" : ''}${sidebar === false & sidebarAnimation === true ? " show-element" : ""}`}>
            {item.title}
            </div>
            )
        } else {
          return (
          <a href={item.path}>
          <li className={`link`}>
          {/* <li className="link selected"> */}
          <div className="link-icon">
            {item.icon}
          </div>
          <div className={`link-text`}>
          {/* <div className={`link-text selected`}> */}
            {item.title}
          </div>
          </li>
          </a>
          )
        }
      })}

      </ul>


          

        


      <div className="navbar-footer">
        <div className="navbar-footer-image">
        <img src="https://i.ibb.co/QM3PsPP/Oval.png" alt="" />
        </div>
        <div className={`navbar-footer-close-btn ${sidebar && "navbar-footer-close-btn-minimized"} ${sidebarAnimation && "navbar-footer-close-btn-open-animation"}`} 
        onClick={() => {setSidebar(!sidebar); setSidebarAnimation(true)}}>
          
          {!sidebar ? <FaIcons.FaAngleLeft /> : <FaIcons.FaAngleRight />}
        </div>
        <div className={`navbar-footer-text${sidebar ? " hide-element" : ""}${sidebar ? " hidden" : ""}`}>
          John Doe
        </div>
      </div>
    </aside>
    </>
      
  )
}

export default Navbar