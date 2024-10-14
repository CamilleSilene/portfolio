import { useEffect, useState } from "react";
import AboutMe from "../components/about/AboutMe";
import Project from "../components/project/Projects";
function Home( ) {

    
    const [stars, setStars] = useState([]);
    useEffect(() => {
        function buildStars( ) {
            let stars = []
            for( let i=0; i < 2000 ; i++ ) {
                stars[i] = `${Math.random()*2000}px ${Math.random()*2000}px #fff`
            }
            return stars;
        }
        setStars(buildStars());
      }, []);



    return (
        <div className="container-fluid">
            <AboutMe />
            <div id="stars" style={{'boxShadow': stars.join(','), ':after': stars.join(',')}}></div>
            <Project />
        </div>
    );
}

export default Home;