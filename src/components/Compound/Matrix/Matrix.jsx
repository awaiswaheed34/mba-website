
function Matrix() {
    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col w-10/12">
                <div className="relative bg-white p-6">
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 flex items-center"
                    >
                        <div className="w-full border-t  border-gray-300" />
                    </div>
                    <div className="absolute inset-0 flex justify-center">
                        <div className="h-full border-r border-gray-300" />
                    </div>
                    <div className="absolute left-0 top-6 -translate-y-full transform">
                        <span className="bg-white px-2 text-sm text-gray-500">Value</span>
                    </div>
                    <div className="absolute bottom-6 right-0 -translate-x-full transform">
                        <span className="bg-white px-2 text-sm text-gray-500">Price</span>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4">
                        <div className="flex flex-col items-center justify-center">
                            <div className="bg-[#6b5de7] text-white px-4 py-2 rounded shadow">
                                <p className="font-bold">Best value-for-money</p>
                            </div>
                            <div className="mt-4 p-4 rounded shadow text-center">
                                <img src="Logo-right.png" alt="Image 5" className="w-32 h-32" />
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="mt-4 p-4 rounded shadow text-center">
                                <p className="font-semibold">MBA Coaches – the Good</p>
                                <p className="text-xs mt-2">
                                    Help in your application shouldn't be an expensive luxury...
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="mt-4 p-4 rounded shadow text-center">
                                <p className="font-semibold">
                                    Feedback from your girl/boyfriend
                                </p>
                                <p className="text-xs mt-2">
                                    That's why people say “you get what you pay for”...
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="mt-4 p-4 rounded shadow text-center">
                                <p className="font-semibold">
                                    MBA Coaches – the Bad and the Ugly
                                </p>
                                <p className="text-xs mt-2">
                                    Expensive and unhelpful doesn't sound good
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Matrix;