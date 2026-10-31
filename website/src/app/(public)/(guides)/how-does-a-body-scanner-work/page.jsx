import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";

/**
 * Global "how it works" page served at /how-does-a-body-scanner-work (static informational page, x-default of the four-site cluster).
 * Content: global/how-it-works-pages/GL-06-how-does-a-body-scanner-work.html (section 4 "Complete Page Content", which includes the FAQ),
 * kept word for word including the "Featured-snippet definition," label and the regional links. Section 1 gives the
 * metadata, section 2 the keywords. The TechArticle / BreadcrumbList nodes are composed from the pack's schema notes; the
 * FAQPage schema is built from the same FAQ data as the visible FAQ, so the two always match.
 * Body links and "Related pages" only point at pages that exist on the global site.
 * Everything renders on the server; the FAQ answers are in the HTML even while collapsed.
 */

export const dynamic = "force-static";

const SITE = "https://www.timewatchglobal.com";
const PAGE_URL = `${SITE}/how-does-a-body-scanner-work`;
const HERO_IMAGE = `${SITE}/images/how-it-works/body-scanner-security-screening-hero.jpg`;
const HERO_ALT = "Walk-through metal detectors and an X-ray baggage scanner at an unoccupied security screening checkpoint";
const DATE = "2026-10-27";

export const metadata = {
  title: "How Does a Body Scanner Work? Millimetre Wave and ATR",
  description:
    "How a body scanner works (millimetre wave reflection, 3D reconstruction, automatic target recognition) and why the permitted configuration differs by country.",
  keywords:
    "how does a body scanner work, millimetre wave body scanner working principle, full body scanner how it works, automatic target recognition body scanner, body scanner vs metal detector, passenger screening portal explained, backscatter x-ray body scanner, body scanner privacy, how to specify a body scanner, do body scanners show your body, are airport body scanners safe, do body scanners use radiation, what does a body scanner detect, can a body scanner detect non metallic items, why do you raise your arms in a body scanner, why did the body scanner flag me, can i refuse a body scan, difference between millimetre wave and backscatter, are body scanners legal in every country, body scanner with a pacemaker or insulin pump",
  authors: [{ name: "TimeWatch" }],
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "x-default": PAGE_URL,
    },
  },
  openGraph: {
    type: "article",
    siteName: "TimeWatch",
    locale: "en",
    title: "How Does a Body Scanner Work? Technology, Privacy and Jurisdiction",
    description:
      "Millimetre wave reflection, three-dimensional reconstruction and automatic target recognition, how a body scanner finds anomalies, what it cannot do, and why the applicable rules must be established first.",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 3000, height: 1161, alt: HERO_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Does a Body Scanner Work? Technology, Privacy and Jurisdiction",
    description:
      "The physics of body scanning did not change when the generic avatar arrived. The presentation did, and that is what made public screening possible.",
    images: [{ url: HERO_IMAGE, alt: HERO_ALT }],
  },
};

