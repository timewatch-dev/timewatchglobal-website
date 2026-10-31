import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";

/**
 * Global "how it works" page served at /how-does-an-attendance-machine-work (static informational page, x-default of the four-site cluster).
 * Content: global/how-it-works-pages/GL-03-how-does-an-attendance-machine-work.html (section 4 "Complete Page Content", which includes the FAQ),
 * kept word for word including the "Featured-snippet definition," label and the regional links. Section 1 gives the
 * metadata, section 2 the keywords. The TechArticle / BreadcrumbList nodes are composed from the pack's schema notes; the
 * FAQPage schema is built from the same FAQ data as the visible FAQ, so the two always match.
 * Body links and "Related pages" only point at pages that exist on the global site.
 * Everything renders on the server; the FAQ answers are in the HTML even while collapsed.
 */

export const dynamic = "force-static";

const SITE = "https://www.timewatchglobal.com";
const PAGE_URL = `${SITE}/how-does-an-attendance-machine-work`;
const HERO_IMAGE = `${SITE}/images/how-it-works/attendance-terminal-office-entrance-hero.webp`;
const HERO_ALT = "Employee presenting a credential to a wall-mounted attendance terminal at an office entrance";
const DATE = "2026-10-27";

export const metadata = {
  title: "How Does an Attendance Machine Work? Mechanism & Specification",
  description:
    "How an attendance machine works (enrollment, template matching, thresholds, event recording and transfer) plus a method for specifying modality, throughput, topology and data handling anywhere.",
  keywords:
    "how does an attendance machine work, biometric attendance system working, how does a biometric attendance machine work, attendance machine working principle, time attendance terminal explained, attendance device components, biometric template explained, attendance system specification, how to choose a biometric modality, does an attendance machine store my fingerprint, how does face recognition attendance work, attendance machine working process step by step, what is 1:1 and 1:N matching in biometrics, how does a palm vein attendance machine work, on device matching vs server side biometric matching, how many attendance terminals for a shift change, FAR and FRR threshold explained, biometric attendance data protection requirements, attendance fallback for users who cannot enrol, how does attendance data reach payroll software",
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
    title: "How Does an Attendance Machine Work? A Technical and Specification Reference",
    description:
      "From capture to payroll-ready output, how attendance terminals identify a person, why the raw image is never stored, and how to specify a deployment for any workforce in any jurisdiction.",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1024, height: 473, alt: HERO_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Does an Attendance Machine Work? A Technical and Specification Reference",
    description:
      "Your fingerprint is never stored. Here is what an attendance terminal actually keeps, how it recognises you in under a second, and the five decisions behind a deployment that works.",
    images: [{ url: HERO_IMAGE, alt: HERO_ALT }],
  },
};

