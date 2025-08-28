import type { ReactNode } from "react";

export function Tabs({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export function TabList({ children }: { children: ReactNode }) {
  return <div className="flex gap-2">{children}</div>;
}

export function Tab({
  children,
  index,
  active,
  setIndex,
}: {
  children: ReactNode;
  index: number;
  active: number;
  setIndex: (i: number) => void;
}) {
  const isActive = index === active;
  return (
    <button
      className={`rounded-2xl px-4 py-2 ${isActive ? "bg-blue-500 text-white" : "bg-gray-200"}`}
      onClick={() => setIndex(index)}
    >
      {children}
    </button>
  );
}

export function TabPanels({
  children,
  active,
}: {
  children: ReactNode[];
  active: number;
}) {
  return <div>{children[active]}</div>;
}

export function TabPanel({ children }: { children: ReactNode }) {
  return <div className="p-4">{children}</div>;
}
