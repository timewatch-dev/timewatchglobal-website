import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";

/**
 * Global "how it works" page served at /how-does-a-flap-barrier-gate-work (static informational page, x-default of the four-site cluster).
 * Content: global/how-it-works-pages/GL-08-how-does-a-flap-barrier-gate-work.html (section 4 "Complete Page Content", which includes the FAQ),
 * kept word for word including the "Featured-snippet definition," label and the regional links. Section 1 gives the
 * metadata, section 2 the keywords. The TechArticle / BreadcrumbList nodes are composed from the pack's schema notes; the
 * FAQPage schema is built from the same FAQ data as the visible FAQ, so the two always match.
 * Body links and "Related pages" only point at pages that exist on the global site.
 * Everything renders on the server; the FAQ answers are in the HTML even while collapsed.
 */

export const dynamic = "force-static";

const SITE = "https://www.timewatchglobal.com";
const PAGE_URL = `${SITE}/how-does-a-flap-barrier-gate-work`;
const HERO_IMAGE = `${SITE}/images/how-it-works/flap-barrier-gate-lanes-hero.webp`;
const HERO_ALT = "Glass flap barrier gate lanes with the flaps open in a building reception";
const DATE = "2026-10-27";

export const metadata = {
  title: "How Does a Flap Barrier Gate Work? Retraction Explained",
  description:
    "How a flap barrier gate works (horizontal flap retraction, infrared tracking, anti-tailgating) plus a method for modelling throughput and sizing a lane bank.",
  keywords:
    "how does a flap barrier gate work, flap barrier turnstile working principle, speed gate how it works, flap barrier vs swing barrier, retractable flap turnstile mechanism, entrance throughput calculation, how many turnstile lanes needed, anti tailgating infrared array, pedestrian lane capacity planning, how does a flap barrier open, what are flap barrier flaps made of, how many people per minute can a flap barrier handle, how to size a turnstile bank for a lobby, why is there a queue at my speed gates, can a flap barrier stop an intruder, are flap barriers wheelchair accessible, what is the difference between a flap barrier and a speed gate, what happens to a flap barrier in a fire, how does a flap barrier detect tailgating, flap barrier obstruction detection explained",
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
    title: "How Does a Flap Barrier Gate Work? Mechanism and Throughput Modelling",
    description:
      "Horizontal flap retraction, infrared passage tracking and obstruction reversal, how a flap barrier works, and how to model real entrance throughput rather than trusting a catalogue rate.",
    url: PAGE_URL,
    images: [{ url: HERO_IMAGE, width: 1536, height: 1024, alt: HERO_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Does a Flap Barrier Gate Work? Mechanism and Throughput Modelling",
    description:
      "The flaps are never the bottleneck. How long someone takes to find their card is, and that is what should size the lane bank.",
    images: [{ url: HERO_IMAGE, alt: HERO_ALT }],
  },
};

const page = {
  "hero": {
    "h1": "How Does a Flap Barrier Gate Work?",
    "image": {
      "src": "/images/how-it-works/flap-barrier-gate-lanes-hero.webp",
      "alt": "Glass flap barrier gate lanes with the flaps open in a building reception",
      "width": 1536,
      "height": 1024
    }
  },
  "sections": [
    {
      "id": "what-is-a-flap-barrier-gate",
      "h2": "What Is a Flap Barrier Gate?",
      "blocks": [
        {
          "type": "snippet",
          "parts": [
            {
              "b": "Featured-snippet definition, "
            },
            " A flap barrier gate is an automatic pedestrian entrance control device in which two flaps close across a walking lane and, when a valid credential is presented, retract horizontally into the pedestal housings on either side. An infrared sensor array running down both pedestals tracks the person through the lane, determines direction, counts bodies and confirms a single authorised passage before the flaps extend back across the lane. Because the flaps slide away rather than swinging through an arc, the cycle is short, which is why flap barriers are chosen where pedestrian flow is the governing concern."
          ],
          "quick": true
        },
        {
          "type": "p",
          "parts": [
            "It is also called a flap barrier turnstile, and in its taller glass-clad lobby form a speed gate. It manages flow at a controlled point: an office reception, a concourse, a plant gate, a campus entrance. It sits in the same family as the swing barrier and the tripod turnstile, and the differences between the three are mechanical rather than conceptual, but the mechanical difference is what determines which device belongs in which room."
          ]
        },
        {
          "type": "p",
          "parts": [
            "The framing that matters most is this: ",
            {
              "b": "a flap barrier is an access management and detection device, not a physical restraint, and its flaps are light by design."
            },
            " What it delivers is a controlled, auditable decision point where nothing passes until the system has established that it is allowed to, every passage is logged, and anything irregular raises an alarm. The security value is the alarm, the video bookmark and the response procedure acting together, not the panel."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Most of this page is about the question the mechanism raises rather than answers. A device with a short cycle invites a capacity assumption, and that assumption is where most flap barrier projects go wrong. The throughput section below is the longest on the page for exactly that reason."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "how-does-a-flap-barrier-gate-work",
      "h2": "How Does a Flap Barrier Gate Work?",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "A flap barrier gate works in five stages. A person ",
            {
              "b": "presents"
            },
            " a credential at the reader, a card, a fingerprint, a face, a code on a phone. The controller ",
            {
              "b": "validates"
            },
            " it against the permitted list, applying any time, direction or anti-passback rule. On a valid result the drive motor ",
            {
              "b": "retracts"
            },
            " both flaps horizontally into the pedestal housings, clearing the lane. The infrared array ",
            {
              "b": "tracks"
            },
            " the person through the lane, reading direction and counting bodies from the order in which beams break and restore. Once passage is confirmed, the flaps ",
            {
              "b": "extend"
            },
            " back across the lane and the event is written to the log."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Present, validate, retract, track, extend. Everything else on this page is detail beneath those five verbs, and the throughput method further down is most usefully understood as the discovery that the first verb, not the third, sets how fast the lane actually moves."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "retraction-versus-rotation-the-difference-that-defines-the-category",
      "h2": "Retraction Versus Rotation: The Difference That Defines the Category",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "This distinction deserves its own section because it is the source of most confusion in this product family and because every other characteristic of the device follows from it."
          ]
        },
        {
          "type": "p",
          "parts": [
            {
              "b": "Flap barrier flaps retract horizontally into the pedestal."
            },
            " They slide sideways, withdrawing into slots in the housings on either side of the lane, and at the fully open position they are inside the pedestals rather than anywhere in the opening. ",
            {
              "b": "Swing barrier panels rotate about a vertical axis."
            },
            " They pivot at the pedestal, sweeping through roughly a quarter turn, and at the fully open position they stand alongside the lane rather than inside the housing."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Three consequences follow, and they explain the entire division of labour between the two devices."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "The flap travels a shorter distance and carries less inertia, so the cycle is shorter."
              },
              " A light panel sliding a short distance can be accelerated and stopped quickly; a rigid panel rotating through an arc cannot, because its mass is distributed away from the pivot. This is the whole reason flap barriers are associated with fast-moving entrances."
            ],
            [
              {
                "b": "A retracting flap must be light enough to withdraw and yield, which caps how substantial it can be."
              },
              " That is why flaps are acrylic or polycarbonate rather than steel, and why the device controls passage rather than restraining it."
            ],
            [
              {
                "b": "Retraction constrains lane width, because the flap has to fit inside the pedestal."
              },
              " A swing panel has no such limit (it swings clear) which is why wide accessible lanes are typically a swing format and why standard flap lanes will not take a wheelchair or a trolley."
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "The same difference explains why premium lobby speed gates are a flap variant rather than a swing one. A reception bank is judged on how quickly a stream of arriving people clears it and on how little floor it occupies, and both favour the retracting mechanism. The glass pedestals and quiet drive that distinguish a speed gate are a build specification layered on top of that mechanical choice, not a different operating principle."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "main-components-of-a-flap-barrier-gate",
      "h2": "Main Components of a Flap Barrier Gate",
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
                "Pedestal housings"
              ],
              [
                "Cabinets either side of the lane holding the drive assembly, controller, sensor array and the retracted flaps. Commonly stainless steel, with grade selected against the environment."
              ],
              [
                "Internal width, which sets how far the flaps can withdraw and therefore the clear lane width; material grade, which matters where humidity or airborne salt is a factor."
              ]
            ],
            [
              [
                "Retractable flaps"
              ],
              [
                "The moving panels blocking the lane. Usually acrylic or polycarbonate; tempered glass on premium variants. They withdraw into slots in the pedestals rather than rotating open."
              ],
              [
                "Material, thickness and edge profile, all of which bear on mass, on drive requirement and on how the flap behaves on contact with a person."
              ]
            ],
            [
              [
                "Drive motor and retraction mechanism"
              ],
              [
                "A servo or brushless DC motor with a linkage, rack or belt converting rotation into the flaps' horizontal travel. Low flap mass means low inertia, which is what permits a short cycle."
              ],
              [
                "Motor rating against flap mass and cycle count together, and whether holding force and reversal sensitivity are configurable or fixed in firmware."
              ]
            ],
            [
              [
                "Encoder position feedback"
              ],
              [
                "Reports flap position continuously, supporting precise stopping, soft start and soft stop, and obstruction detection by comparing expected against actual travel."
              ],
              [
                "Resolution, and whether obstruction sensitivity is exposed to the installer as a configurable parameter."
              ]
            ],
            [
              [
                "Controller"
              ],
              [
                "The logic of the lane. Accepts reader and sensor inputs, drives the motor, applies the anti-tailgating and direction rules, raises alarms and communicates with the access control platform."
              ],
              [
                "Where the access decision is taken, how many violation types are distinguished, and how the lane behaves if the network link drops."
              ]
            ],
            [
              [
                "Infrared sensor array"
              ],
              [
                "Multiple transmitter and receiver beam pairs at varying heights down the facing sides of both pedestals. The pattern and sequence of broken beams is what the controller reads to determine presence, direction and body count."
              ],
              [
                {
                  "b": "Beam pair count, vertical distribution and spacing."
                },
                " This is the specification that decides anti-tailgating quality and the one most often reduced to a single number."
              ]
            ],
            [
              [
                "Credential reader"
              ],
              [
                "Card reader, fingerprint or palm sensor, face terminal, code scanner, or a combination. Mounted on the pedestal top or integrated into its face."
              ],
              [
                "Reader technology, mounting height and angle, which together set presentation time and therefore, as the throughput section explains, the lane's real rate."
              ]
            ],
            [
              [
                "Direction indicators"
              ],
              [
                "Arrow or cross indicators on the pedestal tops showing whether the lane is open in a given direction."
              ],
              [
                "Visibility from the approach distance and whether indication is pictographic rather than text-based, which matters where the user population does not share one language."
              ]
            ],
            [
              [
                "Alarm"
              ],
              [
                "Audible and visual indication on tailgating, wrong-direction entry, forced passage or an unauthorised attempt, normally also raised as an event in the software."
              ],
              [
                "Whether violation types are distinguished in the alarm and the log, and whether tone and volume suit the acoustic environment."
              ]
            ],
            [
              [
                "Power supply and backup"
              ],
              [
                "Low-voltage supply inside the pedestal, with battery or UPS provision where the lane must stay controlled through an interruption."
              ],
              [
                "Input voltage and frequency vary by region; backup duration and whether it is fitted as standard vary by model and specification."
              ]
            ],
            [
              [
                "Manual release"
              ],
              [
                "A mechanism freeing the flaps so the lane can be opened by hand during a power failure or maintenance."
              ],
              [
                "Whether release is automatic on power loss or requires a deliberate action, and whether its operation is itself signalled."
              ]
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Pedestal housings and retractable flaps"
        },
        {
          "type": "p",
          "parts": [
            "The pedestal is not simply a cover. Its internal width sets how far the flaps can withdraw and therefore the clear lane width, which is the mechanical reason a standard flap lane is narrow. Its facing surface carries the sensor array, so alignment relative to the opposite pedestal is a functional requirement rather than a cosmetic one. Two pedestals installed slightly out of parallel produce intermittent sensor faults that are routinely misdiagnosed as an electronics problem and chased for months."
          ]
        },
        {
          "type": "h3",
          "text": "Drive motor and the retraction mechanism"
        },
        {
          "type": "p",
          "parts": [
            "Most current models use a brushless DC or servo motor with encoder feedback rather than a simple geared motor. The encoder tells the controller exactly where the flaps are throughout travel, which supports precise stopping, soft start and soft stop so the flaps do not snap open, and obstruction detection by comparing expected travel against actual. The linkage, rack or belt that converts rotation into horizontal travel is the mechanism's distinguishing element and the one whose condition determines how cleanly the flaps meet at the lane centre over time."
          ]
        },
        {
          "type": "h3",
          "text": "Controller and credential reader"
        },
        {
          "type": "p",
          "parts": [
            "The controller holds the open timers, the direction rules, the response to each sensor pattern, the alarm logic and the interface to the wider system. The reader is deliberately separate from it, which is why a lane can be re-fitted from card to face recognition, or made to accept both, without changing the barrier mechanism: the reader simply supplies a validated identity to the same controller input. That separation is also why the reader choice can be revisited later to address a throughput problem, which is unusually convenient given that the reader is normally where the throughput problem lives."
          ]
        },
        {
          "type": "h3",
          "text": "The infrared sensor array"
        },
        {
          "type": "p",
          "parts": [
            "This is the part that makes a flap barrier more than a powered gate, and it is covered in full in the next section."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "how-does-a-flap-barrier-gate-work-step-by-step",
      "h2": "How Does a Flap Barrier Gate Work Step by Step?",
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
                "A person approaches the lane"
              ],
              [
                "The first beams of the infrared array register someone at the entry mouth, and the direction indicator shows whether the lane is open that way."
              ]
            ],
            [
              [
                {
                  "b": "2"
                }
              ],
              [
                "A credential is presented"
              ],
              [
                "A card is tapped, a finger or palm is placed, a face is presented to the terminal, or a code is shown to the scanner. ",
                {
                  "i": "This is the step that sets the lane's real rate."
                }
              ]
            ],
            [
              [
                {
                  "b": "3"
                }
              ],
              [
                "The credential is validated"
              ],
              [
                "The reader passes the identity to the controller or access platform, which checks it against the permitted list along with any time, direction or anti-passback rule. A valid match produces an open command; an invalid one is logged as a denied attempt."
              ]
            ],
            [
              [
                {
                  "b": "4"
                }
              ],
              [
                "The drive retracts the flaps horizontally"
              ],
              [
                "The controller energises the motor, which draws both flaps sideways into the pedestal housings, clearing the lane. This horizontal retraction is the mechanical difference from a swing barrier, whose panels rotate about a vertical axis."
              ]
            ],
            [
              [
                {
                  "b": "5"
                }
              ],
              [
                "The open position is confirmed"
              ],
              [
                "The encoder or a limit position tells the controller the flaps are fully withdrawn, and the motor stops."
              ]
            ],
            [
              [
                {
                  "b": "6"
                }
              ],
              [
                "The person walks through"
              ],
              [
                "Infrared beam pairs break and restore in sequence as the body moves along the lane, and the controller reads that sequence continuously rather than as discrete events."
              ]
            ],
            [
              [
                {
                  "b": "7"
                }
              ],
              [
                "Passage is analysed"
              ],
              [
                "From which beams broke, at what heights and in what order, the controller determines direction, counts the bodies in the lane, and decides whether the passage is a single authorised person or a violation."
              ]
            ],
            [
              [
                {
                  "b": "8"
                }
              ],
              [
                "Passage is confirmed complete"
              ],
              [
                "When the exit-side beams clear and no further body is detected, the controller treats the passage as finished."
              ]
            ],
            [
              [
                {
                  "b": "9"
                }
              ],
              [
                "The flaps extend back across the lane"
              ],
              [
                "The motor drives the flaps out of the pedestals until they meet at the lane centre, ready for the next credential."
              ]
            ],
            [
              [
                {
                  "b": "10"
                }
              ],
              [
                "The event is logged"
              ],
              [
                "The passage (identity, direction, lane, timestamp and any alarm raised) is written to the access control or attendance database."
              ]
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "If a second person is detected in the lane without a second authorisation, or if someone enters against the set direction, the controller does not complete step 9 normally. It closes the flaps and raises a classified alarm instead, which is the subject of the next section."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "how-the-infrared-array-determines-direction-and-detects-tailgating",
      "h2": "How the Infrared Array Determines Direction and Detects Tailgating",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "The sensor array is the core of the anti-tailgating logic and the single component that most separates a capable lane from a basic one. Along the facing side of each pedestal sits a column of infrared emitters with matching receivers opposite, each pair forming a beam across the lane at a set height. A lane may carry anywhere from a handful of pairs to well over twenty depending on the model. Nothing about any single beam is clever. What the controller does with the whole pattern is."
          ]
        },
        {
          "type": "p",
          "parts": [
            "As a person walks through, their body interrupts beams in a characteristic order (entry-side first, then middle, then exit-side) and beams at torso height break for longer than those at head or knee height. From that pattern the controller derives three things:"
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Direction"
              },
              ": the order in which beams break tells the controller which way the person is travelling, so entry against a lane set for exit is flagged as wrong-direction passage."
            ],
            [
              {
                "b": "Body count"
              },
              ": one body produces a single continuous block of interruption moving along the lane; two produce a second block before the first has cleared."
            ],
            [
              {
                "b": "Anomalies"
              },
              ": a low break with nothing above it is probably a bag or a trolley; a break that stops mid-lane is probably someone who has turned back."
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "On a violation the controller closes the flaps and raises the alarm, and the event appears in the software with its own classification so it can be reviewed later against video footage."
          ]
        },
        {
          "type": "p",
          "parts": [
            {
              "b": "Array quality decides anti-tailgating quality."
            },
            " A lane with too few beam pairs, or with all of them clustered at one height, simply cannot resolve a second person following closely behind the first: the two bodies read as one continuous interruption and nothing is flagged. Where anti-tailgating is a genuine requirement rather than a line in a specification, the number of beam pairs and their height distribution deserves at least as much attention as the finish of the pedestal, and the layout should be requested as a drawing rather than accepted as a single number, two products quoting the same count can behave very differently in the same lane."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "flap-materials-and-why-they-are-chosen",
      "h2": "Flap Materials and Why They Are Chosen",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "Flaps are usually acrylic or polycarbonate, and the choice is deliberate on two counts rather than incidental."
          ]
        },
        {
          "type": "p",
          "parts": [
            {
              "b": "Mass."
            },
            " A light panel has low inertia, so it can be accelerated and stopped quickly, which is what makes the short cycle possible in the first place. A heavier flap would need a larger drive and would still cycle more slowly, which would remove the device's reason to exist."
          ]
        },
        {
          "type": "p",
          "parts": [
            {
              "b": "Behaviour on contact."
            },
            " A light panel with rounded edges yields rather than injures if it meets a person. That matters in a device closing across a walking route used by children, older people, anyone carrying something and anyone not paying attention, which is to say, in every real entrance. The yielding flap is part of the safety design rather than a compromise in it."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Between the two materials, polycarbonate resists impact better while acrylic is more scratch-resistant and holds optical clarity well in heavy public use. Some models, particularly speed gates for corporate lobbies, use tempered glass flaps for appearance. Glass is heavier and changes the drive requirement, so it is a design choice made at model level rather than a field substitution, fitting glass flaps to a drive rated for acrylic produces exactly the slow degradation described in the maintenance section."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "how-to-model-throughput-and-size-a-lane-bank-for-any-site",
      "h2": "How to Model Throughput and Size a Lane Bank for Any Site",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "This is the section most entrance projects skip, and skipping it is the reason so many lane banks produce a queue the day they open. The failure is almost never the equipment. It is an arithmetic error made at briefing stage, where a daily headcount was divided by a catalogue rate and the answer was treated as a lane count."
          ]
        },
        {
          "type": "p",
          "parts": [
            "Figures commonly quoted for flap barrier lanes sit in the region of tens of people per minute per lane, but ",
            {
              "b": "any such figure is approximate and equipment-dependent"
            },
            ": it varies with the model, the drive, the controller timing and how the lane is configured. More importantly, it assumes something that real entrances almost never deliver: that people present credentials smoothly and continuously, one after another, without pause. The method below replaces that assumption with observation."
          ]
        },
        {
          "type": "h3",
          "text": "Step 1, Establish the peak arrival profile, not the headcount"
        },
        {
          "type": "p",
          "parts": [
            "The first requirement is a shape, not a number. Two buildings with identical daily occupancy can need completely different lane banks depending on how their people arrive."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Observe an existing entrance across its whole peak period"
              },
              ", recording arrivals in short intervals rather than as a total. The profile that emerges (a sharp spike, a broad plateau, or several smaller waves) is the thing the bank must absorb."
            ],
            [
              {
                "b": "For a new building, derive the profile from the operating pattern."
              },
              " A single shift start concentrates almost everything into minutes. A staggered or flexible pattern spreads the same population across an hour and may need half the lanes."
            ],
            [
              {
                "b": "Identify what drives the shape."
              },
              " A transport service arriving on a schedule produces waves rather than a flow, and a bank sized for the average will queue on every wave."
            ],
            [
              {
                "b": "Record the direction split"
              },
              ", since morning inbound and evening outbound peaks are frequently of different heights and different shapes in the same building."
            ],
            [
              {
                "b": "Record the profile as a series, not a maximum"
              },
              " (for example \"arrivals in five-minute blocks across the 40-minute morning peak\") because the series is what later reveals whether a queue clears between waves or accumulates."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Step 2, Measure credential presentation time, because that is the real constraint"
        },
        {
          "type": "p",
          "parts": [
            "This is the step that distinguishes a working model from a catalogue calculation, and it is the central claim of this page: ",
            {
              "b": "in an actual entrance the limiting factor is almost never how fast the flaps move. It is how long someone takes to present a credential."
            }
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Time it directly."
              },
              " Stand at an existing lane during the peak and time from a person reaching the reader to the flaps beginning to retract. The spread in that figure is usually wider than the whole mechanical cycle."
            ],
            [
              {
                "b": "Understand what drives it"
              },
              ": finding a card in a bag, positioning a finger correctly, stopping and looking at a face terminal, retrieving a phone, or simply not knowing where the reader is."
            ],
            [
              {
                "b": "Measure the population you will actually have."
              },
              " A fixed staff population that passes the same lane twice a day becomes fast through familiarity; a visitor or public population never does, and must be modelled at the slower figure."
            ],
            [
              {
                "b": "Treat the reader choice as a throughput decision:"
              },
              " because it is. A method that resolves during the approach outperforms one requiring a deliberate stop, regardless of how quickly the flaps move afterwards."
            ],
            [
              {
                "b": "Derive the realistic per-lane rate from presentation time plus the mechanical cycle:"
              },
              " not from the catalogue figure, and state in the specification that the derived rate is approximate and equipment-dependent."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Step 3, Derive the lane count from observed behaviour"
        },
        {
          "type": "p",
          "parts": [
            "With a profile and a realistic per-lane rate, the lane count becomes arithmetic rather than judgement, and it is usually a larger number than the catalogue calculation produced."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Apply the realistic rate to the busiest interval of the profile:"
              },
              " not to the peak hour averaged out. An entrance that works on average and fails for eight minutes every morning is an entrance that fails."
            ],
            [
              {
                "b": "Check whether the queue clears between waves."
              },
              " A bank that falls slightly behind during each wave and never recovers produces a queue that grows through the whole peak, which is the characteristic failure of an under-sized bank."
            ],
            [
              {
                "b": "Set an acceptable queue"
              },
              " explicitly (a maximum wait and a maximum queue length) because \"no queue\" is not achievable and an unstated target is one nobody can design against."
            ],
            [
              {
                "b": "Compare the result against the catalogue calculation"
              },
              " and keep both in the record. The gap between them is the clearest argument available when the lane count is challenged later."
            ],
            [
              {
                "b": "Re-derive if the reader choice changes:"
              },
              " since a change of credential method moves presentation time and therefore moves the lane count."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Step 4, Size accessible lane provision separately"
        },
        {
          "type": "p",
          "parts": [
            "This provision is not a fraction of the throughput calculation and must not be derived from it. It is a separate requirement with a separate basis, and on a flap barrier bank it usually means a different lane format entirely."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Recognise the constraint:"
              },
              " a standard flap lane is narrow, because the flap must fit inside the pedestal when retracted. It will not take a wheelchair, a trolley or large luggage, and no configuration changes that."
            ],
            [
              {
                "b": "Provide a wide accessible lane alongside:"
              },
              " commonly in a swing format since a rotating panel swings clear of the opening rather than withdrawing into it."
            ],
            [
              {
                "b": "Size the provision from the user mix"
              },
              " (wheelchair users, people with assistance animals or walking aids, people with luggage or prams, contractors with equipment, staff moving trolleys) counted as ",
              {
                "i": "passages"
              },
              " rather than as people, since one person moving equipment repeatedly generates many wide-lane passages."
            ],
            [
              {
                "b": "Place the wide lane on the principal route:"
              },
              " not at the far end of the bank behind a planter, where it is technically present and practically a problem."
            ],
            [
              {
                "b": "Confirm the local requirement before the layout is fixed."
              },
              " Minimum clear widths, required provision and approach space are set jurisdictionally, and a layout satisfying one regime may not satisfy another. This is effectively irreversible once the floor is finished."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Step 5, Allow for the return flow, violations and lanes out of service"
        },
        {
          "type": "p",
          "parts": [
            "Three realities routinely absent from a first model, each of which consumes capacity the model assumed was available."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "The return flow."
              },
              " People leaving during an arrival peak occupy lanes. A bank set entirely inbound at peak forces outbound traffic into a lane that is then unavailable to arrivals, or around the bank entirely."
            ],
            [
              {
                "b": "Violations and resets."
              },
              " Every tailgating alarm that locks a lane consumes the throughput of everyone behind it. A site expecting a high violation rate (a public population, a poorly briefed one, or one with a lot of accompanied movement) needs either more lanes or a less disruptive alarm response, and that is a decision to take knowingly."
            ],
            [
              {
                "b": "Denied attempts."
              },
              " An expired or unregistered credential stops a lane for as long as the person takes to realise and move aside, and on a visitor-heavy entrance this is not a rare event."
            ],
            [
              {
                "b": "Lanes out of service."
              },
              " Maintenance and faults happen. A bank sized exactly to the peak has no capacity on the day one lane is down, which is predictably the day it matters."
            ],
            [
              {
                "b": "Add the spare lane explicitly and record why:"
              },
              " so it survives the first round of design review rather than being removed as surplus."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Step 6, Validate the model against approach and egress space"
        },
        {
          "type": "p",
          "parts": [
            "A correct lane count in the wrong space still produces a queue. The final step tests the model against the room it has to live in."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Check approach depth."
              },
              " The queue has to stand somewhere, and if it cannot form in front of the bank it will form outside the building or across a circulation route."
            ],
            [
              {
                "b": "Check clear space beyond the lanes:"
              },
              " so people who have passed are not blocked by those waiting for a lift. A bank that clears into a bottleneck behaves exactly like a bank with too few lanes."
            ],
            [
              {
                "b": "Check the reader position against the approach direction:"
              },
              " since a reader people have to turn back for adds to presentation time at every single passage, and presentation time is what the whole model turns on."
            ],
            [
              {
                "b": "Check indication visibility from the approach distance:"
              },
              " because people queueing at a lane set against them is pure lost capacity that no amount of lane count recovers."
            ],
            [
              {
                "b": "Re-run the model against the final layout:"
              },
              " not the concept layout, since circulation changes during design routinely invalidate the assumptions the lane count was built on."
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Writing it down: a six-line throughput schedule"
        },
        {
          "type": "p",
          "parts": [
            "The six determinations condense into a schedule short enough to issue with a tender and specific enough that a catalogue rate cannot pass as an answer."
          ]
        },
        {
          "type": "ol",
          "items": [
            [
              {
                "b": "Arrival profile"
              },
              ": arrivals in short intervals across the whole peak, by direction, with how the profile was obtained and what drives its shape. Example of a well-formed entry: \"Inbound arrivals recorded in five-minute blocks across the 40-minute morning peak at the existing entrance; three distinct waves aligned to a scheduled transport service.\""
            ],
            [
              {
                "b": "Presentation time"
              },
              ": measured time from reaching the reader to flap retraction, for the population that will actually use the lane, with the credential method and the spread observed."
            ],
            [
              {
                "b": "Derived lane rate and lane count"
              },
              ": the realistic per-lane rate derived from presentation time plus mechanical cycle, stated as approximate and equipment-dependent; the lane count applied to the busiest interval; the acceptable queue target; and the catalogue calculation retained for comparison."
            ],
            [
              {
                "b": "Accessible provision"
              },
              ": number and format of wide lanes, clear width required, position within the bank, the passage count they are sized for, and the local accessibility requirement they were set against."
            ],
            [
              {
                "b": "Allowances"
              },
              ": return flow at peak, expected violation and denied-attempt rate with the chosen alarm response, and the spare lane allowed for maintenance and faults, each recorded with its reason."
            ],
            [
              {
                "b": "Spatial validation"
              },
              ": approach depth, clear space beyond the lanes, reader position relative to approach direction, indication visibility, and confirmation that the model was re-run against the final layout."
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "A supplier or designer who can answer all six lines has told you something useful. An answer consisting of a catalogue rate and a division has not."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "how-flap-barrier-safety-systems-work",
      "h2": "How Flap Barrier Safety Systems Work",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "Because the flaps move across a space people occupy, protection is layered, and each layer works by a different mechanism rather than duplicating the others."
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Presence interlock"
              },
              ": while the array detects a body in the lane, the controller is inhibited from closing at all. This prevents the close command rather than interrupting one, which is a materially safer arrangement than relying on reversal."
            ],
            [
              {
                "b": "Obstruction detection"
              },
              ": the controller monitors motor load or encoder feedback. A rise in load, or travel stopping short of the expected position, is read as contact and the flaps reverse. Sensitivity is usually configurable and differs between models, so it should be set and tested rather than accepted as delivered."
            ],
            [
              {
                "b": "Yielding flap material"
              },
              ": the light acrylic or polycarbonate panel is itself part of the safety design, limiting the force that can be applied to a person regardless of what the control system does."
            ],
            [
              {
                "b": "Fire alarm interface"
              },
              ": a dry contact from the fire panel drives the flaps to retract and hold open, clearing the escape route. On any lane forming part of an egress path this should be treated as essential and wired at installation rather than added later."
            ],
            [
              {
                "b": "Power failure behaviour"
              },
              ": lanes on an escape route are commonly configured to retract and stay open on loss of power."
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "The last two are a life-safety decision rather than a default. ",
            {
              "b": "Fail-safe"
            },
            " means the lane opens on alarm or power loss, prioritising evacuation; ",
            {
              "b": "fail-secure"
            },
            " means it stays closed, prioritising containment. Which applies depends on the route, the building's fire strategy and the applicable local rules, and the decision must be agreed with whoever owns life safety for that route and recorded. Fire-egress requirements governing how an entrance control line behaves on alarm differ between jurisdictions, and in several the behaviour is subject to a formal approval process with its own programme implications. Establish the position before the layout is fixed."
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "speed-gates-and-standard-flap-barriers",
      "h2": "Speed Gates and Standard Flap Barriers",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "The terms overlap and are used loosely, so it is worth being precise. A speed gate works on the same principle as a standard flap barrier, retracting panels, infrared array, the same operating sequence, the same obstruction behaviour. The difference is build and setting rather than mechanism:"
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Taller glass pedestals"
              },
              " rather than short stainless cabinets, often with the array concealed behind the glass."
            ],
            [
              {
                "b": "A slimmer profile"
              },
              ", so a bank of lanes occupies less floor and reads as part of the reception design rather than as equipment placed in it."
            ],
            [
              {
                "b": "A quieter drive"
              },
              ", because a lobby where people are met and greeted cannot tolerate mechanical noise at every passage."
            ],
            [
              {
                "b": "Finish-led design"
              },
              ": glass, brushed metal, integrated lighting and flush readers."
            ],
            [
              {
                "b": "Frequently glass flaps"
              },
              ", which are heavier than acrylic and therefore paired with a drive rated for them."
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "A standard flap barrier is built for utility: robust stainless pedestals, straightforward maintenance access, and tolerance of the dust and traffic of a plant gate or a transport concourse. Neither is a better device. They are built for different rooms, and the throughput method above applies identically to both, a speed gate in a busy lobby is just as capable of producing a queue if the lane count came from a catalogue rate."
          ]
        }
      ],
      "tone": "white"
    },
    {
      "id": "where-flap-barrier-gates-are-used",
      "h2": "Where Flap Barrier Gates Are Used",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "Flap barrier gates appear wherever pedestrian movement must be controlled, counted and recorded, and particularly where the arrival pattern is concentrated. The site types below recur in every region, each with a characteristic throughput profile:"
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Corporate campuses and office buildings"
              },
              ": reception lanes in speed gate form, with a sharp morning peak and a familiar staff population whose presentation time is short."
            ],
            [
              {
                "b": "Transport terminals and concourses"
              },
              ": high-volume passenger lanes against a public population that cannot be briefed, where presentation time is long and variable and the lane count must reflect that."
            ],
            [
              {
                "b": "Manufacturing plants and industrial estates"
              },
              ": shift entry and exit with attendance capture at the gate, where the entire day's flow concentrates into minutes and the profile is effectively a single spike."
            ],
            [
              {
                "b": "Logistics and distribution centres"
              },
              ": shift-change flow with equipment movement through the same entrance, which makes the separate accessible provision a working requirement rather than a compliance one."
            ],
            [
              {
                "b": "Hospitals and healthcare campuses"
              },
              ": separating restricted clinical areas from public circulation, with wide lanes kept clear for stretchers and equipment."
            ],
            [
              {
                "b": "Universities and educational campuses"
              },
              ": large seasonal variation and a population that changes annually, so the model should be re-run rather than inherited."
            ],
            [
              {
                "b": "Data centres and high-security facilities"
              },
              ": tighter anti-tailgating settings, denser sensor arrays and interlocked lanes, where a higher violation rate is accepted as the trade for the detection standard."
            ],
            [
              {
                "b": "Government facilities and public institutions"
              },
              ": visitor-controlled entry with logging, where denied attempts are frequent enough to belong in the capacity model."
            ],
            [
              {
                "b": "Stadiums, exhibition centres and event venues"
              },
              ": extreme short-duration peaks that dominate every other consideration in the lane count."
            ],
            [
              {
                "b": "Retail and mixed-use developments"
              },
              ": entrance control that must coexist with a designed interior, where the speed gate format is usually the starting point."
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "TimeWatch supplies, installs and services flap barrier gates, speed gates and associated pedestrian entrance control equipment internationally, and maintains dedicated regional sites for several markets, see the regional guidance below. Lane width, flap material, beam count and cycle behaviour should always be confirmed against the documentation for the specific model being specified."
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
            "A flap barrier lane rarely operates alone. Typical integrations:"
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
              ": the passage event doubles as the attendance record, removing a separate clocking step and a separate queue at shift change."
            ],
            [
              {
                "b": "Visitor management"
              },
              ": a pre-registered visitor receives a code or temporary card the lane accepts for a defined window, with arrival notified to the host."
            ],
            [
              {
                "b": "Face recognition terminals"
              },
              ": hands-free presentation, which addresses the single largest source of lane delay identified in the throughput method above."
            ],
            [
              {
                "b": "Video surveillance and analytics"
              },
              ": footage bookmarked against each lane event, so any tailgating alarm can be reviewed from its log entry rather than searched for by time. This is where the device's security value actually sits."
            ],
            [
              {
                "b": "Fire alarm systems"
              },
              ": automatic retract-and-hold on alarm where the lane forms an escape route, wired and tested at commissioning."
            ],
            [
              {
                "b": "Occupancy and muster reporting"
              },
              ": because the array counts bodies rather than credentials, the lane supports a reasonably accurate live occupancy figure for evacuation roll-call."
            ],
            [
              {
                "b": "Lift destination control"
              },
              ": a validated passage calling a lift to the user's floor, which removes a second queue immediately behind the first."
            ],
            [
              {
                "b": "Screening equipment"
              },
              ": where an entrance includes walk-through metal detection, the lane physically prevents progress until screening is resolved, which is what turns an alarm into a control."
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
            "Most flap barrier problems trace back to installation and layout rather than to the equipment. The principal considerations:"
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "b": "Floor flatness and pedestal alignment"
              },
              ": pedestals must be level and truly parallel, or opposing sensor pairs fall out of alignment and produce intermittent faults that are easily misdiagnosed as an electronics problem."
            ],
            [
              {
                "b": "Lane width and accessible provision"
              },
              ": a standard flap lane will not take a wheelchair, a trolley or large luggage, so an entrance built entirely from standard lanes has an accessibility problem from day one. Settle this at design stage, from Step 4 of the throughput method, rather than discovering it at handover."
            ],
            [
              {
                "b": "Queueing and circulation space"
              },
              ": approach depth in front of the lanes and clear space behind, validated against the model rather than assumed."
            ],
            [
              {
                "b": "Cable routing"
              },
              ": power, network and reader cabling up through the floor into the pedestal base, in conduit laid before the floor finish. Retrofitting it afterwards is disruptive and usually visible for the life of the floor."
            ],
            [
              {
                "b": "Reader position"
              },
              ": set at a height and angle people find without being told, since a badly placed reader adds to presentation time at every passage and therefore to the lane count required."
            ],
            [
              {
                "b": "Ambient conditions and environmental derating"
              },
              ": a catalogue duty rating assumes reference conditions and a real entrance rarely matches them. Direct sunlight onto the array affects some models, so lanes near a glazed façade need the manufacturer's guidance checked; high ambient reduces permissible duty and stresses electronics; airborne particulates settle on the array's optics and abrade seals; salt-laden coastal air drives the corrosion specification for pedestals and fixings; sub-zero exposure may require heaters; and heavy rainfall at a semi-open entrance demands sealing and drainage attention. State the conditions the lane will actually see and require the supplier to confirm suitability."
            ],
            [
              {
                "b": "Power supply and backup"
              },
              ": stable supply with UPS provision where lane control must survive an interruption, sized against how long the entrance must keep functioning."
            ],
            [
              {
                "b": "Fire interface wiring"
              },
              ": the dry contact from the fire panel pulled and tested during installation, and witnessed where the local approval process requires it."
            ],
            [
              {
                "b": "Conformity and electrical regimes"
              },
              ": machinery safety, electromagnetic compatibility, regional product conformity marking and national wiring rules all differ by jurisdiction, and a mark required in one region is not automatically accepted in another. Identify which regime applies in the country of installation before equipment is selected."
            ]
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "maintenance-considerations",
      "h2": "Maintenance Considerations",
      "blocks": [
        {
          "type": "p",
          "parts": [
            "Flap barriers are electromechanical devices cycling continuously in a public space. Routine attention keeps them dependable:"
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              "Clean the emitter and receiver windows on both pedestals. Dust and fingerprints on the optics are a frequent cause of erratic detection and the fix takes seconds."
            ],
            [
              "Check pedestal alignment, particularly after any floor work or an impact from a trolley, comparing against the alignment recorded at commissioning."
            ],
            [
              "Inspect the flaps for scratches, cracks and edge damage, and confirm they still meet cleanly at the lane centre, a drifting meeting point is usually the linkage rather than the flap."
            ],
            [
              "Verify the drive runs smoothly through full travel with no binding at either end, and listen for changes in sound, which usually precede a failure."
            ],
            [
              "Test obstruction reversal deliberately, with a soft object, at the configured sensitivity, and record the result."
            ],
            [
              "Test the fire alarm interface during scheduled drills and confirm the lane behaves as the fire strategy requires."
            ],
            [
              "Confirm the manual release operates, before it is needed."
            ],
            [
              "Review alarm logs. A rise in tailgating alarms at one lane usually points to a sensor or layout problem rather than a change in behaviour."
            ],
            [
              {
                "b": "Review throughput data against the model."
              },
              " Passage counts per lane across the peak will show whether the bank is still performing as designed, a population change, a reader change or a circulation change can invalidate the original model without anyone touching the equipment."
            ],
            [
              "Set service intervals from passage count and environment rather than a fixed calendar, since a busy public lane and a low-traffic office lane age at very different rates."
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
              "A short cycle relative to rotating-arm and swinging-panel devices, because the flaps retract rather than sweep through an arc."
            ],
            [
              "Anti-tailgating and direction detection through the infrared array, with each violation classified, alarmed and logged."
            ],
            [
              "A complete audit trail by identity, direction and time, usable for attendance and live occupancy reporting."
            ],
            [
              "Reader-agnostic: card, fingerprint, face or code, changeable without altering the mechanism, which also means a throughput problem can be addressed without replacing the lanes."
            ],
            [
              "In speed gate form, an entrance control device that suits a designed reception rather than fighting it."
            ],
            [
              "A slim footprint, so a bank of lanes occupies less floor than equivalent capacity in other formats."
            ],
            [
              "Body counting at the array supports an occupancy figure for evacuation roll-call that credential counting alone cannot provide."
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
                "b": "A flap barrier controls passage; it does not physically restrain."
              },
              " The flaps are light by design and a determined person can force or vault them. The security value comes from the barrier, the alarm, the video bookmark and a defined response procedure acting together, the device alone is not the control."
            ],
            [
              {
                "b": "Lane width is a real constraint."
              },
              " Standard lanes do not take wheelchairs, trolleys or large luggage, because the flap must fit inside the pedestal when retracted, so a wide accessible lane is normally required alongside in a different format."
            ],
            [
              {
                "b": "Anti-tailgating performance varies widely"
              },
              " with array density and height distribution. Too few beams, or all of them at one height, and a close follower is not detected at all."
            ],
            [
              {
                "b": "Quoted throughput is not achieved throughput."
              },
              " Credential presentation time, not flap speed, sets the real rate, and any figure quoted anywhere (including one derived by the method on this page) is approximate and equipment-dependent."
            ],
            [
              {
                "b": "Flap surfaces show wear in heavy public use."
              },
              " Scratching is cosmetic but visible, and replacement panels should be planned for rather than treated as a fault."
            ],
            [
              {
                "b": "Accessibility and fire-egress requirements differ by jurisdiction"
              },
              " and must be established before the layout is fixed, since both are effectively irreversible once the floor is finished."
            ],
            [
              {
                "b": "Exact behaviour depends on the equipment."
              },
              " Cycle time, sensor count, obstruction sensitivity, fail-state configuration and integration options vary by model, controller, firmware and site configuration, and should be confirmed against the documentation for the equipment being specified."
            ]
          ]
        }
      ],
      "tone": "gray"
    },
    {
      "id": "flap-barrier-vs-swing-barrier-vs-tripod-turnstile",
      "h2": "Flap Barrier vs Swing Barrier vs Tripod Turnstile",
      "blocks": [
        {
          "type": "table",
          "head": [
            "",
            "Flap barrier",
            "Swing barrier",
            "Tripod turnstile"
          ],
          "rows": [
            [
              [
                {
                  "b": "Mechanism"
                }
              ],
              [
                "Flaps retract horizontally into the pedestal housings, withdrawing out of the opening entirely"
              ],
              [
                "A rigid panel rotates about a vertical axis, sweeping clear of the lane"
              ],
              [
                "Three horizontal arms rotate about a hub; the user pushes through one segment"
              ]
            ],
            [
              [
                {
                  "b": "Why the cycle differs"
                }
              ],
              [
                "Short travel and low flap mass, so acceleration and stopping are quick"
              ],
              [
                "Mass distributed away from the pivot and an arc to sweep, so the cycle is longer"
              ],
              [
                "The user supplies the movement, so the pace is set by the person rather than a drive"
              ]
            ],
            [
              [
                {
                  "b": "Accessibility"
                }
              ],
              [
                "Standard lanes are narrow because the flap must fit inside the pedestal; a wide accessible lane is normally added alongside"
              ],
              [
                "Can be made wide, since the panel swings clear; commonly serves as the accessible lane in a bank"
              ],
              [
                "Not accessible; a fixed narrow aperture that no configuration widens"
              ]
            ],
            [
              [
                {
                  "b": "Physical robustness"
                }
              ],
              [
                "Light flaps designed to yield on contact; can be forced or vaulted"
              ],
              [
                "Heavier panels, somewhat more resistant, still not a restraint"
              ],
              [
                "Mechanically the most resistant of the three, though it remains waist height"
              ]
            ],
            [
              [
                {
                  "b": "Typically suited to"
                }
              ],
              [
                "Lobbies, campuses and concourses where concentrated arrival peaks and a slim footprint govern the design"
              ],
              [
                "Entrances needing a wide lane and mixed pedestrian, trolley and equipment traffic"
              ],
              [
                "Industrial gates, stadiums and rough-duty high-volume entries"
              ]
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "These are not better and worse versions of one another. A flap barrier is chosen for a short cycle and a slim footprint, a swing barrier for lane width and mixed traffic, a tripod turnstile for durability in rough conditions. Many sites use more than one type on the same entrance, which is precisely what Step 4 of the throughput method produces, since the accessible provision usually calls for a different format from the lanes carrying the volume."
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
            "This page is written to be useful anywhere, which means it deliberately avoids national specifics. Local accessibility rules, local fire-egress approval processes, local installer requirements, local availability and local environmental conditions all differ, and generic advice on those subjects is worth less than none."
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
                "href": "https://www.timewatchindia.com/how-does-a-flap-barrier-gate-work",
                "label": "timewatchindia.com, How does a flap barrier gate work?"
              }
            ],
            [
              {
                "b": "Saudi Arabia"
              },
              ": ",
              {
                "href": "https://www.timewatcharabia.com/how-does-a-flap-barrier-gate-work",
                "label": "timewatcharabia.com, How does a flap barrier gate work?"
              }
            ],
            [
              {
                "b": "United Arab Emirates"
              },
              ": ",
              {
                "href": "https://www.timewatchuae.com/how-does-a-flap-barrier-gate-work",
                "label": "timewatchuae.com, How does a flap barrier gate work?"
              }
            ]
          ]
        },
        {
          "type": "p",
          "parts": [
            "Readers elsewhere are in the right place. The mechanism, the array explanation and the six-step throughput method on this page are written to be applied to any location, what you supply is the arrival profile, the measured presentation time, the user mix and the local accessibility and egress requirements, and the method does the rest."
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
        "q": "How does a flap barrier gate open?",
        "a": "When a valid credential is read, the controller sends an open command to the drive motor, which retracts both flaps horizontally into the pedestal housings either side of the lane. The flaps slide away into the pedestals rather than swinging through an arc, which is what makes the cycle short. The infrared array then tracks the person through the lane, and once passage is confirmed the flaps extend back across the lane and the event is logged."
      },
      {
        "q": "What is the difference between a flap barrier and a swing barrier?",
        "a": "The difference is mechanical and everything else follows from it. A flap barrier retracts its flaps horizontally into the pedestals, so they withdraw out of the opening entirely. A swing barrier rotates a rigid panel about a vertical axis, so it sweeps clear of the lane instead. Retraction means shorter travel and lower mass, which gives the flap barrier a shorter cycle; rotation means the panel does not have to fit inside the pedestal, which is why wide accessible lanes are usually a swing format."
      },
      {
        "q": "How many people per minute can a flap barrier handle?",
        "a": "Figures commonly quoted sit in the region of tens of people per minute per lane, but any such figure is approximate and equipment-dependent, varying with the model, the drive, the controller timing and the configuration. It also assumes credentials are presented smoothly and continuously, which real entrances rarely deliver. In practice the limiting factor is how quickly people find their card or present their face, not how fast the flaps move, so lane count should be sized from observed peak behaviour rather than from a catalogue rate."
      },
      {
        "q": "How do I work out how many lanes an entrance needs?",
        "a": "Record the arrival profile in short intervals across the whole peak rather than taking a daily headcount, since the shape of the peak matters as much as its height. Then measure credential presentation time directly at an existing lane, because that is usually the binding constraint, and combine it with the mechanical cycle to get a realistic per-lane rate. Apply that rate to the busiest interval, add allowances for the return flow, violations and a lane out of service, and size the accessible provision separately."
      },
      {
        "q": "Why is there a queue at gates that were supposed to be fast?",
        "a": "Almost always because the lane count came from a catalogue rate rather than from observed behaviour. A quoted rate assumes people present credentials continuously, one after another, with no pause. In a real entrance someone is searching a bag, positioning a finger or stopping to look at a terminal, and those seconds are longer than the whole mechanical cycle. A bank that falls slightly behind on each arrival wave and never recovers produces a queue that grows through the entire peak."
      },
      {
        "q": "How does a flap barrier detect tailgating?",
        "a": "An infrared sensor array runs down the facing sides of both pedestals, with multiple beam pairs at varying heights. As a person walks through, the controller reads which beams break and in what order, and from that pattern works out direction of travel and counts the bodies in the lane. One body produces a single continuous block of interruption moving along the lane; a second produces another block before the first has cleared. If a second person is detected without a second authorisation, the flaps close and a classified alarm is raised."
      },
      {
        "q": "What are flap barrier flaps made of?",
        "a": "Usually acrylic or polycarbonate. Both are light, which keeps inertia low so the flaps can be accelerated and stopped quickly, and both yield rather than injure on contact, a deliberate part of the safety design in a device closing across a walking route. Polycarbonate resists impact better while acrylic holds optical clarity well under heavy use. Some models, particularly speed gates for corporate lobbies, use tempered glass flaps for appearance, which are heavier and paired with a drive rated for them."
      },
      {
        "q": "Can a flap barrier stop an intruder?",
        "a": "No. A flap barrier controls passage but does not physically restrain. The flaps are deliberately light so they yield on contact, and a determined person can force or vault them. It is an access management and detection device, and its security value comes from the barrier working together with the alarm, the video bookmark it creates and a defined response procedure. Where a physical boundary is genuinely required, a full height turnstile or a secured door is the appropriate equipment."
      },
      {
        "q": "Are flap barriers wheelchair accessible?",
        "a": "Standard flap barrier lanes are narrow and will not take a wheelchair, a trolley or large luggage, because the flap has to fit inside the pedestal when retracted. An entrance built entirely from standard lanes therefore has an accessibility problem from day one. Most installations pair several standard lanes with at least one wide accessible lane, commonly in a swing format since a rotating panel swings clear of the opening. Minimum clear widths and required provision are set jurisdictionally and should be confirmed before the layout is fixed."
      },
      {
        "q": "What is the difference between a flap barrier and a speed gate?",
        "a": "They work on the same principle and follow the same operating sequence; the difference is build and setting. A speed gate has taller glass pedestals, a slimmer profile and a quieter drive, and is designed for a reception that is part of the architecture. A standard flap barrier uses shorter stainless steel pedestals built for utility and easier maintenance access at a plant gate or a transport concourse. Both are sized by the same throughput method."
      },
      {
        "q": "What happens to a flap barrier in a fire or a power failure?",
        "a": "Where the lane forms part of an escape route it is normally configured to retract the flaps and stay open on fire alarm or power failure, so evacuation is not obstructed, driven by a dry contact from the fire panel. Whether a lane is set fail-safe or fail-secure is a life-safety decision to be agreed with whoever owns the fire strategy and recorded, not left at a default. Fire-egress requirements for entrance control lines differ between jurisdictions and are subject to a formal approval process in several."
      }
    ]
  },
  "related": {
    "h2": "Related pages",
    "tone": "white",
    "links": [
      {
        "href": "/how-does-a-swing-barrier-work",
        "label": "how swing barriers work"
      },
      {
        "href": "/how-does-a-turnstile-system-work",
        "label": "how turnstile systems work"
      },
      {
        "href": "/products/entrance-control/flap-barrier",
        "label": "flap barrier range"
      },
      {
        "href": "/how-does-a-tripod-turnstile-work",
        "label": "how tripod turnstiles work"
      },
      {
        "href": "/products/entrance-control/turnstile-tripod/twld-ts2700",
        "label": "TWLD-TS2700 tripod turnstile"
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
        "href": "/how-does-a-door-frame-metal-detector-work",
        "label": "how door frame metal detectors work"
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
      headline: "How Does a Flap Barrier Gate Work?",
      name: metadata.title,
      description:
        "An international technical reference on flap barrier gate operation, covering horizontal flap retraction into the pedestals, servo drive and obstruction reversal, infrared passage tracking and anti-tailgating, flap materials, and a six-step method for modelling entrance throughput and sizing a lane bank at any site.",
      url: PAGE_URL,
      mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
      inLanguage: "en",
      isAccessibleForFree: true,
      proficiencyLevel: "Beginner",
      about: [{"@type":"Thing","name":"Flap barrier gate"},{"@type":"Thing","name":"Speed gate"},{"@type":"Thing","name":"Pedestrian entrance control"},{"@type":"Thing","name":"Anti-tailgating detection"},{"@type":"Thing","name":"Throughput modelling"}],
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
        cssSelector: ["#quick-answer", "#how-does-a-flap-barrier-gate-work"],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Blogs", item: `${SITE}/blogs` },
        { "@type": "ListItem", position: 3, name: "How Does a Flap Barrier Gate Work?", item: PAGE_URL },
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

export default function HowDoesAFlapBarrierGateWorkPage() {
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
