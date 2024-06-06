import './About.css';

const About = () => {
  return (
    <>
      <div className="about-section">
        <h1 id="about"> About Us</h1>
        <div>
          <div>
            <b>
              Hello world! We are ASA team!
            </b>
            <p>
              A group of passionate and enthusiastic junior developers who are excited about building amazing web applications and learning new technologies.
            </p>
            <p>
              Our team is dedicated to growing our skills and contributing to meaningful projects.
            </p>
            <p>
              We believe in collaboration, continuous learning, and pushing the boundaries of what we can achieve.
            </p>
          </div>
        </div>
        <div>

          <b>Foremap - A travel buddy project</b>
          <p>
            Our first project as a junior web developer, designed to showcase our skills, which we gained during our first semesters in Helsinki Business College.
          </p>
          <p>
            This project aims to create an online presence that highlights our abilities in HTML, CSS,  JavaScript, React and Symphony, while also incorporating responsive design principles to ensure the site looks great on all devices.
          </p>
        </div>
        <div>
          <b>What we learn from this collaborating project</b>
          <p>
            By completing this project, we gains hands-on experience in building a complete website from scratch.
          </p>
          <p>
            We also get to familiarize ourselves with how a fullstack website works.
          </p>
          <p>
            Our skills in using in using React and Symfony and various libraries and pakages have growned up signficaly. Also in using version control with Git and GitHub.
          </p>
          <p>
            We got to practice good teamwork practices like writing clean code, provide clean commit message, project management, create a responsive design, etc.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;