type Target = "Donggun's Portfolio" | 'About' | 'Skill' | 'Project' | string;

const useAutoScroll = (target: Target, elementList: HTMLElement[]) => {
  let index: number | null = null;

  switch (target) {
    case "Donggun's Portfolio":
      index = 0;
      break;
    case 'About':
      index = 1;
      break;
    case 'Skill':
      index = 2;
      break;
    case 'Project':
      index = 3;
      break;
    default:
      throw new Error(`${target} is not case`);
  }
  elementList[index].scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

export default useAutoScroll;
