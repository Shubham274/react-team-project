import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Courses.module.css';

const Courses = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.card_wrapper}>
                <Link to="/modules"> <img src={props.data.img} alt='topic' /></Link>
                <div className={styles.info}>
                    <h3>{props.data.name}</h3>
                    <span>{props.data.units} units</span>
                </div>
            </div>

        </div>
    )
}

export default Courses;
