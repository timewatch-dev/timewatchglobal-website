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

const termAndCondition = () => {
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
                      Terms and Conditions
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
            <div className="terms-container">
              <div className="terms-content">
                <h3>Last updated: March 11, 2020</h3>
                <h4>
                  Please read these terms and conditions carefully before using
                  Our Service.
                </h4>
                <p>
                  {/* <h2 className="terms-heading">
                    Interpretation and Definitions
                  </h2> */}
                  <p>
                    <h3>Interpretation</h3>
                    <ul>
                      <li>
                        The words of which the initial letter is capitalized
                        have meanings defined under the following conditions.
                      </li>
                      <li>
                        The following definitions shall have the same meaning
                        regardless of whether they appear in singular or in
                        plural.
                      </li>
                    </ul>
                    <h3>Definitions</h3>
                    <p>For the purposes of these Terms and Conditions:</p>
                    <ul>
                      <li>
                        Affiliate means an entity that controls, is controlled
                        by or is under common control with a party, where
                        "control" means ownership of 50% or more of the shares,
                        equity interest or other securities entitled to vote for
                        election of directors or other managing authority.
                      </li>
                      <li>
                        Company (referred to as either "the Company", "We", "Us"
                        or "Our" in this Agreement) refers to TimeWatch Infocom
                        Pvt. Ltd., B-168/169, 2nd Floor, DDA Shed, Okhla Phase
                        1, New Delhi-110020. Country refers to: Delhi, India
                      </li>
                      <li>Service refers to the Website.</li>
                      <li>
                        Terms and Conditions (also referred as "Terms") mean
                        these Terms and Conditions that form the entire
                        agreement between You and the Company regarding the use
                        of the Service.
                      </li>
                      <li>
                        Third-party Social Media Service means any services or
                        content (including data, information, products or
                        services) provided by a third-party that may be
                        displayed, included or made available by the Service.
                      </li>
                      <li>
                        Website refers to TimeWatch, accessible from
                        www.timewatchuae.com
                      </li>
                      <li>
                        You means the individual accessing or using the Service,
                        or the company, or other legal entity on behalf of which
                        such individual is accessing or using the Service, as
                        applicable.
                      </li>
                    </ul>
                    <h3>Acknowledgement</h3>
                    <ul>
                      <li>
                        These are the Terms and Conditions governing the use of
                        this Service and the agreement that operates between You
                        and the Company. These Terms and Conditions set out the
                        rights and obligations of all users regarding the use of
                        the Service.
                      </li>
                      <li>
                        Your access to and use of the Service is conditioned on
                        Your acceptance of and compliance with these Terms and
                        Conditions. These Terms and Conditions apply to all
                        visitors, users and others who access or use the
                        Service.
                      </li>
                      <li>
                        By accessing or using the Service You agree to be bound
                        by these Terms and Conditions. If You disagree with any
                        part of these Terms and Conditions then You may not
                        access the Service.
                      </li>
                      <li>
                        Your access to and use of the Service is also
                        conditioned on Your acceptance of and compliance with
                        the Privacy Policy of the Company. Our Privacy Policy
                        describes Our policies and procedures on the collection,
                        use and disclosure of Your personal information when You
                        use the Application or the Website and tells You about
                        Your privacy rights and how the law protects You. Please
                        read Our Privacy Policy carefully before using Our
                        Service.
                      </li>
                    </ul>
                    <h3>Links to Other Websites</h3>
                    <ul>
                      <li>
                        Our Service may contain links to third-party web sites
                        or services that are not owned or controlled by the
                        Company.
                      </li>
                      <li>
                        The Company has no control over, and assumes no
                        responsibility for, the content, privacy policies, or
                        practices of any third party web sites or services. You
                        further acknowledge and agree that the Company shall not
                        be responsible or liable, directly or indirectly, for
                        any damage or loss caused or alleged to be caused by or
                        in connection with the use of or reliance on any such
                        content, goods or services available on or through any
                        such web sites or services.
                      </li>
                      <li>
                        We strongly advise You to read the terms and conditions
                        and privacy policies of any third-party web sites or
                        services that You visit.
                      </li>
                    </ul>
                    <h3>Termination</h3>
                    <ul>
                      <li>
                        We may terminate or suspend Your access immediately,
                        without prior notice or liability, for any reason
                        whatsoever, including without limitation if You breach
                        these Terms and Conditions.
                      </li>
                      <li>
                        Upon termination, Your right to use the Service will
                        cease immediately.
                      </li>
                    </ul>
                    <h3>Limitation of Liability</h3>
                    <ul>
                      <li>
                        Not with standing any damages that You might incur, the
                        entire liability of the Company and any of its suppliers
                        under any provision of this Terms and Your exclusive
                        remedy for all of the foregoing shall be limited to the
                        amount actually paid by You through the Service or 100
                        USD if You haven't purchased anything through the
                        Service.
                      </li>
                      <li>
                        To the maximum extent permitted by applicable law, in no
                        event shall the Company or its suppliers be liable for
                        any special, incidental, indirect, or consequential
                        damages whatsoever (including, but not limited to,
                        damages for loss of profits, loss of data or other
                        information, for business interruption, for personal
                        injury, loss of privacy arising out of or in any way
                        related to the use of or inability to use the Service,
                        third-party software and/or third-party hardware used
                        with the Service, or otherwise in connection with any
                        provision of this Terms), even if the Company or any
                        supplier has been advised of the possibility of such
                        damages and even if the remedy fails of its essential
                        purpose.
                      </li>
                      <li>
                        Some states do not allow the exclusion of implied
                        warranties or limitation of liability for incidental or
                        consequential damages, which means that some of the
                        above limitations may not apply. In these states, each
                        party's liability will be limited to the greatest extent
                        permitted by law.
                      </li>
                    </ul>
                    <h3>"AS IS" and "AS AVAILABLE" Disclaimer</h3>
                    <ul>
                      <li>
                        The Service is provided to You "AS IS" and "AS
                        AVAILABLE" and with all faults and defects without
                        warranty of any kind. To the maximum extent permitted
                        under applicable law, the Company, on its own behalf and
                        on behalf of its Affiliates and its and their respective
                        licensors and service providers, expressly disclaims all
                        warranties, whether express, implied, statutory or
                        otherwise, with respect to the Service, including all
                        implied warranties of merchantability, fitness for a
                        particular purpose, title and non-infringement, and
                        warranties that may arise out of course of dealing,
                        course of performance, usage or trade practice. Without
                        limitation to the foregoing, the Company provides no
                        warranty or undertaking, and makes no representation of
                        any kind that the Service will meet Your requirements,
                        achieve any intended results, be compatible or work with
                        any other software, applications, systems or services,
                        operate without interruption, meet any performance or
                        reliability standards or be error free or that any
                        errors or defects can or will be corrected.
                      </li>
                      <li>
                        Without limiting the foregoing, neither the Company nor
                        any of the company's provider makes any representation
                        or warranty of any kind, express or implied: (i) as to
                        the operation or availability of the Service, or the
                        information, content, and materials or products included
                        thereon; (ii) that the Service will be uninterrupted or
                        error-free; (iii) as to the accuracy, reliability, or
                        currency of any information or content provided through
                        the Service; or (iv) that the Service, its servers, the
                        content, or e-mails sent from or on behalf of the
                        Company are free of viruses, scripts, trojan horses,
                        worms, malware, timebombs or other harmful components.
                      </li>
                      <li>
                        Some jurisdictions do not allow the exclusion of certain
                        types of warranties or limitations on applicable
                        statutory rights of a consumer, so some or all of the
                        above exclusions and limitations may not apply to You.
                        But in such a case the exclusions and limitations set
                        forth in this section shall be applied to the greatest
                        extent enforceable under applicable law.
                      </li>
                    </ul>
                    <h3>Governing Law</h3>
                    <ul>
                      <li>
                        The laws of the Country, excluding its conflicts of law
                        rules, shall govern this Terms and Your use of the
                        Service. Your use of the Application may also be subject
                        to other local, state, national, or international laws.
                      </li>
                    </ul>
                    <h3>Disputes Resolution</h3>
                    <ul>
                      <li>
                        If You have any concern or dispute about the Service,
                        You agree to first try to resolve the dispute informally
                        by contacting the Company.
                      </li>
                    </ul>
                    <h3>For European Union (EU) Users</h3>
                    <ul>
                      <li>
                        If You are a European Union consumer, you will benefit
                        from any mandatory provisions of the law of the country
                        in which you are resident in.
                      </li>
                    </ul>
                    <h3>United States Legal Compliance</h3>
                    <ul>
                      <li>
                        You represent and warrant that (i) You are not located
                        in a country that is subject to the United States
                        government embargo, or that has been designated by the
                        United States government as a “terrorist supporting”
                        country, and (ii) You are not listed on any United
                        States government list of prohibited or restricted
                        parties.
                      </li>
                    </ul>
                    <h3>Severability and Waiver</h3>
                    <ul>
                      <li>
                        If any provision of these Terms is held to be
                        unenforceable or invalid, such provision will be changed
                        and interpreted to accomplish the objectives of such
                        provision to the greatest extent possible under
                        applicable law and the remaining provisions will
                        continue in full force and effect.
                      </li>
                      <li>
                        Except as provided herein, the failure to exercise a
                        right or to require performance of an obligation under
                        this Terms shall not effect a party's ability to
                        exercise such right or require such performance at any
                        time thereafter nor shall be the waiver of a breach
                        constitute a waiver of any subsequent breach.
                      </li>
                    </ul>
                    <h3>Translation Interpretation </h3>
                    <ul>
                      <li>
                        These Terms and Conditions may have been translated if
                        We have made them available to You on our Service.
                      </li>
                      <li>
                        You agree that the original English text shall prevail
                        in the case of a dispute.
                      </li>
                    </ul>
                    <h3>Changes to These Terms and Conditions</h3>
                    <ul>
                      <li>
                        We reserve the right, at Our sole discretion, to modify
                        or replace these Terms at any time. If a revision is
                        material We will make reasonable efforts to provide at
                        least 30 days' notice prior to any new terms taking
                        effect. What constitutes a material change will be
                        determined at Our sole discretion.
                      </li>
                      <li>
                        By continuing to access or use Our Service after those
                        revisions become effective, You agree to be bound by the
                        revised terms. If You do not agree to the new terms, in
                        whole or in part, please stop using the website and the
                        Service.
                      </li>
                    </ul>
                    <h3>Contact Us</h3>
                    <ul>
                      <li>
                        If you have any questions about this Privacy Policy, You
                        can contact us:
                        <ul>
                          <li>By email: sales@timewatchindia.com</li>
                          <li>
                            By visiting this page on our website:
                            www.timewatchuae.com
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default termAndCondition;
