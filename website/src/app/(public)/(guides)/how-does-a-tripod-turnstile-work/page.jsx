import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";

/**
 * Global "how it works" page served at /how-does-a-tripod-turnstile-work (static informational page, x-default of the four-site cluster).
 * Content: global/how-it-works-pages/GL-09-how-does-a-tripod-turnstile-work.html (section 4 "Complete Page Content", which includes the FAQ),
 * kept word for word including the "Featured-snippet definition," label and the regional links. Section 1 gives the
 * metadata, section 2 the keywords. The TechArticle / BreadcrumbList nodes are composed from the pack's schema notes; the
 * FAQPage schema is built from the same FAQ data as the visible FAQ, so the two always match.
 * Body links and "Related pages" only point at pages that exist on the global site.
 * Everything renders on the server; the FAQ answers are in the HTML even while collapsed.
 */

export const dynamic = "force-static";

const SITE = "https://www.timewatchglobal.com";
const PAGE_URL = `${SITE}/how-does-a-tripod-turnstile-work`;
const HERO_IMAGE = `${SITE}/images/how-it-works/tripod-turnstile-entrance-lane-hero.png`;
const HERO_ALT = "Tripod turnstile lanes at a building entrance with a person pushing the arm through after presenting a credential";
const DATE = "2026-10-27";

export const metadata = {
  title: "How Does a Tripod Turnstile Work? Mechanism & Selection",
  description:
    "How a tripod turnstile works (solenoid, cam plate and the 120-degree rotation) plus a method for deciding when mechanical enforcement is the right choice.",
  keywords:
    "how does a tripod turnstile work, tripod turnstile working principle, tripod turnstile mechanism, waist height turnstile how it works, tripod turnstile components, mechanical vs sensor based anti-tailgating, how to specify a turnstile, tripod turnstile operation, entrance control selection criteria, how does a tripod turnstile allow only one person, tripod turnstile working process step by step, why does a tripod turnstile rotate 120 degrees, what is a drop arm tripod turnstile, difference between mechanical and automatic tripod turnstile, tripod turnstile vs flap barrier which to choose, when to use a tripod turnstile instead of a speed gate, are tripod turnstiles wheelchair accessible, what happens to a turnstile on fire alarm, how many lanes do I need for a turnstile bank, turnstile standards and approvals",
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
    title: "How Does a Tripod Turnstile Work? Mechanism and Selection Method",
    description:
      "Cam plate, locking pin and a rotation that cannot be doubled, how a tripod enforces one person per credential, and how to decide between mechanical and sensor-based entrance control for any site.",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 2000, height: 581, alt: HERO_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Does a Tripod Turnstile Work? Mechanism and Selection Method",
    description:
      "A tripod cannot rotate twice on one release. A flap barrier detects that you tried. Knowing which of those your site actually needs is the whole specification.",
    images: [{ url: HERO_IMAGE, alt: HERO_ALT }],
  },
};

