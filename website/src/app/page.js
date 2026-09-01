import BannerSwiper from "@/components/BannerSwiper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Clock,
  Users,
  Shield,
  BarChart3,
  Fingerprint,
  Building2,
  CheckCircle,
  ArrowRight,
  Star,
  Calendar,
  TrendingUp,
  Globe,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Play,
  Award,
  Zap,
  Target,
  HeartHandshake,
  ChevronDown,
  Headset,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import HomePageForm from "@/components/HomePageForm";
import FeaturedProducts from "@/components/products/FeaturedProducts";
import FeaturesProduct from "@/components/home/FeaturesProduct";
import ProductSlider from "@/components/home/ProductSlider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { solutions } from "@/data/menuItems";
import { productShowcase } from "@/data/productShowcase";
import axiosInstance from "@/lib/axiosInstance";

export const dynamic = "auto"; // optional; ISR will still work

export const metadata = {
  metadataBase: new URL("https://www.timewatchglobal.com"),
  title:
    "Biometric Attendance, Baggage Scanners, DFMD, Parking & Security Automation Solutions | TimeWatch",
  description:
    "TimeWatch offers advanced biometric attendance systems, baggage scanners, DFMDs, boom barriers, turnstiles, UVSS, ANPR cameras, and parking management solutions. Your trusted partner for smart access control and security automation across India, the UAE, Saudi Arabia and international markets.",
  keywords:
    "biometric attendance system, access control system, baggage scanner, DFMD, boom barrier, parking management system, turnstile gate, full height turnstile, flap barrier, swing gate, visitor management system, UHF reader, UVSS, ANPR camera, automatic bollard, spike barrier, tyre killer, road blocker, security automation, AI face recognition, fingerprint attendance machine, palm vein recognition, cloud attendance software, vehicle access control, TimeWatch",
  alternates: {
    canonical: "https://www.timewatchglobal.com/",
  },
  openGraph: {
    title:
      "TimeWatch – Biometric Attendance, Baggage Scanners, DFMD, Parking & Security Automation Solutions",
    description:
      "Explore TimeWatch’s full range of biometric attendance, baggage scanners, DFMDs, boom barriers, turnstiles, UVSS, ANPR cameras, and parking management systems for advanced access control and security automation.",
    type: "website",
    url: "https://www.timewatchglobal.com/",
    siteName: "TimeWatch",
    locale: "en_US",
  },
};

const clients = [
  "/images/clients/corporate-client/1.jpg",
  "/images/clients/corporate-client/2.jpg",
  "/images/clients/corporate-client/3.jpg",
  "/images/clients/corporate-client/4.jpg",
  "/images/clients/corporate-client/5.jpg",
  "/images/clients/corporate-client/6.jpg",
  "/images/clients/corporate-client/7.jpg",
  "/images/clients/corporate-client/8.jpg",
  "/images/clients/corporate-client/9.jpg",
  "/images/clients/corporate-client/10.jpg",
  "/images/clients/corporate-client/11.jpg",
  "/images/clients/corporate-client/12.jpg",
];

// ISR: Regenerate every 1 hour (3600 seconds)
async function getFeaturedProducts() {
  try {
    const res = await axiosInstance.get(`/product/featured-products`);
    return res.data?.products || [];
  } catch (error) {
    if (error.code === "ECONNREFUSED") {
      console.error("Backend not running or unreachable");
    } else {
      console.error("Error fetching products:", error.message);
    }
    // return empty array or null so UI doesn't crash
    return [];
  }
}

