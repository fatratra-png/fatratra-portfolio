import { content } from '../content'
import { ArrowUpRightIcon } from './icons'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="wrap about__grid">
        <div className="about__rail" data-reveal>
          <p className="label">About</p>
          <figure className="about__stamp">
            <img src="/fatratra.png" alt="" aria-hidden="true" loading="lazy" />
          </figure>
        </div>

        <div className="about__body">
          <h2 className="section-title" data-reveal>
            Quiet systems.<br />
            <span className="mark">Loud</span> interfaces.
          </h2>

          <div className="about__text" data-reveal style={{ transitionDelay: '80ms' }}>
            {content.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="facts" data-reveal style={{ transitionDelay: '160ms' }}>
            <div>
              <dt>Based</dt>
              <dd>{content.location}</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Backend and mobile</dd>
            </div>
            <div>
              <dt>Learning</dt>
              <dd>DevOps &amp; mobile</dd>
            </div>
            <div>
              <dt>Inbox</dt>
              <dd>
                <a className="text-link" href={`mailto:${content.email}`}>
                  {content.email}
                  <ArrowUpRightIcon className="icon icon--xs" />
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
