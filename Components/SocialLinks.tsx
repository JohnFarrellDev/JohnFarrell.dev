import { cn } from './../Utilities/cn';
import { Twitter, Github, Linkedin } from 'lucide-react';

const data = [
  {
    id: 1,
    icon: <Github aria-label="link to github profile" />,
    url: 'https://www.github.com/JohnFarrellDev/',
  },
  {
    id: 2,
    icon: <Linkedin aria-label="link to github profile" />,
    url: 'https://linkedin.com/in/johnfarrelldev',
  },
  {
    id: 3,
    icon: <Twitter aria-label="link to twitter profile" />,
    url: 'https://twitter.com/JohnFar55526330',
  },
];

interface LinksProps {
  styleLinks?: string;
}

function Links({ styleLinks }: LinksProps) {
  return (
    <>
      {data.map((link) => {
        return (
          <li key={link.id}>
            <a
              href={link.url}
              className={cn('text-3xl text-grey-100 transition duration-500 hover:text-primary-500', styleLinks)}
              target="_blank"
              rel="noreferrer"
            >
              {link.icon}
            </a>
          </li>
        );
      })}
    </>
  );
}

interface SocialLinksProps {
  className?: string;
  styleLinks?: string;
}

export const SocialLinks = ({ className, styleLinks }: SocialLinksProps) => {
  return (
    <ul className={cn('mt-8 flex w-32 justify-between', className)}>
      <Links styleLinks={styleLinks} />
    </ul>
  );
};
