const clouds = document.querySelectorAll('.cloud');

clouds.forEach((cloud, index) => {
    // Random initial position
    cloud.style.left = `${Math.random() * 100}%`;
    cloud.style.top = `${Math.random() * 50}%`;

    // Random speed between 20s and 60s
    const speed = Math.random() * 40 + 20;
    cloud.style.animationDuration = `${speed}s`;

    // Stagger the start time
    cloud.style.animationDelay = `-${Math.random() * speed}s`;

    // Add animation class
    cloud.classList.add('move-cloud');
});