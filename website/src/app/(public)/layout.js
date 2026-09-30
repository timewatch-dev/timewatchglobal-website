import { Inter } from 'next/font/google'
import "../globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SupportButtons from '@/components/SupportButtons';
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // only the weights you need
  display: "swap", // ensures fallback font shows first
});


export const metadata = {
  title: "Baggage Scanners, Time Attendance & Access Control Systems | TimeWatch",
  description: "TimeWatch manufactures biometric attendance, access control, turnstiles, flap barriers, baggage scanners and parking systems for the Middle East, Africa and international markets.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <div className=''>{children}</div>
      <SupportButtons />
    </>
  );
}
