import React, { useState } from "react";
import { faqs } from "./faqData";
import FaqSection from "./FaqAccordion";

const MyFaqSection = () => {
  const [data, setData] = useState(faqs);
  return(
    <>
    <div className="w-5/6 mx-auto my-10 px-10 bg-gray-200 flex flex-col gap-3 rounded-lg">

      <div className="text-5xl font-bold text-purple-900 h-10 py-4 text-center">
        FAQ
      </div>

      <div className="flex flex-col my-4">
        {
          data.map((faq) => {
            return <FaqSection key={faq.id} {...faq} />
          })
        }
      </div>    
    </div> 
    </>
  );
};

export default MyFaqSection;
