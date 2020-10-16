import React from 'react'
import { NavLink } from 'react-router-dom';
import Curriculum from '../../Component/Curriculum/Curriculum';
import styles from './Units.module.css';
const Units = () => {
    const data = [
        {
            id: 1,
            name: 'Intro To AWS',
            img: 'https://assessments.edyoda.com/uploads/static/images/module_icon/aws_4QRD91l.png',
            grade: 'NA',
            Total_Attendance: "20.0%",
            LastWeekAttendance: "20.0%",
            Data: [
                {
                    heading: "Day - 1 | Intro To Cloud"
                },
                {
                    heading: "Day - 2 | AWS Simple Storage Service"

                },
                {
                    heading: "Day - 3 | AWS S3 & EC2"

                },
                {
                    heading: "Day - 4 | Block Storage"

                },
                {
                    heading: "Day - 5 | EC2 Advanced"

                }
            ]
        },
        // {
        //     id: 2,
        //     name: 'HTML5',
        //     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png',
        //     grade: '91.33',
        //     Total_Attendance: "NA",
        //     LastWeekAttendance: "NA",
        //     Data: [
        //         {
        //             heading: "Sorry No Data Scheduled At The Moment :("
        //         }
        //     ]
        // },

        // {
        //     id: 3,
        //     name: 'CSS3 | JavaScript',
        //     img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
        //     grade: '68.53',
        //     Total_Attendance: "NA",
        //     LastWeekAttendance: "NA",
        //     Data: [
        //         {
        //             heading: "Sorry No Data Scheduled At The Moment :("
        //         }
        //     ]
        // },

        // {
        //     id: 4,
        //     name: 'Databases',
        //     img: 'https://img.icons8.com/ios/452/database.png',
        //     grade: '100.0',
        //     Total_Attendance: "NA",
        //     LastWeekAttendance: "NA",
        //     Data: [
        //         {
        //             heading: "Sorry No Data Scheduled At The Moment :("
        //         }
        //     ]
        // },

        // {
        //     id: 5,
        //     name: 'React | Redux',
        //     img: 'https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png',
        //     grade: 'NA',
        //     Total_Attendance: "NA",
        //     LastWeekAttendance: "NA",
        //     Data: [
        //         {
        //             heading: "Sorry No Data Scheduled At The Moment :("
        //         }
        //     ]
        // },
    ]
    return (
        <div>
            <ul className={styles.Navtabs}>
                <li className={styles.NavItem}>
                    <NavLink exact to="/units" className={styles.Navlink} activeClassName={styles.selected}> Units
                    </NavLink>
                </li>
                <li className={styles.NavItem}>
                    <NavLink exact to="/grades" className={styles.Navlink} >Grades</NavLink>
                </li>
            </ul>
            <div className={styles.MainContainer}>
                {data.map((item, pos) => <Curriculum pos={pos} key={pos} data={item} />)}
            </div>

        </div>
    )
}

export default Units;