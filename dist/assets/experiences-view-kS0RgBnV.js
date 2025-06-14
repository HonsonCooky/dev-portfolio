import { _ as p, c as t, a as e, F as r, r as l, u as a, o, t as i, b as c, I as d } from './index-EEX18e4P.js'
const g = [
    {
      position: 'Software Engineer',
      company: 'Xero',
      location: 'Wellington, NZ',
      from: 'Aug 2024',
      to: 'Now',
      achievements: [
        'Proactively identified opportunities for process and code quality improvements, actively participating in discussions to propose solutions.',
        'Contributed to enhancing the quality and stability of existing legacy systems through targeted bug fixes and code enhancements.',
        'Assisted in analyzing and resolving issues within legacy applications, gaining familiarity with production challenges.',
      ],
    },
    {
      position: 'Software Engineer',
      company: 'Z Energy',
      location: 'Wellington, NZ',
      from: 'Nov 2021',
      to: 'Aug 2024',
      achievements: [
        'Fast-tracked from Graduate to Engineer within 6 months (bypassing Junior status) due to exceptional technical growth and trusted contributions, outpacing my peers.',
        'Designed, developed, and deployed full-stack, data-centric microservice solutions using TypeScript or C# in Azure.',
        'Operated within a robust development environment leveraging Infrastructure as Code (IaC) for cloud resources and adhering to rigorous practices for documented, monitored production deployments.',
      ],
    },
    {
      position: 'Software Engineer Intern',
      company: 'Raygun',
      location: 'Wellington, NZ',
      from: 'Nov 2020',
      to: 'Feb 2021',
      achievements: [
        "Designed, developed, and published a React Native NPM library, streamlining integration with Raygun's crash reporting and monitoring software.",
        'Gained hands-on experience in the full lifecycle of software library production, including development, packaging, and distribution, now applied in building internal frameworks.',
        'Transitioned from academic learning to practical industry development, collaborating in a professional software environment to deliver impactful solutions.',
      ],
    },
  ],
  m = { class: 'page' },
  f = { class: 'info-section' },
  h = { class: 'job' },
  v = { class: 'job-details' },
  y = {
    __name: 'experiences-view',
    setup(_) {
      return (w, s) => (
        o(),
        t('section', m, [
          e('div', f, [
            s[0] || (s[0] = e('h1', null, 'Experience', -1)),
            (o(!0),
            t(
              r,
              null,
              l(
                a(g),
                (n) => (
                  o(),
                  t('div', h, [
                    e('h2', null, i(n.position), 1),
                    e('div', v, [
                      e('h3', null, i(n.company), 1),
                      e('div', null, [
                        c(a(d), { icon: 'mdi:calendar' }),
                        e('span', null, i(n.from) + ' - ' + i(n.to), 1),
                      ]),
                      e('div', null, [c(a(d), { icon: 'mdi:location' }), e('span', null, i(n.location), 1)]),
                    ]),
                    e('ul', null, [
                      (o(!0),
                      t(
                        r,
                        null,
                        l(n.achievements, (u) => (o(), t('li', null, i(u), 1))),
                        256,
                      )),
                    ]),
                  ])
                ),
              ),
              256,
            )),
          ]),
        ])
      )
    },
  },
  x = p(y, [['__scopeId', 'data-v-e603e773']])
export { x as default }
