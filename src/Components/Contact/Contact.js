import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    department: "",
    yearOfStudy: "",
    isLocationPune: "",
    question0: "",
    question1: "",
  });

  const handleChange = name => e => {
    // console.log(name);
    // console.log(e.target.value);
    setFormData({ ...formData, [name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ formData });
  };

  return (
    <>
      <div>
        <div className="md:grid">
          <div className="lg:w-1/2 sm:w-full mt-5 lg:mx-auto items-center md:mt-0 md:col-span-6">
            <form onSubmit={handleSubmit}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid mx-5 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="studentName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="studentName"
                          id="studentName"
                          className="p-2 border-2 border-indigo-500 outline-none flex-1 block w-full rounded-none rounded-r-md sm:text-sm"
                          placeholder="Enter your name"
                          onChange={handleChange("name")}
                        />
                      </div>
                      <label
                        htmlFor="studentName"
                        className="block text-sm font-medium text-gray-700 mt-2"
                      >
                        Email
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="email"
                          name="studentEmail"
                          id="studentEmail"
                          className="p-2 border-2 border-indigo-500 outline-none flex-1 block w-full rounded-none rounded-r-md sm:text-sm"
                          placeholder="Enter your email"
                          onChange={handleChange("email")}
                        />
                      </div>
                      <label
                        htmlFor="studentName"
                        className="block text-sm font-medium text-gray-700 mt-2"
                      >
                        Phone number
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="number"
                          name="studentPhoneNumber"
                          id="studentPhoneNumber"
                          className="p-2 border-2 border-indigo-500 outline-none flex-1 block w-full rounded-none rounded-r-md sm:text-sm"
                          placeholder="Enter your phone number"
                          onChange={handleChange("phoneNumber")}
                        />
                      </div>
                      <label
                        htmlFor="studentDepartment"
                        className="block text-sm font-medium text-gray-700 mt-2"
                      >
                        Department
                      </label>
                      <div className="mt-1 flex w-1/6 items-center">
                        <input
                          id="radio9"
                          type="radio"
                          name="radio"
                          value="CS"
                          className="p-2 outline-none flex-1 block w-full rounded-none rounded-r-md sm:text-sm"
                          onChange={handleChange("department")}
                        />
                        <p>CS</p>
                      </div>
                      <div className="mt-1 flex w-1/5 items-center">
                        <input
                          id="radio9"
                          type="radio"
                          name="radio"
                          value="MECH"
                          className="p-2 outline-none flex-1 block w-full rounded-none rounded-r-md sm:text-sm"
                          onChange={handleChange("department")}
                        />
                        <p>MECH</p>
                      </div>
                      <div className="mt-1 flex w-1/5 items-center">
                        <input
                          id="radio9"
                          type="radio"
                          name="radio"
                          value="E&TC"
                          className="p-2 outline-none flex-1 block w-full rounded-none rounded-r-md sm:text-sm"
                          onChange={handleChange("department")}
                        />
                        <p>E&TC</p>
                      </div>
                      <label
                        htmlFor="studentName"
                        className="block text-sm font-medium text-gray-700 mt-2"
                      >
                        Year of study
                      </label>
                      <div className="mt-1 flex w-1/6 items-center">
                        <input
                          id="radio1"
                          type="radio"
                          name="radio"
                          value="FE"
                          className="p-2  outline-none flex-1 block w-full rounded-none rounded-r-md sm:text-sm"
                          onChange={handleChange("yearOfStudy")}
                        />
                        <p>FE</p>
                      </div>
                      <div className="mt-1 flex w-1/6 items-center">
                        <input
                          id="radio2"
                          type="radio"
                          value="SE"
                          name="radio"
                          className="p-2  outline-none flex-1 block w-full rounded-none rounded-r-md sm:text-sm"
                          onChange={handleChange("yearOfStudy")}
                        />
                        <p>SE</p>
                      </div>
                      <div className="mt-1 flex w-1/6 items-center">
                        <input
                          id="radio3"
                          type="radio"
                          value="TE"
                          name="radio"
                          className="p-2  outline-none flex-1 block w-full rounded-none rounded-r-md sm:text-sm"
                          onChange={handleChange("yearOfStudy")}
                        />
                        <p>TE</p>
                      </div>
                      <div className="mt-1 flex w-1/6 items-center">
                        <input
                          id="radio4"
                          type="radio"
                          value="BE"
                          name="radio"
                          className="p-2  outline-none flex-1 block w-full rounded-none rounded-r-md sm:text-sm"
                          onChange={handleChange("yearOfStudy")}
                        />
                        <p>BE</p>
                      </div>
                      <label
                        htmlFor="studentName"
                        className="block text-sm font-medium text-gray-700 mt-2"
                      >
                        Are you currently living in Pune?
                      </label>
                      <div className="mt-1 flex w-1/6 items-center">
                        <input
                          id="isLocationPune"
                          type="radio"
                          name="isLocationPune"
                          className="p-2  outline-none flex-1 block w-full rounded-none rounded-r-md sm:text-sm"
                          value="Yes"
                          onChange={handleChange("isLocationPune")}
                        />
                        <p>Yes</p>
                      </div>
                      <div className="mt-1 flex w-1/6 items-center">
                        <input
                          id="isLocationPune"
                          type="radio"
                          name="isLocationPune"
                          className="p-2  outline-none flex-1 block w-full rounded-none rounded-r-md sm:text-sm"
                          value="No"
                          onChange={handleChange("isLocationPune")}
                        />
                        <p>No</p>
                      </div>
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium text-gray-700 mt-3"
                      >
                        What are the things that you would like to learn through
                        this club?
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="about"
                          name="about"
                          rows={3}
                          className="shadow-sm p-2 border-2 border-indigo-500 outline-none mt-1 block w-full sm:text-sm rounded-md"
                          placeholder="Your answer"
                          defaultValue={""}
                          onChange={handleChange("question1")}
                        />
                      </div>
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium text-gray-700 mt-3"
                      >
                        Why do you want to join this club ?
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="about"
                          name="about"
                          rows={3}
                          className="shadow-sm p-2 border-2 border-indigo-500 outline-none mt-1 block w-full sm:text-sm rounded-md"
                          placeholder="Your answer"
                          defaultValue={""}
                          onChange={handleChange("question2")}
                        />

                        <div className="mt-3">
                          <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onSubmit={handleSubmit}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  );
};

export default Contact;
