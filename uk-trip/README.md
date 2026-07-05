# The Fifty Tour — UK & Europe 2027

A single-file progressive web app (PWA) for planning a 50th-birthday group trip to the UK in the summer of 2027 — built around watching cricket (the Ashes and the World Test Championship Final, with Australia in both), with optional Wimbledon, the British Grand Prix at Silverstone and The Open golf, plus personal legs to Oxford and Bath and a tag-along European trip.

**Live:** https://travis-coder712.github.io/studio/uk-trip/

Open it in any browser (works great on iPhone), or install it to the home screen for an offline, app-like experience.

---

## What it does

Seven tabs:

1. **TL;DR** — the whole trip on one screen: the plan in a nutshell, the urgent "do this now" actions, key dates, ticket on-sale windows, the booking logic, and how to use the app. This is the default landing screen and the thing to share with the group.
2. **Schedule** — a master planner with four sub-views:
   - **Plan** — a "booking brain" that sequences ticket on-sale dates against the cheapest Melbourne→London flight window, so the group knows *when to buy what*. It reacts to which events are ticked.
   - **Tracker** — a live checklist of ballot/on-sale deadlines with countdowns, add-to-calendar (`.ics`) reminders, and per-person job assignment.
   - **Itinerary** — auto-built from your picks, viewable **by date** (with clash flags) or **by person** (each traveller's own itinerary). Shows who's attending each event.
   - **Travellers** — each person's arrival/departure window.
3. **Events** — tick the events you want and the exact days, **choose who's going to each one** (multi-select), and open a per-event ticket playbook: on-sale timing, prices, the Aussie / UK-resident / "trip-of-a-lifetime" routes, MCC / SACA / host-county angles, resale caution, and tour operators.
4. **Stays** — novel accommodation sites (Landmark Trust, National Trust, Oxford college rooms, Canopy & Stars…) plus a per-hub location guide.
5. **Flights** — a Melbourne→London cost estimator, booking-window timeline, money-saving tricks, sales calendar, and routings.
6. **Travel** (Logistics) — getting between UK areas: rail times & fares, the Scotland/The Open problem, GroupSave, driving notes.
7. **Explore** — UK must-dos, a personalised **Oxford tour** (residence history, river cycle loop, a guided pub crawl, and nostalgic extras), and a France/Italy/Spain leg for the brother's longer trip.

## How to use & share

- Everything is saved on your device (localStorage). Nothing is sent anywhere.
- Tap **⋯** (top-right) → **Copy shareable link** to send your exact picks to the group (a compact, URL-safe link), or **Export / Import** a JSON plan file.

## Tech notes

- Single `index.html` (HTML + CSS + vanilla JS, no build step, no dependencies) + `manifest.webmanifest`, `sw.js` (offline app-shell cache), `icon.svg`.
- State in `localStorage`; shareable via a compact URL-safe encoded hash.
- Dates are best-estimates where the 2027 schedule isn't officially fixed yet (marked **Provisional** and editable in-app); confirmed ones are marked **Confirmed**.
- Design: dark theme, Inter typeface, gold accent, SVG line-icons, a subtle topographic-outline background.

---

## Roadmap / ideas (not yet built)

### 🚴 A cycling / Tour de France leg

Travis is an avid (if not especially race-fit) cyclist, and would like to explore weaving some cycling into the trip — **especially on a shorter 1–1.5 week version.**

The idea to work through:

- **Could we fit in some of Le Tour de France?** Either **watching** a stage in person, or **riding** part of a previous or upcoming year's route.
- Given the fitness caveat (avid but not especially fit), favour **signature climbs at a tourist pace, sportives, and scenic valley sections** over brutal back-to-back mountain stages.
- Work out and recommend:
  - The **optimum stages or part-stages** to ride.
  - The **most awesome / extreme** (the iconic HC climbs — e.g. Mont Ventoux, Alpe d'Huez, the Col du Tourmalet, the Galibier, the Izoard).
  - The **most fun / scenic / special** rides (coast, gorges, vineyards, cols with the best views).
  - Which options **combine well logistically** — with the UK trip, with the flights home (e.g. fly out of France), and with the brother's longer Europe leg (France/Italy/Spain).
- Consider timing vs the actual 2027 Tour route/dates once announced, plus bike hire, guided vs self-supported, and a realistic daily distance/elevation budget.

*Recorded 2026-07-05 — to be designed and built later.*

### Other candidate ideas
- A **Bath** guided pub crawl (to match the Oxford one).
- A **ticket-price / budget tracker** rolling up tickets + flights + stays per person.
- Weather / packing notes for a UK summer.
