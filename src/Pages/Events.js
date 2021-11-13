import React from "react";
import eventData from "../helper/eventApi.json";
import EventCard from "../Components/Event/EventCard";
import "../Pages/Events.css";

const Events = () => {
  return (
    <>
      <div className="w-100 mt-4 px-3 pt-3 ">
        <div className="container mx-auto">
          <div className="flex flex-wrap-reverse justify-center gap-6">
            <>
              <div className="row1">
                {eventData.length === 0 ? (
                  <h1 className="xl:text-4xl text-3xl text-center text-white font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                    No Events Found!
                  </h1>
                ) : (
                  <>
                    <h1 className="xl:text-4xl text-3xl text-center text-white font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                      Upcoming Events!
                    </h1>
                    {Object.keys(eventData).map(category => {
                      if (category === "upcoming") {
                        return eventData[category].map(eventObj => {
                          let eventDate = new Date(
                            eventObj.date.startDate
                          ).toDateString();
                          return (
                            <EventCard event={eventObj} eventDate={eventDate} />
                          );
                        });
                      }
                      return null;
                    })}
                  </>
                )}
              </div>
            </>
          </div>
        </div>
      </div>
      <div className="w-full mt-10 px-3 pt-3 ">
        <div className="container mx-auto">
          <div className="flex flex-wrap-reverse justify-center gap-6">
            <>
              <div className="row1">
                {eventData.length === 0 ? (
                  <h1 className="xl:text-4xl text-3xl text-center text-white font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                    No Events Found!
                  </h1>
                ) : (
                  <>
                    <h1 className="xl:text-4xl text-3xl text-center text-white font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                      Past Events!
                    </h1>
                    {Object.keys(eventData).map(category => {
                      if (category === "past") {
                        return eventData[category].map(eventObj => {
                          let eventDate = new Date(
                            eventObj.date.startDate
                          ).toDateString();
                          return (
                            <EventCard event={eventObj} eventDate={eventDate} />
                          );
                        });
                      }
                      return null;
                    })}
                  </>
                )}
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
