import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "../styles/Other.css"
import "../styles/App.css"

function Other() {
  return (
    <div className="c">
      <div className="left">
        <div className="fixed">
          <img src="https://i.ibb.co/xsznynR/profile.jpg" alt="profile picture"/>
            <div id="contact">
              <span>Zohra Boukhatem</span>
              <span>Fullstack developer</span>
              <span>Mainz, Germany</span>
            </div>
        </div>
      </div>

      <div className="herosection">


        <div className="right">
        <Navbar />
          <section>
            <h2>Languages</h2>
            <ul className="skill-set">
              <li>Croatian</li>
              <li>English</li>
              <li>German</li>
            </ul>
          </section>
          <section>
            <h2>Soft Skills</h2>
            <ul className="skill-set">
              <li>Outgoing</li>
              <li>Humorous</li>
              <li>Patient</li>
              <li>Straightforward</li>
              <li>Curious</li>
              <li>Versatile</li>
            </ul>
          </section>
          <section>
            <h2>Personal Interests</h2>
            <ul className="skill-set">
              <li>Softball</li>
              <li>Playing guitar and piano</li>
              <li>Conducting a choir</li>
              <li>Gaming</li>
              <li>Reading</li>
            </ul>
          </section>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Other