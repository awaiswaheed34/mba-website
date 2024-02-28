const FaqItem = ({ question, answer, isLastItem }) => {
    return (
        <details className={`p-6 ${isLastItem ? '' : 'border-b-2'} border-gray-500`}>
            <summary className="cursor-pointer text-lg font-semibold">
                {question}
            </summary>
            <p className="mt-2 text-gray-600">{answer}</p>
        </details>
    );
};

export default FaqItem;
