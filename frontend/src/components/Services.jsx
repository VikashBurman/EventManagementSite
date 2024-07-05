import React from "react";
import photo1 from '../assets/birthday.jpg'
import photo2 from '../assets/wedding.jpg'
import photo3 from '../assets//party.jpg'


const Services = () => {
  return (
    <section className="pt-14">
      <div class="mx-auto px-16 sm:container pb-10 ">
        <div class="border-blue-500 border-l-[5px] text-center border-r-[5px] pl-5">
          <h2 class="mb-2 text-4xl font-semibold">OUR SERVICES</h2>
        </div>
      </div>

      <div class="mx-auto my-10 grid max-w-screen-xl gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        <div class="group cursor mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4">
          <div class="flex h-60 flex-col justify-between overflow-hidden">
            <img
              src={photo1}
              class="group-hover:scale-110 h-full w-full object-cover duration-200"
            />
          </div>
          <div class="flex-1 overflow-hidden bg-white px-6 py-8">
            <h5 class="group-hover:text-indigo-600 mb-4 text-xl font-bold">
            Birthday Party
            </h5>
            <p class="mb-8 text-gray-600">
            Make your birthday unforgettable with EventPlanner's expert reservation services, ensuring a seamless and memorable celebration.
            </p>
            {/* <div class="flex justify-between">
              <a
                href="#"
                class="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600"
              >
                <span>▷</span>
                <span class="underline">Watch Now</span>
              </a>
              <div class="max-w-full flex-none lg:px-4">
                <h5 class="text-lg font-bold">Video 6</h5>
              </div>
            </div> */}
          </div>
        </div>
        <div class="group cursor mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4">
          <div class="flex h-60 flex-col justify-between overflow-hidden">
            <img
            src={photo2}
              class="group-hover:scale-110 h-full w-full object-cover duration-200"
            />
          </div>
          <div class="flex-1 overflow-hidden bg-white px-6 py-8">
            <h5 class="group-hover:text-indigo-600 mb-4 text-xl font-bold">
              
Wedding Anniversary
            </h5>
            <p class="mb-8 text-gray-600">
            Celebrate your love with EventPlanner's seamless reservation services, creating an elegant and memorable wedding anniversary event.
            </p>
            {/* <div class="flex justify-between">
              <a
                href="#"
                class="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600"
              >
                <span>▷</span>
                <span class="underline">Watch Now</span>
              </a>
              <div class="max-w-full flex-none lg:px-4">
                <h5 class="text-lg font-bold">Video 6</h5>
              </div>
            </div> */}
          </div>
        </div>
        <div class="group cursor mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4">
          <div class="flex h-60 flex-col justify-between overflow-hidden">
            <img
            src={photo3}
              class="group-hover:scale-110 h-full w-full object-cover duration-200"
            />
          </div>
          <div class="flex-1 overflow-hidden bg-white px-6 py-8">
            <h5 class="group-hover:text-indigo-600 mb-4 text-xl font-bold">
            Party Planning
            </h5>
            <p class="mb-8 text-gray-600">
            EventPlanner offers seamless party planning services, ensuring every detail is perfect for an unforgettable celebration.
            </p>
            {/* <div class="flex justify-between">
              <a
                href="#"
                class="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600"
              >
                <span>▷</span>
                <span class="underline">Watch Now</span>
              </a>
              <div class="max-w-full flex-none lg:px-4">
                <h5 class="text-lg font-bold">Video 6</h5>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
