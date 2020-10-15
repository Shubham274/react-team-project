import React from 'react';
import Modules from '../../Component/Modules/Modules';
import styles from './ModuleProgress.module.css';

const ModuleProgress = () => {
    const data = [
        {
            time: "1 WEEKS",
            name: 'Intro To AWS',
            img: 'https://assessments.edyoda.com/uploads/static/images/module_icon/aws_4QRD91l.png',
            mentor: 'https://assessments.edyoda.com/uploads/static/images/profile_images/rsz_harshith.png',
            mentor_name: 'Harshith'
        },
        {
            time: "3 WEEKS",
            name: 'HTML5',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png',
            mentor: 'https://assessments.edyoda.com/uploads/static/images/profile_images/0_hZQV6Mt.jpg',
            mentor_name: 'Qaifi khan'
        },

        {
            time: "9 WEEKS",
            name: 'CSS3 | JavaScript',
            img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
            mentor: 'https://assessments.edyoda.com/uploads/static/images/profile_images/0_hZQV6Mt.jpg',
            mentor_name: 'Qaifi khan'
        },

        {
            time: "2 WEEKS",
            name: 'Databases',
            img: 'https://img.icons8.com/ios/452/database.png',
            mentor: 'https://assessments.edyoda.com/uploads/static/images/profile_images/0_hZQV6Mt.jpg',
            mentor_name: 'Qaifi khan'
        },

        {
            time: "5 WEEKS",
            name: 'React | Redux',
            img: 'https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png',
            mentor: 'https://assessments.edyoda.com/uploads/static/images/profile_images/0_hZQV6Mt.jpg',
            mentor_name: 'Qaifi khan'
        },



    ]

    return (
        <div className={styles.PageContainer}>
            <div className={styles.BackGroundWrapper}>
                <img src="https://assessments.edyoda.com/static/images/Only-Image.jpg" alt="Edyoda Background" />
            </div>
            <div className={styles.CourseDetails}>
                <div>
                    <div className={styles.CourseName}>
                        RB-020420 - React Developer Program
                </div>
                    <div className={styles.CourseCode}>
                        RB020420
                </div>
                </div>
                <div className={styles.CourseStructure}>
                    <div className={styles.Flexrow}>
                        <img className={styles.ModuleImage} src="https://assessments.edyoda.com/static/images/Playlist%20Icon.png" alt="playlist" />
                        <div className={styles.SubSectionText}>
                            <div className={styles.SmallText}>5</div>
                            <div className={styles.SmallText}>Modules</div>
                        </div>
                    </div>
                    <div className={styles.Flexrow}>
                        <img className={styles.ClockImage} src="https://assessments.edyoda.com/static/images/Clock%20Icon.png" alt="clock" />
                        <div className={styles.SubSectionText}>
                            <div className={styles.SmallText}>20</div>
                            <div className={styles.SmallText}>weeks</div>
                        </div>
                    </div>
                </div>
            </div>
            <section className={styles.PrimaryPending}>
                <h1 className={styles.mainHeading}>Program Progress</h1>
                <div className={styles.Flexrow}>
                    <div className={styles.FlexColumn}>
                        <span className={styles.Score}>1</span>
                        <span className={styles.Parameter}>Class Rank</span>
                    </div>
                    <div className={styles.FlexColumn}>
                        <span className={styles.Score}>100.0%</span>
                        <span className={styles.Parameter}>Avg Score</span>
                    </div>
                    <div className={styles.FlexColumn}>
                        <span className={styles.Score}>58.29</span>
                        <span className={styles.Parameter}>Class SHS</span>
                    </div>
                </div>
            </section>
            <section className={styles.PrimaryPending}>
                <div className={styles.ModuleHeading}>Modules</div>
                <div className={styles.ModulesSection}>
                    {data.map((item, pos) => <Modules data={item} key={pos} />)}
                </div>
            </section>
        </div>
    )
}

export default ModuleProgress;
