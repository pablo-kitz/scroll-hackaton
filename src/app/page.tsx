"use client";

import { BettingCard } from "@/components";
import styles from "./landing.module.css";

export default function Home() {
  return (
    <div className={styles.root}>
      <BettingCard
        imageUrl="https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=800"
        status="In-Play"
        question="Will Dak Prescott record 275+ passing yards vs Cardinals?"
        yesPercentage={44}
        noPercentage={56}
        participants={35}
        totalPool="$3.71k"
        endDate="Nov 4"
      />
    </div>
  );
}
