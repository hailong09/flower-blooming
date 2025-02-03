onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);

    const createHearts = () => {
      const body = document.body;
      const heart = document.createElement('div');
      heart.className = 'heart';

      const size = Math.random() * 20 + 10;
      const left = Math.random() * window.innerWidth;
      const duration = Math.random() * 5 + 2;

      heart.style.width = `${size}px`;
      heart.style.height = `${size}px`;
      heart.style.left = `${left}px`;
      heart.style.animationDuration = `${duration}s`;

      body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, duration * 1000);
    };

    setInterval(createHearts, 300);
  };