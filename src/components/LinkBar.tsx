import { FaGithub } from "react-icons/fa";
import { BsFileEarmarkPdfFill } from "react-icons/bs";

export default function LinkBar() {
  return (
    <ul className="flex items-center gap-x-2">
      <li>
        <a
          href="https://github.com/DonggunLim"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub (opens in anew tab)"
          title="Github"
        >
          <FaGithub className="w-6 h-6 hover:scale-125 ease-in-out duration-300" />
        </a>
      </li>
      <li>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume (opens in anew tab)"
          title="Resume"
          download="resume.pdf"
        >
          <BsFileEarmarkPdfFill className="w-6 h-6 hover:scale-125 ease-in-out duration-300" />
        </a>
      </li>
    </ul>
  );
}
