import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/App.css";

function Homepage() {
  const [open, setOpen] = useState(false);
  
  function hide(event) {
    
    let parent = event.target.parentElement
    let grandparent = parent.parentElement
    grandparent.style.visibility = 'hidden'
  }

  function show(event) {
    let parent = event.target.parentElement
    let grandparent = parent.parentElement
    let modal = grandparent.querySelector(".mod")
    modal.style.visibility = 'visible'
  }

  return (
    <>
      <div className="c">
        <div className="left">
          <div className="fixed">
            <img
              src="https://i.ibb.co/xsznynR/profile.jpg"
              alt="profile picture"
            />
            <div id="contact">
              <span>Zohra Boukhatem</span>
              <span>Fullstack developer</span>
              <span>Mainz, Germany</span>
            </div>
          </div>
        </div>

        <section className="herosection">
          <Navbar />
          <header>
            <h1>Zohra Boukhatem</h1>
            <h3>Fullstack developer</h3>
          </header>

          <div className="portfolio">
            <h3>Portfolio</h3>
            <hr />
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card">
                  <img
                    src="https://i.ibb.co/QrbTCG1/what-now.png"
                    className="card-img-top"
                    alt="homepage-screenshot"
                  />
                  <div className="card-body">
                    <button className="button" onClick={show}>
                      <i className="card-title">What now?</i>
                      <hr />
                      <i className="card-text">
                        What now? is an interactive news portal in which users
                        can write news snippets, edit and delete posts, as well
                        as comment and like.{" "}
                      </i>
                    </button>

                      <div className="mod">
                        <div className="modal-content">
                          <p>Leave the page?</p>
                          <a href="https://what-now-news.netlify.app/">Yes</a>
                          <button onClick={hide}>No</button>
                        </div>
                      </div>

                    <div className="card-footer">
                      <a href="https://github.com/orgs/CrisZohra/repositories">
                        Repositories
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    src="https://i.ibb.co/tPnZWHH/shopping-app.png"
                    className="card-img-top"
                    alt="homepage-screenshot"
                  />
                  <div className="card-body">
                    <button className="button" onClick={show}>
                      <i className="card-title">Shopping cart</i>
                      <hr />
                      <i className="card-text">
                        {" "}
                        This website is a frontend TypeScript react app; a
                        shopping cart app that uses local storage.
                      </i>
                    </button>
                      <div className="mod">
                        <div className="modal-content">
                          <p>Leave the page?</p>
                          <a href="https://shop-and-cart-app.netlify.app/">
                            Yes
                          </a>
                          <button onClick={hide}>No</button>
                        </div>
                      </div>
                    <div className="card-footer">
                      <a href="https://github.com/ZohraBoukhatem/shopping-cart">
                        Repositories
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    src="https://i.ibb.co/41j8HJV/dragon-pong.png"
                    className="card-img-top"
                    alt="homepage-screenshot"
                  />
                  <div className="card-body">
                    <button className="button" onClick={show}>
                      <i className="card-title">Dragon Pong</i>
                      <hr />
                      <i className="card-text">
                        A this simple "tennis like" game with two players and a
                        (dragon)ball. The goal is to protect the wall behind you
                        and defeat your opponent by making the opponent miss the
                        ball. It is played with one keyboard.
                      </i>
                    </button>
                      <div className="mod">
                        <div className="modal-content">
                          <p>Leave the page?</p>
                          <a href="https://zohraboukhatem.github.io/dragon-pong/">
                            Yes
                          </a>
                          <button onClick={hide}>No</button>
                        </div>
                      </div>
                    <div className="card-footer">
                      <a href="https://github.com/ZohraBoukhatem/dragon-pong">
                        Repositories
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    src="https://i.ibb.co/CsDF2mY/aniki.png"
                    className="card-img-top"
                    alt="homepage-screenshot"
                  />
                  <div className="card-body">
                    <button className="button" onClick={show}>
                      <i className="card-title">Aniki</i>
                      <hr />
                      <i className="card-text">
                        "Aniki" is an anime and manga list website, a forum of
                        sorts, in which users can access information of
                        different anime and manga, review them and modify
                        different preference lists. Unauthenticated users are
                        unable to comment or add entries to their preference
                        lists, but they can access and anime information.
                      </i>
                    </button>
                      <div className="mod">
                        <div className="modal-content">
                          <p> Leave the page? </p>
                          <a href="https://aniki-app.netlify.app/">Yes</a>
                          <button onClick={hide}>No</button>
                        </div>
                      </div>
                 
                    <div className="card-footer">
                      <a href="https://github.com/orgs/Anikiorg/repositories">
                        Repositories
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about">
            <h3>About me</h3>
            <hr />
            <h6>Who am I?</h6>
            <p>
              I am a bootcamp graduate, a career changer and seeking
              opportunities. Recently, I have found my passion for programming,
              and I'm furthering my knowledge every day, hoping to soon enter a
              workplace in the field. On one hand, I think of myself as
              level-headed, calm, open-minded and humorous. On the other, a
              project or task can make me into a serious, persistent, dedicated
              person. Both of those moods are needed to further progress, in my
              opinion.
            </p>
            <h6>What do I bring to the table?</h6>
            <p>
              {" "}
              Through years of teaching, I have learned how to get complicated
              things across to people in a simple yet informative way. This
              means I had to dissect the problem in an intrapersonal way; trying
              to understand it fully, in its entirety. In my opinion, that makes
              me a programmer with a good mindset. Through my study of
              humanities, I have also learned how to debate, how to structure
              information, order it by relevance and present it. This makes me
              fit into a company environment, and understand its intricacies.
              Working in retail has given me the opportunity to practice my
              communication skills, teamwork, time management, and most
              importantly - how to have patience!{" "}
            </p>
            <h6>What am I looking for?</h6>
            <p>
              {" "}
              I am looking for a company (already established or starting out)
              to take me under their wing. An employer willing to further my
              knowledge and experience in exchange for my dedicated and
              motivated work. Front-end, back-end or full-stack - all options
              are perfectly fine by me. I am currently based in Mainz, Germany,
              but think of the world as my oyster. I am also interested in any
              type of work (on-site, remote, hybrid).{" "}
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
