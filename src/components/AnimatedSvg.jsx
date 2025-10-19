import React from "react";

import { motion } from "framer-motion";

//PersonalizedCard
export const PersonalizedIcon = ({ isHovering }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-id"
      variants={{
        initial: { rotate: 0, scale: 1, y: 0 },
        hover: { scale: 1, y: 0, rotate: 0 },
      }}
      initial="initial"
      animate={isHovering ? "hover" : "initial"}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <motion.path
        d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"
        variants={{
          initial: { pathLength: 1, opacity: 1 },
          hover: { pathLength: [0, 1], opacity: [0, 1] },
        }}
        transition={{ duration: 0.4 }}
      />
      <motion.path
        d="M9 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"
        variants={{
          initial: { scale: 1, opacity: 1 },
          hover: { scale: [0.8, 1.2, 1], opacity: [0.5, 1] },
        }}
        transition={{ duration: 0.5, delay: 0.1 }}
      />
      <motion.path
        d="M15 8l2 0"
        variants={{
          initial: { x: 0, opacity: 1 },
          hover: { x: [0, 2, 0], opacity: [1, 0.5, 1] },
        }}
        transition={{ duration: 0.4, delay: 0.15 }}
      />
      <motion.path
        d="M15 12l2 0"
        variants={{
          initial: { x: 0, opacity: 1 },
          hover: { x: [0, 2, 0], opacity: [1, 0.5, 1] },
        }}
        transition={{ duration: 0.4, delay: 0.2 }}
      />
      <motion.path
        d="M7 16l10 0"
        variants={{
          initial: { pathLength: 1, opacity: 1 },
          hover: { pathLength: [0, 1], opacity: [0, 1] },
        }}
        transition={{ duration: 0.5, delay: 0.25 }}
      />
    </motion.svg>
  );
};

export const PersonalizedCard = () => {
  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      className="bg-blue-100 rounded-2xl shadow-lg px-4 py-2 md:py-4 flex flex-col items-start text-center hover:shadow-blue-400 transition duration-300 hover:cursor-pointer"
    >
      <h3 className="text-lg md:text-2xl  font-bold text-gray-600 mb-3 flex items-center gap-x-2">
        <PersonalizedIcon isHovering={isHovering} /> Personalized
      </h3>
      <p className="text-gray-700 text-base text-start">
        A personalized weather report that shows the best time and place for
        couples to enjoy outdoor activities based on their preferences and
        location.
      </p>
    </motion.div>
  );
};

//GalleryIcon
export const GalleryIcon = ({ isHovering }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-photo-minus"
      variants={{
        initial: { rotate: 0, scale: 1, y: 0 },
        hover: { scale: 1, y: 0, rotate: 0 },
      }}
      initial="initial"
      animate={isHovering ? "hover" : "initial"}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <motion.path
        d="M15 8h.01"
        variants={{
          initial: { scale: 1, opacity: 1 },
          hover: { scale: [0.8, 1.4, 1], opacity: [0.5, 1] },
        }}
        transition={{ duration: 0.5 }}
      />
      <motion.path
        d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v9"
        variants={{
          initial: { pathLength: 1, opacity: 1 },
          hover: { pathLength: [0, 1], opacity: [0, 1] },
        }}
        transition={{ duration: 0.4, delay: 0.1 }}
      />
      <motion.path
        d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4"
        variants={{
          initial: { pathLength: 1, opacity: 1 },
          hover: { pathLength: [0, 1], opacity: [0, 1] },
        }}
        transition={{ duration: 0.5, delay: 0.15 }}
      />
      <motion.path
        d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l2 2"
        variants={{
          initial: { pathLength: 1, opacity: 1 },
          hover: { pathLength: [0, 1], opacity: [0, 1] },
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <motion.path
        d="M16 19h6"
        variants={{
          initial: { x: 0, opacity: 1 },
          hover: { x: [0, 3, 0], opacity: [1, 0.5, 1] },
        }}
        transition={{ duration: 0.4, delay: 0.25 }}
      />
    </motion.svg>
  );
};

export const GalleryCard = () => {
  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      className="bg-blue-100 rounded-2xl shadow-lg px-4 py-2 md:py-4 flex flex-col items-start text-center hover:shadow-blue-400 transition duration-300 hover:cursor-pointer"
    >
      <h3 className="text-lg md:text-2xl font-bold text-gray-600 mb-3 flex items-center gap-x-2">
        <GalleryIcon isHovering={isHovering} />
        Gallery
      </h3>
      <p className="text-gray-700 text-base text-start">
        A cloud gallery that allows users to upload and share their photos and
        videos of the sky and the weather with other users and get feedback and
        tips.
      </p>
    </motion.div>
  );
};

