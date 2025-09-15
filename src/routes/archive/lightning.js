const ligtning = document.querySelectorAll(['.lightning', '.lightning2']);
 
 ligtning.forEach((light, index) => {
      // de bliksemschichten worden random geplaatst verticaal en horizontaal
      light.style.left = `${Math.random() * 100}%`;
      light.style.top = `${Math.random() * 50}%`;

      // de bliksemschichten slaan random in de pagina ongeveer 3 keer in 10 minuten
      const delay = Math.random() * 600 + 200;
      light.style.animationDelay = `${delay}s`;
      light.style.animationDuration = '0.5s';

      // de keyframes worden aangesproken
      light.classList.add(['lightning', 'flash-lightning2']);

        const clouds = document.querySelectorAll('.cloud');
     });