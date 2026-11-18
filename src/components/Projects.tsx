import { content } from '../content'
import { ArrowUpRightIcon } from './icons'

const pad = (value: number) => String(value).padStart(2, '0')

export default function Projects() {
  const total = content.projects.length

  return (
    <section id="work" className="section work">
      <div className="wrap">
        <header className="section-head" data-reveal>
          <p className="label">
            Selected work / {pad(total)} {total === 1 ? 'project' : 'projects'}
          </p>
          <div className="section-head__row">
            <h2 className="section-title">
              Things I&apos;ve<br />
              helped build.
            </h2>
            <p className="section-head__note">
              One project per screen — scroll for the story, the stack and the
              links.
            </p>
          </div>
        </header>
      </div>

      <div className="chapters">
        {content.projects.map((project, index) => (
          <article
            key={project.id}
            className={`chapter${index % 2 ? ' chapter--flip' : ''}`}
            aria-labelledby={`project-${project.id}`}
          >
            <div className="wrap chapter__inner">
              <p className="chapter__meta">
                <span>
                  <span className="chapter__num">{pad(index + 1)}</span> /{' '}
                  {pad(total)}
                </span>
                {project.liveUrl ? (
                  <span className="chapter__state">
                    <span className="live-dot" aria-hidden="true" />
                    {project.liveLabel ?? 'Live'}
                  </span>
                ) : (
                  <span className="chapter__state">Open source</span>
                )}
              </p>

              <div className="chapter__grid">
                <div className="chapter__body" data-reveal>
                  <h3
                    className="chapter__title"
                    id={`project-${project.id}`}
                  >
                    {project.title}
                  </h3>
                  <p className="chapter__desc">{project.description}</p>

                  <div className="chapter__links">
                    {project.liveUrl && (
                      <a
                        className="btn btn--solid"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.liveLabel ?? 'Visit the live site'} — ${project.title}`}
                      >
                        {project.liveLabel ?? 'Visit live site'}
                        <ArrowUpRightIcon className="icon icon--sm" />
                      </a>
                    )}
                    <a
                      className="btn"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View the code for ${project.title}`}
                    >
                      View code
                      <ArrowUpRightIcon className="icon icon--sm" />
                    </a>
                  </div>
                </div>

                <figure className="chapter__figure" data-reveal>
                  <div className={`chapter__plate cover--${project.id}`}>
                    {project.logo ? (
                      <img
                        src={project.logo}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        onError={(event) => {
                          event.currentTarget.style.display = 'none'
                        }}
                      />
                    ) : (
                      <HavenMock />
                    )}
                  </div>
                  <figcaption className="chapter__caption">
                    <span className="chapter__caption-label">Built with</span>
                    <span className="chapter__stack">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="wrap">
        <div className="work__more" data-reveal>
          <p>More experiments and half-finished ideas live on GitHub.</p>
          <a
            className="text-link"
            href="https://github.com/fatratra-png"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit my GitHub
            <ArrowUpRightIcon className="icon icon--xs" />
          </a>
        </div>
      </div>
    </section>
  )
}

function HavenMock() {
  return (
    <div className="api-cover" aria-hidden="true">
      <div className="api-cover__head">
        <span className="api-cover__name">haven-api</span>
        <span className="api-cover__meta">
          <span className="api-cover__dot" />
          OAS 3.0 / v1
        </span>
      </div>

      <ul className="api-cover__routes">
        <li>
          <span className="api-cover__method">GET</span>
          <code>/api/quotes/today</code>
          <span className="api-cover__code-status">200</span>
        </li>
        <li>
          <span className="api-cover__method">GET</span>
          <code>/api/journal</code>
          <span className="api-cover__code-status">200</span>
        </li>
        <li>
          <span className="api-cover__method api-cover__method--post">POST</span>
          <code>/api/journal</code>
          <span className="api-cover__code-status">201</span>
        </li>
      </ul>

      <div className="api-cover__response">
        <span className="api-cover__response-label">Response / today</span>
        <pre className="api-cover__code">
          <code>
            {'{\n  '}
            <span className="api-cover__key">&quot;quote&quot;</span>
            {': '}
            <span className="api-cover__string">
              &quot;Rest is part of the work.&quot;
            </span>
            {',\n  '}
            <span className="api-cover__key">&quot;mood&quot;</span>
            {': '}
            <span className="api-cover__string">&quot;calm&quot;</span>
            {'\n}'}
          </code>
        </pre>
      </div>
    </div>
  )
}
