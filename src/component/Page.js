import React from 'react'
import {NavLink} from "react-router-dom"

// style={({ isActive }) => ({
//   color: isActive ? '#fff' : '#545e6f',
//   background: isActive ? '#7600dc' : '#f0f0f0',
// })}
const Page = () => {
  return (
	<div className='anc_tag'>
    <NavLink to="/" className='tag' >Profile</NavLink>
    <NavLink to="/" className='tag'>Project</NavLink>
    <NavLink to="/" className='tag'>Post</NavLink>
    <NavLink to="/" className='tag'>Setting</NavLink>
  </div>
  )
}

export default Page