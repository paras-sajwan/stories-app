import {useEffect, useState} from 'react';
import Image from 'next/image';


export default function StoryModal({ data, currentProfileIndex, currentStoryIndex }: { data: Record<string, any>, currentProfileIndex: number, currentStoryIndex: number }) {
  
	return (
		<div className="story-popup">
			<div className='story-popup-user'>
				<div className="story-popup-user-pic">{data[currentProfileIndex].profile_picture && <Image src={data[currentProfileIndex].profile_picture} alt="profile picture" sizes="auto" fill style={{objectFit:"cover"}} /> }</div>
				<div className='story-popup-user-name'>{data[currentProfileIndex].username}</div>
			</div>
			<div className='another-temp'>
				Profile {currentProfileIndex}
				Story {currentStoryIndex}
			</div>
			{data[currentProfileIndex].stories && data[currentProfileIndex].stories[currentStoryIndex].media_url && <Image src={data[currentProfileIndex].stories[currentStoryIndex].media_url} alt="story" sizes="auto" fill style={{objectFit:"cover"}} />}
			
		</div>
	);
}