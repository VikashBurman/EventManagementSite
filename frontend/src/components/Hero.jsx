import React from 'react'

const Hero = () => {
  return (
    <div class="bg-gradient-to-r from-blue-600 to-indigo-500 h-[90vh]">
    <div class="mx-auto h-full px-4 py-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-16 xl:py-28">
      <div class="flex flex-col items-center justify-between">
        <div class="">
          <div class="max-w-3xl">
            <h1 class="mb-6 text-center text-5xl font-light tracking-tight text-white sm:text-5xl lg:text-7xl">Seamless reservations <span class="my-1 inline-block font-serif font-bold text-white">Elegant events </span></h1>
            <p class="text-center text-base text-gray-100">Effortlessly book unforgettable events with EventPlanner, your trusted partner for seamless reservations.</p>
          </div>
  
          {/* <div class="divide-gray-300/30 mt-12 flex flex-col items-center justify-center space-y-3 text-sm text-gray-700 sm:flex-row sm:items-start sm:space-y-0 sm:divide-x">
            <div class="flex max-w-xs space-x-2 px-4">
              <span class="shrink-0 flex h-14 w-14 items-center justify-center rounded-xl bg-white p-2.5 text-purple-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"></path>
                </svg>
              </span>
              <p class="text-gray-100">Your partner in elegant events and seamless reservations.</p>
            </div>
            <div class="flex max-w-xs space-x-2 px-4">
              <span class="shrink-0 flex h-14 w-14 items-center justify-center rounded-xl bg-white p-2.5 text-rose-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"></path>
                </svg>
              </span>
              <p class="text-gray-100">Your memorable celebrations with EventPlanner.</p>
            </div>
          </div> */}
        </div>
        <div class="relative mt-20 hidden lg:block">
          <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto my-6 h-10 w-10 animate-bounce rounded-full bg-blue-50 p-2 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path>
          </svg>
          <div class="w-fit mx-auto flex overflow-hidden rounded-3xl bg-orange-400" role="image-container"></div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Hero