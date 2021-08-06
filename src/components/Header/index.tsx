import { Link } from 'gatsby';
import React, { useState } from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import logoLight from '../../images/logos/nodejs-logo-light-mode.svg';
import logoDark from '../../images/logos/nodejs-logo-dark-mode.svg';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const Header = (): JSX.Element => {
  const isMobile = useMediaQuery('(max-width: 870px)');
  const [showLocale, setShowLocale] = useState(false);

  const handleThemeOnClick = (
    // eslint-disable-next-line @typescript-eslint/ban-types
    toggleTheme: Function,
    currentTheme: string,
    isKeyPress = false
  ): void => {
    if (isKeyPress) {
      return;
    }

    const toggle = currentTheme === 'light' ? 'dark' : 'light';
    toggleTheme(toggle);
  };

  return (
    <nav aria-label="Primary" className="nav">
      <div className="nav__container">
        <div className="nav__startwrapper">
          <Link to="/">
            <div className="logo">
              <img
                src={logoLight}
                alt="Node.js"
                className="nav__logo light-mode-only"
              />
              <img
                src={logoDark}
                alt="Node.js"
                className="nav__logo dark-mode-only"
              />
            </div>
          </Link>
        </div>

        <ul className="nav__tabs__container">
          <li className="nav__tabs">
            <Link
              to="/learn"
              className="activeStyleTab"
              activeClassName="active"
              partiallyActive
            >
              Learn
            </Link>
          </li>
          <li className="nav__tabs">
            <a
              className="activeStyleTab"
              target="_blank"
              href="https://nodejs.org/en/docs/"
              rel="noopener noreferrer"
            >
              {isMobile ? 'Docs' : 'Documentation'}
            </a>
          </li>
          <li className="nav__tabs">
            <Link
              to="/download"
              className="activeStyleTab"
              activeClassName="active"
              partiallyActive
            >
              Download
            </Link>
          </li>
          <li className="nav__tabs">
            <Link
              to="/community"
              className="activeStyleTab"
              activeClassName="active"
              partiallyActive
            >
              Community
            </Link>
          </li>
        </ul>

        <div className="nav__endwrapper">
          <ul className="right-container">
            <li className="nav__tabs">
              <ThemeToggler>
                {({
                  theme,
                  toggleTheme,
                }: {
                  theme: string | null;
                  // eslint-disable-next-line @typescript-eslint/ban-types
                  toggleTheme: Function;
                }): JSX.Element | null => {
                  if (theme === null) {
                    return null;
                  }
                  return (
                    <button
                      data-testid="themeToggle"
                      type="button"
                      onClick={(): void =>
                        handleThemeOnClick(toggleTheme, theme)
                      }
                      className="dark-mode-toggle"
                      onKeyPress={(): void =>
                        handleThemeOnClick(toggleTheme, theme, true)
                      }
                    >
                      <span className="sr-only">Toggle Dark Mode</span>
                      <i className="material-icons light-mode-only theme-buttons">
                        nights_stay
                      </i>
                      <i className="material-icons dark-mode-only theme-buttons">
                        wb_sunny
                      </i>
                    </button>
                  );
                }}
              </ThemeToggler>
            </li>

            <li className="nav__tabs">
              <a
                target="_blank"
                href="https://github.com/nodejs/nodejs.dev"
                rel="noopener noreferrer"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  width="2.2rem"
                  height="2.2rem"
                  viewBox="0 0 438.549 438.549"
                  style={{ fill: 'var(--color-text-accent)' }}
                >
                  <path d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365   c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63   c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996   c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136   c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559   c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559   c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997   c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851   c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136   c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41   c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126   c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817   c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994   c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849   c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24   c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979   c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146   c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995   c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906   C438.536,184.851,428.728,148.168,409.132,114.573z" />
                </svg>
              </a>
            </li>
            <li className="nav__tabs">
              <button type="button" onClick={() => setShowLocale(!showLocale)}>
                <span className="sr-only">Locale</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="25"
                  height="25"
                  aria-hidden="true"
                  focusable="false"
                  style={{ fill: 'var(--color-text-accent)' }}
                >
                  <path d="M217.982 201.586h-64.499c-5.537 0-10.026 4.489-10.026 10.026s4.489 10.026 10.026 10.026h53.547c-4.72 25.263-26.935 44.446-53.547 44.446-30.037 0-54.473-24.436-54.473-54.473s24.436-54.473 54.473-54.473c14.55 0 28.229 5.667 38.518 15.955 3.916 3.916 10.264 3.916 14.178 0 3.916-3.916 3.916-10.264 0-14.178-14.077-14.077-32.791-21.829-52.697-21.829-41.094 0-74.525 33.431-74.525 74.525 0 41.094 33.431 74.525 74.525 74.525s74.525-33.431 74.525-74.525c.001-5.536-4.488-10.025-10.025-10.025z" />
                  <path d="M470.331 92.24H269.728l-26.935-81.355a10.025 10.025 0 00-9.518-6.875H41.669C18.693 4.01 0 22.703 0 45.679v332.412c0 22.976 18.693 41.669 41.669 41.669h203.145l27.073 81.369a10.026 10.026 0 009.513 6.861h188.932c22.976 0 41.669-18.693 41.669-41.669V133.909c-.001-22.976-18.694-41.669-41.67-41.669zM41.669 399.708c-11.919 0-21.616-9.697-21.616-21.616V45.679c0-11.919 9.697-21.616 21.616-21.616h184.364l70.691 213.516a.366.366 0 00.015.043l53.664 162.086H41.669zm295.78-116.433c.805 1.11 10.824 14.877 26.355 34.066-4.377 5.756-9.015 11.474-13.91 17.036l-29.712-89.74h87.441c-6.196 13.031-16.938 33.813-31.692 55.736-13.553-16.921-22.069-28.622-22.249-28.87-3.251-4.482-9.519-5.481-14.002-2.23-4.482 3.25-5.48 9.518-2.231 14.002zM265.946 419.76h75.162l-55.503 59.084-19.659-59.084zm226.002 46.561c0 11.919-9.697 21.616-21.616 21.616H304.575l67.015-71.339-.004-.003c.293-.312.571-.64.823-.991a10.025 10.025 0 001.39-9.022l-16.688-50.402c7.073-7.406 13.68-15.143 19.805-22.965 13.299 15.772 29.037 33.446 45.778 50.187 1.957 1.957 4.524 2.937 7.089 2.937s5.132-.979 7.089-2.937c3.916-3.916 3.916-10.264 0-14.178-17.461-17.461-34.013-36.244-47.687-52.632 21.251-30.503 35.033-59.504 40.535-71.954h21.454c5.537 0 10.026-4.489 10.026-10.026s-4.489-10.026-10.026-10.026h-66.173v-18.047c0-5.537-4.489-10.026-10.026-10.026s-10.026 4.489-10.026 10.026v18.046h-51.406l-37.178-112.292H470.33c11.919 0 21.616 9.697 21.616 21.616v332.412z" />
                </svg>
              </button>
            </li>
            <li>
              <ul className={`lang-picker ${showLocale ? '' : 'hide'}`}>
                <li>
                  <button
                    type="button"
                    data-lang="ar"
                    title="Arabic"
                    className="lang"
                  >
                    العربية
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    data-lang="ca"
                    title="Catalan"
                    className="lang"
                  >
                    Catalan
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    data-lang="de"
                    title="German"
                    className="lang"
                  >
                    Deutsch
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    data-lang="es"
                    title="Spanish"
                    className="lang"
                  >
                    Español
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    data-lang="fa"
                    title="Persian"
                    className="lang"
                  >
                    زبان فارسی
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    data-lang="fr"
                    title="French"
                    className="lang"
                  >
                    Français
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    data-lang="gl"
                    title="Galician"
                    className="lang"
                  >
                    Galego
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    data-lang="it"
                    title="Italian"
                    className="lang"
                  >
                    Italiano
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    data-lang="ja"
                    title="Japanese"
                    className="lang"
                  >
                    日本語
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    data-lang="ko"
                    title="Korean"
                    className="lang"
                  >
                    한국어
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    data-lang="pt-br"
                    title="Portuguese, Brazilian"
                    className="lang"
                  >
                    Português do Brasil
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    data-lang="ro"
                    title="Romanian"
                    className="lang"
                  >
                    limba română
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    data-lang="ru"
                    title="Russian"
                    className="lang"
                  >
                    Русский
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    data-lang="tr"
                    title="Turkish"
                    className="lang"
                  >
                    Türkçe
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    data-lang="uk"
                    title="Ukrainian"
                    className="lang"
                  >
                    Українська
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    data-lang="zh-cn"
                    title="Simplified Chinese"
                    className="lang"
                  >
                    简体中文
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    data-lang="zh-tw"
                    title="Traditional Chinese"
                    className="lang"
                  >
                    繁體中文
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
