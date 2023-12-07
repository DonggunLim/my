import CloseIcon from "../Icons/CloseIcon";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function ProjectDialog({ children, onClose }: Props) {
  return (
    <section
      className="fixed top-0 left-0 flex flex-col justify-center items-center w-full h-full z-50 bg-neutral-900/70 "
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <button
        className="fixed top-0 right-0 p-8 text-white"
        onClick={() => onClose()}
      >
        <CloseIcon />
      </button>
      <div className="bg-white w-3/5 h-5/6 max-w-7xl p-8 rounded-md">
        {children}
      </div>
    </section>
  );
}
