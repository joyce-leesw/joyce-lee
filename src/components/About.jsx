import Lottie from 'lottie-react';
import { ABOUT } from '../data';
import Section from './Section';
import joyceAnimation from '../animations/joyce-animation.json';
import '../styles/About.css';

export default function About() {
  const highlightText = (text) => {
    const parts = text.split(/(\*[^*]+\*|<a[^>]*>.*?<\/a>)/g);
    return parts.map((part, index) => {
      if (part.startsWith('*') && part.endsWith('*')) {
        const highlightedText = part.slice(1, -1);
        return (
          <span key={index} className="highlight">
            {highlightedText}
          </span>
        );
      }

      const linkMatch = part.match(
        /<a href="([^"]+)" class="highlight hidden-link">(.*?)<\/a>/,
      );
      if (linkMatch) {
        const url = linkMatch[1];
        const linkText = linkMatch[2];
        return (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="highlight hidden-link"
          >
            {linkText}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <Section id="about" title="About">
      <div className="content-wrapper">
        <div className="content">
          {ABOUT.split('\n\n').map((paragraph, index) => (
            <p key={index}>{highlightText(paragraph)}</p>
          ))}
        </div>
        <Lottie
          animationData={joyceAnimation}
          loop={true}
          style={{ height: 300, width: 300 }}
        />
      </div>
    </Section>
  );
}
