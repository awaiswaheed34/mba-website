const FaqItem = ({ question, answer }) => {
    return (
        <details className="shadow-lg rounded-lg p-6">
            <summary className="cursor-pointer text-lg font-semibold">
                {question}
            </summary>
            <p className="mt-2 text-gray-600">{answer}</p>
        </details>
    );
};


export default FaqItem;