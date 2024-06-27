import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "../styles/Techstack.css"
import "../styles/App.css"

function Techstack() {
    return (
        <>
        <Navbar />
        <div className="techstack">
      <h3>Tech stack</h3>
      <hr/>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
              aria-expanded="true" aria-controls="collapseOne">
              Frontend
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="row">
                <div className="col-4">
                  <div className="list-group" id="list-tab" role="tablist">
                    <a className="list-group-item list-group-item-action active" id="list-JS-list" data-bs-toggle="list"
                      href="#list-JS" role="tab" aria-controls="list-JS">JavaScript</a>
                    <a className="list-group-item list-group-item-action" id="list-HTML-list" data-bs-toggle="list"
                      href="#list-HTML" role="tab" aria-controls="list-HTML">HTML</a>
                    <a className="list-group-item list-group-item-action" id="list-CSS-list" data-bs-toggle="list"
                      href="#list-CSS" role="tab" aria-controls="list-CSS">CSS</a>
                    <a className="list-group-item list-group-item-action" id="list-react-list" data-bs-toggle="list"
                      href="#list-react" role="tab" aria-controls="list-react">React</a>
                  </div>
                </div>
                <div className="col-8">
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="list-JS" role="tabpanel" aria-labelledby="list-JS-list">
                      <p>Working with objects, classNamees, arrays etc.</p>
                      <p>
                        Using vanilla JS to build multiple page websites, make
                        simple games and solve katas;
                      </p>
                      <p>
                        Doing DOM as well as JS in combination with frameworks
                      </p>
                      <p>Getting to know TypeScript and it's differences</p>
                    </div>
                    <div className="tab-pane fade" id="list-HTML" role="tabpanel" aria-labelledby="list-HTML-list">
                      <p>
                        Structuring website content into logical and transparent
                        parts
                      </p>
                      <p>Using HTML correctly and userfriendly</p>
                    </div>
                    <div className="tab-pane fade" id="list-CSS" role="tabpanel" aria-labelledby="list-CSS-list">
                      <p>Building userfriendly, stylish, creative GUI</p>
                      <p>Responsive web design</p>
                      <p>Creating inovative and pleasing designs</p>
                    </div>
                    <div className="tab-pane fade" id="list-react" role="tabpanel" aria-labelledby="list-react-list">
                      <p>Making complex single page apps</p>
                      <p>
                        Dealing with websites that require a lot of components
                      </p>
                      <p>Setting up a flexible and fast environment</p>
                      <p>Working with Create React App as well as Vite</p>
                    </div>

                    <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Backend
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="row">
                <div className="col-4">
                  <div className="list-group" id="list-tab" role="tablist">
                    <a className="list-group-item list-group-item-action" id="list-node-list" data-bs-toggle="list"
                      href="#list-node" role="tab" aria-controls="list-node">NodeJS</a>
                    <a className="list-group-item list-group-item-action" id="list-python-list" data-bs-toggle="list"
                      href="#list-python" role="tab" aria-controls="list-python">Python</a>
                    <a className="list-group-item list-group-item-action" id="list-golang-list" data-bs-toggle="list"
                      href="#list-golang" role="tab" aria-controls="list-golang">Golang</a>
                    <a className="list-group-item list-group-item-action" id="list-c-list" data-bs-toggle="list"
                      href="#list-c" role="tab" aria-controls="list-c">C</a>
                  </div>
                </div>
                <div className="col-8">
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show" id="list-node" role="tabpanel" aria-labelledby="list-node-list">
                      <p>Building backend using JS</p>
                      <p>Connecting the servers to databases</p>
                      <p>Handling routing, authentication etc.</p>
                      <p>Using ExpressJS</p>
                    </div>
                    <div className="tab-pane fade" id="list-python" role="tabpanel" aria-labelledby="list-python-list">
                      <p>Using lists, dictionaries</p>
                      <p>Practicing object-oriented programming</p>
                      <p>Comparing language syntax and features</p>
                    </div>
                    <div className="tab-pane fade" id="list-golang" role="tabpanel" aria-labelledby="list-golang-list">
                      <p>
                        Working with interfaces, structures, arrays, slices,
                        maps, routines, channels etc.
                      </p>

                      <p>Unit testing</p>
                      <p>Building backend servers</p>
                    </div>
                    <div className="tab-pane fade" id="list-c" role="tabpanel" aria-labelledby="list-c-list">
                      <p>
                        Working with arrays, structures, linked lists, hash
                        tables, tries, queues, stacks
                      </p>
                      <p>Manipulating computer memory</p>
                      <p>Writing complex algorithms</p>
                    </div>

                    <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Databases
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="row">
                <div className="col-4">
                  <div className="list-group" id="list-tab" role="tablist">
                    <a className="list-group-item list-group-item-action" id="list-mongo-list" data-bs-toggle="list"
                      href="#list-mongo" role="tab" aria-controls="list-mongo">MongoDB</a>
                    <a className="list-group-item list-group-item-action" id="list-sql-list" data-bs-toggle="list"
                      href="#list-sql" role="tab" aria-controls="list-sql">SQLite</a>
                  </div>
                </div>
                <div className="col-8">
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show" id="list-mongo" role="tabpanel" aria-labelledby="list-mongo-list">
                      <p>Making, understanding and changing databases</p>
                      <p>CRUD operations</p>
                    </div>
                    <div className="tab-pane fade" id="list-sql" role="tabpanel" aria-labelledby="list-sql-list">
                      <p>Making, understanding and changing databases</p>
                      <p>CRUD operations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Other
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <ul className="list-group">
                <li className="list-group-item">Docker</li>
                <li className="list-group-item">Flask</li>
                <li className="list-group-item">Git</li>
                <li className="list-group-item">Github</li>
                <li className="list-group-item">VS Code</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
        <Footer />
        </>
    )

}

export default Techstack