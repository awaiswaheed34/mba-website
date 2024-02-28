
import Avatar from "@mui/material/Avatar";
const TestimonialItem = ({ image, name, rating, review }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center">
                <Avatar>
                    <img src={image} />
                </Avatar>

                <h3 className="text-xl items-center p-5 font-bold ">{name}</h3>
            </div>
            <p className="text-yellow-500 mb-4 font-extrabold text-xl">{rating}</p>
            <p className="text-gray-600">{review}</p>
        </div>
    );
};

export default TestimonialItem;