# ajokemi.dev — Portfolio Review: Making It More Pro & Deal-Closing

Reviewed the full codebase (all components, `Work.json`, Tailwind config, meta files). Note: I couldn't get the dev server running in my sandbox to screenshot it live (npm install kept timing out on a large CRA dependency tree), so this is based on a close read of the actual code and content — file-by-file. Grouped by priority: fix these first, they're actively costing you deals.

## Critical — fix before sending this link to anyone

**1. The contact form isn't wired up, and it isn't even on the page.**
`src/Component/Contact.jsx` is a fully built form (name, email, services, message) — but it's never imported into `Home.jsx`. It doesn't render anywhere on the site. On top of that, `handleSubmit` only does `console.log('Form submitted:', formData)` — even if you added it back, no message would ever reach you. Right now the only way to contact you is the Google Calendar link at the very bottom of the page.
→ Wire the form to something that actually delivers (Formspree, EmailJS, or a simple serverless function), add it back into `Home.jsx`, and test that a real submission reaches your inbox.

**2. Dead social links.** `Contact.jsx` has `href="#github"`, `#linkedin`, `#instagram`, `#twitter` — all placeholders. If this form goes live as-is, every social icon is a broken anchor link. Replace with real profile URLs (or remove the ones you don't want listed).

**3. The primary CTA is buried at the bottom, after a personal hobbies section.** In `Home.jsx`, page order is: Navbar → Landing → About → Work → **Personals** (todo list, hobbies, side-business ventures) → "Let's work together" CTA. A hiring manager or client has to scroll past your gym goals and jewelry brand before reaching any way to reach you. For a deal-closing portfolio, the path to "contact/hire me" should be reachable much sooner — ideally a CTA in the nav/hero too, not just one link at the very end.

**4. Title tag and meta still say "React App."** `public/index.html` has `<title>React App</title>` and the default CRA description. `public/manifest.json` still says `"short_name": "React App"`, `"name": "Create React App Sample"`. When someone shares your portfolio link on LinkedIn, Slack, or in a browser tab, it currently reads "React App" — this alone reads as unfinished/template to anyone evaluating your attention to detail as a front-end engineer.
→ Set a real title ("Babalola Wuraola Ajoke — Front-End Engineer"), a real meta description, update the manifest name, and add Open Graph tags (`og:title`, `og:description`, `og:image`) so shared links show a proper preview card.

**5. The intro splash delays every visit by ~3 seconds with no skip.** `Hello.jsx` cycles through "Hello. Hola. Bonjour. Hallo. Ciao." (500ms each) before auto-navigating to `/home`, on every single visit — including repeat visitors and anyone re-clicking a shared link. There's no click-to-skip. It's a nice touch once; as a permanent gate in front of your work, it's friction with no payoff.
→ Either add a "skip" tap-anywhere, or only show it once per visitor (localStorage flag), or drop it in favor of getting straight to the content.

## High-impact — these shape whether people take you seriously

**6. Project case studies are too thin to close a deal.** `Work.json`'s three projects (RemindMe, Airbeenbee, AyoatiDayo) each have a title, a marketing-style description, and a link — but no tech stack tags, no your-specific role, no outcome/impact ("reduced load time by X%," "built for a real client," "handled auth + real-time sync"). Clients and hiring managers scan case studies for *what you actually did* and *what changed because of it*. Right now these read like App Store blurbs rather than engineering case studies.
→ For each project add: your role, the stack (you already tag skills elsewhere — reuse that pattern here), one concrete technical challenge you solved, and a measurable or observable outcome.

**7. No social proof anywhere.** No testimonials, no client logos, no LinkedIn recommendation quotes, no "worked with X company." Even one or two short quotes from past managers/clients would do more for "deal-closing" than most visual polish.

**8. No resume/CV.** There's no download-a-resume link anywhere on the site — surprising for a job/client-facing portfolio. Add one, even just a PDF link in the nav or About section.

**9. Navbar has nothing in it.** `Common/Navbar.jsx` renders just the lowercase word "ajokemi" — no links to jump to About / Work / Contact, no resume link, no CTA. On a long single-scroll page, in-page nav anchors matter a lot for usability, especially for someone skimming on a first visit.

**10. Unfinished/dead features create clutter.** `Spotify.jsx` has hardcoded `'YOUR_CLIENT_ID'`/`'YOUR_REDIRECT_URI'` placeholders and isn't imported anywhere. `Personal.jsx` has ~15 lines of commented-out Spotify fetch code and an unused `likedSongs.mjs` at the project root. None of this is visible to visitors, but it signals half-finished work if anyone browses the repo (and recruiters/technical clients sometimes do). Either finish the Spotify integration as a fun personality feature, or delete the dead code.

**11. Headline could lead harder with value.** The hero (`Landing.jsx`) reads "Front-end Engineer, Tech babe extraordinaire." Personality is good and worth keeping somewhere — but as the very first thing a potential client reads, consider leading with what you build / who you build it for, with the personality as a secondary line, e.g. a clear one-liner on the outcomes you deliver, then the fun tagline underneath.

## Worth fixing — smaller but visible

**12. Tailwind color bug.** In `tailwind.config.js`, `backgroundColor.angray` is defined as `"#ebedef;"` — the trailing semicolon is inside the string, which is invalid CSS and likely means `bg-angray` (used as the card background in `Common/Cards.jsx`, i.e. every "personal" card) isn't applying the color you intended. Quick fix: `angray: "#ebedef"`.

**13. Alt text is unhelpful/missing.** Hero image alt is `"Transparent"` (`Landing.jsx`), profile photo in `Contact.jsx` has `alt=""`. Both accessibility and SEO take a hit — use descriptive alt text ("Babalola Wuraola Ajoke, front-end engineer").

**14. Personal life / side-hustle content is competing with your professional pitch.** The "Personals" section (bucket-list todos, hobbies icon grid, and a "Rich Business Woman" card promoting your jewelry/hair-care/catering/interior-decor ventures) is charming as personal branding but currently sits mid-page on your *engineering* portfolio, ahead of the contact CTA. Consider moving this to a separate "About/Personal" page or section further down, so the main scroll stays focused on work → proof → contact.

**15. No 404 handling.** `App.js` only defines `/` and `/home` routes. Any other path (typo'd link, old bookmark) will break instead of redirecting somewhere useful.

## Suggested order of attack

1. Wire up and re-attach the contact form (or at minimum add a visible `mailto:` + working socials) — this is the actual deal-closing mechanism and it's currently missing.
2. Fix the title/meta/manifest so shared links look intentional.
3. Reorder the page: hero → proof (work + a testimonial if you can get one) → contact, with hobbies/side businesses moved later or to their own section.
4. Beef up the 3 project case studies with role, stack, and outcome.
5. Add a resume link and working nav.
6. Clean up dead code (Spotify placeholders, commented blocks) and the `angray` color bug.
7. Reconsider or shorten the language-cycling intro.

Happy to help implement any of these directly — the contact form and meta tag fixes are quick wins I could do first if you want.
