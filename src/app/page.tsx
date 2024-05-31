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
	const [isStoryPopupActive, setIsStoryPopupActive] = useState<boolean>(false);
	const [currentProfileIndex, setCurrentProfileIndex] = useState<number>(0);
	const [currentStoryIndex, setCurrentStoryIndex] = useState<number>(0);

	const closeStoryPopup = () => {
		setIsStoryPopupActive(false);
	}

	const openStoryPopup = () => {
		setIsStoryPopupActive(true);
	}

	const handleCurrentProfileIndex = (data: number) => {
		setCurrentProfileIndex(data);
		openStoryPopup();
	}

	const nextStory = () => {
		if (currentStoryIndex < data[currentProfileIndex].stories.length - 1) {
			setCurrentStoryIndex(currentStoryIndex+1)
			return;
		}
		closeStoryPopup();
	};

	const prevStory = () => {
		if (currentStoryIndex > 0) {
			setCurrentStoryIndex(currentStoryIndex-1);
			return;
		}
		closeStoryPopup();
	};

	return (
		<div className='main-div'>
			<div className="logo-div">
				<Image src={logo} alt="logo" style={{ width: '100%', height: 'auto' }} />
			</div>
			<div className='stories-section'>
				{data.map((el, i) => (
					<div className='profile-wrapper' key={i}>
						<div className='profile-div'>
							<div className='profile-pictures' onClick={() => handleCurrentProfileIndex(i)}>
								<Image src={el.profile_picture} alt="profile picture" width={70} height={70} />
							</div>
						</div>
						<div className='username'>{el.username}</div>
					</div>
				))}
				{isStoryPopupActive && (
					<>
						<StoryModal data={data} currentProfileIndex={currentProfileIndex} currentStoryIndex={currentStoryIndex} />
						<div className='temp-div'>
							<button onClick={closeStoryPopup}>close</button>
							<button onClick={prevStory}>prev</button>
							<button onClick={nextStory}>next</button>
						</div>
					</>
				)}
			</div>
			<div className='post-section'>
				<Image src={post} alt="post" style={{ width: '100%', height: 'auto' }} />
			</div>
		</div>
	)
}