export default async function HomePage() {
  const products = await getFeaturedProducts();
  // console.log(products);

  let publishedProducts = products.filter(
    (item) => item?.status == "published"
  );

  // Get first subcategory from each of the first 4 categories
  const displayItems = solutions.slice(0, 4).map((solution) => ({
    ...solution.subCategories[0],
    category: solution.category,
    categoryUrl: solution.categoryUrl,
  }));
  return (
    <div>

      <main>
        <section>
          <BannerSwiper />
        </section>
        <div className="relative overflow-hidden hidden">
          <HeroSection />
        </div>

        {/* Product Showcase Slider */}
        {/* <ProductSlider
          products={productShowcase}
          eyebrow="Product Showcase"
          title="Explore Our Product Range"
          subtitle="Enterprise-grade security, screening & workforce technology built for performance."
        /> */}

        {/* <FeaturedProducts/> */}
        {/* features products */}
        <FeaturesProduct publishedProducts={publishedProducts} />

        {/* Benefits Section */}
        {/* <section id="benefits" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-6">
                  Why Choose <span className="text-primary">Time</span>
                  <span className="text-secondary">Watch</span>?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Transform your workforce management with our cutting-edge
                  solutions
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: TrendingUp,
                      title: "Increase Productivity",
                      description:
                        "Reduce time theft and improve workforce efficiency by up to 35%",
                    },
                    {
                      icon: Shield,
                      title: "Enhanced Security",
                      description:
                        "Eliminate buddy punching and unauthorized access with biometric authentication",
                    },
                    {
                      icon: Zap,
                      title: "Streamlined Operations",
                      description:
                        "Automate attendance tracking and integrate seamlessly with existing systems",
                    },
                    {
                      icon: Target,
                      title: "Accurate Reporting",
                      description:
                        "Generate precise reports for payroll, compliance, and performance analysis",
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#d63438]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-[#d63438]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-[#d63438]/10 to-[#6d6f72]/10 rounded-3xl p-5 lg:p-8">
                  <div className="bg-white rounded-2xl shadow-xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-[#6d6f72]">
                        Live Dashboard
                      </h3>
                      <div className="flex items-center space-x-2 text-green-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm">Live</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-green-50 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-green-600">
                          847
                        </div>
                        <div className="text-sm text-green-800">
                          Present Today
                        </div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600">23</div>
                        <div className="text-sm text-blue-800">On Leave</div>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-orange-600">
                          12
                        </div>
                        <div className="text-sm text-orange-800">
                          Late Arrivals
                        </div>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-purple-600">
                          98.5%
                        </div>
                        <div className="text-sm text-purple-800">
                          Attendance Rate
                        </div>
                      </div>
                    </div>

                    <div className="h-32 bg-gradient-to-r from-[#d63438]/20 to-[#6d6f72]/20 rounded-xl flex items-end justify-center space-x-2 p-4">
                      {[40, 65, 45, 80, 55, 75, 60].map((height, index) => (
                        <div
                          key={index}
                          className="bg-[#d63438] rounded-t"
                          style={{ height: `${height}%`, width: "12px" }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-4 mb-2">
                <span className="h-0.5 w-10 bg-primary"></span>
                <span className="text-primary font-semibold">
                  Best Solutions
                </span>
                <span className="h-0.5 w-10 bg-primary"></span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                Our Solutions
              </h2>
              {/* <p className="text-gray-500 max-w-2xl mx-auto"

              >
                We are proud to partner with industry leaders to deliver reliable security solutions.

              </p> */}
            </div>

            <div className="grid lg:grid-cols-2 gap-x-5 gap-y-5 lg:gap-y-0">
              {/* Featured Solution */}
              <div className="lg:row-span-2">
                <div className="group relative h-full xl:h-full rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                  <div className="relative w-full h-[250px] md:h-full overflow-hidden">
                    <Image
                      src="/images/solutions/home-baggage-scanner.jpg"
                      alt="Access Control Systems"
                      fill
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <div className="mb-4">
                      <span className="bg-[#d63438] text-white px-4 py-2 rounded-full font-medium text-sm">
                        Security Solutions
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                      Advanced X-Ray Baggage Screening Systems
                    </h3>
                    <Link
                      href="/solutions/inspection-detection-solutions/advanced-x-ray-baggage-screening"
                      className="flex items-center text-white group-hover:text-[#d63438] transition-colors"
                    >
                      <span className="font-medium">Learn More</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Other Solutions */}
              <div className="space-y-5">
                {/* Card 1 */}
                <Link
                  href="/solutions/workforce-hr-solutions/cloud-attendance-payroll-software"
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col md:flex-row"
                >
                  <div className="md:w-2/5 relative overflow-hidden h-[180px] lg:h-[140px] xl:h-[180px]">
                    <Image
                      src="/images/solutions/mobile-application-home.jpg"
                      alt="Attendance & Payroll Management Software"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="md:w-3/5 p-3 md:p-6 flex flex-col justify-between">
                    <h3 className="text-xl md:text-2xl lg:text-lg xl:text-2xl font-bold text-[#6d6f72] mb-3 line-clamp-3 group-hover:text-[#d63438] transition-colors">
                      Attendance & Payroll Management Software
                    </h3>
                    <span className="text-[#d63438] font-medium text-sm md:text-xl lg:text-sm xl:text-lg max-w-[200px]">
                      Software Solutions
                    </span>
                  </div>
                </Link>

                {/* Card 2 */}
                <Link
                  href="/solutions/visitor-access-management/crowd-management-solutions-turnstile-gates-flap-barriers"
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col md:flex-row"
                >
                  <div className="md:w-2/5 relative overflow-hidden h-[180px] lg:h-[140px] xl:h-[180px]">
                    <Image
                      src="/images/solutions/entrance-system-home.jpg"
                      alt="Crowd Management Solutions in India – Turnstile Gates"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="md:w-3/5 p-3 md:p-6 flex flex-col justify-between">
                    <h3 className="text-xl md:text-2xl lg:text-lg xl:text-2xl font-bold text-[#6d6f72] mb-3 line-clamp-3 group-hover:text-[#d63438] transition-colors">
                      Crowd Management Solutions in India – Turnstile Gates
                    </h3>
                    <span className="text-[#d63438] font-medium text-sm md:text-xl lg:text-sm xl:text-lg max-w-[200px]">
                      Security Solutions
                    </span>
                  </div>
                </Link>

                {/* Card 3 */}
                <Link
                  href="/solutions/visitor-access-management/what-is-a-visitor-management-system"
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col md:flex-row"
                >
                  <div className="md:w-2/5 relative overflow-hidden h-[180px] lg:h-[140px] xl:h-[180px]">
                    <Image
                      src="/images/solutions/visitor-management-system.jpg"
                      alt="Visitor Management Systems"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="md:w-3/5 p-3 md:p-6 flex flex-col justify-between">
                    <h3 className="text-xl md:text-2xl lg:text-lg xl:text-2xl font-bold text-[#6d6f72] mb-3 line-clamp-3 group-hover:text-[#d63438] transition-colors">
                      Visitor Management Systems
                    </h3>
                    <span className="text-[#d63438] font-medium text-sm md:text-xl lg:text-sm xl:text-lg max-w-[200px]">
                      Management
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* View All Button */}
            <div className="text-center mt-12">
              <Link
                href={"/solutions"}
                className="group bg-[#d63438] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#6d6f72] transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl w-fit"
              >
                View All Solutions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
        {/* India Section */}
        {/* <section className="pb-20 ">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid lg:grid-cols-2 lg:gap-8 items-start">

             
              <div className="relative w-full h-52 md:h-[430px] rounded-2xl overflow-hidden bg-gray-100 order-1 lg:order-2">
                <Image
                  src="/images/biometric-attendance-system.png"
                  alt="Biometric Attendance System in India"
                  fill
                  className="object-contain w-full h-full p-6 lg:p-20"
                />
              </div>

             
              <div className="flex flex-col justify-center items-start space-y-6 order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4 mt-4 md:mt-0">
                  Biometric Attendance System
                  in India
                </h2>

                <p className="text-gray-600 leading-[28px]">
                  Biometric attendance systems eliminate these risks by creating tamper-proof digital records of entry and exit times. The system captures data in real-time, stores it securely, generates comprehensive reports automatically, and integrates seamlessly with payroll and HR systems. This automation saves administrative time and costs while building a culture of accountability, punctuality, and transparency throughout the organization, benefiting both employers and employees alike.
                </p>
                <p className="text-gray-600 leading-[28px]">
                  In today's competitive business landscape, accurate attendance tracking directly impacts payroll accuracy, productivity measurement, labor cost management, and regulatory compliance. Indian & World labor laws, including the Factories Act and Shops and Establishment Acts, mandate precise maintenance of attendance records with penalties for non-compliance. Manual or card-based systems create opportunities for errors and fraud that lead to inflated costs, payroll discrepancies, and legal complications.
                </p>

                <Link
                  href="/biometric-attendance-system-in-india"
                  target="_blank"
                  className="group bg-[#d63438] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#6d6f72] transition-all duration-300 flex items-start gap-2 shadow-lg hover:shadow-xl w-fit"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </div>

            </div>

          </div>
        </section> */}




        {/* Features Section */}
        <section id="features" className="lg:pb-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
                Advanced Features for Modern Workforce
              </h2>
              <p className="text-xl text-secondary max-w-3xl mx-auto">
                Comprehensive biometric solutions with seamless HRM integration
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Fingerprint,
                  title: "Biometric Authentication",
                  description:
                    "Advanced fingerprint, face, and iris recognition with 99.9% accuracy",
                  color: "from-[#d63438] to-[#b82c30]",
                },
                {
                  icon: Clock,
                  title: "Real-time Tracking",
                  description:
                    "Live attendance monitoring with instant notifications and alerts",
                  color: "from-[#6d6f72] to-[#5a5c5f]",
                },
                {
                  icon: BarChart3,
                  title: "Analytics Dashboard",
                  description:
                    "Comprehensive reports and insights for informed decision making",
                  color: "from-[#d63438] to-[#b82c30]",
                },
                {
                  icon: Users,
                  title: "HRM Integration",
                  description:
                    "Seamless integration with payroll, leave management, and HR systems",
                  color: "from-[#6d6f72] to-[#5a5c5f]",
                },
                {
                  icon: Shield,
                  title: "Security & Compliance",
                  description:
                    "Bank-grade security with GDPR compliance and data encryption",
                  color: "from-[#d63438] to-[#b82c30]",
                },
                {
                  icon: Globe,
                  title: "Multi-location Support",
                  description:
                    "Centralized management across multiple offices and time zones",
                  color: "from-[#6d6f72] to-[#5a5c5f]",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#d63438]/20"
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#6d6f72] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Our Clients */}
        <section class="">
          <div class="text-center mb-12">
            <div class="flex items-center justify-center space-x-4 mb-2">
              <span class="h-0.5 w-10 bg-primary"></span>
              <span class="text-primary font-semibold">Trusted Worldwide</span>
              <span class="h-0.5 w-10 bg-primary"></span>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-secondary mb-2">
              Our Clients
            </h2>
            <p class="text-xl text-secondary max-w-3xl mx-auto"> “Want to join our list of satisfied clients? Contact our team today!”
              Get Catalog & Get a Free Consultation</p>

          </div>
          <div className="container mx-auto grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
            {clients.map((src, i) => (
              <div
                key={i}
                className="client-card flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-200"
              >
                <div className="relative w-full h-[100px] lg:h-[150px]">
                  <Image
                    src={src}
                    alt={`Client ${i + 1} logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 50vw,
                     (max-width: 1024px) 33vw,
                     25vw"
                  />
                </div>
              </div>
            ))}
          </div>
          {/* View All Button */}
          <div className="text-center mt-12 mb-16">
            <Link
              href={"/clients"}
              className="group bg-[#d63438] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#6d6f72] transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl w-fit"
            >
              View All Clients
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform " />
            </Link>
          </div>
        </section>

        {/* Get Catalogue section */}
        {/* <section>
        <div className="container  mt-6 lg:mt-20">
          <div className="grid lg:grid-cols-2">
            <div>
              <h2 className="h2 block lg:hidden text-secondary">Unlock the Best in Security <span className="text-primary.">– Get Our Catalogue Now</span></h2>
              <div className="w-full lg:w-[600px] h-[200px] lg:h-[400px] relative mx-auto">
                <Image
                  src="/images/catalogue.webp"
                  alt="timewatch catalogue"
                  className="mx-auto mb-4"
                  fill
                  sizes="300"
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <h2 className="h2 hidden lg:block text-secondary">Unlock the Best in Security <span className="text-primary.">– Get Our Catalogue Now</span></h2>
                <Counter />
                <Button className={'mt-5'}>Get the Catalogue</Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

        {/* <section>
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 items-center">
            <div>
              <div className="text-center">
                <h2 className="font-bold text-[25px] text-center mb-5 text-gray-900">
                  Unlock the Best in Security – Get Our Catalogue Now
                </h2>
                <div className="w-full lg:w-[600px] h-[200px] lg:h-[400px] relative mx-auto">
                  <Image
                    src="/images/catalogue.webp"
                    alt="timewatch catalogue"
                    className="mx-auto mb-4"
                    fill
                    sizes="300"
                  />
                </div>

                <button className="tomato-btn !py-3">Get the Catalogue</button>
                <Counter />
              </div>
            </div>
            <div className="lg:pl-20">
              <GoogleReviews />
            </div>
          </div>
        </div>
      </section> */}
        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-20 bg-gradient-to-br from-gray-50 to-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-secondary max-w-3xl mx-auto">
                See what our customers say about their experience with TimeWatch
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Suhel Khan",
                  position: "",
                  company: "",
                  content:
                    "I had an excellent experience with the technical support provided by Lalit Kumar. He was extremely knowledgeable, patient, and efficient in resolving my issue. His prompt response and clear communication made the entire process smooth and hassle-free. I truly appreciate his dedication and professionalism. Great support – thank you, Lalit!",
                  rating: 5,
                },
                {
                  name: "Ravi Gupta",
                  position: "",
                  company: "",
                  content:
                    "I've been using TimeWatch Bio-Manager (eVe software) and it's been consistently user-friendly and reliable. The support team is quick, professional, and always helpful. Special thanks to Dhiraj Tiwari for their excellent assistance – knowledgeable, patient, and efficient. Highly recommend TimeWatch for its great service and cooperative team!",
                  rating: 5,
                },
                {
                  name: "Aditya",
                  position: "",
                  company: "",
                  content:
                    "I had a great experience with Mr. Amit from the Timewatch team for his outstanding support during the software installation process. He provided guidance at every step and ensured everything went smoothly.Thank you once again for the excellent service!",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-secondary mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#d63438] to-[#b82c30] rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-secondary">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-secondary">
                        {testimonial.position}
                      </div>
                      <div className="text-sm text-[#d63438]">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#d63438] to-[#b82c30]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Workforce Management?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of companies already using TimeWatch to streamline
              their operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/product-catalouge"
                className="bg-white text-[#d63438] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all flex items-center justify-center space-x-2"
              >
                <span>Get Catalogue</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={"/contact/#contactPageSection"}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#d63438] transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Book Demo</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {
                  "Ready to revolutionize your workforce management? Let's talk!"
                }
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold text-[#6d6f72] mb-4">
                  <span className="text-primary">Let’s Secure</span> Your
                  Premises
                  <br /> with Smart Technology
                </h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                  Connect with our security experts today — claim your free
                  on-site consultation and see how we can protect your property!
                </p>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#d63438]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#d63438]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">
                      Phone
                    </h3>
                    <a href="tel:+971523744121" className="text-gray-600">
                      +971 5237 44121
                    </a>
                    {/* <p className="text-sm text-gray-500">Available 24/7 for support</p> */}
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#d63438]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Headset className="w-6 h-6 text-[#d63438]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">
                      Sales & Technical
                    </h3>
                    <a href="tel:+971568355615" className="text-gray-600">
                      +971568355615
                    </a>
                    {/* <p className="text-sm text-gray-500">Available 24/7 for support</p> */}
                  </div>
                </div>
                {/* 
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#d63438]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#d63438]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:mohsin@timewatchglobal.com.com"
                      className="text-gray-600"
                    >
                      mohsin@timewatchglobal.com.com
                    </a>
                    
                  </div>
                </div> */}

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#d63438]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#d63438]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#6d6f72] mb-2">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      {"Building no. 08R-SH Saih Shuaib2, Plot no.176-0 Dubai"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 lg:p-8">
                <HomePageForm />
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
