import React, { useEffect, useState } from "react";
import Counter from "../Counter/Counter";
import Sectiontitle from "../Sectiontitle/Sectiontitle";
import "./Registrationcount.css";

function Registrationcount() {
  const [count, setCount] = useState(86);
  const [dataa, setData] = useState([]);

  // Accept: application/json

  const intermdeiate = [];
  // const countFetch = async () => {
  //   await fetch(process.env.REACT_APP_SPREADHSEET_API)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       data.values.map((dat) => {
  //         if (!intermdeiate.includes(dat[0])) {
  //           intermdeiate.push(dat[0]);
  //         }
  //       });
  //     })
  //     .then(() => {
  //       setData(intermdeiate);
  //       setCount(intermdeiate.length-1);
  //     });
  // };
  useEffect(() => {
    // countFetch();
    setData(["Team 420","ACE","Quatro","Unfold","Ryzen Sharks","THEXTRUDER Alpha","Kuni","VCoders","Bytecode","Code Red","TECH_ED","Team-not-found","THEXTRUDER BETA"])

  }, []);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
        color: "white",
        fontFamily: `"Teko", sans-serif`,
        gap: "2vw",
      }}
    >
      <Sectiontitle title="REGISTRATIONS" />

      <div>
        <Counter num={count} />
      </div>
      <Sectiontitle title="SHORTLISTED TEAMS" />
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          flexWrap: "wrap",
          maxWidth: "1300px",
          gap: "1vw",
          justifyContent: "center",
          padding: "10px",
          // lineHeight: "1.5vw",
        }}
      >
        {dataa.map((dat) => {
          if (dat !== "TeamName")
            return <span className="team_name">{dat}</span>;
        })}
      </div>
    </div>
  );
}

export default Registrationcount;
