import Logo from '../components/Logo';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Avatar from '@/components/avatar';

export default function Home() {
  const clipPath =
    'polygon(50% 0, 31% 9%, 0% 52%, 11% 84%, 18% 100%, 72% 94%, 87% 74%, 81% 56%, 66% 1%)';
  return (
    <>
      <main className="my-8 mx-2 p-3 bg-[rgba(0,0,0,.25)] h-auto text-sm lg:text-base rounded-xl lg:min-w-[80%] font-light lg:tracking-wide flex justify-center flex-col items-center lg:p-24 lg:mt-24">
        <div className="z-50 relative">
          <Logo />
        </div>
        <div className="mb-32 text-center lg:mb-0 relative z-50">
          <Link href="https://monkeykode.com" target="_blank">
            <h1 className="text-4xl uppercase leading-loose">
              Monkey <span className="text-orange-600">Kode</span>
            </h1>
          </Link>
          <h2 className="text-2xl font-light">Jull Weber</h2>
          <section className="pt-4 lg:pt-12 max-w-[445px] mx-auto">
            <div className="text-left relative -translate-x-4 transform lg:translate-x-0">
              <h4 className="text-center pl-4 font-extralight uppercase tracking-widest text-sm absolute top-1/2 transform -rotate-90">
                Talks
              </h4>{' '}
              <ul className="list-[circle] pl-16">
                <li>
                  <a href="https://mkykode.github.io/http2" target="_blank">
                    Moving towards performance with HTTP/2
                  </a>
                </li>{' '}
                <li>
                  <a href="https://mkykode.github.io/devtools" target="_blank">
                    Deep Dive into Chrome Dev Tools
                  </a>
                </li>{' '}
                <li>
                  <a href="https://mkykode.github.io/cssgrids" target="_blank">
                    Deep Dive into CSS Grid Layouts{' '}
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section className="text-left pt-2 mt-18 mx-4 max-w-full">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h2>Bio +</h2>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                      <p>
                        I have over 20 years of experience in web and web app
                        development, specializing in transforming abstract ideas
                        into innovative solutions. I aim to create engaging,
                        user-friendly applications and online experiences that
                        solve real-world problems.
                      </p>
                      <p>
                        My technical and software design skills were honed
                        through a combination of computer science and
                        engineering programs at Purdue University and a Bachelor
                        of Science degree from MIT, which I began pursuing at
                        the young age of 11.
                      </p>
                      <p>
                        I further developed my expertise by working as a Tech
                        Lead at various advertising agencies in Los Angeles,
                        where I created numerous online user experiences for
                        high-profile clients such as Disney, ESPN, Honda,
                        Turbotax, Dole, Nestlé, Lenovo laptops, Qantas, Suzuki,
                        Wachovia, and Wells Fargo.
                      </p>
                      <p>
                        I am the owner of Monkey Kode, a web development agency
                        specializing in E-commerce, Headless sites, Custom CMSs,
                        and complex API integrations. My team and I strive to
                        deliver innovative solutions that exceed clients&apos;
                        expectations.I have over 20 years of experience in web
                        and web app development, specializing in transforming
                        abstract ideas into innovative solutions. I aim to
                        create engaging, user-friendly applications and online
                        experiences that solve real-world problems. My technical
                        and software design skills were honed through a
                        combination of computer science and engineering programs
                        at Purdue University and a Bachelor of Science degree
                        from MIT, which I began pursuing at the young age of 11.
                        I further developed my expertise by working as a Tech
                        Lead at various advertising agencies in Los Angeles,
                        where I created numerous online user experiences for
                        high-profile clients such as Disney, ESPN, Honda,
                        Turbotax, Dole, Nestlé, Lenovo laptops, Qantas, Suzuki,
                        Wachovia, and Wells Fargo. I am the owner of Monkey
                        Kode, a web development agency specializing in
                        E-commerce, Headless sites, Custom CMSs, and complex API
                        integrations. My team and I strive to deliver innovative
                        solutions that exceed clients&apos; expectations.
                      </p>
                    </div>
                    <div className="w-full lg:w-1/2 order-1 lg:order-2 my-4">
                      <div
                        className=""
                        style={{
                          clipPath,
                        }}
                      >
                        <Avatar />
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </main>
    </>
  );
}
