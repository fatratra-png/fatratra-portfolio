import { content, type SkillGroup } from '../content'

const groups: SkillGroup[] = ['Interfaces', 'Backend', 'Mobile', 'Tools']

const techIcons: Record<string, string> = {
  TypeScript: 'typescript',
  React: 'react',
  'Next.js': 'nextdotjs',
  Java: 'java',
  'Spring Boot': 'springboot',
  Express: 'express',
  'REST APIs': 'swagger',
  PostgreSQL: 'postgresql',
  Supabase: 'supabase',
  'React Native': 'react',
  Kotlin: 'kotlin',
  Dart: 'dart',
  Git: 'git',
  GitHub: 'github',
  Vercel: 'vercel',
}

export default function Skills() {
  return (
    <section id="stack" className="section stack">
      <div className="wrap">
        <header className="section-head stack__head" data-reveal>
          <p className="label">Stack</p>
          <div className="section-head__row">
            <h2 className="section-title">Tools I reach for.</h2>
            <p className="section-head__note">
              Databases, APIs, and the screens that talk to them.
            </p>
          </div>
        </header>

        <div className="stack__grid">
          {groups.map((group, index) => {
            const skills = content.skills.filter((skill) => skill.group === group)
            return (
              <div
                className="stack__group"
                key={group}
                data-reveal
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <h3 className="stack__group-title">
                  <span className="stack__dot" aria-hidden="true" />
                  {group}
                </h3>
                <ul>
                  {skills.map((skill) => (
                    <li key={skill.name}>
                      <span
                        className="stack__icon"
                        aria-hidden="true"
                        style={{
                          maskImage: `url(/assets/tech/${techIcons[skill.name]}.svg)`,
                          WebkitMaskImage: `url(/assets/tech/${techIcons[skill.name]}.svg)`,
                        }}
                      />
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
