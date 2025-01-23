import React, { useRef, useEffect, useState } from "react";
import Map from "./Heropage/map.jsx";
import ButtonHeader from "./Navbar/buttonHeader.jsx";
import Footer from "./footer.jsx";
import ProjectsNew from "./ProjectsNew.jsx";
import NewContact from "./newContact.jsx";
import AboutMe from "./AboutMe/aboutMe.jsx";

function App() {
    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }
    }, []);
 
    return (
        <div className="map-container">
            <Map target={"aboutMe"} headerHeight={headerHeight}/>
            <ButtonHeader />
            <AboutMe />
            <ProjectsNew />
            <NewContact />
            <Footer />
        </div>
    );
}

export default App;
