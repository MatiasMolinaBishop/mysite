import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <div class='links-style'>
                <Link className="link-color-about" to='/project'>Projects</Link>
                <Link className="link-color-about" to='/'>About</Link>
                <a className="link-color-about" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/12npFhlG3ubOPu4IsahdK6AI_2q4NEUru/view?usp=sharing">Resume</a>
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