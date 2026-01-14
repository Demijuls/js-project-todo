import { useState, useEffect } from "react";

export const TodaysDate = () => {
  const [today, setToday] = useState(new Date());

  /* Here I set clearing date every min to display a new date without refreshing the page:*/
  useEffect(() => {
    const updateInterval = setInterval(() => {
      setToday(new Date());
    }, 60000);

    return () => clearInterval(updateInterval);
  }, []);

  /* Setting a date to a local format: */
  const todayIs = today.toLocaleDateString(Date.UTC, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return <div>{todayIs}</div>;
};