const page = {
  "hero": {
    "h1": "How Does a Tripod Turnstile Work?",
    "image": {
      "src": "/images/how-it-works/tripod-turnstile-entrance-lane-hero.png",
      "alt": "Tripod turnstile lanes at a building entrance with a person pushing the arm through after presenting a credential",
      "width": 2000,
      "height": 581
    }
  },
  "sections": [
    {
      "id": "what-is-a-tripod-turnstile",
      "h2": "What Is a Tripod Turnstile?",
      "blocks": [
        {
          "type": "snippet",
          "parts": [
            {
              "b": "Featured-snippet definition, "
            },
            " A tripod turnstile is a waist-height pedestrian entrance control device with three horizontal arms set 120 degrees apart on a rotor head mounted at an angle. At rest the rotor is mechanically locked. When a valid credential is presented, the controller energises a solenoid or electromagnet that withdraws a locking pin from the rotor's cam plate, and the user pushes the arm through exactly 120 degrees. A cam-and-microswitch arrangement or an encoder detects the completed rotation and the lock re-engages, so one authorisation permits exactly one passage."
          ],
          "quick": true
        },
        {
          "type": "p",
          "parts": [
            "Tripod turnstiles are among the few entrance control products that behave identically wherever they are installed. The mechanism does not vary, the geometry barely varies, and the experience of pushing an arm and feeling it stop is recognisable on any continent. What varies enormously is everything around the machine, the threat it is deployed against, the population walking through it, the accessibility obligation the building owner carries, and the fire-egress rules that determine what the lane must do when the alarm sounds."
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
            "The rotor head is mounted at an angle rather than horizontally, so the arms sit at a comfortable pushing height on the approach side and sweep upward and away as the user walks through. That angle is what allows a single 120-degree turn to clear the lane for one body and bring the next arm into the blocking position behind them. It belongs to the same family as the flap barrier, the swing barrier and the full-height turnstile, but it is the only waist-height member of that family that enforces single passage as a property of its geometry rather than as a conclusion drawn by sensors."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "how-does-a-tripod-turnstile-work",
      "h2": "How Does a Tripod Turnstile Work?",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "A tripod turnstile works in five stages. A person ",
            {
              "b": "presents a credential"
            },
            " at the reader, a card, a fingerprint, a face, a QR code. The controller ",
            {
              "b": "validates"
            },
            " it and, on a valid result, ",
            {
              "b": "releases the lock"
            },
            " by energising a solenoid or electromagnet that withdraws a locking pin from the cam plate on the rotor shaft. The user then ",
            {
              "b": "pushes the arm"
            },
            " and the rotor turns through 120 degrees, its speed governed by a damper. A microswitch or encoder ",
            {
              "b": "confirms the completed rotation"
            },
            ", the lock re-engages against the next cam position, and the passage is logged."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Present, validate, release, rotate, re-lock. The whole sequence completes in the time one person takes to walk through, and the rest of this page is detail beneath those five words, including the selection method, which is most usefully understood as a series of questions about whether you want the third and fourth stages to be mechanical at all."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "main-components-of-a-tripod-turnstile",
      "h2": "Main Components of a Tripod Turnstile",
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
                "Housing / pedestal"
              ],
              [
                "Stainless steel or coated cabinet carrying the rotor, lock, damper, controller and power supply."
              ],
              [
                "Material grade and finish, ingress protection, and whether the design is intended for indoor, semi-open or fully exposed installation."
              ]
            ],
            [
              [
                "Rotor head and three arms"
              ],
              [
                "Three horizontal arms 120 degrees apart on a hub, the shaft angled so the arms sweep up and away as the user passes."
              ],
              [
                "Arm length and material, whether arms are individually replaceable after impact, and whether a drop-arm variant of the same model exists."
              ]
            ],
            [
              [
                "Locking mechanism"
              ],
              [
                "A solenoid or electromagnet driving a locking pin, plus a cam plate keyed to the rotor shaft. The pin sits in a notch to hold the rotor."
              ],
              [
                "Whether there is one lock with directional cams or a separate actuator per direction, and the holding force the locked rotor can resist."
              ]
            ],
            [
              [
                "Damper"
              ],
              [
                "A hydraulic or friction unit on the rotor shaft governing rotation speed, so the arms cannot be spun violently and come to a controlled stop."
              ],
              [
                "Hydraulic or friction type, whether damping is adjustable, and whether the unit is separately serviceable or part of a sealed assembly."
              ]
            ],
            [
              [
                "Controller / control board"
              ],
              [
                "Drives the solenoid per direction, applies direction and anti-passback rules, manages the release timeout and talks to the access control platform."
              ],
              [
                "Communication protocol, local versus server-side validation, offline behaviour, logging depth and whether configuration access is protected."
              ]
            ],
            [
              [
                "Microswitch or rotary encoder"
              ],
              [
                "Reads rotor position and confirms a full 120-degree rotation, which triggers the re-lock and the log entry."
              ],
              [
                "Sensing method, and how a partial or abandoned rotation is treated, which determines whether the lane's count can be relied on for occupancy reporting."
              ]
            ],
            [
              [
                "Credential reader"
              ],
              [
                "RFID card reader, fingerprint or palm sensor, face recognition terminal or QR scanner, normally one per side."
              ],
              [
                "Reader technology and mounting position. The reader is independent of the mechanism, so this can change over the installation's life."
              ]
            ],
            [
              [
                "Direction indicator LEDs"
              ],
              [
                "Arrow and cross symbols showing whether the lane is released in a given direction, so users do not push a locked rotor."
              ],
              [
                "Brightness and legibility, which matter very differently in a dim concourse and at an entrance in direct sun."
              ]
            ],
            [
              [
                "Power supply"
              ],
              [
                "Low-voltage DC inside the housing, with battery or UPS backup where the lane must stay controlled through an outage."
              ],
              [
                "Input voltage and frequency vary by region; backup duration and whether it is fitted as standard vary by model."
              ]
            ],
            [
              [
                "Drop-arm mechanism (where fitted)"
              ],
              [
                "A latch releasing the arms so they fall vertically on fire alarm or loss of power, clearing the lane for evacuation."
              ],
              [
                "Availability as a variant of the chosen model, re-set method, and whether the release is driven by the fire signal, by loss of power, or by both."
              ]
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Housing and pedestal"
        },
        {
          "type": "p",
          "parts": [
            "The housing absorbs every push, so its fixing matters more than it looks. A tripod on an uneven or under-anchored base rocks very slightly under each passage, and that movement works into the rotor bearing and the lock alignment over a few hundred thousand cycles. On a lane passing a full workforce twice a day, a few hundred thousand cycles is not a long period, and re-checking anchor torque after the first months of service catches the problem while it is still an adjustment."
          ]
        },
        {
          "type": "h3",
          "text": "Rotor head and the three arms"
        },
        {
          "type": "p",
          "parts": [
            "Three arms at 120 degrees is the smallest number that keeps one arm blocking the lane while another is clear of the walking path. Two arms would need a 180-degree turn, sweeping the trailing arm through the user's path; four would leave a gap too narrow to walk through. The geometry is not a design preference, it is the minimum that makes the device work, which is why every tripod turnstile in the world looks broadly the same."
          ]
        },
        {
          "type": "h3",
          "text": "Locking mechanism: solenoid, cam plate and locking pin"
        },
        {
          "type": "p",
          "parts": [
            "This is the heart of the device. Keyed to the rotor shaft is a cam plate carrying three notches, one per arm position. A spring-loaded pin rests in whichever notch is presented, and while it is seated the rotor cannot turn. When access is granted, a solenoid or electromagnet pulls the pin clear. The rotor is now free, but only free, nothing drives it, and the user supplies the force."
          ]
        },
        {
          "type": "p",
          "parts": [
            "As the rotor turns, the pin rides the plate's outer profile under spring pressure until, at 120 degrees, the next notch arrives beneath it and the pin drops in. That sequence completes mechanically whatever the electronics do next. It is the reason a tripod keeps enforcing its rule when the network link drops, when the server is unreachable and when the reader has been vandalised, conditions under which a sensor-based lane degrades in ways that are not always obvious from the outside."
          ]
        },
        {
          "type": "h3",
          "text": "The damper"
        },
        {
          "type": "p",
          "parts": [
            "The damper resists rotation in a controlled way. Without it a released rotor could be spun hard, the arms would whip round and the pin would slam into the next notch. With it, the arms move at a steady pace whatever force is applied and stop softly as the lock re-engages."
          ]
        },
        {
          "type": "p",
          "parts": [
            "It is also the component that wears, and across every climate it is the component most often misdiagnosed. ",
            {
              "b": "A tripod that has started to feel loose, notchy, or that slams audibly at the end of each rotation is almost always reporting its damper, not its lock."
            },
            " Solenoids and control boards are replaced chasing that symptom far more often than they should be. When evaluating equipment, it is worth establishing early whether the damper is a separately available serviceable item, because it is the part that will be ordered first."
          ]
        },
        {
          "type": "h3",
          "text": "Controller, reader and rotation sensing"
        },
        {
          "type": "p",
          "parts": [
            "The controller holds the release timeout (how long the rotor stays unlocked before the permission lapses) along with the direction rules, the anti-passback logic and the interface to the wider system. The reader is separate from the mechanism, so a lane can be re-fitted from card to fingerprint or face recognition without touching the rotor, which is a genuine advantage over the installation's life."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Rotation is sensed by microswitches tripped by lobes on the cam plate, or on newer models by a rotary encoder reading the shaft continuously. An encoder can tell a completed passage from a turn abandoned halfway. Which method a lane uses, and how it treats a partial rotation, varies by model and should be confirmed against the datasheet, particularly where the lane's output will be used for live occupancy or muster reporting rather than only for access."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "how-does-a-tripod-turnstile-work-step-by-step",
      "h2": "How Does a Tripod Turnstile Work Step by Step?",
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
                "Lane sits locked at rest"
              ],
              [
                "The pin is seated in a cam plate notch, holding the rotor. One arm blocks the lane at waist height and the indicator shows a cross."
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
                "An RFID card is tapped, a finger or palm placed, a face presented, or a QR code shown to the scanner."
              ]
            ],
            [
              [
                {
                  "b": "3"
                }
              ],
              [
                "Credential is validated"
              ],
              [
                "The controller or access control platform checks the identity against the permitted list, with any time zone, direction or anti-passback rule applied. An invalid one is logged as a denied attempt."
              ]
            ],
            [
              [
                {
                  "b": "4"
                }
              ],
              [
                "Lock is released"
              ],
              [
                "The controller energises the solenoid for that direction, withdrawing the pin from the notch. The rotor is free and the indicator changes to an arrow."
              ]
            ],
            [
              [
                {
                  "b": "5"
                }
              ],
              [
                "User pushes the arm"
              ],
              [
                "On mechanical and semi-automatic models the user supplies the force. On a fully automatic model a motor drives the rotation instead."
              ]
            ],
            [
              [
                {
                  "b": "6"
                }
              ],
              [
                "Rotor turns under damper control"
              ],
              [
                "The damper holds the arms to a steady pace however hard they are pushed, so they cannot be spun onto the next person."
              ]
            ],
            [
              [
                {
                  "b": "7"
                }
              ],
              [
                "Rotation reaches 120 degrees"
              ],
              [
                "The next notch arrives beneath the waiting pin, which drops in. The rotor is locked and the next arm blocks the lane."
              ]
            ],
            [
              [
                {
                  "b": "8"
                }
              ],
              [
                "Completed rotation is detected"
              ],
              [
                "A microswitch tripped by the cam plate, or an encoder on the shaft, confirms a full segment has been travelled."
              ]
            ],
            [
              [
                {
                  "b": "9"
                }
              ],
              [
                "Permission is consumed"
              ],
              [
                "The controller clears the release, so anyone following finds the rotor locked. If rotation is not completed within the release timeout, the permission lapses with no passage recorded."
              ]
            ],
            [
              [
                {
                  "b": "10"
                }
              ],
              [
                "Event is logged"
              ],
              [
                "The passage (identity, direction, lane, timestamp) is written to the access control or attendance database."
              ]
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "Step 9 is where a tripod differs from every other waist-height entrance control device, and it deserves its own section."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "why-one-authorisation-equals-exactly-one-person",
      "h2": "Why One Authorisation Equals Exactly One Person",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "A flap or swing barrier opens a clear lane, then uses an infrared sensor array to work out how many bodies went through it, raising an alarm after the fact if it decides two people passed on one credential. The detection can be very good, and on a well-specified lane with a dense beam array it usually is. But it is detection, and detection has three properties a specifier has to accept: it can be defeated by a close follower, an unusual gait or a large bag; it degrades when the lenses foul or a pedestal is knocked out of alignment; and when it succeeds, what it produces is an alarm that someone has to act on."
          ]
        },
        {
          "type": "p",
          "parts": [
            {
              "b": "A tripod does not detect anything."
            },
            " One release withdraws the pin from one notch, and the next notch arrives 120 degrees later and locks the rotor again. There is no configuration in which a single release permits two rotations, because the cam plate cannot present two notches in one segment. A second person cannot follow through, because by the time the first has cleared the lane an arm is already back across it. The enforcement is a property of the geometry, so it does not depend on the sensors being clean, the firmware being correctly configured, the network being up, or an operator being present to respond."
          ]
        },
        {
          "type": "p",
          "parts": [
            "That is the entire case for the type, and it is a strong case in exactly the circumstances set out in the selection method below, and a weak one outside them. It is why tripods persist at industrial gates, construction sites, stadiums and transport concourses long after they stopped being the obvious choice for a corporate lobby."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Two honest caveats belong with the claim. A tripod controls passage at waist height and nothing above or below it, so the arms can be climbed over or crawled under; it depends on being part of a continuous physical line (a fence, a wall, a hoarding, a manned gatehouse) not standing alone in an open concourse. And it enforces one rotation per release, which is not the same as establishing that exactly one human body occupied that rotation: a small child carried through, or a person passing a bag back over the arms, is outside what the mechanism can address."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "build-types-and-directional-control",
      "h2": "Build Types and Directional Control",
      "blocks": [
        {
          "type": "h3",
          "text": "Mechanical, semi-automatic and fully automatic"
        },
        {
          "type": "p",
          "parts": [
            "The three build types share the same rotor and the same 120-degree geometry, and differ in how the release and the rotation are produced."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Mechanical"
              },
              ": no electrical release. The rotor turns freely in the permitted direction, or is released by a coin, token or an attendant's lever, and the user pushes the arm. Suits counting and queue discipline where no credential is needed."
            ],
            [
              {
                "b": "Semi-automatic"
              },
              ": a solenoid or electromagnet withdraws the pin on a valid credential, and the user pushes the arm. The common commercial configuration, and the one with the fewest powered parts."
            ],
            [
              {
                "b": "Fully automatic"
              },
              ": the lock is released the same way, but a motor drives the rotor through the full 120 degrees after release. Suits higher-traffic and public-facing lanes, and sites where users are routinely carrying items."
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "Semi-automatic is what most people picture, and for good reason: fewest powered components, tolerant of dust, heat and rough handling, and if the electronics fail the mechanical lock still holds the line. Fully automatic units move the effort from the user to a motor and add one more powered assembly to maintain. The choice is a duty and environment decision, not a hierarchy, and in a demanding environment the simpler build frequently outlasts the more capable one."
          ]
        },
        {
          "type": "h3",
          "text": "How bi-directional control works"
        },
        {
          "type": "p",
          "parts": [
            "A tripod rotates in one direction at a time, and most models carry separate release logic for each direction, in practice a second solenoid, or a single lock with directional cams, on its own controller input. That allows three configurations from the same hardware: entry controlled with exit free; both directions controlled; or one direction locked entirely so a lane becomes entry-only or exit-only within a bank."
          ]
        },
        {
          "type": "p",
          "parts": [
            "The consequence people often miss is this: anti-passback (the rule that stops a credential entering twice without an intervening exit) only works if exits are actually read. A site that leaves exit free cannot enforce it and cannot produce a reliable live headcount. If occupancy or muster reporting is on the requirement list, both directions must be controlled, and that has to be settled before the lane count is fixed, because controlling both directions roughly doubles the passages each lane handles."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "drop-arm-turnstiles-and-emergency-egress",
      "h2": "Drop-Arm Turnstiles and Emergency Egress",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "A locked rotor across a walking route is a problem during an evacuation, and there are two accepted answers to it."
          ]
        },
        {
          "type": "p",
          "parts": [
            "The first is a ",
            {
              "b": "drop-arm turnstile"
            },
            ". The arms are held by a latch rather than fixed rigidly to the hub, and on a fire alarm signal or loss of power the latch releases and all three arms fall vertically. The lane is then completely clear (not merely unlocked but physically open) so people can stream through in a crowd without the rotor being turned at all. The arms are re-set by hand afterwards. Where the evacuating population is large and moving fast, the ability to clear the lane entirely rather than require a push per person is the whole point."
          ]
        },
        {
          "type": "p",
          "parts": [
            "The second is a ",
            {
              "b": "fail-locked rotor with a separate adjacent emergency gate"
            },
            ". The turnstile keeps its integrity through an alarm and evacuation is routed through a wide side gate released by the fire panel. This suits sites where the line must stay secure during an incident, a controlled perimeter, for instance, where an alarm must not become a way through the boundary."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Both are legitimate and they are not interchangeable. ",
            {
              "b": "Which one applies is a life-safety design decision made with the building's fire strategy and the applicable local requirements, at design stage."
            },
            " It is not a setting chosen in the controller afterwards: a drop-arm mechanism is a hardware variant that must be specified and ordered, and an emergency gate needs floor space, a signal from the fire panel and a place on the evacuation plan. Both are straightforward to get right during design and disruptive to retrofit once the fire drawings are signed off."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Behaviour on power loss varies by model and configuration and should never be assumed: some units are fail-safe and release the lock so the rotor can be pushed freely, some are fail-secure and hold locked, and drop-arm units clear entirely. Confirm it against the datasheet, then test it, and test it again at each drill, because the drop-arm latch is a mechanism that benefits from being exercised."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "when-mechanical-enforcement-is-the-right-choice",
      "h2": "When Mechanical Enforcement Is the Right Choice",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "This is the section most buyers skip, and skipping it is why so many entrances end up with equipment that is either defeated daily or resented daily. Choosing between a tripod and a sensor-based lane is not a matter of appearance, footprint or catalogue throughput. It is six determinations made in order, each constraining the next, and the first three are about the site rather than the machine."
          ]
        },
        {
          "type": "p",
          "parts": [
            "The method below is deliberately independent of country, brand and product range. It produces a specification that can be issued to any competent supplier and answered unambiguously."
          ]
        },
        {
          "type": "h3",
          "text": "Step 1, State the threat model"
        },
        {
          "type": "p",
          "parts": [
            "Write down what the entrance exists to prevent, in one or two sentences, before anyone looks at a product. This sounds obvious and is routinely omitted, with the result that the lane type is chosen on appearance and the enforcement argument is had afterwards, during the first audit."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Is the concern deliberate or incidental?"
              },
              " A person who actively wants a second body through on one credential is a different problem from a visitor who follows a colleague through an open lane without thinking. Mechanical enforcement addresses both; sensor-based detection addresses the second well and the first only if someone responds to the alarm."
            ],
            [
              {
                "b": "What happens when a violation occurs?"
              },
              " If the answer is \"an alarm goes to a desk that is staffed and will act within seconds\", detection is viable. If the answer is \"nothing, because the gatehouse is unmanned at that hour\", detection is theatre and enforcement is the requirement."
            ],
            [
              {
                "b": "Is the count itself the deliverable?"
              },
              " Where the entrance record is used for occupancy reporting, muster reporting, headcount reconciliation or licensed venue capacity, the number has to be correct rather than correct-with-exceptions. That pushes hard toward mechanical enforcement."
            ],
            [
              {
                "b": "What is the consequence of a single successful violation?"
              },
              " On some sites it is a reprimand. On others it is an uncontrolled person inside a hazardous area. Scale the enforcement to the consequence, not to the frequency."
            ],
            [
              {
                "b": "Record who owns this statement"
              },
              " and when it is reviewed. A threat model written once at fit-out and never revisited is the usual reason an entrance no longer matches the site five years later."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Step 2, Describe the user population"
        },
        {
          "type": "p",
          "parts": [
            "The second determination is who actually walks through, every day, in the clothes and carrying the things they really have. This is where tripod specifications most often fail, because the device makes a real demand of the user."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Are they enrolled and briefed, or are they the public?"
              },
              " A workforce learns a tripod in a day. A first-time visitor meeting one at a public entrance frequently does not understand that they must push, and the lane stalls."
            ],
            [
              {
                "b": "What are they carrying?"
              },
              " Semi-automatic models require a deliberate two-handed-unfriendly push. A population carrying tools, bags, luggage, coffee or a laptop will find it awkward, and awkward becomes slow at volume."
            ],
            [
              {
                "b": "How do they arrive?"
              },
              " A flat arrival curve and a twenty-minute bus-borne surge are different problems at identical daily totals. Figures commonly quoted for a tripod lane are in the region of 20 to 30 people per minute per lane, approximate and equipment-dependent, varying with model, build type, damper setting and controller timing, but in a surge the limiting factor is almost always credential presentation, not the rotor."
            ],
            [
              {
                "b": "How many people cannot use a tripod at all?"
              },
              " Count them honestly rather than assuming they are exceptional. This feeds directly into Step 3."
            ],
            [
              {
                "b": "Record the peak as a number"
              },
              " (\"peak 1,400 persons in 20 minutes, twice daily, both directions controlled\") because that is the figure a supplier and a designer can both answer against."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Step 3, Establish the accessibility obligation"
        },
        {
          "type": "p",
          "parts": [
            "This is the determination that most often arrives too late, and it is not optional anywhere. ",
            {
              "b": "No wheelchair, trolley, stretcher, pram or large item of luggage can pass through a tripod turnstile, and no configuration changes that."
            },
            " The rotating arms define a fixed, narrow aperture. It is a geometric fact about the device, not a limitation of a particular model."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Establish what the law and the client's own policy require"
              },
              " for this building type in this country, and get it in writing before the layout is drawn. Accessibility obligations differ by jurisdiction and by building use, and a requirement that is advisory in one place is enforceable in another."
            ],
            [
              {
                "b": "Establish the share of traffic the accessible route must carry."
              },
              " At a corporate entrance it may be small. At a hospital, a transport terminal, a venue serving an older population or a public service building it is substantial, and an accessible route sized as an afterthought will be the lane with the queue."
            ],
            [
              {
                "b": "Establish the emergency case."
              },
              " A stretcher has to be able to reach an injured person anywhere beyond the line, and leave with them, without anyone looking for a key."
            ],
            [
              {
                "b": "Be honest about what happens if you get this wrong."
              },
              " The universal on-site remedy for an inaccessible entrance is a propped-open side door, which defeats the entrance control completely and silently. Designing the accessible route in is far simpler than retrofitting it into a finished floor with services already cast in."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Step 4, Choose the enforcement mechanism"
        },
        {
          "type": "p",
          "parts": [
            "With the first three steps written down, the choice becomes straightforward rather than a matter of taste. It is a function of whether the site needs enforcement or detection, and whether the population can be asked to operate a mechanism."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Mechanical enforcement (a tripod) suits"
              },
              " an enrolled population, a site where the count is a deliverable, an environment that is hard on optics and electronics, an entrance that must keep enforcing when the network or the supervising staff are absent, and a threat model that includes deliberate attempts rather than only accidental ones."
            ],
            [
              {
                "b": "Sensor-based detection (a flap or swing barrier) suits"
              },
              " a public or mixed population, an entrance where appearance and a step-free walk-through experience matter, a staffed location where alarms will be acted on, a clean indoor environment, and a traffic mix that includes trolleys and luggage in the ordinary lanes rather than only in the accessible one."
            ],
            [
              {
                "b": "A full-height turnstile suits"
              },
              " an unmanned perimeter that must not be climbed, where waist-height control is insufficient and no accessible passage is expected through that particular point."
            ],
            [
              {
                "b": "Most real entrances mix them."
              },
              " A bank of tripods for the workforce surge, a controlled wide lane beside it for everybody the tripods exclude, and a full-height unit on a remote section of perimeter is a common and sensible arrangement. Treat the lane mix as the deliverable, not the lane type."
            ],
            [
              {
                "b": "Specify the requirement, not the product."
              },
              " \"Mechanical single-passage enforcement, one rotation per authorisation, independent of sensor or network state\" is a requirement. \"Tripod turnstile\" is a product category a supplier may satisfy in ways you did not intend."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Step 5, Specify the accompanying wide gate"
        },
        {
          "type": "p",
          "parts": [
            "Wherever a tripod line is chosen, a wide gate beside it is part of the same specification, and it is the part that is routinely under-specified into uselessness. ",
            {
              "b": "The wide gate becomes the weakest point in the line unless it is itself controlled."
            },
            " One release equals one rotation at the tripod, and an unlimited number of passages at a gate four metres away that is on a manual latch."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Give it its own reader, its own lock and its own log entry."
              },
              " A passage through the wide gate must appear in the record exactly as a passage through a lane does, or the headcount from Step 1 is not a headcount."
            ],
            [
              {
                "b": "Decide how it handles its own tailgating risk."
              },
              " A wide gate is wide; it cannot enforce single passage mechanically. Either it carries a sensor array of its own, or it is supervised, or it is accepted as a monitored exception with a documented procedure, but the decision must be made rather than discovered."
            ],
            [
              {
                "b": "Size it for the traffic it will really carry"
              },
              ", from Step 3, including deliveries, equipment movements and the share of the population the tripods exclude."
            ],
            [
              {
                "b": "Specify it as a controlled lane in the schedule"
              },
              ", not as a door in the architectural package, so that it is procured, commissioned and maintained as part of the entrance control system."
            ],
            [
              {
                "b": "Check it in operation after handover."
              },
              " If it is being propped open at the peak, the lane count is wrong, not the staff."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Step 6, Fix the egress strategy before the lane layout"
        },
        {
          "type": "p",
          "parts": [
            "The last determination has to happen before the drawing is frozen, because both answers consume something physical: the drop-arm option consumes a model variant, and the emergency gate option consumes floor area."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Establish which fire authority or regime governs this route"
              },
              " and what it requires of a barrier across an escape path. This differs by jurisdiction and by building use (see the section below) and it is not safe to carry an assumption across a border."
            ],
            [
              {
                "b": "Decide between drop-arm and a separate released emergency gate"
              },
              " with the fire consultant and the authority, and record the decision with the reason."
            ],
            [
              {
                "b": "Specify the hardware accordingly."
              },
              " A drop-arm variant must be ordered; it cannot be added to a standard rotor on site."
            ],
            [
              {
                "b": "Specify the interface."
              },
              " The fire panel contact is hardwired and overrides software logic. It must be designed, installed, documented and tested as an interface between two systems."
            ],
            [
              {
                "b": "Specify the drill regime."
              },
              " The emergency behaviour is tested at each drill, the result is recorded, and someone is named as responsible for reviewing those records."
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
            "The six determinations condense into a schedule that can be issued with a tender and answered unambiguously by any supplier. Its value is its brevity, six lines that leave no room for a bare product name to pass as an answer."
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
                "1 · Threat model"
              ],
              [
                "What the entrance exists to prevent, whether violations will be responded to, and whether the count is itself a deliverable"
              ],
              [
                "\"Deliberate single-credential sharing to be prevented, not detected; entrance unmanned outside core hours; passage record used for live occupancy and muster reporting\""
              ]
            ],
            [
              [
                "2 · User population"
              ],
              [
                "Enrolled or public, what they carry, arrival pattern, peak as a number, and how many cannot use a narrow aperture"
              ],
              [
                "\"Enrolled workforce, tools and bags carried; peak 1,400 persons in 20 minutes, twice daily, both directions controlled; approximately 2 per cent requiring a wide route\""
              ]
            ],
            [
              [
                "3 · Accessibility obligation"
              ],
              [
                "The applicable requirement for this building type and jurisdiction, the share of traffic on the accessible route, and the stretcher case"
              ],
              [
                "\"Accessible route required to [local requirement, confirmed in writing]; wide lane sized for 5 per cent of peak plus deliveries; stretcher access to be demonstrated at handover\""
              ]
            ],
            [
              [
                "4 · Enforcement mechanism"
              ],
              [
                "Mechanical or sensor-based, stated as a requirement rather than a product name"
              ],
              [
                "\"Mechanical single-passage enforcement: one rotation per authorisation, independent of sensor condition and network state, with completed rotation detected and logged\""
              ]
            ],
            [
              [
                "5 · Accompanying wide gate"
              ],
              [
                "Controlled, with its own reader, lock and log entry; how its own tailgating risk is handled; what it is sized for"
              ],
              [
                "\"One controlled wide lane with independent reader and lock, all passages logged to the same record, supervised at peak, sized to pass a wheelchair, a stretcher and a pallet truck\""
              ]
            ],
            [
              [
                "6 · Egress strategy"
              ],
              [
                "Drop-arm or separate released gate, the authority consulted, the interface, and the drill regime"
              ],
              [
                "\"Drop-arm variant required on all lanes, agreed with [fire authority]; hardwired fire panel contact overriding software; drop and manual re-set tested and recorded at every drill\""
              ]
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "A supplier who can answer all six lines against a specific model has told you something useful. A supplier who answers with a model number and a throughput figure has not."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "environmental-derating-why-a-catalogue-figure-rarely-holds",
      "h2": "Environmental Derating: Why a Catalogue Figure Rarely Holds",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "A tripod turnstile is a simple device, which leads people to assume it is environment-proof. It is a mechanism with a rotating shaft, a spring-loaded pin riding a machined plate, and a damper with seals, and those three things are where the environment does its work. The general principle holds across every climate: ",
            {
              "b": "a catalogue duty figure assumes reference conditions, and a real entrance rarely matches them."
            }
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "High ambient temperature reduces permissible duty."
              },
              " Solenoids, control boards and power supplies are all rated at a reference ambient, and a metal housing standing in direct sun runs considerably hotter inside than the air around it. At elevated ambient the sustained passage rate the equipment will actually deliver falls below the figure on the sheet, and sustained high enclosure temperature shortens power supply life. Hydraulic damper fluid also thins as it heats, so the lane's feel changes seasonally and adjustable damping is worth re-checking rather than setting once."
            ],
            [
              {
                "b": "Airborne particulates wear seals and contaminate mechanisms."
              },
              " Fine dust reaching a damper's shaft seal acts as a grinding medium; particulate between the cam plate and the locking pin accelerates wear on an interface that engages on every single passage; and a compromised bearing seal shortens the rotor's life directly. Enclosure sealing at cable entries, lid joints and the shaft entry is the design answer, and condition-based inspection is the maintenance answer."
            ],
            [
              {
                "b": "Coastal salt drives the corrosion specification."
              },
              " Salt is hygroscopic and holds a conductive film against metal long after visible wetting has gone. The vulnerable points on a tripod are base fixings, cut edges and welds inside the housing, arm-to-hub fixings, and electrical terminations at the cool base of the enclosure. Material grade and coated cut edges matter here in a way they do not inland."
            ],
            [
              {
                "b": "Sub-zero conditions introduce freezing and condensation."
              },
              " Moisture that enters a housing and freezes can bind a locking pin or stiffen a damper, and a unit cycling between a heated interior and a cold exterior collects condensate at its coolest point. Enclosure heating, drainage and a damper specified for the temperature range are the responses, and none of them is a default fitment."
            ],
            [
              {
                "b": "Heavy rainfall demands sealing and drainage attention."
              },
              " A semi-open entrance exposes the housing to driven rain and to standing water at the base. Ingress protection rating, a base detail that sheds water, and fixings that tolerate it are specification items rather than assumptions."
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "The lesson is the same in every case and it is worth stating once plainly: ",
            {
              "b": "state the conditions the equipment will actually experience, and require the supplier to confirm the unit is suitable for them and to state the duty figure at those conditions"
            },
            ": rather than relying on a general rating established somewhere else."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "jurisdictional-requirements-life-safety-accessibility-and-conformity",
      "h2": "Jurisdictional Requirements: Life Safety, Accessibility and Conformity",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "This is where international specifiers are most often misled. Almost nothing about the regulatory treatment of an entrance control lane is universal. The mechanism is the same everywhere; the obligations attached to installing it are not, and they are frequently set at national or even regional level rather than internationally."
          ]
        },
        {
          "type": "h3",
          "text": "Fire egress requirements differ by jurisdiction"
        },
        {
          "type": "p",
          "parts": [
            "What a barrier across an escape route is required to do on alarm is determined by local fire and life-safety rules and by the authority administering them, and it differs materially between countries. In some regimes a barrier on a designated escape route must physically clear; in others a fail-locked line with an adjacent released gate is accepted, provided the gate is on the evacuation plan and the capacity calculation supports it. Building use changes the answer again, a venue, a hospital, an industrial site and an office are not treated identically in most regimes."
          ]
        },
        {
          "type": "p",
          "parts": [
            "The sequencing rule follows directly: ",
            {
              "b": "establish what the applicable fire regime requires of this route before the lane layout is fixed, not after."
            },
            " A tripod line specified without a drop-arm variant, on a route later determined to need one, cannot be corrected by configuration. Name the authority, record the requirement, and keep the evidence with the design."
          ]
        },
        {
          "type": "h3",
          "text": "Accessibility obligations differ by jurisdiction"
        },
        {
          "type": "p",
          "parts": [
            "Accessibility requirements are set nationally and sometimes sub-nationally, and they differ in what they require, in which building types they apply to and in how they are enforced. The common thread is that a tripod turnstile cannot satisfy them on its own under any of them, because it cannot pass a wheelchair. What differs is how wide the accompanying route must be, whether it must be an independently usable route rather than one requiring staff assistance, and whether it must be available at all times the entrance is in use."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Those three questions are worth asking explicitly of whoever owns compliance for the project, in writing, before the layout is drawn. An accessible route that depends on a member of staff being present fails in most modern regimes and fails operationally at every unstaffed hour regardless of what the regime says."
          ]
        },
        {
          "type": "h3",
          "text": "Standards and conformity: what the specifier must establish"
        },
        {
          "type": "p",
          "parts": [
            "Beyond life safety and accessibility, several other regimes may apply to an entrance control lane, and which ones do is a question about the country of installation rather than about the product category. The specifier and the importer carry the obligation to identify them, not an overseas manufacturer who may have no visibility of the destination market's rules."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Machinery safety"
              },
              ": regimes governing powered equipment that moves in contact with people, which may apply to a motor-driven rotor and not to a manually pushed one. Establish whether the build type chosen brings the installation into scope."
            ],
            [
              {
                "b": "Electromagnetic compatibility"
              },
              ": that the equipment neither emits excessive interference nor malfunctions in the presence of normal interference. Establish which EMC regime applies locally."
            ],
            [
              {
                "b": "Electrical safety and installation"
              },
              ": supply voltage and frequency, earthing arrangement, protective devices, cabling and labelling, plus who is competent and licensed to perform and certify the installation."
            ],
            [
              {
                "b": "Regional product conformity marking"
              },
              ": market access schemes that differ by region and sometimes require in-country testing, registration or a local representative. Establish which scheme applies to this product category in this market and what evidence the importer must hold."
            ],
            [
              {
                "b": "Security installer licensing"
              },
              ": a number of jurisdictions regulate who may install, maintain or operate security systems, which is a separate question from the equipment itself and frequently constrains the field of suppliers before any technical evaluation begins."
            ],
            [
              {
                "b": "Data protection and record retention"
              },
              ": what the passage log may contain, how long it may be kept, and what notice must be given to the people being recorded. This is an area of growing divergence between jurisdictions and it matters because the log is often the main deliverable."
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "Two points follow and are worth stating plainly. ",
            {
              "b": "No standard named anywhere is universally required"
            },
            ", and a conformity mark required in one region is not automatically accepted in another, evidence of assessment against one regime is evidence about that regime only. And ",
            {
              "b": "a conformity mark is not a performance statement"
            },
            ": market access marking typically addresses matters such as electrical safety and electromagnetic compatibility, and says nothing about how the mechanism will behave over a million cycles at the site's real ambient."
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
      "id": "where-tripod-turnstiles-are-used",
      "h2": "Where Tripod Turnstiles Are Used",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "Tripod turnstiles appear wherever passage must be controlled and counted one person at a time, and where the environment or the threat model argues against a sensor-based lane. The site types below recur in every region, and each carries a characteristic specification profile:"
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Manufacturing plants and processing facilities"
              },
              ": shift entry and exit with attendance capture at the gate, an enrolled population, and an environment that is hard on optics. The archetypal tripod application."
            ],
            [
              {
                "b": "Construction sites and project compounds"
              },
              ": contractor and workforce headcount control, with the lane commonly tied to induction and permit status so a lapsed permit stops the person at the boundary rather than appearing in a report afterwards."
            ],
            [
              {
                "b": "Logistics and distribution centres"
              },
              ": pedestrian entrances separated from vehicle and equipment routes, with a sharp shift-change surge and a wide controlled route for equipment movement."
            ],
            [
              {
                "b": "Stadiums, arenas and event venues"
              },
              ": ticket validation at entry, where mechanical one-person-per-scan enforcement directly protects the licensed capacity and the entire crowd arrives inside an hour."
            ],
            [
              {
                "b": "Transport interchanges and concourses"
              },
              ": passenger lanes paired with ticketing and QR validation, always alongside wider gates for luggage and accessibility, and usually as part of a mixed lane bank rather than alone."
            ],
            [
              {
                "b": "Ports, terminals and controlled perimeters"
              },
              ": pedestrian control points on a boundary that is otherwise fenced, where the lane's value is that it keeps enforcing without supervision."
            ],
            [
              {
                "b": "Universities and educational campuses"
              },
              ": staff and student entry with attendance recorded at the lane, sharp timetable-driven peaks and large seasonal variation."
            ],
            [
              {
                "b": "Corporate campuses, secondary and service entrances"
              },
              ": staff routes, back-of-house and loading-side entrances where the finish does not need to match the main lobby but the record does."
            ],
            [
              {
                "b": "Residential communities and amenity areas"
              },
              ": controlled pedestrian access to shared facilities, where an enrolled resident population and an unsupervised entrance are exactly the conditions mechanical enforcement suits."
            ],
            [
              {
                "b": "Government and institutional facilities, staff lines"
              },
              ": where the public entrance uses wide sensor-based lanes and the staff line beside it uses tripods, which is a common and effective split."
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "Across these types the turnstile is rarely the whole answer. It is the enforcing part of an entrance that also contains identification, recording, an accessible route and, on some sites, a screening stage, and it performs when it is specified as part of that entrance rather than bought on its own. TimeWatch supplies entrance control and related access and inspection equipment internationally, and maintains dedicated regional sites for several markets, see the regional guidance below."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "integration-with-other-systems",
      "h2": "Integration With Other Systems",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "A tripod turnstile lane rarely operates alone. The integrations below recur across site types:"
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Access control"
              },
              ": the credential database governing doors and vehicle gates also governs the lane, so one revocation closes every route at once."
            ],
            [
              {
                "b": "Time and attendance"
              },
              ": the passage event doubles as the attendance punch, removing a separate clocking queue from a compressed shift change. On many industrial sites this is the main reason the lane exists."
            ],
            [
              {
                "b": "Induction, permit and competency systems"
              },
              ": the lane releases only for people whose induction, permit or certification is current, moving a compliance check from a clipboard to the mechanism."
            ],
            [
              {
                "b": "Occupancy and muster reporting"
              },
              ": reliable only where both directions are controlled and where passages through the accompanying wide gate are logged too. An incomplete record is worse than no record during an incident."
            ],
            [
              {
                "b": "Visitor management"
              },
              ": a pre-registered visitor receives a QR code or temporary credential valid for a defined window, usually routed through the wide controlled lane rather than the tripods."
            ],
            [
              {
                "b": "Video surveillance and analytics"
              },
              ": footage bookmarked against each lane event, so a denied attempt or an incomplete rotation can be reviewed from its log entry rather than by scrubbing recordings."
            ],
            [
              {
                "b": "Screening and inspection equipment"
              },
              ": on higher-security entrances the lane releases only after a screening stage returns a clear result, which holds people at the correct point in the queue."
            ],
            [
              {
                "b": "Fire alarm systems"
              },
              ": the hardwired dry contact that drops the arms or releases the lock on alarm, overriding all software logic."
            ]
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "installation-and-maintenance",
      "h2": "Installation and Maintenance",
      "blocks": [
        {
          "type": "h3",
          "text": "Installation and commissioning"
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Settle the egress strategy and the accessible route before ordering."
              },
              " Both consume something physical (a model variant and floor area) and neither can be added by configuration later."
            ],
            [
              {
                "b": "Foundation and anchoring"
              },
              ": a level, load-bearing base and correctly torqued anchor bolts, re-checked after the first months of service. Movement under load transfers into the rotor bearing and the lock alignment."
            ],
            [
              {
                "b": "Lane geometry"
              },
              ": guide railings, hoarding or a fence line on both sides, so the turnstile cannot be walked around. A tripod standing free in an open space controls nothing, and a boundary line that moves during a project needs re-checking against the lane."
            ],
            [
              {
                "b": "Approach and exit space"
              },
              ": enough depth in front for the peak queue, clear space behind so people leaving are not blocked, and an approach that distributes the queue across the bank rather than funnelling it into the nearest lane."
            ],
            [
              {
                "b": "Reader position"
              },
              ": set where the user is already reaching the arm as the release lands. A badly placed reader adds a second to every passage, which is invisible at ten people and decisive at two thousand."
            ],
            [
              {
                "b": "Environmental protection"
              },
              ": enclosure sealing, material grade and any heating or drainage provision matched to the conditions established in the derating section, not to a general indoor assumption."
            ],
            [
              {
                "b": "Cabling"
              },
              ": power, network and reader cabling up through the base in conduit laid before the surface finish, with entries sealed rather than left open behind a cover plate."
            ],
            [
              {
                "b": "Power supply and backup"
              },
              ": stable supply, UPS where lane control must survive an outage, and a tested understanding of what each lane does when supply fails."
            ],
            [
              {
                "b": "Fire panel interface"
              },
              ": wired, documented and tested at commissioning with the chosen egress strategy, with the result recorded so the behaviour can be evidenced later."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Maintenance routine"
        },
        {
          "type": "ul",
          "items": [
            [
              "Check the damper first, every time. A lane that has become loose, notchy, or that slams at the end of rotation is usually reporting damper wear, and this is the most commonly misdiagnosed fault on the device."
            ],
            [
              "Inspect the cam plate notches and locking pin for wear and contamination, confirm the pin seats cleanly in all three positions, and confirm the rotor cannot be reversed once locked."
            ],
            [
              "Check enclosure sealing at cable entries, lid joints and the shaft entry, because that is the route contamination takes to everything else on this list."
            ],
            [
              "Listen to the solenoid on release; a sluggish or chattering actuation is an early warning, and on a hot enclosure it is often the first sign the supply is working above its comfortable range."
            ],
            [
              "Confirm the microswitch or encoder registers every completed rotation, by comparing physical passages against logged events over a sample period. A lane that under-reports is an occupancy reporting problem waiting to surface at the worst moment."
            ],
            [
              "Inspect arms for bending, impact damage and secure fixing at the hub, and the housing for movement under load."
            ],
            [
              "Inspect fixings, cut edges, arm-to-hub interfaces and internal terminations for corrosion where the environment justifies it, at every visit rather than annually."
            ],
            [
              "On drop-arm units, test the drop and the manual re-set at every drill and confirm the arms fall cleanly and completely. Record the result, it is the evidence that the agreed egress behaviour still works."
            ],
            [
              "Audit the accompanying wide gate in operation. If it is propped open at the peak, the entrance is not performing as specified regardless of how the lanes are behaving."
            ],
            [
              "Review logs for a rise in incomplete rotations, which usually points to a release timeout set too short, a reader too far from the arm, or a damper that has stiffened."
            ]
          ]
        }
      ],
      "tone": "gray"
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
              "Mechanical one-person-per-credential enforcement that does not depend on sensors, software, network state or an operator being present and attentive."
            ],
            [
              "Tolerant of dust, heat, humidity, vibration and rough handling, which is why the type endures where more refined lanes degrade."
            ],
            [
              "Few powered components on semi-automatic models, and a mechanical lock that holds if the electronics fail."
            ],
            [
              "Reader-agnostic: card, fingerprint, face or QR, changeable without altering the mechanism as a site's credential policy evolves."
            ],
            [
              "A complete audit trail by identity, direction and time, usable for attendance and, where both directions are controlled, for occupancy and muster reporting."
            ],
            [
              "Simple enough that competent service labour is generally obtainable in most regions, and that a fault can usually be diagnosed on site rather than by substitution."
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
                "b": "No accessible passage whatsoever."
              },
              " Wheelchairs, trolleys, stretchers, prams and large luggage cannot pass. A controlled wide gate is required, and unless it is itself controlled and logged it becomes the weakest point in the installation."
            ],
            [
              {
                "b": "Waist-height control only."
              },
              " The arms can be climbed over or crawled under. The device works as part of a continuous physical line, not on its own."
            ],
            [
              {
                "b": "Lower throughput"
              },
              " than flap and swing barriers, because each person must complete a physical rotation."
            ],
            [
              {
                "b": "The user has to do something."
              },
              " Semi-automatic models require a deliberate push, which an unbriefed public population frequently does not expect and which is awkward for anyone carrying items."
            ],
            [
              {
                "b": "The damper is a consumable."
              },
              " Plan for its service or replacement rather than chasing a change in feel through the electronics."
            ],
            [
              {
                "b": "Egress behaviour must be designed in."
              },
              " Drop-arm or adjacent emergency gate is a hardware and layout decision taken with the fire strategy, not a configuration choice made later."
            ],
            [
              {
                "b": "Catalogue duty figures assume reference conditions."
              },
              " At elevated ambient, in heavy particulate or in sub-zero conditions, the figure the equipment will actually deliver is lower and the service interval is shorter."
            ],
            [
              {
                "b": "Requirements vary by jurisdiction."
              },
              " Fire egress rules, accessibility obligations, installer licensing and conformity marking are all set locally, and an arrangement that is routine in one country may be insufficient in another."
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "Exact behaviour (release timeout, rotation sensing method, damper characteristics, power-failure state, enclosure protection and integration options) depends on the model, controller, firmware and site configuration, and should always be confirmed against the datasheet for the equipment being specified."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "tripod-turnstile-vs-flap-swing-and-full-height-turnstiles",
      "h2": "Tripod Turnstile vs Flap, Swing and Full-Height Turnstiles",
      "blocks": [
        {
          "type": "table",
          "head": [
            "",
            "Tripod turnstile",
            "Flap barrier",
            "Swing barrier",
            "Full-height turnstile"
          ],
          "rows": [
            [
              [
                {
                  "b": "Mechanism"
                }
              ],
              [
                "Three arms on an angled rotor; the user pushes through a 120-degree segment after release"
              ],
              [
                "Flaps retract horizontally into the pedestals"
              ],
              [
                "Solid panels rotate open through an arc on a vertical pivot"
              ],
              [
                "Full-height rotor with vertical bars turning within a fixed cage"
              ]
            ],
            [
              [
                {
                  "b": "Anti-tailgating method"
                }
              ],
              [
                "Mechanical. One release permits exactly one rotation; a second person cannot follow"
              ],
              [
                "Sensor-based. An infrared array counts bodies and alarms on a violation"
              ],
              [
                "Sensor-based, same principle as the flap barrier"
              ],
              [
                "Mechanical and complete; the cage blocks the opening from floor to head height"
              ]
            ],
            [
              [
                {
                  "b": "What it needs to keep working"
                }
              ],
              [
                "A serviced damper and a clean mechanism. Enforcement survives network and sensor failure"
              ],
              [
                "Clean lenses, aligned pedestals, correct beam count and someone to act on alarms"
              ],
              [
                "The same, with a loaded drive and a heavier moving element"
              ],
              [
                "A serviced mechanism. Enforcement survives network and sensor failure"
              ]
            ],
            [
              [
                {
                  "b": "Accessibility"
                }
              ],
              [
                "None. A separate controlled wide gate is required"
              ],
              [
                "Standard lanes are narrow; a wide accessible lane is normally added alongside"
              ],
              [
                "Wide-panel versions often serve as the accessible lane in a bank of gates"
              ],
              [
                "None. A separate controlled accessible gate is always required"
              ]
            ],
            [
              [
                {
                  "b": "Throughput"
                }
              ],
              [
                "Moderate; commonly quoted around 20 to 30 people per minute per lane, equipment-dependent"
              ],
              [
                "Faster; commonly quoted around 30 to 40 people per minute per lane, equipment-dependent"
              ],
              [
                "Moderate; the panel sweeps an arc, so the cycle is longer than a flap"
              ],
              [
                "Lowest of the four; the rotor is large and each passage takes longer"
              ]
            ],
            [
              [
                {
                  "b": "Typically suited to"
                }
              ],
              [
                "Plant and site gates, stadium entry lines, campus and service entrances, unsupervised controlled boundaries"
              ],
              [
                "Office cores, finished concourses and high-traffic indoor entrances"
              ],
              [
                "Reception areas needing a wider lane and mixed pedestrian and trolley traffic"
              ],
              [
                "Perimeter lines, unmanned entrances, substations and high-security compounds"
              ]
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "The four are not better and worse versions of one another, and the selection method above is the way to choose between them. A tripod is chosen for mechanical enforcement and durability, a flap barrier for throughput and appearance, a swing barrier for lane width and mixed traffic, a full-height turnstile for an unmanned perimeter that must not be climbed. Many entrances use more than one type on the same line, which is usually the correct answer rather than a compromise."
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
            "This page is written to be useful anywhere, which means it deliberately avoids national specifics. Local fire and accessibility requirements, local licensing of installers, local availability and support arrangements, and local environmental conditions all differ, and generic advice on those subjects is worth less than none."
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
                "href": "https://www.timewatchindia.com/how-does-a-tripod-turnstile-work",
                "label": "timewatchindia.com, How does a tripod turnstile work?"
              }
            ],
            [
              {
                "b": "Saudi Arabia"
              },
              ": ",
              {
                "href": "https://www.timewatcharabia.com/how-does-a-tripod-turnstile-work",
                "label": "timewatcharabia.com, How does a tripod turnstile work?"
              }
            ],
            [
              {
                "b": "United Arab Emirates"
              },
              ": ",
              {
                "href": "https://www.timewatchuae.com/how-does-a-tripod-turnstile-work",
                "label": "timewatchuae.com, How does a tripod turnstile work?"
              }
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "Readers elsewhere are in the right place. The mechanism explanation, the enforcement-choice method, the derating principles and the jurisdictional checklist on this page are written to be applied to any location, what you supply is the threat model, the user population, the accessibility obligation and the applicable local requirements, and the method does the rest."
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
        "q": "How does a tripod turnstile allow only one person at a time?",
        "a": "The rotor carries a cam plate with three notches, one per arm position, and a spring-loaded pin sits in whichever notch is presented. A valid credential energises a solenoid that pulls the pin clear, and the rotor turns 120 degrees until the next notch arrives beneath the pin and locks it again. One release permits exactly one rotation, so a second person finds the rotor locked and must present their own credential."
      },
      {
        "q": "Why does a tripod turnstile rotate 120 degrees?",
        "a": "Three arms set 120 degrees apart is the smallest arrangement that keeps one arm blocking the lane while another is clear of the walking path. Two arms would need a 180-degree turn, sweeping the trailing arm through the user's path, and four arms would leave a gap too narrow for comfortable passage. The rotor head is also mounted at an angle, so the arms sweep upward and away as the person walks through."
      },
      {
        "q": "What is the damper in a tripod turnstile for?",
        "a": "The damper is a hydraulic or friction unit on the rotor shaft that governs rotation speed. It stops the arms being spun violently however hard they are pushed and brings them to a controlled stop as the lock re-engages. It is also the part that wears: a turnstile that feels loose or notchy, or that slams at the end of each rotation, is usually reporting damper wear rather than a fault in the lock or the controller."
      },
      {
        "q": "What is the difference between mechanical and sensor-based anti-tailgating?",
        "a": "A tripod enforces single passage as a property of its geometry: one release permits exactly one 120-degree rotation and a second person physically cannot follow. A flap or swing barrier opens a clear lane and uses an infrared array to judge how many bodies passed, raising an alarm after the fact. Enforcement does not depend on clean sensors, correct configuration, a live network or an operator responding. Detection does, and what it produces is an alarm rather than a passage that did not happen."
      },
      {
        "q": "When should I choose a tripod turnstile instead of a flap or swing barrier?",
        "a": "Choose mechanical enforcement when the population is enrolled and briefed, when the passage count is itself a deliverable such as occupancy or muster reporting, when the environment is hard on optics and electronics, when the entrance must keep enforcing while unsupervised, and when the threat model includes deliberate credential sharing rather than only accidental following. Choose a sensor-based lane for a public or mixed population, a clean indoor entrance that is staffed, and traffic that routinely includes trolleys and luggage."
      },
      {
        "q": "What is the difference between a mechanical, semi-automatic and fully automatic tripod turnstile?",
        "a": "A mechanical tripod has no electrical release and turns freely in the permitted direction, or is released by a coin, token or attendant lever. A semi-automatic tripod uses a solenoid or electromagnet to release the lock on a valid credential, and the user pushes the arm. A fully automatic tripod releases the lock in the same way, but a motor drives the rotation through the full 120 degrees."
      },
      {
        "q": "What is a drop-arm tripod turnstile and when is it required?",
        "a": "A drop-arm tripod holds its three arms on a latch rather than fixing them rigidly to the hub, so that on a fire alarm signal or loss of power the latch releases and all three arms fall vertically, leaving the lane physically clear. Whether it is required depends on the fire strategy for that route and on local fire requirements, which differ by jurisdiction and building use. Because it is a hardware variant that must be ordered, the decision has to be taken before the equipment is purchased."
      },
      {
        "q": "Are tripod turnstiles wheelchair accessible?",
        "a": "No. No wheelchair, trolley, stretcher, pram or large item of luggage can pass through a tripod turnstile, and no configuration changes that, the rotating arms define a fixed, narrow aperture. Any entrance built from tripods needs an accompanying wide gate planned in from the first layout. Accessibility obligations differ by jurisdiction and building use, so the applicable requirement should be confirmed in writing before the lane layout is drawn."
      },
      {
        "q": "Does the wide gate beside a tripod line weaken the entrance?",
        "a": "It does, unless it is itself controlled. One release equals one rotation at the tripod and an unlimited number of passages at a wide gate left on a manual latch or propped open at the peak. The wide gate needs its own reader, its own lock and its own entry in the same log, a decision about how its own tailgating risk is handled, and sizing for the traffic it will really carry. Specify it as a controlled lane, not as a door."
      },
      {
        "q": "Which standards and approvals apply to a tripod turnstile?",
        "a": "It depends on the country of installation. Fire egress requirements, accessibility obligations, machinery safety, electromagnetic compatibility, electrical installation rules, regional conformity marking, installer licensing and data protection are all set jurisdictionally, and a regime recognised in one country carries no automatic status in another. A conformity mark is also not a performance statement. The specifier should identify which regimes apply locally before selecting equipment and confirm the status of the specific model in writing with the supplier."
      },
      {
        "q": "How many people per minute can a tripod turnstile lane handle?",
        "a": "Figures commonly quoted are in the region of 20 to 30 people per minute per lane, but this is approximate and varies by model, by whether the unit is semi-automatic or fully automatic, and by the damper and controller settings. In practice the limiting factor is how quickly each person presents a credential, so lane count should be sized from the observed or modelled peak arrival pattern rather than from a catalogue rate, and doubled-up where both directions are controlled."
      }
    ]
  },
  "related": {
    "h2": "Related pages",
    "tone": "gray",
    "links": [
      {
        "href": "/how-does-a-swing-barrier-work",
        "label": "how swing barriers work"
      },
      {
        "href": "/how-does-a-flap-barrier-gate-work",
        "label": "how flap barrier gates work"
      },
      {
        "href": "/how-does-a-turnstile-system-work",
        "label": "how turnstile systems work"
      },
      {
        "href": "/products/entrance-control/turnstile-tripod",
        "label": "tripod turnstile range"
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
        "href": "/products/entrance-control",
        "label": "entrance control range"
      },
      {
        "href": "/how-does-an-attendance-machine-work",
        "label": "how attendance machines work"
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
      headline: "How Does a Tripod Turnstile Work?",
      name: metadata.title,
      description:
        "An international technical reference on tripod turnstile operation, covering the solenoid lock and cam plate, the 120-degree rotation that enforces one person per credential, the damper, drop-arm egress, and a method for choosing between mechanical and sensor-based entrance control.",
      url: PAGE_URL,
      mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
      inLanguage: "en",
      isAccessibleForFree: true,
      proficiencyLevel: "Beginner",
      about: [{"@type":"Thing","name":"Tripod turnstile"},{"@type":"Thing","name":"Pedestrian entrance control"},{"@type":"Thing","name":"Anti-tailgating"},{"@type":"Thing","name":"Accessibility provision"},{"@type":"Thing","name":"Technical specification"}],
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
        cssSelector: ["#quick-answer", "#how-does-a-tripod-turnstile-work"],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Blogs", item: `${SITE}/blogs` },
        { "@type": "ListItem", position: 3, name: "How Does a Tripod Turnstile Work?", item: PAGE_URL },
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

export default function HowDoesATripodTurnstileWorkPage() {
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
