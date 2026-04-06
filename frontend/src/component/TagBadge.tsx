interface TagBadgeProps {
  name: string;
  href: string;
}

export default function TagBadge({ name, href }: TagBadgeProps) {
  return (
    <a className='inline-flex h-7' href={href}>
      <span className='bg-[#4d4d4d] px-2 py-1 flex items-center rounded-tl rounded-bl whitespace-nowrap'>
        {name}
      </span>
    </a>
  );
}
