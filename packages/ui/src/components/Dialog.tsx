import type { ReactNode } from "react";
import { useState } from "react";

interface DialogProps {
  trigger: ReactNode;
  children: ReactNode;
}

export function Dialog({ trigger, children }: DialogProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <span onClick={() => setOpen(true)}>{trigger}</span>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 flex items-center justify-center bg-black/50"
          onClick={() => setOpen(false)}
        >
          <div
            className="rounded-2xl bg-white p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
}
