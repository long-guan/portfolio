import LongGuan_Resume from './assets/LongGuan_Resume.pdf';

function NameTitle() {
    return (
        <div>
            <h1>Long Guan</h1>
            <h5>Full Stack Software Engineer</h5>
            <div>
                <a className="link pointer" href={LongGuan_Resume} target="_blank" rel="noreferrer">View PDF of Resume</a>
            </div>
        </div>
    )
}

export default NameTitle;
