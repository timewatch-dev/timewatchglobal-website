import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";

/**
 * Global "how it works" page served at /how-does-a-door-frame-metal-detector-work (static informational page, x-default of the four-site cluster).
 * Content: global/how-it-works-pages/GL-04-how-does-a-door-frame-metal-detector-work.html (section 4 "Complete Page Content", which includes the FAQ),
 * kept word for word including the "Featured-snippet definition," label and the regional links. Section 1 gives the
 * metadata, section 2 the keywords. The TechArticle / BreadcrumbList nodes are composed from the pack's schema notes; the
 * FAQPage schema is built from the same FAQ data as the visible FAQ, so the two always match.
 * Body links and "Related pages" only point at pages that exist on the global site.
 * Everything renders on the server; the FAQ answers are in the HTML even while collapsed.
 */

export const dynamic = "force-static";

const SITE = "https://www.timewatchglobal.com";
const PAGE_URL = `${SITE}/how-does-a-door-frame-metal-detector-work`;
const HERO_IMAGE = `${SITE}/images/how-it-works/walk-through-metal-detector-checkpoint-hero.jpg`;
const HERO_ALT = "Two door frame metal detectors at a security screening checkpoint";
const DATE = "2026-10-27";

export const metadata = {
  title: "How Does a Door Frame Metal Detector Work? Zones Explained",
  description:
    "How a door frame metal detector works (transmit and receive coils, eddy currents, zone architecture and sensitivity) plus a method for specifying one anywhere.",
  keywords:
    "how does a door frame metal detector work, walk through metal detector working principle, DFMD working principle, archway metal detector how it works, metal detector zones explained, walk through metal detector specification, door frame metal detector components, how to specify a walk through metal detector, metal detector sensitivity settings, what does 18 zone mean in a metal detector, difference between 6 zone and 33 zone metal detector, how does a walk through metal detector detect metal, does a walk through metal detector detect all metals, why does a metal detector alarm for keys, can a metal detector detect non metallic weapons, walk through metal detector step by step process, how to test a walk through metal detector, how many zones do I need in a metal detector, walk through metal detector standards and approvals, are walk through metal detectors safe with a pacemaker",
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
    title: "How Does a Door Frame Metal Detector Work? Mechanism and Specification",
    description:
      "Electromagnetic fields, eddy currents and zone architecture, how a walk-through detector finds metal, what it cannot find, and how screening teams specify one.",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 3750, height: 2500, alt: HERO_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Does a Door Frame Metal Detector Work? Mechanism and Specification",
    description:
      "What a \"33-zone\" detector actually buys you, and why the number is worth nothing without the screening procedure behind it.",
    images: [{ url: HERO_IMAGE, alt: HERO_ALT }],
  },
};