const page = {
  "hero": {
    "h1": "How Does a Body Scanner Work?",
    "image": {
      "src": "/images/how-it-works/body-scanner-security-screening-hero.jpg",
      "alt": "Walk-through metal detectors and an X-ray baggage scanner at an unoccupied security screening checkpoint",
      "width": 3000,
      "height": 1161
    }
  },
  "sections": [
    {
      "id": "what-is-a-security-body-scanner",
      "h2": "What Is a Security Body Scanner?",
      "blocks": [
        {
          "type": "snippet",
          "parts": [
            {
              "b": "Featured-snippet definition, "
            },
            " A security body scanner is a screening portal that looks for items concealed beneath a person's clothing without anyone touching them. The technology in general use transmits low-power, non-ionising millimetre wave radio energy, which passes through fabric and reflects from the skin and from anything lying between the skin and the clothing. Receiver antennas capture those reflections and the system reconstructs a three-dimensional representation of the body surface. Software then examines that representation for regions that do not match an expected body contour and presents the result as a generic avatar (an identical stylised figure for every person) with a marker over any flagged region. The operator is not shown a body image."
          ],
          "quick": true
        },
        {
          "type": "p",
          "parts": [
            "The device is also described as a full body scanner, a security scanner or a passenger screening portal. It usually stands at the same checkpoint as a walk-through metal detector and an X-ray baggage scanner, and the three are easy to confuse because they sit metres apart doing superficially similar work. They do not ask the same question. The archway asks whether there is conductive metal on this person. The baggage scanner asks what is inside this bag. The body scanner asks whether there is anything on this person's body that does not look like body."
          ]
        },
        {
          "type": "p",
          "parts": [
            "That third question is the whole justification for the technology. A walk-through detector is blind to a ceramic blade, a moulded composite object or a packed powder, because none of them is conductive metal and no sensitivity setting changes that. A body scanner responds to shape and surface rather than conductivity, so it reaches a class of item the archway physically cannot."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Everything else about this device, however, is unusually dependent on where it is installed. The physics is identical worldwide. The permitted configuration is not. Which technologies may be used on people, what the operator may be shown, whether anything may be stored and what alternative must be offered to someone who declines are all decided nationally, and the differences between countries are material rather than cosmetic. That is why the regulatory section on this page sits before the specification section rather than after it."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "how-does-a-body-scanner-work",
      "h2": "How Does a Body Scanner Work?",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "An active millimetre wave body scanner works in six stages. The antenna array ",
            {
              "b": "transmits"
            },
            " low-power, non-ionising radio energy in the millimetre wavelength band towards a person standing still in the portal. Clothing is largely transparent at these wavelengths, so the energy ",
            {
              "b": "reaches"
            },
            " the skin and anything worn against it. Energy ",
            {
              "b": "reflects"
            },
            " back, differently from skin than from a foreign object. Receiver antennas ",
            {
              "b": "capture"
            },
            " those reflections from many angles, as the array either rotates around the person or steers electronically across them. A processing unit ",
            {
              "b": "reconstructs"
            },
            " a three-dimensional representation of the body surface from the timing and strength of the returns. Detection software then ",
            {
              "b": "analyses"
            },
            " that reconstruction for regions departing from an expected body contour and displays a generic avatar with a marker over anything flagged."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Transmit, reach, reflect, capture, reconstruct, analyse. The scan itself takes a few seconds and the person stands still throughout, a detail that sounds trivial and turns out to govern checkpoint design more than any detection specification does."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "the-three-people-screening-technologies",
      "h2": "The Three People-Screening Technologies",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "Three physically distinct approaches have been applied to screening people. They are routinely discussed as one category, which is the single commonest source of confusion in this subject, particularly on radiation, where they are not comparable at all."
          ]
        },
        {
          "type": "h3",
          "text": "Active millimetre wave"
        },
        {
          "type": "p",
          "parts": [
            "This is the technology in general use for passenger screening. An antenna array transmits radio energy in the millimetre band at low power. The wavelength is short enough to resolve objects of a useful size and long enough that ordinary clothing is largely transparent to it. Energy reflects from the skin, and differently again from a material sitting against or near it."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Reflections are captured from many positions around the body, by rotating an array around the person, or by switching electronically between a large number of fixed antenna elements to achieve the same angular coverage without moving parts. From those returns a three-dimensional surface can be reconstructed. Millimetre wave energy of this kind is ",
            {
              "b": "non-ionising"
            },
            ". It is not X-ray energy and the system does not emit ionising radiation."
          ]
        },
        {
          "type": "h3",
          "text": "Passive millimetre wave"
        },
        {
          "type": "p",
          "parts": [
            "A passive system transmits nothing at all. It senses millimetre wave energy naturally emitted and reflected by the body and its surroundings, in the same general way that a thermal camera senses emitted infrared. An object concealed under clothing alters the emission pattern arriving at the sensor, and the system responds to that alteration."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Because a passive system emits nothing, it avoids the transmission question entirely, and some designs operate at a stand-off distance rather than requiring the person to enter a portal. Detection behaviour differs from active systems, varies considerably between products and should be taken from the manufacturer's documentation for the specific equipment rather than assumed from the category."
          ]
        },
        {
          "type": "h3",
          "text": "Backscatter X-ray"
        },
        {
          "type": "p",
          "parts": [
            "A backscatter system directs a low-dose X-ray beam at the body and detects the X-rays scattered back from the surface rather than those transmitted through it, which is what produces a surface representation rather than a medical-style internal one."
          ]
        },
        {
          "type": "p",
          "parts": [
            "The point that matters to anyone specifying equipment is blunt: ",
            {
              "b": "backscatter uses ionising radiation and millimetre wave does not."
            },
            " On radiation and privacy grounds, backscatter systems have been restricted or withdrawn for passenger screening in a number of jurisdictions, and they are far less common than millimetre wave for screening people. Anyone evaluating one must establish the applicable regulatory position where the equipment will be installed before going any further, not as a closing compliance check, but as the first question asked."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "automatic-target-recognition-and-the-generic-avatar",
      "h2": "Automatic Target Recognition and the Generic Avatar",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "Automatic target recognition, usually abbreviated to ATR, is the feature that made this technology deployable in public, and it is the aspect most often misunderstood by people on both sides of the privacy argument."
          ]
        },
        {
          "type": "p",
          "parts": [
            "On an ATR system, the reconstructed three-dimensional data is never displayed to the operator. Detection algorithms examine it for regions departing from an expected body contour. What appears on the operator's screen is a generic outline (the same stylised figure for every person screened, carrying no individual physical detail whatsoever) with a box over each region where an anomaly was found. If nothing is flagged, the screen simply shows a clear result."
          ]
        },
        {
          "type": "p",
          "parts": [
            "The significance is easy to miss and worth stating directly. ",
            {
              "b": "The detection physics did not change when ATR was introduced."
            },
            " The scanner senses exactly what it sensed before. What changed was how the output is presented, and that presentation change, not any advance in the physics, is why millimetre wave screening became acceptable for public use. Before generic-avatar display, the privacy objection was severe enough to block deployment in some places and force the removal of installed equipment in others. ATR did not win the argument; it removed the thing being objected to."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Two consequences follow for anyone writing a specification. Treat ATR-only display as a baseline requirement rather than a feature. And confirm in writing that the equipment offered has no operator-accessible mode capable of showing anything other than the generic avatar, because the existence of such a mode (even disabled) is a question an auditor or a regulator may well ask, and in some jurisdictions the answer determines whether the equipment may be used at all."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "main-components-of-a-body-scanner",
      "h2": "Main Components of a Body Scanner",
      "blocks": [
        {
          "type": "table",
          "head": [
            "Component",
            "Function",
            "What varies between specifications"
          ],
          "rows": [
            [
              [
                "Portal or panel assembly"
              ],
              [
                "The physical structure the person stands within or beside. It defines the scan volume and fixes the standing position."
              ],
              [
                "Portal footprint, whether the design is a full enclosure or facing panels, and whether it is intended to be relocated."
              ]
            ],
            [
              [
                "Transmitter antenna array"
              ],
              [
                "Emits millimetre wave energy towards the body. Absent entirely in a passive system, which transmits nothing."
              ],
              [
                "Element count, frequency band and transmitted power, all of which bear on the radio emission regime that applies locally."
              ]
            ],
            [
              [
                "Receiver antenna array"
              ],
              [
                "Captures reflected or naturally emitted energy. On many designs transmit and receive elements are combined into transceiver modules."
              ],
              [
                "Element count and arrangement, which bear on resolution and on how long a scan takes."
              ]
            ],
            [
              [
                "Scanning mechanism or electronic steering"
              ],
              [
                "Moves the array around the body, or switches electronically between many fixed elements to obtain the same angular coverage without moving parts."
              ],
              [
                "Mechanical versus electronic steering. Electronic steering removes a wear item and usually shortens the scan; mechanical designs may be simpler to service."
              ]
            ],
            [
              [
                "Signal processing unit"
              ],
              [
                "Digitises the returns and reconstructs the three-dimensional representation of the body surface and of anything resting on it."
              ],
              [
                "Processing capability, which largely determines scan-to-result time and therefore lane throughput."
              ]
            ],
            [
              [
                "Detection and ATR software"
              ],
              [
                "Analyses the reconstruction for anomalies and decides what to flag. The detection behaviour of the whole system is determined here rather than in the antennas."
              ],
              [
                "Flagging behaviour, configurability, update arrangements, and whether any non-avatar display mode exists at all."
              ]
            ],
            [
              [
                "Operator display"
              ],
              [
                "Shows the generic avatar with flagged regions, or a clear indication. Its physical placement is a privacy control in its own right."
              ],
              [
                "Screen size and mounting options, and whether a privacy filter or a defined viewing angle is supplied."
              ]
            ],
            [
              [
                "Control interface"
              ],
              [
                "Operator controls for initiating a scan, recording the resolution outcome and managing operating modes."
              ],
              [
                "Access control over configuration, whether mode changes are logged, and whether logs can be exported for audit."
              ]
            ],
            [
              [
                "Guidance indicators"
              ],
              [
                "Lights, floor markings or footprint decals and on-screen prompts showing where to stand and what pose to adopt."
              ],
              [
                "Language independence of the prompts. Pictographic guidance matters a great deal where the screened population does not share one language."
              ]
            ],
            [
              [
                "Power supply and conditioning"
              ],
              [
                "Mains input with conditioning; backup arrangements follow the site's continuity requirement."
              ],
              [
                "Input voltage and frequency vary by region, and backup provision varies by model and by how the site is specified."
              ]
            ]
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "how-does-a-body-scanner-work-step-by-step",
      "h2": "How Does a Body Scanner Work Step by Step?",
      "blocks": [
        {
          "type": "table",
          "head": [
            "Step",
            "What happens",
            "How it works"
          ],
          "rows": [
            [
              [
                {
                  "b": "1"
                }
              ],
              [
                "The person divests metal and pocket contents"
              ],
              [
                "Coins, keys, phones, belts and similar items are removed. Items left in a pocket are the commonest cause of an entirely avoidable anomaly flag, and divestment discipline is the simplest improvement available to any checkpoint."
              ]
            ],
            [
              [
                {
                  "b": "2"
                }
              ],
              [
                "The person enters the portal and stops"
              ],
              [
                "Unlike an archway, the scan requires the person to stand still in a defined position, normally marked on the floor."
              ]
            ],
            [
              [
                {
                  "b": "3"
                }
              ],
              [
                "The required pose is adopted"
              ],
              [
                "Typically arms raised and held slightly away from the body, so that the arms do not shadow the torso, waist and underarm region from the array."
              ]
            ],
            [
              [
                {
                  "b": "4"
                }
              ],
              [
                "The scan is initiated"
              ],
              [
                "An operator or an automatic sequence starts the scan once the person is correctly positioned."
              ]
            ],
            [
              [
                {
                  "b": "5"
                }
              ],
              [
                "Energy is transmitted towards the body"
              ],
              [
                "The array emits low-power millimetre wave energy. Clothing is largely transparent at these wavelengths, so the energy reaches the skin. A passive system omits this step entirely and senses naturally emitted energy instead."
              ]
            ],
            [
              [
                {
                  "b": "6"
                }
              ],
              [
                "Reflections are produced"
              ],
              [
                "Energy reflects from the skin surface and from any object lying between the skin and the clothing, with characteristics depending on that object's material and shape."
              ]
            ],
            [
              [
                {
                  "b": "7"
                }
              ],
              [
                "The array covers the body from many angles"
              ],
              [
                "The array rotates around the person or steers electronically, so returns are captured from many directions rather than one. Single-angle capture would leave large shadowed regions."
              ]
            ],
            [
              [
                {
                  "b": "8"
                }
              ],
              [
                "Returns are captured and digitised"
              ],
              [
                "Receiver antennas collect the reflections and the processing unit converts them into data carrying position and intensity information."
              ]
            ],
            [
              [
                {
                  "b": "9"
                }
              ],
              [
                "A three-dimensional representation is reconstructed"
              ],
              [
                "The processing unit assembles the returns into a representation of the body surface and of anything sitting on it."
              ]
            ],
            [
              [
                {
                  "b": "10"
                }
              ],
              [
                "Detection software analyses for anomalies"
              ],
              [
                "Algorithms compare the reconstruction against an expected body contour and flag regions that depart from it. This is where the system's behaviour is actually determined."
              ]
            ],
            [
              [
                {
                  "b": "11"
                }
              ],
              [
                "The generic avatar is displayed"
              ],
              [
                "The operator sees a standard outline figure with a box over each flagged region, or a clear result. No body image is displayed at any point on an ATR system."
              ]
            ],
            [
              [
                {
                  "b": "12"
                }
              ],
              [
                "Targeted resolution or release"
              ],
              [
                "If a region is flagged, the operator resolves that location only, commonly with a handheld detector or a localised check following a written procedure. If nothing is flagged, the person proceeds."
              ]
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "Step 12 carries more weight than the eleven before it. The scanner does not conclude anything; it raises a specific, located question that a trained person answers. A portal installed without the staff, the space and the written procedure to answer those questions produces screening theatre rather than screening, and does so while slowing the queue."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "what-a-body-scanner-can-and-cannot-detect",
      "h2": "What a Body Scanner Can and Cannot Detect",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "The advantage over an archway is real and worth stating precisely. Because the system responds to what is physically present between skin and clothing rather than to conductivity, it can indicate anomalies that are metallic ",
            {
              "i": "and"
            },
            " anomalies that are non-metallic. The non-metallic case is the one where a walk-through detector has nothing whatsoever to offer, and it is the entire reason a checkpoint adds a scanner."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Two limits need stating just as plainly, because tender documents regularly overstate both. First, the system indicates ",
            {
              "b": "anomalies, not threats"
            },
            ". It flags a region that does not look like body surface. What is actually there is established by a person at the resolution stage, not by the machine. No screening device of this type identifies a specific object with certainty, and no honest specification should claim that it detects any particular item or that it detects everything."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Second, it screens the ",
            {
              "b": "body surface"
            },
            ": not the body's interior, and not carried bags. The contents of a bag are the job of the X-ray scanner on the adjacent belt. Neither device substitutes for the other, and a checkpoint that removes one on the strength of the other has reduced its coverage rather than simplified its layout."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "throughput-nuisance-alarms-and-anomaly-resolution",
      "h2": "Throughput, Nuisance Alarms and Anomaly Resolution",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "This is the operational reality that specifications underestimate most consistently, and it governs checkpoint design more than any detection characteristic does."
          ]
        },
        {
          "type": "p",
          "parts": [
            "A walk-through metal detector screens a person at walking pace and nobody stops. A body scanner requires the person to stop, step into a marked position, adopt a pose, hold it while the scan completes, step out and wait for a result. That is several times longer per person than an archway pass, and pose compliance is genuinely hard to achieve across a mixed public queue carrying luggage, accompanying children and not necessarily sharing a language with the operator. ",
            {
              "b": "So a body scanner is almost never primary screening for everyone."
            },
            " It is selective or secondary screening: everyone passes the archway, and a proportion (those who alarm, those selected under a defined rule, or those in a specified screening category) is directed to the scanner. A checkpoint attempting to put every person through one will either need a great many scanners or will generate a queue that becomes its own security problem."
          ]
        },
        {
          "type": "p",
          "parts": [
            "The second operational reality is that scanners flag ordinary things constantly, and operators who do not expect this lose confidence in the equipment within weeks. Common sources of a flagged region include thick clothing folds and fabric bunched at the waist or shoulders, heavy seams, sweat, bandages, prosthetics, orthopaedic supports, insulin pumps and other worn medical devices, and anything left in a pocket. None of these is a threat. All of them can legitimately produce a region that does not match an expected body contour, for the simple reason that none of them is body contour."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Four operational rules follow directly. An anomaly is not a threat, and staff should be trained to say exactly that to the person in front of them. Resolution should be targeted at the flagged region rather than expanded into a general search. People with worn medical devices or prosthetics should be able to declare them beforehand, through a defined and dignified procedure rather than an improvised conversation in a queue. And the flagged-anomaly rate should be monitored over time: a rate drifting upward usually points not at the equipment but at a divestment procedure that has quietly stopped being enforced."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "regulatory-and-privacy-variation-by-jurisdiction",
      "h2": "Regulatory and Privacy Variation by Jurisdiction",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "This is the section that distinguishes a workable body scanner project from one that has to be unwound, and it is the reason this page puts regulation before specification rather than after it. Countries take ",
            {
              "b": "materially different positions"
            },
            " on people screening, not differences of emphasis, but differences that determine whether a given machine may lawfully be installed and operated at all. A configuration that is routine in one country may be unlawful in another, and a project that selects equipment first and investigates the rules afterwards is choosing the expensive order in which to find out."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Four questions vary, and each must be answered for the country of installation before anything is chosen."
          ]
        },
        {
          "type": "h3",
          "text": "Which imaging technologies are permitted"
        },
        {
          "type": "p",
          "parts": [
            "The starkest divergence concerns ionising radiation applied to people. Backscatter X-ray systems use low-dose ionising radiation, and in several jurisdictions their use for screening passengers has been restricted or withdrawn, in some cases after equipment had already been installed. Elsewhere the position differs, and may differ again between sectors within the same country. Millimetre wave, being non-ionising, is treated differently in most places, but \"treated differently\" is not the same as \"unrestricted\": radio emission rules, frequency allocations and equipment authorisation requirements still apply and are also set nationally."
          ]
        },
        {
          "type": "p",
          "parts": [
            "The practical instruction is to establish which technology classes are permitted for people screening in the country of installation, for the sector concerned, before any product shortlist exists. A shortlist built first tends to anchor the project to a technology that then has to be defended rather than chosen."
          ]
        },
        {
          "type": "h3",
          "text": "Whether an operator may view a body image at all"
        },
        {
          "type": "p",
          "parts": [
            "Some jurisdictions require that no body image may be displayed to any operator under any circumstances, which makes ATR-only display a legal requirement rather than a procurement preference. Others permit a remote-viewing arrangement under defined conditions. Others again have no explicit rule, which leaves the deploying organisation to set and defend its own position."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Because this varies, the specification should state the display requirement explicitly rather than assuming the supplier's default matches it, and should require written confirmation of what display modes the equipment supports, including any mode that exists but is disabled. An organisation that cannot answer \"what else can this machine display?\" cannot answer the question an auditor will eventually ask."
          ]
        },
        {
          "type": "h3",
          "text": "What may be recorded, and for how long"
        },
        {
          "type": "p",
          "parts": [
            "Data protection regimes differ considerably in how they treat screening data, and this is one of the faster-moving areas of divergence between countries. The questions that need answering locally are whether scan data may be retained at all, whether retention is permitted only for a defined purpose such as training or incident investigation, how long retention may continue, who may access it, what notice must be given to the person being screened, and whether a record of the screening event itself (as distinct from the scan data) is required, permitted or prohibited."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Default equipment behaviour is not a safe guide here. A machine capable of retaining data is not thereby permitted to, and a machine that retains nothing by default may be configurable to retain, which is itself a fact the organisation should know and control."
          ]
        },
        {
          "type": "h3",
          "text": "The right to request an alternative screening method"
        },
        {
          "type": "p",
          "parts": [
            "In many jurisdictions a person may decline a body scan and request an alternative method, and in some the availability of that alternative, and the notice informing people of it, are themselves regulated. In others the operating authority defines the alternative without a statutory right attaching. The alternative is commonly a documented physical search conducted under defined conditions."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Whatever the local position, a screening point should have its alternative procedure written down, its staff trained to offer it without the person having to argue, and the required notice displayed. That is good practice everywhere and a legal requirement in some places, and establishing which of the two applies is part of the project, not an afterthought."
          ]
        },
        {
          "type": "h3",
          "text": "Sequencing: establish the position before selecting the technology"
        },
        {
          "type": "p",
          "parts": [
            "The four questions above share one structural property: each can invalidate an equipment choice that has already been made. That is why they belong at the front of the project. The sequencing rule is simple and is worth writing into the project brief verbatim: ",
            {
              "b": "establish the applicable position, then select the technology, then specify the equipment."
            }
          ]
        },
        {
          "type": "table",
          "head": [
            "Question to establish",
            "Why it varies by jurisdiction",
            "What the specifier must obtain, in writing"
          ],
          "rows": [
            [
              [
                "Permitted technology classes for people screening"
              ],
              [
                "Positions on applying ionising radiation to people differ sharply between countries and sometimes between sectors within a country"
              ],
              [
                "A statement of which technology classes are permitted for this facility type in this country, and from which authority that position comes"
              ]
            ],
            [
              [
                "Radio emission and equipment authorisation"
              ],
              [
                "Frequency allocation and radio equipment authorisation are national matters"
              ],
              [
                "Which authorisation or registration applies to transmitting screening equipment locally, and who holds the obligation, manufacturer, importer or operator"
              ]
            ],
            [
              [
                "Radiation regulatory requirements, where applicable"
              ],
              [
                "Any X-ray-based equipment falls under a national radiation regime with licensing, surveying and personnel obligations"
              ],
              [
                "Whether a licence, a registered radiation protection adviser or periodic survey is required, and the lead time each adds"
              ]
            ],
            [
              [
                "Permitted display mode"
              ],
              [
                "Some jurisdictions prohibit any body image display outright; others permit defined arrangements; others are silent"
              ],
              [
                "Written confirmation of every display mode the equipment supports, including disabled modes, and the local rule that governs them"
              ]
            ],
            [
              [
                "Data retention and access"
              ],
              [
                "Data protection regimes diverge on whether screening data may be stored, for how long and by whom it may be seen"
              ],
              [
                "The permitted retention position, the configuration that enforces it, and the notice that must be given to screened people"
              ]
            ],
            [
              [
                "Alternative screening provision"
              ],
              [
                "The right to decline and the form of the alternative are regulated in some jurisdictions and left to the operator in others"
              ],
              [
                "Whether an alternative must be offered, what form it must take, and what notice must be displayed at the screening point"
              ]
            ],
            [
              [
                "Operator licensing and training"
              ],
              [
                "Who may operate screening equipment, and what registration or vetting they require, is a national or sectoral matter"
              ],
              [
                "Whether operators and the installing contractor require authorisation locally, which is a separate question from the equipment itself"
              ]
            ],
            [
              [
                "Sector screening mandates"
              ],
              [
                "Aviation, judicial, correctional and critical infrastructure screening are commonly directed rather than chosen"
              ],
              [
                "Whether equipment selection is the operator's decision at all for this facility type, or is set by an authority"
              ]
            ],
            [
              [
                "Import and market access control"
              ],
              [
                "Several jurisdictions treat security screening equipment as a controlled category at import, with separate regional conformity marking"
              ],
              [
                "Whether import authorisation or end-user documentation is required, what conformity marking applies, and the lead time both add"
              ]
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "Three points follow and deserve stating plainly, because each is a conflation seen regularly in international tenders."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "A conformity mark is not a permission to screen people."
              },
              " Market access marking addresses matters such as electrical safety, radio emission and electromagnetic compatibility. It says nothing about whether this technology may lawfully be applied to people at this facility in this country."
            ],
            [
              {
                "b": "A position taken in one country carries no automatic status in another."
              },
              " Evidence that a technology is permitted in one jurisdiction is evidence about that jurisdiction. Whether it is permitted elsewhere is a question for the authority there."
            ],
            [
              {
                "b": "The obligation to establish the applicable position sits with the deploying organisation and the importer:"
              },
              " not with an overseas manufacturer who may have no visibility of the destination market's rules or of the facility's sector."
            ]
          ]
        },
        {
          "type": "note",
          "parts": [
            "Nothing on this page should be read as a statement that any particular product holds any particular approval, licence, certification, conformity status or detection performance rating, or that any particular configuration is lawful anywhere. Those are questions for the supplier of the specific model and for the relevant authority in the specific market and sector, and both should be confirmed in writing with supporting documentation before a specification is issued."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "how-to-specify-a-body-scanner-for-any-site",
      "h2": "How to Specify a Body Scanner for Any Site",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "With the jurisdictional position established, specification becomes a sequence of determinations rather than a product comparison. The method below is deliberately independent of country, brand and product range. It produces a specification that can be issued to any competent supplier and answered unambiguously, and it keeps the decisions in an order where each one constrains the next."
          ]
        },
        {
          "type": "h3",
          "text": "Step 1, Establish the applicable jurisdictional position"
        },
        {
          "type": "p",
          "parts": [
            "This is Step 1 and not Step 6, for the reason the previous section set out at length. Record the answers to the nine questions in the table above, name the authority each came from, and date them. A position established three years ago and never revisited is not a position; it is a memory."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Write the permitted technology classes down"
              },
              " before any product is discussed, so the shortlist is derived from them rather than defended against them."
            ],
            [
              {
                "b": "Record the display-mode requirement as a hard constraint"
              },
              ", not a preference, and state whether any non-avatar mode is permitted to exist on the equipment at all."
            ],
            [
              {
                "b": "Record the retention position and the notice obligation"
              },
              ", because both have configuration and signage consequences that are far simpler to design in than to retrofit."
            ],
            [
              {
                "b": "Record the alternative-method obligation"
              },
              " and who will deliver it, since it needs staff, space and a written procedure."
            ],
            [
              {
                "b": "Name an owner for the position and a review date."
              },
              " Regimes in this area change, and a change can turn a compliant installation into a problem without anyone touching the equipment."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Step 2, Establish the detection gap the scanner exists to close"
        },
        {
          "type": "p",
          "parts": [
            "A body scanner is bought to reach something the rest of the checkpoint cannot. Stating what that is, in writing, prevents the device being specified because it seemed like an upgrade and then being asked to do things it does not do."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "State the item classes of concern by material and size"
              },
              ", not by name. \"Non-metallic masses of the order of a concealed packet\" is specifiable; \"threats\" is not."
            ],
            [
              {
                "b": "State what the archway already covers"
              },
              ", so the scanner's role is additive rather than duplicative. If the credible concern is entirely metallic, a scanner may not be the right purchase at all."
            ],
            [
              {
                "b": "State what remains out of scope"
              },
              " even with a scanner present (the interior of the body, the contents of bags, and residues) and name the layer that addresses each."
            ],
            [
              {
                "b": "State the direction of screening."
              },
              " Exit screening against removal of material from a site is a different problem from entry screening against items being brought in, and the item sizes of interest differ accordingly."
            ],
            [
              {
                "b": "Record who owns the statement and when it is reviewed"
              },
              ", alongside the jurisdictional position from Step 1."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Step 3, Establish the selection rule and the proportion to be scanned"
        },
        {
          "type": "p",
          "parts": [
            "Because a scanner is selective screening, the rule that selects people is as much a part of the design as the machine. It determines the number of scanners, the staffing and the queue behaviour, and in some sectors it is set by an authority rather than chosen."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Define how people are selected"
              },
              " (everyone who alarms at the archway, a defined random proportion, a specified screening category, or a combination) and confirm whether the rule is yours to set."
            ],
            [
              {
                "b": "Express the result as a proportion of the primary flow"
              },
              ", because that figure, not the total headcount, sizes the scanner provision."
            ],
            [
              {
                "b": "Check the rule against the local position"
              },
              " on discrimination and on notice, since selection rules are an area where fairness obligations commonly apply."
            ],
            [
              {
                "b": "Decide what happens when the scanner is out of service"
              },
              ", because a selective layer with no fallback simply stops being applied on the day it is needed."
            ],
            [
              {
                "b": "Record the rule in the written procedure"
              },
              " that operators work to, rather than leaving it as a supervisor's judgement."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Step 4, Establish throughput, floor area and lane geometry"
        },
        {
          "type": "p",
          "parts": [
            "The scanner's physical demands are routinely underestimated because it is compared mentally with an archway, which needs almost nothing but a flat floor and a clear approach."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Derive the scanner load from the primary peak and the selection proportion"
              },
              ", not from the daily total. A facility whose occupants arrive within a twenty-minute window has a very different requirement from one with a flat arrival curve at the same daily figure."
            ],
            [
              {
                "b": "Count the full cycle per person"
              },
              ", not the scan time alone: approach, positioning, pose, scan, result, and release or resolution. The scan is often the shortest part."
            ],
            [
              {
                "b": "Specify the approach, the standing position, the exit and a hold area"
              },
              " as distinct spaces. Scanners are frequently forced into a footprint that was planned for an archway, and the result is a lane that stops dead on every flagged anomaly."
            ],
            [
              {
                "b": "Specify the operator display position"
              },
              " such that it cannot be read from the queue or by passers-by. This is a layout requirement with a privacy consequence, not a preference."
            ],
            [
              {
                "b": "Record the result as a number with a duration"
              },
              " (for example \"up to 140 scans per hour sustained for 40 minutes, twice daily\") because that is a figure a supplier and a screening contractor can both answer against."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Step 5, Establish the resolution procedure and the alternative method"
        },
        {
          "type": "p",
          "parts": [
            "The scanner raises located questions. This step is about who answers them, how, and what happens for a person who will not or cannot be scanned."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Name the secondary equipment and the search position"
              },
              ": commonly a handheld detector and a defined area clear of the lane."
            ],
            [
              {
                "b": "Write the resolution procedure down:"
              },
              " including the instruction that resolution is targeted at the flagged region rather than expanded into a general search."
            ],
            [
              {
                "b": "Define the declaration route"
              },
              " for people with prosthetics, orthopaedic supports or worn medical devices, so the conversation happens privately and before the scan rather than publicly and after it."
            ],
            [
              {
                "b": "Define the alternative screening method"
              },
              " in full, consistent with Step 1, and train staff to offer it without the person having to ask twice."
            ],
            [
              {
                "b": "Establish the operator training requirement:"
              },
              " including pose instruction, anomaly resolution and handling of declared devices. Weak training shows up immediately as a low throughput and a high rescan rate, and it is the fastest of all these variables to fix."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Step 6, Establish assurance, privacy governance and review"
        },
        {
          "type": "p",
          "parts": [
            "A scanner producing no flags is not necessarily a scanner with nothing to flag. Like other screening equipment it can fail quietly, and here the governance obligations sit alongside the technical ones."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Specify a functional check regime"
              },
              " following the manufacturer's documentation for the specific equipment, run and recorded on a defined schedule by a named role."
            ],
            [
              {
                "b": "Specify flagged-anomaly rate monitoring:"
              },
              " because a rate that moves without an operational explanation is the earliest available warning of a configuration change, an environmental change or a divestment procedure that has lapsed."
            ],
            [
              {
                "b": "Specify a configuration audit"
              },
              " comparing the live display mode, retention setting and detection configuration against the documented position from Step 1. Drift here is usually human rather than electronic."
            ],
            [
              {
                "b": "Hold a documented privacy position"
              },
              " covering display modes supported and enabled, retention and its duration, operator access, the notice displayed and the alternative procedure. Assembling that after someone asks for it is harder than writing it beforehand."
            ],
            [
              {
                "b": "Set a review interval for the jurisdictional position itself:"
              },
              " and name who performs the review. This is the control that catches a regime change before an inspection does."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Writing it down: a six-line screening schedule"
        },
        {
          "type": "p",
          "parts": [
            "The six determinations condense into a schedule short enough to issue with a tender and specific enough that a bare model name cannot pass as an answer. Its value is its brevity."
          ]
        },
        {
          "type": "ol",
          "items": [
            [
              {
                "b": "Jurisdictional position"
              },
              ": permitted technology classes, display-mode requirement, retention position, alternative-method obligation, the authority each came from and the date established. Example of a well-formed entry: \"Non-ionising technology only; ATR-only display mandatory with no non-avatar mode permitted to exist; no scan data retention; documented alternative search required with notice displayed; position established from the national aviation security authority, dated and owned by the security manager.\""
            ],
            [
              {
                "b": "Detection gap"
              },
              ": item classes of concern by material and size, what the archway already covers, what remains out of scope and which layer addresses it, and the direction of screening."
            ],
            [
              {
                "b": "Selection rule and load"
              },
              ": how people are selected for scanning, the resulting proportion of the primary flow, whether the rule is set locally or by an authority, and the fallback when the scanner is out of service."
            ],
            [
              {
                "b": "Throughput and geometry"
              },
              ": scans per hour at peak with a duration, full cycle time per person, and the approach, standing, exit, hold and operator-display positions as distinct spaces."
            ],
            [
              {
                "b": "Resolution and alternative"
              },
              ": secondary equipment, search position, written targeted-resolution procedure, declaration route for worn medical devices, alternative method and the operator training requirement."
            ],
            [
              {
                "b": "Assurance and governance"
              },
              ": functional check regime and interval, flagged-anomaly rate monitoring, configuration audit against the documented position, the written privacy position, and the review interval for the jurisdictional position with a named owner."
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "A supplier who can answer all six lines against a specific model has told you something useful. A supplier who answers with a technology name and a scan time has not."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "where-body-scanners-are-used",
      "h2": "Where Body Scanners Are Used",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "Scanners appear where a checkpoint's threat assessment extends beyond conductive metal and where there is space and staffing to run a selective layer. The site types below recur across regions, each with a characteristic specification profile:"
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Airports and aviation facilities"
              },
              ": the principal application, used for a selected proportion of passengers alongside archways and baggage X-ray, usually under a sector mandate that determines both the method and the selection rule."
            ],
            [
              {
                "b": "Government and high-security buildings"
              },
              ": controlled entry where the assessed concern extends past metallic items, and where the public-facing privacy position matters as much as the detection behaviour."
            ],
            [
              {
                "b": "Correctional facilities"
              },
              ": visitor and resident screening, where non-metallic contraband is the central concern and where the regulatory position on people screening is frequently its own distinct regime."
            ],
            [
              {
                "b": "Courts and judicial buildings"
              },
              ": enhanced screening at designated entrances, commonly with a screening procedure imposed by an authority rather than chosen by the operator."
            ],
            [
              {
                "b": "Critical infrastructure and defence establishments"
              },
              ": screening categories defined for personnel and visitors, often with the tightest documentation obligations of any category."
            ],
            [
              {
                "b": "High-value manufacturing and processing sites"
              },
              ": exit screening against removal of small high-value material, including electronics and precious-metal operations. The item sizes of interest differ sharply from public entrance screening."
            ],
            [
              {
                "b": "Ports, terminals and border crossings"
              },
              ": where screening of people runs alongside cargo and vehicle inspection under a separate authority again."
            ],
            [
              {
                "b": "Major events and venues"
              },
              ": as a secondary position rather than a lane everyone passes, because the arrival peak at a venue is exactly the condition a scanner handles least well."
            ],
            [
              {
                "b": "Logistics and distribution centres"
              },
              ": shift-change exit screening, which concentrates an entire day's flow into a few minutes and therefore demands a carefully chosen selection proportion."
            ],
            [
              {
                "b": "Hospitals and healthcare campuses"
              },
              ": rarely for routine entry, and where used, with particular attention to people carrying implanted and worn medical devices."
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "Across every one of these, the layout pattern is the same regardless of sector or region: ",
            {
              "b": "the scanner sits behind the primary screening line, not in front of it."
            },
            " TimeWatch supplies inspection and screening equipment internationally and works on checkpoint layout and on the equipment surrounding a scanning position, since a scanner's usefulness depends heavily on what is in the lane before and after it."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "integration-with-other-screening-layers",
      "h2": "Integration With Other Screening Layers",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "A body scanner is a layer, not a checkpoint. In practice it is deployed alongside:"
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Walk-through metal detectors"
              },
              ": the primary screening line. Everyone passes the archway and a proportion is directed to the scanner. The division of labour is clearer once the archway's own mechanism is understood."
            ],
            [
              {
                "b": "X-ray baggage scanners"
              },
              ": carried bags and trays run on a parallel belt. The body scanner has nothing to say about bag contents and never will."
            ],
            [
              {
                "b": "Handheld metal detectors"
              },
              ": used to resolve a flagged region, particularly where the anomaly is likely to be metallic."
            ],
            [
              {
                "b": "Trace detection equipment"
              },
              ": where the assessment includes explosive or narcotic residue, swab-based trace detection covers ground neither the archway nor the scanner does."
            ],
            [
              {
                "b": "Entrance control, turnstiles, flap barriers and speed gates"
              },
              ": physically preventing progress until screening is complete, so a person with an unresolved flag cannot simply keep walking."
            ],
            [
              {
                "b": "Video surveillance"
              },
              ": coverage of the screening position for incident review, positioned so that no operator display falls within shot. That camera angle is itself a privacy control."
            ],
            [
              {
                "b": "Queue and lane management"
              },
              ": barriers, divestment tables and a defined hold area, without which a single flagged anomaly stalls the whole lane."
            ],
            [
              {
                "b": "Access control and visitor management"
              },
              ": recording that screening took place as part of the entry or visit record, within whatever the local retention position permits."
            ],
            [
              {
                "b": "Checkpoint-wide design"
              },
              ": how all of these fit together is a separate subject in its own right, in which the scanner is one position among several rather than the centrepiece."
            ]
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "installation-and-site-conditions",
      "h2": "Installation and Site Conditions",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "A body scanner is less sensitive to nearby structural metal than a walk-through detector, but considerably more demanding in every other respect, floor area, environment, sightlines and the regulatory paperwork that must exist before it is energised."
          ]
        },
        {
          "type": "p",
          "parts": [
            {
              "b": "Floor area and standing position."
            },
            " The portal needs clear space and a defined approach, exit and hold area, and these are separate requirements rather than one. The commonest installation error in this category is fitting a scanner into a footprint that was planned for an archway and then discovering that there is nowhere for a flagged person to stand while being resolved."
          ]
        },
        {
          "type": "p",
          "parts": [
            {
              "b": "Operator display placement and sightlines."
            },
            " The screen must not be visible to the queue, to passers-by or to a camera. Where the local position permits a remote operator arrangement, the viewing room's access control and sightlines become part of the same requirement."
          ]
        },
        {
          "type": "p",
          "parts": [
            {
              "b": "Environmental conditions."
            },
            " Temperature, humidity and dust limits are specified per model and matter more here than for an archway, because the processing electronics are denser and the antenna array is a precision assembly. The general principle holds across climates: ",
            {
              "b": "a catalogue environmental rating assumes reference conditions and a real entrance rarely matches them."
            },
            " High ambient combined with solar gain through a glazed concourse stresses control electronics and shortens power supply life. High humidity with salt-laden coastal air drives corrosion at fixings and connectors. Airborne particulates accumulate inside enclosures and at ventilation openings. Sub-zero conditions at an exposed entrance introduce condensation as equipment and people move between temperatures. In every case the response is the same: state the conditions the equipment will actually experience and require the supplier to confirm suitability for them, rather than relying on a general indoor rating."
          ]
        },
        {
          "type": "p",
          "parts": [
            {
              "b": "Separation, interference and regulatory position."
            },
            " Clearances from other equipment and from reflective structures follow the manufacturer's installation guidance, and a transmitting system sits within a national radio emission regime that must be identified before installation. For any X-ray-based equipment, the applicable radiation regulatory requirements (licensing, survey and personnel obligations) must be confirmed for the jurisdiction and the specific equipment, and those confirmations carry lead times that belong in the programme rather than in a late surprise."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "maintenance-and-operational-assurance",
      "h2": "Maintenance and Operational Assurance",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "Screening equipment that fails quietly is the most dangerous kind, and a scanner reporting nothing looks identical to a scanner with nothing to report. Routine assurance is the only thing that separates the two."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Functional checks to the manufacturer's procedure"
              },
              ": run and recorded on a defined schedule, by a named role, using the documentation for the specific equipment rather than a generic routine."
            ],
            [
              {
                "b": "Flagged-anomaly rate monitoring"
              },
              ": compare flagged scans against total scans over time. A ratio moving without an operational explanation points at a configuration change, an environmental change or a lapsed divestment procedure."
            ],
            [
              {
                "b": "Rescan rate monitoring"
              },
              ": a rising rescan rate is almost always a pose-instruction or guidance-marking problem rather than an equipment problem, and it is quick to correct once it is visible."
            ],
            [
              {
                "b": "Configuration and display-mode audit"
              },
              ": verify the live configuration against the documented position, including display mode and any retention setting. This is a governance check as much as a technical one."
            ],
            [
              {
                "b": "Antenna array and enclosure inspection"
              },
              ": physical condition, ventilation paths and any accumulation of dust inside the enclosure, at the manufacturer's interval."
            ],
            [
              {
                "b": "Guidance marking and signage"
              },
              ": floor markings wear out, and worn markings produce exactly the pose non-compliance that depresses throughput. Required notices should be checked at the same time."
            ],
            [
              {
                "b": "Operator refresher training"
              },
              ": anomaly resolution, declared-device handling and the alternative procedure, reviewed at a defined interval rather than only at induction."
            ],
            [
              {
                "b": "Software and detection updates"
              },
              ": managed under a defined change procedure, with the configuration audit repeated afterwards, since an update can reset settings that were deliberately chosen."
            ]
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "benefits-and-limitations",
      "h2": "Benefits and Limitations",
      "blocks": [
        {
          "type": "h3",
          "text": "Benefits"
        },
        {
          "type": "ul",
          "items": [
            [
              "Reaches non-metallic items that a walk-through metal detector physically cannot, which is the entire reason to add the layer."
            ],
            [
              "Non-contact, the person is screened without being touched, which matters for dignity, for speed and for the acceptability of the checkpoint."
            ],
            [
              "Localises the finding, so resolution is targeted at one region rather than conducted as a general search."
            ],
            [
              "Generic-avatar display allows a high-sensitivity screening method to operate in public without displaying any body image."
            ],
            [
              "Applies a consistent analysis to every person scanned, without fatigue or variation between operators."
            ],
            [
              "Produces measurable operational data (scan counts, flagged-anomaly rates, rescan rates) which is what makes an assurance regime possible."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Limitations and considerations"
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "It indicates anomalies, not threats."
              },
              " The machine flags a region that does not match expected body contour. What is there is established by a person, and no device of this type identifies a specific object with certainty."
            ],
            [
              {
                "b": "It does not see inside bags or inside the body."
              },
              " Bag contents belong to the X-ray scanner; nothing here substitutes for that layer."
            ],
            [
              {
                "b": "Throughput is far lower than an archway."
              },
              " The person stops, poses and waits, so a scanner is selective or secondary screening and is unsuitable as primary screening for everyone."
            ],
            [
              {
                "b": "Nuisance flags are inherent."
              },
              " Clothing folds, sweat, bandages, prosthetics and worn medical devices all legitimately produce flagged regions, and the response is training and divestment discipline rather than a configuration change."
            ],
            [
              {
                "b": "The permitted configuration varies by jurisdiction."
              },
              " Technology class, display mode, retention and the alternative-method obligation are all set nationally, and an arrangement lawful in one country may not be in another."
            ],
            [
              {
                "b": "It demands space, staffing and procedure."
              },
              " Without a hold area, a trained operator and a written resolution procedure, the layer does not function regardless of the equipment chosen."
            ],
            [
              {
                "b": "Specifications vary by model."
              },
              " Scan time, resolution, display modes, environmental limits and configurability differ between products and should be confirmed against the documentation for the equipment actually being specified."
            ]
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "body-scanner-vs-walk-through-detector-vs-handheld-detector",
      "h2": "Body Scanner vs Walk-Through Detector vs Handheld Detector",
      "blocks": [
        {
          "type": "table",
          "head": [
            "",
            "Millimetre wave body scanner",
            "Walk-through metal detector",
            "Handheld metal detector"
          ],
          "rows": [
            [
              [
                {
                  "b": "What it responds to"
                }
              ],
              [
                "Surface anomalies under clothing, metallic and non-metallic"
              ],
              [
                "Conductive metal on or carried by the person"
              ],
              [
                "Conductive metal, at close range"
              ]
            ],
            [
              [
                {
                  "b": "Energy used"
                }
              ],
              [
                "Low-power millimetre wave; non-ionising, no X-rays. Backscatter X-ray systems, by contrast, use ionising radiation"
              ],
              [
                "Low-intensity electromagnetic field; non-ionising, no X-rays"
              ],
              [
                "Low-intensity electromagnetic field; non-ionising"
              ]
            ],
            [
              [
                {
                  "b": "Throughput"
                }
              ],
              [
                "Low, the person stops, poses and waits for a result"
              ],
              [
                "High, walking pace, nobody stops"
              ],
              [
                "Low, a manual sweep of one person at a time"
              ]
            ],
            [
              [
                {
                  "b": "Privacy handling"
                }
              ],
              [
                "Generic avatar with flagged regions; no body image shown to the operator on an ATR system"
              ],
              [
                "No imaging of any kind; an audible alarm and a zone indicator"
              ],
              [
                "No imaging; audible and tactile response"
              ]
            ],
            [
              [
                {
                  "b": "Typical checkpoint role"
                }
              ],
              [
                "Selective or secondary screening of a proportion of people"
              ],
              [
                "Primary screening of everyone passing the point"
              ],
              [
                "Resolution of an alarm or a flagged region"
              ]
            ],
            [
              [
                {
                  "b": "Main constraint"
                }
              ],
              [
                "Throughput, floor area, operator training and the local regulatory position"
              ],
              [
                "Nuisance alarm rate and secondary screening capacity"
              ],
              [
                "Throughput and operator consistency"
              ]
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "These are complementary layers rather than competing options. Each covers something the others cannot: the archway supplies throughput, the scanner reaches non-metallic items, the handheld resolves precisely where the other two only indicate, and the baggage scanner covers what none of the three sees. Adding a scanner does not remove the need for any of them, and a checkpoint that treats it as a replacement has narrowed its coverage while believing it widened it."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "body-scanner-safety-radiation-and-privacy",
      "h2": "Body Scanner Safety: Radiation and Privacy",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "These two questions account for most public interest in this technology, and both deserve a precise answer rather than a reassuring one."
          ]
        },
        {
          "type": "h3",
          "text": "Radiation"
        },
        {
          "type": "p",
          "parts": [
            "Millimetre wave scanners transmit non-ionising radio frequency energy at low power. They do not use X-rays and do not emit ionising radiation. Backscatter X-ray systems are a different technology and do use ionising radiation, which is precisely why their use for screening passengers has been restricted or withdrawn in several jurisdictions. Treating the two as one category is the commonest error in any discussion of body scanner safety, and it is worth correcting wherever it appears."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Beyond that factual distinction, the safety position for any specific installation should be taken from two sources and not from a general article: the manufacturer's published documentation for the particular equipment, and the guidance published by the regulator in the jurisdiction where it operates. An organisation deploying a scanner should confirm the applicable regulatory position for its own jurisdiction and equipment type, keep that documentation available, and review it when either the equipment or the regime changes."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Anyone with a specific medical concern (an implanted device such as a pacemaker or defibrillator, an insulin pump, or a condition they believe may be affected by screening) should inform screening staff before the scan and should follow the advice of their own doctor and the guidance supplied with their device. Screening procedures ordinarily provide an alternative method, and staff should be trained to offer it without the person having to argue for it or explain their circumstances in public."
          ]
        },
        {
          "type": "h3",
          "text": "Privacy"
        },
        {
          "type": "p",
          "parts": [
            "On a system operating with automatic target recognition, the operator does not see an image of the person's body. The display shows a generic outline identical for every person screened, with a box marking any region flagged for resolution. This is the standard display mode for modern people-screening equipment, it is what an organisation should require in its specification, and it is what the organisation should be able to demonstrate when asked."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Privacy governance extends beyond the display, however, and the parts that extend beyond it are the parts that vary by country. An organisation operating a scanner should hold a written position covering which display modes the equipment supports and which are enabled, whether scan data is retained and for how long, who may access the operator position and any stored material, what notice is displayed to people being screened, and what the alternative procedure is for someone who declines. In some jurisdictions several of those answers are prescribed; in others they are the organisation's own to set and defend. Either way, writing the position down before anyone asks for it is considerably easier than assembling it afterwards."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "regional-guidance-india-saudi-arabia-and-the-uae",
      "h2": "Regional Guidance: India, Saudi Arabia and the UAE",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "This page is written to be useful anywhere, which is exactly why it names no country as an example and no city at all. Where people screening is concerned, generic advice about local rules is worth less than no advice, because the differences between jurisdictions are the substance rather than the detail."
          ]
        },
        {
          "type": "p",
          "parts": [
            "For three markets, TimeWatch maintains dedicated regional sites carrying locally relevant versions of this guidance, local product availability and local support arrangements. If you are specifying in one of them, start there rather than here:"
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "India"
              },
              ": ",
              {
                "href": "https://www.timewatchindia.com/how-does-a-body-scanner-work",
                "label": "timewatchindia.com, How does a body scanner work?"
              }
            ],
            [
              {
                "b": "Saudi Arabia"
              },
              ": ",
              {
                "href": "https://www.timewatcharabia.com/how-does-a-body-scanner-work",
                "label": "timewatcharabia.com, How does a body scanner work?"
              }
            ],
            [
              {
                "b": "United Arab Emirates"
              },
              ": ",
              {
                "href": "https://www.timewatchuae.com/how-does-a-body-scanner-work",
                "label": "timewatchuae.com, How does a body scanner work?"
              }
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "Readers elsewhere are in the right place. The physics, the ATR explanation, the nine-question jurisdictional checklist and the six-step specification method are written to be applied to any location, what you supply is the applicable national position, the detection gap, the selection rule and the resolution capacity, and the method does the rest."
          ]
        }
      ],
      "tone": "white"
    }
  ],
  "faq": {
    "h2": "Frequently Asked Questions",
    "tone": "gray",
    "items": [
      {
        "q": "How does a body scanner work?",
        "a": "An active millimetre wave scanner transmits low-power, non-ionising radio energy towards a person standing still in the portal. Clothing is largely transparent at these wavelengths, so the energy reaches the skin and reflects from it and from anything worn underneath. Receiver antennas capture those reflections from many angles as the array rotates or steers electronically, and a processing unit reconstructs a three-dimensional representation of the body surface. Detection software analyses that reconstruction for regions departing from an expected body contour and displays a generic avatar with a box over anything flagged."
      },
      {
        "q": "Do body scanners show an image of your body?",
        "a": "Not on a system operating with automatic target recognition, which is the standard display mode for modern people-screening equipment. The reconstructed data is analysed by software and is never shown to the operator. What the operator sees is a generic outline identical for every person screened, with a box marking any region flagged for resolution, or a clear result if nothing is flagged. Some jurisdictions require this display mode by law, so the permitted arrangement should be confirmed locally rather than assumed."
      },
      {
        "q": "Do body scanners use radiation, and are they safe?",
        "a": "Millimetre wave scanners transmit non-ionising radio frequency energy at low power and do not use X-rays or emit ionising radiation. Backscatter X-ray scanners are a different technology and do use ionising radiation, which is why their use in passenger screening has been restricted or withdrawn in several jurisdictions. Safety positions are published by manufacturers for their specific equipment and by national regulators in their guidance, and those two sources are what an organisation should rely on. Anyone with a medical concern or an implanted device should inform screening staff and follow their doctor's advice."
      },
      {
        "q": "What is automatic target recognition in a body scanner?",
        "a": "Automatic target recognition is the software layer that analyses the scanner's three-dimensional reconstruction for regions departing from an expected body contour, then presents the result as a generic avatar with flagged regions rather than as any image of the person. It is the reason the technology became acceptable for public screening. The detection physics did not change when it was introduced; only the presentation of the output changed, and that presentation change is what resolved the objection."
      },
      {
        "q": "Can a body scanner detect non-metallic items?",
        "a": "It can indicate anomalies that are non-metallic as well as metallic, and that is the main advantage over a walk-through metal detector, which responds only to conductive metal. What the system actually reports is a region that does not match an expected body contour. It does not identify what the object is, and no screening device of this type detects a specific threat with certainty, the operator establishes what is present during targeted resolution."
      },
      {
        "q": "What is the difference between a body scanner and a metal detector?",
        "a": "A walk-through metal detector uses an electromagnetic field to sense conductive metal, screens people at walking pace and therefore gives high throughput, but it cannot respond to non-metallic items at any sensitivity setting. A body scanner uses millimetre wave energy to examine the body surface beneath clothing and can indicate metallic and non-metallic anomalies, but requires the person to stop and pose, so throughput is much lower. The archway is used as primary screening for everyone and the scanner as selective or secondary screening."
      },
      {
        "q": "Why do you have to raise your arms in a body scanner?",
        "a": "The scan captures reflections from the body surface, and arms held down against the sides shadow the torso, the waist and the underarm region from the antenna array. Raising the arms and holding them slightly away from the body gives the array a clear line to those areas. Poor pose compliance is one of the commonest causes of a rescan, which is also why clear floor markings, pictographic prompts and consistent operator instruction matter more to throughput than they appear to."
      },
      {
        "q": "Why did the scanner flag an area when I was not carrying anything?",
        "a": "Because the system flags anomalies rather than threats. Thick clothing folds, bunched fabric, heavy seams, sweat, bandages, prosthetics, orthopaedic supports, worn medical devices and items left in a pocket can all produce a region that does not match an expected body contour. A flagged region means the operator needs to check that location and nothing more, and resolution should be targeted at that area rather than expanded into a general search."
      },
      {
        "q": "Are body scanner rules the same in every country?",
        "a": "No, and the differences are material rather than procedural. Countries take different positions on which imaging technologies may be used on people, on whether an operator may view any body image at all, on whether scan data may be retained and for how long, and on whether a person may request an alternative screening method. A configuration that is lawful in one country may not be lawful in another, so a deployer must establish the applicable position for the country and the sector before selecting technology."
      },
      {
        "q": "Is backscatter X-ray still used for passenger screening?",
        "a": "It is far less common than millimetre wave for screening people. Backscatter systems use low-dose ionising radiation, and their use in passenger screening has been restricted or withdrawn in a number of jurisdictions on radiation and privacy grounds. Millimetre wave is the technology in general use for this application. Any organisation considering X-ray-based people screening must establish the applicable regulatory position where the equipment will operate before proceeding any further."
      },
      {
        "q": "Can I refuse a body scan?",
        "a": "In many jurisdictions a person may decline and request an alternative screening method, commonly a documented physical search conducted under defined conditions, and in some places the availability of that alternative and the notice describing it are themselves regulated. Elsewhere the operating authority defines the alternative without a statutory right attaching. Anyone who does not wish to be scanned, or who has a medical reason to avoid it, should tell screening staff, who should be trained to offer the alternative without the person having to argue for it."
      }
    ]
  },
  "related": {
    "h2": "Related pages",
    "tone": "gray",
    "links": [
      {
        "href": "/how-does-a-door-frame-metal-detector-work",
        "label": "how door frame metal detectors work"
      },
      {
        "href": "/how-does-a-turnstile-system-work",
        "label": "how turnstile systems work"
      },
      {
        "href": "/products/inspection-control/door-frame-metal-detector/twd-2101-6-9-zone-dfmd",
        "label": "TWD-2101 6/9 zone door frame metal detector"
      },
      {
        "href": "/products/inspection-control/door-frame-metal-detector/tw-d2618-18-zone-dfmd",
        "label": "TW-D2618 18 zone door frame metal detector"
      },
      {
        "href": "/products/inspection-control/door-frame-metal-detector/tw-d2333-33-zone-dfmd",
        "label": "TW-D2333 33 zone door frame metal detector"
      },
      {
        "href": "/products/inspection-control/hand-held-metal-detector/tw-hh100",
        "label": "TW-HH100 handheld metal detector"
      },
      {
        "href": "/products/inspection-control/x-ray-baggage-scanner/ai-scan-dv",
        "label": "AI-Scan-DV X-ray baggage scanner"
      },
      {
        "href": "/products/inspection-control",
        "label": "inspection control range"
      },
      {
        "href": "/products",
        "label": "TimeWatch product range"
      },
      {
        "href": "/blogs",
        "label": "more technical guides"
      },
      {
        "href": "/contact",
        "label": "international enquiries"
      }
    ]
  }
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TechArticle",
      "@id": `${PAGE_URL}#article`,
      headline: "How Does a Body Scanner Work?",
      name: metadata.title,
      description:
        "An international technical reference on security body scanner operation, covering millimetre wave reflection, three-dimensional reconstruction, automatic target recognition and the generic avatar, selective screening throughput, and the jurisdictional variation in permitted technology, display mode, data retention and alternative screening.",
      url: PAGE_URL,
      mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
      inLanguage: "en",
      isAccessibleForFree: true,
      proficiencyLevel: "Beginner",
      about: [{"@type":"Thing","name":"Security body scanner"},{"@type":"Thing","name":"Millimetre wave imaging"},{"@type":"Thing","name":"Automatic target recognition"},{"@type":"Thing","name":"Security screening"},{"@type":"Thing","name":"Privacy by design"}],
      image: HERO_IMAGE,
      datePublished: DATE,
      dateModified: DATE,
      author: { "@type": "Organization", name: "TimeWatch", url: SITE },
      publisher: {
        "@type": "Organization",
        name: "TimeWatch",
        url: SITE,
        logo: { "@type": "ImageObject", url: `${SITE}/timewatch-logo.svg` },
      },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["#quick-answer", "#how-does-a-body-scanner-work"],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Blogs", item: `${SITE}/blogs` },
        { "@type": "ListItem", position: 3, name: "How Does a Body Scanner Work?", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: page.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

function SectionTitle({ children }) {
  return (
    <h2 className="text-2xl md:text-[32px] leading-tight font-bold text-gray-900 border-l-4 border-[#d63438] pl-4">
      {children}
    </h2>
  );
}

// next/link for site paths, plain <a> for tel:, mailto: and external links.
function SmartLink({ href, className, children }) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

const th = "px-5 py-4 text-left text-sm font-semibold uppercase tracking-wide text-gray-900 bg-white border-b-2 border-gray-300";
const thDark = "px-5 py-4 text-left text-sm font-semibold uppercase tracking-wide text-white bg-gray-800";
const tdBase = "px-5 py-4 text-gray-800 align-top";

// Cards: light tint on white bands, white on grey bands, both with a soft shadow.
const cardOnGray =
  "rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition-shadow hover:shadow-lg";
const cardOnWhite =
  "rounded-2xl border border-gray-200 bg-gray-100 p-8 shadow-md transition-shadow hover:shadow-lg";

// Full-width section band (alternating white / light grey) with the page container inside.
function Band({ id, tone = "white", children }) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 md:py-20 ${tone === "gray" ? "bg-gray-100" : "bg-white"}`}>
      <div className="container max-w-7xl">{children}</div>
    </section>
  );
}

// Rich text: plain strings, bold / italic runs and inline links (all kept exactly as in the content pack).
function Rich({ parts }) {
  return parts.map((part, i) => {
    if (typeof part === "string") return part;
    if (part.b !== undefined) {
      return (
        <strong key={i} className="font-bold text-gray-900">
          {part.b}
        </strong>
      );
    }
    if (part.i !== undefined) return <em key={i}>{part.i}</em>;
    if (part.code !== undefined) {
      return (
        <code key={i} className="rounded bg-gray-200 px-1.5 py-0.5 font-mono text-[0.9em] text-gray-900">
          {part.code}
        </code>
      );
    }
    if (part.bi !== undefined) {
      return (
        <strong key={i} className="font-bold text-gray-900">
          <em>{part.bi}</em>
        </strong>
      );
    }
    return (
      <SmartLink
        key={i}
        href={part.href}
        className="font-semibold text-[#b82d31] underline underline-offset-4 hover:text-[#d63438]"
      >
        {part.label}
      </SmartLink>
    );
  });
}

// One content block of a section: paragraph, sub-heading, definition callout, list or table.
function Block({ b, tone }) {
  const card = tone === "gray" ? cardOnGray : cardOnWhite;

  if (b.type === "h3") {
    return <h3 className="mt-10 text-xl font-semibold text-gray-900 md:text-2xl">{b.text}</h3>;
  }

  if (b.type === "p") {
    return (
      <p className="mt-6 max-w-4xl leading-relaxed text-gray-700">
        <Rich parts={b.parts} />
      </p>
    );
  }

  if (b.type === "snippet") {
    return (
      <div
        id={b.quick ? "quick-answer" : undefined}
        className={`mt-8 max-w-4xl rounded-2xl border-l-4 border-[#d63438] p-6 text-base leading-relaxed text-gray-800 shadow-md md:p-8 md:text-lg ${
          tone === "gray" ? "bg-white" : "bg-gray-100"
        }`}
      >
        <Rich parts={b.parts} />
      </div>
    );
  }

  if (b.type === "note") {
    return (
      <p className="mt-6 max-w-4xl text-sm leading-relaxed text-gray-600">
        <Rich parts={b.parts} />
      </p>
    );
  }

  if (b.type === "ol") {
    return (
      <div className={`${card} mt-8 md:p-10`}>
        <ol className="space-y-4">
          {b.items.map((parts, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d63438] text-sm font-bold text-white">
                {i + 1}
              </span>
              <span className="leading-relaxed text-gray-800">
                <Rich parts={parts} />
              </span>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  if (b.type === "ul") {
    return (
      <div className={`${card} mt-8 md:p-10`}>
        <ul className="space-y-4">
          {b.items.map((parts, i) => (
            <li key={i} className="flex gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#b82d31]" />
              <span className="leading-relaxed text-gray-800">
                <Rich parts={parts} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // table (first column of each body row is the row header)
  return (
    <div className="mt-8 overflow-x-auto rounded-xl border border-gray-300 bg-white shadow-md">
      <table className={`w-full border-collapse ${b.head.length > 2 ? "min-w-160" : ""}`}>
        {b.caption && (
          <caption className="caption-top bg-gray-800 px-5 py-4 text-left text-sm font-semibold text-white md:text-base">
            {b.caption}
          </caption>
        )}
        <thead>
          <tr>
            {b.head.map((h, i) => (
              <th key={i} scope="col" className={b.caption ? th : thDark}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {b.rows.map(([rowHead, ...cells], r) => (
            <tr key={r} className="even:bg-gray-100 hover:bg-red-50">
              <th scope="row" className="px-5 py-4 text-left align-top font-semibold text-gray-900">
                <Rich parts={rowHead} />
              </th>
              {cells.map((c, i) => (
                <td key={i} className={tdBase}>
                  <Rich parts={c} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function HowDoesABodyScannerWorkPage() {
  const { hero, sections, faq, related } = page;

  return (
    <>
      {/* Single server-rendered JSON-LD @graph (TechArticle, BreadcrumbList, FAQPage). */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <main className="bg-white">
        {/* hero */}
        <header id="hero" className="relative flex overflow-hidden bg-gray-950 md:min-h-[min(40vw,70vh)]">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            width={hero.image.width}
            height={hero.image.height}
            priority
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-gray-950/90 via-gray-950/70 to-gray-950/20" />
          <div className="container relative z-10 flex min-h-80 w-full max-w-7xl flex-col justify-center py-14 text-white md:py-20">
            <h1 className="max-w-3xl text-3xl font-bold md:text-5xl">{hero.h1}</h1>
          </div>
        </header>

        {/* content sections */}
        {sections.map((sec) => (
          <Band key={sec.id} id={sec.id} tone={sec.tone}>
            <SectionTitle>{sec.h2}</SectionTitle>
            {sec.blocks.map((b, i) => (
              <Block key={i} b={b} tone={sec.tone} />
            ))}
          </Band>
        ))}

        {/* faq: answers are always in the HTML; must match the FAQPage schema */}
        <Band id="faq" tone={faq.tone}>
          <SectionTitle>{faq.h2}</SectionTitle>
          <div className="mt-8 max-w-4xl space-y-3">
            {faq.items.map((item) => (
              <details
                key={item.q}
                className={`group rounded-xl border border-gray-200 shadow-md transition-shadow open:shadow-lg ${
                  faq.tone === "gray" ? "bg-white" : "bg-gray-100 open:bg-white"
                }`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base font-semibold text-gray-900 md:text-lg">{item.q}</h3>
                  <ChevronDown className="h-5 w-5 shrink-0 text-[#d63438] transition-transform group-open:rotate-180" />
                </summary>
                <p className="px-6 pb-6 leading-relaxed text-gray-700">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Band>

        {/* related / internal links (only pages that exist) */}
        <Band id="related" tone={related.tone}>
          <SectionTitle>{related.h2}</SectionTitle>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {related.links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`flex h-full items-center justify-between gap-3 rounded-xl border border-gray-200 px-5 py-4 font-medium text-gray-900 shadow-md transition-all first-letter:uppercase hover:border-[#b82d31]/50 hover:text-[#b82d31] hover:shadow-lg ${
                    related.tone === "gray" ? "bg-white" : "bg-gray-100"
                  }`}
                >
                  {l.label}
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </Band>
      </main>
    </>
  );
}