//MoodTrackerIcon
export const MoodTrackerIcon = ({ isHovering }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
      variants={{
        initial: { rotate: 0, scale: 1, y: 0 },
        hover: { scale: 1, y: 0, rotate: 0 },
      }}
      initial="initial"
      animate={isHovering ? "hover" : "initial"}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <motion.path
        d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
        variants={{
          initial: { pathLength: 1, opacity: 1, scale: 1 },
          hover: {
            pathLength: [0, 1],
            opacity: [0, 1],
            scale: [0.9, 1.05, 1],
          },
        }}
        transition={{ duration: 0.6 }}
      />
    </motion.svg>
  );
};

export const MoodTrackerCard = () => {
  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      className="bg-blue-100 rounded-2xl shadow-lg px-4 py-2 md:py-4 flex flex-col items-start text-center hover:shadow-blue-400 transition duration-300 hover:cursor-pointer"
    >
      <h3 className="text-lg md:text-2xl font-bold text-gray-600 mb-3 flex items-center gap-x-2">
        <MoodTrackerIcon isHovering={isHovering} />
        Mood Tracker
      </h3>
      <p className="text-gray-700 text-base text-start">
        A mood tracker that analyzes the user's mood based on the weather and
        suggests activities, music, or quotes to cheer them up or calm them
        down.
      </p>
    </motion.div>
  );
};
//Bellicon
export const BellIcon = ({ isHovering }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-bell"
      animate={
        isHovering
          ? {
              rotate: [0, -15, 15, -15, 15, -10, 10, -5, 5, 0],
            }
          : { rotate: 0 }
      }
      transition={{ duration: 0.5 }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
      <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
    </motion.svg>
  );
};

export const NotificationIcon = () => {
  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <motion.div
      className="flex-1 md:pr-10 mb-8 md:mb-0 cursor-pointer"
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
        Plan Your Outdoor Activities with Ease
      </h2>
      <p className="text-lg text-blue-900 mb-4 flex items-center gap-2">
        <BellIcon isHovering={isHovering} />
        <span>
          Get notified before rain stops. Plan your outdoor activities
        </span>
      </p>
      <p className="text-base text-gray-700">
        Our platform combines accuracy, community, and well-being, making
        weather updates more meaningful and interactive than ever before.
      </p>
    </motion.div>
  );
};

// Weather Icons
// GustsIcon
export const GustsIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-windsock"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 3v18" />
      <path d="M6 11l12 -1v-4l-12 -1" />
      <path d="M10 5.5v5" />
      <path d="M14 6v4" />
      <path d="M4 21h4" />
    </svg>
  );
};

//Windicon
export const WindIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-windsock"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 3v18" />
      <path d="M6 11l12 -1v-4l-12 -1" />
      <path d="M10 5.5v5" />
      <path d="M14 6v4" />
      <path d="M4 21h4" />
    </svg>
  );
};
//Temp icon
export const TempIcon = () => {
  return (
<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-temperature"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" /><path d="M10 9l4 0" /></svg>
  );
};

//rain drop
export const RainDropIcon = () => {
  return (
<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-droplet"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7.502 19.423c2.602 2.105 6.395 2.105 8.996 0c2.602 -2.105 3.262 -5.708 1.566 -8.546l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546z" /></svg>  );
};

