import React from 'react'
import Cards from './Cards'
import { AiOutlineDownSquare } from 'react-icons/ai'
import { MdGTranslate, MdOutlineMail } from 'react-icons/md'
import { GoShieldCheck } from 'react-icons/go';
import { CiFlag1, CiFacebook } from 'react-icons/ci';
import { IoMdCall } from 'react-icons/io';
import { TiSocialGooglePlusCircular, TiSocialTwitterCircular } from 'react-icons/ti';
import { FaInstagram } from 'react-icons/fa';
// import {TiSocialTwitterCircular} from 'react-icons/fa';

const AllCards = () => {
	const data = [
		{
			id: 1,
			name: 'Orgainic farming'
		},
		{
			id: 2,
			name: 'Transfer money'
		},
		{
			id: 3,
			name: 'Money transfer'
		},
		{
			id: 4,
			name: 'Book my world'
		}
	]
	return (
		<div className='allCards'>
			<div className='card_box'>

				{
					data.map((item) => {
						return (
							<Cards key={item.id} name={item.name} />
						)
					})
				}


			</div>
			<div className='about'>
				<div className='about_card'>

					<h4 className='about_heading'>About </h4>

					<p className='about_para'>
						its long established fact that reader will get distrested by readable
						content by the page while looking at it and its layout
					</p>
					<div className='about_icon'>
						<div className='email icons'>
							<AiOutlineDownSquare />
							<span className=''>6 june 1999</span>
						</div>
						<div className='google icons'>
							<MdGTranslate />
							<span>Eng, french, German</span>
						</div>

						<div className='flag icons'>
							<CiFlag1 />
							<span>USA</span>
						</div>

						<div className='shield icons'>
							<GoShieldCheck />
							<span>Music, Redaing, journy</span>

						</div>

					</div>

					<div className='contact'>
						<h4 className='contact_heading'>Contact</h4>

						<div className='call icons'>
							<IoMdCall />
							<span>+1234567600</span>
						</div>

						<div className='mail icons'>
							<MdOutlineMail />
							<span>example@examole.com</span>
						</div>
					</div>

					<div className='socail_media'>
						<div className='media_icon'>
							<CiFacebook className='social_icons'/>
							<TiSocialGooglePlusCircular className='social_icons'/>
							<FaInstagram className='social_icons'/>
							<TiSocialTwitterCircular className='social_icons'/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AllCards