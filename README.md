# React 19 + React Router + Atomic Design

Учебное SPA-приложение на React 19, собранное Vite, со стилями Tailwind CSS v4
и маршрутизацией через `react-router-dom`. Структура кода построена по
методологии **Atomic Design**, а маршруты описаны единым конфигом — чтобы
добавить новую страницу, достаточно правок в двух файлах.

## Стек

- **React 19** + React Compiler
- **TypeScript**
- **Vite** — dev-сервер и сборщик
- **react-router-dom** — клиентская маршрутизация
- **Tailwind CSS v4** (через `@tailwindcss/vite`)

## Страницы

- **Счётчик** (`/`) — главная, демонстрирует простой stateful-компонент.
- **Таблица** (`/table`) — заготовка под таблицу.
- **Контакты** (`/contacts`) — заготовка под контакты.
- **Инструкция** (`/instructions`) — пошаговое руководство, как добавить
  новую страницу в проект.

Навигация между страницами — боковое меню (`Sidebar`), которое автоматически
строится из конфига маршрутов.

## Структура проекта

```
src/
├── 1_atoms/       # простейшие UI-элементы (Button, NavItem)
├── 2_molecules/   # составные компоненты (Counter)
├── 3_organisms/   # крупные блоки (Sidebar)
├── 4_frames/      # layout'ы страниц (MainLayout)
├── 5_pages/       # сами страницы
├── routing/
│   ├── paths.ts            # все URL как const-объект + тип AppPath
│   ├── routes.config.tsx   # конфиг маршрутов (layout + список страниц)
│   └── createAppRouter.tsx # генерация <Routes> из конфига
├── App.tsx        # оборачивает роутер в <BrowserRouter>
└── main.tsx       # точка входа
```

Алиас `@/` указывает на `src/`, поэтому импорты пишутся так:

```ts
import { Button } from '@/1_atoms/Button'
```

## Запуск

Требуется **Node.js 20+** и npm.

```bash
# установить зависимости
npm install

# запустить dev-сервер (http://localhost:5173)
npm run dev

# собрать production-бандл в папку dist/
npm run build

# локально посмотреть собранный бандл
npm run preview

# проверить код линтером
npm run lint
```

## Как добавить новую страницу

Короткая версия (полная — на странице **Инструкция** внутри приложения):

1. Создайте компонент в `src/5_pages/`, например `AboutPage.tsx`.
2. Добавьте путь в `src/routing/paths.ts` в объект `AppPath`.
3. Зарегистрируйте страницу в `src/routing/routes.config.tsx` —
   укажите `path`, `element`, `label` и `showInNav`.

Пункт в боковом меню появится автоматически — `Sidebar` читает тот же конфиг.