//sunicon
export const SunIcon = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="f94ecf85">
        <g id="f0fdb134">
          <path
            d="M12.4999 1.30209C12.9314 1.30209 13.2812 1.65187 13.2812 2.08334V3.12501C13.2812 3.55648 12.9314 3.90626 12.4999 3.90626C12.0684 3.90626 11.7187 3.55648 11.7187 3.12501V2.08334C11.7187 1.65187 12.0684 1.30209 12.4999 1.30209Z"
            fill="white"
          ></path>
          <path
            d="M12.4999 6.51043C9.19196 6.51043 6.51034 9.19206 6.51034 12.5C6.51034 15.808 9.19196 18.4896 12.4999 18.4896C15.8079 18.4896 18.4895 15.808 18.4895 12.5C18.4895 9.19206 15.8079 6.51043 12.4999 6.51043Z"
            fill="white"
          ></path>
          <path
            d="M5.68667 4.58191C5.38157 4.27681 4.88691 4.27681 4.58181 4.58191C4.27671 4.88701 4.27671 5.38167 4.58181 5.68677L5.31838 6.42334C5.62348 6.72843 6.11814 6.72843 6.42323 6.42334C6.72833 6.11824 6.72833 5.62358 6.42323 5.31848L5.68667 4.58191Z"
            fill="white"
          ></path>
          <path
            d="M23.6978 12.5C23.6978 12.9315 23.3481 13.2813 22.9166 13.2813H21.8749C21.4434 13.2813 21.0937 12.9315 21.0937 12.5C21.0937 12.0685 21.4434 11.7188 21.8749 11.7188H22.9166C23.3481 11.7188 23.6978 12.0685 23.6978 12.5Z"
            fill="white"
          ></path>
          <path
            d="M20.418 5.68676C20.7231 5.38166 20.7231 4.887 20.418 4.5819C20.1129 4.27681 19.6183 4.27681 19.3132 4.5819L18.5766 5.31847C18.2715 5.62357 18.2715 6.11823 18.5766 6.42333C18.8817 6.72842 19.3764 6.72842 19.6814 6.42333L20.418 5.68676Z"
            fill="white"
          ></path>
          <path
            d="M12.4999 21.0938C12.9314 21.0938 13.2812 21.4435 13.2812 21.875V22.9167C13.2812 23.3482 12.9314 23.6979 12.4999 23.6979C12.0684 23.6979 11.7187 23.3482 11.7187 22.9167V21.875C11.7187 21.4435 12.0684 21.0938 12.4999 21.0938Z"
            fill="white"
          ></path>
          <path
            d="M19.6815 18.5767C19.3764 18.2716 18.8818 18.2716 18.5767 18.5767C18.2716 18.8818 18.2716 19.3765 18.5767 19.6816L19.3132 20.4181C19.6183 20.7232 20.113 20.7232 20.4181 20.4181C20.7232 20.113 20.7232 19.6184 20.4181 19.3133L19.6815 18.5767Z"
            fill="white"
          ></path>
          <path
            d="M3.90617 12.5C3.90617 12.9315 3.55639 13.2813 3.12492 13.2813H2.08325C1.65178 13.2813 1.302 12.9315 1.302 12.5C1.302 12.0685 1.65178 11.7188 2.08325 11.7188H3.12492C3.55639 11.7188 3.90617 12.0685 3.90617 12.5Z"
            fill="white"
          ></path>
          <path
            d="M6.42317 19.6815C6.72826 19.3764 6.72826 18.8818 6.42317 18.5767C6.11807 18.2716 5.62341 18.2716 5.31831 18.5767L4.58174 19.3133C4.27664 19.6184 4.27664 20.113 4.58174 20.4181C4.88684 20.7232 5.3815 20.7232 5.6866 20.4181L6.42317 19.6815Z"
            fill="white"
          ></path>
        </g>
      </g>
    </svg>
  );
};

// Pressure Watch
export const PressureIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-stopwatch"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 13a7 7 0 1 0 14 0a7 7 0 0 0 -14 0z" />
      <path d="M14.5 10.5l-2.5 2.5" />
      <path d="M17 8l1 -1" />
      <path d="M14 3h-4" />
    </svg>
  );
};

//Cloud icon
export const CloudIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-cloud"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878" />
    </svg>
  );
};

// Daylight Icon
export const DayLightIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-sun-moon"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9.173 14.83a4 4 0 1 1 5.657 -5.657" />
      <path d="M11.294 12.707l.174 .247a7.5 7.5 0 0 0 8.845 2.492a9 9 0 0 1 -14.671 2.914" />
      <path d="M3 12h1" />
      <path d="M12 3v1" />
      <path d="M5.6 5.6l.7 .7" />
      <path d="M3 21l18 -18" />
    </svg>
  );
};

export const SnowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-snowflake"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 4l2 1l2 -1" />
      <path d="M12 2v6.5l3 1.72" />
      <path d="M17.928 6.268l.134 2.232l1.866 1.232" />
      <path d="M20.66 7l-5.629 3.25l.01 3.458" />
      <path d="M19.928 14.268l-1.866 1.232l-.134 2.232" />
      <path d="M20.66 17l-5.629 -3.25l-2.99 1.738" />
      <path d="M14 20l-2 -1l-2 1" />
      <path d="M12 22v-6.5l-3 -1.72" />
      <path d="M6.072 17.732l-.134 -2.232l-1.866 -1.232" />
      <path d="M3.34 17l5.629 -3.25l-.01 -3.458" />
      <path d="M4.072 9.732l1.866 -1.232l.134 -2.232" />
      <path d="M3.34 7l5.629 3.25l2.99 -1.738" />
    </svg>
  );
};
