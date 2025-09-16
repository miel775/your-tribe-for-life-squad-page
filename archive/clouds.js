const clouds = document.querySelectorAll('.cloud');

    clouds.forEach((cloud, index) => {
        //  de wolken worden random geplaatst verticaal en horizontaal
        cloud.style.left = `${Math.random() * 100}%`;
        cloud.style.top = `${Math.random() * 50}%`;

        // de wolken krijgen een willekeurige grootte tussen 50% en 150%
        const size = Math.random() * 1 + 0.5;
        cloud.style.transform = `scale(${size})`;

        // de wolken kunnen overal op de pagina geplaatst worden
        cloud.style.zIndex = Math.floor(Math.random() * 5);
        // de keyframes worden ingeschakeld om de wolken te laten bewegen
        cloud.classList.add('move-cloud');
    });