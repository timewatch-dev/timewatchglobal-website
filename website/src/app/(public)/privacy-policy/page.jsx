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

const PrivacyPolicy = () => {
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
                     Privacy Policy
                    </h1>
                    <p className="text-gray-600 mb-6">
                      If you have any questions about this Privacy Policy, feel
                      free to contact us.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="mailto:sales@timewatchindia.com"
                        className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        sales@timewatchindia.com
                      </a>
                      <a
                        href="https://www.timewatchindia.com"
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
            <div className="privacy-content">
              {/* <h1 className="privacy-mainheading">Privacy Policy</h1> */}
              <h3>Last Updated: October 01, 2024</h3>

              <ul className="">
                <li>
                  This Privacy Policy describes Our policies and procedures on
                  the collection, use and disclosure of Your information when
                  You use the Service and tells You about Your privacy rights
                  and how the law protects You.
                </li>
                <li>
                  We use Your Personal data to provide and improve the Service.
                  By using the Service, You agree to the collection and use of
                  information in accordance with this Privacy Policy.
                </li>
              </ul>

              <h2 className="privacy-heading">
                Interpretation and Definitions
              </h2>
              <h4>Interpretation</h4>
              <ul className="">
                <li>
                  The words of which the initial letter is capitalized have
                  meanings defined under the following conditions.
                </li>
                <li>
                  The following definitions shall have the same meaning
                  regardless of whether they appear in singular or in plural.
                </li>
              </ul>
              <h4>Definitions</h4>
              <p>For the purposes of this Privacy Policy:</p>
              <ul className="">
                <li>
                  You means the individual accessing or using the Service, or
                  the company, or other legal entity on behalf of which such
                  individual is accessing or using the Service, as applicable.
                </li>
                <li>
                  Company (referred to as either "the Company", "We", "Us" or
                  "Our" in this Agreement) refers to TimeWatch Infocom Pvt.
                  Ltd., D-162, Okhla Phase - I, New Delhi - 110020
                </li>
                <li>
                  Affiliate means an entity that controls, is controlled by or
                  is under common control with a party, where "control" means
                  ownership of 50% or more of the shares, equity interest or
                  other securities entitled to vote for election of directors or
                  other managing authority.
                </li>
                <li>
                  Account means a unique account created for You to access our
                  Service or parts of our Service.
                </li>
                <li>
                  Website refers to TimeWatch India, accessible from
                  www.timewatchindia.com.
                </li>
                <li>Service refers to the Website.</li>
                <li>Country refers to: Delhi, India</li>
                <li>
                  Service Provider means any natural or legal person who
                  processes the data on behalf of the Company. It refers to
                  third-party companies or individuals employed by the Company
                  to facilitate the Service, to provide the Service on behalf of
                  the Company, to perform services related to the Service or to
                  assist the Company in analyzing how the Service is used.
                </li>
                <li>
                  Third-party Social Media Service refers to any website or any
                  social network website through which a User can log in or
                  create an account to use the Service.
                </li>
                <li>
                  Personal Data is any information that relates to an identified
                  or identifiable individual.
                </li>
                <li>
                  Cookies are small files that are placed on Your computer,
                  mobile device or any other device by a website, containing the
                  details of Your browsing history on that website among its
                  many uses.
                </li>
                <li>
                  Usage Data refers to data collected automatically, either
                  generated by the use of the Service or from the Service
                  infrastructure itself (for example, the duration of a page
                  visit).
                </li>
              </ul>

              <h2 className="privacy-heading">
                Collecting and Using Your Personal Data
              </h2>
              <h3>Types of Data Collected</h3>
              <p>Personal Data</p>
              <p>
                While using Our Service, We may ask You to provide Us with
                certain personally identifiable information that can be used to
                contact or identify You. Personally identifiable information may
                include, but is not limited to:
              </p>
              <ul className="">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Selfie face image in mobile app </li>
                <li>Usage Data </li>
              </ul>

              <h3>Usage Data</h3>
              <ul className="">
                <li>
                  Usage Data is collected automatically when using the Service.
                </li>
                <li>
                  Usage Data may include information such as Your Device's
                  Internet Protocol address (e.g. IP address), browser type,
                  browser version, the pages of our Service that You visit, the
                  time and date of Your visit, the time spent on those pages,
                  unique device identifiers and other diagnostic data.
                </li>
                <li>
                  When You access the Service by or through a mobile device, We
                  may collect certain information automatically, including, but
                  not limited to, the type of mobile device You use, Your mobile
                  device unique ID, the IP address of Your mobile device, Your
                  mobile operating system, the type of mobile Internet browser
                  You use, unique device identifiers and other diagnostic data.
                </li>
                <li>
                  We may also collect information that Your browser sends
                  whenever You visit our Service or when You access the Service
                  by or through a mobile device.
                </li>
              </ul>
              <h3>Tracking Technologies and Cookies</h3>
              <ul className="">
                <li>
                  We use Cookies and similar tracking technologies to track the
                  activity on Our Service and store certain information.
                  Tracking technologies used are beacons, tags, and scripts to
                  collect and track information and to improve and analyze Our
                  Service.
                </li>
                <li>
                  You can instruct Your browser to refuse all Cookies or to
                  indicate when a Cookie is being sent. However, if You do not
                  accept Cookies, You may not be able to use some parts of our
                  Service.
                </li>
                <li>
                  Cookies can be "Persistent" or "Session" Cookies. Persistent
                  Cookies remain on your personal computer or mobile device when
                  You go offline, while Session Cookies are deleted as soon as
                  You close your web browser.
                </li>
                <li>
                  We use both session and persistent Cookies for the purposes
                  set out below:
                </li>
                <ul className="">
                  <li>
                    Necessary / Essential Cookies: These Cookies are essential
                    to provide You with services available through the Website
                    and to enable You to use some of its features. They help to
                    authenticate users and prevent fraudulent use of user
                    accounts. Without these Cookies, the services that You have
                    asked for cannot be provided, and We only use these Cookies
                    to provide You with those services.
                  </li>
                  <li>
                    Cookies Policy / Notice Acceptance Cookies: These Cookies
                    identify if users have accepted the use of cookies on the
                    Website.
                  </li>
                  <li>
                    Functionality Cookies: These Cookies allow us to remember
                    choices You make when You use the Website, such as
                    remembering your login details or language preference. The
                    purpose of these Cookies is to provide You with a more
                    personal experience and to avoid You having to re-enter your
                    preferences every time You use the Website.
                  </li>
                  <li>
                    Tracking and Performance Cookies: These Cookies are used to
                    track information about traffic to the Website and how users
                    use the Website. The information gathered via these Cookies
                    may directly or indirectly identify you as an individual
                    visitor. This is because the information collected is
                    typically linked to a pseudonymous identifier associated
                    with the device you use to access the Website. We may also
                    use these Cookies to test new advertisements, pages,
                    features or new functionality of the Website to see how our
                    users react to them.
                  </li>
                  <li>
                    Targeting and Advertising Cookies: These Cookies track your
                    browsing habits to enable Us to show advertising which is
                    more likely to be of interest to You. These Cookies use
                    information about your browsing history to group You with
                    other users who have similar interests. Based on that
                    information, and with Our permission, third party
                    advertisers can place Cookies to enable them to show adverts
                    which We think will be relevant to your interests while You
                    are on third party websites.
                  </li>
                </ul>
                <li>
                  For more information about the cookies we use and your choices
                  regarding cookies, please visit our Cookies Policy.
                </li>
              </ul>

             
                <h2 className="privacy-heading">Use of Your Personal Data</h2>
                <ul className="">
                  <li>
                    The Company may use Personal Data for the following
                    purposes:
                    <ul className="">
                      <li>
                        To provide and maintain our Service, including to
                        monitor the usage of our Service.
                      </li>
                      <li>
                        Your selfie image taken in mobile app will give you
                        access to create a request of Attendance Regularization
                        where HR department can verify the correctness of the
                        request that it has been generated by you only.
                      </li>
                      <li>
                        To manage Your Account: to manage Your registration as a
                        user of the Service. The Personal Data You provide can
                        give You access to different functionalities of the
                        Service that are available to You as a registered user.
                      </li>
                      <li>
                        For the performance of a contract: the development,
                        compliance and undertaking of the purchase contract for
                        the products, items or services You have purchased or of
                        any other contract with Us through the Service.
                      </li>
                      <li>
                        To contact You: To contact You by email, telephone
                        calls, SMS, or other equivalent forms of electronic
                        communication, such as a mobile application's push
                        notifications regarding updates or informative
                        communications related to the functionalities, products
                        or contracted services, including the security updates,
                        when necessary or reasonable for their implementation.
                      </li>
                      <li>
                        To provide You with news, special offers and general
                        information about other goods, services and events which
                        we offer that are similar to those that you have already
                        purchased or enquired about unless You have opted not to
                        receive such information.
                      </li>
                      <li>
                        To manage Your requests: To attend and manage Your
                        requests to Us.
                      </li>
                    </ul>
                  </li>
                  <li>
                    We may share your personal information in the following
                    situations:
                    <ul className="">
                      <li>
                        With Service Providers: We may share Your personal
                        information with Service Providers to monitor and
                        analyze the use of our Service, to show advertisements
                        to You to help support and maintain Our Service, to
                        contact You, to advertise on third party websites to You
                        after You visited our Service or for payment processing.
                      </li>
                      <li>
                        For Business transfers: We may share or transfer Your
                        personal information in connection with, or during
                        negotiations of, any merger, sale of Company assets,
                        financing, or acquisition of all or a portion of our
                        business to another company.
                      </li>
                      <li>
                        With Affiliates: We may share Your information with Our
                        affiliates, in which case we will require those
                        affiliates to honor this Privacy Policy. Affiliates
                        include Our parent company and any other subsidiaries,
                        joint venture partners or other companies that We
                        control or that are under common control with Us.
                      </li>
                      <li>
                        With Business partners: We may share Your information
                        with Our business partners to offer You certain
                        products, services or promotions.
                      </li>
                      <li>
                        With other users: when You share personal information or
                        otherwise interact in the public areas with other users,
                        such information may be viewed by all users and may be
                        publicly distributed outside. If You interact with other
                        users or register through a Third-Party Social Media
                        Service, Your contacts on the Third-Party Social Media
                        Service may see You name, profile, pictures and
                        description of Your activity. Similarly, other users
                        will be able to view descriptions of Your activity,
                        communicate with You and view Your profile.
                      </li>
                    </ul>
                  </li>
                </ul>
             
                <h2 className="privacy-heading">
                  Retention of Your Personal Data
                </h2>
                <ul className="">
                  <li>
                    The Company will retain Your Personal Data only for as long
                    as is necessary for the purposes set out in this Privacy
                    Policy. We will retain and use Your Personal Data to the
                    extent necessary to comply with our legal obligations (for
                    example, if we are required to retain your data to comply
                    with applicable laws), resolve disputes, and enforce our
                    legal agreements and policies.
                  </li>
                  <li>
                    The Company will also retain Usage Data for internal
                    analysis purposes. Usage Data is generally retained for a
                    shorter period of time, except when this data is used to
                    strengthen the security or to improve the functionality of
                    Our Service, or We are legally obligated to retain this data
                    for longer time periods.
                  </li>
                </ul>
             
             
                <h2 className="privacy-heading">
                  Transfer of Your Personal Data
                </h2>
                <ul className="">
                  <li>
                    Your information, including Personal Data, is processed at
                    the Company's operating offices and in any other places
                    where the parties involved in the processing are located. It
                    means that this information may be transferred to — and
                    maintained on — computers located outside of Your state,
                    province, country or other governmental jurisdiction where
                    the data protection laws may differ than those from Your
                    jurisdiction.
                  </li>
                  <li>
                    Your consent to this Privacy Policy followed by Your
                    submission of such information represents Your agreement to
                    that transfer.
                  </li>
                  <li>
                    The Company will take all steps reasonably necessary to
                    ensure that Your data is treated securely and in accordance
                    with this Privacy Policy and no transfer of Your Personal
                    Data will take place to an organization or a country unless
                    there are adequate controls in place including the security
                    of Your data and other personal information.
                  </li>
                </ul>
            
              <p>
                <h2 className="privacy-heading">
                  Disclosure of Your Personal Data
                </h2>
                <ul className="">
                  <li>
                    Business Transactions
                    <ul className="">
                      <li>
                        If the Company is involved in a merger, acquisition or
                        asset sale, Your Personal Data may be transferred. We
                        will provide notice before Your Personal Data is
                        transferred and becomes subjec t to a different Privacy
                        Policy.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Law enforcement
                    <ul className="">
                      <li>
                        Under certain circumstances, the Company may be required
                        to disclose Your Personal Data if required to do so by
                        law or in response to valid requests by public
                        authorities (e.g. a court or a government agency).
                      </li>
                    </ul>
                  </li>
                  <li>
                    Other legal requirements
                    <ul className="">
                      <p>
                        The Company may disclose Your Personal Data in the good
                        faith belief that such action is necessary to:
                      </p>
                      <li>Comply with a legal obligation</li>
                      <li>
                        Protect and defend the rights or property of the Company
                      </li>
                      <li>
                        Prevent or investigate possible wrongdoing in connection
                        with the Service
                      </li>
                      <li>
                        Protect the personal safety of Users of the Service or
                        the public
                      </li>
                      <li>Protect against legal liability</li>
                    </ul>
                  </li>
                </ul>
                <h2 className="privacy-heading">
                  Security of Your Personal Data
                </h2>
                <ul className="">
                  <li>
                    The security of Your Personal Data is important to Us, but
                    remember that no method of transmission over the Internet,
                    or method of electronic storage is 100% secure. While We
                    strive to use commercially acceptable means to protect Your
                    Personal Data, We cannot guarantee its absolute security.
                  </li>
                </ul>
              </p>
              <p>
                <h2 className="privacy-heading">
                  Detailed Information on the Processing of Your Personal Data
                </h2>
                <p>
                  Service Providers have access to Your Personal Data only to
                  perform their tasks on Our behalf and are obligated not to
                  disclose or use it for any other purpose.
                </p>
                <p>
                  Analytics
                  <ul className="">
                    <li>
                      We may use third-party Service providers to monitor and
                      analyze the use of our Service.
                    </li>
                    <li>
                      Clicky is a web analytics service. Read the Privacy Policy
                      for Clicky here:{" "}
                      <a href="https://clicky.com/terms">
                        {" "}
                        https://clicky.com/terms{" "}
                      </a>
                    </li>
                  </ul>
                </p>
                <p>
                  Advertising
                  <ul className="">
                    <li>
                      We may use Service providers to show advertisements to You
                      to help support and maintain Our Service.
                    </li>
                    <li>
                      Bing Ads: Bing Ads is an advertising service provided by
                      Microsoft Inc.You can opt-out from Bing Ads by following
                      the instructions on Bing Ads Opt-out page:
                      <a href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads">
                        https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads{" "}
                      </a>
                      . For more information about Bing Ads, please visit their
                      Privacy Policy:
                      <a href="https://privacy.microsoft.com/en-us/PrivacyStatement">
                        https://privacy.microsoft.com/en-us/PrivacyStatement
                      </a>
                    </li>
                    <li>
                      Flurry: Flurry is provided by Yahoo! Inc. You can opt-out
                      of the Flurry service and prevent it from using and
                      sharing your information by visiting the Flurry Opt-out
                      page:
                      <a href="https://developer.yahoo.com/flurry/end-user-opt-out/">
                        https://developer.yahoo.com/flurry/end-user-opt-out/{" "}
                      </a>
                      . For more information on the privacy practices policies
                      of Yahoo!, please visit their Privacy Policy:
                      <a href="https://policies.yahoo.com/xa/en/yahoo/privacy/index.htm">
                        https://policies.yahoo.com/xa/en/yahoo/privacy/index.htm
                      </a>
                    </li>
                    <li>
                      InMobi: InMobi is provided by InMobi Pte Ltd. You can
                      opt-out from InMobi service by following the instructions
                      as described on the InMobi Opt-out page:
                      <a href="http://www.inmobi.com/page/opt-out/">
                        http://www.inmobi.com/page/opt-out/{" "}
                      </a>
                      . For more information on the privacy practices and
                      policies of InMobi, please visit the InMobi Privacy
                      Policy:{" "}
                      <a href="http://www.inmobi.com/privacy-policy/">
                        http://www.inmobi.com/privacy-policy/{" "}
                      </a>
                    </li>
                    <li>
                      StartApp: StartApp is provided by StartApp Inc.You can
                      opt-out from interest-based ads served by StartApp by
                      following the instructions on their Privacy Policy,
                      section "8. Your Choices and Controls":{" "}
                      <a href="https://www.startapp.com/policy/privacy-policy/">
                        https://www.startapp.com/policy/privacy-policy/{" "}
                      </a>
                      . For more information on what information StartApp
                      collects and how it is used, please read their Privacy
                      Policy:
                      <a href="https://www.startapp.com/policy/privacy-policy/">
                        https://www.startapp.com/policy/privacy-policy/{" "}
                      </a>
                    </li>
                    <li>
                      AdColony: AdColony is provided by Jirbo Inc. You can
                      opt-out from AdColony service by visiting the AdColony
                      Opt-out page:
                      <a href="https://www.adcolony.com/privacy-policy/">
                        https://www.adcolony.com/privacy-policy/{" "}
                      </a>{" "}
                      . You can also opt-out from AdColony through the Digital
                      Advertising Alliance in the USA{" "}
                      <a href="http://www.aboutads.info/choices/">
                        http://www.aboutads.info/choices/{" "}
                      </a>{" "}
                      or opt-out using your mobile device settings. For more
                      information AdColony, please visit the Privacy Policy of
                      AdColony:
                      <a href="http://www.adcolony.com/privacy-policy/">
                        http://www.adcolony.com/privacy-policy/{" "}
                      </a>
                    </li>
                    <li>
                      AppLovin: AppLovin is provided by the AppLovin
                      Corporation. If you'd like to opt-out from AppLovin
                      service, please visit the AppLovin Opt-out page:{" "}
                      <a href="https://www.applovin.com/optout">
                        https://www.applovin.com/optout{" "}
                      </a>
                      . If you'd like to learn more about AppLovin, please visit
                      the Privacy Policy page of AppLovin:
                      <a href="https://www.applovin.com/privacy">
                        https://www.applovin.com/privacy{" "}
                      </a>
                    </li>
                  </ul>
                </p>
                <h3> Behavioral Remarketing</h3>
                <ul className="">
                  <li>
                    The Company uses remarketing services to advertise on third
                    party websites to You after You visited our Service. We and
                    Our third-party vendors use cookies to inform, optimize and
                    serve ads based on Your past visits to our Service.
                  </li>
                  <li>
                    Bing Ads Remarketing: Bing Ads remarketing service is
                    provided by Microsoft Inc. You can opt-out of Bing Ads
                    interest-based ads by following their instructions:
                    <a href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads">
                      https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads{" "}
                    </a>
                    . You can learn more about the privacy practices and
                    policies of Microsoft by visiting their Privacy Policy page:
                    <a href="https://privacy.microsoft.com/en-us/PrivacyStatement">
                      https://privacy.microsoft.com/en-us/PrivacyStatement{" "}
                    </a>
                  </li>
                  <li>
                    Pinterest: Pinterest remarketing service is provided by
                    Pinterest Inc. You can opt-out from Pinterest's
                    interest-based ads by enabling the "Do Not Track"
                    functionality of your web browser or by following Pinterest
                    instructions:
                    <a href="http://help.pinterest.com/en/articles/personalization-and-data">
                      http://help.pinterest.com/en/articles/personalization-and-data{" "}
                    </a>
                    . You can learn more about the privacy practices and
                    policies of Pinterest by visiting their Privacy Policy page:
                    <a href="https://about.pinterest.com/en/privacy-policy">
                      https://about.pinterest.com/en/privacy-policy{" "}
                    </a>
                  </li>
                  <li>
                    AdRoll: AdRoll remarketing service is provided by Semantic
                    Sugar, Inc. You can opt-out of AdRoll remarketing by
                    visiting this AdRoll Advertising Preferences web page:
                    <a href="http://info.evidon.com/pub_info/573?v=1&nt=1&nw=false">
                      http://info.evidon.com/pub_info/573?v=1&nt=1&nw=false{" "}
                    </a>
                    . For more information on the privacy practices of AdRoll,
                    please visit the AdRoll Privacy Policy web page:
                    <a href="http://www.adroll.com/about/privacy">
                      http://www.adroll.com/about/privacy{" "}
                    </a>
                  </li>
                </ul>
                <h3>Children's Privacy</h3>
                <ul className="">
                  <li>
                    Our Service does not address anyone under the age of 13. We
                    do not knowingly collect personally identifiable information
                    from anyone under the age of 13. If You are a parent or
                    guardian and You are aware that Your child has provided Us
                    with Personal Data, please contact Us. If We become aware
                    that We have collected Personal Data from anyone under the
                    age of 13 without verification of parental consent, We take
                    steps to remove that information from Our servers.
                  </li>
                  <li>
                    We also may limit how We collect, use, and store some of the
                    information of Users between 13 and 18 years old. In some
                    cases, this means We will be unable to provide certain
                    functionality of the Service to these users.
                  </li>
                  <li>
                    If We need to rely on consent as a legal basis for
                    processing Your information and Your country requires
                    consent from a parent, We may require Your parent's consent
                    before We collect and use that information.
                  </li>
                </ul>
                <h3>Links to Other Websites</h3>
                <ul className="">
                  <li>
                    Our Service may contain links to other websites that are not
                    operated by Us. If You click on a third party link, You will
                    be directed to that third party's site. We strongly advise
                    You to review the Privacy Policy of every site You visit.
                  </li>
                  <li>
                    We have no control over and assume no responsibility for the
                    content, privacy policies or practices of any third party
                    sites or services.
                  </li>
                </ul>
                <h3> Changes to this Privacy Policy</h3>
                <ul className="">
                  <li>
                    We may update our Privacy Policy from time to time. We will
                    notify You of any changes by posting the new Privacy Policy
                    on this page.
                  </li>
                  <li>
                    We will let You know via email and/or a prominent notice on
                    Our Service, prior to the change becoming effective and
                    update the "Last updated" date at the top of this Privacy
                    Policy.
                  </li>
                  <li>
                    You are advised to review this Privacy Policy periodically
                    for any changes. Changes to this Privacy Policy are
                    effective when they are posted on this page.
                  </li>
                </ul>
                <h3>Contact Us</h3>

                <ul className="">
                  <li>
                    If you have any questions about this Privacy Policy, You can
                    contact us:
                    <ul className="">
                      <li>By email: sales@timewatchindia.com</li>
                      <li>
                        By visiting this page on our website:
                        www.timewatchindia.com
                      </li>
                    </ul>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
