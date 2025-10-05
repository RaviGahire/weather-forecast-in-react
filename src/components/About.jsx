import React from "react";
import { Footer } from "./Footer";

export  function About({
  companyName = "Your Company",
  tagline = "Building delightful experiences",
}) {
  const team = [
    {
      name: "Asha Patel",
      role: "Founder & CEO",
      bio: "Design-led product founder obsessed with simple experiences.",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=60",
    },
    {
      name: "Rohit Singh",
      role: "Head of Engineering",
      bio: "Builds scalable, maintainable systems and mentors engineers.",
      img: "https://images.unsplash.com/photo-1545996124-1b8b9d3b0c7d?auto=format&fit=crop&w=400&q=60",
    },
    {
      name: "Maya Rao",
      role: "Product Designer",
      bio: "Turns complex flows into elegant interfaces.",
      img: "https://images.unsplash.com/photo-1546456073-6712f79251bb?auto=format&fit=crop&w=400&q=60",
    },
  ];

  return (
    <>
    <main className="bg-gray-50 text-gray-900 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            About {companyName}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600">{tagline}</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-12">
          <div className="md:col-span-2 bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4">Our mission</h2>
            <p className="text-gray-700 leading-relaxed">
             We develop precise and user-friendly weather solutions that empower people to make informed decisions with ease. Our focus is on delivering accurate forecasts through elegant, accessible design and robust engineering. Every choice we make is guided by user insight, a dedication to quality, and a long-term vision for reliability and innovation.
            </p>

            <h3 className="mt-8 text-lg font-medium">What we value</h3>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex gap-3 items-start">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 font-semibold">1</span>
                <div>
                  <div className="font-semibold">People first</div>
                  <div className="text-sm text-gray-600">User needs guide our roadmap.</div>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 font-semibold">2</span>
                <div>
                  <div className="font-semibold">Craftsmanship</div>
                  <div className="text-sm text-gray-600">We sweat the small details to deliver quality.</div>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 font-semibold">3</span>
                <div>
                  <div className="font-semibold">Collaboration</div>
                  <div className="text-sm text-gray-600">Transparent communication and shared ownership.</div>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 font-semibold">4</span>
                <div>
                  <div className="font-semibold">Sustainability</div>
                  <div className="text-sm text-gray-600">We build for the long term—people and planet.</div>
                </div>
              </li>
            </ul>
          </div>

          <aside className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-6 shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Quick facts</h4>
            <dl className="text-sm text-gray-700 space-y-3">
              <div>
                <dt className="font-medium">Founded</dt>
                <dd>2018</dd>
              </div>
              <div>
                <dt className="font-medium">Employees</dt>
                <dd>25 — remote-first</dd>
              </div>
              <div>
                <dt className="font-medium">Headquarters</dt>
                <dd>Mumbai, India</dd>
              </div>
              <div>
                <dt className="font-medium">Contact</dt>
                <dd>
                  <a href="mailto:hello@yourcompany.com" className="underline">
                    hello@yourcompany.com
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-6">
              <a
                href="/careers"
                className="inline-block w-full text-center px-4 py-2 border border-indigo-600 rounded-lg font-medium hover:bg-indigo-600 hover:text-white transition"
                aria-label="See open roles"
              >
                We're hiring →
              </a>
            </div>
          </aside>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Meet the team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <article
                key={member.name}
                className="bg-white rounded-2xl p-5 shadow-sm flex gap-4 items-start"
                aria-labelledby={`team-${member.name.replace(/\s+/g, "-")}`}
              >
                <img
                  src={member.img}
                  alt={`${member.name} — ${member.role}`}
                  className="h-20 w-20 rounded-xl object-cover flex-shrink-0"
                />
                <div>
                  <h3 id={`team-${member.name.replace(/\s+/g, "-")}`} className="text-lg font-medium">
                    {member.name}
                  </h3>
                  <p className="text-sm text-indigo-600 font-medium">{member.role}</p>
                  <p className="mt-2 text-sm text-gray-600">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Join our journey</h2>
          <p className="text-gray-700 mb-6">If you like what we're building, we'd love to hear from you.</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              // This is a static component — wire this up to your form handler
              alert('Thanks — this demo form does not submit in the example');
            }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center"
          >
            <input
              aria-label="Your email"
              type="email"
              required
              placeholder="you@company.com"
              className="sm:col-span-2 rounded-lg border-gray-200 focus:ring-2 focus:ring-indigo-300 p-3"
            />
            <button
              type="submit"
              className="rounded-lg bg-indigo-600 text-white font-medium px-4 py-3 hover:opacity-95 transition"
            >
              Stay in touch
            </button>
          </form>
        </section>


      </div>
    
    </main>
    <Footer/>
    </>
  );
}

