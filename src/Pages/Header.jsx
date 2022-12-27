function Header() {
    return (
        <div>
            <div class='links-style'>
                    <a class="link-color-about" href="/#/projects">Projects</a>
                    <a class="link-color-about" href="/">About</a>
                    <a class="link-color-about" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1nw_oA2NyTq69CwmaHIMQSzdyYYQvgkOl/view?usp=share_link">Resume</a>
                </div>
            <div class="top-container">
                <img class="top-cloud" src="CSS/Images/cloud.png" alt="me" />
                <h1 class="text-larger h1-about-color">Hi I'm Matias</h1>
                <p class='p-color p-size'>A fullstack web developer</p>
                <img class="low-cloud" src="CSS/Images/cloud.png" alt="me" />
                <img className="mountain-img" src="CSS/Images/mountain.png" alt="me" />
            </div>

        </div>
    )
}

export default Header