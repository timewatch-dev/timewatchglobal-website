import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";

/**
 * Global "how it works" page served at /how-does-a-turnstile-system-work (static informational page, x-default of the four-site cluster).
 * Content: global/how-it-works-pages/GL-10-how-does-a-turnstile-system-work.html (section 4 "Complete Page Content", which includes the FAQ),
 * kept word for word including the "Featured-snippet definition," label and the regional links. Section 1 gives the
 * metadata, section 2 the keywords. The TechArticle / BreadcrumbList nodes are composed from the pack's schema notes; the
 * FAQPage schema is built from the same FAQ data as the visible FAQ, so the two always match.
 * Body links and "Related pages" only point at pages that exist on the global site.
 * Everything renders on the server; the FAQ answers are in the HTML even while collapsed.
 */

export const dynamic = "force-static";

const SITE = "https://www.timewatchglobal.com";
const PAGE_URL = `${SITE}/how-does-a-turnstile-system-work`;
const HERO_IMAGE = `${SITE}/images/how-it-works/full-height-turnstile-entrance-hero.jpg`;
const HERO_ALT = "Row of tripod turnstile lanes with face recognition terminals at an industrial site entrance";
const DATE = "2026-10-27";

export const metadata = {
  title: "How Does a Turnstile System Work? Architecture & Sizing",
  description:
    "How a turnstile system works (credential, reader, lane controller, permission database and software) plus a method for architecting and sizing an entrance anywhere.",
  keywords:
    "how does a turnstile system work, turnstile system working principle, turnstile access control system, entrance control system architecture, turnstile system components, how to specify a turnstile system, turnstile lane controller, pedestrian entrance control system, entrance throughput calculation, how does a turnstile know you have access, what is anti-passback in access control, do turnstiles work if the network goes down, how many turnstile lanes do I need, how many people per minute can a turnstile handle, how does a turnstile detect tailgating, how is a turnstile connected to access control software, what happens to turnstiles during a fire alarm, turnstile standards and approvals, turnstile system specification checklist",
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
    title: "How Does a Turnstile System Work? Architecture, Decision Logic and Capacity",
    description:
      "From the credential in a hand to the row in a database, how readers, lane controllers, permission servers and software combine, and how to size an entrance from observed behaviour rather than a catalogue figure.",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 3750, height: 2500, alt: HERO_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Does a Turnstile System Work? Architecture, Decision Logic and Capacity",
    description:
      "Why the catalogue throughput figure is the wrong number to design an entrance around, and why anti-passback is a building design decision rather than a software setting.",
    images: [{ url: HERO_IMAGE, alt: HERO_ALT }],
  },
};

