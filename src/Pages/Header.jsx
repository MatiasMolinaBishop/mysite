import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <div class='links-style'>
                <Link className="link-color-about" to={'/mysite/#/project'}>P</Link>
                <a className="link-color-about" href="/#/project">Projects</a>
                <a className="link-color-about" href="/mysite/">About</a>
                <a className="link-color-about" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1nw_oA2NyTq69CwmaHIMQSzdyYYQvgkOl/view?usp=share_link">Resume</a>
            </div>
            <div className="top-container">
                <img className="top-cloud" src="CSS/Images/cloud.png" alt="me" />
                <h1 className="text-larger h1-about-color">Hi I'm Matias</h1>
                <p className='p-color p-size'>A fullstack web developer</p>
                <img className="low-cloud" src="CSS/Images/cloud.png" alt="me" />
                <img className="mountain-img" src="CSS/Images/mountain.png" alt="me" />
            </div>

        </div>
    )
}

export default Header