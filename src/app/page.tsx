"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '/public/logo.png';
import post from '/public/instagram-post.png';
import './style.css';
// import {data} from './data/data';
import StoryModal from './story';

export default function Home(){
	const [isStoryPopupActive, setIsStoryPopupActive] = useState<boolean>(false);
	const [currentProfileIndex, setCurrentProfileIndex] = useState<number>(0);
	const [currentStoryIndex, setCurrentStoryIndex] = useState<number>(0);
	const [data, setData] = useState<any[]>([]);

	useEffect(() => {
		callDataAPI()
	}, []);

	const closeStoryPopup = () => {
		setIsStoryPopupActive(false);
	}

	const openStoryPopup = () => {
		setIsStoryPopupActive(true);
	}

	const showStory = (profileIndex: number) => {
		setCurrentProfileIndex(profileIndex);
		openStoryPopup();
	}

	const nextStory = () => {
		if (currentStoryIndex < data[currentProfileIndex].stories.length - 1) {
			setCurrentStoryIndex(currentStoryIndex+1)
			return;
		} else if (currentProfileIndex < data.length - 1) {
			setCurrentStoryIndex(0);
			setCurrentProfileIndex(currentProfileIndex + 1);
			return
		} else {
			closeStoryPopup();
		}
	};

	const prevStory = () => {
		if (currentStoryIndex > 0) {
			setCurrentStoryIndex(currentStoryIndex - 1);
			return;
		} else if (currentProfileIndex > 0) {
			setCurrentStoryIndex(data[currentProfileIndex - 1].stories.length - 1);
			setCurrentProfileIndex(currentProfileIndex - 1);
		} else {
			closeStoryPopup();
		}
	};

	const callDataAPI = () => {
		fetch("/data")
			.then((res) => res.json())
			.then((data) => {
				setData(data);
			})
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
							<div className='profile-pictures' onClick={() => showStory(i)}>
								<Image src={el.profile_picture} alt="profile picture" width={70} height={70} />
							</div>
						</div>
						<div className='username'>{el.username}</div>
					</div>
				))}
				{isStoryPopupActive && (
					<>
						<StoryModal data={data} currentProfileIndex={currentProfileIndex} currentStoryIndex={currentStoryIndex} closeStoryPopup={closeStoryPopup}/>
						<div className='story-toggle-div'>
							<div className='toggle-prev-story' onClick={prevStory}></div>
							<div className='toggle-next-story' onClick={nextStory}></div>
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