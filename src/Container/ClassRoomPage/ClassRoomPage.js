import React from 'react'
import Courses from '../../Component/Courses/Courses'
import styles from './ClassRoomPage.module.css'

const ClassRoomPage = () => {
    const data = [
        {
            units: 9,
            name: 'RB-020420 -React Developer Program',
            img: 'https://assessments.edyoda.com/uploads/static/images/RB020420/MicrosoftTeams-image.png',
        },
        {
            units: 9,
            name: 'DSA-130720 -Data structures and Algorithms',
            img: 'https://assessments.edyoda.com/uploads/static/images/DSA130720/MicrosoftTeams-image_1.png',
        },
        {
            units: 10,
            name: 'Linux, AWS and Git',
            img: 'https://classroom.edyoda.com/pages/images/unknown_x4.png',
        },

    ]

    return (
        <div className={styles.container}>
            <h1 className={styles.mainHeading}>Classroom</h1>
            <p className={styles.skillsPara}>Your Enrolled Courses</p>
            <div className={styles.topics}>
                {data.map((item, pos) => <Courses data={item} key={pos} />)}
            </div>
        </div>
    )
}

export default ClassRoomPage;
