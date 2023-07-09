import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";

type TestimonialsProps = {
  testimonials: {
    text: string;
    photo: StaticImageData;
    name: string;
    job: string;
  }[];
};

const Testimonials: FC<TestimonialsProps> = ({ testimonials }) => {
  const componentRef = useRef(null);

  const [isInViewport, setIsInViewport] = useState<boolean>(false);
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) setIsInViewport(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust the threshold as needed
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInViewport) {
      setTimeout(() => {
        if (testimonials.length >= 3) {
          if (currentTestimonial < 2) setCurrentTestimonial((prev) => prev + 1);
          else setCurrentTestimonial(0);
        } else {
          if (currentTestimonial < testimonials.length - 1)
            setCurrentTestimonial((prev) => prev + 1);
          else setCurrentTestimonial(0);
        }
      }, 3000);
    }
  }, [isInViewport, currentTestimonial]);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "max-content",
          marginBottom: "90px",
        }}
      >
        {Array(testimonials.length)
          .fill(0)
          .map((_i, index) => (
            <div
              style={{
                width: `${currentTestimonial === index ? "12px" : "6px"}`,
                height: `${currentTestimonial === index ? "12px" : "6px"}`,
                backgroundColor: `${
                  currentTestimonial === index ? "#FFFFFF" : "#FFFFFF80"
                }`,
                borderRadius: "32px",
                marginLeft: `${index === 0 ? "" : "30px"}`,
                marginRight: `${index === 2 ? "" : "30px"}`,
              }}
            ></div>
          ))}
      </div>
      <div className="swiper-wrapper" ref={componentRef}>
        {testimonials[currentTestimonial] && (
          <div className="swiper-slide">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="testimonials text-center">
                  <p
                    className="current-testimonial text-3xl md:text-2xl sm:text-xl fw-600 leading-xl text-white"
                    // style={{ height: "260px" }}
                  >
                    {testimonials[currentTestimonial]?.text}
                  </p>

                  <div className="testimonials__author mt-48">
                    <div className="size-xl mx-auto mb-20">
                      <Image
                        src={
                          testimonials[currentTestimonial]
                            ?.photo as unknown as StaticImageData
                        }
                        className="client-photo"
                        priority
                      />
                    </div>

                    <h5 className="text-lg capitalize text-white fw-600">
                      {testimonials[currentTestimonial]?.name}
                    </h5>
                    <p className="capitalize text-light">
                      {testimonials[currentTestimonial]?.job}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Testimonials;
