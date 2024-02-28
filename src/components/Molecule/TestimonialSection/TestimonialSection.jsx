
import TestimonialItem from "../../Compound/TestimonialItems/TestimonialItems";

const TestimonialsSection = ({ testimonials }) => {
    return (
        <section className="flex justify-center items-center mx-auto px-6 py-12 mb-8" id="testimonials">
            <div className="w-4/5">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Don’t take our word for it…
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialItem
                            key={index}
                            image={testimonial.image}
                            name={testimonial.name}
                            rating={testimonial.rating}
                            review={testimonial.review}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};


export default TestimonialsSection; 