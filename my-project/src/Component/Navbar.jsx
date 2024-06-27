import React from 'react'
import { CiUser } from "react-icons/ci";
import { FaList } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { MdEmail } from "react-icons/md";



function Navbar() {
  return (
 <div className='d-flex flex-column header-panel'>
  <div className='header'>
    <div className='d-flex flex-column'>
      <div id='fixed-header'>
        <div id="stiky-header" className='d-flex flex-column gap-reg'>
          <div className='container'>
            <div className='middle-header'>
            <ul className='middle-header__left-side'>
              <li>
                <svg className='e-icon e-TypeGeneral5'>
                <FaList />

                </svg>
              </li>
              <li className='d-none d-lg-block'>
              <button type="button" id="dropdownBasic2" class="btn px-0"> العربية </button>
              </li>
              <li class="d-none d-lg-flex align-items-center gap-xs">
                <button class="btn p-0">
                  <svg class="e-icon e-TypeGeneral6"><IoMdSearch /></svg> Search </button>
                 
              </li>
            </ul>
            <a> <img src="egypt-logo.svg" class="logo" /></a>
            <div className='dropProfile d-none d-lg-flex'>
              <div className='menuheader'>
                <ul>
                  <li>
                    <a className='btn black-color sign-in'><CiUser />  sign in</a>
                  
                  </li>
                </ul>

              </div>
            </div>
            </div>
          </div>

        </div>
        
      </div>
      <div className='container navbar-menu'>
            <div className='row'>
              <div className='col-lg-12 col-md-12 p-0'>
                
                <div className='collapse-menu justify-content-center'>
                  <div className='menu-item navbar-menuItem has-SubMenu'>
                    <a>Business</a>
                  </div>
                  <div className='menu-item navbar-menuItem has-SubMenu'>
                    <a>Regulation</a>
                  </div>
                  <div className='menu-item navbar-menuItem has-SubMenu'>
                    <a>Startups</a>
                  </div>
                  <div className='menu-item navbar-menuItem has-SubMenu'>
                    <a>Companies</a>
                  </div>
                  <div className='menu-item navbar-menuItem has-SubMenu'>
                    <a>Industries</a>
                  </div>
                  <div className='menu-item navbar-menuItem has-SubMenu'>
                    <a>Enterprise for your industry</a>
                  </div>
                  <div className='menu-item navbar-menuItem has-SubMenu'>
                    <a>Newsmakers</a>
                  </div>
                 
                  <div className='menu-item navbar-menuItem has-SubMenu'>
                    <a>Explainers</a>
                  </div>
                  <div className='menu-item navbar-menuItem has-SubMenu'>
                    <a>Archives</a>
                  </div>
                  
                  
                  <div className='menu-item navbar-menuItem has-SubMenu'>
                    <a>Talkshows</a>
                  </div>
                  
                  <div className='menu-item navbar-menuItem has-SubMenu'>
                    <a>Lifestyle</a>
                  </div>
                  
                  <div className='menu-item navbar-menuItem has-SubMenu'>
                    <a>Events</a>
                  </div>
                  
                  <div className='menu-item navbar-menuItem has-SubMenu'>
                    <a>Calendar</a>
                  </div>
                  <div className='menu-item navbar-menuItem has-SubMenu'>
                    <a>More...</a>
                  </div>
                  
        
                

                </div>
              </div>
            </div>
            
           </div>
     
      <div className='subscribe-bg bg-color-3270ff wow fadeInUp delay-0-2s'>
                    <div className='container'>
                      <div className='d-lg-flex justify-content-center align-items-center'>
                        <div className='pe-lg-3'>
                          <div className='subscribe-content'>
                          <h4 class="mb-0"> Get <span class="fw-bold"> Enterprise  </span> daily </h4>
                          <p> Available in your choice of English or Arabic </p>
                     
                          </div>
                          
                          

                          
                        </div>
     
     
                      </div>
                      
                    </div>
                 
                  </div>
                  
                  
                        

    </div>
  </div>

 </div>
    

    
  )
}

export default Navbar
