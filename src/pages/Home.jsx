import AboutMe from "../components/about/AboutMe";
import Project from "../components/project/Projects";

function Home( ) {
    return (
        <div className="container-fluid">
            <AboutMe />
            <Project />
        </div>
    );
}

export default Home;