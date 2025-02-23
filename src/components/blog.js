import React from "react";


const BlogPage = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 font-serif text-gray-800">
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-2 mb-4">
                <h2 className="text-lg font-bold">BUSINESS</h2>
                <h2 className="text-lg font-bold">VOL. 7</h2>
            </div>
            
            {/* Main Image */}
            <img 
                src="/path-to-main-image.jpg" 
                alt="Sunset view" 
                className="w-full h-64 object-cover mb-6 rounded-lg"
            />
            
            {/* Blog Title */}
            <h1 className="text-3xl font-bold text-center mb-4">ON THE BLOG</h1>
            
            {/* Blog Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-justify">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
            </div>
            
            <hr className="my-6" />
            
            {/* Secondary Image & Business Section */}
            <div className="flex flex-col md:flex-row items-center gap-4">
                <img 
                    src="/path-to-secondary-image.jpg" 
                    alt="Scenic view" 
                    className="w-full md:w-1/2 h-48 object-cover rounded-lg"
                />
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold mb-2">BUSINESS</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            
            {/* Footer */}
            <p className="text-center mt-6 text-lg font-semibold">@reallygreatsite</p>
        </div>
    );
};

export default BlogPage;
