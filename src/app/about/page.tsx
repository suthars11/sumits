import Image from "next/image";
import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white mt-20">
      {/* Header Section */}
      <div className="relative w-full h-[460px]">
        <Image
          src="/images/aboutimg.png" // Updated image path
          alt="About Us Header"
          width={1200} // Specify width
          height={300} // Specify height
          className="w-full h-full object-cover"
        />
      </div>

      {/* Welcome Section */}
      <section className="py-12 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#166088] mb-6">
              Welcome to
            </h2>

            <p className="text-gray-700 leading-relaxed mb-8">
              Welcome to [Your Company Name], where we specialize in helping you
              find youjsd hjjh jhjh hsajhr dream property. With years of experience in the real
              estate journey
            </p>
          </div>
          <div className=" ml-28  ">
            <div className="-z-10">
              <Image
                src="/images/handseck.png"
                alt="Handshake"
                width={200} // Specify width
                height={200} // Specify height
                className="rounded-lg shadow-md  h-[200px] ml-20 "
              />
            </div>
            <div className="-mt-12 px-2">
              <Image
                src="/images/handseek1.png"
                alt="Property"
                width={200} // Specify width
                height={200} // Specify height
                className="rounded-lg shadow-md h-[200px] -ml-20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Post Your Property Section */}
      <section className=" py-12">
        <div className="max-w-5xl mx-auto px-6 flex items-center">
          <Image
            src="/images/home.png" // Updated image path
            alt="Key with House"
            width={600} // Specify width
            height={400} // Specify height
            className="w-1/2 rounded-lg shadow-md mr-8"
            layout="responsive"
          />
          <div className="w-1/2">
            <h2 className="text-4xl font-bold text-[#166088] mb-8 ">
              Post your property
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              To be the go-to real estate partner for individuals, families, and
              businesses, delivering unparalleled service and valuable property
              opportunities that create lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-6xl mx-auto bg-[rgba(217,217,217,1)] w-[1040px] h-[353px]">
        <div className="flex items-stretch">
          {/* Image Section */}
          <div className="w-[50%]">
            <Image
              src="/images/office.png" // Updated image path
              alt="Nitin Sharma"
              width={526} // Specify width
              height={351} // Specify height
              className="object-cover w-full h-full"
            />
          </div>

          {/* Text Section */}
          <div className="w-[50%] bg-[#D9D9D9] flex items-center justify-center mx-6">
            <div className="px-4 py-2">
              <p className="text-white italic  mb-4">


                <span className="text-7xl text-blue-400">

                  ❝
                </span>

                Welcome to [Your Company Name], where we specialize in helping you
                find your dream property. With years of experience in the real
                estate industry, we have built a reputation for providing
                exceptional service, expert advice, and a comprehensive range of
                propert 
                
                ies to suit every need. Our mission is simple: to make your
                property journey seamless.
              </p>
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/profileicon.png" // Updated image path
                  alt="Nitin Sharma"
                  width={48} // Specify width
                  height={48} // Specify height
                  className="w-12 h-12 object-cover"
                />
                <span className="font-bold">Nitin Sharma</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="max-w-6xl mx-auto mt-6 mb-10 bg-[rgba(217,217,217,1)] w-[1040px] h-[353px]">
        <div className="flex items-stretch">
          {/* Text Section First */}
          <div className="w-[50%] bg-[#D9D9D9] flex items-center justify-center">
            <div className="px-4 py-2">
              <p className="text-white italic mb-4 mx-6">
                <span className="text-7xl text-blue-400">

                  ❝
                </span>
                Welcome to [Your Company Name], where we specialize in helping you
                find your dream property. With years of experience in the real
                estate industry, we have built a reputation for providing
                exceptional service, expert advice, and a comprehensive range of
                properties to suit every need. Our mission is simple: to make your
                property journey seamless.
              </p>
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/profileicon.png" // Updated image path
                  alt="Nitin Sharma"
                  width={48} // Specify width
                  height={48} // Specify height
                  className="w-12 h-12 object-cover"
                />
                <span className="font-bold">Nitin Sharma</span>
              </div>
            </div>
          </div>

          {/* Image Section Second */}
          <div className="w-[50%]">
            <Image
              src="/images/office.png" // Updated image path
              alt="Nitin Sharma"
              width={526} // Specify width
              height={351} // Specify height
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
