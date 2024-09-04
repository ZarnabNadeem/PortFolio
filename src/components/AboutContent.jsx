import "./AboutContentStyles.css";
import React from "react";

const AboutContent = () => {
  return (
    <div className="about-content">
      <div className="about-content-container">
        <div className="left">
          <h1>About me</h1>
          <p>
            As a passionate React front-end developer, I’ve spent the past year
            honing my skills in building responsive and dynamic web
            applications. My expertise lies in creating seamless user
            experiences through clean, efficient code and a deep understanding
            of modern web technologies like React, JavaScript, and Redux.Outside
            of coding, you’ll often find me reading and then some more reading.
            Take a look around my portfolio, and don’t hesitate to reach out if
            you’d like to connect!
          </p>
        </div>
        <div className="right">
          <img src="/images/aboutcontent.svg" alt="Image" />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <div class="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center ">
          <div class="list-group ">
            <a
              class="list-group-item list-group-item-action d-flex gap-3 py-3 "
              aria-current="true"
            >
              <img
                src="/images/html.svg"
                alt="html"
                width="32"
                height="32"
                class="rounded-circle flex-shrink-0"
              />
              <div class="d-flex gap-2 w-100 justify-content-between bg-color ">
                <div>
                  <h6 class="mb-0">HTML</h6>
                  <p class="mb-0 opacity-75">
                    The backbone of all web content, structuring websites with
                    clean and accessible markup.
                  </p>
                </div>
              </div>
            </a>
            <a
              class="list-group-item list-group-item-action d-flex gap-3 py-3"
              aria-current="true"
            >
              <img
                src="/images/css.svg"
                alt="css"
                width="32"
                height="32"
                class="rounded-circle flex-shrink-0"
              />
              <div class="d-flex gap-2 w-100 justify-content-between bg-color">
                <div>
                  <h6 class="mb-0">CSS</h6>
                  <p class="mb-0 opacity-75">
                    Transforming web pages with modern, responsive designs and
                    seamless user interfaces.
                  </p>
                </div>
              </div>
            </a>
            <a
              class="list-group-item list-group-item-action d-flex gap-3 py-3"
              aria-current="true"
            >
              <img
                src="/images/bootstrap.png"
                alt="Bootstrap"
                width="32"
                height="32"
                class="rounded-circle flex-shrink-0"
              />
              <div class="d-flex gap-2 w-100 justify-content-between bg-color">
                <div>
                  <h6 class="mb-0">BOOTSTRAP</h6>
                  <p class="mb-0 opacity-75">
                    Front-end framework for building responsive, mobile-first
                    websites quickly and easily using pre-designed components
                    and CSS.
                  </p>
                </div>
              </div>
            </a>
            <a
              class="list-group-item list-group-item-action d-flex gap-3 py-3"
              aria-current="true"
            >
              <img
                src="/images/javascript.svg"
                alt="javascript"
                width="32"
                height="32"
                class="rounded-circle flex-shrink-0"
              />
              <div class="d-flex gap-2 w-100 justify-content-between bg-color">
                <div>
                  <h6 class="mb-0">JAVASCRIPT</h6>
                  <p class="mb-0 opacity-75">
                    Bringing websites to life with dynamic content, interactive
                    elements, and smooth functionality.
                  </p>
                </div>
              </div>
            </a>
            <a
              class="list-group-item list-group-item-action d-flex gap-3 py-3"
              aria-current="true"
            >
              <img
                src="/images/react.svg"
                alt="react"
                width="32"
                height="32"
                class="rounded-circle flex-shrink-0"
              />
              <div class="d-flex gap-2 w-100 justify-content-between bg-color">
                <div>
                  <h6 class="mb-0">REACT</h6>
                  <p class="mb-0 opacity-75">
                    Building fast, scalable, and modular web applications with a
                    powerful JavaScript library.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
