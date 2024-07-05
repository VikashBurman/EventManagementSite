import React from 'react'

const About = () => {
  return (
    <section className='pt-10'>
      <div class="mx-auto my-10 max-w-lg px-4 text-gray-600 md:max-w-screen-lg">
  <div class="mb-10 flex flex-col border-t-4 border-blue-600 pt-4 md:flex-row">
    <h2 class="mr-auto mb-4 text-4xl font-medium lg:text-3xl">About EventPlanner</h2>
    {/* <a href="#" class="text-lg font-medium underline hover:text-blue-600">Read our Story</a> */}
  </div>
  <div class="flex flex-col md:flex-row">
    <div>
      <p class="mb-4 md:pr-10 md:text-xl md:leading-relaxed lg:pr-28">Welcome to EventPlanner, your trusted partner in creating unforgettable events. We specialize in booking reservations for a wide range of occasions, ensuring a seamless and elegant experience from start to finish. Whether you're planning a corporate gathering, a wedding, or a private celebration, our team is dedicated to making your vision a reality.</p>
      <p class="md:pr-10 md:text-xl md:leading-relaxed lg:pr-28">Choose EventPlanner for your next event and experience the ease of seamless planning, the beauty of elegant execution, and the joy of memorable celebrations. </p>
    </div>
    <p class="hidden uppercase md:block md:text-7xl">
      Since <br />
      <span class="whitespace-nowrap text-blue-600">10 Years</span>
    </p>
  </div>
</div>

    </section>
  )
}

export default About