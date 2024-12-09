import React, { useEffect, useState } from 'react';

function Announcements() {
    const [announcements, setAnnouncements] = useState([]);
        useEffect(() => {
            fetch('http://localhost:3000/api/announcements')
                .then((response) => response.json())
                .then((data) => setAnnouncements(data))
                .catch((error) => console.error('Error fetching announcements:',
            error));
        }, 
    []
);
return (
    <div>
        <h1 className='announcements-title'>Latest Announcements</h1>
            {announcements.length > 0 ? (
            <ul>
                {announcements.map((announcements) => (
                    <li className='announcements-list border-bottom' key={announcements.id}>
                        <h2 className='announcements-list-title '>{announcements.title}</h2>
                            <p className='announcements-content '>{announcements.content}</p>
                                <small className='announcements-date '>Posted on: {new
                                    Date(announcements.date_created).toLocaleString()}
                                </small>
                    </li>
                ))}
            </ul>
                ) : (
                <p>No announcements available.</p>
        )}
    </div>
    );
}
export default Announcements;