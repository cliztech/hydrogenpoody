interface Props {
  label: string;
  href: string;
}

export function RoomCTA({label, href}: Props) {
  return (
    <a
      href={href}
      className="inline-block px-6 py-3 bg-[var(--p-mango)] text-white rounded-full shadow hover:scale-105 transition-transform"
    >
      {label}
    </a>
  );
}
