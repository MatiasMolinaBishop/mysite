import HeaderProjects from "./HeaderProjects";
import Project from "./Project";
import Footer from "../Pages/Footer";


function MainProjects() {
    return (
        <div>
            <HeaderProjects></HeaderProjects>
            <Project link={"https://steady-shortbread-63baac.netlify.app/"} color={'#2155CD'} src="CSS/Images/WeLoveBoards.png" name={"We Love Boards"} content1={""} content2={"Fullstack with RESTful API developed with ReactJS, Express.js, MongoDB & Express. We Love Boards is a social platform for people who want to network and connect with others who share their passion for baord sports Skate, Surf or Snowboard. "} />
            <Project link={"https://matiasmolinabishop.github.io/kanban-board/"} color={'#42464e'} src="CSS/Images/kanban.png" name={"Kanban Board"} content1={""} content2={"Frontend web application which uses local storage to save users data. Users can create, drag, edit and delete items. The code was written in plain vanilla javascript with DOM manipulation."} />
            <Project link={"https://github.com/MatiasMolinaBishop/Project2"} color={'#2155CD'} src="CSS/Images/spotyourspot.png" name={"Spot Your Spot"} content1={""} content2={"Fullstack web application developed with JavaScript, DOM manipulation, NodeJS, Express.js, Handlebars & MongoDB. This platform helps users to connect with likeminded individuals who share the same passions (Surfing & Climbing). Users can share their favorite locations for practicing sports. These locations are shared on a main feed and map for other users to discover"} />
            <Project link={"https://clinquant-zuccutto-2f2709.netlify.app/"} color={'#42464e'} src="CSS/Images/logisticmap.png" name={"Logistic Centers Map 👨‍💻"} content1={""} content2={"This frontend web application built with React & React Router. The user is able to search through different warehouse locations in Spain. The app shows an interactive map where the user can request information about the warehouse of their choosing. This information is then displayed on the users profile page and represented on a graphical interface"} />
            <Project link={"https://matiasmolinabishop.github.io/Upload-Transform-Photo/"} color={'#2155CD'} src="CSS/Images/robots.png" name={"Make Them Vintage"} content1={""} content2={"This small web app allows users / clients to upload a photo. This photo is then transformed into black & white changing its gray scale. Users are then able to download the transformed photo. Built with React using hooks (useState, useEffect & useReducer). NOTE - Application stores uploaded images into claudinary. This is a test application and storage is limited"} />
            <Project link={"https://matiasmolinabishop.github.io/World-Fighter-2.0-GAME/idex.html"} color={'#42464e'} src="CSS/Images/wordlfighter.png" name={"World Fighter 2.0"} content1={""} content2={"Arcade style 2D video game developed with canvas & DOM manipulation / JavaScript. This game features many of the all time favorite anime characters as they fight across different worlds to try and stop our main character form collecting dragon balls. As the main character you can select between 4 different worlds to play in, move in all directions and throw powers to kill your enemies"} />
            <Project link={"https://github.com/projectmarcobravo/project-3-frontend"} color={'#2155CD'} src="CSS/Images/harmpney.png" name={"Harmoney"} content1={""} content2={"Fullstack RESTful API developed with ReactJS, Express.js, MongoDB & Postman. Social media specifically built for musicians. Users can create an account with an encrypted password and join the Harmoney community. As a user you can search for or advertise music lessons, buy or sell used instruments, create or participate in music events and easily share your content!"} />
            <Footer></Footer>
        </div>
    )
}
export default MainProjects