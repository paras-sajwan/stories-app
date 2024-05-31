import {useEffect, useState} from 'react';
import Image from 'next/image';


export default function StoryModal({ data, onClose }: { data: Record<string, any>, onClose: () => void }) {
  
	const [currentStoryIndex, setCurrentStoryIndex] = useState<number>(0);

	const nextStory = () => {
		if (currentStoryIndex >= data.stories.length - 1) {
			onClose();
			return;
		}
		setCurrentStoryIndex(currentStoryIndex+1);
	};

	const prevStory = () => {
		if (currentStoryIndex <= 0) {
			onClose();
			return;
		}
		setCurrentStoryIndex(currentStoryIndex-1);
	};

	return (
		<div className="story-popup">
			<div className='story-popup-user'>
				<div className="story-popup-user-pic">{data.profile_picture && <Image src={data.profile_picture} alt="profile picture" layout='fill' objectFit='contain' /> }</div>
				<div className='story-popup-user-name'>{data.username}</div>
			</div>
			{data.stories && <Image src={data.stories[currentStoryIndex].media_url} alt="story" fill />}
			<div className='temp-div'>
				<button onClick={onClose}>close</button>
				<button onClick={prevStory}>prev</button>
				<button onClick={nextStory}>next</button>
			</div>
		</div>
	);
}