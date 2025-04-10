import React from "react";
import sneakers from "../assets/heroimg.svg";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";

const Home = () => {
  const features = [
    {
      id: 1,
      icon: "👟",
      title: "Nibh viverra",
      description:
        "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
      bgColor: "bg-blue-100",
    },
    {
      id: 2,
      icon: "🎨",
      title: "Cursus amet",
      description:
        "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
      bgColor: "bg-green-100",
    },
    {
      id: 3,
      icon: "🔥",
      title: "Ipsum fermentum",
      description:
        "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
      bgColor: "bg-pink-100",
    },
  ];

  const products = [
    {
      id: 1,
      title: "Title",
      description:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
      image: s1,
      backgroundColor: "bg-yellow-400",
      alt: "Black and white sneakers on yellow background",
    },
    {
      id: 2,
      title: "Title",
      description:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
      image: s2,
      backgroundColor: "bg-slate-700",
      alt: "Colorful designer sneakers on wooden display",
    },
    {
      id: 3,
      title: "Title",
      description:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
      image: s3,
      backgroundColor: "bg-yellow-300",
      alt: "White high-top sneakers with brown boots",
    },
  ];

  return (
    <>
      {/* hero section */}
      <div
        className="max-w-[1440px] w-full h-[948px] mx-auto"
        style={{
          background: "linear-gradient(148deg, #FFF9E6 57%, #FDF5D9 50%)",
        }}
      >
        <nav className="flex justify-between items-center min-[1024px]:py-[24px] min-[1024px]:px-[80px]">
          <h5 className="font-bold text-[#78350F] text-[32px] font-robotbold">
            Collers
          </h5>

          <div className="hidden lg:flex justify-center items-center space-x-8 text-[#78350F] text-[16px] font-Medium">
            <a href="#" className="hover:underline">
              Products
            </a>
            <a href="#" className="hover:underline">
              Solutions
            </a>
            <a href="#" className="hover:underline">
              Pricing
            </a>
            <a href="#" className="hover:underline">
              Resources
            </a>
            <a href="#" className="hover:underline">
              Log In
            </a>
            <button className="hidden font-Medium lg:block border-[2px] border-[#78350F] text-[#78350F] px-6 py-2 rounded-[8px] hover:bg-[#78350F] hover:text-white transition">
              Sign up now
            </button>
          </div>
        </nav>

        <section className=" px-6 min-[1024px]:px-[80px] py-[80px]">
          <div className="min-[1024px]:flex max-[1024px]:flex-col gap-10 justify-between items-center">
            <div className="min-[1024px]:max-w-[714px] w-full ">
              <h1 className="text-[72px] font-ExtraBold text-[#1E1E1E] leading-tight">
                Collectible Sneakers
              </h1>
              <p className="text-gray-600 my-[32px] font-Regular">
                Sit et feugiat turpis sed integer integer accumsan turpis. Sed
                suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
                ultrices amet.
              </p>

              <div className="mt-6 flex items-center space-x-4">
                <button className="hidden font-Medium lg:block border-[2px] border-[#78350F] text-[#78350F] px-6 py-2 rounded-[8px] hover:bg-[#78350F] hover:text-white transition">
                  Sign up now
                </button>
                <button className="flex items-center space-x-2 text-[#78350F] font-medium">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM14.126 11.746L10.071 14.644C9.166 15.29 7.941 15.033 7.334 14.068C7.11494 13.7171 6.99918 13.3116 7 12.898V7.102C7 5.942 7.883 5 8.972 5C9.363 5 9.746 5.124 10.071 5.356L14.126 8.254C15.031 8.901 15.272 10.206 14.666 11.171C14.5251 11.3959 14.3417 11.5913 14.126 11.746ZM8.972 7.102V12.898L13.027 10L8.972 7.102Z"
                      fill="#78350F"
                    />
                  </svg>
                  <span className="font-Medium text-[16px]">Watch Demo</span>
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-10 right-0 bg-[#FBBF24] rounded-[50px] w-[367px] h-[372px] mr-[68px]"></div>

              <img
                src={sneakers}
                alt="Sneaker"
                className="relative z-10 max-w[486px] "
              />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {features.map((feature) => (
              <div className=" p-6 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="font-Medium text-lg mt-4 text-[#0F172A]">
                  {" "}
                  {feature.title}
                </h3>
                <p className="font-Regular text-[#0F172A] mt-2">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#0F172A] min-h-screen px-4 py-16 lg:px-20 lg:py-20">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-[80px]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 lg:mb-0">
              The best of the best
            </h1>
            <button className="hidden lg:block border-2 border-white text-white px-12 py-3 rounded-lg font-medium text-xl hover:bg-white hover:text-slate-900 transition-colors">
              Sign up now
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-[2] relative ">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-[#0F172A] rounded-[10px] overflow-hidden z-2 relative max-w-[394px]"
                style={{
                  boxShadow: "0px 25px 50px -12px rgba(255, 255, 255, 0.25)",
                }}
              >
                <div className={`relative`}>
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-[32px]">
                  <h3 className="text-[24px] text-white font-Bold mb-[16px] mt-[32px]">
                    {product.title}
                  </h3>
                  <p className="text-[#ffffff] mb-[32px]">{product.description}</p>
                  <button className="border-[2px] border-white text-white w-full py-4 rounded-lg flex justify-center items-center gap-2 hover:bg-gray-700 transition-colors">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 4H5.62L6 6M6 6H19.5L17 14H8L6 6Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="9"
                        cy="19"
                        r="2"
                        stroke="white"
                        strokeWidth="2"
                      />
                      <circle
                        cx="16"
                        cy="19"
                        r="2"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 lg:hidden">
            <button className="border-2 border-white text-white px-10 py-3 rounded-lg font-medium text-xl w-full">
              Sign up now
            </button>
          </div>

          <div className="hidden lg:block absolute left-[38.6%] top-[101%] z-1 ">
            <div className="w-[161px] h-[161px] bg-[#0369A1] rounded-[50px] opacity-[75%]"></div>
          </div>
          <div className="hidden lg:block absolute left-[15.5%] top-[125%] w-full z-1">
            <div className="w-[232px] h-[232px] bg-[#BE185D] rounded-[50px] opacity-[75%]"></div>
          </div>
          <div className="hidden lg:block absolute left-[53.7%] top-[133%] w-full z-1">
            <div className="w-[130px] h-[130px] bg-[#B45309] rounded-[30px] opacity-[75%]"></div>
          </div>
          <div className="hidden lg:block absolute left-[67%] top-[133%] w-full z-1">
            <div className="w-[202px] h-[202px] bg-[#A21CAF] rounded-[30px] opacity-[75%]"></div>
          </div>
          <div className="hidden lg:block absolute right-[16%] top-[106%] z-1 ">
            <div className="w-[232px] h-[232px] bg-[#15803D] rounded-[50px] opacity-[75%]"></div>
          </div>
        </section>
      </div>
        </>
  );
};  

export default Home;
