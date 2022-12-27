import { useState } from "react";

function Project(props) {

    const [content, setContent] = useState(false);

    function handleClick() {
        setContent(!content)
    }

    return (

        <div className="card" style={{ backgroundColor: props.color }}>
            <a target="_blank" rel="noopener noreferrer" href={props.link} >
                <img className='imgStyle' src={props.src} alt="foto" />
            </a>
            <h1 style={{ color: 'aliceblue' }}>{props.name}</h1>
            <div className="project-text">
                {!content &&
                    <p className="span-content" onClick={handleClick}>+</p>
                }
                {content &&
                    <p style={{ color: 'aliceblue' }}>{props.content1}</p>
                }
                {content &&
                    <p style={{ color: 'aliceblue' }}>{props.content2}</p>
                }
                {content &&
                    <p className="span-content" onClick={handleClick}>-</p>
                }
            </div>
        </div>

    )
}

export default Project