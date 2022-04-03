import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import styles from "../styles/Team.module.css";

const Team = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.wrapper}>
        <Card image="acravero" name="Alex Cravero" company="ETHTRUST" />
        <Card image="cyoon" name="Cathy Yoon" company="ETHTRUST" />
        <Card image="echanning" name="Emma Channing" company="ETHTRUST" />
        <Card image="jgarcia" name="Joey Garcia" company="ETHTRUST" />
        <Card image="jho" name="John Ho" company="ETHTRUST" />
        <Card image="jpatchay" name="Jannah Patchay" company="ETHTRUST" />
        <Card image="jthomason" name="Jane Thomason" company="ETHTRUST" />
        <Card image="lschneider" name="Lee A. Schneider" company="ETHTRUST" />
        <Card image="tbaker" name="Teana Bakers" company="ETHTRUST" />
        <Card image="umccormack" name="Urzula McCormack" company="ETHTRUST" />
        <Card image="wsaunders" name="Wendy Saunders" company="ETHTRUST" />
      </div>
    </div>
  );
};

export default Team;
