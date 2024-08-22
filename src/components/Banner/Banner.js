"use client";

import { useGSAP } from "@gsap/react";
import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);
const Banner = () => {
  useGSAP(() => {
    const timeline = gsap.timeline();

    timeline.to(".banner_items", {
      scrollTrigger: {
        // markers: "true",
        trigger: ".banner_items",
        pin: ".banner_items",
        scrub: 1,
        start: "top top",
        // end: "bottom bottom",
      },
    });

    timeline.to(".top", {
      y: "-100%",
      duration: 5,
      ease: "slow(0.7,0.7,false)",
      // markers: true,
      scrollTrigger: {
        trigger: ".top",
        scrub: 1,
        start: "1% top",
      },
    });

    timeline.to(".bottom", {
      y: "100%",
      duration: 5,
      ease: "slow(0.7,0.7,false)",
      // markers: true,
      scrollTrigger: {
        trigger: ".bottom",
        scrub: 1,
        start: "-100% top",
      },
    });

    timeline.to(".link", {
      color: "#fff",
      scrollTrigger: {
        trigger: ".link",
        scrub: 1,
        start: "top top",
      },
    });

    timeline.to(".conText", {
      color: "#fff",
      scrollTrigger: {
        trigger: ".conText",
        scrub: 1,
        start: "top top",
      },
    });

    timeline.to(".about_items", {
      scrollTrigger: {
        trigger: ".about_items",
        scrub: 1,
        start: "top top",
        pin: ".about_items",
      },
    });

    timeline.to(".text", {
      opacity: 1,
      duration: 10,
      delay: 2,
      scrollTrigger: {
        trigger: ".text",
        pin: ".text",
        scrub: 1,
        start: "20% top",
        end: "50% bottom",
      },
    });

    timeline.to(".abut_1", {
      y: -120,
      width: "220px",
      height: "260px",
      scrollTrigger: {
        trigger: ".abut_1",
        scrub: 1,
        start: "100% bottom",
      },
    });

    timeline.to(".about_items", {
      scrollTrigger: {
        trigger: ".about_items",
        scrub: 1,
        start: "1% top",
        pin: ".about_items",
      },
    });

    timeline.to(".abut_2", {
      y: -100,

      scrollTrigger: {
        trigger: ".abut_2",
        scrub: 1,
        start: "bottom bottom",
      },
    });

    timeline.to(".text", {
      opacity: 0.5,
      duration: 10,
      delay: 2,
      scrollTrigger: {
        trigger: ".text",
        pin: ".text",
        scrub: 1,
        start: "top top",
        end: "50% bottom",
      },
    });
  });

  return (
    <>
      <div className="banner_main">
        <div className="navbar">
          <ul className="menu_list">
            <li>
              <Link className="link" href="">
                <sup className="small-text">[1]</sup>
                &nbsp; INFO
              </Link>
            </li>
            <li>
              <Link className="link" href="">
                <sup className="small-text">[2]</sup>
                &nbsp; Work
              </Link>
            </li>
            <li>
              <Link className="link" href="">
                <sup className="small-text">[3]</sup>
                &nbsp; Archive
              </Link>
            </li>
            <li>
              <Link className="link" href="">
                <sup className="small-text">[4]</sup>
                &nbsp; Contact
              </Link>
            </li>
          </ul>

          <ul className="contact">
            <li>
              <Link className="link" href="">
                Jordan Gilroy
              </Link>
              <p className="conText">Digital Designer</p>
            </li>
            <li>
              <Link className="link" href="">
                10:42 AM [uk]
              </Link>
              <p className="conText">Digital Designer</p>
            </li>
          </ul>
        </div>

        <div className="container">
          <div className="banner_items">
            <div className="top"></div>
            <div className="bottom">
              <div className="bottom_items ">
                <div className="content">
                  <p className="descrip">
                    I craft websites that align with your brand <br />
                    and engage your audience – creating <br />
                    meaningful and memorable experiences.
                  </p>
                  <p className="small-text">[scroll to explore]</p>
                </div>
                <div className="img_opt ">
                  <div className="overlay"></div>
                  <div className="card card_1">
                    <span className="small-text">[01]</span>
                    <figure>
                      <img src="/img-1.avif" />
                    </figure>
                  </div>
                  <div className="card card_2">
                    <span className="small-text">[02]</span>
                    <figure>
                      <img src="/img-2.avif" />
                    </figure>
                  </div>
                  <div className="card card_3">
                    <span className="small-text">[03]</span>
                    <figure>
                      <img src="/img-3.avif" />
                    </figure>
                  </div>
                  <div className="card card_4">
                    <span className="small-text">[04]</span>
                    <figure>
                      <img src="/img-4.avif" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about_main">
            <div className="about_items">
              <p className="text">About</p>
            </div>

            <div className="about_gallary">
              <figure className="abut_1">
                <img src="/img-3.avif" alt="" />
              </figure>

              <figure className="abut_2">
                <img src="/img-4.avif" alt="" />
              </figure>

              <figure className="abut_1">
                <img src="/img-3.avif" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Banner;
