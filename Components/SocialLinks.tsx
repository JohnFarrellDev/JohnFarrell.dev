import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import styles from '../styles/SocialLinks.module.css'
import footerStyles from '../styles/Footer.module.css'

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
  isFooter: boolean
}

const Links = ({ isFooter }: LinksProps) => {
  return (
    <>
      {data.map((link) => {
        return (
          <li key={link.id}>
            <a
              href={link.url}
              className={`${styles.socialLink} ${
                isFooter ? footerStyles.footerSocialLink : ''
              }`}
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
  isFooter: boolean
}

export const SocialLinks = ({ styleClass, isFooter }: SocialLinksProps) => {
  return (
    <ul className={`${styles.socialLinks} ${styleClass || ''}`}>
      <Links isFooter={isFooter} />
    </ul>
  )
}
