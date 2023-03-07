import React from 'react'
import { Link } from 'react-router-dom';



import style from './styles';
import {
  Navbar,
  NavbarApp,
  EthPrice,
  NftAssest,
  Protocol,
  Business,
  Client,
  CTA,
  Footer,
  Testimonials,
  ErrP,
} from './components';
const ErrorPage = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${style.paddingX} ${style.flexCenter}`}>
      <div className={`${style.boxWidth}`}>{/* <NavbarApp /> */}</div>
    </div>

    {/* <div className={`bg-primary ${style.flexStart}`}>
      <div className={`${style.boxWidth}`}>
      </div>
    </div> */}

    <div className={`bg-primary ${style.paddingX} ${style.flexStart}`}>
      <div className={`${style.boxWidth}`}>
        <ErrP />
        <Footer />
      </div>
    </div>
  </div>
);
export default ErrorPage;
