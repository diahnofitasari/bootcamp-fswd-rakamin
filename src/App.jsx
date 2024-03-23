import content1 from "./assets/content1.png";
import content2 from "./assets/content2.png";
import content3 from "./assets/content3.png";
import content4 from "./assets/content4.png";
import content5 from "./assets/content5.png";
import content6 from "./assets/content6.png";
import destinasi1 from "./assets/1.png";
import destinasi2 from "./assets/2.png";
import destinasi3 from "./assets/3.png";
import destinasi4 from "./assets/4.png";
import destinasi5 from "./assets/5.png";
import destinasi6 from "./assets/6.png";
import destinasi7 from "./assets/7.png";
import destinasi8 from "./assets/8.png";
import destinasi9 from "./assets/9.png";
import destinasi10 from "./assets/10.png";
import herotoba from "./assets/herotoba.jpg";
import logo from "./assets/logopariwisata.webp";
import React, { useEffect, useState } from "react";

function App() {
  const [navbarFixed, setNavbarFixed] = useState(false);
  const [hamburgerActive, setHamburgerActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      const fixedNav = header.offsetTop;

      if (window.pageYOffset > fixedNav) {
        setNavbarFixed(true);
      } else {
        setNavbarFixed(false);
      }
    };

    const handleHamburgerClick = () => {
      const hamburger = document.querySelector("#hamburger");
      const navMenu = document.querySelector("#nav-menu");
      hamburger.classList.toggle("hamburger-active");
      navMenu.classList.toggle("hidden");
    };

    window.addEventListener("scroll", handleScroll);

    const hamburger = document.querySelector("#hamburger");
    hamburger.addEventListener("click", handleHamburgerClick);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      hamburger.removeEventListener("click", handleHamburgerClick);
    };
  }, [hamburgerActive]); // Empty dependency array to run effect only once on component mount

  return (
    <div>
      {/* NavBar start*/}
      <header
        className={`header ${
          navbarFixed && !hamburgerActive ? "navbar-fixed" : ""
        }`}
        style={{
          background: "#1d4ed8",
          top: 0,
          left: 0,
          width: "100%",
          display: "flex",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between relative">
            {/* element kiri */}
            <div className="px-4">
              <a
                href="#home"
                className="font-bold text-lg text-primary block py-6"
              >
                <img src={logo} alt="...." className="h-12 w-auto"></img>
              </a>
            </div>

            {/* element kanan (elemen hamburger saat versi mobile dan element nav saat versi dekstop/large) */}
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="block absolute right-4 lg:hidden"
              >
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>

              <nav
                id="nav-menu"
                className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:flex lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none z-10"
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#home"
                      className="text-base font-bold lg:text-slate-200 py-2 mx-8 flex group-hover:text-black"
                    >
                      Antraksi
                    </a>
                  </li>

                  <li className="group">
                    <a
                      href="#about"
                      className="text-base font-bold  lg:text-slate-200 py-2 mx-8 flex group-hover:text-black"
                    >
                      Inspirasi Seru
                    </a>
                  </li>

                  <li className="group">
                    <a
                      href="#portofolio"
                      className="text-base font-bold lg:text-slate-200 py-2 mx-8 flex group-hover:text-black"
                    >
                      Rencanakan Perjalanan
                    </a>
                  </li>

                  <li className="group">
                    <a
                      href="#contact"
                      className="text-base font-bold lg:text-slate-200 py-2 mx-8 flex group-hover:text-black"
                    >
                      Go Explore
                    </a>
                  </li>

                  <li className="group">
                    <a
                      href="#contact"
                      className="text-base font-bold lg:text-slate-200 py-2 mx-8 flex group-hover:text-black"
                    >
                      Panduan Dasar
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* NavBar end*/}

      {/* Hero section start */}
      <section id="hero" className="pt-0">
        <div className="w-screen flex justify-center items-center">
          <img
            src={herotoba}
            alt="Hero Toba"
            className="w-sreen w-[1440px] opacity-65 relative"
          ></img>
          <h1 className="text-blue-900 lg:text-5xl font-bold absolute">
            Jelajahi 38 Destinasi Indonesia dari Sabang sampai Merauke!
          </h1>
        </div>
      </section>
      {/* Hero section end */}

      {/* Destinasi Pilihan start */}
      <section id="destinasi" className="pt-20 pb-16">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto text-center mb-16">
              <h4 className="font-bold  text-3xl lg:text-5xl text-primary mb-2">
                Destinasi Pilihan
              </h4>
            </div>
          </div>

          <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <div className="flex justify-center items-end mb-12 p-4 w-1/2 md:w-1/5">
              <img
                src={destinasi1}
                alt="Destinasi 1"
                className="w-full rounded-md shadow-md overflow-hidden relative"
              ></img>
              <h1 className="font-bold text-white absolute pb-3">Danau Toba</h1>
            </div>

            <div className="flex justify-center items-end mb-12 p-4 w-1/2 md:w-1/5">
              <img
                src={destinasi2}
                alt="Destinasi 1"
                className="w-full rounded-md shadow-md overflow-hidden relative"
              ></img>
              <h1 className="font-bold text-white absolute pb-3">Borobudur</h1>
            </div>

            <div className="flex justify-center items-end mb-12 p-4 w-1/2 md:w-1/5">
              <img
                src={destinasi3}
                alt="Destinasi 1"
                className="w-full rounded-md shadow-md overflow-hidden relative"
              ></img>
              <h1 className="font-bold text-white absolute pb-3">Mandalika</h1>
            </div>

            <div className="flex justify-center items-end mb-12 p-4 w-1/2  md:w-1/5">
              <img
                src={destinasi4}
                alt="Destinasi 1"
                className="w-full rounded-md shadow-md overflow-hidden relative"
              ></img>
              <h1 className="font-bold text-white absolute pb-3">
                Labuan Bajo
              </h1>
            </div>

            <div className="flex justify-center items-end mb-12 p-4 w-1/2 md:w-1/5">
              <img
                src={destinasi5}
                alt="Destinasi 1"
                className="w-full rounded-md shadow-md overflow-hidden relative"
              ></img>
              <h1 className="font-bold text-white absolute pb-3">Likupang</h1>
            </div>

            <div className="flex justify-center items-end mb-12 p-4 w-1/2 md:w-1/5">
              <img
                src={destinasi6}
                alt="Destinasi 1"
                className="w-full rounded-md shadow-md overflow-hidden relative"
              ></img>
              <h1 className="font-bold text-white absolute pb-3">Bali</h1>
            </div>

            <div className="flex justify-center items-end mb-12 p-4 w-1/2 md:w-1/5">
              <img
                src={destinasi7}
                alt="Destinasi 1"
                className="w-full rounded-md shadow-md overflow-hidden relative"
              ></img>
              <h1 className="font-bold text-white absolute pb-3">Raja Ampat</h1>
            </div>

            <div className="flex justify-center items-end mb-12 p-4 w-1/2  md:w-1/5">
              <img
                src={destinasi8}
                alt="Destinasi 1"
                className="w-full rounded-md shadow-md overflow-hidden relative"
              ></img>
              <h1 className="font-bold text-white absolute pb-3">Morotai</h1>
            </div>

            <div className="flex justify-center items-end mb-12 p-4 w-1/2  md:w-1/5">
              <img
                src={destinasi9}
                alt="Destinasi 1"
                className="w-full rounded-md shadow-md overflow-hidden relative"
              ></img>
              <h1 className="font-bold text-white absolute pb-3">
                Tanjung Kelayang
              </h1>
            </div>

            <div className="flex justify-center items-end mb-12 p-4 w-1/2  md:w-1/5">
              <img
                src={destinasi10}
                alt="Destinasi 1"
                className="w-full rounded-md shadow-md overflow-hidden relative"
              ></img>
              <h1 className="font-bold text-white absolute pb-3">Jakarta</h1>
            </div>
          </div>
        </div>
      </section>
      {/* Destinasi Pilihan end */}

      {/* Konten Wisata Section start */}
      <section id="konten" className="pt-20 pb-16 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto text-center mb-16">
              <h4 className="font-bold text-3xl lg:text-5xl text-primary mb-2">
                Konten Wisata
              </h4>
            </div>
          </div>

          <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <div className="mb-12 p-4 md:w-1/3">
              <div className="rounded-md shadow-md overflow-hidden pb-5">
                <img src={content1} alt="Content 1" className="w-full"></img>
                <h3 className="px-5 text-base font-semibold text-dark mt-5 overflow-x-auto">
                  <a href="#" className="hover:text-primary truncate">
                    10 Destinasi Plesiran Indonesia
                  </a>
                </h3>
                <p className="px-5 py-3 mb-5 font-medium text-sm text-secondary">
                  Kekayaan alam serta budayanya, membuat Nusantara seringkali
                  dipilih sebagai tujuan perjalanan oleh para pelancong dari
                  setiap sudut dunia. Ayo luangkan waktu untuk mampir ke 10
                  destinasi istimewa berikut!
                </p>
                <a
                  href="#"
                  className="bg-primary text-sm text-white mx-5 py-2 px-3 rounded-md"
                >
                  {" "}
                  Baca Selengkapnya
                </a>
              </div>
            </div>

            <div className="mb-12 p-4 md:w-1/3">
              <div className="rounded-md shadow-md overflow-hidden pb-5">
                <img src={content2} alt="Content 1" className="w-full"></img>
                <h3 className="px-5 text-base font-semibold text-dark mt-5 overflow-x-auto">
                  <a href="#" className="hover:text-primary truncate">
                    6 Destinasi Wisata Petualangan Indonesia
                  </a>
                </h3>
                <p className="px-5 py-3 mb-5 font-medium text-sm text-secondary">
                  Tidak hanya diberkati dengan keajaiban alam yang memukau,
                  Indonesia juga merupakan surga bagi para pencari tantangan.
                  Kenali enam destinasi spektakuler tanah air berikut yang siap
                  memacu adrenalinmu!
                </p>
                <a
                  href="#"
                  className="bg-primary text-sm text-white mx-5 py-2 px-3 rounded-md"
                >
                  {" "}
                  Baca Selengkapnya
                </a>
              </div>
            </div>

            <div className="mb-12 p-4 md:w-1/3">
              <div className="rounded-md shadow-md overflow-hidden pb-5">
                <img src={content3} alt="Content 1" className="w-full"></img>
                <h3 className="px-5 text-base font-semibold text-dark mt-5 overflow-x-auto">
                  <a href="#" className="hover:text-primary truncate">
                    Jelajah Kuliner Jateng & Jogja
                  </a>
                </h3>
                <p className="px-5 py-3 mb-5 font-medium text-sm text-secondary">
                  Jawa Tengah dan Yogyakarta harus segera masuk dalam daftar
                  destinasi wisata kuliner terbaik versimu. Jadikan momen
                  liburan akhir tahun untuk menjelajahi warisan kuliner istimewa
                  serta temukan berbagai referensi yang lezat dan nikmatnya di
                  sini!
                </p>
                <a
                  href="#"
                  className="bg-primary text-sm text-white mx-5 py-2 px-3 rounded-md"
                >
                  {" "}
                  Baca Selengkapnya
                </a>
              </div>
            </div>

            <div className="mb-12 p-4 md:w-1/3">
              <div className="rounded-md shadow-md overflow-hidden pb-5">
                <img src={content4} alt="Content 1" className="w-full"></img>
                <h3 className="px-5 text-base font-semibold text-dark mt-5 overflow-x-auto">
                  <a href="#" className="hover:text-primary truncate">
                    Panduan Pariwisata Ramah Muslim
                  </a>
                </h3>
                <p className="px-5 py-3 mb-5 font-medium text-sm text-secondary">
                  Ingin menikmati liburan di Indonesia sambil tetap menjalankan
                  ibadah dan kewajiban sebagai seorang Muslim? Tenang, kami
                  punya panduan lengkapnya. Sobat Pesona bisa mengunduh buku
                  digital Panduan Pariwisata Ramah Muslim di 5.
                </p>
                <a
                  href="#"
                  className="bg-primary text-sm text-white mx-5 py-2 px-3 rounded-md"
                >
                  {" "}
                  Baca Selengkapnya
                </a>
              </div>
            </div>

            <div className="mb-12 p-4 md:w-1/3">
              <div className="rounded-md shadow-md overflow-hidden pb-5">
                <img src={content5} alt="Content 1" className="w-full"></img>
                <h3 className="px-5 text-base font-semibold text-dark mt-5 overflow-x-auto">
                  <a href="#" className="hover:text-primary truncate">
                    Journey to Wander
                  </a>
                </h3>
                <p className="px-5 py-3 mb-5 font-medium text-sm text-secondary">
                  Buku panduan yang bisa membantumu menjelajahi segala atraksi
                  mengagumkan di Semarang. Hasil kolaborasi Kemenparekraf dengan
                  5 Influencer: Mada Riyanhadi, Debby Permata, Dhita, Wastana
                  Haikal, dan Adaptasi.
                </p>
                <a
                  href="#"
                  className="bg-primary text-sm text-white mx-5 py-2 px-3 rounded-md"
                >
                  {" "}
                  Baca Selengkapnya
                </a>
              </div>
            </div>

            <div className="mb-12 p-4 md:w-1/3">
              <div className="rounded-md shadow-md overflow-hidden pb-5">
                <img src={content6} alt="Content 1" className="w-full"></img>
                <h3 className="px-5 text-base font-semibold text-dark mt-5 overflow-x-auto">
                  <a href="#" className="hover:text-primary truncate">
                    6 Destinasi Wisata Petualangan Indonesia
                  </a>
                </h3>
                <p className="px-5 py-3 mb-5 font-medium text-sm text-secondary">
                  Tidak hanya diberkati dengan keajaiban alam yang memukau,
                  Indonesia juga merupakan surga bagi para pencari tantangan.
                  Kenali enam destinasi spektakuler tanah air berikut yang siap
                  memacu adrenalinmu!
                </p>
                <a
                  href="#"
                  className="bg-primary text-sm text-white mx-5 py-2 px-3 rounded-md"
                >
                  {" "}
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Konten Wisata Section end */}

      {/*Fotter start*/}
      <div className="fotter bg-blue-700 pt-20 pb-12">
        <div className="container">
          {/* Media Social */}
          <div>
            <div className="w-full pt-10 border-t border-slate-400"></div>
            <div className="flex items-center justify-center mb-5">
              {/* linked in */}
              <a
                href="#"
                target="blank"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center 
                  text-slate-300 border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  role="img"
                  width="20"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                target="blank"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center 
                  text-slate-300 border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  role="img"
                  width="20"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Instagram</title>
                  <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                target="blank"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center 
                  text-slate-300 border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  role="img"
                  width="20"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Facebook</title>
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                </svg>
              </a>

              {/* twitter */}
              <a
                href="#"
                target="blank"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center 
                  text-slate-300 border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  role="img"
                  width="20"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>X</title>
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>

              {/* Discord */}
              <a
                href="#"
                target="blank"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center 
                  text-slate-300 border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  role="img"
                  width="20"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Discord</title>
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
              </a>

              {/* Gmail */}
              <a
                href="#"
                target="blank"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center 
                  text-slate-300 border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  role="img"
                  width="20"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Gmail</title>
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                </svg>
              </a>
            </div>

            <p className="font-medium text-xs text-slate-400 text-center">
              Copyright © 2024 Diah Nofitasari
            </p>
          </div>
        </div>
      </div>
      {/*Fotter end*/}
    </div>
  );
}

export default App;
