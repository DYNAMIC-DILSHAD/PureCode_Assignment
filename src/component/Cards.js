import React from 'react'
import { AiOutlineBars } from 'react-icons/ai'
import { MdOutlineMessage } from 'react-icons/md'
import { BiEditAlt, BiSolidStopwatch } from 'react-icons/bi'


const Cards = ({ name }) => {

	return (

		// here we wrote code for making card 
		<div className='card_container'>
			<div className='cards'>
				<div className='title'>

					<h3 className='card_heading'>{name}</h3>

					<div className='time'>
						<p>01:33/09:30</p>
						<BiSolidStopwatch className='stopWatch' />
						<p>june 06</p>
					</div>

				</div>
				<div className='card_para'>
					<p>In publishing and graphic design, Lorem ipsum is
						a placeholder text commonly used to demonstrate the visual form of a document or a typeface
					</p>
				</div>

				<div className='copmlete'>

					<p>T-Wind</p>
					<p> 45% complete</p>

				</div>
				<div className='progress_bar'>
					<div className='innerProgress_bar'>

					</div>
				</div>

				<div className='image_footer'>
					<div className='img_footer'>
						<img src='DILIMGS.jfif' className='image' alt='' />
						<img src='DILIMGS.jfif' className='image' alt='' />
						<img src='DILIMGS.jfif' className='image' alt='' />

					</div>
					<div className='icon_ footer'>

						<AiOutlineBars />
						<span>15/100</span>
						<MdOutlineMessage />
						<span>3</span>
						<BiEditAlt />
					</div>

				</div>

			</div>

		</div>





	)
}

export default Cards
