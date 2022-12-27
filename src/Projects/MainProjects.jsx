import HeaderProjects from "./HeaderProjects";
import Project from "./Project";
import Footer from "../Pages/Footer";


function MainProjects(){
    return(
        <div>
            <HeaderProjects></HeaderProjects>
            <Project link={"https://github.com/MatiasMolinaBishop/Project2"} color={'#42464e'}src="/../CSS/Images/spotyourspot.png" name={"Spot Your Spot"} content1={""} content2={"Fullstack web application developed with JavaScript, DOM manipulation, NodeJS, Express.js, Handlebars & MongoDB. This platform helps users to connect with likeminded individuals who share the same passions (Surfing & Climbing). Users can share their favorite locations for practicing sports. These locations are shared on a main feed and map for other users to discover"}/>
            <Project link={"https://matiasmolinabishop.github.io/My-Notes-/"} color={'#2155CD'}src="../CSS/Images/notesapp.png" name={"My Notes 👨‍💻"} content1={""} content2={"This frontend web application built with React allows you to write down notes and it displays them as single components with a title and content description. Users can delete notes accordingly. There are other features such as the heading which renders a message depending on the current time."}/>
            <Project link={"https://matiasmolinabishop.github.io/RobotsReact/"} color={'#42464e'}src="../CSS/Images/robots.png" name={"Robot Army 🤖"} content1={""} content2={"This is a web application built with React. It communicates with an API to fetch information and render card like components. The application also has other features like a searchbar that filters the robots."}/>
            <Project link={"https://matiasmolinabishop.github.io/World-Fighter-2.0-GAME/idex.html"} color={'#2155CD'}src="../CSS/Images/wordlfighter.png" name={"World Fighter 2.0"} content1={""} content2={"Arcade style 2D video game developed with canvas & DOM manipulation / JavaScript. This game features many of the all time favorite anime characters as they fight across different worlds to try and stop our main character form collecting dragon balls. As the main character you can select between 4 different worlds to play in, move in all directions and throw powers to kill your enemies"}/>
            <Project link={"https://github.com/projectmarcobravo/project-3-frontend"} color={'#42464e'}src="../CSS/Images/harmpney.png" name={"Harmoney"} content1={""} content2={"Fullstack RESTful API developed with ReactJS, Express.js, MongoDB & Postman. Social media specifically built for musicians. Users can create an account with an encrypted password and join the Harmoney community. As a user you can search for or advertise music lessons, buy or sell used instruments, create or participate in music events and easily share your content!"}/>
            <Footer></Footer>
        </div>
    )
}
export default MainProjects