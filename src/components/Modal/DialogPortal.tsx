import { createPortal } from "react-dom";

type Props = {
  children: React.ReactNode;
};
export default function DialogPortal({ children }: Props) {
  const target = document.getElementById("portal") as Element;

  return createPortal(children, target);
}