const page = {
  "hero": {
    "h1": "How Does an Attendance Machine Work?",
    "image": {
      "src": "/images/how-it-works/attendance-terminal-office-entrance-hero.webp",
      "alt": "Employee presenting a credential to a wall-mounted attendance terminal at an office entrance",
      "width": 1024,
      "height": 473
    }
  },
  "sections": [
    {
      "id": "what-is-an-attendance-machine",
      "h2": "What Is an Attendance Machine?",
      "blocks": [
        {
          "type": "snippet",
          "parts": [
            {
              "b": "Featured-snippet definition, "
            },
            " An attendance machine is a device that identifies a person and records the exact time they arrived or left. It captures a credential (a fingerprint, face, palm, iris or card) converts it into a mathematical template, compares that template against enrolled records, and on a match writes a timestamped attendance event. That event is transferred to attendance software, which applies shift, leave and overtime rules and produces payroll-ready output. The raw biometric image is discarded during this process; only the template is retained."
          ],
          "quick": true
        },
        {
          "type": "p",
          "parts": [
            "An attendance machine is also called a biometric attendance system, a time attendance terminal, a punching machine or an access terminal. The device performs one narrow job very quickly: establish who this person is, and note the time. Everything that turns those events into payable days happens in software."
          ]
        },
        {
          "type": "p",
          "parts": [
            "That division matters more than it first appears. A terminal that reads a finger in well under a second is doing the easy part. Whether an arrival a few minutes after the shift start counts as late, how a night shift crossing midnight is allocated, which leave balance an absence draws from, none of that is decided by the device, and all of it varies by employer and by the employment rules in force."
          ]
        },
        {
          "type": "p",
          "parts": [
            "The second thing worth stating early is that this is personal data technology as much as it is timekeeping technology. The device handles a biometric characteristic of an identified individual, and what an organisation may lawfully do with that varies sharply between countries. The specification method later on this page treats that as an input, alongside throughput and environment, rather than as a question for the week before go-live."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "how-does-an-attendance-machine-work",
      "h2": "How Does an Attendance Machine Work?",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "An attendance machine works in five stages. The sensor ",
            {
              "b": "captures"
            },
            " a sample, an image of a fingerprint, a face, the vein pattern of a palm. Software ",
            {
              "b": "extracts"
            },
            " the distinctive features from that sample and discards the rest, including the original image. It ",
            {
              "b": "compares"
            },
            " the resulting template against the templates created during enrollment, producing a similarity score. If the score passes the configured threshold, the device ",
            {
              "b": "records"
            },
            " an event containing the user identifier, timestamp, direction and device identifier. That event is then ",
            {
              "b": "transferred"
            },
            " to the attendance software."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Capture, extract, compare, record, transfer. The whole sequence typically completes in well under a second on a modern terminal, and everything else on this page is detail beneath those five verbs."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "main-components-of-an-attendance-machine",
      "h2": "Main Components of an Attendance Machine",
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
                "Biometric sensor"
              ],
              [
                "Captures the raw sample. An optical or capacitive sensor for fingerprints, a camera pair with infrared illumination for face, a near-infrared sensor for palm vein, a specialised camera for iris."
              ],
              [
                "Modality, sensor area and resolution, tolerance to contamination, and whether capture must work with gloves, protective equipment or covered faces."
              ]
            ],
            [
              [
                "Card or token reader"
              ],
              [
                "Reads an RFID or smartcard credential, as the primary method or as a second factor alongside a biometric."
              ],
              [
                "Card technology and security level, and whether the credential must interoperate with an existing estate."
              ]
            ],
            [
              [
                "Processor and matching engine"
              ],
              [
                "Runs feature extraction and template comparison, on the device or on a server depending on topology."
              ],
              [
                "Matching speed at the enrolled population size, and whether matching must continue without a network."
              ]
            ],
            [
              [
                "Template storage"
              ],
              [
                "Memory holding enrolled templates. Capacity sets how many users one terminal supports."
              ],
              [
                "Capacity, encryption at rest, and whether templates may be stored on the device at all under the applicable data rules."
              ]
            ],
            [
              [
                "Transaction log memory"
              ],
              [
                "Holds attendance events locally until they are transferred, so events are not lost when the network is unavailable."
              ],
              [
                "Depth, sized against the longest credible outage at peak punch rate rather than an average day."
              ]
            ],
            [
              [
                "Real-time clock"
              ],
              [
                "Maintains the timestamp. Accuracy here is the foundation of every downstream calculation."
              ],
              [
                "Drift rate, synchronisation method, and behaviour across time zone and daylight-saving changes on multi-site deployments."
              ]
            ],
            [
              [
                "Display, keypad and feedback"
              ],
              [
                "Confirms the event to the user, allows identifier or reason-code entry, and signals success or rejection."
              ],
              [
                "Interface languages available, audible feedback suitability for the environment, and accessibility of the mounting and interface."
              ]
            ],
            [
              [
                "Communication interface"
              ],
              [
                "Ethernet, Wi-Fi, cellular, RS-485 or USB, carrying events to the software and configuration back to the device."
              ],
              [
                "Transport security, whether the device initiates the connection, and what is available at remote sites."
              ]
            ],
            [
              [
                "Power supply and backup"
              ],
              [
                "Mains adaptor or Power over Ethernet, often with a backup battery so the terminal survives short interruptions."
              ],
              [
                "Supply voltage and frequency vary by region; autonomy period depends on whether attendance must continue through an outage."
              ]
            ],
            [
              [
                "Access control relay"
              ],
              [
                "An optional output that releases a door lock, so one terminal serves both attendance and entry."
              ],
              [
                "Whether the fail-state of the door on power loss is compatible with the building's life-safety strategy."
              ]
            ]
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "how-does-an-attendance-machine-work-step-by-step",
      "h2": "How Does an Attendance Machine Work Step by Step?",
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
                "Enrollment (once per person)"
              ],
              [
                "The user presents the credential several times. The device captures samples, extracts features and builds a reference template, stored according to the chosen topology."
              ]
            ],
            [
              [
                {
                  "b": "2"
                }
              ],
              [
                "User presents the credential"
              ],
              [
                "A finger on the sensor, a face in front of the camera, a palm above the reader, or a card at the reader."
              ]
            ],
            [
              [
                {
                  "b": "3"
                }
              ],
              [
                "Sample is captured"
              ],
              [
                "The sensor produces a raw image or signal. Face terminals typically capture both visible and infrared frames so recognition continues in poor light."
              ]
            ],
            [
              [
                {
                  "b": "4"
                }
              ],
              [
                "Liveness is assessed"
              ],
              [
                "Presentation attack detection assesses whether this is a live person rather than a photograph, mask, replica or lifted print. Implementation and strength vary considerably by device."
              ]
            ],
            [
              [
                {
                  "b": "5"
                }
              ],
              [
                "Features are extracted"
              ],
              [
                "The algorithm locates the distinctive characteristics (ridge endings and bifurcations for fingerprints, geometric relationships for faces) and encodes them as a numeric template. The original image is discarded."
              ]
            ],
            [
              [
                {
                  "b": "6"
                }
              ],
              [
                "Template is matched"
              ],
              [
                "The extracted template is compared against stored templates, on the device or on a server, producing a similarity score."
              ]
            ],
            [
              [
                {
                  "b": "7"
                }
              ],
              [
                "Decision against threshold"
              ],
              [
                "If the score exceeds the configured threshold the person is identified. If not, the attempt is rejected and a retry is prompted."
              ]
            ],
            [
              [
                {
                  "b": "8"
                }
              ],
              [
                "Attendance event is written"
              ],
              [
                "User identifier, date, time, direction, device identifier and verification method are recorded in the transaction log."
              ]
            ],
            [
              [
                {
                  "b": "9"
                }
              ],
              [
                "Feedback is given"
              ],
              [
                "The display confirms, an audible or visual signal acknowledges, and any linked door relay is released."
              ]
            ],
            [
              [
                {
                  "b": "10"
                }
              ],
              [
                "Event is transferred"
              ],
              [
                "The device pushes the record to the server, or the server polls the device. If the link is down, events queue in local memory and upload when it returns."
              ]
            ],
            [
              [
                {
                  "b": "11"
                }
              ],
              [
                "Rule engine applies policy"
              ],
              [
                "Shift assignment, grace periods, late marks, half-day thresholds, overtime and leave rules convert raw events into an attendance status."
              ]
            ],
            [
              [
                {
                  "b": "12"
                }
              ],
              [
                "Reports and payroll output"
              ],
              [
                "Registers, exception queues and payable-day data are produced for the pay cycle and exported to payroll or HR systems."
              ]
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "Two observations about this sequence are worth carrying forward. Steps 1 to 9 happen at the device and are essentially identical everywhere. Steps 10 to 12 are where organisational and jurisdictional variation lives, in the transport, in the rules, and in what may be retained and for how long."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "how-biometric-identification-actually-works",
      "h2": "How Biometric Identification Actually Works",
      "blocks": [
        {
          "type": "h3",
          "text": "Enrollment: creating the template"
        },
        {
          "type": "p",
          "parts": [
            "Enrollment is the single most consequential step in the life of a biometric deployment, and the one most often rushed. The device takes multiple samples of the same characteristic and builds a reference template from them. A template built from poor samples (a partially placed finger, a face captured against a bright window, a hurried session during an induction queue) produces a user who is rejected repeatedly for months afterwards, and no amount of later configuration repairs it."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Two practices make the difference. Enrol more than one characteristic per person where the modality allows, so a cut, a bandage or a temporary change does not lock someone out. And record a ",
            {
              "b": "failure-to-enrol rate"
            },
            " during the enrollment campaign, the proportion of people for whom a usable template could not be created at all. That number is the most useful early indicator a deployment produces, because it sizes the fallback population before the system goes live rather than after."
          ]
        },
        {
          "type": "h3",
          "text": "Why the raw image is not stored"
        },
        {
          "type": "p",
          "parts": [
            "This is the most common misunderstanding about biometric attendance, and the answer is worth stating plainly: ",
            {
              "b": "the device does not keep a picture of your fingerprint or your face."
            }
          ]
        },
        {
          "type": "p",
          "parts": [
            "During feature extraction, the algorithm identifies specific characteristics, for fingerprints, the minutiae points where ridges end or split, together with their relative positions and orientations. These are encoded as a set of numbers. That numeric template is what is retained; the original image is discarded. The process is deliberately one-way: a template contains enough information to recognise the same characteristic again, but not enough to reconstruct the original image from it. The same principle applies to face, palm vein and iris."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Three further properties are usually specified alongside this, and they should be stated as requirements rather than assumed. Templates should be encrypted at rest and in transit using a recognised symmetric algorithm. Template formats are generally proprietary to the algorithm, which has an implication worth knowing at procurement: templates do not usually transfer between vendors, so a change of platform often means re-enrolling the workforce. And access to biometric and attendance data should be governed by role-based permissions with an audit trail on every view, export and deletion."
          ]
        },
        {
          "type": "h3",
          "text": "Matching: 1:1 verification vs 1:N identification"
        },
        {
          "type": "p",
          "parts": [
            "There are two distinct matching modes, and they behave very differently at scale:"
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "1:1 verification"
              },
              ": the user first asserts an identity with a card, a token or an identifier, then presents the biometric. The system compares against one stored template only. Speed and discrimination are unaffected by how many people are enrolled."
            ],
            [
              {
                "b": "1:N identification"
              },
              ": the user presents only the biometric and the system searches the whole enrolled set for a match. More convenient, because nothing else is needed, but the search space grows with headcount, and with it both the matching time and the probability of a close but wrong match."
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "The practical consequence is that 1:N is excellent at small and moderate population sizes and degrades as the enrolled set grows. Large deployments respond by moving to 1:1, by partitioning users across terminals so each device holds only its own population, or by moving matching to a server with the processing capacity to search a large set quickly. All three are legitimate; which is right is a topology decision, covered next."
          ]
        },
        {
          "type": "h3",
          "text": "Thresholds, false accepts and false rejects"
        },
        {
          "type": "p",
          "parts": [
            "Biometric matching produces a similarity score, not a yes or no. The threshold decides where the line falls, and moving it trades one error against the other:"
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "False Acceptance Rate (FAR)"
              },
              ": how often the wrong person is accepted. Lowering it means raising the threshold."
            ],
            [
              {
                "b": "False Rejection Rate (FRR)"
              },
              ": how often the right person is rejected. Lowering it means relaxing the threshold."
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "The two move in opposite directions and cannot both be minimised; the point at which they are equal is sometimes quoted as an equal error rate, which is useful for comparing algorithms but is not where a real deployment is usually set. A door protecting a sensitive area is tuned for low FAR and accepts that legitimate users will occasionally need a second attempt. A high-throughput entrance at shift change is usually tuned the other way, because a long queue cannot absorb repeated retries."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Two cautions belong here. Published accuracy figures relate to specific test conditions, populations and threshold settings, and should never be read as an assurance of how a particular site will perform. And the threshold is a site decision that should be recorded in the commissioning documentation, because an undocumented threshold change is one of the hardest later problems to diagnose."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "biometric-modalities-compared",
      "h2": "Biometric Modalities Compared",
      "blocks": [
        {
          "type": "table",
          "head": [
            "Modality",
            "How it identifies",
            "Typically suited to",
            "Principal limitation"
          ],
          "rows": [
            [
              [
                "Fingerprint"
              ],
              [
                "Optical or capacitive sensor images ridge patterns; minutiae are extracted as the template"
              ],
              [
                "Office, retail, administrative and general-purpose populations with clean, uncovered hands"
              ],
              [
                "Ridge detail genuinely worn by manual work, chemicals or age; performance falls with wet, dry or damaged skin"
              ]
            ],
            [
              [
                "Face"
              ],
              [
                "Camera pair with infrared captures facial geometry; contactless and workable in low light"
              ],
              [
                "Contactless requirements, higher-footfall entrances, hygiene-sensitive settings, gloved workforces"
              ],
              [
                "Strongly affected by installation lighting; face coverings and significant appearance change require re-enrollment or a fallback"
              ]
            ],
            [
              [
                "Palm vein"
              ],
              [
                "Near-infrared imaging of the subsurface vein pattern of the palm"
              ],
              [
                "Settings where surface fingerprints are unreliable, manual labour, chemical handling, wet work"
              ],
              [
                "Larger and generally more expensive sensor footprint; fewer device options; positioning needs user familiarity"
              ]
            ],
            [
              [
                "Iris"
              ],
              [
                "Specialised camera reads the iris pattern at short range, fully contactless"
              ],
              [
                "Clinical and controlled areas, and staff in gloves, masks and protective equipment"
              ],
              [
                "Presentation distance and user cooperation matter; eyewear and some conditions affect capture"
              ]
            ],
            [
              [
                "Card or token"
              ],
              [
                "Reads an identifier from a contactless credential"
              ],
              [
                "Large temporary, contractor or visiting populations; also used as the first factor in 1:1 matching"
              ],
              [
                "Verifies the credential, not the person, so it does not prevent one person presenting another's card"
              ]
            ],
            [
              [
                "Multi-modal"
              ],
              [
                "Combines several of the above in one terminal, by user or by policy"
              ],
              [
                "Mixed workforces where no single method serves everyone"
              ],
              [
                "More to configure, enrol and support; the fallback policy must be explicit or it becomes ad hoc"
              ]
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "No single modality serves every workforce, which is why multi-modal terminals exist. A manufacturing population may find that fingerprint recognition fails for a meaningful share of shop-floor staff whose ridge detail is genuinely worn by the work, a recognised limitation, not a device fault. Those users are better served by face, palm or a card credential, and planning for them is Step 4 of the specification method below."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "deployment-topology-on-device-matching-vs-server-side-matching",
      "h2": "Deployment Topology: On-Device Matching vs Server-Side Matching",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "Where the template lives and where the comparison happens is a design decision with consequences for availability, scale and data protection. It is rarely presented as a choice, which is why it is worth setting out explicitly."
          ]
        },
        {
          "type": "table",
          "head": [
            "Aspect",
            "On-device matching",
            "Server-side matching"
          ],
          "rows": [
            [
              [
                "Where templates are held"
              ],
              [
                "On each terminal, usually with a copy held centrally for distribution and recovery"
              ],
              [
                "Centrally, with the terminal acting as a capture device"
              ]
            ],
            [
              [
                "Behaviour without a network"
              ],
              [
                "Continues fully, identification does not depend on the link"
              ],
              [
                "Degrades or stops, unless the terminal caches a local subset"
              ]
            ],
            [
              [
                "Scale behaviour"
              ],
              [
                "1:N search is bounded by terminal processing and template capacity"
              ],
              [
                "Large enrolled sets searched quickly with server resources"
              ]
            ],
            [
              [
                "Enrollment distribution"
              ],
              [
                "Templates must be pushed to every terminal a user may use"
              ],
              [
                "One enrollment is immediately usable at every terminal"
              ]
            ],
            [
              [
                "Data protection posture"
              ],
              [
                "Templates distributed across many physical devices, each of which must be secured and wiped on disposal"
              ],
              [
                "Templates concentrated in one controlled location, which is easier to govern and to delete on request"
              ]
            ],
            [
              [
                "Typical fit"
              ],
              [
                "Remote or poorly connected sites, moderate populations, deployments where attendance must never stop"
              ],
              [
                "Large multi-site estates, large enrolled populations, and jurisdictions where centralised control of biometric data is required or preferred"
              ]
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "A third arrangement is worth knowing: ",
            {
              "b": "match-on-card"
            },
            ", where the template is held on a credential carried by the individual and the comparison happens against that, so no central or device-held biometric database exists at all. It adds credential management overhead and it does not suit every workforce, but where the applicable rules push hard toward data minimisation it is sometimes the only architecture that satisfies them."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Most real estates run a hybrid: on-device matching at sites that must keep working through an outage, server-side matching where populations are large, and a single rule engine behind both. The requirement to state is the behaviour, not the product, what must still work when the link drops, and where templates may be held."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "how-attendance-data-reaches-the-software",
      "h2": "How Attendance Data Reaches the Software",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "Once an event is recorded it has to reach the server, and there are two models:"
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Push"
              },
              ": the device initiates the connection and sends each event as it happens, or in short batches. This gives near real-time data and works when devices sit behind routers on remote sites, because the device dials out rather than waiting to be reached."
            ],
            [
              {
                "b": "Pull"
              },
              ": the server polls each device on a schedule and downloads accumulated events. Simpler to manage on a single flat network, but data is only as current as the last poll."
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "Physical connectivity is typically Ethernet or Power over Ethernet, Wi-Fi, cellular data for sites without structured cabling, or RS-485 for multi-device runs within a building. Export to removable media remains a fallback where there is no network at all. On any deployment crossing a public network, transport security and device authentication are specification items, an attendance feed is personal data in motion."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Critically, terminals hold events in local memory when the connection drops. Events continue to be recorded during an outage and upload when the link returns, so a network failure delays the data rather than losing it. The practical limit is the device's log capacity, which is why that depth should be sized against the longest credible outage at peak punch rate rather than against an average day."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "what-the-software-rule-engine-does-with-the-data",
      "h2": "What the Software Rule Engine Does With the Data",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "The raw event is an identifier and a timestamp. The rule engine turns it into meaning:"
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Shift resolution"
              },
              ": matching each event to the correct shift, including night shifts crossing midnight, rotating rosters and multi-time-zone estates."
            ],
            [
              {
                "b": "Policy application"
              },
              ": grace periods, late marks, early-departure rules and half-day thresholds applied as configured policy rather than case-by-case judgement."
            ],
            [
              {
                "b": "Overtime calculation"
              },
              ": hours beyond the assigned shift, computed under the applicable rule and subject to any pre-approval requirement."
            ],
            [
              {
                "b": "Leave reconciliation"
              },
              ": approved absence matched against the register so the attendance record and the leave ledger agree."
            ],
            [
              {
                "b": "Exception handling"
              },
              ": missed events and anomalies raised as a review queue, with every correction logged and attributed to whoever made it."
            ],
            [
              {
                "b": "Reporting and export"
              },
              ": registers, management views and payable-day data exported to payroll or HR systems in the format they expect."
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "Two points matter internationally. Working-time rules, overtime definitions, rest-period requirements and record-keeping duties are set by national employment law and differ substantially, so the rule engine's configurability (not its default rule set) is what determines whether a platform can serve a multi-country estate. And every manual correction should be attributable, because an attendance record that can be edited without trace is of limited value in a dispute."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "how-to-specify-an-attendance-deployment-for-any-site",
      "h2": "How to Specify an Attendance Deployment for Any Site",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "Most attendance deployments that disappoint were specified by choosing a device and discovering the requirements afterwards. The method below runs the other way: six determinations made in order, each constraining the next, none of which begins with a product. It is deliberately independent of country, vendor and product range."
          ]
        },
        {
          "type": "h3",
          "text": "Step 1, Profile the workforce before choosing a modality"
        },
        {
          "type": "p",
          "parts": [
            "Modality selection is a property of the people, not of the technology. Build the profile first, in writing:"
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "What the hands and faces actually look like at the point of use."
              },
              " Manual work, chemical and solvent exposure, wet processes and age all wear ridge detail. Gloves, masks, hairnets, helmets and eye protection may be mandatory and non-removable at the entrance. Record what people are actually wearing when they arrive."
            ],
            [
              {
                "b": "Population size and turnover."
              },
              " A stable population of a few hundred and a contractor population turning over every few weeks generate completely different enrollment loads, and turnover is the figure most often omitted from a brief."
            ],
            [
              {
                "b": "Who must be covered."
              },
              " Permanent staff, shift workers, contractors, agency staff, visitors and drivers may each need a different treatment, and some may not be enrollable at all for policy reasons."
            ],
            [
              {
                "b": "Hygiene and contact requirements."
              },
              " Food handling, clinical and some manufacturing settings constrain or prohibit contact modalities."
            ],
            [
              {
                "b": "Accessibility."
              },
              " Some users cannot present a given characteristic at all, whether permanently or temporarily. An inclusive design assumes this rather than discovering it."
            ],
            [
              {
                "b": "Expected failure-to-enrol rate."
              },
              " Estimate it from the profile above, then measure it during a pilot. This number drives Step 4."
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "Only now is a modality choice meaningful. Map each population segment to the modality that suits it, and accept that a mixed workforce will usually produce a mixed answer, which is an argument for multi-modal terminals or a mixed estate, not a problem to be engineered away."
          ]
        },
        {
          "type": "h3",
          "text": "Step 2, Size throughput for the peak shift change"
        },
        {
          "type": "p",
          "parts": [
            "Terminal count is arithmetic, and the arithmetic is simple enough to do on one line, but it must be done against the peak, never the daily total."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Establish the peak arrival window."
              },
              " How many people must be processed, and over how many minutes. A plant with three shift changes has three sharp peaks; an office has one long shallow one. The same headcount produces very different requirements."
            ],
            [
              {
                "b": "Establish the transaction time per person:"
              },
              " measured end to end: approach, present, match, feedback, clear. This is longer than the matching time quoted on a datasheet, often by several times, because it includes human behaviour."
            ],
            [
              {
                "b": "Compute terminal throughput"
              },
              " as 60 divided by the transaction time in seconds, giving people per minute per terminal."
            ],
            [
              {
                "b": "Divide the peak arrivals by the window and by that throughput"
              },
              " to get the terminal count, then add margin. A deployment sized exactly to its peak has no capacity for a failed read, a retry or a terminal out of service."
            ],
            [
              {
                "b": "Blend in the retry rate."
              },
              " As with any queue, the slow transactions dominate: if a small percentage of attempts take several times as long, they consume a disproportionate share of the window. Size for the blended time, not the clean one."
            ],
            [
              {
                "b": "Check the physical queue."
              },
              " Terminals produce a queue somewhere. Verify that the space in front of them can hold it without obstructing a doorway, a walkway or an escape route, which is a building design question as much as an equipment one."
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "The output of this step should be an explicit sentence: the number of terminals, the lanes they occupy, and the peak they are sized for. That is the figure a reviewer can challenge."
          ]
        },
        {
          "type": "h3",
          "text": "Step 3, Choose the deployment topology"
        },
        {
          "type": "p",
          "parts": [
            "Decide, and write down, where templates are held and where matching happens, using the comparison earlier on this page. The determining questions are:"
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "What must still work when the network is unavailable?"
              },
              " If attendance must continue at a remote site through a day-long outage, matching has to be local and the log depth has to carry it."
            ],
            [
              {
                "b": "How large is the enrolled set at any one terminal:"
              },
              " and does 1:N matching remain fast and discriminating at that size? If not, partition users, adopt 1:1, or move matching to a server."
            ],
            [
              {
                "b": "Where may templates lawfully be held:"
              },
              " and does the applicable regime push toward centralisation, toward device-level storage, or toward holding nothing centrally at all? This question belongs to Step 5 and frequently overrides the engineering preference."
            ],
            [
              {
                "b": "How is a user removed?"
              },
              " Deletion must reach every location a template exists. A topology without a reliable deletion path is a topology that cannot honour a deletion obligation."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Step 4, Define the fallback for users no single modality serves"
        },
        {
          "type": "p",
          "parts": [
            "Every deployment has a minority for whom the chosen modality does not work, reliably, or at all. Designing for them is not an edge case; it is the difference between a system people trust and one they resent."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Define the secondary modality"
              },
              " for the failure-to-enrol population identified in Step 1, and provision terminals that support it where those users actually work."
            ],
            [
              {
                "b": "Define the tertiary path"
              },
              " (a card or token credential, or a supervised manual entry) for users no biometric modality serves. It should be a normal, dignified route, not an exception requiring a conversation each time."
            ],
            [
              {
                "b": "Define the temporary path"
              },
              " for injuries, bandages, temporary appearance change and forgotten credentials. This is the most-used fallback in practice and the least often designed."
            ],
            [
              {
                "b": "Make manual entries attributable."
              },
              " Every manual or supervisor-entered event should record who entered it and why, so the audit trail survives."
            ],
            [
              {
                "b": "Never resolve an individual's failures by relaxing the threshold for everyone."
              },
              " That trades a personal inconvenience for a system-wide weakening, and it is the most common bad fix in this category. Re-enrol the user, or move them to another modality."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Step 5, Establish the jurisdiction's data-handling requirements"
        },
        {
          "type": "p",
          "parts": [
            "This step is not an afterthought and it is not a legal formality to be completed after the hardware arrives. In many countries it determines whether the deployment may use biometrics at all, and in others it determines the topology, the retention period and the consent arrangement. Establish, in writing and from a competent local source:"
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Whether biometric data is treated as a special or sensitive category"
              },
              " in that jurisdiction, and what that classification requires."
            ],
            [
              {
                "b": "The lawful basis for processing it"
              },
              " in an employment relationship, and in particular whether employee consent is regarded as valid where there is an imbalance of power, because in several regimes it is not, which changes the entire design."
            ],
            [
              {
                "b": "Whether a less intrusive alternative must be offered"
              },
              " to employees who object, and what that alternative must be."
            ],
            [
              {
                "b": "Whether a formal assessment is required"
              },
              " before processing begins, and who must approve or be notified."
            ],
            [
              {
                "b": "Retention and deletion obligations"
              },
              ": how long templates and attendance records may be kept, and what must happen when a person leaves."
            ],
            [
              {
                "b": "Transfer restrictions"
              },
              ": whether templates or attendance records may leave the country, which directly constrains cloud hosting and any centralised multi-country platform."
            ],
            [
              {
                "b": "Information duties"
              },
              ": what must be told to employees, in what form, and when."
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "Write the answers into the specification as requirements. \"Templates held within the country of operation\", \"no raw images retained\", \"records deleted after a stated period following departure\", \"alternative non-biometric method available on request\" are specification lines, and a supplier can answer them. A specification that omits them leaves the organisation to discover its obligations after the system is installed, which is where this technology most often goes wrong."
          ]
        },
        {
          "type": "h3",
          "text": "Step 6, Fix the environmental and installation envelope"
        },
        {
          "type": "p",
          "parts": [
            "The last step is the physical one, and it is where otherwise sound deployments underperform:"
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Lighting at face terminals."
              },
              " A terminal facing a window or direct sun will underperform regardless of specification. Fix orientation and controlled illumination at design stage, this is the most common single cause of poor face recognition in service."
            ],
            [
              {
                "b": "Mounting height and reach:"
              },
              " set for the actual range of user heights at that site and for wheelchair users where applicable."
            ],
            [
              {
                "b": "Environmental protection"
              },
              " appropriate to the location: ingress protection for outdoor, dusty or wash-down areas, and a device rated for the ambient temperature range rather than an office assumption."
            ],
            [
              {
                "b": "Power and network provision:"
              },
              " including backup where attendance must continue through an outage."
            ],
            [
              {
                "b": "Time synchronisation"
              },
              " across all terminals, with the behaviour across time zones and seasonal clock changes defined for multi-site estates."
            ],
            [
              {
                "b": "Enrollment logistics"
              },
              ": a quiet, well-lit space, enough time per person, trained operators, and a defined process for joiners after go-live. Enrollment done badly at go-live generates support calls for the following year."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Writing it down: a six-line deployment schedule"
        },
        {
          "type": "p",
          "parts": [
            "The six determinations condense into a schedule that can be issued with a tender and answered unambiguously by any competent supplier."
          ]
        },
        {
          "type": "table",
          "head": [
            "Line",
            "States",
            "Example of a well-formed entry"
          ],
          "rows": [
            [
              [
                "1 · Workforce and modality"
              ],
              [
                "Population segments, size and turnover, modality per segment, expected failure-to-enrol rate"
              ],
              [
                "\"Shop floor on face and palm; administrative staff on fingerprint; contractors on card; failure-to-enrol rate to be measured during a pilot and reported\""
              ]
            ],
            [
              [
                "2 · Throughput"
              ],
              [
                "Peak arrivals, window length, assumed transaction time, resulting terminal count and margin"
              ],
              [
                "\"Peak arrivals over a 12-minute window; blended transaction time stated; terminal count derived with one spare lane per entrance\""
              ]
            ],
            [
              [
                "3 · Topology"
              ],
              [
                "Where templates are held, where matching happens, offline behaviour, log depth, deletion path"
              ],
              [
                "\"On-device matching with central distribution; full operation for a stated offline period; log depth sized to that period at peak rate; deletion propagates to every device\""
              ]
            ],
            [
              [
                "4 · Fallback"
              ],
              [
                "Secondary modality, non-biometric path, temporary path, attribution of manual entries"
              ],
              [
                "\"Card credential available to any user on request; supervisor entry attributable and reportable; threshold not to be altered to resolve individual failures\""
              ]
            ],
            [
              [
                "5 · Data handling"
              ],
              [
                "Classification of the data, lawful basis, alternative provision, retention, transfer limits, information duties"
              ],
              [
                "\"Templates and records held within the country of operation; retention period stated; non-biometric alternative offered; employee information notice issued before enrollment\""
              ]
            ],
            [
              [
                "6 · Environment and installation"
              ],
              [
                "Lighting and orientation, mounting, ingress and temperature rating, power, network, time synchronisation"
              ],
              [
                "\"No terminal to face a glazed elevation; stated ingress rating at external doors; synchronised to a common time source with seasonal change behaviour defined\""
              ]
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "A supplier who can answer all six lines against specific models has told you something useful. A supplier who answers only with a model name and an accuracy figure has not."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "biometric-data-regulation-is-a-specification-input-not-an-afterthought",
      "h2": "Biometric Data Regulation Is a Specification Input, Not an Afterthought",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "Of everything on this page, this is the subject where international readers are most often misled, usually by material written for a single country and read in another. ",
            {
              "b": "There is no common international rule for workplace biometrics."
            },
            " The legal position differs sharply from country to country, and in some cases between regions within one country."
          ]
        },
        {
          "type": "p",
          "parts": [
            "The axes of variation are predictable even though the answers are not. Some regimes classify biometric data as a special category requiring a specific lawful basis and a formal impact assessment before processing begins. Some regard employee consent as incapable of being freely given because of the imbalance of power in an employment relationship, which removes consent as a basis entirely and requires a different justification. Some require that a non-biometric alternative be offered to anyone who objects. Some impose retention limits and deletion duties on departure. Some restrict transfer of the data out of the country, which constrains where a platform may be hosted. Some require notification to, or authorisation from, a supervisory authority. And in some jurisdictions there are specific statutory schemes governing biometric identifiers with their own enforcement routes."
          ]
        },
        {
          "type": "p",
          "parts": [
            "The practical consequences for a specifier are concrete rather than abstract. The lawful basis determines whether an alternative method must be provisioned, which changes the terminal mix. Transfer restrictions determine whether a centralised multi-country platform is usable at all. Retention rules determine the deletion design, which must reach every device holding a template. And the classification of the data determines how much assessment and documentation must exist before the first enrollment, not after."
          ]
        },
        {
          "type": "p",
          "parts": [
            "The instruction that follows is simple and applies everywhere: ",
            {
              "b": "establish the position for the country of operation, in writing, from a competent local source, before the specification is issued."
            },
            " On a multi-country estate, establish it for each country, because a design that satisfies one may be unlawful in another. Nothing on this page is legal advice, and no description here should be relied on as a statement of the requirements in any particular jurisdiction."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "environmental-conditions-that-degrade-capture",
      "h2": "Environmental Conditions That Degrade Capture",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "Biometric capture is an optical and electrical measurement, and measurements degrade in the real world. Published performance figures assume reference conditions; a working entrance rarely matches them. The mechanisms below are general and apply in any climate."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Strong or uneven lighting"
              },
              " is the dominant cause of poor face recognition in service. A bright window behind the user, direct sun on the sensor or heavy shadow across the face all reduce usable contrast. This is an installation problem with an installation fix: orientation, shading and controlled illumination."
            ],
            [
              {
                "b": "Dust and particulates"
              },
              " accumulate on fingerprint platens and camera windows, scattering light and reducing image quality until read rates fall gradually, so gradually that users adapt before anyone investigates. Cleaning frequency should follow the environment rather than the calendar."
            ],
            [
              {
                "b": "Moisture and wet hands"
              },
              " flood the contact area on optical sensors and bridge ridges on capacitive ones. Very dry skin produces the opposite problem, with too little contact. Both are common in cold or arid conditions and in wash-down environments, and both argue for a contactless modality."
            ],
            [
              {
                "b": "High ambient temperature"
              },
              " shortens the life of electronics in a wall-mounted terminal, particularly where the device sits in direct sun on an external wall. Shading and orientation are the usual responses, along with a device rated for the actual temperature range."
            ],
            [
              {
                "b": "Low temperature"
              },
              " affects both device and user: displays and batteries behave differently, and cold fingers present poorly. Where terminals serve an unheated entrance, this is a modality consideration rather than only a device rating one."
            ],
            [
              {
                "b": "Coastal and industrial atmospheres"
              },
              " corrode enclosures, fasteners and connectors over time. Where terminals are external or near an open loading area, enclosure material and coating are specification items."
            ],
            [
              {
                "b": "Electrical disturbance"
              },
              " on long cable runs and shared supplies affects terminals as it does any outdoor electronics, so earthing and surge provision matter where entrances are remote from the distribution board."
            ]
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "standards-and-conformity-what-applies-where",
      "h2": "Standards and Conformity: What Applies Where",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "As with the data rules above, requirements for attendance terminals are set jurisdictionally. There is no single global standard governing the category, and a conformity mark mandatory in one region carries no automatic legal status in another."
          ]
        },
        {
          "type": "table",
          "head": [
            "Regime",
            "What it typically governs",
            "What the specifier must establish"
          ],
          "rows": [
            [
              [
                "Data protection and privacy"
              ],
              [
                "Classification of biometric data, lawful basis, consent validity, assessments, retention, deletion, transfer and information duties"
              ],
              [
                "The position in the country of operation, established from a competent local source before the specification is issued."
              ]
            ],
            [
              [
                "Employment and working-time rules"
              ],
              [
                "What attendance records must be kept, in what form and for how long, and how working time, rest and overtime are defined"
              ],
              [
                "The record-keeping duty and the working-time definitions the rule engine must be able to express."
              ]
            ],
            [
              [
                "Electrical safety and installation"
              ],
              [
                "Supply voltage and frequency, protective devices, earthing, cable selection, isolation and labelling"
              ],
              [
                "National wiring regulations, and who is competent and licensed to install and certify."
              ]
            ],
            [
              [
                "Electromagnetic compatibility"
              ],
              [
                "That the equipment neither emits excessive interference nor malfunctions in the presence of normal interference"
              ],
              [
                "Which EMC regime applies in the country of installation."
              ]
            ],
            [
              [
                "Radio equipment approval"
              ],
              [
                "Wi-Fi, cellular and contactless card interfaces: permitted bands and radiated power limits"
              ],
              [
                "The national allocation and limits, and that the supplied variant is the one permitted there."
              ]
            ],
            [
              [
                "Regional product conformity marking"
              ],
              [
                "Market access marking schemes, which differ by region and sometimes require in-country testing, registration or a local representative"
              ],
              [
                "Which scheme applies to this product category in this market, and what evidence the importer must hold."
              ]
            ],
            [
              [
                "Life safety and fire authority approval"
              ],
              [
                "Behaviour of any door the terminal controls on alarm, and the interface to the alarm system"
              ],
              [
                "The local authority's expectations where the terminal has an access control relay, established before the design is fixed."
              ]
            ],
            [
              [
                "Accessibility requirements"
              ],
              [
                "Reach ranges, interface accessibility and the availability of an alternative method"
              ],
              [
                "The applicable accessibility rules for workplaces and for the building type."
              ]
            ],
            [
              [
                "Biometric performance and format standards"
              ],
              [
                "Test methodologies for accuracy and presentation attack detection, and interchange formats for templates"
              ],
              [
                "Whether the organisation requires independently tested performance or a standard interchange format, and whether the candidate products support it."
              ]
            ]
          ]
        },
        {
          "type": "note",
          "parts": [
            "Nothing on this page should be read as a statement that any particular product holds any particular approval, certification or conformity status, or that any deployment satisfies any legal requirement. Approval status is a question for the supplier of the specific model in the specific market, and the legal position is a question for competent local advice. Both should be confirmed in writing before a specification is issued."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "where-attendance-machines-are-used",
      "h2": "Where Attendance Machines Are Used",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "The same technology serves very different populations, and each setting has a characteristic specification profile:"
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Corporate offices and professional services"
              },
              ": stable populations, modest throughput, attendance linked directly to payroll and HR systems, and privacy communication that matters more than raw performance."
            ],
            [
              {
                "b": "Manufacturing plants"
              },
              ": sharp shift-change peaks that dominate throughput sizing, worn ridge detail on shop-floor staff that pushes modality selection toward face or palm, and particulate-laden air that drives maintenance frequency."
            ],
            [
              {
                "b": "Logistics and distribution centres"
              },
              ": large contractor and agency populations with high turnover, which makes enrollment load and credential revocation the dominant design problems."
            ],
            [
              {
                "b": "Hospitals and healthcare campuses"
              },
              ": gloves, masks and protective equipment rule out contact modalities at many points, and clinical areas constrain where terminals may be placed at all."
            ],
            [
              {
                "b": "Universities and educational campuses"
              },
              ": large, seasonally changing populations with high annual turnover, which pushes toward methods that are simple to issue and revoke."
            ],
            [
              {
                "b": "Retail and hospitality chains"
              },
              ": many small sites, often with poor connectivity, which is a strong argument for on-device matching and generous local log depth."
            ],
            [
              {
                "b": "Construction and project sites"
              },
              ": temporary, mobile and connectivity-limited, usually served by portable or cellular-connected terminals with a short deployment life."
            ],
            [
              {
                "b": "Government and institutional facilities"
              },
              ": auditable records, formal retention duties, and frequently a requirement that the data stays within defined boundaries."
            ],
            [
              {
                "b": "Multi-country corporate estates"
              },
              ": the hardest case, because the rule engine must express several national working-time regimes and the topology must satisfy several data regimes at once."
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "TimeWatch supplies biometric attendance terminals and related access control equipment internationally, and maintains dedicated regional sites for several markets, see the regional guidance below for where to look for locally relevant information."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "integration-possibilities",
      "h2": "Integration Possibilities",
      "blocks": [
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Payroll and HR systems"
              },
              ": attendance exported as payable days, overtime hours and leave adjustments, in the format the receiving system expects."
            ],
            [
              {
                "b": "Access control"
              },
              ": the same terminal releasing a door, so one credential governs both time and entry, with different rules applied to each function."
            ],
            [
              {
                "b": "Identity and directory services"
              },
              ": joiners, movers and leavers propagated automatically, so a departure removes access and triggers the deletion process rather than relying on a manual step."
            ],
            [
              {
                "b": "Canteen and entitlement systems"
              },
              ": the same identity used at a meal counter with entitlement rules applied automatically."
            ],
            [
              {
                "b": "Visitor management"
              },
              ": staff and visitor movement recorded against one system for a complete on-site picture, particularly where a headcount is needed during an evacuation."
            ],
            [
              {
                "b": "ERP and project systems"
              },
              ": labour hours booked against projects, jobs or departmental codes."
            ],
            [
              {
                "b": "Video systems"
              },
              ": footage bookmarked against events for verification where that is permitted by the applicable rules, which is not everywhere."
            ],
            [
              {
                "b": "Mobile and location-bounded attendance"
              },
              ": field staff recording attendance from a device within a permitted boundary, which raises its own data questions and should be assessed alongside the terminals."
            ]
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "installation-and-maintenance-considerations",
      "h2": "Installation and Maintenance Considerations",
      "blocks": [
        {
          "type": "h3",
          "text": "Installation"
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Orientation and lighting"
              },
              ": never site a face terminal facing a glazed elevation or direct sun. Verify at the time of day the peak occurs, not at midday."
            ],
            [
              {
                "b": "Mounting height and reach"
              },
              ": set for the actual user population and for wheelchair users where applicable."
            ],
            [
              {
                "b": "Queue space"
              },
              ": confirm the queue a terminal generates can stand somewhere that does not obstruct a doorway, walkway or escape route."
            ],
            [
              {
                "b": "Terminal count and lane layout"
              },
              ": placed as sized in Step 2, with entry and exit separated where traffic is bidirectional."
            ],
            [
              {
                "b": "Network and power"
              },
              ": Ethernet or Power over Ethernet where available, cellular where not, with backup power where attendance must continue through an outage."
            ],
            [
              {
                "b": "Environmental protection"
              },
              ": rated enclosures for outdoor, dusty or wash-down locations; direct rain exposure and temperature extremes shorten sensor life."
            ],
            [
              {
                "b": "Door interface"
              },
              ": where the terminal controls a door, the fail-state on power loss must be reconciled with the building's life-safety strategy, and tested."
            ],
            [
              {
                "b": "Enrollment campaign"
              },
              ": space, time, trained operators and a process for joiners afterwards, planned as a project rather than squeezed into go-live week."
            ],
            [
              {
                "b": "Commissioning record"
              },
              ": threshold settings, topology, log depth, time source and fallback policy recorded in writing and handed over."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Maintenance"
        },
        {
          "type": "ul",
          "items": [
            [
              "Clean sensor surfaces and camera windows on a frequency set by the environment. Contamination on a platen is the most frequent cause of gradually worsening read rates."
            ],
            [
              "Re-enrol users who fail repeatedly, rather than relaxing the threshold for everyone."
            ],
            [
              "Keep firmware current for algorithm and presentation attack detection improvements, with changes recorded."
            ],
            [
              "Verify time synchronisation. A terminal whose clock has drifted produces subtly wrong attendance for everyone using it, and the error is hard to spot downstream."
            ],
            [
              "Monitor transaction log capacity and confirm events are uploading, particularly after any network change."
            ],
            [
              "Back up the template database and confirm the restore process works before it is needed."
            ],
            [
              "Review rejection rates per terminal and per user. A rising rate on one terminal points at the device or its environment; a persistently high rate for one user points at enrollment."
            ],
            [
              "Confirm that leaver deletion has actually propagated to every device, on a defined audit cycle rather than on trust."
            ],
            [
              "Check door relay and backup battery function where the terminal also controls access."
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
              "A credential that cannot be handed to a colleague, which removes the substitution problem that cards and codes cannot solve."
            ],
            [
              "Accurate, timestamped records that remove disputes over arrival and departure times."
            ],
            [
              "Removal of manual register entry and the reconciliation effort that follows it."
            ],
            [
              "A direct feed to payroll, so any payable figure traces back to the individual event behind it."
            ],
            [
              "Multi-site and multi-shift data consolidated into one view under one rule set."
            ],
            [
              "Support for record-keeping and audit duties, with corrections attributable to whoever made them."
            ],
            [
              "Continued operation during a network outage where on-device matching is used, so attendance is delayed rather than lost."
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
                "b": "No biometric modality works for everyone."
              },
              " Worn ridge detail, gloves, facial coverings and individual variation each defeat specific methods. A fallback is a design requirement, not a courtesy."
            ],
            [
              {
                "b": "Enrollment quality determines everything downstream:"
              },
              " and poor initial capture cannot be corrected by configuration later."
            ],
            [
              {
                "b": "Throughput is finite:"
              },
              " and a large simultaneous shift change needs multiple terminals regardless of how fast any one of them is."
            ],
            [
              {
                "b": "1:N matching degrades as the enrolled set grows:"
              },
              " which is a topology problem rather than a product defect."
            ],
            [
              {
                "b": "Environment degrades capture"
              },
              ": lighting, dust, moisture and temperature all reduce real-world performance below published figures."
            ],
            [
              {
                "b": "Accuracy figures are configuration-dependent."
              },
              " Published FAR and FRR relate to specific test conditions and thresholds, and should never be read as an assurance of how a particular site will perform."
            ],
            [
              {
                "b": "Templates are generally not portable between vendors:"
              },
              " so a platform change often means re-enrolling the workforce, a point worth establishing before committing."
            ],
            [
              {
                "b": "The legal position differs by jurisdiction:"
              },
              " and in some countries constrains or prohibits arrangements that are routine in others. This is the constraint most likely to invalidate an otherwise sound design."
            ]
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "biometric-vs-card-attendance-what-is-the-difference",
      "h2": "Biometric vs Card Attendance: What Is the Difference?",
      "blocks": [
        {
          "type": "table",
          "head": [
            "",
            "Biometric attendance",
            "Card-based attendance"
          ],
          "rows": [
            [
              [
                {
                  "b": "What it verifies"
                }
              ],
              [
                "The person"
              ],
              [
                "The credential"
              ]
            ],
            [
              [
                {
                  "b": "Substitution by a colleague"
                }
              ],
              [
                "Prevented, the characteristic cannot be handed over"
              ],
              [
                "Possible, a card can be passed to someone else"
              ]
            ],
            [
              [
                {
                  "b": "Lost credential"
                }
              ],
              [
                "Not applicable"
              ],
              [
                "Cards are lost, forgotten and need reissuing, which is a continuing administrative load"
              ]
            ],
            [
              [
                {
                  "b": "Speed per user"
                }
              ],
              [
                "Typically under a second; 1:N slows as the enrolled set grows"
              ],
              [
                "Very fast and constant regardless of population size"
              ]
            ],
            [
              [
                {
                  "b": "Works for everyone"
                }
              ],
              [
                "No, some users are unsuitable for a given modality"
              ],
              [
                "Yes, for anyone issued a credential"
              ]
            ],
            [
              [
                {
                  "b": "Data handling burden"
                }
              ],
              [
                "Significant, biometric data is regulated differently and often more strictly than other personal data"
              ],
              [
                "Lower, an identifier on a card is ordinary personal data in most regimes"
              ]
            ],
            [
              [
                {
                  "b": "Typically suited to"
                }
              ],
              [
                "Permanent staff where attendance accuracy drives payroll"
              ],
              [
                "Large contractor or temporary populations, as a fallback, or as the first factor in 1:1 matching"
              ]
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "Many organisations run both: biometrics for permanent staff, credentials for contractors, visitors and the fallback population, with everything feeding one attendance database and one rule set. Where the applicable data rules make biometric processing difficult, a credential-based deployment with strong supervision remains a legitimate answer rather than a compromise."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "regional-guidance-india-saudi-arabia-and-the-uae",
      "h2": "Regional Guidance: India, Saudi Arabia and the UAE",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "This page is written to be useful anywhere, which means it deliberately avoids national specifics: local workforce patterns, local availability and support arrangements, local employment record-keeping duties and (most importantly here) local data protection requirements all differ, and generic advice on those subjects is worth less than none."
          ]
        },
        {
          "type": "p",
          "parts": [
            "For three markets, TimeWatch maintains dedicated regional sites with locally relevant versions of this guidance, local product availability and local support arrangements. If you are deploying in one of them, start there rather than here:"
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
                "href": "https://www.timewatchindia.com/how-does-an-attendance-machine-work",
                "label": "timewatchindia.com, How does an attendance machine work?"
              }
            ],
            [
              {
                "b": "Saudi Arabia"
              },
              ": ",
              {
                "href": "https://www.timewatcharabia.com/how-does-an-attendance-machine-work",
                "label": "timewatcharabia.com, How does an attendance machine work?"
              }
            ],
            [
              {
                "b": "United Arab Emirates"
              },
              ": ",
              {
                "href": "https://www.timewatchuae.com/how-does-an-attendance-machine-work",
                "label": "timewatchuae.com, How does an attendance machine work?"
              }
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "Readers elsewhere are in the right place. The mechanism, the modality selection method and the six-step specification method on this page are written to be applied to any workforce in any country, what you supply is your own workforce profile, your own peak, and the data-handling position for your jurisdiction, and the method does the rest."
          ]
        }
      ],
      "tone": "gray"
    }
  ],
  "faq": {
    "h2": "Frequently Asked Questions",
    "tone": "white",
    "items": [
      {
        "q": "Does an attendance machine store my fingerprint?",
        "a": "No. The device converts your fingerprint into a numeric template describing distinctive features such as ridge endings and their positions, then discards the original image. The template is a one-way representation, it can recognise the same finger again but cannot be used to reconstruct your fingerprint. Templates should additionally be encrypted at rest and in transit, which is a specification requirement rather than something to assume."
      },
      {
        "q": "How does a biometric machine recognise you?",
        "a": "It captures a sample, extracts the distinctive features into a numeric template, and compares that template against the templates created when you were enrolled. The comparison produces a similarity score rather than a yes or no. If the score exceeds the configured threshold, you are identified and an attendance event is recorded with your identifier and the exact time."
      },
      {
        "q": "Which biometric method should I choose for my workforce?",
        "a": "Choose it from the workforce rather than from the technology. Look at what hands and faces actually look like at the point of use (manual work and chemical exposure wear ridge detail, while gloves, masks and protective equipment rule out specific methods entirely) then map each population segment to a modality that suits it. A mixed workforce usually produces a mixed answer, which is why multi-modal terminals and mixed estates exist."
      },
      {
        "q": "What is the difference between 1:1 and 1:N matching?",
        "a": "In 1:1 verification the user first asserts an identity with a card, token or identifier and the system compares against that one stored template, so speed and discrimination are unaffected by population size. In 1:N identification the user presents only the biometric and the system searches the whole enrolled set, which is more convenient but degrades as the enrolled set grows. Large deployments respond by adopting 1:1, partitioning users across terminals, or moving matching to a server."
      },
      {
        "q": "Should matching happen on the device or on a server?",
        "a": "It depends on what must keep working and where templates may be held. On-device matching continues through a network outage and suits remote or poorly connected sites, but distributes templates across many physical devices and requires enrollment to be pushed to each. Server-side matching handles large enrolled sets quickly and concentrates the data in one controlled location, but degrades without a network unless the terminal caches a subset. Data protection requirements frequently decide this before engineering preference does."
      },
      {
        "q": "Can an attendance machine work without a network connection?",
        "a": "With on-device matching, yes. Identification happens on the terminal itself, so it continues with no network at all, and events are stored in local memory and upload automatically when the connection returns. The constraint is the log depth, which should be sized against the longest credible outage at peak punch rate rather than an average day. With server-side matching, the terminal depends on the link unless it holds a local cache."
      },
      {
        "q": "What happens if the fingerprint does not read?",
        "a": "The device rejects the attempt and prompts a retry. Repeated failures usually indicate a poor enrollment, a contaminated sensor, or a finger that is wet, dry, cut or worn. The remedies are cleaning the sensor, re-enrolling the user, or moving that person to another method such as face, palm or a card credential. Relaxing the threshold to resolve one person's failures weakens the system for everyone and should be avoided."
      },
      {
        "q": "Do the same rules apply to biometric attendance data in every country?",
        "a": "No, and this is the single largest difference between deploying this technology in one country and another. Regimes differ on whether biometric data is a special category, whether employee consent is a valid basis given the imbalance of power in employment, whether a non-biometric alternative must be offered, how long data may be retained, whether it may leave the country, and whether an assessment or notification is required before processing begins. Establish the position for the country of operation in writing from a competent local source before the specification is issued."
      },
      {
        "q": "How many terminals does a shift change need?",
        "a": "Work it out rather than guess. Establish how many people must be processed and over how many minutes, measure the end-to-end transaction time per person including approach and clearing, and compute throughput as 60 divided by that time in seconds. Divide the peak arrivals by the window and by that throughput, blend in the slower retry transactions, then add margin for a terminal out of service. Finally check that the resulting queue has somewhere to stand without obstructing a doorway or escape route."
      },
      {
        "q": "How accurate are face recognition attendance machines?",
        "a": "Accuracy depends on the device, the algorithm, the matching threshold and site conditions rather than being a single fixed figure, and published figures relate to specific test conditions that a working entrance rarely reproduces. Modern dual-camera terminals with infrared perform reliably in low light and with normal changes in appearance. The most common cause of poor real-world performance is installation, a terminal facing a window or direct sun will underperform regardless of its specification."
      },
      {
        "q": "TimeWatch has several websites, which one should I use?",
        "a": "This site is the international reference and serves readers outside the three markets that have their own regional sites. If you are deploying in India, Saudi Arabia or the United Arab Emirates, use the regional site for that market, because it carries locally relevant guidance, local availability and local support arrangements that a market-neutral page cannot provide. Readers elsewhere should use this site, applying the specification method here to their own workforce profile and their own jurisdiction's requirements."
      }
    ]
  },
  "related": {
    "h2": "Related pages",
    "tone": "white",
    "links": [
      {
        "href": "/products/time-attendance-and-access-control/attendance-series/trueface2000",
        "label": "TrueFace2000 face attendance terminal"
      },
      {
        "href": "/products/time-attendance-and-access-control/card-fingerprint-face-series/bio-1",
        "label": "Bio-1 fingerprint terminal"
      },
      {
        "href": "/products/time-attendance-and-access-control/card-fingerprint-face-series/bio-27",
        "label": "Bio-27 multi-mode biometric terminal"
      },
      {
        "href": "/products/time-attendance-and-access-control/iris-series/tw-irigoplus",
        "label": "TW-IriGoPlus iris terminal"
      },
      {
        "href": "/products/time-attendance-and-access-control",
        "label": "time attendance and access control range"
      },
      {
        "href": "/biometric-attendance-access-control-system",
        "label": "biometric attendance and access control system"
      },
      {
        "href": "/how-does-a-uhf-rfid-reader-system-work",
        "label": "how UHF RFID reader systems work"
      },
      {
        "href": "/how-does-a-boom-barrier-work",
        "label": "vehicle access at the site gate"
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
      headline: "How Does an Attendance Machine Work?",
      name: metadata.title,
      description:
        "An international technical reference on biometric attendance machines, covering enrollment, one-way template creation, matching modes and thresholds, event recording and transfer, deployment topology, and a method for specifying a deployment in any jurisdiction.",
      url: PAGE_URL,
      mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
      inLanguage: "en",
      isAccessibleForFree: true,
      proficiencyLevel: "Beginner",
      about: [{"@type":"Thing","name":"Biometric attendance system"},{"@type":"Thing","name":"Biometric template"},{"@type":"Thing","name":"Time and attendance"},{"@type":"Thing","name":"Biometric data protection"},{"@type":"Thing","name":"Technical specification"}],
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
        cssSelector: ["#quick-answer", "#how-does-an-attendance-machine-work"],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Blogs", item: `${SITE}/blogs` },
        { "@type": "ListItem", position: 3, name: "How Does an Attendance Machine Work?", item: PAGE_URL },
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

export default function HowDoesAnAttendanceMachineWorkPage() {
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
