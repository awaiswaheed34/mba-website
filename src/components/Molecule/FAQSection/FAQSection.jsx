import FaqItem from "../../Compound/FAQItems/FAQItems";

const FaqsSection = ({ faqs }) => {
    return (
        <section className="container mx-auto px-6 py-12" id="faqs">
            <h2 className="text-3xl font-bold text-center mb-8">
                Frequently Asked Questions
            </h2>
            <div className="mx-20">
                {faqs.map((faq, index) => (
                    <FaqItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isLastItem={index === faqs.length - 1}
                    />
                ))}
            </div>
        </section>
    );
};

export default FaqsSection;
