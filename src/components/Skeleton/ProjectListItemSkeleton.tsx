type Props = {
  length?: number;
};
export default function ProjectListItemSkeleton({ length = 1 }: Props) {
  return Array.from({ length }).map((_, index) => (
    <li key={index} className="animate-pulse flex gap-x-4">
      <div className="w-1/3 flex-shrink-0 h-[120px] bg-neutral-400/20 rounded-md"></div>
      <div className="w-full ml-2 space-y-2">
        <div className="bg-neutral-400/20 w-32 h-7 rounded-full"></div>
        <div className="bg-neutral-400/20 w-full h-3 rounded-full"></div>
        <div className="bg-neutral-400/20 w-full h-3 rounded-full"></div>
        <div className="bg-neutral-400/20 w-full h-3 rounded-full"></div>
        <div className="flex gap-x-2 mt-2">
          <div className="w-14 h-5 bg-neutral-400/20 rounded-full"></div>
          <div className="w-14 h-5 bg-neutral-400/20 rounded-full"></div>
          <div className="w-14 h-5 bg-neutral-400/20 rounded-full"></div>
        </div>
      </div>
    </li>
  ));
}
