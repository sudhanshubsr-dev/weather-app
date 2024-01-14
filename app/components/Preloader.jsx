import React, { Component } from "react";
import styles from "./Preloader.module.css";

class Preloader extends Component {
  preloader() {
    let preload = document.querySelector(`.${styles.preloader}`);
    setTimeout(() => {
      preload.style.opacity = "0";
      setTimeout(() => {
        preload.style.display = "none";
      }, 1000);
    }, 3000);
  }

  componentDidMount() {
    this.preloader();
  }

  render() {
    return (
      <div className={styles.preloader}>
        <div className={styles.spinner_wrap}>
          <div className={styles.spinner}/>
        </div>
      </div>
    );
  }
}

export default Preloader;
