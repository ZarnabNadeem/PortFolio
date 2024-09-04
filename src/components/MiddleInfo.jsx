import "./MiddleInfoStyles.css";
import React from "react";

const MiddleInfo = () => {
  return (
    <div className="education">
      <div class="container px-4 py-5" id="hanging-icons">
        <h2 class="pb-2 border-bottom">Education:</h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="col d-flex align-items-start">
            <div className="bord">
              <h3 class="fs-2  ">Bachelor 2021-Present</h3>
              <p>UAF ── University of Agriculture Faisalabad</p>
              <h5>Computer Science</h5>
              <p>Bachelors of Study in Computer Science.</p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div className="bord">
              <h3 class="fs-2 ">Intermediate 2019-2021</h3>
              <p>PGC ── Punjab Group of Colleges.</p>
              <h5>Computer Science</h5>
              <p>Intermediate with Computer Science.</p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div className="bord">
              <h3 class="fs-2  ">Matric 2017-2019</h3>
              <p>WHSS ── Wisdom House School System.</p>
              <h5>Computer Science</h5>
              <p>Matriculation in Computer Science.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleInfo;