const page = {
  "hero": {
    "h1": "How Does a Door Frame Metal Detector Work?",
    "image": {
      "src": "/images/how-it-works/walk-through-metal-detector-checkpoint-hero.jpg",
      "alt": "Two door frame metal detectors at a security screening checkpoint",
      "width": 3750,
      "height": 2500
    }
  },
  "sections": [
    {
      "id": "what-is-a-door-frame-metal-detector",
      "h2": "What Is a Door Frame Metal Detector?",
      "blocks": [
        {
          "type": "snippet",
          "parts": [
            {
              "b": "Featured-snippet definition, "
            },
            " A door frame metal detector (DFMD), also called a walk-through or archway metal detector, is a screening portal that senses metal carried on or by a person. Transmit coils in one side panel generate an alternating electromagnetic field across the opening. Metal passing through has eddy currents induced in it, and those currents produce a small secondary field of their own. Receive coils in the opposite panel sense that secondary field as a departure from the expected signal, and the control unit raises an audible and visual alarm indicating which vertical zone of the body the metal was detected in."
          ],
          "quick": true
        },
        {
          "type": "p",
          "parts": [
            "Walk-through detectors are among the few security products that look and behave almost identically wherever they are installed. The physics does not vary, the archway geometry barely varies, and the screening sequence a person experiences is recognisable on any continent. What varies enormously is the ",
            {
              "i": "screening regime"
            },
            " around the machine, the threat it is deployed against, the throughput it must sustain, the procedure the operator follows on alarm, and the national requirements that govern what the device must be capable of before it may be procured at all."
          ]
        },
        {
          "type": "p",
          "parts": [
            "That split is why this page is organised the way it is. The mechanism is explained once, accurately, because it holds everywhere. The decisions are then treated as a method, because they do not hold everywhere and must be worked out site by site."
          ]
        },
        {
          "type": "p",
          "parts": [
            "It is worth being precise about what the machine does. A walk-through detector detects ",
            {
              "i": "metal"
            },
            ". It does not detect weapons, it cannot identify an object, and it cannot tell a key from a blade. It reports that a conductive metallic mass of a certain size passed through the archway and roughly where on the body it was carried. Interpreting that report is the operator's task, which is why a detector is always one element of a screening procedure rather than a device left to work alone."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "how-does-a-door-frame-metal-detector-work",
      "h2": "How Does a Door Frame Metal Detector Work?",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "A walk-through metal detector works in five stages. Transmit coils in one panel ",
            {
              "b": "generate"
            },
            " an alternating electromagnetic field across the archway. Metal carried through that field has circulating eddy currents ",
            {
              "b": "induced"
            },
            " in it. Those eddy currents ",
            {
              "b": "produce"
            },
            " a secondary magnetic field of their own. Receive coils in the opposite panel ",
            {
              "b": "sense"
            },
            " that secondary field as a departure from the established baseline. The control unit then ",
            {
              "b": "decides"
            },
            ": it measures the size and character of the disturbance, compares it against the configured sensitivity threshold, and if it is exceeded raises an alarm and lights the zone indicator corresponding to the height at which the strongest response was seen."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Generate, induce, produce, sense, decide. The whole sequence completes in the fraction of a second a person takes to walk through, and the rest of this page is detail beneath those five verbs, including the specification method, which is most usefully understood as a series of questions about what you want the fifth verb to do."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "the-detection-principle-electromagnetic-induction",
      "h2": "The Detection Principle: Electromagnetic Induction",
      "blocks": [
        {
          "type": "h3",
          "text": "How the transmit and receive coils interact"
        },
        {
          "type": "p",
          "parts": [
            "Inside the two vertical panels of the archway are coils of wire. One panel carries transmit coils driven with an alternating current, producing a magnetic field that fills the opening. The opposite panel carries receive coils positioned to sense that field. On some designs transmit and receive functions are distributed across both panels rather than separated, but the principle is unchanged."
          ]
        },
        {
          "type": "p",
          "parts": [
            "With the archway empty, the receive coils see a stable, known signal, and the control electronics treat it as the baseline. This is the single most useful idea in the whole subject: ",
            {
              "b": "detection is not the measurement of a field, it is the measurement of a departure from the expected field."
            },
            " Everything that makes a detector behave well or badly (nearby structural steel, electrical noise, a second archway too close by, a panel that has been knocked out of alignment) acts by disturbing the baseline against which departures are judged."
          ]
        },
        {
          "type": "h3",
          "text": "Why metal disturbs the field"
        },
        {
          "type": "p",
          "parts": [
            "When a conductive object enters a changing magnetic field, a voltage is induced in it, and in a solid conductor that voltage drives current in closed loops. These are eddy currents. They in turn generate a magnetic field of their own, oriented to oppose the change that created it, and the receive coils see the sum of the original field and this secondary field. The control unit detects and measures that perturbation."
          ]
        },
        {
          "type": "p",
          "parts": [
            "The size of the disturbance depends on the object's conductivity, its size, its shape, its orientation as it passes, and its distance from the coils. This is why the same object can produce a noticeably different response on two consecutive passes. An item presenting a large loop area to the field supports stronger eddy currents than the same item held edge-on, and an item carried close to one panel produces a stronger response than the same item carried through the centre of the opening."
          ]
        },
        {
          "type": "h3",
          "text": "Ferrous and non-ferrous response"
        },
        {
          "type": "p",
          "parts": [
            "Two distinct physical effects allow a detector to respond across the range of metals people carry:"
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Ferrous metals"
              },
              ": iron and steel are ferromagnetic. They concentrate and distort the magnetic field in addition to supporting eddy currents, so they generally produce a strong and characteristically shaped response."
            ],
            [
              {
                "b": "Non-ferrous metals"
              },
              ": aluminium, copper, brass and most stainless grades are not ferromagnetic but are good conductors, so they support eddy currents well and are detected through that effect alone."
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "Because the two produce differently characterised signals, the control unit's signal processing can to a degree tell them apart. That capability is the basis of the discrimination settings discussed further down, and it is what allows a detector to be configured to respond to a weapon-sized ferrous mass while passing a small non-ferrous item such as a coin. How far discrimination can be pushed, and how it is exposed to the operator, differs substantially between models and should be examined rather than assumed."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "main-components-of-a-walk-through-metal-detector",
      "h2": "Main Components of a Walk-Through Metal Detector",
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
                "Transmit panel"
              ],
              [
                "Side column containing the coils that generate the alternating electromagnetic field across the opening."
              ],
              [
                "Coil count and distribution, drive scheme, and how the panel is partitioned to form zones."
              ]
            ],
            [
              [
                "Receive panel"
              ],
              [
                "The opposite column, containing the coils that sense disturbance in the field. In multi-zone units, coil pairs are stacked vertically along the panel height."
              ],
              [
                "Number of independently processed coil pairs, which is what the zone count actually describes."
              ]
            ],
            [
              [
                "Control unit"
              ],
              [
                "The processing head, usually mounted on the crossbar. Drives the transmitters, digitises receive signals, runs the detection algorithm, applies sensitivity settings and triggers alarms."
              ],
              [
                "Processing capability, number of selectable programmes, logging depth, remote configuration and diagnostic reporting."
              ]
            ],
            [
              [
                "Zone indicator bar"
              ],
              [
                "A vertical LED column on one or both panels showing which zone alarmed, so the operator knows roughly where on the body to search."
              ],
              [
                "Whether indication is on one panel or both, whether left and right are differentiated, and whether intensity is shown as well as position."
              ]
            ],
            [
              [
                "Audio-visual alarm"
              ],
              [
                "Tone and lamp indicating a detection."
              ],
              [
                "Tone selection and volume range, which matter in noisy concourses and in environments where a discreet alarm is required."
              ]
            ],
            [
              [
                "Traffic and alarm counters"
              ],
              [
                "Count people passing and alarms raised, producing the ratio used to monitor screening performance."
              ],
              [
                "Whether counts are retained through power loss and whether they can be exported rather than only read from the panel."
              ]
            ],
            [
              [
                "Operator interface"
              ],
              [
                "Panel or remote control for selecting sensitivity programmes, adjusting zone-wise sensitivity and setting operating parameters."
              ],
              [
                "Access control over settings. Password or key protection is what prevents sensitivity being quietly reduced to stop nuisance alarms."
              ]
            ],
            [
              [
                "Power supply"
              ],
              [
                "Mains input with conditioning, and on many units a battery backup so screening continues through a supply interruption."
              ],
              [
                "Input voltage and frequency vary by region; backup duration and whether it is fitted as standard vary by model."
              ]
            ],
            [
              [
                "Frame, panels and fixings"
              ],
              [
                "The physical archway and its mounting."
              ],
              [
                "Construction material, finish, ingress protection where the unit sits at a semi-open entrance, and whether the design is intended to be relocated."
              ]
            ],
            [
              [
                "Synchronisation interface"
              ],
              [
                "Allows adjacent units to be coordinated so their transmitters do not interfere."
              ],
              [
                "Number of units that can be synchronised together and whether synchronisation is wired or automatic."
              ]
            ]
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "how-does-a-door-frame-metal-detector-work-step-by-step",
      "h2": "How Does a Door Frame Metal Detector Work Step by Step?",
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
                "The system establishes its baseline"
              ],
              [
                "On power-up, and continuously thereafter, the control unit measures the received signal with the archway empty and treats it as the reference state. Slow environmental drift is tracked out so it does not accumulate into false alarms."
              ]
            ],
            [
              [
                {
                  "b": "2"
                }
              ],
              [
                "The field is generated across the opening"
              ],
              [
                "Transmit coils are driven with alternating current, producing an electromagnetic field that fills the archway."
              ]
            ],
            [
              [
                {
                  "b": "3"
                }
              ],
              [
                "A person walks through"
              ],
              [
                "Screening is designed for a normal, continuous walking pace. Stopping inside the archway, or walking through unusually slowly, changes the shape of the signal the processing expects."
              ]
            ],
            [
              [
                {
                  "b": "4"
                }
              ],
              [
                "Eddy currents are induced in any metal carried"
              ],
              [
                "The changing field induces circulating currents inside every conductive object on or with the person."
              ]
            ],
            [
              [
                {
                  "b": "5"
                }
              ],
              [
                "A secondary field is produced"
              ],
              [
                "Those eddy currents generate their own magnetic field, oriented to oppose the change that created it."
              ]
            ],
            [
              [
                {
                  "b": "6"
                }
              ],
              [
                "Receive coils register the disturbance"
              ],
              [
                "The received signal departs from the baseline. Each coil pair along the panel height reports independently, this independence is what makes zones possible."
              ]
            ],
            [
              [
                {
                  "b": "7"
                }
              ],
              [
                "The signal is filtered and characterised"
              ],
              [
                "The control unit removes environmental noise, measures amplitude, and assesses the signal's shape to judge whether the response is characteristic of ferrous or non-ferrous material."
              ]
            ],
            [
              [
                {
                  "b": "8"
                }
              ],
              [
                "Threshold comparison"
              ],
              [
                "The processed signal is compared against the sensitivity threshold in force for the active programme, which may differ from zone to zone. Below threshold, nothing happens. Above it, an alarm is raised."
              ]
            ],
            [
              [
                {
                  "b": "9"
                }
              ],
              [
                "The zone is identified"
              ],
              [
                "The control unit determines which coil pairs responded most strongly and lights the corresponding indicators, showing the approximate height on the body at which the metal was carried."
              ]
            ],
            [
              [
                {
                  "b": "10"
                }
              ],
              [
                "The alarm is presented to the operator"
              ],
              [
                "Audible tone and visual indication. Many units vary the tone or display an intensity reading to suggest the size of the detected mass."
              ]
            ],
            [
              [
                {
                  "b": "11"
                }
              ],
              [
                "Counters update"
              ],
              [
                "Traffic and alarm counts increment, building the data used to monitor throughput and alarm rate over a shift."
              ]
            ],
            [
              [
                {
                  "b": "12"
                }
              ],
              [
                "Secondary screening resolves the alarm"
              ],
              [
                "The operator conducts a targeted check, commonly with a handheld detector guided to the indicated zone, or by a documented search procedure. This step, not the archway, is where screening actually concludes."
              ]
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "Step 12 deserves emphasis because it is where screening systems most often fail in practice. The archway produces an unresolved question; only the procedure behind it produces an answer. A portal installed without the staff, space and time to resolve its alarms does not screen people, it counts them."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "what-are-detection-zones-in-a-metal-detector",
      "h2": "What Are Detection Zones in a Metal Detector?",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "This is the specification most often misunderstood and most often quoted without being understood, so it is worth setting out properly."
          ]
        },
        {
          "type": "p",
          "parts": [
            "A ",
            {
              "b": "detection zone"
            },
            " is an independently monitored horizontal band of the archway's height. Each zone has its own transmit and receive coil pairing and its own signal processing chain. A 6-zone detector divides the person's height into six such bands; an 18-zone detector into eighteen; a 33-zone detector into thirty-three. The zone count is therefore a description of the physical coil architecture and the processing behind it, not a marketing tier and not a measure of sensitivity."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Two consequences follow, and only the first is obvious:"
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Localisation improves with zone count."
              },
              " More zones means the alarm indicates the position of the metal more precisely. On a 6-zone unit, an alarm might say \"somewhere around the torso\". On a 33-zone unit it narrows to a much tighter band, so the secondary search is faster, more targeted and less intrusive for the person being screened."
            ],
            [
              {
                "b": "Zone-wise sensitivity becomes possible."
              },
              " Each zone can be tuned independently, and in day-to-day operation this matters more than localisation. The ankle and foot zones can be set less sensitively to reduce alarms from steel toe-caps and shoe shanks, while the torso and waistline zones stay at full sensitivity. Uniform sensitivity across the whole height is one of the commonest causes of an unworkable nuisance alarm rate."
            ]
          ]
        },
        {
          "type": "table",
          "head": [
            "Zone count",
            "Localisation available",
            "Site context it is typically suited to"
          ],
          "rows": [
            [
              [
                "Single zone"
              ],
              [
                "Presence only, no indication of where on the body"
              ],
              [
                "Basic entry screening where every alarm triggers a full manual check anyway and throughput is low"
              ]
            ],
            [
              [
                "6 to 12 zones"
              ],
              [
                "Broad body regions"
              ],
              [
                "Offices, institutions and commercial premises with moderate throughput and a low-to-moderate threat profile"
              ]
            ],
            [
              [
                "18 zones"
              ],
              [
                "A reasonably specific band on the body"
              ],
              [
                "Retail and mixed-use developments, hotels, larger public buildings and campuses with steady footfall"
              ]
            ],
            [
              [
                "33 zones"
              ],
              [
                "A narrow, precise band"
              ],
              [
                "Aviation, government and judicial facilities, and other high-throughput sites running fast targeted secondary checks"
              ]
            ],
            [
              [
                "60 zones"
              ],
              [
                "Very fine localisation, with left and right differentiated on some models"
              ],
              [
                "Critical infrastructure and installations with the most demanding screening requirements and trained screening staff"
              ]
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "Higher zone counts are not automatically the correct answer, and specifying one on the assumption that a larger number is better is a common and avoidable procurement error. The benefit of fine localisation is only realised if there is a trained operator and a defined procedure capable of acting on it. A site that conducts a full manual search on every alarm regardless of the indication gains very little from thirty-three zones; a site running a two-second targeted sweep at the indicated band gains a great deal. The decision follows from the threat profile, the throughput requirement and the secondary screening capacity available, which is exactly the sequence the specification method below works through."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "sensitivity-discrimination-and-the-nuisance-alarm-trade-off",
      "h2": "Sensitivity, Discrimination and the Nuisance Alarm Trade-Off",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "Every walk-through detector operates on a trade-off that cannot be eliminated, only managed. Raise sensitivity and the detector responds to smaller metallic masses, improving the chance of catching a small threat item, but it also alarms on keys, coins, belt buckles, watches, phones, jewellery, underwired garments and shoe shanks. Every one of those alarms consumes operator attention and slows the queue. Lower sensitivity and the nuisance alarms fall away, but so does the response to genuinely small items."
          ]
        },
        {
          "type": "p",
          "parts": [
            "The trade-off has a second-order effect that is more dangerous than the queue. An operator resolving a high proportion of alarms that turn out to be keys becomes conditioned to expect nothing. That conditioning degrades the quality of the secondary search long before anyone notices, and it is the main reason nuisance alarm rate should be treated as a security metric rather than an operational annoyance."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Detectors give three tools for managing it:"
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Sensitivity programmes"
              },
              ": preset configurations for different operating contexts, selected as conditions change rather than retuned by hand each time. A site with a routine daytime posture and a heightened event posture should have both stored and documented, so the change is a selection rather than an improvisation."
            ],
            [
              {
                "b": "Zone-wise sensitivity"
              },
              ": different thresholds by body region, as described above. In practice this is the most effective single tool for reducing nuisance alarms without weakening overall detection, because most nuisance metal is concentrated at predictable heights."
            ],
            [
              {
                "b": "Discrimination"
              },
              ": using the differing signal characteristics of ferrous and non-ferrous material to respond selectively, so a detector can be set to react to a weapon-sized ferrous mass while passing small non-ferrous personal items. Discrimination capability is model-dependent and should be examined against the actual items the site expects to see."
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "Alongside the settings, most sites operate a divestment procedure, asking people to place phones, keys, coins and belts in a tray before walking through. This raises effective screening quality more than any configuration change, because it removes the commonest alarm sources from the problem entirely. The configuration and the procedure are two halves of one decision, and specifying equipment without specifying the procedure produces predictable disappointment."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "how-to-specify-a-walk-through-metal-detector-for-any-site",
      "h2": "How to Specify a Walk-Through Metal Detector for Any Site",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "This is the section most buyers skip, and skipping it is why so many screening points end up with equipment that is either over-specified and ignored or under-specified and bypassed. Choosing a detector is not a matter of picking a zone count from a catalogue. It is six determinations made in order, each constraining the next, and the first three are about the site rather than the machine."
          ]
        },
        {
          "type": "p",
          "parts": [
            "The method below is deliberately independent of country, brand and product range. It works for any site anywhere, and it produces a specification that can be issued to any competent supplier and answered unambiguously."
          ]
        },
        {
          "type": "h3",
          "text": "Step 1, Establish the threat profile"
        },
        {
          "type": "p",
          "parts": [
            "Every subsequent decision depends on a written statement of what the screening point exists to find. This sounds obvious and is routinely omitted, with the result that sensitivity is set by trial and error against complaints rather than against a requirement."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "State the item classes of concern"
              },
              " in terms of size and material, not in terms of names. \"A ferrous mass of the order of a small blade\" is specifiable; \"weapons\" is not."
            ],
            [
              {
                "b": "State explicitly what is out of scope."
              },
              " If the credible concern includes non-metallic items, a metal detector cannot address it and the screening concept needs X-ray, body scanning or trace detection alongside. Writing that down early prevents the archway being asked, later and informally, to do something it physically cannot."
            ],
            [
              {
                "b": "State the direction of screening."
              },
              " Entry screening and exit screening are different problems. Industrial sites frequently screen people leaving to deter removal of metal stock and tools, and the item sizes of interest there are quite different from those at a public entrance."
            ],
            [
              {
                "b": "State the posture changes"
              },
              " the site expects, routine operation, heightened operation during events or alerts, and any reduced posture. Each posture may justify a different stored sensitivity programme."
            ],
            [
              {
                "b": "Record who owns the profile"
              },
              " and when it is reviewed. A threat profile set once at installation and never revisited is the usual reason a detector's configuration no longer matches the site five years later."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Step 2, Establish the throughput requirement"
        },
        {
          "type": "p",
          "parts": [
            "The second number is people per hour at the peak, not across the day. An average conceals the peak, and the peak is what determines whether the screening point works or produces a queue that spills outside the building."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Count or model the peak."
              },
              " For an existing site, count at the busiest period. For a new building, derive it from occupancy and arrival pattern: a facility where most occupants arrive within a twenty-minute window has a very different requirement from one with a flat arrival curve, even at identical daily totals."
            ],
            [
              {
                "b": "Allow for the alarm rate."
              },
              " Throughput is not set by the archway, which passes people at walking pace. It is set by how many of them stop. If one person in four alarms and each resolution takes twenty seconds, the real capacity of the lane is a fraction of its nominal capacity."
            ],
            [
              {
                "b": "Allow for divestment time."
              },
              " A divestment procedure improves screening quality and consumes time per person. Both effects are real and both belong in the calculation."
            ],
            [
              {
                "b": "Decide the number of lanes from the throughput"
              },
              ", not the other way round. Where more than one archway is required, their spacing and synchronisation become design constraints, see the installation section."
            ],
            [
              {
                "b": "Record the result as a number"
              },
              ", for example \"peak 900 persons per hour sustained for 30 minutes, twice daily\", because that is the figure a supplier and a screening contractor can both answer against."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Step 3, Establish the secondary screening capacity available"
        },
        {
          "type": "p",
          "parts": [
            "This is the determination that distinguishes a screening concept from a purchase, and it is where the zone decision is actually made. The archway does not resolve anything; it raises a question that a person must answer. The capacity available to answer questions is therefore the real constraint on the whole design."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "How many trained operators are present at the peak"
              },
              ", and are they dedicated to screening or also doing something else? A single operator covering reception and screening cannot run a targeted search procedure at a sustained alarm rate."
            ],
            [
              {
                "b": "What physical space exists beyond the archway"
              },
              " for a person to step aside and be searched without blocking the lane? Without it, every alarm stops the queue, and the pressure to reduce sensitivity becomes irresistible."
            ],
            [
              {
                "b": "What secondary equipment is available"
              },
              ": handheld detectors, a search position, a supervisor? A handheld detector per lane is the conventional minimum where targeted searching is intended."
            ],
            [
              {
                "b": "What procedure will be followed"
              },
              ", and is it written down? \"Search the indicated zone, then clear\" and \"conduct a full search on any alarm\" place entirely different demands on the equipment and on the queue."
            ],
            [
              {
                "b": "Be honest about the answer."
              },
              " A site with one operator and no search space should specify for a low alarm rate and a simple procedure, not for fine localisation it cannot use."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Step 4, Decide the zone count"
        },
        {
          "type": "p",
          "parts": [
            "With the first three steps written down, the zone decision becomes straightforward rather than a matter of preference. It is a function of how precisely the secondary search needs to be directed, and whether anyone is in a position to act on that precision."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "High throughput plus trained operators plus a targeted search procedure"
              },
              " justifies a high zone count, because every second saved per alarm is multiplied by the alarm count and fine localisation is the mechanism that saves it."
            ],
            [
              {
                "b": "Moderate throughput with a general-duty operator"
              },
              " is usually served well by a mid-range zone count, where broad localisation shortens the search without implying a precision the procedure will not use."
            ],
            [
              {
                "b": "Any site with a difficult nuisance alarm population"
              },
              " (heavy footwear, tool-carrying staff, uniformed personnel with metal fittings) benefits from a higher zone count regardless of throughput, because zone-wise sensitivity is the tool that makes such a population workable."
            ],
            [
              {
                "b": "Specify the zone count as a minimum with a stated reason"
              },
              ", not as a bare number. \"Not fewer than 18 independently processed zones, with independently adjustable sensitivity per zone\" is a requirement. \"33 zone\" is a product description that a supplier may satisfy in ways you did not intend."
            ],
            [
              {
                "b": "Confirm that zone-wise sensitivity adjustment is actually exposed"
              },
              " on the model offered. A unit may have many zones for localisation without allowing each to be tuned, and the tuning is usually the more valuable half."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Step 5, Decide the sensitivity programme and discrimination settings"
        },
        {
          "type": "p",
          "parts": [
            "Sensitivity is not a single setting to be found once. It is a small set of documented configurations, each matched to a posture from Step 1 and each tested before it is relied on."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Define a programme per posture"
              },
              " (routine, heightened, and any special event configuration) and record what each is intended to detect and to pass."
            ],
            [
              {
                "b": "Set zone-wise thresholds against the real population"
              },
              ", which means observing a representative sample of the people who will actually be screened, in the footwear and clothing they actually wear."
            ],
            [
              {
                "b": "Decide the discrimination posture"
              },
              " (how far the unit should use ferrous and non-ferrous signal characteristics to pass small personal items) and record it, because it is a security decision with consequences, not a convenience setting."
            ],
            [
              {
                "b": "Protect the settings."
              },
              " Access to the configuration should be controlled and changes should be logged. Sensitivity quietly reduced to stop complaints is among the most serious and least visible failure modes in screening."
            ],
            [
              {
                "b": "Specify the review cycle."
              },
              " Settings should be reviewed against the alarm rate and the threat profile at a defined interval, not left as commissioned."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Step 6, Establish the assurance and operational test regime"
        },
        {
          "type": "p",
          "parts": [
            "A metal detector can fail in a way that is invisible: it stays powered, passes everyone, and alarms on nothing. No other common security device fails this quietly, and the assurance regime is the only thing standing between that failure and a false sense of security. It belongs in the specification, not in the maintenance contract alone."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Specify an operational test at the start of every shift"
              },
              " using a defined test object passed through the archway at several heights, with the result recorded."
            ],
            [
              {
                "b": "Specify zone-by-zone verification"
              },
              " at a defined interval, so that a dead coil pair is found by test rather than by incident. A failed zone in the middle of the panel is invisible in normal use."
            ],
            [
              {
                "b": "Specify a settings audit"
              },
              " comparing the live configuration against the documented programme, because drift is usually human rather than electrical."
            ],
            [
              {
                "b": "Specify alarm-rate monitoring"
              },
              " using the unit's traffic and alarm counters. A ratio that moves without an operational explanation is the earliest available warning of a configuration or environmental change."
            ],
            [
              {
                "b": "Name who performs each check, who records it and who reviews the record."
              },
              " An assurance regime with no named owner is a document, not a control."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Writing it down: a six-line screening specification schedule"
        },
        {
          "type": "p",
          "parts": [
            "The six determinations condense into a schedule that can be issued with a tender and answered unambiguously by any supplier or screening contractor. Its value is its brevity, six lines that leave no room for interpretation and no room for a bare model name to pass as an answer."
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
                "1 · Threat profile"
              ],
              [
                "Item classes of concern by size and material, what is out of scope, direction of screening, postures"
              ],
              [
                "\"Ferrous and non-ferrous masses from small-blade size upward, entry screening; non-metallic items out of scope and addressed by separate X-ray provision; two postures, routine and heightened\""
              ]
            ],
            [
              [
                "2 · Throughput"
              ],
              [
                "Peak persons per hour, duration of the peak, and the assumed alarm rate"
              ],
              [
                "\"Peak 900 persons/hour sustained 30 minutes, twice daily, assumed alarm rate not exceeding 15 per cent after divestment\""
              ]
            ],
            [
              [
                "3 · Secondary capacity"
              ],
              [
                "Operators at peak, search space, secondary equipment, written procedure"
              ],
              [
                "\"Two dedicated operators per lane at peak, 2 m search position clear of the lane, one handheld detector per lane, targeted-zone search procedure issued\""
              ]
            ],
            [
              [
                "4 · Zone architecture"
              ],
              [
                "Minimum independently processed zones, with independent sensitivity adjustment required"
              ],
              [
                "\"Not fewer than 18 independently processed zones, each with independently adjustable sensitivity, indicated on both panels\""
              ]
            ],
            [
              [
                "5 · Configuration"
              ],
              [
                "Number of stored programmes, discrimination posture, access control over settings"
              ],
              [
                "\"Two stored programmes; discrimination configured to pass small non-ferrous personal items; configuration access protected and changes logged\""
              ]
            ],
            [
              [
                "6 · Assurance"
              ],
              [
                "Test object regime, interval, recording and review ownership"
              ],
              [
                "\"Shift-start test at three heights with results recorded; full zone verification weekly; monthly settings audit and alarm-rate review by the security manager\""
              ]
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "A supplier who can answer all six lines against a specific model has told you something useful. A supplier who answers only with a zone count has not."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "detection-performance-requirements-and-procurement-regimes-what-applies-where",
      "h2": "Detection Performance Requirements and Procurement Regimes: What Applies Where",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "This is where international specifiers are most often misled. Requirements for walk-through metal detectors are set ",
            {
              "b": "jurisdictionally"
            },
            ", and in several respects they are set ",
            {
              "i": "sectorally"
            },
            " as well, aviation, judicial and correctional screening are commonly governed by requirements that do not apply to a commercial building in the same country. There is no single global rule that determines what a detector must be capable of everywhere, and a performance test regime recognised in one country carries no automatic status in another."
          ]
        },
        {
          "type": "p",
          "parts": [
            "The practical consequence is a sequencing rule: ",
            {
              "b": "identify the applicable regime before selecting equipment, not after."
            },
            " A detector chosen on zone count and then assessed against a national requirement discovered late is the usual route to equipment that must be replaced. The table below sets out the regimes a specifier anywhere should establish, and what must be established about each."
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
                "Detection performance requirements"
              ],
              [
                "What a screening device must be able to detect, under defined test conditions, for a given class of facility"
              ],
              [
                "Whether the country, and the sector within it, sets a detection performance requirement for this type of facility; which test regime expresses it; and what evidence a supplier is expected to hold. Requirements of this kind are commonly sector-specific and are not interchangeable between sectors."
              ]
            ],
            [
              [
                "Sector screening mandates"
              ],
              [
                "Who must be screened, by what method, at which facility types, aviation, judicial, correctional, critical infrastructure and major events are the usual categories"
              ],
              [
                "Which authority sets the mandate for this facility type in this country, and whether screening equipment selection is the operator's choice at all or is directed."
              ]
            ],
            [
              [
                "Security service and installer licensing"
              ],
              [
                "Who may install, operate and maintain screening equipment, and what registration or licensing they require"
              ],
              [
                "Whether the installer and the screening operator require authorisation in the country of installation, which is frequently a separate question from the equipment itself."
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
                "Which EMC regime applies locally. This matters more than usual for detectors, which work by sensing very small signal departures and are therefore both a potential victim and a potential source."
              ]
            ],
            [
              [
                "Electrical safety and installation"
              ],
              [
                "Supply voltage and frequency, earthing arrangement, protective devices, cable selection and labelling"
              ],
              [
                "The national wiring rules, and who is competent and licensed to perform and certify the installation."
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
                "Which marking scheme, if any, applies to this product category in this market, and what evidence the importer must hold."
              ]
            ],
            [
              [
                "Import and customs control"
              ],
              [
                "Some jurisdictions treat security screening equipment as a controlled category at import"
              ],
              [
                "Whether import authorisation or end-user documentation is required, and the lead time it adds, which is frequently discovered too late."
              ]
            ],
            [
              [
                "Data protection and recording"
              ],
              [
                "Where screening events, images or personal data are recorded and retained"
              ],
              [
                "What may be recorded, for how long, and what notice must be given to people being screened. This is a growing area of divergence between jurisdictions."
              ]
            ],
            [
              [
                "Health, safety and public notice"
              ],
              [
                "Signage and notification obligations at screening points, including advice to people with implanted medical devices"
              ],
              [
                "What notice the site is obliged to display, and what alternative screening provision must be available for people who cannot pass through the archway."
              ]
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "Three points follow and are worth stating plainly."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "A conformity mark is not a detection performance statement."
              },
              " Market access marking addresses matters such as electrical safety and electromagnetic compatibility. It says nothing about whether a detector will find a particular item at a particular sensitivity, and the two are routinely conflated in international tenders."
            ],
            [
              {
                "b": "Performance regimes are not transferable between countries or sectors."
              },
              " Evidence of assessment against one country's screening requirement is evidence about that requirement. Whether it satisfies another country's expectation is a question for that country's authority."
            ],
            [
              {
                "b": "The obligation to identify the applicable regime sits with the specifier and the importer:"
              },
              " not with an overseas manufacturer who may have no visibility of the destination market's rules or the facility's sector."
            ]
          ]
        },
        {
          "type": "note",
          "parts": [
            "Nothing on this page should be read as a statement that any particular product holds any particular approval, certification, conformity status or detection performance rating. Approval and performance status is a question for the supplier of the specific model, in the specific market and sector, and should be confirmed in writing with supporting documentation before a specification is issued."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "technologies-used-in-a-walk-through-metal-detector",
      "h2": "Technologies Used in a Walk-Through Metal Detector",
      "blocks": [
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Electromagnetic induction"
              },
              ": the core detection principle, sensing the secondary field produced by eddy currents induced in conductive material."
            ],
            [
              {
                "b": "Continuous wave or pulse induction transmission"
              },
              ": different drive schemes with different noise immunity and discrimination behaviour. The choice is a design characteristic of the model rather than an option at ordering."
            ],
            [
              {
                "b": "Multi-coil zone architecture"
              },
              ": vertically stacked transmit and receive coil pairs, each independently processed, which is what makes zone indication and zone-wise sensitivity possible."
            ],
            [
              {
                "b": "Digital signal processing"
              },
              ": filtering environmental noise, measuring amplitude and characterising signal shape to separate genuine detections from interference."
            ],
            [
              {
                "b": "Adaptive baseline tracking"
              },
              ": continuous recalibration so that slow environmental drift does not accumulate into false alarms or mask real ones."
            ],
            [
              {
                "b": "Transmitter synchronisation"
              },
              ": coordinating adjacent units so that multiple lanes can be installed close together without their fields conflicting."
            ],
            [
              {
                "b": "Networked monitoring and configuration"
              },
              ": on many models, remote setting, alarm logging and counter export, which is what makes alarm-rate monitoring practical across a multi-lane site."
            ]
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "where-walk-through-metal-detectors-are-used",
      "h2": "Where Walk-Through Metal Detectors Are Used",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "Archways appear wherever people must be screened at a defined entry point. The site types below recur in every region, and each carries a characteristic specification profile:"
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Airports and aviation facilities"
              },
              ": passenger and staff screening alongside X-ray baggage screening as part of a layered checkpoint, typically under a sector mandate that determines both method and performance expectation."
            ],
            [
              {
                "b": "Rail, metro and transport interchanges"
              },
              ": very high throughput against a public population that cannot be enrolled or briefed, where nuisance alarm rate dominates the design."
            ],
            [
              {
                "b": "Government, judicial and institutional buildings"
              },
              ": controlled entry screening of a mixed public and staff population, frequently with a defined search procedure imposed by the authority rather than chosen by the operator."
            ],
            [
              {
                "b": "Stadiums, arenas and event venues"
              },
              ": extreme short-duration peaks, often with temporary or relocatable units, where setup and recalibration time is itself a specification issue."
            ],
            [
              {
                "b": "Retail and mixed-use developments"
              },
              ": visible entrance screening that must remain unobtrusive, where appearance and alarm tone matter as much as detection settings."
            ],
            [
              {
                "b": "Hotels and hospitality"
              },
              ": screening at entrances and event spaces where guest experience constrains how intrusive the procedure can be."
            ],
            [
              {
                "b": "Manufacturing plants, mines and processing facilities"
              },
              ": frequently in reverse, screening people leaving to deter removal of metal stock, tools and components. Item sizes of interest differ sharply from public entrance screening, and tool-carrying staff create a demanding nuisance population."
            ],
            [
              {
                "b": "Logistics and distribution centres"
              },
              ": staff exit screening at shift change, which concentrates the entire day's throughput into a few minutes."
            ],
            [
              {
                "b": "Hospitals and healthcare campuses"
              },
              ": emergency department and ward entrances, where screening must coexist with urgent access and with patients carrying medical devices and implants."
            ],
            [
              {
                "b": "Universities and educational campuses"
              },
              ": examination halls and campus entrances, with large seasonal variation in throughput."
            ],
            [
              {
                "b": "Correctional facilities"
              },
              ": visitor and staff screening at controlled entry points, usually the most demanding sensitivity and procedure requirement of any category."
            ],
            [
              {
                "b": "Places of assembly and worship with high seasonal footfall"
              },
              ": periodic peaks far above the routine load, which often makes relocatable units and stored posture programmes the practical answer."
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "TimeWatch supplies walk-through metal detectors and associated inspection and screening equipment internationally, and maintains dedicated regional sites for several markets, see the regional guidance below for where to look for locally relevant information."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "integration-with-other-screening-and-security-systems",
      "h2": "Integration With Other Screening and Security Systems",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "A walk-through detector is one layer in a checkpoint rather than a complete screening solution. The integrations below recur across site types:"
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "X-ray baggage screening"
              },
              ": the person walks through the archway while their bags pass through the scanner alongside, so that carried items and items on the body are both addressed. Neither device covers the other's gap."
            ],
            [
              {
                "b": "Handheld metal detectors"
              },
              ": the conventional secondary screening tool, used to resolve an archway alarm at the indicated zone. The link between zone indication and handheld search is where zone count earns its value."
            ],
            [
              {
                "b": "Body scanners"
              },
              ": selective or enhanced screening where the threat profile includes non-metallic items that an archway physically cannot detect."
            ],
            [
              {
                "b": "Trace detection"
              },
              ": where the threat profile includes explosive or narcotic residues, which no metal detector addresses."
            ],
            [
              {
                "b": "Entrance control, turnstiles, flap barriers and speed gates"
              },
              ": physically preventing progress until screening is complete, so that a person who has alarmed cannot simply continue walking. Without this, screening depends entirely on an operator noticing."
            ],
            [
              {
                "b": "Access control"
              },
              ": credential verification at the same checkpoint, so the entry record carries both the identity and the fact that screening took place."
            ],
            [
              {
                "b": "Visitor management"
              },
              ": registering the visitor and recording the screening event as part of the visit record."
            ],
            [
              {
                "b": "Video surveillance"
              },
              ": cameras covering the lane so any alarm can be reviewed against footage afterwards, which is also how screening procedure compliance is audited."
            ],
            [
              {
                "b": "Central monitoring and reporting"
              },
              ": alarm and throughput counters collected across lanes and sites, producing the alarm-rate data that the assurance regime depends on."
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
            "A walk-through detector is more sensitive to its installed environment than almost any other security device, because it works by measuring small departures from a baseline, and a building is full of things that disturb baselines. Most unexplained detector behaviour is an installation or environment problem rather than an equipment fault."
          ]
        },
        {
          "type": "h3",
          "text": "Metal in the surrounding structure"
        },
        {
          "type": "p",
          "parts": [
            "Structural steel, reinforced concrete, lift shafts, metal shutters, revolving doors and ducting near the archway all influence the field. The distinction that matters is between static and moving metal: ",
            {
              "b": "static metal can be calibrated out, moving metal cannot."
            },
            " A steel column a metre away is a nuisance the commissioning engineer can accommodate. A roller shutter that opens and closes a metre away is a recurring disturbance that no calibration will fix, and the answer is to move the archway or the shutter."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Reinforcement in the floor slab beneath the unit also affects the field, which is the reason a detector is always calibrated in position. It is also the reason a unit that is relocated (even within the same building) must be recalibrated where it now stands. A relocated detector that was never recalibrated is one of the commonest causes of a portal that appears to work and does not."
          ]
        },
        {
          "type": "h3",
          "text": "Electrical noise and supply quality"
        },
        {
          "type": "p",
          "parts": [
            "Variable-frequency drives, large motors, lift machinery, welding equipment, certain lighting installations and poor-quality supply all inject noise that a detector may interpret as signal or that may mask signal. A stable, well-earthed supply, routed away from noisy loads, is worth arranging properly at design stage rather than diagnosing afterwards. Where a site has known electrical noise sources, their presence should be stated to the supplier before equipment is selected, because noise immunity differs between drive schemes and models."
          ]
        },
        {
          "type": "h3",
          "text": "Ambient conditions and enclosure exposure"
        },
        {
          "type": "p",
          "parts": [
            "Walk-through detectors are usually specified as indoor equipment, and the conditions that cause trouble are the ones at semi-open entrances. The general principle holds across climates: ",
            {
              "b": "a catalogue environmental rating assumes reference conditions and a real entrance rarely matches them."
            },
            " High ambient temperature combined with direct solar gain through a glazed lobby affects control electronics, and long periods at elevated temperature shorten the life of power supply components. High humidity and salt-laden coastal air drive corrosion at fixings and connectors. Airborne dust accumulates inside panels and at connectors. Sub-zero conditions at an exposed entrance introduce condensation that forms when the unit is carried between temperatures. In every case the response is the same: state the conditions the equipment will actually experience, and require the supplier to confirm the unit is suitable for them rather than relying on a general indoor rating."
          ]
        },
        {
          "type": "h3",
          "text": "Lane layout, divestment and queue space"
        },
        {
          "type": "p",
          "parts": [
            "The archway is the least demanding part of the lane in spatial terms. The demanding parts are the divestment position before it and the secondary search position after it. A lane designed with neither will stop dead on every alarm, and the pressure that produces will be applied to the sensitivity setting rather than to the layout. Spacing between adjacent archways is the other layout constraint: two units too close together will interfere, so multiple lanes require either the separation the manufacturer specifies or electronic synchronisation so transmitters operate in a coordinated sequence. Panels must also be mounted rigidly on a level floor and remain parallel, because flexing panels produce erratic behaviour that is easily mistaken for an electronic fault."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "maintenance-and-operational-testing",
      "h2": "Maintenance and Operational Testing",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "Unlike most security equipment, a metal detector can fail invisibly, it keeps running, passes everyone and alarms on nothing. Routine operational testing is the only thing that catches this, and it is the reason the assurance regime belongs in the specification rather than being left to a service contract."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Operational test piece checks"
              },
              ": pass a defined test object through the archway at several heights at the start of each shift and confirm the unit alarms in the correct zone. This is the single most important recurring task on the page and takes under a minute."
            ],
            [
              {
                "b": "Zone-by-zone verification"
              },
              ": confirm every zone responds, not only the ones in the middle. A dead coil pair is otherwise undetectable in normal use, because nothing about the unit's behaviour changes."
            ],
            [
              {
                "b": "Settings audit"
              },
              ": verify the live configuration against the documented programme. Sensitivity quietly reduced to stop nuisance alarms is a common and serious failure, and only a comparison against a recorded baseline will find it."
            ],
            [
              {
                "b": "Alarm-rate review"
              },
              ": compare alarm count against traffic count over time. A ratio that drifts without an operational explanation indicates an environmental change, a settings change or a developing fault."
            ],
            [
              {
                "b": "Panel alignment and mounting"
              },
              ": check that panels remain parallel and fixings tight, particularly on units in high-traffic locations where trolleys and luggage make contact."
            ],
            [
              {
                "b": "Cable and connector inspection"
              },
              ": particularly the interconnection between panels and control unit, and any synchronisation cabling between adjacent units."
            ],
            [
              {
                "b": "Battery backup testing"
              },
              ": confirm the unit continues through a supply interruption if that is the operational expectation, and that the backup has not silently failed."
            ],
            [
              {
                "b": "Recalibration after any change"
              },
              ": relocation, floor works, nearby structural alteration or the installation of new equipment near the lane all justify recalibration in position."
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
              "Screens people at walking pace, so throughput remains high at busy entrances."
            ],
            [
              "Non-contact, no physical search is required unless the unit alarms, which matters for both dignity and speed."
            ],
            [
              "Zone indication directs the secondary search to the right part of the body, shortening each check and making it less intrusive."
            ],
            [
              "Applies the same threshold to every person, without fatigue, judgement variation or inconsistency between operators."
            ],
            [
              "Visible deterrent at the entrance, independent of what it detects on any given day."
            ],
            [
              "Traffic and alarm counters produce measurable operational data, which is what makes the assurance regime possible."
            ],
            [
              "Mature and widely supported technology, so competent installation and service labour is generally obtainable in most regions."
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
                "b": "It detects metal, not threats."
              },
              " Non-metallic items (ceramic and composite blades, and most explosive material) will not be detected. A site whose threat profile includes them needs X-ray screening, body scanning or trace detection in addition, and no configuration of the archway changes this."
            ],
            [
              {
                "b": "It cannot identify objects."
              },
              " The unit reports a metallic mass and its approximate height. Everything beyond that is operator judgement supported by secondary screening."
            ],
            [
              {
                "b": "Nuisance alarms are inherent"
              },
              " to any usable sensitivity setting. They are managed through divestment, zone-wise tuning and discrimination rather than eliminated."
            ],
            [
              {
                "b": "The environment affects performance."
              },
              " Nearby moving metal, electrical noise and adjacent units all matter, and any relocation requires recalibration in the new position."
            ],
            [
              {
                "b": "Effectiveness depends on the procedure behind it."
              },
              " A detector with no secondary screening capacity, or with sensitivity quietly turned down, provides the appearance of screening rather than screening."
            ],
            [
              {
                "b": "Requirements vary by jurisdiction and by sector."
              },
              " An arrangement that is routine for a commercial building in one country may be insufficient for a mandated sector in the same country, let alone in another."
            ],
            [
              {
                "b": "Specifications vary by model."
              },
              " Zone count, discrimination capability, number of stored programmes, synchronisation capability and interference handling differ between units and should be confirmed against the datasheet for the equipment actually being specified."
            ]
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "walk-through-detector-vs-handheld-detector-vs-body-scanner",
      "h2": "Walk-Through Detector vs Handheld Detector vs Body Scanner",
      "blocks": [
        {
          "type": "table",
          "head": [
            "",
            "Walk-through detector",
            "Handheld detector",
            "Body scanner"
          ],
          "rows": [
            [
              [
                {
                  "b": "Detects"
                }
              ],
              [
                "Metal only"
              ],
              [
                "Metal only"
              ],
              [
                "Metallic and non-metallic items concealed on the body, depending on the technology used"
              ]
            ],
            [
              [
                {
                  "b": "Screening speed"
                }
              ],
              [
                "Walking pace, typically suited to high throughput"
              ],
              [
                "Slow, a manual sweep per person"
              ],
              [
                "Slower than an archway; the person stands still for the scan"
              ]
            ],
            [
              [
                {
                  "b": "Localisation"
                }
              ],
              [
                "By zone, to a precision set by the zone count"
              ],
              [
                "Precise, and operator-guided"
              ],
              [
                "Precise, with an image or indicator display"
              ]
            ],
            [
              [
                {
                  "b": "Typical role"
                }
              ],
              [
                "Primary screening of everyone passing the point"
              ],
              [
                "Secondary screening to resolve an archway alarm"
              ],
              [
                "Enhanced or selective screening where the threat profile requires it"
              ]
            ],
            [
              [
                {
                  "b": "Operator requirement"
                }
              ],
              [
                "One to respond to alarms"
              ],
              [
                "One per person screened, throughout"
              ],
              [
                "A trained operator to interpret the output"
              ]
            ],
            [
              [
                {
                  "b": "Main constraint"
                }
              ],
              [
                "Nuisance alarm rate and secondary capacity"
              ],
              [
                "Throughput"
              ],
              [
                "Throughput, space and operator training"
              ]
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "These are complementary layers rather than competing options. A well-designed checkpoint uses an archway for primary screening of everyone, handhelds to resolve alarms, X-ray for carried bags, and body scanning or trace detection where the threat assessment justifies them. Specifying one where another is required is the most consequential error in this category, and it is almost always made at the briefing stage rather than by the engineer."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "are-door-frame-metal-detectors-safe",
      "h2": "Are Door Frame Metal Detectors Safe?",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "Walk-through metal detectors operate using low-intensity electromagnetic fields. They do not use X-rays and do not emit ionising radiation. That distinction separates them from X-ray baggage scanners, which screen bags rather than people, and from certain body scanner technologies that work on quite different principles."
          ]
        },
        {
          "type": "p",
          "parts": [
            "The general guidance published by detector manufacturers is that walk-through units are safe for the public, including pregnant women. Where an organisation needs a formal position for its own screening policy, it should take that position from the manufacturer's documentation for the specific equipment installed, and from the applicable health and safety guidance in its own jurisdiction, rather than from a general statement on a supplier's website."
          ]
        },
        {
          "type": "p",
          "parts": [
            "People with implanted medical devices such as pacemakers, implantable defibrillators, neurostimulators or insulin pumps are commonly advised to inform screening staff before passing through, so that an alternative screening method can be used. Anyone with a specific medical concern should follow the advice of their own doctor and the documentation supplied with their device. Screening points should have an alternative procedure available and staff briefed to apply it without requiring the person to explain their medical circumstances in public, in a number of jurisdictions the availability of that alternative, and the notice displayed at the screening point, are themselves regulated matters."
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
            "This page is written to be useful anywhere, which means it deliberately avoids national specifics. Local screening mandates, local licensing of security operators and installers, local availability and support arrangements, and local environmental conditions all differ, and generic advice on those subjects is worth less than none."
          ]
        },
        {
          "type": "p",
          "parts": [
            "For three markets, TimeWatch maintains dedicated regional sites with locally relevant versions of this guidance, local product availability and local support arrangements. If you are specifying in one of them, start there rather than here:"
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
                "href": "https://www.timewatchindia.com/how-does-a-door-frame-metal-detector-work",
                "label": "timewatchindia.com, How does a door frame metal detector work?"
              }
            ],
            [
              {
                "b": "Saudi Arabia"
              },
              ": ",
              {
                "href": "https://www.timewatcharabia.com/how-does-a-door-frame-metal-detector-work",
                "label": "timewatcharabia.com, How does a door frame metal detector work?"
              }
            ],
            [
              {
                "b": "United Arab Emirates"
              },
              ": ",
              {
                "href": "https://www.timewatchuae.com/how-does-a-door-frame-metal-detector-work",
                "label": "timewatchuae.com, How does a door frame metal detector work?"
              }
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "Readers elsewhere are in the right place. The specification method, the zone decision logic and the regime checklist on this page are written to be applied to any location, what you supply is the threat profile, the throughput, the secondary screening capacity and the applicable jurisdictional and sector requirements, and the method does the rest."
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
        "q": "How does a walk-through metal detector detect metal?",
        "a": "Transmit coils in one panel generate an alternating electromagnetic field across the archway. When metal passes through, the changing field induces circulating eddy currents inside the conductive object, and those currents produce a secondary magnetic field of their own. Receive coils in the opposite panel sense that secondary field as a departure from the established baseline, and the control unit raises an alarm if the disturbance exceeds the configured sensitivity threshold."
      },
      {
        "q": "What does 18-zone or 33-zone mean in a metal detector?",
        "a": "A zone is an independently monitored horizontal band of the archway's height, each with its own coil pairing and its own processing. An 18-zone detector divides the body height into eighteen such bands and a 33-zone detector into thirty-three. More zones means the alarm indicates the position of the metal more precisely, and (often more valuable in daily use) each zone's sensitivity can be tuned separately, so the ankle region can be relaxed to reduce alarms from footwear while the torso stays fully sensitive."
      },
      {
        "q": "How do I decide how many zones a site needs?",
        "a": "Work through three site facts before looking at any product. Establish the threat profile, so you know what the screening point exists to find. Establish the peak throughput, including the time each alarm takes to resolve. Then establish the secondary screening capacity actually available: trained operators at peak, physical search space beyond the lane, and a written procedure. Fine localisation pays only where someone is in a position to act on it, so the zone count follows those three answers rather than preceding them."
      },
      {
        "q": "Is a higher zone count always better?",
        "a": "Not automatically. Higher zone counts give finer localisation and more tuning control, which suits high-throughput sites with trained operators running targeted searches. But the benefit is realised only if the procedure uses it. A site that conducts a full manual check on every alarm regardless of the indication gains little from thirty-three zones. Zone count should follow from throughput, threat profile and secondary screening capacity rather than from the assumption that a larger number is preferable."
      },
      {
        "q": "Can a walk-through metal detector detect a mobile phone?",
        "a": "Yes, at normal operating sensitivity. A phone contains more than enough conductive material to produce a clear response. This is precisely why most screening points ask people to place phones in a tray before walking through: removing the commonest alarm sources keeps the queue moving and stops operators becoming conditioned to expect that every alarm is harmless."
      },
      {
        "q": "Why does a metal detector alarm for keys and belt buckles?",
        "a": "Because it detects conductive metal mass, not weapons specifically. Keys, coins, belt buckles, watches, jewellery, underwired garments and steel shoe shanks all present enough metal to cross the alarm threshold at any usable sensitivity setting. Sites manage this with a divestment procedure and by relaxing sensitivity in the zones covering the feet and ankles, rather than by reducing sensitivity across the whole archway."
      },
      {
        "q": "Can a metal detector detect non-metallic weapons?",
        "a": "No. A walk-through detector works by sensing eddy currents in conductive metal, so ceramic or composite blades and most explosive materials will not be detected. Where that threat profile applies, walk-through screening must be supplemented with X-ray baggage screening, body scanning or trace detection. This limitation is physical and cannot be addressed by raising sensitivity or increasing the zone count."
      },
      {
        "q": "Which standards and approvals apply to a walk-through metal detector?",
        "a": "It depends on the country of installation and frequently on the sector within it. Detection performance requirements, screening mandates, installer and operator licensing, electromagnetic compatibility, electrical installation rules, regional conformity marking and import control are all set jurisdictionally, and a regime recognised in one country carries no automatic status in another. A conformity mark is also not a detection performance statement. The specifier should identify which regimes apply locally before selecting equipment and confirm the status of the specific model in writing with the supplier."
      },
      {
        "q": "How do you check that a walk-through metal detector is still working?",
        "a": "Pass a defined operational test object through the archway at several heights and confirm the unit alarms and indicates the correct zone each time, recording the result. This should be done at the start of every shift, with a fuller zone-by-zone verification at a defined interval. It is the only reliable way to catch the most dangerous failure mode in screening: a detector that appears to be running normally but has a dead zone or sensitivity that has been quietly reduced."
      },
      {
        "q": "Why does a metal detector have to be recalibrated when it is moved?",
        "a": "Because it is calibrated against its surroundings. Reinforcement in the floor slab, structural steel, nearby shutters and electrical equipment all influence the field, and the unit's baseline accounts for the environment where it was commissioned. Moving it changes those conditions, so recalibration in the new position is required. Static metal can be calibrated out; metal that moves nearby, such as a shutter or a lift door, cannot be, and is a reason to choose a different position."
      },
      {
        "q": "Can two walk-through detectors be installed next to each other?",
        "a": "Yes, but not without planning. Two archways placed too close will interfere, because each one's transmitted field reaches the other's receive coils. They must either be separated by the distance the manufacturer specifies for the model, or electronically synchronised so their transmitters operate in a coordinated sequence rather than conflicting. Where several lanes are needed, this constraint should be settled at layout stage, since it affects the floor area the screening point requires."
      }
    ]
  },
  "related": {
    "h2": "Related pages",
    "tone": "gray",
    "links": [
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
        "href": "/how-does-a-body-scanner-work",
        "label": "how body scanners work"
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
      headline: "How Does a Door Frame Metal Detector Work?",
      name: metadata.title,
      description:
        "An international technical reference on walk-through metal detector operation, covering electromagnetic induction, eddy currents, zone architecture, sensitivity and discrimination, specification method and the jurisdictional regimes that govern screening equipment.",
      url: PAGE_URL,
      mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
      inLanguage: "en",
      isAccessibleForFree: true,
      proficiencyLevel: "Beginner",
      about: [{"@type":"Thing","name":"Walk-through metal detector"},{"@type":"Thing","name":"Electromagnetic induction"},{"@type":"Thing","name":"Eddy current"},{"@type":"Thing","name":"Security screening"},{"@type":"Thing","name":"Technical specification"}],
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
        cssSelector: ["#quick-answer", "#how-does-a-door-frame-metal-detector-work"],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Blogs", item: `${SITE}/blogs` },
        { "@type": "ListItem", position: 3, name: "How Does a Door Frame Metal Detector Work?", item: PAGE_URL },
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

export default function HowDoesADoorFrameMetalDetectorWorkPage() {
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
