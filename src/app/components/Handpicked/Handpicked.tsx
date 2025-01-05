import Image from "next/image";

const Handpicked = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-100 relative mt-20'>
    <div className='w-[80%] mx-auto'>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
        <div className="text-center md:text-left mb-4 md:mb-0 md:px-10">
          <h1 className="text-2xl font-bold text-black">Handpicked Projects</h1>
          <h6 className="text-gray-500 text-sm">
            Explore top living options with us
          </h6>
        </div>

        {/* Small Cards */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-black">
          {/* First Card */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/image.png"
              alt="Handpicked Project"
              width={100}
              height={100}
            />
            <h6 className="text-sm mt-2 text-center">Vardhaman Express</h6>
          </div>

          {/* Second Card */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/image.png"
              alt="Handpicked Project"
              width={100}
              height={100}
            />
            <h6 className="text-sm mt-2 text-center">Vardhaman Express</h6>
          </div>

          {/* Third Card */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/image.png"
              alt="Handpicked Project"
              width={100}
              height={100}
            />
            <h6 className="text-sm mt-2 text-center">Vardhaman Express</h6>
          </div>
        </div>
      </div>

      {/* Big Card */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start bg-gradient-to-r from-pink-200 via-purple-200 to-pink-300 p-6 rounded-xl shadow-lg text-white space-y-6 lg:space-y-0">
        {/* Left Section */}
        <div className="flex-1 space-y-4 text-center lg:text-left min-h-[50px]">
          <div className="flex items-center justify-center lg:justify-start space-x-4">
            <Image
              src="/images/bigcardimg.png"
              alt="Vardhaman Logo"
              width={64}
              height={64}
              className="flex-shrink-0"
            />
            <div>
              <h1 className="text-xl font-bold text-black">Vardhaman Group</h1>
              <a
                href="#"
                className="text-sm underline text-blue-400 hover:text-blue-600"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="text-black">
            <h2 className="text-2xl font-semibold">Vardhaman Express</h2>
            <p className="text-sm">Mansarovar, Jaipur</p>
            <p className="text-lg font-bold">₹ 1.15 Cr - 3.34 Cr</p>
            <p className="text-sm">3, 4, 5 BHK Apartments</p>
            <button className="mt-4 px-6 py-2 bg-purple-800 hover:bg-purple-900 text-white rounded-lg max-w-full">
              Contact
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <Image
            src="/images/imag2.png"
            alt="Apartment View"
            width={800}
            height={600}
            className="rounded-lg object-contain"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Handpicked;
