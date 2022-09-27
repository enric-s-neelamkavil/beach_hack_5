import React from "react";
import Counter from "../Counter/Counter";
import "./Home.css";

function Home() {
  return (
    <div className="dashboard_home_wrapper">
      <h1 className="dashboard_home_title">
        BEACH <span className="hack5wrapper">HACK 5</span>
      </h1>
      <p className="dashboard_home_description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        consequatur incidunt distinctio vel ad ut cumque rem et earum voluptatum
        nihil commodi voluptates dolorem eos adipisci, repudiandae, dolorum
        expedita accusamus magnam ducimus nemo. Eligendi deleniti asperiores
        sunt perferendis alias delectus, minima inventore necessitatibus eius
        nobis ex! Eligendi atque consectetur sed!
      </p>
      <div className="dashboard_home_counter_wrapper">
        <Counter num="60" title="Teams" />
        <Counter num="148" title="Hours" />
        <Counter num="30" title="Colleges" />
      </div>
    </div>
  );
}

export default Home;
