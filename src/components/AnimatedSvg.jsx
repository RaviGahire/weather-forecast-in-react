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
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-windsock"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 3v18" /><path d="M6 11l12 -1v-4l-12 -1" /><path d="M10 5.5v5" /><path d="M14 6v4" /><path d="M4 21h4" /></svg>
  )
}

//Windicon
export const WindIcon = () => {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-windsock"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 3v18" /><path d="M6 11l12 -1v-4l-12 -1" /><path d="M10 5.5v5" /><path d="M14 6v4" /><path d="M4 21h4" /></svg>
  )
}
//Temp icon
export const TempIcon = () => {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="7aab0e78" clip-path="url(#adf714cf)">
        <g id="b2f4cbc7">
          <path id="beb4c430" d="M8.33325 5.20833C8.33325 4.10326 8.77224 3.04345 9.55364 2.26205C10.335 1.48065 11.3949 1.04166 12.4999 1.04166C13.605 1.04166 14.6648 1.48065 15.4462 2.26205C16.2276 3.04345 16.6666 4.10326 16.6666 5.20833V10.6823C17.9405 11.5693 18.8981 12.8398 19.4 14.3088C19.9019 15.7778 19.9218 17.3686 19.457 18.8497C18.9921 20.3309 18.0667 21.625 16.8154 22.5437C15.5641 23.4624 14.0523 23.9579 12.4999 23.9579C10.9476 23.9579 9.43572 23.4624 8.18444 22.5437C6.93315 21.625 6.00773 20.3309 5.54287 18.8497C5.078 17.3686 5.09796 15.7778 5.59984 14.3088C6.10171 12.8398 7.05931 11.5693 8.33325 10.6823V5.20833ZM9.52492 12.3906C8.61468 13.0241 7.93038 13.9315 7.57164 14.9808C7.2129 16.0301 7.19844 17.1665 7.53038 18.2247C7.86231 19.2828 8.52331 20.2073 9.41714 20.8637C10.311 21.5201 11.391 21.874 12.4999 21.874C13.6089 21.874 14.6889 21.5201 15.5827 20.8637C16.4765 20.2073 17.1375 19.2828 17.4695 18.2247C17.8014 17.1665 17.7869 16.0301 17.4282 14.9808C17.0695 13.9315 16.3852 13.0241 15.4749 12.3906L14.5833 11.7687V5.20833C14.5833 4.6558 14.3638 4.12589 13.9731 3.73519C13.5824 3.34449 13.0525 3.125 12.4999 3.125C11.9474 3.125 11.4175 3.34449 11.0268 3.73519C10.6361 4.12589 10.4166 4.6558 10.4166 5.20833V11.7687L9.52492 12.3906ZM11.4583 12.6312V5.20833H13.5416V12.6312C14.5213 12.8872 15.3743 13.491 15.9414 14.3299C16.5085 15.1687 16.7509 16.1853 16.6233 17.1898C16.4957 18.1943 16.0069 19.118 15.2481 19.7885C14.4893 20.459 13.5125 20.8304 12.4999 20.8333C11.4851 20.8343 10.5047 20.4649 9.74291 19.7944C8.9811 19.1239 8.4902 18.1984 8.36234 17.1916C8.23447 16.1848 8.47845 15.166 9.04847 14.3264C9.61849 13.4867 10.4754 12.884 11.4583 12.6312ZM12.4999 18.75C13.0525 18.75 13.5824 18.5305 13.9731 18.1398C14.3638 17.7491 14.5833 17.2192 14.5833 16.6667C14.5833 16.1141 14.3638 15.5842 13.9731 15.1935C13.5824 14.8028 13.0525 14.5833 12.4999 14.5833C11.9474 14.5833 11.4175 14.8028 11.0268 15.1935C10.6361 15.5842 10.4166 16.1141 10.4166 16.6667C10.4166 17.2192 10.6361 17.7491 11.0268 18.1398C11.4175 18.5305 11.9474 18.75 12.4999 18.75Z" fill="white"></path>
        </g>
      </g>
      <defs>
        <clipPath id="adf714cf">
          <rect width="25" height="25" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  )

}

