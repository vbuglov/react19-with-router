export function InstructionsPage() {
  return (
    <article className="max-w-3xl mx-auto text-left">
      <h2 className="text-3xl font-semibold mb-4">Как добавить новую страницу</h2>
      <p className="text-slate-600 mb-8">
        Пошаговая инструкция для тех, кто только начинает работать с проектом.
        Проект построен по методологии <b>Atomic Design</b>: компоненты лежат в
        папках <code className="px-1 bg-slate-100 rounded">1_atoms</code>,{' '}
        <code className="px-1 bg-slate-100 rounded">2_molecules</code>,{' '}
        <code className="px-1 bg-slate-100 rounded">3_organisms</code>,{' '}
        <code className="px-1 bg-slate-100 rounded">4_frames</code>,{' '}
        <code className="px-1 bg-slate-100 rounded">5_pages</code>. Маршруты
        описаны в одном конфиге, а меню строится из него автоматически.
      </p>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">
          Шаг 1. Создайте файл страницы
        </h3>
        <p className="mb-3">
          В папке{' '}
          <code className="px-1 bg-slate-100 rounded">src/5_pages</code> создайте
          новый файл, например{' '}
          <code className="px-1 bg-slate-100 rounded">AboutPage.tsx</code>.
          Страница — это обычный React-компонент:
        </p>
        <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">
{`export function AboutPage() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">О нас</h2>
      <p>Содержимое страницы.</p>
    </div>
  )
}`}
        </pre>
        <p className="mt-3 text-slate-600 text-sm">
          Имя файла и имя экспортируемой функции должны совпадать — так проще
          находить страницу в проекте.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">
          Шаг 2. Добавьте путь в enum
        </h3>
        <p className="mb-3">
          Все URL-адреса приложения собраны в{' '}
          <code className="px-1 bg-slate-100 rounded">src/routing/paths.ts</code>.
          Добавьте туда новую строку — это защитит вас от опечаток в путях:
        </p>
        <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">
{`export const AppPath = {
  Counter: '/',
  Table: '/table',
  Contacts: '/contacts',
  Instructions: '/instructions',
  About: '/about', // ← новый путь
} as const`}
        </pre>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">
          Шаг 3. Зарегистрируйте страницу в конфиге роутера
        </h3>
        <p className="mb-3">
          Откройте{' '}
          <code className="px-1 bg-slate-100 rounded">
            src/routing/routes.config.tsx
          </code>{' '}
          и добавьте новый элемент в массив{' '}
          <code className="px-1 bg-slate-100 rounded">routes</code>:
        </p>
        <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 text-sm overflow-x-auto">
{`import { AboutPage } from '@/5_pages/AboutPage'

// ...

{
  path: AppPath.About,
  element: <AboutPage />,
  label: 'О нас',     // подпись в боковом меню
  showInNav: true,    // показывать ли пункт в меню
},`}
        </pre>
        <p className="mt-3 text-slate-600 text-sm">
          Импорт пишется через алиас{' '}
          <code className="px-1 bg-slate-100 rounded">@/</code>, который ведёт в{' '}
          <code className="px-1 bg-slate-100 rounded">src/</code>. Это удобнее,
          чем писать <code className="px-1 bg-slate-100 rounded">../../</code>.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">
          Шаг 4. Проверьте результат
        </h3>
        <ol className="list-decimal pl-6 space-y-1">
          <li>
            Запустите dev-сервер:{' '}
            <code className="px-1 bg-slate-100 rounded">npm run dev</code>.
          </li>
          <li>Откройте приложение — в боковом меню появится новый пункт.</li>
          <li>Кликните по нему и убедитесь, что страница открывается.</li>
        </ol>
        <p className="mt-3 text-slate-600 text-sm">
          Меню обновлять вручную <b>не нужно</b>: компонент{' '}
          <code className="px-1 bg-slate-100 rounded">Sidebar</code> сам
          перебирает <code className="px-1 bg-slate-100 rounded">routesConfig</code>{' '}
          и показывает все пункты с{' '}
          <code className="px-1 bg-slate-100 rounded">showInNav: true</code>.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Частые вопросы</h3>
        <dl className="space-y-4">
          <div>
            <dt className="font-semibold">
              Нужно ли трогать <code className="px-1 bg-slate-100 rounded">App.tsx</code>?
            </dt>
            <dd className="text-slate-600">
              Нет. Роутер генерируется функцией{' '}
              <code className="px-1 bg-slate-100 rounded">createAppRouter</code>{' '}
              из конфига — достаточно добавить запись в{' '}
              <code className="px-1 bg-slate-100 rounded">routes.config.tsx</code>.
            </dd>
          </div>
          <div>
            <dt className="font-semibold">
              Как скрыть страницу из меню, но оставить доступной по URL?
            </dt>
            <dd className="text-slate-600">
              Поставьте{' '}
              <code className="px-1 bg-slate-100 rounded">showInNav: false</code>
              {' '}— страница откроется по прямой ссылке, но в сайдбаре не появится.
            </dd>
          </div>
          <div>
            <dt className="font-semibold">
              Куда класть кнопки, формы и прочие UI-элементы?
            </dt>
            <dd className="text-slate-600">
              Переиспользуемые мелкие части — в{' '}
              <code className="px-1 bg-slate-100 rounded">1_atoms</code>, их
              сочетания — в{' '}
              <code className="px-1 bg-slate-100 rounded">2_molecules</code>,
              крупные блоки (шапка, сайдбар) — в{' '}
              <code className="px-1 bg-slate-100 rounded">3_organisms</code>. В
              самой странице старайтесь только собирать готовые компоненты.
            </dd>
          </div>
        </dl>
      </section>
    </article>
  )
}
