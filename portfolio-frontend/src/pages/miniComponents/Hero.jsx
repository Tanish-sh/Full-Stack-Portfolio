import { ExternalLink, Github, Instagram, Linkedin, Mail } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import axios from "axios";

const Hero = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getMyProfile = async () => {
      const { data } = await axios.get(
        "https://tanish-portfolio-backend-code.onrender.com/api/v1/user/me",
        {
          withCredentials: true,
        }
      );
      setUser(data.user);
    };
    getMyProfile();
  }, []);
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-green-400 rounded-full h-2 w-2"></span>
        <p>Online</p>
      </div>
      <h1
        className="overflow-x-hidden text-[1.3rem] sm:text-[1.75rem] 
        md:text-[2.2rem] lg:text-[2.8rem] tracking-[2px] mb-4"
      >
        Hey, I'm Tanish
      </h1>
      <h1
        className="text-tubeLight-effect overflow-x-hidden text-[1.3rem] 
        sm:text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-[15px]"
      >
        <Typewriter
          words={["FULLSTACK DEVELOPER", "MERN DEVELPOR", "FREELANCER"]}
          loop={50}
          cursor
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <div
        className="w-fit px-5 py-2 bg-slate-50 rounded-[20px] flex gap-5 
        items-center mt-4 md:mt-8 lg:mt-10"
      >
        <Link
          to="https://accounts.google.com/SignOutOptions?hl=en&continue=https://mail.google.com/mail&service=mail&ec=GBRAFw"
          className="text-black"
          target="_blank"
        >
          tanishs049@gmail.com
        </Link>

        <Link
          to="https://www.instagram.com/tanish_sharmaaa?igsh=MTl5cnZ0b2psY2tmMg=="
          target="_blank"
        >
          <Instagram className="text-pink-500 w-7 h-7" />
        </Link>

        <Link
          to="https://www.linkedin.com/in/tanish-sharma-96a882189?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
        >
          <Linkedin className="text-sky-500 w-7 h-7" />
        </Link>
      </div>
      <div className="mt-4 md:mt-8 lg:mt-10  flex gap-3">
        <Link to="https://github.com/Tanish-sh" target="_blank">
          <Button className="rounded-[30px] flex items-center gap-2 flex-row">
            <span>
              <Github />
            </span>
            <span>Github</span>
          </Button>
        </Link>
        <Link
          to="https://res.cloudinary.com/dzcqfg3ur/image/upload/v1719141800/PORTFOLIO%20RESUME/ujqgnuuwdsadonv9ncpw.jpg"
          target="_blank"
        >
          <Button className="rounded-[30px] flex items-center gap-2 flex-row">
            <span>
              <ExternalLink />
            </span>
            <span>Resume </span>
          </Button>
        </Link>
      </div>
      <p className="mt-8 text-xl tracking-[2px]">
        {user?.aboutMe ?? "Hi i am Tansh . what about you"}{" "}
      </p>
      <hr className="my-8 md::my-10 " />
    </div>
  );
};

export default Hero;
