/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { FaPlus,FaMinus  } from "react-icons/fa";

const FaqSection: React.FC = () => {
  return (
    <>
    <section className="w-full bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-black text-center mb-12">
          Frequently asked questions
        </h2>

        {/* PrimeReact Accordion */}
        <Accordion
          /* multiple: allows multiple FAQs to be open at once */
          multiple
          

          expandIcon={
            <FaPlus className="ml-[820px] -mb-7 text-2xl transition-transform duration-300 transform " />
          }
          collapseIcon={
            <FaMinus className="ml-[820px] -mb-7  text-2xl transition-transform duration-300 transform rotate-180" />
          }
         
        >
          {/* 1. FAQ Item */}
          <AccordionTab
            header="What is Eatragon and how does it work?"
            className=" text-lg font-semibold text-black border shadow-md mb-4 pl-2 border-gray-200"
          >
            <p className="text-base text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lobortis leo, sit amet blandit leo lobortis eget.
            </p>
          </AccordionTab>

          {/* 2. FAQ Item */}
          <AccordionTab
            header="How do I join Eatragon?"
            className="text-lg font-semibold text-black border shadow-md mb-4 pl-2 border-gray-200"
          >
            <p className="text-base text-gray-600 mt-2">
              You can sign up by visiting our website and clicking "Join Now."
            </p>
          </AccordionTab>

          {/* 3. FAQ Item */}
          <AccordionTab
            header="What tools does Eatragon offer for vendors?"
            className="text-lg font-semibold text-black border shadow-md mb-4 pl-2 border-gray-200"
          >
            <p className="text-base text-gray-600 mt-2">
              We offer a vendor dashboard, analytics tools, and more.
            </p>
          </AccordionTab>

          {/* 4. FAQ Item */}
          <AccordionTab
            header="How do riders get paid?"
            className="text-lg font-semibold text-black border shadow-md mb-4 pl-2 border-gray-200"
          >
            <p className="text-base text-gray-600 mt-2">
              Riders receive weekly payouts via bank transfer or mobile wallet.
            </p>
          </AccordionTab>

          {/* 5. FAQ Item */}
          <AccordionTab
            header="Can customers track their orders?"
            className="text-lg font-semibold text-black shadow-md mb-4 pl-2 border border-gray-200"
          >
            <p className="text-base text-gray-600 mt-2">
              Yes, real-time order tracking is available in the Eatragon app.
            </p>
          </AccordionTab>

          {/* 6. FAQ Item */}
          <AccordionTab
            header="What payment options are available?"
            className="text-lg font-semibold text-black border shadow-md mb-4 pl-2 border-gray-200"
          >
            <p className="text-base text-gray-600 mt-2">
              We accept credit cards, mobile wallets, and cash on delivery.
            </p>
          </AccordionTab>

          {/* 7. FAQ Item */}
          <AccordionTab
            header="Is Eatragon available in my area?"
            className="text-lg font-semibold shadow-md mb-4 pl-2 text-black"
          >
            <p className="text-base text-gray-600 mt-2">
              Enter your ZIP code in our app or website to check availability.
            </p>
          </AccordionTab>
        </Accordion>

      </div>
    </section>
    </>
  );
};

export default FaqSection;
