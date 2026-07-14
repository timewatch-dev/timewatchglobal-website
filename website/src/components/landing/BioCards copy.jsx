import Link from "next/link";
import Image from "next/image";
const biometricCities = [
  {
    slug: "biometric-attendance-system-in-ahmedabad",
    title: "Biometric Attendance System in Ahmedabad",
    image: "/images/bio-landing-images/ahmedabad-stadium.png",
  },
  {
    slug: "biometric-attendance-system-in-bangalore",
    title: "Biometric Attendance System in Bengaluru",
    image: "/images/bio-landing-images/bengaluru-blr-palace.png",
  },
  {
    slug: "biometric-attendance-system-in-hyderabad",
    title: "Biometric Attendance System in Hyderabad",
    image: "/images/bio-landing-images/charminar-hyderabad.png",
  },
  {
    slug: "biometric-attendance-system-in-chennai",
    title: "Biometric Attendance System in Chennai",
    image: "/images/bio-landing-images/chennai-mahabalipuram-temple.png",
  },
  {
    slug: "biometric-attendance-system-delhi-ncr",
    title: "Biometric Attendance System in Delhi NCR",
    image: "/images/bio-landing-images/delhi-parliament.png",
  },
  {
    slug: "biometric-attendance-system-gujarat",
    title: "Biometric Attendance System in Gujarat",
    image: "/images/bio-landing-images/gujrat-statue-of-unity.png",
  },
  {
    slug: "biometric-attendance-system-in-india",
    title: "Biometric Attendance System in India",
    image: "/images/bio-landing-images/india-laal-kila.png",
  },
  {
    slug: "biometric-attendance-system-in-jaipur",
    title: "Biometric Attendance System in Jaipur",
    image: "/images/bio-landing-images/Jaipur-palace-complex.png",
  },
  {
    slug: "biometric-attendance-system-in-kolkata",
    title: "Biometric Attendance System in Kolkata",
    image: "/images/bio-landing-images/kolkata-marble-palace.png",
  },
  {
    slug: "biometric-attendance-system-in-pune",
    title: "Biometric Attendance System in Pune",
    image: "/images/bio-landing-images/pune-national-war-memorial-pune.png",
  },
  {
    slug: "biometric-attendance-system-in-mumbai",
    title: "Biometric Attendance System in Mumbai",
    image: "/images/bio-landing-images/taj-hotel-mumbai.png",
  },
];

export default function BiometricsListPage() {
  return (
    <div className="container mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {biometricCities.map((city) => (
        <Link
          key={city.slug}
          href={`/${city.slug}`}
          className="rounded-md overflow-hidden border border-gray-50 bg-white"
        >
          <Image
            src={city.image}
            width={600}
            height={400}
            alt={city.title}
            className="w-full h-48 object-cover"
          />

          <div className="p-5">
            <h2 className="font-semibold text-lg">{city.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
