const ImageGallery = () => {
    return (
        <div className="flex flex-col justify-center items-center ">
            <div>
                <b><p>Trusted by non-traditional applicants and employees from leading pre-MBA firms</p></b>
            </div>
            <div className="flex justify-center items-center p-4 w-4/5">
                <img src="i.png" alt="Image 1" style={{ width: '10%', height: '90%' }} className="mr-4" />
                <img src="j1.png" alt="Image 2" style={{ width: '12%', height: '90%' }} className="mr-4" />
                <img src="k.png" alt="Image 3" style={{ width: '12%', height: '90%' }} className="mr-4" />
                <img src="l.png" alt="Image 4" style={{ width: '12%', height: '90%' }} className="mr-4" />
                <img src="m1.png" alt="Image 5" style={{ width: '12%', height: '90%' }} className="mr-4" />
                <img src="n.png" alt="Image 6" style={{ width: '12%', height: '90%' }} className="mr-4" />
                <img src="o.png" alt="Image 7" style={{ width: '12%', height: '90%' }} />
            </div>
        </div>
    );
};


export default ImageGallery;