import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'darktheme' : 'lighttheme');
  }, [isDark]);

  return (
    <>
      <button onClick={() => setIsDark(!isDark)} className='btn btn-primary mb-4'>
        Toggle Theme
      </button>
      <div className="flex w-full">
        <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">content</div>
        <div className="divider divider-horizontal">OR</div>
        <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">content</div>
      </div>
      <div className="flex w-full flex-col lg:flex-row pt-10">
        <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
        <div className="divider lg:divider-horizontal">OR</div>
        <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
      </div>
      <div className="flex w-full flex-col pt-10">
        <div className="divider">Default</div>
        <div className="divider divider-neutral">Neutral</div>
        <div className="divider divider-primary">Primary</div>
        <div className="divider divider-secondary">Secondary</div>
        <div className="divider divider-accent">Accent</div>
        <div className="divider divider-success">Success</div>
        <div className="divider divider-warning">Warning</div>
        <div className="divider divider-info">Info</div>
        <div className="divider divider-error">Error</div>
      </div>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current">
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current">
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </nav>
      </footer>
    </>
  )
}

export default App
