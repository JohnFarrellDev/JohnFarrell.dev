import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import styles from './SocialLinks.module.css'

const data = [
  {
    id: 1,
    icon: <FaGithubSquare aria-label="link to github profile" />,
    url: 'https://www.github.com/JohnFarrellDev/',
  },
  {
    id: 2,
    icon: <FaLinkedin aria-label="link to github profile" />,
    url: 'https://linkedin.com/in/johnfarrelldev',
  },
  {
    id: 3,
    icon: <FaTwitterSquare aria-label="link to twitter profile" />,
    url: 'https://twitter.com/JohnFar55526330',
  },
]

interface LinksProps {
  styleLinks?: string
}

const Links = ({ styleLinks }: LinksProps) => {
  return (
    <>
      {data.map((link) => {
        return (
          <li key={link.id}>
            <a
              href={link.url}
              className={
                styleLinks
                  ? `${styles.socialLink} ${styleLinks}`
                  : styles.socialLink
              }
            >
              {link.icon}
            </a>
          </li>
        )
      })}
    </>
  )
}

interface SocialLinksProps {
  styleClass?: string
  styleLinks?: string
}

export const SocialLinks = ({ styleClass, styleLinks }: SocialLinksProps) => {
  return (
    <ul className={`${styles.socialLinks} ${styleClass || ''}`}>
      <Links styleLinks={styleLinks} />
    </ul>
  )
}
