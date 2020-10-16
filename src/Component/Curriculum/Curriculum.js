import React from "react";
import { Link } from "react-router-dom";
import styles from "./Curriculum.module.css";

const Curriculum = (props) => {
  console.log("curriculum", props.data);
  return (
    <>
      <div className={styles.LeftSectionWrapper}>
        <section className={styles.ModuleDetails}>
          <div className={styles.ModulePage}>
            <div>
              <img
                src={props.data.img}
                alt="mod_pic"
                className={styles.ModulePic}
              />
            </div>
            <div className={styles.Subtitle}>
              <span className={styles.Text}>{props.data.name} </span>
            </div>
          </div>
          <div className={styles.ModuleAttendanceContainer}>
            <div>
              <label className={styles.Label}>grades :</label>
              <span> {props.data.grade} </span>
            </div>
            <div>
              <label className={styles.Label}>total attendance :</label>
              <span> {props.data.Total_Attendance} </span>
            </div>
            <div>
              <label className={styles.Label}>last week attendance : </label>
              <span> {props.data.LastWeekAttendance} </span>
            </div>
          </div>
        </section>

        <section className={styles.ModulePlanContainer}>
          <div className={styles.ModulePlan}>module plan</div>
          <div className={styles.WeekDetails}>Week - 1</div>
        </section>
      </div>

      <div>
        {props.data.Data.map((item, pos) => (
          <div className={styles.ModuleContent} key={pos}>
            {item.heading}

            <div>
              <div className={styles.PlanLink}>
                <Link>Session Plan</Link>
              </div>
              <div className={styles.PlanLink}>
                <Link>Session Recording</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Curriculum;
