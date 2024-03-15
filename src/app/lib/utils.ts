import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getThirdSunday(month = new Date().getMonth()) {
  // Create a new Date object for the provided month (0-indexed)
  const date = new Date(new Date().getFullYear(), month, 1);

  // Set the date to the first Sunday of the month
  date.setDate(1 - (date.getDay() || 7)); // Adjust for Sunday (0-indexed)

  // Loop to find the 3rd Sunday
  for (let i = 0; i < 3; i++) {
    date.setDate(date.getDate() + 7);
  }

  // Handle previous month if needed
  if (month === 0) {
    date.setMonth(11); // Set to December of previous year
    date.setFullYear(date.getFullYear() - 1);
  }

  return date;
}

export function countdownToThirdSundayWAT(now = new Date()) {
  // Get the 3rd Sunday of the current month
  const targetDate = getThirdSunday();

  // Set target time to 4pm WAT
  targetDate.setHours(16, 0, 0, 0); // 16 for 4pm (WAT is UTC+1)

  // Calculate the time difference
  const difference = targetDate.getTime() - now.getTime();

  // Check if target has already passed (including this month's 3rd Sunday)
  if (difference <= 0) {
    // Check if within ongoing event window (4pm - 6pm WAT)
    const isOngoing =
      now.getTime() >= targetDate.getTime() && now.getHours() < 18;

    if (isOngoing) return;
    return countdownToThirdSundayWAT(
      new Date(now.getFullYear(), now.getMonth() + 1, 1)
    );
  }

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Format the countdown string
  return {
    days: days,
    hours: hours.toString().padStart(2, "0"),
    minutes: minutes.toString().padStart(2, "0"),
    seconds: seconds.toString().padStart(2, "0"),
  };
}

export const isOngoingFetcher = () => {
  const timerObject = countdownToThirdSundayWAT();
  const isOngoing = !timerObject;

  return isOngoing;
};