# PSD Website Ready (React + Tailwind)

В этом архиве — готовая структура проекта React (Vite) + Tailwind. Проект содержит логотип `logotelegramblack.png` в `public/assets/logos/`.


## Что дальше
1. Откройте проект локально:
   - Установите зависимости: `npm install`
   - Запустите: `npm run dev`
2. Экспортируйте из PSD изображения (hero, portfolio и т.д.) и положите в `public/assets/hero/` и `public/assets/portfolio/`.
3. Если нужны шрифты — добавьте в `public/assets/fonts` и подключите в `src/index.css`.
4. Для деплоя на GitHub Pages / Vercel / Netlify:
   - Создайте репозиторий на GitHub и загрузите все файлы.
   - Для Vercel: подключите репозиторий и Vercel сам соберёт проект.
   - Для GitHub Pages: соберите (`npm run build`) и используйте gh-pages или другую процедуру.

Если хотите — я могу:
- заменить заглушки реальными изображениями из вашего PSD (пришлите экспортированные PNG/SVG),
- превратить отдельные секции макета в точные React-компоненты по пиксельному соответствию.
