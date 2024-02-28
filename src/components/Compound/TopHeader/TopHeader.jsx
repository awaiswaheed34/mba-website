

const TopHeader = () => {
    return (
        <div class="hidden flex items-center justify-center bg-indigo-900 h-10 w-full space-x-10 lg:flex">
            <div className="flex w-10/12 justify-between">
                <div class="flex text-sm text-white">
                    <svg
                        class="w-5 h-5 w-3 h-3 text-green-500 mr-1.5"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            clip-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            fill-rule="evenodd"
                        ></path>
                    </svg>
                    500+ top-quality essays
                </div>
                <div class="flex text-sm text-green-500 space-x-2">
                    ★★★★★
                    <div class="flex text-white ml-2">Used by 2,468 happy clients</div>
                </div>
                <div class="flex text-sm text-white">
                    <svg
                        class="w-5 h-5 w-3 h-3 text-green-500 mr-1.5"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            clip-rule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            fill-rule="evenodd"
                        ></path>
                    </svg>
                    600+ clients accepted into top business schools
                </div>
            </div>
        </div>
    );
};

export default TopHeader;