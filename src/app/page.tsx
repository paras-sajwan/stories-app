"use client";

import { useState } from 'react';
import Image from 'next/image';
import logo from '/public/logo.png';
import post from '/public/instagram-post.png';
import './style.css';
import {data} from './data/data';
import Story from './story';

export default function Home(){
    const [currentProfile, setCurrentProfile] = useState<null | string>(null);
    const handleCloseStory = () => {
        setCurrentProfile(null);
    }
    return (
        <div className='main-div'>
            <div className="logo-div">
                <Image src={logo} alt="logo" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className='stories-section'>
                {data.map((el, i) => (
                    <div className='profile-div' key={i}>
                        <div className='profile-pictures' onClick={() => setCurrentProfile(el.user_id)}>
                            <Image src={el.profile_picture} alt="profile picture" fill />
                        </div>
                    </div>
                ))}
                {currentProfile && <Story data={data} currentProfile={currentProfile} onClose={handleCloseStory} />}
            </div>
            <div className='post-section'>
                <Image src={post} alt="post" style={{ width: '100%', height: 'auto' }} />
            </div>
        </div>
    )
}