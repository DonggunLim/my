import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Props = {
  children: React.ReactNode;
};

export default function ProjectCarousel({ children }: Props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 375 },
      items: 1,
    },
  };

  return (
    <Carousel className="w-full" responsive={responsive}>
      {children}
    </Carousel>
  );
}
