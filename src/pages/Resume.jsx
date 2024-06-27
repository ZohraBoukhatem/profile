import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "../styles/Resume.css"
import '../styles/App.css'
function Resume() {
    return (
        <>
        <Navbar />

        <div className="container">
      <div className="row">

        <div className="col-md-12 col-lg-8 offset-lg-2">
          <h1>Education</h1>
          <article className="education-item">
            <i className="education-icon"><svg fill="#000000" width="40px" height="40px" viewBox="-5 0 32 32" version="1.1"
              xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>graduation-cap</title>
                <path
                d="M21.080 12.84l-8.92-3.24c-0.4-0.16-0.88-0.2-1.16-0.2-0.32 0-0.76 0.040-1.16 0.2l-8.92 3.24c-0.84 0.32-0.92 0.88-0.92 1.12s0.080 0.8 0.92 1.12l0.4 0.12v3.32c0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-2.72l1.56 0.56v3.76c0 1.64 3.84 2.44 6.44 2.44s6.44-0.76 6.44-2.44v-3.72l3.64-1.32c0.84-0.28 0.92-0.88 0.92-1.12s-0.080-0.8-0.92-1.12zM15.8 19.92c-0.48 0.32-2.28 0.96-4.76 0.96s-4.32-0.64-4.76-0.96v-2.92l3.6 1.32c0.4 0.16 0.88 0.2 1.16 0.2s0.76-0.040 1.16-0.2l3.6-1.32v2.92zM11.6 16.72c-0.28 0.12-0.88 0.12-1.16 0l-7.64-2.76 7.6-2.76c0.28-0.12 0.88-0.12 1.16 0l7.64 2.76-7.6 2.76z">
              </path>
            </g>
          </svg></i>
            <h3 className="education-date">2024</h3>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">CS50's Introduction to Computer Science</h5>
                <i>Harvard University</i>
                <p className="card-text text-muted">January - present</p>
                <div className="card-text">
                  <ul>
                    <li>
                      Week 0 - Scratch
                    </li>
                    <li>
                      Week 1 - C
                    </li>
                    <li>
                      Week 2 - Arrays
                    </li>
                    <li>
                      Week 3 - Algorithms
                    </li>
                    <li>
                      Week 4 - Memory
                    </li>
                    <li>
                      Week 5 - Data Structures
                    </li>
                    <li>
                      Week 6 - Python
                    </li>
                    <li>
                      Artificial Intelligence
                    </li>
                    <li>
                      Week 7 - SQL
                    </li>
                    <li>
                      Week 8 - HTML, CSS, JavaScript
                    </li>
                  </ul>
                  <span>
                    Practices: problem solving, with/without code, with an emphasis on correctness, design, and style
                    computational thinking, abstraction,
                    algorithms, data structures etc.
                  </span>
                </div>
              </div>
            </div>
          </article>


          <article className="education-item">
            <i className="education-icon"><svg fill="#000000" width="40px" height="40px" viewBox="-5 0 32 32" version="1.1"
              xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>graduation-cap</title>
                <path
                d="M21.080 12.84l-8.92-3.24c-0.4-0.16-0.88-0.2-1.16-0.2-0.32 0-0.76 0.040-1.16 0.2l-8.92 3.24c-0.84 0.32-0.92 0.88-0.92 1.12s0.080 0.8 0.92 1.12l0.4 0.12v3.32c0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-2.72l1.56 0.56v3.76c0 1.64 3.84 2.44 6.44 2.44s6.44-0.76 6.44-2.44v-3.72l3.64-1.32c0.84-0.28 0.92-0.88 0.92-1.12s-0.080-0.8-0.92-1.12zM15.8 19.92c-0.48 0.32-2.28 0.96-4.76 0.96s-4.32-0.64-4.76-0.96v-2.92l3.6 1.32c0.4 0.16 0.88 0.2 1.16 0.2s0.76-0.040 1.16-0.2l3.6-1.32v2.92zM11.6 16.72c-0.28 0.12-0.88 0.12-1.16 0l-7.64-2.76 7.6-2.76c0.28-0.12 0.88-0.12 1.16 0l7.64 2.76-7.6 2.76z">
              </path>
            </g>
          </svg></i>
            <h3 className="education-date">2023</h3>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Web development</h5>
                <i>Ironhack</i>
                <p className="card-text text-muted">October - December</p>
                <div className="card-text">
                  During the Ironhack bootcamp I have learned how to:
                  <ul>
                    <li>
                      develop responsive web apps using HTML5, CSS3, ReactJS
                    </li>
                    <li>
                      create database-driven applications
                    </li>
                    <li>
                      implement RESTful APIs
                    </li>
                    <li>
                      manage data in Mongo database
                    </li>
                    <li>
                      work with Git and GitHub
                    </li>
                    <li>
                      deal with intense workloads
                    </li>
                  </ul>
                  <span>
                    Practices: pair programming, individual programming, presentations, research
                  </span>
                </div>
                <div className="card-text">
                  <a className="btn btn-outline-secondary" href="https://github.com/orgs/Anikiorg/repositories">Module 3</a>
                  <a className="btn btn-outline-secondary" href="https://github.com/orgs/CrisZohra/repositories">Module
                    2</a>
                  <a className="btn btn-outline-secondary" href="https://github.com/ZohraBoukhatem/dragon-pong">Module 1</a>
                  <a className="btn btn-outline-secondary"
                    href="https://github.com/ZohraBoukhatem?tab=repositories">Labs</a>
                </div>
              </div>
            </div>
          </article>

          <article className="education-item">
            <i className="education-icon"><svg fill="#000000" width="40px" height="40px" viewBox="-5 0 32 32" version="1.1"
              xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>graduation-cap</title>
                <path
                d="M21.080 12.84l-8.92-3.24c-0.4-0.16-0.88-0.2-1.16-0.2-0.32 0-0.76 0.040-1.16 0.2l-8.92 3.24c-0.84 0.32-0.92 0.88-0.92 1.12s0.080 0.8 0.92 1.12l0.4 0.12v3.32c0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-2.72l1.56 0.56v3.76c0 1.64 3.84 2.44 6.44 2.44s6.44-0.76 6.44-2.44v-3.72l3.64-1.32c0.84-0.28 0.92-0.88 0.92-1.12s-0.080-0.8-0.92-1.12zM15.8 19.92c-0.48 0.32-2.28 0.96-4.76 0.96s-4.32-0.64-4.76-0.96v-2.92l3.6 1.32c0.4 0.16 0.88 0.2 1.16 0.2s0.76-0.040 1.16-0.2l3.6-1.32v2.92zM11.6 16.72c-0.28 0.12-0.88 0.12-1.16 0l-7.64-2.76 7.6-2.76c0.28-0.12 0.88-0.12 1.16 0l7.64 2.76-7.6 2.76z">
              </path>
            </g>
          </svg></i>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">German Cultural Studies</h5>
                <i>Faculty of Humanities Zagreb</i>
                <p className="card-text text-muted">2014 - 2022</p>
                <div className="card-text">
                  <ul>
                    <li>
                      core research in areas of general German
                      studies, with emphasis on interculturality
                    </li>
                    <li>
                      methodical and critical reflection on and
                      application of technical literature
                    </li>
                  </ul>
                  <span>
                    Practices: teaching, presentations, research
                  </span>
                </div>
              </div>
            </div>
          </article>

          <article className="education-item">
            
            <i className="education-icon"><svg fill="#000000" width="40px" height="40px" viewBox="-5 0 32 32" version="1.1"
              xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>graduation-cap</title>
                <path
                d="M21.080 12.84l-8.92-3.24c-0.4-0.16-0.88-0.2-1.16-0.2-0.32 0-0.76 0.040-1.16 0.2l-8.92 3.24c-0.84 0.32-0.92 0.88-0.92 1.12s0.080 0.8 0.92 1.12l0.4 0.12v3.32c0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-2.72l1.56 0.56v3.76c0 1.64 3.84 2.44 6.44 2.44s6.44-0.76 6.44-2.44v-3.72l3.64-1.32c0.84-0.28 0.92-0.88 0.92-1.12s-0.080-0.8-0.92-1.12zM15.8 19.92c-0.48 0.32-2.28 0.96-4.76 0.96s-4.32-0.64-4.76-0.96v-2.92l3.6 1.32c0.4 0.16 0.88 0.2 1.16 0.2s0.76-0.040 1.16-0.2l3.6-1.32v2.92zM11.6 16.72c-0.28 0.12-0.88 0.12-1.16 0l-7.64-2.76 7.6-2.76c0.28-0.12 0.88-0.12 1.16 0l7.64 2.76-7.6 2.76z">
              </path>
            </g>
          </svg></i>
       
            <h3 className="education-date">2014</h3>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Music Pedagogy</h5>
                <i> Music Academy Zagreb</i>
                <p className="card-text text-muted">2014 - 2022</p>
                <div className="card-text">
                  <ul>
                    <li>
                      understanding music as well as art in general
                    </li>
                    <li>
                      producing music and materials about music
                    </li>
                  </ul>
                  <span>
                    Practices: individual work, teamwork,
                    creative thinking, time management
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>

      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-8 offset-lg-2">
          <br />
          <h1>Work experience</h1>
          <article className="education-item">
            <i className="education-icon"><svg width="30px" height="30px" viewBox="0 0 512 512" version="1.1"
              xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>work-case</title>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Combined-Shape" fill="#000000" transform="translate(42.666667, 64.000000)">
                    <path
                    d="M277.333333,1.42108547e-14 L298.666667,21.3333333 L298.666,64 L426.666667,64 L426.666667,362.666667 L3.55271368e-14,362.666667 L3.55271368e-14,64 L128,64 L128,21.3333333 L149.333333,1.42108547e-14 L277.333333,1.42108547e-14 Z M42.6664912,220.935181 L42.6666667,320 L384,320 L384.000468,220.935097 C341.375319,233.130501 298.701692,240.759085 256.000479,243.809455 L256,277.333333 L170.666667,277.333333 L170.666323,243.809465 C127.965163,240.759108 85.2915887,233.130549 42.6664912,220.935181 Z M384,106.666667 L42.6666667,106.666667 L42.6668606,176.433085 C99.6386775,193.933257 156.507113,202.666667 213.333333,202.666667 C270.159803,202.666667 327.028489,193.933181 384.000558,176.432854 L384,106.666667 Z M256,42.6666667 L170.666667,42.6666667 L170.666667,64 L256,64 L256,42.6666667 Z">
                  </path>
                </g>
              </g>
            </g>
          </svg></i>
            <h3 className="education-date">2022</h3>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Goods service team</h5>
                <i>Galeria Kaufhof</i>
                <p className="card-text text-muted">2022 - 2023</p>
                <div className="card-text">
                  <ul>
                    <li>working with customers and their needs</li>
                    <li>
                      time efficient project planning
                    </li>
                    <li>
                      dividing and organizing workload in the team
                      for optimized effectiveness
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
          <article className="education-item">
            <i className="education-icon"><svg width="30px" height="30px" viewBox="0 0 512 512" version="1.1"
              xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <title>work-case</title>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Combined-Shape" fill="#000000" transform="translate(42.666667, 64.000000)">
                    <path
                    d="M277.333333,1.42108547e-14 L298.666667,21.3333333 L298.666,64 L426.666667,64 L426.666667,362.666667 L3.55271368e-14,362.666667 L3.55271368e-14,64 L128,64 L128,21.3333333 L149.333333,1.42108547e-14 L277.333333,1.42108547e-14 Z M42.6664912,220.935181 L42.6666667,320 L384,320 L384.000468,220.935097 C341.375319,233.130501 298.701692,240.759085 256.000479,243.809455 L256,277.333333 L170.666667,277.333333 L170.666323,243.809465 C127.965163,240.759108 85.2915887,233.130549 42.6664912,220.935181 Z M384,106.666667 L42.6666667,106.666667 L42.6668606,176.433085 C99.6386775,193.933257 156.507113,202.666667 213.333333,202.666667 C270.159803,202.666667 327.028489,193.933181 384.000558,176.432854 L384,106.666667 Z M256,42.6666667 L170.666667,42.6666667 L170.666667,64 L256,64 L256,42.6666667 Z">
                  </path>
                </g>
              </g>
            </g>
          </svg></i>
         
            <h3 className="education-date">2018</h3>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Music teacher </h5>
                <p className="card-text text-muted">2018 - 2022</p>
                <div className="card-text">
                  <ul>
                    <li>
                      sharing knowledge in a way that is
                      understandable and easy for everyone
                    </li>
                    <li>
                      managing students of different background
                      and behavior
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>

        <Footer />
        </>
    )
}

export default Resume