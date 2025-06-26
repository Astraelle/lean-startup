import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

type CarouselProps = {
  images: string[]
}


export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      perView: 5,
      spacing: 20,
    },
  })

  return (
    <div ref={sliderRef} className="keen-slider h-full overflow-hidden">
      {images.map((src, idx) => (
        <div key={idx} className="keen-slider__slide flex justify-center items-center">
          <img
            src={src}
            alt={`Slide ${idx + 1}`}
            className=''
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}