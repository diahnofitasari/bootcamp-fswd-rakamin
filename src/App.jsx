import myImage from "./assets/wanita-hijab.png"

function App() {
  return (
   <div>
    {/* Hero section start */}
    <section id = "home" className="pt-36">
      <div className="container">
        <div className ="flex flex-wrap">
          <div className="w-full self-center px-5 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl">Hello 👋🏻 <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">I am Diah Nofitasari</span></h1>
            <h2 className="font-medium text-slate-500 text-lg mb-5 lg:text-2xl"> Students Fullstack Web Developer</h2>
            <p className="font-medium text-slate-400 mb-10 leading-relaxed">Belajar web programming itu <span className="text-dark">mudah dan menyenangkan!</span></p>

            <a href="#" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover: opacity-80 transition duration-300 ease-in-out">Hubungi Saya</a>
          </div>

        <div className="w-full self-end px-4 lg:w-1/2"> 
          <div className="relative mt-10 lg:mt-9 lg:right-0">
            <img src= {myImage} alt="Women Illustrator" className="max-w-full mx-auto" ></img>
            <span className="absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
              <svg width= "400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#14b8a6" d="M52.3,-65.5C63.3,-53.2,64.5,-32.4,66.2,-13.1C68,6.2,70.3,24.1,64,38.8C57.7,53.5,42.8,65.1,26.7,69.2C10.6,73.2,-6.7,69.7,-22.8,63.4C-38.8,57.2,-53.5,48.3,-62.3,35C-71.1,21.8,-73.8,4.1,-70,-11.5C-66.2,-27.1,-55.9,-40.7,-43.1,-52.7C-30.3,-64.8,-15.2,-75.3,2.8,-78.6C20.7,-81.9,41.4,-77.9,52.3,-65.5Z" transform="translate(100 100) scale(1.1)"/>
              </svg>
            </span>
          </div>
        </div>

       </div>
      </div>
    </section>
    {/* Hero section end */}

    {/* About Section start */}
    <section id ="about" className="pt-36 pb-32">
      <div className="container">
        <div className="flex flex-wrap"> 
        <div className="w-full px-4 mb-10">

        </div>
        </div>
      </div>
    </section>
    {/* About Section end */}



   </div>

  )
}

export default App
