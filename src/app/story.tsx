import {useEffect, useState} from 'react';
import Image from 'next/image';


export default function Story({data, currentProfile, onClose}) {

    const [activeStory, setActiveStory] = useState<null | string>(null);
    function setStory() {
       let temp = data.filter(obj => obj.user_id === currentProfile);
    //    console.log(temp);
    console.log(temp.length && temp[0].stories && temp[0].stories[0].media_url);
       setActiveStory(temp.length && temp[0].stories && temp[0].stories[0].media_url);
       
    }
    useEffect(() => {
        setStory()
    }, [])
    return (
        <div className="story-popup">
            {activeStory && <Image src={activeStory} alt="story" fill />}
            <button onClick={onClose}>close</button>
        </div>
    );
}