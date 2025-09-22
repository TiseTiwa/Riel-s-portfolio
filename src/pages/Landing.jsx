import React, { useEffect, useState } from "react";
import headshot from "../assets/headshot.jpg";
import CircularGallery from "../components/CircularGallery.jsx";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com"; // ✅ added
import toast, { Toaster } from "react-hot-toast";

import tidydetox1 from "../assets/tidydetox1.jpg";
import tidydetox2 from "../assets/tidydetox2.jpg";
import tidydetox3 from "../assets/tidydetox3.jpg";

import dodja1 from "../assets/dodjaone.jpg";
import dodja2 from "../assets/dodja2.jpg";
import dodja3 from "../assets/dodja3.jpg";

import Dilano1 from "../assets/dilano1.jpg";
import Dilano2 from "../assets/dilano2.jpg";

import bellocloth1 from "../assets/bellocloth1.jpg";
import bellocloth2 from "../assets/bellocloth2.jpg";
import bellocloth3 from "../assets/bellocloth3.jpg";
import bellocloth4 from "../assets/bellocloth4.jpg";

import champagne1 from "../assets/champagne5.jpg";
import champagne2 from "../assets/champagne4.jpg";
import champagne3 from "../assets/champagne3.jpg";

const Landing = () => {
  const gallery = [
    { id: 1, src: bellocloth2, alt: "Bello Clothing Brand" },
    { id: 2, src: Dilano2, alt: "Dilano Brand" },
    { id: 3, src: champagne2, alt: "Champagne Shoot" },
    { id: 4, src: dodja2, alt: "Dodja Brand" },
    { id: 5, src: tidydetox2, alt: "Tidy Detox" },
    { id: 6, src: bellocloth3, alt: "Bello Clothing" },
    { id: 7, src: champagne3, alt: "Champagne Shoot" },
    { id: 8, src: bellocloth4, alt: "Bello Clothing" },
    { id: 9, src: tidydetox3, alt: "Tidy Detox Tea" },
    { id: 10, src: dodja3, alt: "Dodja Brand" },
  ];

  const projects = [
    {
      id: "p1",
      title: "TIDY WELLNESS",
      desc: "Product photography for TIDY WELLNESS CO detox tea brand.",
      image: tidydetox1,
      view: "/gallery",
    },
    {
      id: "p2",
      title: "BELLO CLOTHING BRAND",
      desc: "Clothing brand shoot for bellocolorthug #bonehead 2025.",
      image: bellocloth1,
      view: "/gallery",
    },
    {
      id: "p3",
      title: "CHAMPAGNE DEMO",
      desc: "Random champagne shoot from my bar.",
      image: champagne1,
      view: "/gallery",
    },
    {
      id: "p4",
      title: "DILANO JEWELRY BRAND",
      desc: "Brand shoot for Dilano Jewelry Brand.",
      image: Dilano1,
      view: "/gallery",
    },
    {
      id: "p5",
      title: "DODJA ORIGINALS",
      desc: "E-commerce shoot for DODJA ORIGINALS clothing brand.",
      image: dodja1,
      view: "/gallery",
    },
  ];

  const [dark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }
    return false;
  });

  // const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // disable button

    emailjs
      .sendForm(
        "service_ficq7xl",
        "template_kxzloy8",
        e.target,
        "0-H8veA4279XUvB_v"
      )
      .then(
        () => {
          toast.success("✅ Message sent successfully!");
          e.target.reset();
        },
        () => {
          toast.error("❌ Something went wrong, please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false); // re-enable if you want after response
      });
  };

  // const [projects] = useState(projectsSeed);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // placeholder: replace with actual submit logic to your backend or service (e.g. Formspree)
    console.log("Contact form submitted:", form);
    alert("Message sent (demo). Check console for payload.");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className=" text-gray-900 dark:text-gray-100 bg-gradient-to-b from-fuchsia-200 via-sky-100 to-emerald-100 dark:from-[#09090b] dark:via-[#0f0f13] dark:to-black">
      {/* Floating Controls min-h-screen*/}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-3">
        <a
          href="#contact"
          className="hidden sm:inline-block px-3 py-2 rounded-xl text-white bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-sky-600 shadow"
        >
          Contact
        </a>
      </div>

      {/* Header */}
      <header className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-full rounded-2xl overflow-hidden shadow">
              <img
                src={headshot}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="sm:text-lg text-14xl font-semibold">Rielshotit</h1>
              <p className="sm:text-sm text-[300px] md:text-[200px] text-zinc-700 dark:text-zinc-300">
                Photographer • Videographer
              </p>
            </div>
          </div>
          <ul className="hidden md:flex items-center gap-6 sm:text-sm text-13xl">
            <li>
              <a href="#home" className="hover:text-[#1a06f8]">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#1a06f8]">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[#1a06f8]">
                Projects
              </a>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-[#1a06f8]">
                Gallery
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hero */}
        <section id="home" className="mt-12">
          <div className="introdiv flex flex-col md:flex-row overflow-hidden rounded-2xl border border-white/40 dark:border-white/10 shadow-xl">
            <img
              src={headshot}
              alt="Hero sample"
              className="w-full md:w-1/2 h-[950px] sm:h-[400px] object-cover"
              loading="lazy"
            />
            <div className="p-6 flex flex-col justify-center">
              <h2 className="typing-text text-5xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                Hi, I'm{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#110343] via-indigo-600 to-sky-600">
                  Rielshotit
                </span>
              </h2>
              <p className="mt-3 text-13xl md:text-lg text-zinc-800 dark:text-zinc-300">
                A young creator navigating the world of photography with a
                simple belief. "The best photos aren’t staged they’re lived". My
                work is about capturing people as they are—natural, confident,
                and full of life. Whether it’s individual portraits, group
                sessions, lifestyle shoots, or corporate moments, I focus on
                making every client feel seen, celebrated, and proud of their
                story. For me, every shoot is more than just a session—it’s an
                experience. And through it all, I’m proud to create.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="px-4 py-2 rounded-xl text-13xl sm:text-sm text-white bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-sky-600 shadow"
                >
                  View work
                </a>
                <a
                  href="#contact"
                  className="px-4 py-2 rounded-xl  text-13xl sm:text-sm border border-zinc-300 dark:border-zinc-700"
                >
                  Book a shoot
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 text-10xl sm:text-sm">
                <span className="px-2 py-1 rounded bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900/40 dark:text-fuchsia-200">
                  Portraits
                </span>
                <span className="px-2 py-1 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200">
                  Events
                </span>
                <span className="px-2 py-1 rounded bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-200">
                  Commercial
                </span>
                <span className="px-2 py-1 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200">
                  Weddings
                </span>
              </div>
            </div>
          </div>
        </section>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-16">
        {/* Circular Gallery */}
        <div className="relative h-[350px] sm:h-[450px] md:h-[600px]">
          <CircularGallery
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>

        {/* About */}
        <section
          id="about"
          className="bg-white/70 dark:bg-zinc-900/50 rounded-3xl border border-black/5 dark:border-white/10 p-6"
        >
          <h3 className="text-14xl sm:text-xl font-bold">About</h3>
          <p className="text-13xl sm:text-xl mt-3 text-zinc-700 dark:text-zinc-300">
            I’m a Lagos-based photographer and videographer focusing on
            portraits, events, and brand storytelling...
          </p>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <div className="sm:text-xs text-14xl font-semibold">Skills</div>
              <div className="sm:text-xs text-12xl text-zinc-600 dark:text-zinc-300">
                Portraiture, lighting, storyboarding
              </div>
            </div>
            <div>
              <div className="sm:text-xs text-14xl font-semibold">Gear</div>
              <div className="sm:text-xs text-12xl text-zinc-600 dark:text-zinc-300">
                Sony FX3/A7 series, 24-70mm, 85mm, gimbal
              </div>
            </div>
            <div>
              <div className="sm:text-xs text-14xl font-semibold">Editing</div>
              <div className="sm:text-xs text-12xl text-zinc-600 dark:text-zinc-300">
                Lightroom, Photoshop, DaVinci Resolve
              </div>
            </div>
            <div>
              <div className="sm:text-xs text-14xl font-semibold">Delivery</div>
              <div className="sm:text-xs text-12xl text-zinc-600 dark:text-zinc-300">
                Social cuts, 4K masters, galleries
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-4">
          <div className="flex items-end justify-between gap-4">
            <h3 className="sm:text-xl text-12xl font-bold">Brand Shoots</h3>
            <span className="sm:text-xs text-9xl text-zinc-500">
              Auto-scroll →
            </span>
          </div>
          <div className="relative overflow-hidden">
            <div className="projects-scroll-x flex">
              {projects.concat(projects).map((p, i) => (
                <article
                  key={i}
                  className="shrink-0 w-[85%] sm:w-[360px] md:w-[480px] bg-white/80 dark:bg-zinc-900/70 
             rounded-2xl border border-black/5 dark:border-white/10 shadow mx-3 flex flex-col"
                >
                  <div className="text-8xl aspect-[16/9] w-full overflow-hidden rounded-t-2xl">
                    <img
                      src={p.image}
                      alt={p.title}
                      className=" w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h4 className="font-semibold text-lg">{p.title}</h4>
                    <p className="mt-1 sm:text-sm text-9xl text-zinc-700 dark:text-zinc-300">
                      {p.desc}
                    </p>
                    <div className="mt-3">
                      <a
                        href={p.view}
                        target="_blank"
                        rel="noreferrer"
                        className=" text-12xl sm:text-sm px-3 py-1 rounded-lg text-white text-sm 
                   bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-sky-600"
                      >
                        View Gallery
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="bg-white dark:bg-gray-900/40 p-6 rounded-2xl border border-gray-100 dark:border-gray-800"
        >
          <h3 className="sm:text-xl text-14xl font-bold">Contact</h3>
          <p className="mt-2 sm:text-sm text-12xl text-gray-600 dark:text-gray-300">
            Want to collaborate or hire me? Send a message below.
          </p>

          <form
            onSubmit={sendEmail}
            className="form mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="text-12xl sm:text-sm p-3 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/30"
            />
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="text-12xl sm:text-sm p-3 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/30"
            />
            <textarea
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={5}
              className="text-12xl sm:text-sm sm:col-span-2 p-3 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/30"
            />

            <div className="text-10xl sm:text-sm sm:col-span-2 flex items-center justify-between">
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/rielshotit"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@rielshotit"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  TikTok
                </a>
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md"
              >
                {" "}
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
          {/* Toast container */}
          <Toaster position="top-center" reverseOrder={false} />
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 py-10 text-center sm:text-sm text-8xl text-zinc-600 dark:text-zinc-400">
        © {new Date().getFullYear()} Rielshotit • Crafted with care. All rights
        reserved.
      </footer>
    </div>
  );
};

export default Landing;
