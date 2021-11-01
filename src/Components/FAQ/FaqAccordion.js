import { Disclosure } from '@headlessui/react'
import {BiChevronDown, BiChevronUp} from "react-icons/bi";
import { faqs } from "./faqData";

const FaqSection = ({question,answer}) => {
  return (
    <>
    <Disclosure>
      {({ open }) => (
        <>
        <Disclosure.Button className="w-full rounded-t-md flex gap-2 items-center px-4 pt-1 pb-4 hover:bg-blue-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
          <div className="text-xl font-bold text-purple-900 ">
            {question}
          </div>
          <span className={open ? "text-purple-900" : "text-gray-700"}>
            {open ? <BiChevronUp className="text-xl"/> : <BiChevronDown className="text-xl"/>}
          </span>
        </Disclosure.Button>

        <Disclosure.Panel className="bg-blue-200 rounded-b-md">
          <div className="px-4 pb-8 text-lg font-semibold text-black">
            {answer}
          </div>
        </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    <hr className="h-3"/>
  </>
  );
};

export default FaqSection;
