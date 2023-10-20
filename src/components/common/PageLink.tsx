import Link from 'next/link';

type PageLinkProps = {
  link: string;
  pageName: string;
};

export default function PageLink({ link, pageName }: PageLinkProps) {
  return (
    <Link
      className="group ml-auto flex items-center hover:text-slate-900 dark:hover:text-white"
      href={link}
    >
      To {pageName}
      <svg
        viewBox="0 0 3 6"
        className="ml-3 w-auto h-1.5 text-slate-400 overflow-visible group-hover:text-slate-600 dark:group-hover:text-slate-300"
      >
        <path
          d="M0 0L3 3L0 6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </Link>
  );
}
