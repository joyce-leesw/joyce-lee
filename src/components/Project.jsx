import GitHubIcon from '../assets/github-icon';
import WebsiteIcon from '../assets/website-icon';
import '../styles/Projects.css';
import PropTypes from 'prop-types';

export default function Project({
  title,
  description,
  languages,
  websiteLink,
  githubLink,
}) {
  return (
    <section className="project">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="languages">
        {languages.map((language, index) => (
          <div className="language" key={index}>
            {language}
          </div>
        ))}
      </div>
      <div className="project-items">
        {websiteLink && (
          <a
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-website-link"
          >
            <WebsiteIcon className="project-website-icon" />
          </a>
        )}
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-github-link"
        >
          <GitHubIcon className="project-github-icon" />
        </a>
      </div>
    </section>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  languages: PropTypes.arrayOf(PropTypes.string),
  websiteLink: PropTypes.string,
  githubLink: PropTypes.string,
};

Project.defaultProps = {
  description: '',
  languages: [],
  websiteLink: '',
  githubLink: '',
};
