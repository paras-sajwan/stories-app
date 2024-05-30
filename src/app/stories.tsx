export default function Stories({ data, setCurrentProfile } : {data: Record<string, any>}) {
    return (
        <>
        {data.map((el, i) => (
            <div className='profile-div' key={i}>
                <div className='profile-pictures' onClick={() => setCurrentProfile(el.user_id)}>
                    <Image src={el.profile_picture} alt="profile picture" fill />
                </div>
            </div>
        ))}
        </>
    )
}