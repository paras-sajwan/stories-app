"use client";

import { useState } from 'react';
import Image from 'next/image';
import logo from '/public/logo.png';
import post from '/public/instagram-post.png';
import './style.css';
import {data} from './data/data';
import StoryModal from './story';

type json = {
    [key: string]: any;
};

export default function Home(){
	const [currentProfile, setCurrentProfile] = useState<null | json>(null);
	const handleCloseStory = () => {
		setCurrentProfile(null);
	}
	const handleCurrentProfile = (data: json) => {
		console.log(data);
		setCurrentProfile(data);
	}
	return (
		<div className='main-div'>
			<div className="logo-div">
				<Image src={logo} alt="logo" style={{ width: '100%', height: 'auto' }} />
			</div>
			<div className='stories-section'>
				{data.map((el, i) => (
					<div className='profile-wrapper' key={i}>
						<div className='profile-div'>
							<div className='profile-pictures' onClick={() => handleCurrentProfile(el)}>
								<Image src={el.profile_picture} alt="profile picture" width={70} height={70} />
							</div>
						</div>
						<div className='username'>{el.username}</div>
					</div>
				))}
					{currentProfile && <StoryModal data={currentProfile} onClose={handleCloseStory} />}
			</div>
			<div className='post-section'>
				<Image src={post} alt="post" style={{ width: '100%', height: 'auto' }} />
			</div>
		</div>
	)
}