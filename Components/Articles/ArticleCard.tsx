import Link from 'next/link';
import Image from 'next/image';

interface ArticleCardProps {
  title: string;
  description?: string;
  URL: string;
  createdAt: Date;
  lastUpdatedAt?: Date;
  tags: string[];
  imageURL: string;
  imageAlt: string;
}
export function ArticleCard({ title, description, URL, tags, imageURL, imageAlt }: ArticleCardProps) {
  return (
    <li className="mx-auto max-h-[350px] w-full max-w-[800px] overflow-hidden rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105 md:max-h-[200px]">
      <Link
        href={URL}
        className="relative flex h-full flex-col text-gray-100 no-underline hover:text-gray-100 md:flex-row"
      >
        <Image
          src={imageURL}
          alt={imageAlt}
          className="h-[150px] w-full object-cover md:h-full md:w-[150px]"
          width={500}
          height={500}
        />
        <div className="flex flex-grow flex-col overflow-y-auto">
          <h3 className="p-2 text-center text-lg font-semibold md:absolute md:left-0 md:right-0 md:top-0 md:z-10">
            {title}
          </h3>
          <div className="flex flex-grow flex-col gap-2 p-2 md:pt-12">
            {description && <p className="whitespace-pre-wrap">{description}</p>}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="rounded-lg bg-gray-800 px-2 py-1 text-sm font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
}
