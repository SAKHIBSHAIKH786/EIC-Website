import React, { useState } from "react";
import { faqs } from "./faqData";
import FaqAccordion from "./FaqAccordion";

const FaqSection = () => {
  const [data, setData] = useState(faqs);
  return(
    <>
    <section className="container py-10" id="faqs">
      <div className="w-5/6 mx-auto my-10 px-10 bg-gray-200 flex flex-col gap-3 rounded-lg" id="faqs">

        <h2 className="faq text-5xl font-bold text-club-700 pt-4 text-center">
          FAQs
        </h2>

        <div className="flex flex-col mb-4">
          {
            data.map((faq) => {
              return <FaqAccordion key={faq.id} {...faq} />
            })
          }
        </div>    
      </div>
    </section>
    </>
  );
};

export default FaqSection;
