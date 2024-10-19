import { useEffect, useState } from "react";
import AboutMe from "../components/about/AboutMe";
import Project from "../components/project/Projects";
import Header from "../components/layout/Header";
function Home( ) {

    return (
        <>
            <Header />
            <AboutMe />
            <div id="stars"></div>
            <Project />
        </>
    );
}

export default Home;