import React from "react";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
    >
      <a
        href="https://quizapplication-aac2018606e1.herokuapp.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          class="rounded-t-lg w-full"
          src="https://res.cloudinary.com/dwn3n5zdb/image/upload/v1731312096/Screenshot_2024-11-11_130119_i4xsbj.png"
          alt=""
        />
      </a>
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Quiz Application
        </h5>

        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          This project enables users to add or edit exam questions, including
          the ability to upload questions from a DOCX file. It supports multiple
          correct options and provides a user-friendly interface for managing
          exam questions efficiently.
        </p>
        <a
          href="https://quizapplication-aac2018606e1.herokuapp.com/"
          target="_blank"
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
          rel="noreferrer"
        >
          Preview
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};
const Card1 = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
    >
      <a
        href="https://campbooking-f87605104897.herokuapp.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          class="rounded-t-lg w-full"
          src="https://res.cloudinary.com/dwn3n5zdb/image/upload/v1707052651/Screenshot_2024-02-04_181649_accrfw.png"
          alt=""
        />
      </a>
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          YelpCamp
        </h5>

        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Yelp Camp is a dynamic campground review platform, where users can
          share their experiences and discover new camping locations, built with
          robust and scalable technologies.
        </p>
        <a
          href="https://campbooking-f87605104897.herokuapp.com/"
          target="_blank"
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
          rel="noreferrer"
        >
          Preview
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};
const Card2 = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
    >
      <a href="https://corvit.edu.pk/" target="_blank" rel="noreferrer">
        <img
          class="rounded-t-lg w-full"
          src="https://res.cloudinary.com/dwn3n5zdb/image/upload/v1731311698/Screenshot_2024-11-11_124749_osyp8z.png"
          alt=""
        />
      </a>
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Corvit
        </h5>

        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Corvit is a premier educational institute specializing in IT courses,
          offering comprehensive training programs to equip students with
          industry-relevant skills.
        </p>
        <a
          href="https://corvit.edu.pk/"
          target="_blank"
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
          rel="noreferrer"
        >
          Preview
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};
const Card3 = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
    >
      <a
        href="https://dine-market.netlify.app/"
        target="_blank"
        rel="noreferrer"
        class="relative block"
      >
        <img
          class="rounded-t-lg w-full"
          src="https://res.cloudinary.com/dwn3n5zdb/image/upload/v1731321124/Screenshot_2024-11-11_153146_z5cx9a.png"
          alt=""
        />
        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-t-lg">
          <span class="text-white text-xl font-bold opacity-80">
            Coming Soon....
          </span>
        </div>
      </a>
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Dime Market
        </h5>

        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Dine Market is a sophisticated e-commerce clothing store, offering a
          seamless and interactive shopping experience, where users can explore
          a wide range of fashion products and make purchases.
        </p>
        <a
          href="https://dine-market.netlify.app/"
          target="_blank"
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
          rel="noreferrer"
        >
          Preview
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};
export { Card, Card1, Card2, Card3 };
// export default Card;
