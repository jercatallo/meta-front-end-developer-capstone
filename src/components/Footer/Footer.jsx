import React from "react";
import { useNavigate } from "react-router-dom";
import { Anchor } from "../../design-system/Anchor";

export function Footer({ testId = 'footer-component' }) {
  const navigate = useNavigate();

  return (
    <footer data-testid={testId} className="bg-white rounded-lg shadow m-4 dark:bg-primaryBackground">
      <div className="w-full mx-auto max-w-screen-xl p-4">
        <div className="grid grid-rows-1 md:grid-cols-2 gap-1">
          <div className="text-center sm:mb-0 md:mb-0">
            <span className="text-sm text-primaryText dark:text-primaryText">
              © 2023{" "}
      
                Little Lemon.
         
              All Rights Reserved.
            </span>
          </div>
          <nav>
            <ul className="hidden md:flex flex-wrap justify-center  items-center mt-3 text-sm font-medium text-primaryText dark:text-primaryText sm:mt-0 ">
              <li>
                <Anchor
                  testId="footer-best-seller"
                  hoverType="underline"
                  href="#best-sellers"
                  onClick={() => navigate('/')}
                  className="mr-4 hover:underline md:mr-6"
                >
                  Best Sellers
                </Anchor>
              </li>
              <li>
                <Anchor
                  testId="footer-reserve-a-table"
                  hoverType="underline"
                  onClick={() => navigate('/book')}
                  className="mr-4 hover:underline md:mr-6"
                >
                  Reserve a Table
                </Anchor>
              </li>
              <li>
                <Anchor
                  testId="footer-about-us"
                  href="#about"
                  hoverType="underline"
                  onClick={() => navigate('/')}
                  className="mr-4 hover:underline md:mr-6"
                >
                  About Us
                </Anchor>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}