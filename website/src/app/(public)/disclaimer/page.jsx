import React from "react";
import {
  Shield,
  Eye,
  Lock,
  Users,
  Globe,
  FileText,
  Mail,
  ExternalLink,
  Fingerprint,
  Database,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

const disclaimerPage = () => {
  return (
    <div className="privacy-policy-page">
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-primary/10 to-gray-100 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center justify-center">
                {/* <Shield className="w-8 h-8 text-white" /> */}
                {/* Contact Section */}
                <div className="">
                  <div className="text-center">
                    <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">
                      Disclamer
                    </h1>
                    {/* <p className="text-gray-600 mb-6">
                      If you have any questions about this Privacy Policy, feel
                      free to contact us.
                    </p> */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="mailto:nitin@timewatchuae.com"
                        className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        nitin@timewatchuae.com
                      </a>
                      <a
                        href="https://www.timewatchuae.com"
                        className="inline-flex items-center px-6 py-3 bg-white text-primary border border-primary rounded-lg hover:bg-primary/10 transition-colors"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Visit Our Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <div className="disclaimer-content">
          <h2 className="disclaimer-heading">Disclaimer</h2>
         
            <p>
              All content present on this site is the exclusive property of
              TimeWatch. The Product, text, images, graphics, video and catalog
              used on this site belong to TimeWatch. No material from this site
              may be copied, modified, reproduced, republished, uploaded,
              transmitted, posted or distributed in any form without prior
              written permission from TimeWatch. All rights not expressly
              granted herein are reserved. Unauthorized use of the materials
              appearing on this site may violate copyright, trademark and other
              applicable laws, and could result in criminal or civil penalties.
              TimeWatch is a registered trademark of TimeWatch Infocom Pvt Ltd.
              This trademark may not be used in any manner without prior written
              consent from TimeWatch Infocom Pvt Ltd.
               </p>
              <ul>
                <li>
                  The Site, and all content, materials, information, software,
                  products and services provided on the Site, are provided on an
                  “as is” and “as available” basis. We expressly disclaims all
                  warranties of any kind, as per OEM standard form
                </li>
                <li>
                  TimeWatch shall have no responsibility for any damage, burnt
                  or loss of data.
                </li>
                <li>
                  TimeWatch may change or discontinue any aspect of its website
                  at any time, including, its content or features. TimeWatch
                  reserves the right to change the terms and conditions
                  applicable to use of the Site. Such changes shall be effective
                  immediately upon notice, which shall be placed on the Site.
                </li>
                <li>
                  The information contained in the Site has been obtained from
                  sources believed to be reliable. TimeWatch disclaims all
                  warranties as to the accuracy, completeness or adequacy of
                  such information.
                </li>
              </ul>
              <p>
                Note: We do not provide online sales & support through online
                platform like flipkart, amazon, ebay, etc.
              </p>
           
         
        </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default disclaimerPage;
