import { useEffect } from 'react';

const GoogleEvents = () => {
  useEffect(() => {
    // Initialize Google Calendar API
    // This is a placeholder - you'll need to add actual Google Calendar API integration
  }, []);

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Events Calendar</h2>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=UTC&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&src=your_calendar_id%40group.calendar.google.com"
          style={{ border: 0 }}
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          className="rounded-lg"
          title="MCOP Events"
        ></iframe>
      </div>
      <p className="text-gray-300 mt-4 text-sm">
        * Calendar is password protected. Please contact us for access.
      </p>
    </div>
  );
};

export default GoogleEvents;
