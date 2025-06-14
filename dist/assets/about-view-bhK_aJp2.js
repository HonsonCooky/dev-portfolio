import { _ as d, c as u, a as n, b as i, t as p, w as c, A as f, u as t, I as o, o as m } from './index-EEX18e4P.js'
const g = '/imgs/example-photo.png',
  y = { class: 'page' },
  h = { id: 'about-me-dialog', class: 'info-section' },
  v = { id: 'education', class: 'info-section' },
  b = { id: 'transcripts', class: 'info-section' },
  w = {
    __name: 'about-view',
    setup(x) {
      function a() {
        return ((new Date() - new Date('2021/08/01')) / (1e3 * 60 * 60 * 24 * 365)).toFixed(2)
      }
      function s(r) {
        window.open(r, '_blank')
      }
      return (r, e) => (
        m(),
        u('section', y, [
          n('div', h, [
            e[3] || (e[3] = n('h1', null, 'Overview', -1)),
            e[4] ||
              (e[4] = n(
                'p',
                null,
                ' Growing up in a world filled with music and performing, my early years were shaped by rhythm and stage presence. While the arts nurtured my creativity, it was the intricate logic of digital technologies that ultimately captured my curiosity. ',
                -1,
              )),
            e[5] ||
              (e[5] = n(
                'p',
                null,
                " With a strong foundation in calculus and a passion for creative expression through photography and theatre, I discovered programming - an elegant fusion of precision and artistry. It's a discipline that, much like music, follows structure yet allows for boundless innovation. Today, I've traded compositions for code, developing solutions that balance efficiency, structure, and long-term viability. Whether refining algorithms for sustained performance or engineering systems built to endure, I thrive on transforming complex theories into practical, resilient applications. ",
                -1,
              )),
            n(
              'p',
              null,
              ' As a Software Engineer with ' +
                p(a()) +
                ' years of industry experience, I currently specialize in TypeScript and C# development, complemented by a broad array of integration technologies. My fascination lies in understanding software at its most fundamental levels, where hardware and code intersect. I am eager to deepen my expertise in engineering highly specialized, efficient solutions that require a comprehensive understanding of the hardware they operate upon. ',
              1,
            ),
            e[6] ||
              (e[6] = n(
                'p',
                null,
                ' Beyond technical expertise, my background in musical theatre has honed my ability to communicate, collaborate, and present effectively. I bring a unique blend of creativity and precision to every project, fostering an environment of technical excellence and innovation. Ready to build something remarkable? Let’s orchestrate solutions together. ',
                -1,
              )),
            i(
              f,
              { id: 'showcase' },
              {
                default: c(
                  () =>
                    e[2] ||
                    (e[2] = [
                      n('img', { alt: 'photography', src: g }, null, -1),
                      n('code', null, "Harrison's Photography - Air Show | 2017", -1),
                    ]),
                ),
                _: 1,
              },
            ),
          ]),
          n('div', v, [
            e[10] || (e[10] = n('h1', null, 'Education', -1)),
            e[11] ||
              (e[11] = n(
                'hgroup',
                null,
                [
                  n('h2', null, 'Bachelor of Engineering'),
                  n('h2', null, 'with First Class Honors in Software Engineering'),
                ],
                -1,
              )),
            e[12] || (e[12] = n('p', null, '+ Specialization in Networked Applications.', -1)),
            n('div', null, [
              e[9] || (e[9] = n('h3', null, 'Victoria University', -1)),
              n('div', null, [
                i(t(o), { icon: 'mdi:calendar' }),
                e[7] || (e[7] = n('span', null, 'Feb 2018 - Nov 2021', -1)),
              ]),
              n('div', null, [
                i(t(o), { icon: 'mdi:location' }),
                e[8] || (e[8] = n('span', null, 'Wellington, NZ', -1)),
              ]),
            ]),
          ]),
          n('div', b, [
            e[15] || (e[15] = n('h1', null, 'Academic Transcripts', -1)),
            n('div', null, [
              n('button', { onClick: e[0] || (e[0] = (l) => s('/docs/HarrisonCookAcademicRecordMBC.pdf')) }, [
                i(t(o), { inline: !0, icon: 'mdi:file-pdf-box' }),
                e[13] || (e[13] = n('span', null, "Marlborough Boys' College", -1)),
              ]),
              n('button', { onClick: e[1] || (e[1] = (l) => s('/docs/HarrisonCookAcademicRecordVIC.pdf')) }, [
                i(t(o), { inline: !0, icon: 'mdi:file-pdf-box' }),
                e[14] || (e[14] = n('span', null, 'Victoria University', -1)),
              ]),
            ]),
          ]),
        ])
      )
    },
  },
  C = d(w, [['__scopeId', 'data-v-b77be136']])
export { C as default }
