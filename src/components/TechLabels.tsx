type Props = {
  techs: string[];
};

export default function TechLabels({ techs }: Props) {
  return (
    <ul className="flex gap-x-2 mt-4">
      {techs.map((tech, index) => (
        <li key={index}>
          <div className="text-sm font-semibold bg-slate-400/10  rounded-full px-3 py-1">
            {tech}
          </div>
        </li>
      ))}
    </ul>
  );
}
