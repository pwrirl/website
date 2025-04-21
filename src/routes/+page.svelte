<script>
  export let videoSrc = "/videos/hero_video.mp4";
  export let posterImage = "/images/hero_video_fallback.jpg";
  import { Icon, Filter, ArrowUp } from "svelte-hero-icons";
</script>
<div class="video-container">
  <video
    autoplay
    loop
    muted
    playsinline
    poster={posterImage}
    class="background-video"
    on:error={() => console.log('Video failed to load, showing poster image')}
  >
    <source src={videoSrc} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div class="overlay"></div>
  <div class="hero-content">
    <h1>Elevate Your Streams with <span class="text-[#e20074] font-bold">PowerIRL</span></h1>
    <p>PowerIRL offers Desktop & IRL Streaming Solutions. PowerIRL is for any streamer who requires the right services to help them succeed. We've built everything for you. All you need to do is GO LIVE!</p>
    <div class="button-group">
      <a href="/learn-more" class="btn btn-primary">Learn More</a>
      <a href="/sign-up" class="btn btn-secondary">Sign Up</a>
    </div>
  </div>
</div>
<section class="bg-[#e20074] text-white text-2xl md:text-4xl text-center font-bold py-12">
  <h2>Features</h2>
</section>
<section class="bg-[#222] text-white ">
  <div class="container mx-auto py-20 px-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div class="border border-gray-300 border-opacity-2 rounded-md p-5">
        <Icon src="{Filter}" />

        <h3 class="text-xl font-bold mb-2">Feature 1</h3>
        <p>PowerIRL provides a comprehensive suite of tools for streamers, including overlays, alerts, and more.</p>
      </div>
      <div class="border border-gray-300 border-opacity-2 rounded-md p-5">
        <img src="/images/feature1.png" alt="Feature 1" class="w-full h-32 object-cover mb-4 rounded-md"/>
        <h3 class="text-xl font-bold mb-2">Feature 1</h3>
        <p>PowerIRL provides a comprehensive suite of tools for streamers, including overlays, alerts, and more.</p>
      </div>
      <div class="border border-gray-300 border-opacity-2 rounded-md p-5">
        <img src="/images/feature1.png" alt="Feature 1" class="w-full h-32 object-cover mb-4 rounded-md"/>
        <h3 class="text-xl font-bold mb-2">Feature 1</h3>
        <p>PowerIRL provides a comprehensive suite of tools for streamers, including overlays, alerts, and more.</p>
      </div>
      <div class="border border-gray-300 border-opacity-2 rounded-md p-5">
        <img src="/images/feature1.png" alt="Feature 1" class="w-full h-32 object-cover mb-4 rounded-md"/>
        <h3 class="text-xl font-bold mb-2">Feature 1</h3>
        <p>PowerIRL provides a comprehensive suite of tools for streamers, including overlays, alerts, and more.</p>
      </div>
      <div class="border border-gray-300 border-opacity-2 rounded-md p-5">
        <img src="/images/feature1.png" alt="Feature 1" class="w-full h-32 object-cover mb-4 rounded-md"/>
        <h3 class="text-xl font-bold mb-2">Feature 1</h3>
        <p>PowerIRL provides a comprehensive suite of tools for streamers, including overlays, alerts, and more.</p>
      </div>
      <div class="border border-gray-300 border-opacity-2 rounded-md p-5">
        <img src="/images/feature1.png" alt="Feature 1" class="w-full h-32 object-cover mb-4 rounded-md"/>
        <h3 class="text-xl font-bold mb-2">Feature 1</h3>
        <p>PowerIRL provides a comprehensive suite of tools for streamers, including overlays, alerts, and more.</p>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container mx-auto p-6">
    <h2 class="text-2xl font-bold mb-4">Welcome to PowerIRL</h2>
    <p>PowerIRL is a community-driven platform that aims to provide resources and support for individuals interested in the world of powerlifting.</p>
    <p>Join us and be part of a growing community!</p>
  </div>
</section>
<section>
  
</section>
<style>
  .video-container {
    position: relative;
    width: 100%;
    height: 75vh; /* Fixed height to leave space for header/footer */
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .background-video {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures video/image covers the container */
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1; /* Video stays in the background */
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6); /* 40% opaque black overlay */
    z-index: 2; /* Overlay sits above video but below hero content */
  }

  .hero-content {
    position: relative;
    z-index: 3; /* Content stays above the overlay */
    text-align: center;
    color: #fff; /* White text for contrast */
    padding: 2rem;
    max-width: 90%;
  }

  .hero-content h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Shadow for readability */
  }

  .hero-content p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  }

  .button-group {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .btn {
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.3s ease;
  }

  .btn-primary {
    background-color: #e20074; /* Dodger blue */
    color: #fff;
  }

  .btn-primary:hover {
    background-color: #c70067;
  }

  .btn-secondary {
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
  }

  .btn-secondary:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    

    .hero-content h1 {
      font-size: 2rem;
    }

    .hero-content p {
      font-size: 1.2rem;
    }

    .btn {
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .video-container {
      height: 50vh; /* Even smaller height for very small screens */
    }
  }
</style>