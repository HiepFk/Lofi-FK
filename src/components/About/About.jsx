import React from "react";
import { MdFacebook, MdEmail } from "react-icons/md";
import { ImGithub } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

import "./app.css";
function About() {
  const items = [
    {
      id: 1,
      icon: (
        <a href="https://www.facebook.com/hiepfk.128">
          <MdFacebook className="about_icon fb" />
        </a>
      ),
      text: "Facebook",
      link: "https://www.facebook.com/hiepfk.128",
    },
    {
      id: 2,
      icon: (
        <a href="https://www.instagram.com/hiep.fk/">
          <BsInstagram className="about_icon ig" />
        </a>
      ),
      text: "Instagram",
      link: "https://www.instagram.com/hiep.fk/",
    },
    {
      id: 3,
      icon: (
        <a href="https://github.com/HiepFk">
          <ImGithub className="about_icon git" />
        </a>
      ),
      text: "Github",
      link: "https://github.com/HiepFk",
    },
    {
      id: 4,
      icon: <MdEmail className="about_icon email"></MdEmail>,
      text: "hiepnh.fk",
      link: "#",
    },
  ];

  return (
    <div className="about">
      <div className="about_wrapper">
        <div className="about_title">About</div>
        <div className="about_desc">
          On lofi.co, users can choose from a growing catalog of original
          artworks to interact with to perform actions like opening the sound
          mixer or playing background noises (rain, birds chirping, etc.).
          Sometimes, these actions will also alter the scene’s visuals. In the
          mixer, it's possible to create the perfect vibe by customizing the
          background music loop to your preference, choosing between a chill,
          jazzy or sleepy vibe and then mixing it with the ambient noises. It's
          possible to save your favorite combination of art, music and sounds as
          a template. The platforms also offers a suite of productivity tools,
          which is set in its own customizable illustration and allows users to
          work/study in sessions. The tools include a customizable pomodoro
          timer with an integrated task list, a notes app and a history log with
          stats to check back on all your past sessions.
        </div>
        <div className="about_desc">
          We believe that there’s a close connection between lofi and mental
          health, we hope that our website is helping people relax or even make
          activities such as studying or working a little bit less stressful. To
          further help the cause, we have decided to donate 1% of our monthly
          revenue to mental health organizations worldwide.
        </div>
        <div className="about_desc">
          Trang website này được clone lại từ trang lofi.co bởi Hiệp. Trang web
          có thể chậm một chút. Tôi hy vọng bạn thích nó . Chúc bạn có những
          phút giây chill ❤
        </div>
        <div className="about_icons">
          {items.map((item) => {
            return (
              <a href={item.link} className="about_container ">
                {item.icon}
                <div className="icon_text">{item.text}</div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
