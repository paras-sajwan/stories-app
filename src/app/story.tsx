import {useEffect, useState} from 'react';
import Image from 'next/image';


export default function StoryModal({ data, currentProfileIndex, currentStoryIndex, closeStoryPopup }: { data: Record<string, any>, currentProfileIndex: number, currentStoryIndex: number, closeStoryPopup: () => void }) {
  
	return (
		<div className="story-popup">
			<div className='story-popup-header'>
				<div className='story-popup-user-details'>
					<div className="story-popup-header-pic">
						{data[currentProfileIndex].profile_picture && <Image src={data[currentProfileIndex].profile_picture} alt="profile picture" sizes="auto" fill style={{objectFit:"cover"}} /> }
					</div>
					<div className='story-popup-header-name'>
						{data[currentProfileIndex].username}
					</div>
				</div>
				<div className='story-popup-close-button' onClick={closeStoryPopup}>
					<Image src="./cross-icon.svg" alt="cros icon" sizes="auto" fill style={{objectFit:"contain"}} />
				</div>
			</div>
			<div className='another-temp'>
				Profile {currentProfileIndex}
				Story {currentStoryIndex}
			</div>
			{data[currentProfileIndex].stories && data[currentProfileIndex].stories[currentStoryIndex].media_url && <Image src={data[currentProfileIndex].stories[currentStoryIndex].media_url} alt="story" sizes="auto" fill style={{objectFit:"cover"}} />}
		</div>
	);
}