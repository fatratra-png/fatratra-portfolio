import { content } from '../content'
import LocalTime from './LocalTime'
import { ArrowDownIcon, ArrowUpRightIcon, BoltIcon } from './icons'

function BoltBadge() {
  return (
    <div className="badge" aria-hidden="true">
      <svg className="badge__ring" viewBox="0 0 200 200">
        <defs>
          <path
            id="badge-ring"
            d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
          />
        </defs>
        <text>
          <textPath
            href="#badge-ring"
            startOffset="0"
            textLength="480"
            lengthAdjust="spacing"
          >
            BACKEND DEVELOPER / MOBILE DEVELOPER / DEVOPS /
          </textPath>
        </text>
      </svg>
      <span className="badge__core">
        <BoltIcon className="badge__bolt" />
      </span>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero__wrap">
        <div className="hero__meta">
          <p>{content.name}</p>
          <p>Portfolio / 2026</p>
        </div>

        <div className="hero__grid">
          <div className="hero__main">
            <h1 className="hero__title">
              {content.shortName.toLowerCase()}
              <span className="hero__dot">.</span>
            </h1>
            <p className="hero__surname">Rafanomezantsoa</p>

            <div className="hero__intro">
              <p className="hero__role">{content.role}</p>
              <p className="hero__lede">{content.lede}</p>
            </div>

            <div className="hero__actions">
              <a className="btn btn--solid" href="#work">
                See selected work
                <ArrowDownIcon className="icon icon--sm" />
              </a>
              <a className="btn" href={`mailto:${content.email}`}>
                Email me
                <ArrowUpRightIcon className="icon icon--sm" />
              </a>
            </div>
          </div>

          <aside className="hero__poster">
            <BoltIcon className="hero__watermark" />
            <BoltBadge />
            <div className="hero__poster-foot">
              <p className="hero__tagline">{content.tagline}</p>
              <p className="hero__poster-meta">
                {content.location}
                <br />
                Portfolio / 2026
              </p>
            </div>
          </aside>
        </div>

        <div className="hero__foot">
          <a className="hero__scroll" href="#about">
            Scroll to explore
            <ArrowDownIcon className="icon icon--sm" />
          </a>

          <dl className="hero__facts">
            <div>
              <dt>Based in</dt>
              <dd>Antananarivo, MG</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Backend + Mobile</dd>
            </div>
            <div>
              <dt>Local time</dt>
              <dd>
                <LocalTime />
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
