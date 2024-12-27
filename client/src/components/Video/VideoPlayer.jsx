import { useRef, useEffect } from "react";

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });
    if (videoRef.current) observer.observe(videoRef.current);
    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      controls
      muted
      className="w-full h-60 object-cover rounded-lg"
    />
  );
};

export default VideoPlayer;
