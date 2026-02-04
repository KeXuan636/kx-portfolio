import { Icon } from '@iconify/react';

export default function Home() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const targetPosition = aboutSection.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800;
      let start = null;

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const easeInOutCubic = (t) => {
          return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        };
        const run = easeInOutCubic(timeElapsed / duration) * distance;

        if (timeElapsed < duration) {
          window.scrollTo(0, startPosition + run);
          requestAnimationFrame(animation);
        } else {
          window.scrollTo(0, targetPosition);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <section id="home">
      <h1>
        Hello, I'm <span className="highlight-name">Ke Xuan</span>
      </h1>
      <p>A passionate designer & developer crafting beautiful digital experiences</p>

      <div className="hero-buttons">
        <a href="#portfolio" className="btn btn-primary">View My Work</a>
        <a href="#contact" className="btn btn-outline">Get In Touch</a>
      </div>

      <button className="scroll-down-btn" onClick={scrollToAbout} aria-label="Scroll to about section">
        <Icon icon="icons8:down-round" width="50" height="50" />
      </button>
    </section>
  );
}
