import { ReactNode } from "react";

export default function Icon({ children }: { children: ReactNode }) {
  return <div className="text-xl">{children}</div>;
}
