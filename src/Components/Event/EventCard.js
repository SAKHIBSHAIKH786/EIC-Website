import React from "react";
import { FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";
import "../../Pages/Events.css";

const EventCard = props => {
  const { event } = props;

  return (
    <>
      <div className="relative w-2/5 my-12">
        <div className="rounded overflow-hidden shadow-md bg-white">
          <div className="absolute -mt-20 w-full flex justify-center">
            <div className="h-36 w-36">
              <img
                src={event.img}
                alt="team member"
                className="rounded-full object-cover object-top h-full w-full shadow-md"
              />
            </div>
          </div>
          <div className="px-6 mt-16 mx-2 flex flex-col items-center text-center">
            <div className="font-bold text-3xl pb-1">
              <h1>{event.title}</h1>
              {/* <h4>{lname}</h4> */}
            </div>
            <p className="text-gray-800 text-lg italic">{props.eventDate}</p>
            <p className="text-gray-600 text-base pt-3 font-normal">
              {event.description}
            </p>
            <div className="w-full flex justify-center py-5 gap-6 text-xl">
              <a
                className="team-social cursor-pointer hover:text-blue-400"
                href={event.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <FiFacebook />
              </a>
              <a
                className="team-social cursor-pointer hover:text-blue-400"
                href={event.instagram}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FiInstagram />
              </a>
              <a
                className="team-social cursor-pointer hover:text-blue-400"
                href={event.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
