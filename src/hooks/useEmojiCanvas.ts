import { RefObject } from 'react';
import { useEffect } from 'react';

export const useEmojiCanvas = (
  canvasRef: RefObject<HTMLCanvasElement | null>
) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    const emojiList = [
      '🎮',
      '🌍',
      '🌏',
      '🌎',
      '✨',
      '💻',
      '🔌',
      '🍫',
      '🎀',
      '☁️',
      '📖',
      '🧸',
      '🌙',
      '💌',
      '🌸',
      '🍦',
      '🍓',
      '🧁',
      '🍰',
      '🐰',
    ];

    const symbols = Array.from({ length: 30 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: 0.2 + Math.random() * 0.2,
      char: emojiList[Math.floor(Math.random() * emojiList.length)],
      size: 10 + Math.random() * 10,
      opacity: 0.3 + Math.random() * 0.5,
    }));

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (const symbol of symbols) {
        ctx.font = `${symbol.size}px serif`;
        ctx.fillStyle = `rgba(255, 255, 255, ${symbol.opacity})`;
        ctx.fillText(symbol.char, symbol.x, symbol.y);
        symbol.x += symbol.speed;
        if (symbol.x > width) {
          symbol.x = -50;
          symbol.y = Math.random() * height;
          symbol.char = emojiList[Math.floor(Math.random() * emojiList.length)];
        }
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [canvasRef]);
};
