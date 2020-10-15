import React from 'react';
import styles from './Modules.module.css';

const Modules = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.module_card}>
                <div className={styles.module_logo}>
                    <img src={props.data.img} alt='module' />
                </div>
                <div className={styles.info}>
                    <div className={styles.module_name}>{props.data.name}</div>
                    <div className={styles.Modulecard_detail}>
                        <img className={styles.mentor_pic} src={props.data.mentor} alt="mentor" />
                        <span className={styles.mentor_name}>{props.data.mentor_name}</span>
                    </div>

                    <p className={styles.duration}>{props.data.time}</p>
                </div>
            </div>
        </div>
    )
}

export default Modules;
