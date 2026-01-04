import { cn } from './../Utilities/cn';
import { GitHub } from './icons/GitHub';
import { LinkedIn } from './icons/LinkedIn';
import { BlueSky } from './icons/BlueSky';

const data = [
  {
    id: 1,
    icon: <GitHub aria-label="link to github profile" width={32} height={32} />,
    url: 'https://www.github.com/JohnFarrellDev/',
  },
  {
    id: 2,
    icon: <LinkedIn aria-label="link to github profile" width={32} height={32} />,

    url: 'https://linkedin.com/in/johnfarrelldev',
  },
  {
    id: 3,
    icon: <BlueSky aria-label="link to bluesky profile" width={32} height={32} />,
    url: 'https://bsky.app/profile/johnfarrelldev.bsky.social',
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
              className={cn('inline-block text-gray-900 transition duration-500 hover:text-primary-600', styleLinks)}
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

export function SocialLinks({ className, styleLinks }: SocialLinksProps) {
  return (
    <ul className={cn('mt-8 flex justify-between', className)}>
      <Links styleLinks={styleLinks} />
    </ul>
  );
}
