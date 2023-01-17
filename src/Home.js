import { Link } from "react-router-dom";
import About from './About.js'

const Home = () => {
    return (
        <div className="maincontainer">

            {/* -----------------main title */}
            <div className="homecontents">
                <div className="mainbuttoncontainer">
                    <h2>Share your novels online</h2>
                    <h2>Discover amazing Novelists</h2>
                </div>
                <h1 className="mainheading">Sharing novels made easy</h1>
            </div>
            

            {/* -------------------meeting writers */}
            <div className="writercontents">
                <h3 className="writersinfo">
                    Meet amazing writers on our website.
                </h3>
                <img src="../images/novel_writer.jpg" alt="novel writer" />
            </div>


            {/* -------------------kindle link */}

            <div className="writercontents_two">
                <img src="./images/kindle.jpg" alt="kindle novel reader" />
                <h3 className="writersinfo">
                    Publish your novels on <a href="https://read.amazon.com/landing" target="_blank" rel="noreferrer">kindle</a> for readers to enjoy.
                </h3>
            </div>

            {/* ------------------about us */}

            <div className="aboutpage">
            <div id="Aboutidentity" className="aboutcontainer">

            <div className="aboutheading">
                <h1>About Us</h1>
            </div>

            <div className="aboutcontents">
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa dicta iusto ex sed dolorum! Minus quam similique provident, velit, deserunt totam soluta praesentium impedit obcaecati aliquam porro? Nisi, deleniti. Vero!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores autem quod deleniti doloribus amet vitae harum ratione temporibus impedit esse eaque magni, velit natus molestiae et minima est itaque.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio numquam nulla dolor laudantium, itaque placeat laboriosam nisi assumenda reiciendis id eveniet excepturi non. Qui fuga placeat dolorum iste tempora dolores.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi tempore, veniam doloribus recusandae iure autem nemo molestiae debitis. Repellendus sunt possimus incidunt ab dolor soluta deserunt dolorem explicabo quam ullam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil molestias neque possimus natus velit, dolorem fuga consequatur accusamus, id quas minima sapiente magnam est ipsum labore rem, debitis beatae mollitia.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque qui aut deleniti, soluta maxime ullam obcaecati a ad impedit, error praesentium tempora explicabo repellat velit, veritatis autem repudiandae quia debitis!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nam nisi dignissimos fugit vero quasi error ut aperiam eligendi mollitia. Quam itaque a eum. Consequatur dolore eaque qui nulla praesentium.
                </p>
            </div>
        </div>
            </div>


            {/* ----------------Getting started */}

            <div className="writercontents_editor">
                <p className="getstarted">
                    Get started.
                </p>
                <p className="startingsteps">
                    <ul>
                        <li><Link to="/signin">Create an account</Link></li>
                        <li>Write your novels and edit them with our editors</li>
                        <li><Link to="/create">Publish them</Link></li>
                    </ul>
                </p>
            </div>


            {/* -------------editor on signin */}
            <div className="editorcontainer">
                <p className="editor">
                        Get your personal editor for the first month of <Link to="/signin">SigningIn.</Link>
                </p>
            </div>
        </div>
    );
}
 
export default Home;