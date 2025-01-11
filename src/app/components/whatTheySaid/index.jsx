import Comment from "@/app/homePageComps/comment";
import "./whatTheySaid.css";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import useHomeStore from "@/store/homeStore";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

const comments = [
  {
    comment: "A problem-solver who turned our ideas into reality.",
    name: "Liam Carter",
    position: "Chief Technology Officer",
    company: "CodeCraft Inc.",
    picture: "liam",
  },
  {
    comment: `Muftau's expertise elevated our product to the next level.`,
    name: "Sophia Hayes",
    position: "Chief Product Officer",
    company: "HyperLoom Analytics",
    picture: "sophia",
  },
  {
    comment: "Outstanding attention to detail and commitment to quality.",
    name: "Dakota Bailey",
    position: "Agile Project Manager",
    company: "Neural Nexus",
    picture: "dakota",
  },
  {
    comment: `A true professional. He's our go-to developer for every project.`,
    name: "Ethan Parker",
    position: "Chief Technology Officer (CTO)",
    company: "PixelPeak Studios",
    picture: "ethan",
  },
];

const WhatTheySaid = () => {
  const WTSWrapperRef = useRef(null);
  const commentPicsRef = useRef(null);

  const activeCommentIndex = useHomeStore((state) => state.activeCommentIndex);
  const loadingScreen = useHomeStore((state) => state.loadingScreen);

  useEffect(() => {
    if (loadingScreen) return;

    gsap.registerPlugin(ScrollTrigger);

    const parent = WTSWrapperRef?.current;
    const child = commentPicsRef?.current;

    gsap.to(child, {
      scale: 1,
      duration: 0.3,
      ease: CustomEase.create("custom", "M0,0 C0.796,0 0.198,1 1,1 "),
      scrollTrigger: {
        trigger: parent,
        start: "top 50%",
        end: "bottom 55%",
        onEnter: () => {
          gsap.to(child, {
            scale: 1,
            duration: 0.3,
            ease: CustomEase.create("custom", "M0,0 C0.796,0 0.198,1 1,1 "),
          });
        },
        onLeave: () => {
          gsap.to(child, {
            scale: 0,
            duration: 0.3,
            ease: CustomEase.create("custom", "M0,0 C0.796,0 0.198,1 1,1 "),
          });
        },
        onEnterBack: () => {
          gsap.to(child, {
            scale: 1,
            duration: 0.3,
            ease: CustomEase.create("custom", "M0,0 C0.796,0 0.198,1 1,1 "),
          });
        },
        onLeaveBack: () => {
          gsap.to(child, {
            scale: 0,
            duration: 0.3,
            ease: CustomEase.create("custom", "M0,0 C0.796,0 0.198,1 1,1 "),
          });
        },
      },
    });
  }, [loadingScreen]);

  return (
    <div ref={WTSWrapperRef} className="whatTheySaid-wrapper">
      <div className="wts-contentWrapper">
        {comments?.map((comment, i) => (
          <Comment key={i} comment={comment} index={i} />
        ))}
      </div>
      <div ref={commentPicsRef} className="commentPictures">
        {comments?.map((comment, i) => (
          <div
            key={i}
            className={`picture-container ${
              activeCommentIndex == i && "visible"
            }`}
          >
            <Image
              src={`/images/comments/${comment?.picture}.jpeg`}
              width={400}
              height={400}
              alt="clients picture"
              className="commentImage"
            />
          </div>
        ))}
        <div className={`pictureIndicator`}>
          <Image
            src={`/images/icons/down.png`}
            width={100}
            height={100}
            alt="down icon"
            className="indicatorIcon"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatTheySaid;
