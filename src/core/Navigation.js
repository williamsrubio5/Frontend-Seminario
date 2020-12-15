import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { Label, Navbar, NavItem } from "reactstrap";
import './Navigation.css'
import { IoLogoGameControllerB } from "react-icons/io";
import {MdHome} from 'react-icons/md';
import {ImUserPlus,ImUserCheck  } from "react-icons/im"
import { HiOutlineUserRemove,HiPlusCircle,HiClipboardList  } from "react-icons/hi";
import { isAuthenticated, signout} from "./apiCore";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return {color: '#ff9900'}
  } else {
    return {color: '#ffffff'}
  }
}

const Navigation = ({history}) => {
  return (
    <div>
      <nav >
        
          <div className="general" >
          
          

          <div  >
         
              <NavItem className="item">
                <Link className="item1" to="/aboutus">
                <MdHome size="2.5em" />
                </Link>
              </NavItem>
           
            
              <NavItem className="item" >
                <Link className="item1" to="/">
                <IoLogoGameControllerB size="2.5em"/>
                </Link>
              </NavItem>
            
            
              {!isAuthenticated() && (
                <>
                  <NavItem className="item">
                    <Link className="item1" to="/signup">
                      <ImUserPlus size="2.2em" />
                    </Link>
                  </NavItem>
                  <NavItem className="item" >
                    <Link className="item1" to="/signin">
                     <ImUserCheck size="2.2em"/>
                    </Link>
                  </NavItem>
                </>
              )}
              { isAuthenticated() && (
                <>
                  <NavItem  className="item">
                    <Link className="item1" to="/addcategory" > <HiClipboardList size="2.2em"/></Link>
                  </NavItem>
                  <NavItem  className="item">
                    <Link className="item1" to="/addvideogame" ><HiPlusCircle size="2.2em" /></Link>
                  </NavItem>
                  
                  <NavItem className="item"> 
                    <Link
                    className="item1"
                      to="/"
                      onClick={() =>
                        signout(() => {
                          history.push("/");
                        })} >
                      <HiOutlineUserRemove size="2.2em"/>
                    </Link>
                  </NavItem>
                </>
              )}
            
          </div>
          
        </div>
        <div className="deco1"></div>
        <div className="deco2"></div>
        <div className="deco3"></div>
      </nav>
       
      
    </div>
  );
};







export default withRouter(Navigation);

