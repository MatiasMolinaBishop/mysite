import { Link } from "react-router-dom";

function HeaderProjects() {
    return (
        <div>
            <div class='links-style2'>
                <Link className="link-color" to='/project'>Projects</Link>
                <Link className="link-color" to='/'>About</Link>
                <a className="link-color" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1TU29gnjeq5tXBYCz9xGU999TW_tE5L1T/view?usp=share_link">Resume</a>
            </div>

            <div className="top-container2">
                <h1 className="text-larger2 h1-projects-color">My Projects</h1>
                <p className='p-color2 p-size'>Checkout my latest work</p>
                <div className="arrow-style2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="30" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default HeaderProjects