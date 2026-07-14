import React from "react";
// Assuming you would use lucide-react icons for consistency
import {
  Recycle,
  Leaf,
  Droplet,
  Trash2,
  AlertTriangle,
  FileText,
  User,
  LaptopMinimalCheck,
} from "lucide-react";

// Assuming these are external imports you need to keep


// Define the colors from the aboutPage for theme consistency
const PRIMARY_COLOR_CLASS = "text-[#f14144]"; // Primary color for accents
const ACCENT_BG_CLASS = "bg-gradient-to-br from-[#f14144]/10 to-[#6d6f72]/10";
const TEXT_COLOR_CLASS = "text-[#6d6f72]"; // Dark grey for main headings/text
const LIGHT_BG_CLASS = "bg-gray-50";

// Assuming the blurToClearVariant is from a library like Framer Motion
const blurToClearVariant = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 100 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 1 },
  },
};

const Ewaste = () => {
  // Mock component to handle animation props if Framer Motion isn't imported
  // In a real Next/React environment with Framer Motion, you'd use motion.div


  return (
    <div className="">
      {/* Hero Section */}
      <section className={`${ACCENT_BG_CLASS} py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold ${TEXT_COLOR_CLASS} mb-4`}>
            E-Waste and Sustainability
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Responsible Management for a Greener Tomorrow.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="space-y-6"
            initial="hidden"
            // whileInView="visible"
            variants={blurToClearVariant}
            viewport={{ once: false }}
          >
            <h2 className={`text-3xl font-bold ${TEXT_COLOR_CLASS}`}>
              Introduction
            </h2>
            <p className="text-lg text-gray-600">
              E-waste is a popular, informal name for electronic products nearing the end of their "useful life." Mobile Phones, Smart Phones, Feature phone, I Phones, Laptop, Desktop, Thin Clients, Air Conditioners, Televisions, Refrigerators, Washing Machines, VCDs, stereos, copiers, and fax machines are common electronic products. Many of these products can be reused, refurbished, or recycled.
            </p>
            <p className="text-lg text-gray-600">
              E-waste has been one of the fastest growing waste streams in the world. While e-waste contains valuable materials such as aluminium, copper, gold, palladium and silver, it also contains harmful substances like cadmium, lead and mercury. In the absence of proper awareness, disposing e-waste in landfill can result in toxic emissions to the air, water and soil and pose a serious health and environmental hazards.
            </p>
            <p className="text-lg font-semibold text-gray-700">
              Under the guidelines of the Ministry of Environment, Forest and Climate Change, Government of India, E-Waste (Management) Rules, 2016 and <span className={PRIMARY_COLOR_CLASS}>TIMEWATCH INFOCOM PRIVATE LIMITED</span> stands committed to implement E-Waste Rules.
            </p>
          </div>
        </div>
      </section>

      {/* Recycling Commitment and Process (Minimize/Two-column sections) */}
      <section className={`py-16 ${LIGHT_BG_CLASS}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Commitment Section */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
              {/* <img src="https://timewatch.co.in/images/117.png" alt="i1" className="rounded-lg object-cover w-full h-auto" /> */}
              <Recycle className={`w-16 h-16 mx-auto ${PRIMARY_COLOR_CLASS} mb-4`} />
              <p className="text-gray-600 mt-4 text-center">
                We, <span className="font-bold">TIMEWATCH INFOCOM PRIVATE LIMITED</span> understand there is a need to encourage recycling of all useful and valuable material from e-waste so as to conserve the ever depleting natural resources. Recycling end-of-life discarded products is vital if we are to save resources and minimize landfill. TIMEWATCH INFOCOM PRIVATE LIMITED understands its responsibility and in this regard, we have tied-up with one of the leading PRO namely <span className="font-bold">SWACH ENVIRO INDIA E-WASTE PVT. LTD.</span> for facilitating our customers to enable them to dispose of e-waste products after their end-of-life.
              </p>
            </div>
            <div className="lg:w-1/2 text-center">
              <Leaf className={`w-20 h-20 mx-auto ${TEXT_COLOR_CLASS} mb-4`} />
              <h3 className={`text-2xl font-bold ${TEXT_COLOR_CLASS} mb-2`}>
                Our PRO Partner
              </h3>
              <p className="text-xl font-semibold text-gray-600">
                SWACH ENVIRO INDIA E-WASTE PVT. LTD.
              </p>
              <p className="text-lg text-gray-500 mt-2">
                Facilitating responsible e-waste disposal and recycling.
              </p>
            </div>
          </div>

          <hr className="border-gray-300" />

          {/* Recycling of E-waste Section */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-4">
              <h3 className={`text-3xl font-bold ${TEXT_COLOR_CLASS} mb-4`}>
                Recycling of E-waste
              </h3>
              <p className="text-gray-600">
                The company has tied -up with PRO <span className="font-bold">M/S SWACH ENVIRO INDIA E-WASTE PVT. LTD.</span> For collection of all our E-waste on PAN India and disposes the same with their Registered Recyclers Customer can reach or call on Toll Free No <span className={`font-bold ${PRIMARY_COLOR_CLASS}`}>18003093444</span>. Our representatives explain them about process of disposal and make them aware about nearest drop point available to drop the e-waste also give information about incentive we will offer to them against their end of life product. If any customer wants to handover the material from their door steps, we do send either our logistics team or <span className="font-bold">M/S SWACH ENVIRO INDIA E-WASTE PVT. LTD.</span> team to collect the items and channelize the same to our e-waste partner plant for final processing.
              </p>
              <a
                href={'/images/E-Waste-Datasheet.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#f14144] hover:bg-red-700 transition duration-300 mt-4`}
              >
                <FileText className="w-5 h-5 mr-2" />
                    View E-Waste Datasheet
              </a>
            </div>
            <div className="lg:w-1/2 rounded-2xl overflow-hidden shadow-xl">
              <img src="https://timewatch.co.in/images/116.jpg" alt="Recycling Image" className="object-cover w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Recycling */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            initial="hidden"
            // whileInView="visible"
            variants={blurToClearVariant}
            viewport={{ once: false }}
          >
            <h3 className={`text-3xl font-bold ${TEXT_COLOR_CLASS} mb-6`}>
              Benefit of recycling of E-waste:
            </h3>
            <ul className="grid md:grid-cols-2 gap-8 text-lg text-gray-600 list-none p-0">
              <li className="flex items-start">
                <Recycle className={`w-5 h-5 mt-1 mr-3 flex-shrink-0 ${PRIMARY_COLOR_CLASS}`} />
                <span>
                  E-waste contains many valuable, recoverable materials such as aluminum, copper, gold, silver, plastics, and ferrous metals. Recycling conserves natural resources and the energy needed to produce new electronic equipment from virgin resources.
                </span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className={`w-5 h-5 mt-1 mr-3 flex-shrink-0 text-yellow-500`} />
                <span>
                  E-waste also contains toxic and hazardous materials including mercury, lead, cadmium, beryllium, chromium, and chemical flame retardants, which have the potential to leach into our soil and water. Proper recycling prevents this.
                </span>
              </li>
              <li className="flex items-start">
                <Droplet className={`w-5 h-5 mt-1 mr-3 flex-shrink-0 text-blue-500`} />
                <span>
                  <span className="font-semibold">Protects your surroundings</span> - Safe recycling of outdated electronics promotes sound management of toxic chemicals such as lead and mercury.
                </span>
              </li>
              <li className="flex items-start">
                <Leaf className={`w-5 h-5 mt-1 mr-3 flex-shrink-0 text-green-500`} />
                <span>
                  <span className="font-semibold">Conserves natural resources</span> - Recycling recovers valuable materials from old electronics that can be used to make new products, saving energy and reducing pollution.
                </span>
              </li>
              <li className="flex items-start">
                <User className={`w-5 h-5 mt-1 mr-3 flex-shrink-0 text-purple-500`} />
                <span>
                  <span className="font-semibold">Helps others</span> - Donating your used electronics benefits your community by passing on ready-to-use or refurbished equipment to those who need it.
                </span>
              </li>
              <li className="flex items-start">
                <Trash2 className={`w-5 h-5 mt-1 mr-3 flex-shrink-0 ${TEXT_COLOR_CLASS}`} />
                <span>
                  <span className="font-semibold">Saves landfill space</span> - E-waste is a growing waste stream. By recycling these items, landfill space is conserved.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className={`py-16 ${LIGHT_BG_CLASS}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            initial="hidden"
            // whileInView="visible"
            variants={blurToClearVariant}
            viewport={{ once: false }}
          >
            <h2 className={`text-4xl font-bold text-center ${TEXT_COLOR_CLASS} mb-12`}>
              Do's and Don'ts of E-waste Disposal
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Do's Section */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#f14144] space-y-4">
                <h3 className={`text-2xl font-bold ${TEXT_COLOR_CLASS} flex items-center mb-4`}>
                  <LaptopMinimalCheck className={`w-6 h-6 mr-3 ${PRIMARY_COLOR_CLASS}`} />
                  Do's
                </h3>
                <ul className="space-y-4 text-gray-600 list-disc pl-5">
                  <li>
                    Always look for information on the catalogue with your product for end-of-life equipment handling.
                  </li>
                  <li>
                    Ensure that only <span className="font-semibold">Authorized Recyclers</span> repair and handle your electronic products.
                  </li>
                  <li>
                    Always call our E-waste Authorized Collection Centres/points to dispose products that have reached end-of life.
                  </li>
                  <li>
                    Always drop your used electronic products, batteries or any accessories when they reach the end of their life at your nearest Authorized E-Waste Collection Centres/Points.
                  </li>
                  <li>
                    Always disconnect the battery from product, and ensure any glass surface is protected against breakage.
                  </li>
                </ul>
              </div>

              {/* Don'ts Section */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#6d6f72] space-y-4">
                <h3 className={`text-2xl font-bold ${TEXT_COLOR_CLASS} flex items-center mb-4`}>
                  <Trash2 className={`w-6 h-6 mr-3 ${TEXT_COLOR_CLASS}`} />
                  Don'ts
                </h3>
                <ul className="space-y-4 text-gray-600 list-disc pl-5">
                  <li className="font-semibold">Do not dismantle your electronic Products on your own</li>
                  <li>
                    Do not throw electronics in bins having “Do not Dispose” sign.
                  </li>
                  <li>
                    Do not give e-waste to informal (Kabbadi) and unorganized sectors like Local Scrap Dealer/ Rag Pickers.
                  </li>
                  <li>
                    Do not dispose your product in garbage bins along with municipal waste that ultimately reaches landfills.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Mechanism & Schemes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div
            initial="hidden"
            // whileInView="visible"
            variants={blurToClearVariant}
            viewport={{ once: false }}
          >
            <h3 className={`text-3xl font-bold ${TEXT_COLOR_CLASS} mb-6`}>
              E-WASTE RECYCLING & COLLECTION MECHANISM FOR CONSUMER
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              As per the E-waste Regulation under E-waste (Management) Rule, 2016 and <span className="font-bold text-[#f14144]">TIMEWATCH INFOCOM PRIVATE LIMITED</span> being a good corporate citizen understands the responsibility towards environment and thus following the mechanism for collection of e-waste and channelizing it for safe recycling.
            </p>

            <h3 className={`text-2xl font-bold ${TEXT_COLOR_CLASS}`}>How end consumer can reach us?</h3>
            <p className="text-gray-600">
              If any end consumer wishes to dispose of or recycle their end-of-life products or e-waste, they can contact our recycling partner, <span className="text-[#f14144] font-semibold">SWACH ENVIRO INDIA E-WASTE PVT. LTD.</span>, via the toll-free number. A representative will guide our customers through the disposal process, inform them of the nearest drop-off points, or arrange for our logistics team to collect the e-waste from the customer's doorstep and ensure it is properly channeled to registered recyclers.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
              {/* Take Back Scheme */}
              <div className="p-6 border rounded-xl shadow-md space-y-2">
                <h4 className={`text-xl font-bold ${PRIMARY_COLOR_CLASS}`}>Take Back Scheme / collection Scheme</h4>
                <p className="text-gray-600 text-sm">
                  When an end consumer contacts us via the toll-free number to hand over their end-of-life product or e-waste for proper disposal, a representative from <span className="font-bold">SWACH ENVIRO INDIA E-WASTE PVT. LTD.</span> will inform them about any available incentives or exchange offers at that time. The representative will encourage customers to deposit any of their old, obsolete products (including spare parts) and accessories (regardless of brand) and may propose exchanging them for a promotional voucher or other attractive offers, depending on the remaining life of the product.
                </p>
              </div>
              {/* Reverse Logistic Support */}
              <div className="p-6 border rounded-xl shadow-md space-y-2">
                <h4 className={`text-xl font-bold ${PRIMARY_COLOR_CLASS}`}>Reverse Logistic Support</h4>
                <p className="text-gray-600 text-sm">
                  For reverse logistics, <span className="font-bold">SWACH ENVIRO INDIA E-WASTE PVT. LTD.</span> has partnered with <span className="font-bold">OM LOGISTICS LTD</span>, which provides services across India for the collection of end-of-life products and e-waste. If an end consumer wishes to arrange for the collection of their e-waste directly from their doorstep, <span className="font-bold">SWACH ENVIRO INDIA E-WASTE PVT. LTD.</span> will dispatch a team from <span className="font-bold">OM LOGISTICS LTD</span> to collect the items and channel them to registered recycling facilities.
                </p>
              </div>
              {/* E-waste Exchange/Coupons/New Product */}
              <div className="p-6 border rounded-xl shadow-md space-y-3">
                <h4 className={`text-xl font-bold ${PRIMARY_COLOR_CLASS}`}>Exchange & Incentives</h4>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">E-waste Exchange Scheme:</span> We will implement an e-waste exchange program that allows users to deposit their electronic products. In return, we will offer them a discount on new purchases.
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Coupons:</span> We will also provide coupons to our existing customers, offering them benefits such as discounts on specific amounts or complimentary gifts.
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">New Product:</span> Following a sale, we will keep our customers informed about the availability of new products and offer them the opportunity to exchange their old items.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reduce, Reuse, Recycle */}
      <section className={`py-16 ${ACCENT_BG_CLASS}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://timewatch.co.in/images/113.png" alt="Reduce, Reuse, Recycle Image" className="object-cover w-full h-auto" />
            </div>
            <div className="space-y-6">
              <h2 className={`text-3xl md:text-4xl font-bold ${TEXT_COLOR_CLASS}`}>
                WHAT SHOULD I DO WITH MY ELECTRONIC DISCARDS?
              </h2>
              <p className="text-xl text-gray-700 font-semibold">
                The mantra of "Reduce, Reuse, Recycle" applies here:
              </p>
              <ul className="space-y-4 text-gray-600 text-lg list-disc pl-5">
                <li>
                  <span className="font-bold">Reduce</span> your generation of e-waste through smart handling and good maintenance.
                </li>
                <li>
                  <span className="font-bold">Reuse</span> still functioning electronic equipment by donating to us.
                </li>
                <li>
                  <span className="font-bold">Recycle</span> those products that cannot be repaired. Customer may handover their end of life products to our nearest drop points for proper Recycling.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Contact and Designing Better Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
            We appreciate your support in promoting the safe and responsible disposal of e-waste, which is a shared responsibility between our valued consumers and us. Your cooperation is highly valued.
          </p>
          <p className={`font-bold text-xl text-center ${PRIMARY_COLOR_CLASS}`}>
            For more information on safe recycling and proper disposal of end-of-life electrical and electronic products, please contact us at our toll-free number: <span className="text-3xl font-extrabold">18003093444</span>.
          </p>

          <hr className="border-gray-200" />

          <h2 className={`text-3xl font-bold ${TEXT_COLOR_CLASS} mt-10`}>
            Designing better products
          </h2>
          <p className="text-lg text-gray-600">
            To minimize e-waste, we commit to designing or importing electronics that are safer, more du
          </p>
        </div>
      </section>
    </div>
  );
};

export default Ewaste;