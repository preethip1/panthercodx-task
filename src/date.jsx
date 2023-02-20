import { useEffect, useState } from "react";
function CurrentDate() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="m-4">
      {date.toLocaleDateString()} {date.toLocaleTimeString()}
    </div>
  );
}

export default CurrentDate;
