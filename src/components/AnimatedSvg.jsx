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
      animate={isHovering ? {
        rotate: [0, -15, 15, -15, 15, -10, 10, -5, 5, 0],
      } : { rotate: 0 }}
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
        <span>Get notified before rain stops. Plan your outdoor activities</span>
      </p>
      <p className="text-base text-gray-700">
        Our platform combines accuracy, community, and well-being, making weather updates more meaningful and interactive than ever before.
      </p>
    </motion.div>
  );
};