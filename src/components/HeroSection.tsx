import React from 'react'

import Socials from "@/components/Socials";

export default function HeroSeciton() {
    return (
        <div>
            {/* Intro Section (Combined Hero + About) */}
            <section className="max-w-4xl mx-auto mb-24">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

                    {/* Intro Text */}
                    <div className="text-left">
                        <h1 className="text-2xl md:text-4xl font-bold mb-4  ">
                            Hi, I&apos;m Ronald Wilson
                        </h1>
                        <p className="text-lg text-secondary mb-6">
                            I love <span className="text-primary font-semibold">AI</span> and
                            <span className="text-primary font-semibold"> scalable web development</span> -
                            building intelligent, modern applications that perform beautifully at scale.
                        </p>
                        <p className="text-lg text-secondary leading-relaxed mb-8 max-w-2xl">
                            I specialize in Next.js, and cloud-native systems, with a focus on
                            turning complex ideas into simple, elegant experiences. My goal is to create
                            products that are as enjoyable to use as they are powerful behind the scenes.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col items-center sm:items-start gap-6 mt-6">
                            {/* Buttons */}
                            <div className="flex flex-row flex-wrap sm:flex-nowrap items-center gap-4">
                                <a
                                    href={`mailto:ronxldwilson@gmail.com?subject=${encodeURIComponent(
                                        'Inquiry from Portfolio Website'
                                    )}&body=${encodeURIComponent(
                                        'Hi Ronald,\n\nI came across your portfolio and would like to get in touch regarding '
                                    )}`}
                                    className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-full shadow-md hover:from-blue-700 hover:to-blue-600 transition-all duration-200 font-medium text-sm sm:text-base whitespace-nowrap"
                                >
                                    Get in Touch
                                </a>

                                <a
                                    href="/resume"
                                    className="border border-slate-400 text-slate-700 dark:text-slate-200 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-200 font-medium text-sm sm:text-base whitespace-nowrap"
                                >
                                    View Resume
                                </a>
                            </div>

                            {/* Socials */}
                            <div className="mt-4">
                                <Socials />
                            </div>
                        </div>

                    </div>

                    {/* Profile Image */}
                    <div>

                        <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden flex-shrink-0">
                            <img
                                src="/Ron.jpg" // replace with your image path
                                alt="Ronald Wilson"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
