import gsap from "gsap";

gsap.to(".box", {
  opacity: 1,
  rotate: 360,
  background: "#ff6f61",
  // borderRadius: "50%",
  scale: 1.2,
  duration: 2,
  delay: 0.5,
  ease: "power1.inOut",
  // repeat: -1,
  // yoyo: true,
  // repeatDelay: 2,
  // paused: true,
  // stagger: 1
});
