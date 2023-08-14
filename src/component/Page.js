import React from 'react'
import { NavLink } from "react-router-dom"


const Page = () => {
  return (
      // it is nav link for (Profile,project,post,setting) 
    <div className='anc_tag'>
      <NavLink to="/" className='tag' >Profile</NavLink>
      <NavLink to="/" className='tag'>Project</NavLink>
      <NavLink to="/" className='tag'>Post</NavLink>
      <NavLink to="/" className='tag'>Setting</NavLink>
    </div>
  )
}

export default Page