//rain drop
export const RainDropIcon = () => {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="012c52f2">
        <g id="9de3770f">
          <path id="b84ceff6" d="M13.1772 2.33333L12.5001 1.75L11.823 2.33333C11.4584 2.60417 4.16675 8.95833 4.16675 14.5833C4.16675 16.7935 5.04472 18.9131 6.60752 20.4759C8.17033 22.0387 10.2899 22.9167 12.5001 22.9167C14.7102 22.9167 16.8298 22.0387 18.3926 20.4759C19.9554 18.9131 20.8334 16.7935 20.8334 14.5833C20.8334 8.95833 13.5417 2.60417 13.1772 2.33333ZM14.823 19.2396L13.8959 17.375C14.4148 17.116 14.8514 16.7176 15.1567 16.2246C15.4621 15.7316 15.6243 15.1633 15.6251 14.5833H17.7084C17.7074 15.5509 17.4369 16.499 16.9273 17.3214C16.4176 18.1439 15.689 18.8081 14.823 19.2396Z" fill="white"></path>
        </g>
      </g>
    </svg>
  )
}

//sunicon
export const SunIcon = () => {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="f94ecf85">
        <g id="f0fdb134">
          <path d="M12.4999 1.30209C12.9314 1.30209 13.2812 1.65187 13.2812 2.08334V3.12501C13.2812 3.55648 12.9314 3.90626 12.4999 3.90626C12.0684 3.90626 11.7187 3.55648 11.7187 3.12501V2.08334C11.7187 1.65187 12.0684 1.30209 12.4999 1.30209Z" fill="white"></path>
          <path d="M12.4999 6.51043C9.19196 6.51043 6.51034 9.19206 6.51034 12.5C6.51034 15.808 9.19196 18.4896 12.4999 18.4896C15.8079 18.4896 18.4895 15.808 18.4895 12.5C18.4895 9.19206 15.8079 6.51043 12.4999 6.51043Z" fill="white"></path>
          <path d="M5.68667 4.58191C5.38157 4.27681 4.88691 4.27681 4.58181 4.58191C4.27671 4.88701 4.27671 5.38167 4.58181 5.68677L5.31838 6.42334C5.62348 6.72843 6.11814 6.72843 6.42323 6.42334C6.72833 6.11824 6.72833 5.62358 6.42323 5.31848L5.68667 4.58191Z" fill="white"></path>
          <path d="M23.6978 12.5C23.6978 12.9315 23.3481 13.2813 22.9166 13.2813H21.8749C21.4434 13.2813 21.0937 12.9315 21.0937 12.5C21.0937 12.0685 21.4434 11.7188 21.8749 11.7188H22.9166C23.3481 11.7188 23.6978 12.0685 23.6978 12.5Z" fill="white"></path>
          <path d="M20.418 5.68676C20.7231 5.38166 20.7231 4.887 20.418 4.5819C20.1129 4.27681 19.6183 4.27681 19.3132 4.5819L18.5766 5.31847C18.2715 5.62357 18.2715 6.11823 18.5766 6.42333C18.8817 6.72842 19.3764 6.72842 19.6814 6.42333L20.418 5.68676Z" fill="white"></path>
          <path d="M12.4999 21.0938C12.9314 21.0938 13.2812 21.4435 13.2812 21.875V22.9167C13.2812 23.3482 12.9314 23.6979 12.4999 23.6979C12.0684 23.6979 11.7187 23.3482 11.7187 22.9167V21.875C11.7187 21.4435 12.0684 21.0938 12.4999 21.0938Z" fill="white"></path>
          <path d="M19.6815 18.5767C19.3764 18.2716 18.8818 18.2716 18.5767 18.5767C18.2716 18.8818 18.2716 19.3765 18.5767 19.6816L19.3132 20.4181C19.6183 20.7232 20.113 20.7232 20.4181 20.4181C20.7232 20.113 20.7232 19.6184 20.4181 19.3133L19.6815 18.5767Z" fill="white"></path>
          <path d="M3.90617 12.5C3.90617 12.9315 3.55639 13.2813 3.12492 13.2813H2.08325C1.65178 13.2813 1.302 12.9315 1.302 12.5C1.302 12.0685 1.65178 11.7188 2.08325 11.7188H3.12492C3.55639 11.7188 3.90617 12.0685 3.90617 12.5Z" fill="white"></path>
          <path d="M6.42317 19.6815C6.72826 19.3764 6.72826 18.8818 6.42317 18.5767C6.11807 18.2716 5.62341 18.2716 5.31831 18.5767L4.58174 19.3133C4.27664 19.6184 4.27664 20.113 4.58174 20.4181C4.88684 20.7232 5.3815 20.7232 5.6866 20.4181L6.42317 19.6815Z" fill="white"></path>
        </g>
      </g>
    </svg>
  )
}
