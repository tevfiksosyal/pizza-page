import React from "react";
import { FaTwitter } from "react-icons/fa6";
import logoFooter from "../../../public/assets/Iteration-2-assets/footer/logo-footer.svg";
import ficon1 from "../../../public/assets/Iteration-2-assets/footer/icons/icon-1.png";
import ficon2 from "../../../public/assets/Iteration-2-assets/footer/icons/icon-2.png";
import ficon3 from "../../../public/assets/Iteration-2-assets/footer/icons/icon-3.png";
import insta1 from "../../../public/assets/Iteration-2-assets/footer/insta/li-0.png";
import insta2 from "../../../public/assets/Iteration-2-assets/footer/insta/li-1.png";
import insta3 from "../../../public/assets/Iteration-2-assets/footer/insta/li-2.png";
import insta4 from "../../../public/assets/Iteration-2-assets/footer/insta/li-3.png";
import insta5 from "../../../public/assets/Iteration-2-assets/footer/insta/li-4.png";
import insta6 from "../../../public/assets/Iteration-2-assets/footer/insta/li-5.png";
import { Link } from "react-router-dom/cjs/react-router-dom";
function Footer() {
  return (
    <div className="bg-black w-full ">
      <section className="flex flex-col lg:flex-row font-barlow items-start justify-center text-white gap-10 p-8 ">
        <article className="flex flex-col items-start gap-10 text-center lg:text-left">
          <img src={logoFooter} alt="logo-footer" className="h-30 lg:h-30" />
          <address className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <img src={ficon1} alt="location" className="h-8 lg:h-8" />
              <span className="text-start">
                341 Londonderry Road,
                <br />
                Istanbul Türkiye
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <img src={ficon2} alt="mail" className="h-8 lg:h-8" />
              <span>pizza@hotmail.com</span>
            </div>
            <div className="flex gap-2 items-center">
              <img src={ficon3} alt="phone" className="h-8 lg:h-8" />
              <span>+90 123 456 78 90</span>
            </div>
          </address>
        </article>

        <article className="flex flex-col gap-4 items-start lg:items-start">
          <h1 className="font-bold text-lg">Hot Menu</h1>
          <ul className="flex flex-col gap-2">
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </article>

        <article className="flex flex-col gap-4 items-start lg:items-start">
          <a href="https://www.instagram.com/aliyzbsi/">Instagram</a>
          <div className="grid grid-cols-3 gap-2">
            <img src={insta1} alt="insta-0" />
            <img src={insta2} alt="insta-1" />
            <img src={insta3} alt="insta-2" />
            <img src={insta4} alt="insta-3" />
            <img src={insta5} alt="insta-4" />
            <img src={insta6} alt="insta-5" />
          </div>
        </article>
      </section>
      <div className="border-t-[1px] border-gray-600 mx-8"></div>
      <article className="flex justify-around text-white p-4 ">
        <p>© 2023 Teknolojik Yemekler. </p>
        <FaTwitter />
      </article>
    </div>
  );
}

export default Footer;
