"use client"
import React, { useState } from 'react';
import { 
  Shield, 
  BarChart3, 
  Fingerprint, 
  ArrowRight, 
  Play, 
  Award,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Target,
  Eye,
  ChevronRight,
  Calendar,
  User,
  FileText,
  Star
} from 'lucide-react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation Schema for Partner Form
const PartnerSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Enter a valid email').required('Email is required'),
  mobile: Yup.string().matches(/^[0-9]{10}$/, 'Enter a valid 10-digit mobile number').required('Mobile number is required'),
  landline: Yup.string(),
  address: Yup.string().required('Address is required'),
  pincode: Yup.string().matches(/^[0-9]{6}$/, 'Enter a valid 6-digit pincode').required('Pincode is required'),
  country: Yup.string().required('Country is required'),
  state: Yup.string().required('State is required'),
  companyName: Yup.string().required('Company name is required'),
  dateOfEstablishment: Yup.date().required('Date of establishment is required'),
  experienceInBusiness: Yup.string().required('Experience in business is required'),
  annualTurnover: Yup.string().required('Annual turnover is required'),
  productsDealing: Yup.string().required('Products you are dealing in is required'),
  salesTeam: Yup.string().required('Number of sales team is required'),
  fieldStaff: Yup.string().required('Number of field staff is required'),
  technicalStaff: Yup.string().required('Number of technical staff is required'),
});

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Enter a valid email').required('Email is required'),
  phone: Yup.string().matches(/^[0-9]{10}$/, 'Enter a valid 10-digit phone number').required('Phone number is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

const Website = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: "The Future of Biometric Technology in Workplace Management",
      excerpt: "Discover how advanced biometric systems are revolutionizing employee attendance and security protocols in modern workplaces.",
      content: `
        <h2>Introduction</h2>
        <p>Biometric technology has emerged as a game-changer in workplace management, offering unprecedented levels of security and efficiency. As organizations worldwide seek to optimize their operations, biometric systems provide a reliable solution for employee identification and time tracking.</p>
        
        <h2>Key Benefits</h2>
        <p>The implementation of biometric systems brings numerous advantages:</p>
        <ul>
          <li>Enhanced security through unique biological identifiers</li>
          <li>Elimination of buddy punching and time theft</li>
          <li>Seamless integration with existing HR systems</li>
          <li>Real-time attendance monitoring and reporting</li>
        </ul>
        
        <h2>Technology Evolution</h2>
        <p>Modern biometric systems have evolved beyond simple fingerprint scanning. Today's solutions incorporate multiple identification methods including facial recognition, iris scanning, and voice recognition, providing robust security layers.</p>
        
        <h2>Implementation Considerations</h2>
        <p>When implementing biometric systems, organizations should consider factors such as employee privacy, data security, and system scalability. Proper training and change management are crucial for successful adoption.</p>
        
        <h2>Future Outlook</h2>
        <p>The future of biometric technology promises even more advanced features, including AI-powered analytics, cloud-based solutions, and integration with IoT devices. These developments will further enhance workplace efficiency and security.</p>
      `,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop",
      author: "Dr. Sarah Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Technology"
    },
    {
      id: 2,
      title: "Implementing Biometric Systems: Best Practices and Common Challenges",
      excerpt: "Learn about the essential considerations and proven strategies for successfully deploying biometric attendance systems in your organization.",
      content: `
        <h2>Planning Your Implementation</h2>
        <p>Successful biometric system implementation requires careful planning and consideration of various factors. Organizations must assess their current infrastructure, employee needs, and long-term objectives.</p>
        
        <h2>Common Implementation Challenges</h2>
        <p>Organizations often face several challenges during implementation:</p>
        <ul>
          <li>Employee resistance to new technology</li>
          <li>Integration with existing systems</li>
          <li>Data privacy and security concerns</li>
          <li>Hardware and software compatibility issues</li>
        </ul>
        
        <h2>Best Practices</h2>
        <p>To ensure successful implementation, follow these best practices:</p>
        <ul>
          <li>Conduct thorough needs assessment</li>
          <li>Engage employees early in the process</li>
          <li>Provide comprehensive training</li>
          <li>Implement in phases</li>
          <li>Monitor and optimize continuously</li>
        </ul>
        
        <h2>ROI and Performance Metrics</h2>
        <p>Measuring the success of biometric system implementation involves tracking key performance indicators such as time savings, accuracy improvements, and cost reductions.</p>
      `,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      author: "Michael Chen",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Implementation"
    },
    {
      id: 3,
      title: "Privacy and Security in Biometric Data Management",
      excerpt: "Understanding the critical aspects of protecting biometric data and ensuring compliance with privacy regulations.",
      content: `
        <h2>The Importance of Biometric Data Security</h2>
        <p>Biometric data represents the most personal form of identification, making its protection paramount. Organizations must implement robust security measures to safeguard this sensitive information.</p>
        
        <h2>Regulatory Compliance</h2>
        <p>Various regulations govern biometric data handling:</p>
        <ul>
          <li>GDPR in Europe</li>
          <li>CCPA in California</li>
          <li>State biometric privacy laws</li>
          <li>Industry-specific regulations</li>
        </ul>
        
        <h2>Security Best Practices</h2>
        <p>Implement these security measures for optimal protection:</p>
        <ul>
          <li>End-to-end encryption</li>
          <li>Secure data storage</li>
          <li>Access controls and audit trails</li>
          <li>Regular security assessments</li>
        </ul>
        
        <h2>Employee Privacy Rights</h2>
        <p>Respecting employee privacy while maintaining security requires clear policies, transparent communication, and opt-out alternatives where legally permissible.</p>
      `,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      author: "Lisa Rodriguez",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Security"
    }
  ];

  const Navigation = () => (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#d63438] rounded-lg flex items-center justify-center">
                <Fingerprint className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-[#6d6f72]">BiometricPro</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['home', 'about', 'blog', 'partner', 'contact'].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 rounded-md text-sm font-medium capitalize ${
                    currentPage === page
                      ? 'bg-[#d63438] text-white'
                      : 'text-[#6d6f72] hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-[#6d6f72] hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {['home', 'about', 'blog', 'partner', 'contact'].map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                    setIsMenuOpen(false);
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium capitalize w-full text-left ${
                    currentPage === page
                      ? 'bg-[#d63438] text-white'
                      : 'text-[#6d6f72] hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-[#d63438]/10 text-[#d63438] px-4 py-2 rounded-full text-sm font-medium">
                <Award className="w-4 h-4" />
                <span>Industry Leading Solution</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-[#6d6f72] leading-tight">
                Perfect Presence,
                <span className="text-[#d63438]"> Perfect Control</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Revolutionary biometric time attendance system with advanced HRM
                integration. Transform your workforce management with cutting-edge
                technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#d63438] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#b82c30] transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Get Catalogue</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button className="border-2 border-[#6d6f72] text-[#6d6f72] px-8 py-4 rounded-xl font-semibold hover:bg-[#6d6f72] hover:text-white transition-all flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4 justify-center md:justify-start">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#d63438]">50k+</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#d63438]">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#d63438]">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-[#d63438]/20 to-[#6d6f72]/20 rounded-3xl p-8">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-[#d63438] rounded-xl flex items-center justify-center">
                      <Fingerprint className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#6d6f72]">
                        Biometric Scanner
                      </h3>
                      <p className="text-sm text-gray-600">
                        Touch & Go Recognition
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium text-green-800">
                        John Doe - Check In
                      </span>
                      <span className="text-xs text-green-600">09:00 AM</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium text-blue-800">
                        Sarah Smith - Check Out
                      </span>
                      <span className="text-xs text-blue-600">05:30 PM</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <span className="text-sm font-medium text-orange-800">
                        Mike Johnson - Break
                      </span>
                      <span className="text-xs text-orange-600">12:15 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#d63438] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#6d6f72] rounded-full flex items-center justify-center shadow-lg">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#6d6f72] mb-4">
              Advanced Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of next-generation biometric technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Fingerprint className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#6d6f72] mb-4">Multi-Modal Recognition</h3>
              <p className="text-gray-600">
                Support for fingerprint, face, and iris recognition with 99.9% accuracy
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#6d6f72] mb-4">Advanced Security</h3>
              <p className="text-gray-600">
                Military-grade encryption and anti-spoofing technology
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#6d6f72] mb-4">Real-time Analytics</h3>
              <p className="text-gray-600">
                Comprehensive reporting and analytics dashboard
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#d63438]/10 to-[#6d6f72]/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#6d6f72] mb-6">
            About BiometricPro
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the revolution in biometric technology and workforce management solutions
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d63438] rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#6d6f72] mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To revolutionize workforce management through cutting-edge biometric technology,
                ensuring security, accuracy, and efficiency for businesses worldwide.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#6d6f72] rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#6d6f72] mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the global leader in biometric solutions, creating a world where
                identity verification is seamless, secure, and universally accessible.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#6d6f72] mb-4">Our Values</h3>
              <p className="text-gray-600">
                Innovation, integrity, and customer-centricity drive everything we do.
                We believe in building trust through transparent and reliable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#6d6f72] mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2015, BiometricPro emerged from a simple yet powerful vision:
                to make biometric technology accessible and practical for businesses of all sizes.
                What started as a small team of passionate engineers has grown into a leading
                provider of biometric solutions.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we've helped thousands of organizations streamline their
                workforce management processes, enhance security, and improve operational
                efficiency through our innovative biometric systems.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#d63438]">9+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#d63438]">10k+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#d63438]">50+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#d63438]/20 to-[#6d6f72]/20 rounded-3xl p-8">
              <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
                <Users className="w-16 h-16 text-[#d63438] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#6d6f72] mb-2">Our Team</h3>
                <p className="text-gray-600">
                  A diverse group of experts dedicated to pushing the boundaries
                  of biometric technology and delivering exceptional customer experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const BlogListPage = () => (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#d63438]/10 to-[#6d6f72]/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#6d6f72] mb-6">
            Latest Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and innovations in biometric technology
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article key={blog.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-[#d63438]/20 to-[#6d6f72]/20 relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#d63438] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#6d6f72] mb-3 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{blog.author}</span>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedBlog(blog);
                        setCurrentPage('blog-detail');
                      }}
                      className="text-[#d63438] hover:text-[#b82c30] font-medium flex items-center"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

//   const BlogDetailPage = () => {
//     if (!selectedBlog) return <BlogListPage />;

//     return (
//       <div className="pt-24 pb-16">
//         {/* Hero Section */}
//         <section className="bg-gradient-to-br from-[#d63438]/10 to-[#6d6f72]/10 py-16">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//             <button
//               onClick={() => setCurrentPage('blog')}
//               className="text-[#d63438] hover:text-[#b82c30] font-medium flex items-center mb-6"
//             >
//               <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
//               Back to Blog
//             </button>
//             <div className="mb-6">
//               <span className="bg-[#d63438] text-white px-3 py-1 rounded-full text-sm font-medium">
//                 {selectedBlog.category}
//               </span>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold text-[#6d6f72] mb-6">
//               {selectedBlog.title}
//             </h1>
//             <div className="flex items-center text-gray-600 mb-8">
//               <User className="w-5 h-5 mr-2" />
//               <span className="mr-4">{selectedBlog.author}</span>
//               <Calendar className="w-5 h-5 mr-2" />
//               <span className="mr-4">{new Date(selectedBlog.date).toLocaleDateString()}</span>
//               <Clock className="w-5 h-5 mr-2" />
//               <span>{selectedBlog.readTime}</span>
//             </div>
//           </div>
//         </section>

}