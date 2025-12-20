import EventComponent from "./EventComponent";
const cohort1 = import.meta.glob("@/assets/cohort1/*.jpg");
const cohort2 = import.meta.glob("@/assets/cohort2/*.jpg");
const linkedInAward = import.meta.glob("@/assets/linkedInAward/*.jpg");


const Events = () => {
  const EventsData = [
    {
      eventName: "Cohort One",
      description: "",
      images: () => Object.values(cohort1).map((img) => img.name),
    },
    {
      eventName: "Cohort Two",
      description: "",
      images: () => Object.values(cohort2).map((img) => img.name),
    },
    {
      eventName: "LinkedIn Local Nigeria 2025 award",
      description: "",
      images: () => Object.values(linkedInAward).map((img) => img.name),
    }
  ];

  console.log(EventsData.map((ev) => ev.images));
  return (
    <div className="min-h-screen my-4 bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="space-y-24">
        {EventsData.map((event, index) => {
          const images = event.images();
          return <EventComponent key={index} event={{ ...event, images }} />;
        })}
      </div>
    </div>
  );
};

export default Events;
