"use client";
import { useEffect, useState } from "react";
import getLocation from "../api/location/location";

function Page() {
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const localLocation = await getLocation();
        setLocation(localLocation);
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US"));
    };

    updateTime(); 

    const interval = setInterval(updateTime, 1000); 

    return () => clearInterval(interval); 
  }, []); 

  return (
    <div>
      <div>Location:</div>
      <div>{location || "Fetching location..."}</div>

      <div>Time:</div>
      <div>{time || "Fetching time..."}</div>
    </div>
  );
}

export default Page;