const page = {
  "hero": {
    "h1": "How Does a Turnstile System Work?",
    "image": {
      "src": "/images/how-it-works/full-height-turnstile-entrance-hero.jpg",
      "alt": "Row of tripod turnstile lanes with face recognition terminals at an industrial site entrance",
      "width": 3750,
      "height": 2500
    }
  },
  "sections": [
    {
      "id": "what-is-a-turnstile-system",
      "h2": "What Is a Turnstile System?",
      "blocks": [
        {
          "type": "snippet",
          "parts": [
            {
              "b": "Featured-snippet definition, "
            },
            " A turnstile system is a pedestrian entrance control installation that joins credential readers, turnstile lanes, a lane controller, a central permission database and management software into a single decision-and-record loop. A person presents a credential, the controller tests it against the permissions that apply to that lane at that moment, the mechanism releases if the test passes, sensors confirm that exactly one authorised passage took place, and the event is written to the log. The turnstile itself is only the visible part of the system."
          ],
          "quick": true
        },
        {
          "type": "p",
          "parts": [
            "Two different things get called by the same name, and conflating them is the root of most disappointing entrance control projects. A ",
            {
              "i": "turnstile"
            },
            " is a mechanism: a rotating tripod head, a pair of retracting flaps, a swinging panel, a full-height rotor in a cage. A ",
            {
              "i": "turnstile system"
            },
            " is everything that decides whether that mechanism should move, everything that verifies what happened when it did, and everything that keeps the record afterwards."
          ]
        },
        {
          "type": "p",
          "parts": [
            "The practical consequence is that two buildings can install identical hardware and end up with entrances that behave nothing alike. One clears its morning arrival in twelve minutes and produces an occupancy report that the fire warden trusts. The other queues onto the street, alarms constantly, and has had its tailgating detection quietly disabled. Nothing about the metal differs. Everything about the system does."
          ]
        },
        {
          "type": "p",
          "parts": [
            "This page is about the system, and it is organised around that split. The mechanism is summarised once, in a table, because it is covered properly elsewhere, see ",
            {
              "href": "/how-does-a-tripod-turnstile-work",
              "label": "how a tripod turnstile works"
            },
            ", ",
            {
              "href": "/how-does-a-flap-barrier-gate-work",
              "label": "how a flap barrier gate works"
            },
            " and ",
            {
              "href": "/how-does-a-swing-barrier-work",
              "label": "how a swing barrier works"
            },
            ". The architecture, the decision logic and the sizing method are treated at length, because they hold anywhere and because they are where the decisions actually get made."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "how-does-a-turnstile-system-work",
      "h2": "How Does a Turnstile System Work?",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "A turnstile system works in five stages. A person ",
            {
              "b": "presents"
            },
            " a credential, a card, a face or finger, a QR pass, a PIN. A reader ",
            {
              "b": "captures"
            },
            " it and converts it into a digital identifier. A controller ",
            {
              "b": "decides"
            },
            ", testing that identifier against the permission set that applies to this lane, in this direction, at this hour, on this day. If the test passes, the controller ",
            {
              "b": "releases"
            },
            " the mechanism. Sensors then ",
            {
              "b": "confirm"
            },
            " that one authorised passage actually took place, and the event is written to the log with credential, lane, direction, outcome and timestamp."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Present, capture, decide, release, confirm, record. Everything below is detail beneath those six verbs. Two of them are invisible to the user and account for most of the engineering: ",
            {
              "i": "confirm"
            },
            ", which is how the system knows that one person rather than two went through, and ",
            {
              "i": "record"
            },
            ", which is the reason most of these installations are bought."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "the-layers-of-a-turnstile-system",
      "h2": "The Layers of a Turnstile System",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "The clearest way to understand a turnstile installation is as a stack of layers, each with one job. A fault at any layer produces a recognisably different symptom, which makes the stack the quickest route to diagnosing an entrance that is misbehaving, and the clearest way to write a specification that a supplier can answer unambiguously."
          ]
        },
        {
          "type": "h3",
          "text": "The credential layer"
        },
        {
          "type": "p",
          "parts": [
            "The credential is whatever the person carries, or is. Four families are in common use, and most working entrances run more than one at a time."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Card or RFID"
              },
              ": a proximity or smart card, a fob, or a longer-range tag. Quick, familiar and simple to issue and revoke. The weakness is that the card is not the person: it can be handed over at the door, which is the abuse anti-passback exists to address."
            ],
            [
              {
                "b": "Biometric"
              },
              ": fingerprint, face, palm vein or iris. Binds the passage to the individual rather than to an object, which is why it is the usual choice where the turnstile event also serves as an attendance record. Read time and tolerance to dust, moisture, gloves, head coverings and strong ambient light vary considerably between reader types and are worth testing against the actual population."
            ],
            [
              {
                "b": "QR code or mobile credential"
              },
              ": a code on a phone screen or a printed pass, or a credential held in an application over Bluetooth or NFC. The dominant method for visitors, because it can be issued remotely before arrival and expires without anything being collected back."
            ],
            [
              {
                "b": "PIN"
              },
              ": keypad entry, normally as a second factor beside a card rather than on its own, since a PIN shares the card's weakness and is slower to enter at a busy lane."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "The reader layer"
        },
        {
          "type": "p",
          "parts": [
            "The reader converts a presented credential into a digital identifier and passes it onward. It is the layer the user experiences, and (a point that recurs through the sizing method below) ",
            {
              "b": "it sets the practical speed of the lane far more than the mechanism does"
            },
            ". Readers mount on the pedestal head, on a separate post, or on the wall ahead of the lane, and they connect to the controller over Wiegand, OSDP, RS-485 or IP."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Direction decides how many are needed. A lane controlled in both directions needs a reader at each end; a lane free to exit needs an entry reader plus an exit sensor or request-to-exit input. Settle this before pedestals are ordered, because head cut-outs are factory work rather than a site modification."
          ]
        },
        {
          "type": "h3",
          "text": "The turnstile lane controller"
        },
        {
          "type": "p",
          "parts": [
            "The lane controller is the decision board inside the pedestal. It receives the identifier from the reader, evaluates it, drives or releases the mechanism, watches the passage sensors, raises alarms, buffers events and reports upward. On most current systems it also holds a cached copy of the permissions relevant to its lane, so it can decide on its own without asking the server, the property that lets an entrance survive a network failure, treated in its own section below."
          ]
        },
        {
          "type": "p",
          "parts": [
            "The controller is also where local behaviour is configured: release timeout, response to a tailgate detection, whether an unauthorised push produces a tone at the lane or a silent alert at a monitoring position, and how the lane responds to the emergency input."
          ]
        },
        {
          "type": "h3",
          "text": "The access control panel and permission database"
        },
        {
          "type": "p",
          "parts": [
            "Above the lanes sits the central layer, a panel, an on-premises server, or a hosted platform, depending on the architecture. This is where the authoritative permission database lives: who exists, what credential each person holds, which doors, gates and lanes they may use, on which days, between which hours, and which access groups they belong to. It is also where logic a single lane cannot perform is resolved, anti-passback being the obvious case, since knowing whether a person is currently inside requires a view of every controlled route at once."
          ]
        },
        {
          "type": "p",
          "parts": [
            "One database governing every route is the point of the layer. When a person leaves the organisation, a single revocation closes the entrance lane, the restricted-area door and the vehicle gate together. Where each entrance keeps its own list, revocation becomes a checklist somebody eventually forgets to finish, and the credential that outlives the employment is the one nobody can account for during an audit."
          ]
        },
        {
          "type": "h3",
          "text": "The network and management software"
        },
        {
          "type": "p",
          "parts": [
            "Lanes, panels and server are tied together over the building or campus network, commonly Ethernet with Power over Ethernet feeding readers and controllers, sometimes serial trunks in retrofits, often both on a site that has grown in stages. On top sits the management software, which is where the installation becomes usable: enrolling people, issuing and revoking credentials, building access groups and time schedules, monitoring lanes live, handling alarms, and producing the reports the system was actually bought for, occupancy, muster lists, attendance extracts, and exception reports on denied attempts and forced passages."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "how-does-a-turnstile-system-work-step-by-step",
      "h2": "How Does a Turnstile System Work Step by Step?",
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
                "Person approaches the lane"
              ],
              [
                "Presence sensing in the pedestals registers somebody in the approach zone. On some configurations this wakes the reader or sets the directional indicator."
              ]
            ],
            [
              [
                {
                  "b": "2"
                }
              ],
              [
                "Credential is presented"
              ],
              [
                "A card is tapped, a face or finger is presented to the biometric terminal, a QR pass is held to the scanner, or a PIN is entered."
              ]
            ],
            [
              [
                {
                  "b": "3"
                }
              ],
              [
                "Reader captures and transmits the identifier"
              ],
              [
                "The reader converts the credential into a digital identifier and sends it to the lane controller over Wiegand, OSDP, RS-485 or IP."
              ]
            ],
            [
              [
                {
                  "b": "4"
                }
              ],
              [
                "Controller evaluates the request"
              ],
              [
                "The identifier is tested against the permission set held for that lane: valid credential, permitted lane, permitted direction, permitted time, and any anti-passback or occupancy condition."
              ]
            ],
            [
              [
                {
                  "b": "5"
                }
              ],
              [
                "Decision is issued"
              ],
              [
                "Grant or deny. A denial produces a red indicator, usually a tone, and a logged denied-attempt event. A grant proceeds to release."
              ]
            ],
            [
              [
                {
                  "b": "6"
                }
              ],
              [
                "Mechanism is released"
              ],
              [
                "The controller energises the drive or releases the lock: a tripod head is freed for one rotation, flaps retract, a swing panel opens, a full-height rotor unlocks. Release is typically well under a second on motorised lanes."
              ]
            ],
            [
              [
                {
                  "b": "7"
                }
              ],
              [
                "Person passes through"
              ],
              [
                "Infrared beam arrays across the lane, or rotation sensing on the mechanism, follow the movement through the passage zone."
              ]
            ],
            [
              [
                {
                  "b": "8"
                }
              ],
              [
                "Passage is validated"
              ],
              [
                "The controller interprets the sensor pattern to establish that one person passed, in the authorised direction. Two bodies, a reversal, or a passage with no grant each produce a different pattern and a corresponding alarm."
              ]
            ],
            [
              [
                {
                  "b": "9"
                }
              ],
              [
                "Mechanism resets"
              ],
              [
                "The lane returns to its normal state. If nobody passes within the timeout, the release is cancelled and the credential must be presented again, so an authorisation cannot be stored up and used later."
              ]
            ],
            [
              [
                {
                  "b": "10"
                }
              ],
              [
                "Event is written to the log"
              ],
              [
                "Credential, person, lane, direction, outcome and timestamp are recorded locally, then uploaded to the server where they feed reporting, occupancy, attendance and any linked video bookmark."
              ]
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "Steps 4, 8 and 10 are what make this a system rather than a gate. A mechanism without them is a turnstile you push."
          ]
        },
        {
          "type": "h3",
          "text": "What the controller actually checks"
        },
        {
          "type": "p",
          "parts": [
            "Step 4 is more layered than \"is this card on the list\". A complete evaluation tests several conditions in sequence, and a failure at any one produces a denial."
          ]
        },
        {
          "type": "table",
          "head": [
            "Check",
            "What it establishes"
          ],
          "rows": [
            [
              [
                "Credential is known"
              ],
              [
                "The identifier exists in the permission set and has not been deleted."
              ]
            ],
            [
              [
                "Credential is active"
              ],
              [
                "It has not been suspended, reported lost, or passed its validity end date, the usual control for contractors, visitors and temporary assignments."
              ]
            ],
            [
              [
                "Person is permitted at this lane"
              ],
              [
                "The access group the person belongs to includes this lane. A visitor pass may open the entrance line and nothing beyond it."
              ]
            ],
            [
              [
                "Direction is permitted"
              ],
              [
                "Some lanes are entry-only or exit-only, and the same credential may be valid one way and not the other."
              ]
            ],
            [
              [
                "Time schedule allows it"
              ],
              [
                "Access groups carry day-and-time windows. A cleaning group may be valid only between defined hours; a contractor group only during permitted working periods."
              ]
            ],
            [
              [
                "Anti-passback state allows it"
              ],
              [
                "If the credential is already recorded as inside the zone, a further entry may be refused or flagged, depending on configuration."
              ]
            ],
            [
              [
                "Additional conditions, where configured"
              ],
              [
                "A second credential, a supervisor authorisation, an occupancy limit on the zone beyond, a tenant or department partition, or a valid induction, permit or qualification record held against the person."
              ]
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "Which of these are enforced is a configuration decision and varies by software platform. A small single-occupier office may enforce only the first three; a process plant may enforce all of them, including refusing a contractor whose safety induction has expired, which is a safety control implemented at an entrance rather than a security one."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "how-to-architect-and-size-a-turnstile-system-for-any-site",
      "h2": "How to Architect and Size a Turnstile System for Any Site",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "This is the section most buyers skip, and skipping it is why so many entrances end up either over-specified and bypassed or under-specified and queueing. Choosing a turnstile system is not a matter of picking a mechanism and counting lanes. It is six determinations made in order, each constraining the next, and the first three are about the site and its people rather than about the equipment."
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
          "text": "Step 1, Establish the user populations"
        },
        {
          "type": "p",
          "parts": [
            "Every subsequent decision depends on a written statement of who uses the entrance. This sounds obvious and is routinely omitted, with the result that an entrance designed around permanent staff meets a daily reality of visitors, contractors and deliveries that nobody listed."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "List every population separately"
              },
              ": permanent staff, shift staff, contractors, visitors, deliveries, and whoever operates the building itself. Each has a different credential type, a different enrolment route and a different revocation trigger."
            ],
            [
              {
                "b": "State how each population is enrolled and revoked"
              },
              ", and who performs each action. A population with no named revocation owner is a population whose credentials accumulate."
            ],
            [
              {
                "b": "State which populations are non-permanent"
              },
              " and must carry a validity end date, so that inaction produces an expiry rather than an open-ended permission."
            ],
            [
              {
                "b": "State the proportions at the peak."
              },
              " An entrance where one arrival in five is a visitor needing a reception interaction behaves nothing like one where visitors are rare, even at identical headcounts."
            ],
            [
              {
                "b": "State who carries things."
              },
              " Luggage, trolleys, deliveries, equipment and pushchairs determine how much of the traffic will use a wide lane, and that proportion is almost always underestimated."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Step 2, Establish the observed peak, not the catalogue rate"
        },
        {
          "type": "p",
          "parts": [
            "Total entrance capacity is simple arithmetic: ",
            {
              "code": "lanes x per-lane rate = people per minute"
            },
            ". If a lane handles 25 people per minute and an entrance has four lanes, the entrance handles 100 per minute, or 2,000 in a twenty-minute arrival peak. The arithmetic is not where designs go wrong. ",
            {
              "b": "The per-lane rate is."
            }
          ]
        },
        {
          "type": "p",
          "parts": [
            "Catalogue throughput figures are measured under ideal conditions: a continuous stream of people, each with a credential already in hand, presenting it cleanly and walking through without hesitation. Real entrances do not behave like that. People arrive in clusters when a lift discharges, a train empties or a shuttle pulls in. They find the card at the lane rather than before it. They stop to position themselves for a face terminal, or present a finger that needs a second attempt. They carry things in both hands. In practice the per-lane rate is set by credential presentation rather than mechanism speed, and the gap between catalogue and observed figures is routinely large."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Count the peak, do not average it."
              },
              " Measure arrivals in the busiest fifteen or twenty minutes. A daily total conceals exactly the condition that determines whether the entrance works."
            ],
            [
              {
                "b": "Time a real presentation"
              },
              " with the credential type you intend to use, on people representative of the population, in the clothing and with the items they actually carry."
            ],
            [
              {
                "b": "Derive it where it cannot be counted."
              },
              " On a new building, build the peak from headcount, shift pattern, occupancy density, lift capacity and the arrival profile the transport links produce."
            ],
            [
              {
                "b": "Include the seasonal case"
              },
              " where the building has one, and state whether the design serves the routine peak or the seasonal peak, because they can differ by a large factor."
            ],
            [
              {
                "b": "Record the result as a number"
              },
              " (for example \"peak 1,400 arrivals in 20 minutes, twice daily\") because that is the figure a supplier and a designer can both answer against."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Step 3, Decide the permission architecture"
        },
        {
          "type": "p",
          "parts": [
            "This is the determination that distinguishes a system from a purchase, and it is where the software decisions are actually made. The structure that works is consistent across platforms even where the terminology differs: people go into ",
            {
              "b": "access groups"
            },
            ", lanes and doors are gathered into ",
            {
              "b": "zones"
            },
            ", and a group is granted a zone on a ",
            {
              "b": "schedule"
            },
            ". Nobody holds a list of doors; everybody holds a role, and the role carries the doors."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Design the group and zone structure before enrolment begins"
              },
              ", not after. Retrofitting structure onto a database of individually-granted permissions is far harder than building it correctly once."
            ],
            [
              {
                "b": "Keep the group count readable."
              },
              " A structure a reviewer cannot read is a structure nobody audits."
            ],
            [
              {
                "b": "Decide whether the database is partitioned"
              },
              " (by tenant, department, site or operating company) and test at commissioning that one partition's administrator cannot see or affect another's records."
            ],
            [
              {
                "b": "Decide who issues and who revokes"
              },
              ", for each population from Step 1, and write it into the handover documentation rather than leaving it to memory."
            ],
            [
              {
                "b": "Decide the reconciliation cycle"
              },
              ": a periodic review in which record owners confirm their active lists, with unconfirmed records suspended rather than deleted so a mistake is recoverable."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Step 4, Decide the mechanism and the lane mix"
        },
        {
          "type": "p",
          "parts": [
            "With populations, peak and permission structure written down, the mechanism decision becomes straightforward rather than a matter of preference. It follows from what the entrance physically has to do and who has to get through it."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Physical restriction at an unstaffed boundary"
              },
              " points to a full-height unit, because nothing waist-height restrains anybody and a cage geometry does."
            ],
            [
              {
                "b": "Volume through a finished public-facing entrance"
              },
              " points to speed gates, where throughput and appearance both matter and the sensing layer does the restricting."
            ],
            [
              {
                "b": "Accessibility, luggage and trolleys"
              },
              " point to a wide swing lane, and every entrance needs at least one regardless of the rest of the mix."
            ],
            [
              {
                "b": "Robust mechanical control at a works or site gate"
              },
              " points to tripod lanes, where appearance matters less than a mechanism that tolerates heavy use."
            ],
            [
              {
                "b": "Specify the lane mix as a ratio with a reason"
              },
              ", not as a count. \"Four standard lanes plus one accessible wide lane, the wide lane counted as a working lane in the throughput calculation\" is a requirement. \"Five lanes\" is not."
            ],
            [
              {
                "b": "Treat the accessible lane as part of the main line."
              },
              " A side gate a guard opens on request is a route people use reluctantly, and it will not carry the traffic the calculation assigned to it."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Step 5, Decide the detection and response posture"
        },
        {
          "type": "p",
          "parts": [
            "Tailgating detection is not a feature that is either on or off. It is a sensitivity setting with a genuine trade-off, and a response procedure that determines whether the setting matters at all."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Decide what the lane does on a detection"
              },
              ": audible alarm, silent alert to a monitoring position, mechanism closing against the follower, or the lane locking until an operator resets it. These place very different demands on staffing."
            ],
            [
              {
                "b": "Decide who responds, and how fast."
              },
              " This is the determination that gives the detection its value. An alarm nobody answers converts a security control into a noise source, and the usual next step is somebody reducing the sensitivity to stop it."
            ],
            [
              {
                "b": "Match the setting to the population."
              },
              " A corporate floor, a hospital entrance and a residential lobby tolerate completely different false-alarm rates, and a setting carried between them will be wrong in at least one."
            ],
            [
              {
                "b": "Plan to tune after commissioning"
              },
              " against observed behaviour over the first weeks, and record the final setting so later drift is detectable."
            ],
            [
              {
                "b": "Decide the anti-passback posture here too"
              },
              " (hard, soft, timed or none) and verify against the exit survey described below before committing to it."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Step 6, Establish the fail-state and resilience requirements"
        },
        {
          "type": "p",
          "parts": [
            "The last determination is what the entrance does on a bad day, and it has three independent parts that are frequently confused with one another."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Emergency behaviour"
              },
              ": what each lane does on a fire alarm or life-safety signal. This is settled with the building's life-safety strategy and the authority having jurisdiction, not chosen from a product list. See the jurisdiction section below."
            ],
            [
              {
                "b": "Power loss behaviour"
              },
              ": what the lane does when the supply fails, and for how long a battery or uninterruptible supply must hold the entrance in normal operation. State the required run time as a number."
            ],
            [
              {
                "b": "Network and server loss behaviour"
              },
              ": whether the lane continues to decide from a cached permission set, how many credentials that cache holds, and whether events buffer or are discarded. Require the supplier to confirm all three in writing against the specific model and software version."
            ],
            [
              {
                "b": "Assurance"
              },
              ": how it is proven. Specify that the emergency release is tested on every lane during scheduled drills, that the entrance is proven with mains removed, and that controller synchronisation is verified rather than assumed."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Writing it down: a six-line entrance control schedule"
        },
        {
          "type": "p",
          "parts": [
            "The six determinations condense into a schedule that can be issued with a tender and answered unambiguously by any supplier. Its value is its brevity, six lines that leave no room for a bare model name to pass as an answer."
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
                "1 · Populations"
              ],
              [
                "Every user population, its credential type, its enrolment and revocation owner, and which populations carry validity end dates"
              ],
              [
                "\"Permanent staff on card plus face; contractors on dated cards expiring with the permit; visitors on pre-issued QR passes valid for the entrance line only; revocation owned by the issuing department\""
              ]
            ],
            [
              [
                "2 · Peak demand"
              ],
              [
                "Observed or derived arrivals at the peak, the duration of the peak, and the presentation time assumed per credential type"
              ],
              [
                "\"Peak 1,400 arrivals in 20 minutes, twice daily; presentation time measured at 2.4 seconds per person on face recognition\""
              ]
            ],
            [
              [
                "3 · Permission architecture"
              ],
              [
                "Group and zone structure, partitioning, issue and revocation ownership, reconciliation cycle"
              ],
              [
                "\"Role-based groups granted zones on schedules; database partitioned by occupying company; quarterly reconciliation with unconfirmed records suspended\""
              ]
            ],
            [
              [
                "4 · Lane mix"
              ],
              [
                "Mechanism types, lane count, the accessible lane and its treatment in the calculation"
              ],
              [
                "\"Six speed gate lanes plus one accessible wide lane, the wide lane counted as a working lane; all lanes bidirectional and schedule-switched\""
              ]
            ],
            [
              [
                "5 · Detection and response"
              ],
              [
                "Detection behaviour, response owner and target response time, anti-passback posture"
              ],
              [
                "\"Tailgate detection with silent alert to the monitoring position; response within 60 seconds; soft anti-passback pending completion of exit coverage\""
              ]
            ],
            [
              [
                "6 · Fail states and resilience"
              ],
              [
                "Emergency behaviour per lane, supply run time, cached decision capacity and event buffering, assurance regime"
              ],
              [
                "\"All lanes fail-safe per the life-safety strategy; 60 minutes on battery; local decision caching for the full site population with event buffering confirmed in writing; release tested on every lane at each drill\""
              ]
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "A supplier who can answer all six lines against a specific model and software version has told you something useful. A supplier who answers only with a throughput figure has not."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "why-the-lane-decides-locally-and-what-happens-in-an-outage",
      "h2": "Why the Lane Decides Locally, and What Happens in an Outage",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "A central permission database raises an obvious worry: if everything depends on one server, what happens to the entrance when the link to it fails? On most systems the answer is that nothing happens, because the lane was never asking the server in the first place."
          ]
        },
        {
          "type": "p",
          "parts": [
            "The lane controller holds a cached copy of the permission set that applies to its lane (the credential list, the groups and the schedules) and decides locally in milliseconds. The server is informed afterwards. When a switch fails, a link is cut, a server is rebooting or an update is running, the lane continues to grant and deny correctly from its cache, buffers its events locally, and uploads them once the link returns. Only changes made during the outage (a credential issued or revoked in the last few minutes) are unavailable until synchronisation catches up."
          ]
        },
        {
          "type": "p",
          "parts": [
            "This is a deliberate design property, not a law of nature. Some lightweight and cloud-first architectures make the decision centrally and genuinely stop working when the link drops, which may be perfectly acceptable at a low-traffic door and is rarely acceptable at a main entrance. Four things are worth confirming in writing during specification: that local caching exists; that it is enabled in the proposed configuration; that the controller's credential capacity covers the whole site population rather than a first phase; and that events buffer rather than being discarded when the buffer fills. The failure mode only reveals itself on the day the network goes down, which is exactly the day an entrance full of people cannot wait for a diagnosis."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "how-the-system-confirms-one-authorised-passage",
      "h2": "How the System Confirms One Authorised Passage",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "Granting access is the easy half. Establishing that what followed the grant was a single, authorised, correctly-directed passage is where the sensing layer earns its place, and where most of the alarms an operator ever sees originate."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Two sensing approaches are in use, often together. ",
            {
              "b": "Infrared beam arrays"
            },
            " run across the lane between the pedestals as a vertical column of transmitter and receiver pairs. As a person walks through, beams break and restore in a sequence, and the controller reads that sequence as a signature: how many beams broke, in what order, at what height, over what interval. One body produces a recognisable pattern; two people close together produce a different one; somebody reversing produces another. ",
            {
              "b": "Mechanical rotation detection"
            },
            " applies where the mechanism physically rotates (a tripod head or a full-height rotor) and the controller counts detents to confirm exactly one segment of rotation."
          ]
        },
        {
          "type": "p",
          "parts": [
            "From that sensing the controller distinguishes a normal passage from a ",
            {
              "b": "tailgate"
            },
            ", where a second person follows on one authorisation; a ",
            {
              "b": "wrong-direction entry"
            },
            ", the commonest route past an entry-only lane; a ",
            {
              "b": "forced passage"
            },
            ", where the mechanism is pushed with no grant; and a ",
            {
              "b": "timeout"
            },
            ", where a grant was issued and nobody walked through. Each is logged, and each can be configured to alarm audibly, alert silently, or close a motorised mechanism against the follower."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Detection sensitivity is a configuration choice with a real trade-off, which is why it appears as its own determination in the method above. Set it high and the lane catches close-following reliably but also alarms on a parent with a small child, somebody carrying a large box, and two people walking abreast through a wide lane. Set it low and the lane is quiet but permits genuine tailgating. The setting that works is found by tuning against observed behaviour in the weeks after commissioning, not by selecting a number in a specification."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "how-anti-passback-works",
      "h2": "How Anti-Passback Works",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "Anti-passback addresses one specific abuse: a single credential used by more than one person. Somebody enters with a card and passes it back out to a colleague, who enters on the same credential. The sensors cannot see this, because both passages look entirely normal. The answer therefore has to come from the system's memory rather than its eyes."
          ]
        },
        {
          "type": "p",
          "parts": [
            "The system holds a state for every credential: ",
            {
              "b": "in"
            },
            " or ",
            {
              "b": "out"
            },
            " of the controlled zone. Entering flips the state to in. Exiting flips it back to out. If a credential already recorded as in attempts another entry with no exit in between, the system knows the card cannot physically be outside, and acts on that."
          ]
        },
        {
          "type": "h3",
          "text": "Hard, soft and timed anti-passback"
        },
        {
          "type": "table",
          "head": [
            "Mode",
            "Behaviour",
            "Typically suited to"
          ],
          "rows": [
            [
              [
                {
                  "b": "Hard anti-passback"
                }
              ],
              [
                "The second entry is refused outright. The person cannot pass until an exit is recorded, which usually means an administrator resetting their state."
              ],
              [
                "Zones where duplicate use must be prevented rather than merely observed, secure areas, controlled production zones, and any zone carrying a live occupancy limit."
              ]
            ],
            [
              [
                {
                  "b": "Soft anti-passback"
                }
              ],
              [
                "The second entry is allowed but flagged and logged as a violation for review."
              ],
              [
                "Offices, campuses and public-facing buildings that want the visibility without the risk of stranding people at a lane."
              ]
            ],
            [
              [
                {
                  "b": "Timed anti-passback"
                }
              ],
              [
                "The same credential cannot be reused at the same lane within a set interval, after which the state clears itself."
              ],
              [
                "A lighter control that blocks immediate card-passing without requiring complete exit coverage across the zone."
              ]
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Why anti-passback fails in practice"
        },
        {
          "type": "p",
          "parts": [
            "Anti-passback is defeated by a single uncontrolled exit route, and this is the commonest reason it is switched off within a month of being switched on. If people can leave the controlled zone through a fire door, a loading bay, a stair discharging into a car park or a service gate that registers no exit, their credentials never flip back to out. They arrive the next morning already recorded as inside, the lane refuses them, a queue forms, and the administrator disables the feature rather than reset several hundred states by hand."
          ]
        },
        {
          "type": "p",
          "parts": [
            "The implication is the most useful single idea on this page: ",
            {
              "b": "anti-passback is a building design decision as much as a software setting."
            },
            " It works where every route in and out of the controlled zone is read in both directions, and it does not work where one is not. That has to be established by walking the perimeter during design and recording which routes are read, not discovered during operation, by which time the floor plan is fixed. Where full exit coverage is genuinely impossible, timed or soft anti-passback delivers part of the benefit without the operational failure, and saying so in the specification is better than specifying hard anti-passback that will be turned off."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "turnstile-mechanism-types-compared",
      "h2": "Turnstile Mechanism Types Compared",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "The system layers described above are broadly the same whichever mechanism sits in the lane. What changes is physical control, throughput, appearance and accessibility. This table is deliberately summary-level; each type has a dedicated page carrying the mechanical detail."
          ]
        },
        {
          "type": "table",
          "head": [
            "Type",
            "Mechanism",
            "Anti-tailgating method",
            "Accessibility",
            "Throughput",
            "Typically suited to"
          ],
          "rows": [
            [
              [
                {
                  "b": "Tripod turnstile"
                }
              ],
              [
                "Three arms on a rotating head locked between detents; one authorisation frees one 120-degree rotation"
              ],
              [
                "Mechanical, the head physically permits a single rotation per grant"
              ],
              [
                "Not wheelchair accessible; needs a separate accessible route"
              ],
              [
                "Moderate"
              ],
              [
                "Plants, works and site gates, campuses, stadium perimeters, staff entrances"
              ]
            ],
            [
              [
                {
                  "b": "Flap barrier / speed gate"
                }
              ],
              [
                "Acrylic or polycarbonate flaps retracting into the pedestals"
              ],
              [
                "Sensor-based, infrared arrays detect a second body and the flaps can close against it"
              ],
              [
                "Wide-lane variants available for wheelchairs and luggage"
              ],
              [
                "High"
              ],
              [
                "Corporate lobbies, transport concourses, airports, hotels, high-volume entrances"
              ]
            ],
            [
              [
                {
                  "b": "Swing barrier"
                }
              ],
              [
                "A glass or metal panel swinging open about a vertical axis"
              ],
              [
                "Sensor-based, with panel width and lane length limiting close-following"
              ],
              [
                "Most suitable of the three for wheelchairs, trolleys and luggage; wide lanes are standard"
              ],
              [
                "Moderate to high"
              ],
              [
                "Hospitals, banks, museums, any entrance needing barrier-free access"
              ]
            ],
            [
              [
                {
                  "b": "Full-height turnstile"
                }
              ],
              [
                "A floor-to-ceiling rotor in a cage, rotating one segment per authorisation"
              ],
              [
                "Physical, the cage geometry makes passing two people together impractical"
              ],
              [
                "Not accessible; requires an adjacent accessible gate"
              ],
              [
                "Lower"
              ],
              [
                "Perimeter fences, unstaffed entrances, substations, yards, plant boundaries"
              ]
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "Selection follows from Step 4 of the method above rather than from preference, and a well-designed entrance usually mixes types. The common arrangement pairs several high-throughput lanes for volume with one wide accessible lane for everybody the narrow lanes exclude, which, in a building with deliveries, luggage or equipment, is a larger proportion of the traffic than most layouts assume."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "life-safety-accessibility-and-conformity-regimes-that-differ-by-jurisdiction",
      "h2": "Life Safety, Accessibility and Conformity: Regimes That Differ by Jurisdiction",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "This is where international specifiers are most often misled. The physics of a turnstile is the same everywhere; the rules governing what it must do are not. Three distinct regimes apply to a turnstile system, they are set jurisdictionally, and in several respects they are set sectorally as well. There is no single international rule that determines how an entrance must behave, and an arrangement accepted in one country carries no automatic status in another."
          ]
        },
        {
          "type": "p",
          "parts": [
            "The practical consequence is a sequencing rule: ",
            {
              "b": "identify the applicable regimes before fixing the entrance layout, not after."
            },
            " Each of the three can change a floor plan, and a floor plan is the hardest thing on a project to change late."
          ]
        },
        {
          "type": "h3",
          "text": "Emergency egress and the fail-state decision"
        },
        {
          "type": "p",
          "parts": [
            "A turnstile sits on an escape route, and its behaviour in an emergency is a life-safety matter rather than a security preference. The configuration choice is ",
            {
              "b": "fail-safe"
            },
            " (the lane releases and allows free passage on an emergency signal or loss of power) versus ",
            {
              "b": "fail-secure"
            },
            ", where the lane stays locked and continues to restrict passage. Both are legitimate, for different routes, and the mechanism behaves differently in each case: drop-arm tripods release their arms, retracting-panel lanes pull their panels in or swing them open and hold, and full-height units either free the rotor or rely on an adjacent gate released on the same signal."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Who decides is the part that varies. In some jurisdictions the fail state is effectively determined by the fire authority or by the applicable building regulation; in others it is agreed with the life-safety designer within a performance framework. What does not vary is that it is settled with the building's life-safety strategy rather than chosen in a controller, and that the determination covers the whole lane line rather than one lane, because during an evacuation every lane becomes an exit lane at once including the ones configured entry-only an hour earlier."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Three technical requirements hold regardless of regime. The interface should be a hardwired contact from the alarm panel rather than a software command over the network, because the network is one of the things that may not be working. It should be tested on every lane as part of scheduled drills rather than only at handover. And the line must return to normal operation cleanly once the alarm is reset, the part that is rarely tested and frequently surprises people."
          ]
        },
        {
          "type": "h3",
          "text": "Accessibility provision"
        },
        {
          "type": "p",
          "parts": [
            "Accessibility requirements for entrances are set nationally and sometimes sub-nationally, and they differ in what they specify: clear width, approach and manoeuvring space, operating force, control heights, surface and tactile treatment, and whether an accessible route may be separate from the main route or must be integrated with it. Dimensions quoted in a product catalogue describe the product; they do not establish that an installation satisfies a local requirement."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Two points are worth stating plainly. The required clear width must be taken from the regime applying at the site, and confirmed before the floor layout is fixed, because widening a lane after services are cast in is a construction change rather than an equipment change. And an accessible route that requires somebody to ask a guard for help is a route people use reluctantly even where it technically complies, so integrating the wide lane into the main line is good design independent of what the regime requires."
          ]
        },
        {
          "type": "h3",
          "text": "Conformity and market access"
        },
        {
          "type": "p",
          "parts": [
            "A turnstile lane is powered equipment with moving parts and electronics, so several general regimes apply to it alongside the two above. What matters internationally is knowing which ones to ask about, and that a mark required in one region is not automatically accepted in another."
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
                "Machinery and equipment safety"
              ],
              [
                "Mechanical hazards of powered moving parts, trapping, impact, obstruction response and emergency stopping"
              ],
              [
                "Which machinery safety regime applies in the country of installation and what evidence a supplier is expected to hold for the specific model."
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
                "Which EMC regime applies locally, and whether the site has known noise sources that should be declared before equipment selection."
              ]
            ],
            [
              [
                "Electrical safety and installation"
              ],
              [
                "Supply voltage and frequency, earthing, protective devices, cable selection and labelling"
              ],
              [
                "The national wiring rules, and who is competent and licensed to perform and certify the installation."
              ]
            ],
            [
              [
                "Life-safety and fire authority approval"
              ],
              [
                "Behaviour of the entrance on alarm, egress capacity and the interface to the alarm system"
              ],
              [
                "Which authority determines the fail state for this building type, and what documentation and testing it expects."
              ]
            ],
            [
              [
                "Accessibility regulation"
              ],
              [
                "Clear width, approach space and whether the accessible route must be integrated"
              ],
              [
                "The requirement applying at the site, confirmed before the layout is fixed."
              ]
            ],
            [
              [
                "Regional product conformity marking"
              ],
              [
                "Market access schemes, which differ by region and sometimes require in-country testing, registration or a local representative"
              ],
              [
                "Which marking scheme, if any, applies to this product category in this market, and what evidence the importer must hold."
              ]
            ],
            [
              [
                "Security industry licensing"
              ],
              [
                "Who may supply, install, operate and maintain security systems"
              ],
              [
                "Whether the installer and the operator require authorisation in the country of installation, frequently a separate question from the equipment itself."
              ]
            ],
            [
              [
                "Data protection and recording"
              ],
              [
                "What personal data a passage log and a biometric template constitute, how long they may be held and what notice must be given"
              ],
              [
                "What may be recorded, for how long, what notice is required, and whether biometric enrolment needs explicit consent or an alternative credential option. A growing area of divergence between jurisdictions."
              ]
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "Two points follow and are worth stating plainly. ",
            {
              "b": "A conformity mark is not a performance statement"
            },
            ": market access marking addresses matters such as electrical safety and electromagnetic compatibility, and says nothing about how well a lane detects tailgating or how many people it will pass at a real peak. And ",
            {
              "b": "the obligation to identify the applicable regimes sits with the specifier and the importer"
            },
            ", not with an overseas manufacturer who may have no visibility of the destination market's rules."
          ]
        },
        {
          "type": "note",
          "parts": [
            "Nothing on this page should be read as a statement that any particular product holds any particular approval, certification, conformity status or performance rating. Approval status is a question for the supplier of the specific model, in the specific market, and should be confirmed in writing with supporting documentation before a specification is issued."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "environmental-derating-as-a-general-principle",
      "h2": "Environmental Derating as a General Principle",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "Turnstile lanes are usually specified as indoor equipment, and the conditions that cause trouble are the ones at entrances that are not quite indoors: a lobby whose doors cycle continuously, a covered but open approach, a gatehouse with minimal conditioning, a concourse behind a fully glazed facade. The general principle holds across every climate: ",
            {
              "b": "a catalogue figure assumes reference conditions, and a real entrance rarely matches them."
            }
          ]
        },
        {
          "type": "p",
          "parts": [
            "Five conditions recur, and each acts on a different part of the system:"
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "High ambient temperature"
              },
              " reduces the permissible duty of a motorised mechanism, because published cycle rates are stated at a reference ambient. Sustained elevated temperature also shortens the life of power supply and drive electronics, which shows up as a lane needing attention more often than its neighbours rather than as an outright failure."
            ],
            [
              {
                "b": "Airborne particulates"
              },
              " are the condition that acts most consequentially on a turnstile ",
              {
                "i": "system"
              },
              " rather than on its mechanism, because the passage sensors are optical. Dust on a beam lens attenuates the signal until a receiver reads an unbroken beam as broken, and the controller treats that as a body in the lane, producing obstruction and tailgate alarms against nobody. The chain that follows is the one to avoid: nuisance alarms accumulate, operators stop trusting them, and somebody reduces the sensitivity, at which point the detection the system was bought for has been disabled by a dirty lens. Dust also degrades biometric and optical readers, which slows presentation and therefore throughput."
            ],
            [
              {
                "b": "Coastal and salt-laden air"
              },
              " drives corrosion specification, and on an indoor lane it concentrates at the pedestal base: fixings where wash-water and footwear-borne salt collect, and terminations where humid air gives up moisture on a cool night. Corroding terminations produce intermittent faults that present as electronic or software problems and get investigated as such."
            ],
            [
              {
                "b": "Sub-zero conditions"
              },
              " at an exposed entrance introduce condensation as equipment moves between temperatures, can stiffen mechanisms and lubricants, and may require heaters, a specification item rather than an accessory."
            ],
            [
              {
                "b": "Heavy rainfall and wind-driven water"
              },
              " at a semi-open entrance demand attention to sealing, gland detail and drainage away from pedestal bases, which is rarely addressed by a general indoor rating."
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "The response is the same in every case and is a single sentence worth putting in a specification: state the conditions the equipment will actually experience, require the supplier to confirm in writing that the proposed model suits them, and set maintenance intervals from those conditions rather than from a generic schedule. A lane in a conditioned corporate lobby and a lane at a dusty works gate do not need the same cleaning frequency, and giving them the same one means over-visiting the first and under-visiting the second."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "where-turnstile-systems-are-used",
      "h2": "Where Turnstile Systems Are Used",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "Pedestrian entrance control appears wherever people must be identified and recorded at a defined point. The site types below recur in every region, and each carries a characteristic system profile rather than simply a different mechanism:"
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Corporate campuses and office buildings"
              },
              ": the dominant application. Speed gate lines with card or face credentials, attendance capture and lift control behind the lane, and a permission database that frequently has to partition by occupying company."
            ],
            [
              {
                "b": "Manufacturing plants and process facilities"
              },
              ": tripod or full-height lanes at staff and contractor gates, often with induction or permit validity enforced at the lane, and a contractor population that turns over with every shutdown."
            ],
            [
              {
                "b": "Logistics and distribution centres"
              },
              ": shift-change arrivals concentrating the entire day's throughput into a few minutes, which makes the observed-peak method in Step 2 decisive rather than advisory."
            ],
            [
              {
                "b": "Ports and terminals"
              },
              ": personnel gates where pedestrian and vehicle access are governed from one credential database and the controlled zone has a long, complicated perimeter that determines whether anti-passback is viable."
            ],
            [
              {
                "b": "Airports and transport interchanges"
              },
              ": high-throughput lines for staff and crew behind a screening stage, and fare or pass validation lines sized around vehicle discharge peaks rather than average flow."
            ],
            [
              {
                "b": "Hospitals and healthcare campuses"
              },
              ": wide lanes dividing public areas from clinical zones, where trolley and wheelchair movement is the normal case and staff, patient and visitor routes usually need separating at the entrance."
            ],
            [
              {
                "b": "Universities and educational campuses"
              },
              ": timetable-driven peaks, large seasonal variation, and a population that changes substantially once a year, which makes enrolment logistics a project in itself."
            ],
            [
              {
                "b": "Retail and mixed-use developments"
              },
              ": office cores and tenant-only areas behind a public environment, where entrance control starts at the core rather than at the street."
            ],
            [
              {
                "b": "Residential communities"
              },
              ": lobby lanes tied into a visitor process, where deliveries are continuous and the tailgating response has to suit a residential population rather than a corporate one."
            ],
            [
              {
                "b": "Government and institutional facilities"
              },
              ": controlled public entry with an accessibility obligation, a formal visitor process ahead of the lane and reporting requirements that make the event log as important as the barrier."
            ],
            [
              {
                "b": "Stadiums and event venues"
              },
              ": large banks of lanes validating ticket credentials, engineered entirely around a short, extreme arrival peak that occurs a few dozen times a year."
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "TimeWatch supplies turnstiles and complete pedestrian entrance control systems internationally, and maintains dedicated regional sites for several markets, see the regional guidance below for where to look for locally relevant information."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "integration-with-other-systems",
      "h2": "Integration With Other Systems",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "A turnstile system is one of the more heavily integrated elements in a building, because a passage event is useful to several other systems at once. Each integration below is specified at design stage rather than added later, because most of them change either the layout or the data model."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Visitor management"
              },
              ": a visitor is pre-registered, receives a QR pass before arrival, and that pass is accepted at the entrance line for a defined window and location. The host is notified on arrival and the pass expires by itself."
            ],
            [
              {
                "b": "Time and attendance"
              },
              ": the passage becomes the attendance event. Because the person had to pass the lane to reach their workplace, the record is harder to fabricate than a separate punch at a wall unit, and one presentation serves both purposes."
            ],
            [
              {
                "b": "Video surveillance"
              },
              ": cameras overlooking the lanes bookmark footage against each event, so any passage can be reviewed from its log entry rather than by scrubbing a timeline. This is what converts a tailgate alarm from a tone into evidence, and it is the integration that gives the detection posture from Step 5 its value."
            ],
            [
              {
                "b": "Lift and destination control"
              },
              ": the credential read at the lane calls a lift and allocates a car, or restricts the floors the person may select. It changes the entrance layout, because queueing moves from the lift bank to the lane line."
            ],
            [
              {
                "b": "Screening equipment"
              },
              ": walk-through metal detectors and baggage scanners positioned ahead of the lane so screening completes before the credential check, keeping the turnstile as the last point rather than the queue point."
            ],
            [
              {
                "b": "Vehicle gates and parking"
              },
              ": the same credential database governs the barrier and the pedestrian lane, so one revocation closes both routes and the two sets of events reconcile."
            ],
            [
              {
                "b": "HR and directory systems"
              },
              ": automated provisioning from the personnel record, so joiners are enrolled and leavers revoked without a manual step. On a large site this is usually the difference between a database that stays accurate and one that does not."
            ],
            [
              {
                "b": "Fire alarm and building management"
              },
              ": the hardwired emergency release, plus occupancy data shared for muster reporting during an evacuation and, on some sites, for environmental control."
            ]
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "installation-commissioning-and-assurance",
      "h2": "Installation, Commissioning and Assurance",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "Turnstile installations disappoint for planning reasons far more often than for equipment reasons. The items below are where projects are won or lost, and all of them are decided before anything is delivered."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Queue and dispersal space"
              },
              ": the line needs clear space in front of it for people to form up and clear space behind it for them to disperse. A line placed too close to a lift lobby or a doorway moves the congestion rather than resolving it."
            ],
            [
              {
                "b": "Floor preparation and cable routing"
              },
              ": pedestals fix to a level, load-bearing floor with conduits arriving in the right position, cast or chased before the floor finish is laid. Retrofitting conduit into a finished floor is disruptive and often visible."
            ],
            [
              {
                "b": "Lane count and mix from the observed peak"
              },
              ", with the accessible lane counted as a working lane rather than held in reserve."
            ],
            [
              {
                "b": "Reader type and mounting height"
              },
              ": decided early, because pedestal cut-outs are factory work. Face terminal positioning needs to suit the height range of the population and avoid strong backlighting from a glazed facade, which is a recognition problem rather than a product fault."
            ],
            [
              {
                "b": "Direction strategy"
              },
              ": which lanes are bidirectional, how morning and evening configurations are switched, and who holds authority to override."
            ],
            [
              {
                "b": "Network and power design"
              },
              ": switch capacity, PoE capacity, cable runs within limits, and an uninterruptible supply sized for the run time stated in Step 6."
            ],
            [
              {
                "b": "Exit route survey"
              },
              ": walk every route out of each controlled zone before committing to anti-passback, and record which ones are read. This is the single most skipped step on the list and the one that most often disables a feature after handover."
            ],
            [
              {
                "b": "Emergency interface routing"
              },
              ": hardwired from the alarm panel, with the release path agreed in the life-safety strategy and the cabling installed accordingly."
            ],
            [
              {
                "b": "Enrolment logistics"
              },
              ": enrolling a large population of biometric templates takes planning and scheduled time. It is routinely underestimated and it is the usual reason a go-live date slips."
            ],
            [
              {
                "b": "Commissioning record"
              },
              ": beam alignment verified and recorded across the full lane length, detection sensitivity recorded after tuning, and partition separation proven, so later drift is detectable as drift rather than investigated as a new fault."
            ],
            [
              {
                "b": "Recurring assurance"
              },
              ": emergency release tested on every lane at each drill, entrance proven with mains removed, controller synchronisation verified, alarm and denial trends reviewed, and the credential database audited for records with no expiry and long-dormant credentials."
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
              "Every passage is decided against a central permission set and recorded with credential, lane, direction, outcome and time, producing an audit trail manual checking cannot match."
            ],
            [
              "One database governs every controlled route, so a single revocation closes them all at once and a single group change moves a department."
            ],
            [
              "Accurate live occupancy, which supports muster reporting during an evacuation and capacity management day to day."
            ],
            [
              "Attendance capture without a separate device or a second action by the user."
            ],
            [
              "Reduces the routine load on reception and security staff, who move from checking everybody to handling the exceptions the system raises."
            ],
            [
              "Continues to operate correctly through a network or server outage where local caching is properly configured."
            ],
            [
              "Scales by configuration rather than by rebuilding, adding a building to an existing zone grants a whole population correct access without editing individual records."
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
                "b": "A turnstile manages and records passage; it does not physically restrain a determined person."
              },
              " Waist and chest-height lanes can be climbed or vaulted. The security value comes from the alarm the attempt raises, the video bookmarked against it and the response procedure behind them. An installation where nobody answers the alarm has bought a queue manager rather than a security control."
            ],
            [
              {
                "b": "Anti-passback depends on complete exit coverage"
              },
              " and fails as a feature wherever an uncontrolled exit route exists."
            ],
            [
              {
                "b": "Throughput is limited by credential presentation"
              },
              ", so the observed rate sits below the catalogue figure and the design has to allow for that."
            ],
            [
              {
                "b": "Tailgating detection involves a trade-off"
              },
              " between nuisance alarms and missed events, and the setting needs tuning against real behaviour rather than being selected in advance."
            ],
            [
              {
                "b": "The environment acts on the system quietly"
              },
              " (through degraded reads, attenuated sensor beams, corroded terminations and shortened electronics life) and the usual outcome is a function disabled to stop the symptoms rather than a fault anybody records."
            ],
            [
              {
                "b": "Requirements vary by jurisdiction and by building type."
              },
              " Life-safety fail states, accessibility provision, conformity marking, installer licensing and data protection are all set locally, and an arrangement accepted at one site carries no automatic status at another."
            ],
            [
              {
                "b": "The system depends on power"
              },
              ", and the required run time has to be decided and provided for rather than assumed."
            ],
            [
              {
                "b": "Enrolment and administration are continuing work."
              },
              " A database nobody maintains degrades into a list of credentials nobody can account for."
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "Exact behaviour (decision logic, caching capacity, sensor configuration, throughput, emergency release and integration options) depends on the specific mechanism, controller, software platform and site configuration. Figures should always be confirmed against the datasheet and software documentation for the equipment being specified."
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
            "This page is written to be useful anywhere, which means it deliberately avoids national specifics. Local life-safety authorities, local accessibility regulation, local licensing of security installers, local availability and support arrangements, and local environmental conditions all differ, and generic advice on those subjects is worth less than none."
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
                "href": "https://www.timewatchindia.com/how-does-a-turnstile-system-work",
                "label": "timewatchindia.com, How does a turnstile system work?"
              }
            ],
            [
              {
                "b": "Saudi Arabia"
              },
              ": ",
              {
                "href": "https://www.timewatcharabia.com/how-does-a-turnstile-system-work",
                "label": "timewatcharabia.com, How does a turnstile system work?"
              }
            ],
            [
              {
                "b": "United Arab Emirates"
              },
              ": ",
              {
                "href": "https://www.timewatchuae.com/how-does-a-turnstile-system-work",
                "label": "timewatchuae.com, How does a turnstile system work?"
              }
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "Readers elsewhere are in the right place. The architecture, the sizing method and the regime checklist on this page apply to any location, what you supply is the populations, the observed peak, the permission structure and the applicable jurisdictional requirements, and the method does the rest."
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
        "q": "What is the difference between a turnstile and a turnstile system?",
        "a": "The turnstile is the mechanism in the lane, a tripod head, a pair of flaps, a swing panel or a full-height rotor. The turnstile system is everything that decides whether it should move and records what happened: the readers, the lane controller, the access control panel and permission database, the network and the management software. Two buildings with identical hardware can behave very differently because the behaviour lives in the system."
      },
      {
        "q": "How does a turnstile know who you are?",
        "a": "It does not, by itself. A reader captures a credential (a card, a face or finger, a QR pass or a PIN) and converts it into a digital identifier. The lane controller tests that identifier against the permission set held for that lane and decides whether to release the mechanism. The identity lives in the access control database, not in the turnstile."
      },
      {
        "q": "How many turnstile lanes does an entrance need?",
        "a": "Multiply the number of lanes by a realistic per-lane rate and compare it with arrivals in the busiest fifteen to twenty minutes. Count the actual peak where an existing entrance can be observed, or derive it from headcount, shift pattern, occupancy density and transport arrivals on a new building. Include at least one accessible wide lane and count it as a working lane, because it carries anyone with luggage or a trolley."
      },
      {
        "q": "How many people per minute can a turnstile lane handle?",
        "a": "It depends on the mechanism and much more on how quickly people present their credential. Catalogue figures assume a continuous stream of prepared users, which real entrances rarely produce. Size a lane from observed peak behaviour with the credential type you intend to use, timing a real presentation on people representative of the population, rather than from the published rate."
      },
      {
        "q": "Do turnstiles work if the network or the server goes down?",
        "a": "On most systems, yes. The lane controller holds a cached copy of the permissions for its lane, decides locally in milliseconds and buffers events until the link returns. Only changes made during the outage are unavailable. This is a design property rather than a universal one, so caching, its credential capacity and event buffering should be confirmed in writing during specification rather than assumed."
      },
      {
        "q": "What is anti-passback, and why is it often disabled?",
        "a": "Anti-passback stops one credential being used by more than one person by recording whether each credential is currently in or out of a zone and refusing or flagging a second entry with no exit in between. It gets disabled because a single uncontrolled exit route defeats it: if people leave through a door that records no exit, their credentials stay stuck inside and the lane refuses them the next morning."
      },
      {
        "q": "How does a turnstile system detect tailgating?",
        "a": "Infrared beam arrays across the lane break and restore in a sequence as a person walks through, and the controller reads that sequence as a passage signature. One body produces a recognisable pattern; a second person following on the same authorisation produces a different one. Rotating mechanisms can also count detents to confirm a single rotation. Sensitivity is configurable and trades nuisance alarms against missed events."
      },
      {
        "q": "Can someone get past a turnstile without a credential?",
        "a": "A waist or chest-height turnstile can be climbed or vaulted by somebody determined to do so. It manages and records passage rather than physically restraining people. The security value comes from the alarm the attempt raises, the video bookmarked to the event and the response that follows. Where physical restriction is the requirement, a full-height turnstile in a cage is the appropriate equipment."
      },
      {
        "q": "What happens to turnstiles during a fire alarm, and who decides?",
        "a": "Lanes on an escape route are normally configured fail-safe, so a hardwired contact from the alarm panel releases them for free passage, while perimeter lanes may be fail-secure where an alternative escape route exists. Who determines the fail state varies by jurisdiction, but it is always settled with the building life-safety strategy rather than chosen in a controller, and it applies to the whole lane line."
      },
      {
        "q": "Which standards and approvals apply to a turnstile system?",
        "a": "It depends on the country of installation and often on the building type. Machinery safety, electromagnetic compatibility, electrical installation rules, life-safety and fire authority approval, accessibility regulation, regional conformity marking, installer licensing and data protection are all set jurisdictionally, and a regime recognised in one country carries no automatic status in another. A conformity mark is also not a performance statement. Identify which regimes apply locally before selecting equipment."
      },
      {
        "q": "Does the environment affect how reliably a turnstile system works?",
        "a": "Yes, and usually through the sensing and reading layers rather than the mechanism. Dust on a beam lens attenuates the signal until the controller reads a clear lane as obstructed, producing alarms against nobody; high ambient reduces permissible duty and shortens electronics life; salt-laden air corrodes terminations into intermittent faults. State the conditions the equipment will actually experience and set maintenance intervals from them rather than from a generic schedule."
      }
    ]
  },
  "related": {
    "h2": "Related pages",
    "tone": "gray",
    "links": [
      {
        "href": "/how-does-a-tripod-turnstile-work",
        "label": "how tripod turnstiles work"
      },
      {
        "href": "/how-does-a-flap-barrier-gate-work",
        "label": "how flap barrier gates work"
      },
      {
        "href": "/how-does-a-swing-barrier-work",
        "label": "how swing barriers work"
      },
      {
        "href": "/products/entrance-control/turnstile-tripod/twld-ts2700",
        "label": "TWLD-TS2700 tripod turnstile"
      },
      {
        "href": "/products/entrance-control/turnstile-tripod/twld-ts2715",
        "label": "TWLD-TS2715 tripod turnstile"
      },
      {
        "href": "/products/entrance-control/full-height-turnstile/fht2300",
        "label": "FHT2300 full height turnstile"
      },
      {
        "href": "/products/entrance-control/p-type-p-gate/twld-sbg1000",
        "label": "TWLD-SBG1000 P-type gate"
      },
      {
        "href": "/products/entrance-control",
        "label": "entrance control range"
      },
      {
        "href": "/how-does-an-attendance-machine-work",
        "label": "how attendance machines work"
      },
      {
        "href": "/how-does-a-door-frame-metal-detector-work",
        "label": "how door frame metal detectors work"
      },
      {
        "href": "/biometric-attendance-access-control-system",
        "label": "biometric attendance and access control system"
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
      headline: "How Does a Turnstile System Work?",
      name: metadata.title,
      description:
        "An international technical reference on turnstile system architecture, covering credential readers, lane controllers, local decision caching, the central permission database, passage validation, anti-passback, a six-step method for architecting and sizing an entrance, and the jurisdictional regimes that govern life safety, accessibility and conformity.",
      url: PAGE_URL,
      mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
      inLanguage: "en",
      isAccessibleForFree: true,
      proficiencyLevel: "Beginner",
      about: [{"@type":"Thing","name":"Turnstile system"},{"@type":"Thing","name":"Pedestrian entrance control"},{"@type":"Thing","name":"Access control system"},{"@type":"Thing","name":"Anti-passback"},{"@type":"Thing","name":"Technical specification"}],
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
        cssSelector: ["#quick-answer", "#how-does-a-turnstile-system-work"],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Blogs", item: `${SITE}/blogs` },
        { "@type": "ListItem", position: 3, name: "How Does a Turnstile System Work?", item: PAGE_URL },
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

export default function HowDoesATurnstileSystemWorkPage() {
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
