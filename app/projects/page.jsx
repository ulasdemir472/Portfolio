import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.gridContainer}>
        <Link href="https://github.com/ulasdemir472/Quiz-App" target="_blank">
          <div className={styles.project}>
            <Image
              className={styles.projectImage}
              src="/quiz-app.png"
              alt="quiz-app"
              width={400}
              height={400}
            />
            <div className={styles.content}>
              <h3>Quiz App</h3>
              <p className={styles.contentDesc}>
                It is a quiz application that has a time and a score and can
                save the result at the end. I keep the questions in local
                storage.
              </p>
              <p className={styles.techs}>
                <span className={styles.tech}>Html</span>
                <span className={styles.tech}>Css</span>
                <span className={styles.tech}>Javascript</span>
              </p>
            </div>
          </div>
        </Link>
        <Link href="https://github.com/ulasdemir472/BlogApp" target="_blank">
          <div className={styles.project}>
            <Image
              className={styles.projectImage}
              src="/blog.png"
              alt="blog"
              width={400}
              height={400}
            />
            <div className={styles.content}>
              <h3>Blog App</h3>
              <p className={styles.contentDesc}>
                A blog app with authentication and crud operations.
              </p>
              <p className={styles.techs}>
                <span className={styles.tech}>React</span>
                <span className={styles.tech}>Next</span>
                <span className={styles.tech}>Auth</span>
              </p>
            </div>
          </div>
        </Link>
        <Link href="https://github.com/ulasdemir472/Portfolio" target="_blank">
          <div className={styles.project}>
            <Image
              className={styles.projectImage}
              src="/portfolio.png"
              alt="portfolio"
              width={400}
              height={400}
            />
            <div className={styles.content}>
              <h3>Quiz App</h3>
              <p className={styles.contentDesc}>My own portfolio.</p>
              <p className={styles.techs}>
                <span className={styles.tech}>React</span>
                <span className={styles.tech}>Next</span>
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="https://github.com/ulasdemir472/Tindog_With_React"
          target="_blank"
        >
          <div className={styles.project}>
            <Image
              className={styles.projectImage}
              src="/tindog.png"
              alt="tindog"
              width={400}
              height={400}
            />
            <div className={styles.content}>
              <h3>Tindog</h3>
              <p className={styles.contentDesc}>
                This is tinder for dogs and owners but not exactly same purpose
                with tinder.App provides new friends for dogs and owners.
              </p>
              <p className={styles.techs}>
                <span className={styles.tech}>React</span>
                <span className={styles.tech}>Next</span>
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Project;
