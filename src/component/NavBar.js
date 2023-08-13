import React from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { MdStarHalf,MdOutlinePages } from 'react-icons/md'
import { TbUserCircle,TbApps } from 'react-icons/tb'
import { BiMenu } from 'react-icons/bi'
import { PiSquaresFour,PiShieldCheckeredFill } from 'react-icons/pi'
import { DiUikit } from 'react-icons/di'
import { useState } from 'react';
const NavBar = () => {
	const [data, setData] = useState(false)
	return (
		<div className='nav'>
			<div className='nav_logo'>
				<h3> T-Wind</h3>
				<div className="humbergur" onClick={() => setData(!data)}>
					<BiMenu />
				</div>
			</div>

			{
				data ? <>
					<div className='nav_left'>


						<div className='nav_second'>
							<div className='nav_second_left'><PiSquaresFour  className='left_icon'/>DASHBOARDS</div>
							<div className='nav_second_left'><TbApps className='left_icon'/>APPS </div>
							<div className='nav_second_left'><DiUikit className='left_icon'/>UI KITS</div>
							<div className='nav_second_left'><MdOutlinePages className='left_icon'/>PAGES</div>
							<div className='nav_second_left'><PiShieldCheckeredFill className='left_icon'/>AUTHENTICATION</div>
						</div>

					</div>



					<div className='nav_right'>
						<div className='input'>
							<input type='text' className='input_box' placeholder='search' />
						</div>
						<div className='nav_icon'>
							<div className='nav_first'><MdStarHalf /></div>
							<div className='nav_first'><IoIosNotificationsOutline /></div>
							<div className='nav_first'><TbUserCircle /></div>
							<h5 className=''>jonson</h5>
						</div>
					</div>


				</> : <div></div>

			}


		</div>
	)
}

export default NavBar
