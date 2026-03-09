import type React from "react";
import styles from "./header.module.css";

const navLinks = [
  {
    title: "Как это работает",
    url: "/path/to",
  },
  {
    title: "Сертификаты",
    url: "/path/to",
  },
  {
    title: "Доставка",
    url: "/path/to",
  },
  {
    title: "Для бизнеса",
    url: "/path/to",
  },
  {
    title: "О нас",
    url: "/path/to",
  },
];

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <svg
          width="270"
          height="29"
          viewBox="0 0 270 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="270" height="29" fill="#F5F5F5" />
          <rect
            width="1920"
            height="2176"
            transform="translate(-360 -23)"
            fill="#2A2A2A"
          />
          <rect
            width="1280"
            height="2176"
            transform="translate(-40 -23)"
            fill="#322F37"
          />
          <path
            d="M-20 -13C-20 -18.5228 -15.5228 -23 -10 -23H1210C1215.52 -23 1220 -18.5228 1220 -13V47C1220 52.5229 1215.52 57 1210 57H-10C-15.5229 57 -20 52.5229 -20 47V-13Z"
            fill="#322F37"
          />
          <path
            d="M14 18H23C21.8446 21.3489 18.8283 24 15 24C9.66852 24 6 20.0136 6 15C6 9.98641 9.87546 6 15 6C18.8973 6 21.5428 7.90568 23 11H29C28.1291 7.96443 26.5292 5.78217 24 4C21.4708 2.21503 18.4461 1 15 1C6.46388 1 0 6.86691 0 15C0 23.1331 5.80015 29 14 29C17.8398 29 21.3989 27.462 24 25L25 28H30V13H14V18Z"
            fill="white"
          />
          <path
            d="M85 21L76 1H69V28H75V12L82 28H87L94 12V28H100V1H93L85 21Z"
            fill="white"
          />
          <path
            d="M104 28H127V23H110V17H126V12H110V6H127V1H104V28Z"
            fill="white"
          />
          <path
            d="M149 14C151.396 12.6619 153 10.4062 153 8C153 3.6963 148.817 1 143 1H129V28H143C149.456 28 154 24.5005 154 20C154 17.2368 152.219 15.2284 149 14ZM143 23H135V17H143C144.835 17 148 17.3548 148 20C148 21.8525 146.029 23 143 23ZM143 12H135V6H143C145.321 6 147 7.27683 147 9C147 10.5995 145.208 12 143 12Z"
            fill="white"
          />
          <path
            d="M214 11C214 8.25081 213.047 5.76814 211 4C209.026 2.29651 205.899 1 203 1H189V28H195V20H202L208 28H215L208 19C211.467 17.2543 214 14.4941 214 11ZM195 6H203C205.797 6 208 8.56002 208 11C208 13.44 205.752 15 203 15H195V6Z"
            fill="white"
          />
          <path
            d="M217 28H240V23H223V17H239V12H223V6H240V1H217V28Z"
            fill="white"
          />
          <path d="M49 1L32 28H66L49 1Z" fill="white" />
          <path
            d="M49 24C49 21.0969 45.515 17 43 17C45.5179 17 49 11.9031 49 9C49 11.9031 53.485 17 56 17C53.4821 17 49 21.0969 49 24Z"
            fill="#FF007F"
          />
          <path d="M170 11H160V12H170V11Z" fill="#1D1D1B" />
          <path d="M181 11H171V12H181V11Z" fill="#1D1D1B" />
          <path
            d="M266 5C263.38 2.59094 259.753 1 256 1H243V28H256C259.526 28 263.332 26.4597 266 24C268.805 21.4138 270 17.6487 270 14C270 10.3513 268.711 7.49339 266 5ZM256 22H249V7H256C260.817 7 264 9.38709 264 14C264 18.6129 260.738 22 256 22Z"
            fill="white"
          />
          <path
            d="M182 4C179.284 1.50719 175.184 0 171 0C166.816 0 162.756 1.43165 160 4C157.233 6.57674 156 10.0943 156 14C156 21.9596 162.438 28 171 28C175.172 28 179.276 26.4956 182 24C184.764 21.4652 186 17.9728 186 14C186 10.0272 184.764 6.54037 182 4Z"
            fill="#FF007F"
          />
          <path
            d="M182 13H160C158.8 13 158 13.8384 158 15V17C158 18.1616 158.8 19 160 19H182C183.2 19 184 18.1616 184 17V15C184 13.8384 183.2 13 182 13Z"
            fill="#00FF7F"
          />
          <path
            d="M160 16H183"
            stroke="#1D1D1B"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <path
            d="M169 13C169.367 12.6988 170 12.5263 170 12V11H160V12C160 12.5263 160.633 12.6988 161 13H169Z"
            fill="white"
          />
          <path
            d="M166 12C166 12.4286 165.339 13 165 13C164.659 13 164 12.4286 164 12H166Z"
            fill="#1D1D1B"
          />
          <path d="M170 11H160V12H170V11Z" fill="#1D1D1B" />
          <path
            d="M170 10V11H160V10C160 9.22637 161.133 9 162 9H168C168.864 9 170 9.22388 170 10Z"
            fill="#00FF7F"
          />
          <path
            d="M180 13C180.367 12.6988 181 12.5263 181 12V11H171V12C171 12.5263 171.633 12.6988 172 13H180Z"
            fill="white"
          />
          <path
            d="M177 12C177 12.4286 176.339 13 176 13C175.659 13 175 12.4286 175 12H177Z"
            fill="#1D1D1B"
          />
          <path d="M181 11H171V12H181V11Z" fill="#1D1D1B" />
          <path
            d="M181 10V11H171V10C171 9.22637 172.133 9 173 9H179C179.864 9 181 9.22388 181 10Z"
            fill="#00FF7F"
          />
        </svg>
      </div>
      <nav className={styles.headerMenu}>
        <ul className={styles.headerMenuList}>
          {navLinks.map((link) => (
            <li key={link.title} className={styles.headerMenuItem}>
              <a href={link.url} className={styles.headerMenuLink}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
