"use client";

import {
  Bot,
  Coffee,
  Mic,
  Volume2,
  Sparkles,
  ShieldCheck,
  Zap,
  Workflow,
  ArrowRight,
  Cpu,
  Cloud,
  Database,
  Globe2,
  Languages,
  HandCoins,
  LineChart,
  CheckCircle2,
  Linkedin,
  Github,
  Mail,
  Quote,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WorkflowAvatarPipeline } from "@/components/workflow";
import { SequenceDiagram } from "@/components/sequence-diagram";
import { useDemoDialog } from "@/contexts/demo-context";

export default function Home() {
  const { openDemo } = useDemoDialog();

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary to-background" />
        <div className="absolute -top-24 right-1/2 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 left-1/2 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="container py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs text-muted-foreground">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/20">
                  <Coffee className="h-3.5 w-3.5" />
                </span>
                AvatarConnect: Redefining Customer Experience
              </div>
              <h1 className="mt-4 text-4xl leading-tight font-extrabold tracking-tight md:text-6xl">
                A friendly face, a warm voice, available anytime.
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                Transform engagement with a lifelike Barista Avatar. Built with
                Azure TTS Avatar, Azure OpenAI, and agentic workflows for
                personalized, memorable interactions.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="#features">
                    <Coffee className="h-4 w-4 mr-2" /> Explore features
                  </a>
                </Button>
                <Button variant="outline" size="lg" onClick={openDemo}>
                  View demo <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="inline-flex items-center gap-2">
                  <Mic className="h-4 w-4" /> STT
                </div>
                <div className="inline-flex items-center gap-2">
                  <Bot className="h-4 w-4" /> Azure OpenAI
                </div>
                <div className="inline-flex items-center gap-2">
                  <Volume2 className="h-4 w-4" /> TTS + Avatar
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square md:aspect-[4/3] rounded-2xl border bg-gradient-to-br from-primary/10 via-background to-accent/10 p-2">
                <div className="h-full w-full rounded-xl border bg-background grid place-items-center">
                  <div className="text-center px-6">
                    <div className="mx-auto mb-3 h-14 w-14 rounded-full bg-primary/10 text-primary grid place-items-center ring-1 ring-primary/20">
                      <Bot className="h-7 w-7" />
                    </div>
                    <p className="font-semibold">Barista Avatar</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Greets customers, takes orders, answers FAQs, and upsells
                      with warmth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Opportunity */}
      <section id="problem" className="container py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border p-8 bg-card">
            <h2 className="text-2xl font-bold tracking-tight">The Problem</h2>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-destructive" />{" "}
                Chatbots feel flat and text-heavy.
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-destructive" />{" "}
                Limited staff leads to queues and inconsistent service.
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-destructive" />{" "}
                Customers expect human-like, personalized interactions.
              </li>
            </ul>
          </div>
          <div id="opportunity" className="rounded-xl border p-8 bg-card">
            <h2 className="text-2xl font-bold tracking-tight">
              The Opportunity
            </h2>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />{" "}
                Human-like agents boost engagement and loyalty.
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />{" "}
                24/7 scalable service without extra labor costs.
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />{" "}
                Stand out from competitors with memorable experiences.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="container py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Our Barista Avatar
          </h2>
          <p className="mt-3 text-muted-foreground">
            Greet customers warmly, take and manage orders, answer FAQs, upsell
            thoughtfully, and reflect brand identity with friendliness and
            speed.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            {
              icon: Coffee,
              title: "Greets warmly",
              desc: "Welcomes customers with natural speech and friendly tone.",
            },
            {
              icon: HandCoins,
              title: "Upsells smartly",
              desc: "Suggests pastries and add‑ons based on order context.",
            },
            {
              icon: Globe2,
              title: "Answers FAQs",
              desc: "Allergens, promos, hours, and loyalty in clear language.",
            },
            {
              icon: Sparkles,
              title: "On-brand persona",
              desc: "Custom look/voice that reflects your cafe’s identity.",
            },
          ].map((f, i) => (
            <div key={i} className="rounded-xl border p-6 bg-card">
              <div className="h-10 w-10 rounded-md bg-primary/10 text-primary grid place-items-center ring-1 ring-primary/20">
                <f.icon className="h-5 w-5" />
              </div>
              <p className="mt-3 font-semibold">{f.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Avatars */}
      <section id="avatars" className="container py-16 md:py-15">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Custom Avatars
          </h2>
          <p className="mt-3 text-muted-foreground">
            Showcase diverse, branded looks. Swap voices and styles to match
            your cafe’s identity.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              src: "/avatar/realistic-barista-barista-with-welcoming-smile-transparent-background_1280499-615-Photoroom.png",
              alt: "Realistic barista with welcoming smile",
            },
            {
              src: "/avatar/realistic-barista-barista-with-welcoming-smile-transparent-background_1280499-892-Photoroom.png",
              alt: "Professional barista with friendly demeanor",
            },
            {
              src: "/avatar/friendly-barista-offering-cup-coffee-with-warm-smile_126712-13214-Photoroom.png",
              alt: "Friendly barista offering cup of coffee with warm smile",
            },
            {
              src: "/avatar/realistic-barista-barista-with-welcoming-smile-transparent-background_1280499-954-Photoroom.png",
              alt: "Experienced barista with welcoming smile",
            },
          ].map((img, i) => (
            <div
              key={i}
              className="rounded-xl border bg-card p-4 grid place-items-center"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-64 w-auto object-contain drop-shadow-md"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Key Features
          </h2>
          <p className="mt-3 text-muted-foreground">
            Lifelike avatars, expressive real-time speech, automated video,
            seamless Azure integration, and built-in accessibility.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Bot,
              title: "Customizable Avatars",
              desc: "Diverse looks and voices with adjustable styles and emotions.",
            },
            {
              icon: Volume2,
              title: "Expressive Speech",
              desc: "Natural prosody, emotions, and speaking styles in real time.",
            },
            {
              icon: Zap,
              title: "Video Generation",
              desc: "Automate avatar videos via API with batch workflows.",
            },
            {
              icon: Workflow,
              title: "Agentic Workflows",
              desc: "Intelligent tool use and function calling for tasks.",
            },
            {
              icon: ShieldCheck,
              title: "Accessible & Secure",
              desc: "Inclusive UX with enterprise-grade security.",
            },
            {
              icon: Languages,
              title: "Multilingual",
              desc: "Global-ready voice and text experiences.",
            },
          ].map((f, i) => (
            <div key={i} className="rounded-xl border p-6 bg-card">
              <div className="h-10 w-10 rounded-md bg-secondary text-accent-foreground grid place-items-center ring-1 ring-secondary text-black">
                <f.icon className="h-5 w-5" />
              </div>
              <p className="mt-3 font-semibold">{f.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">
            How it works
          </h2>
          <p className="mt-3 text-muted-foreground">
            Customer → STT → LLM → TTS → Avatar → Response
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-5">
          {[
            { icon: Mic, label: "Speech-to-Text" },
            { icon: Bot, label: "Azure OpenAI" },
            { icon: Volume2, label: "Text-to-Speech" },
            { icon: Sparkles, label: "Avatar Render" },
            { icon: CheckCircle2, label: "Customer Response" },
          ].map((s, i) => (
            <div key={i} className="rounded-xl border p-5 bg-card text-center">
              <div className="mx-auto h-10 w-10 rounded-md bg-secondary grid place-items-center text-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <p className="mt-2 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Architecture
          </h2>
          <p className="mt-3 text-muted-foreground">
            Secure, scalable pipeline on Azure with persistent storage.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-3 overflow-x-auto">
          <div className="rounded-xl border bg-card p-4 text-center">
            <div className="mx-auto mb-2 h-10 w-10 rounded-md bg-secondary grid place-items-center">
              <Globe2 className="h-5 w-5" />
            </div>
            <p className="font-medium">Client</p>
            <p className="text-xs text-muted-foreground">Web/App</p>
          </div>
          <ArrowRight className="mx-1 text-muted-foreground" />
          <div className="rounded-xl border bg-card p-4 text-center">
            <div className="mx-auto mb-2 h-10 w-10 rounded-md bg-primary/10 text-primary grid place-items-center ring-1 ring-primary/20">
              <Mic className="h-5 w-5" />
            </div>
            <p className="font-medium">Azure STT</p>
          </div>
          <ArrowRight className="mx-1 text-muted-foreground" />
          <div className="rounded-xl border bg-card p-4 text-center">
            <div className="mx-auto mb-2 h-10 w-10 rounded-md bg-primary/10 text-primary grid place-items-center ring-1 ring-primary/20">
              <Bot className="h-5 w-5" />
            </div>
            <p className="font-medium">Azure OpenAI</p>
          </div>
          <ArrowRight className="mx-1 text-muted-foreground" />
          <div className="rounded-xl border bg-card p-4 text-center">
            <div className="mx-auto mb-2 h-10 w-10 rounded-md bg-primary/10 text-primary grid place-items-center ring-1 ring-primary/20">
              <Volume2 className="h-5 w-5" />
            </div>
            <p className="font-medium">Azure TTS + Avatar</p>
          </div>
          <ArrowRight className="mx-1 text-muted-foreground" />

          <div className="rounded-xl border bg-card p-4 text-center">
            <div className="mx-auto mb-2 h-10 w-10 rounded-md bg-secondary grid place-items-center">
              <Database className="h-5 w-5" />
            </div>
            <p className="font-medium">SQLite</p>
            <p className="text-xs text-muted-foreground">Orders & sessions</p>
          </div>
        </div>
      </section>

      {/* Workflow Diagram */}
      <section id="workflow" className="container py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Avatar Creation Workflow
          </h2>
          <p className="mt-3 text-muted-foreground">
            See how our AI transforms text into lifelike avatar videos through
            our advanced pipeline
          </p>
        </div>
        <WorkflowAvatarPipeline isVisible={true} />
      </section>

      {/* Sequence Diagram */}
      <section id="sequence" className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Sequence Diagram
          </h2>
          <p className="mt-3 text-muted-foreground">
            End‑to‑end interaction from customer request to avatar response.
          </p>
        </div>

        {/* Interactive Sequence Diagram */}
        <div className="mt-16">
          <SequenceDiagram />
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Technology Stack
          </h2>
          <p className="mt-3 text-muted-foreground">
            Azure AI Speech (STT/TTS), Azure OpenAI (GPT‑4o real‑time), Avatar
            rendering, SQLite, and Tailwind UI.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-5">
          {[
            { icon: Cloud, label: "Azure" },
            { icon: Cpu, label: "OpenAI" },
            { icon: Database, label: "SQLite" },
            { icon: Globe2, label: "NextJs" },
            { icon: LineChart, label: "Tailwind CSS" },
          ].map((s, i) => (
            <div key={i} className="rounded-xl border p-5 bg-card text-center">
              <div className="mx-auto h-10 w-10 rounded-md bg-primary/10 text-primary grid place-items-center ring-1 ring-primary/20">
                <s.icon className="h-5 w-5" />
              </div>
              <p className="mt-2 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">Roadmap</h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {[
            {
              step: "Phase 1",
              desc: "Proof-of-concept demo for orders",
              details: ["Basic avatar UI", "Speech ↔ text round‑trip"],
            },
            {
              step: "Phase 2",
              desc: "Custom neural voice & branded avatar",
              details: ["Persona tuning", "Theme + assets"],
            },
            {
              step: "Phase 3",
              desc: "POS & loyalty integrations",
              details: ["Orders & receipts", "Loyalty lookup"],
            },
            {
              step: "Phase 4",
              desc: "Multilingual global rollout",
              details: ["Language packs", "Analytics & A/B"],
            },
          ].map((r, i) => (
            <div key={i} className="rounded-xl border p-6 bg-card">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {r.step}
              </p>
              <p className="mt-1 font-semibold">{r.desc}</p>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                {r.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section id="team" className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Meet Our Team
          </h2>
          <p className="mt-3 text-muted-foreground">
            The passionate innovators behind AvatarConnect, bringing together
            expertise in AI, design, and customer experience.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {[
            {
              name: "Deepak Kamboj",
              role: "CEO & Co-founder",
              image: "/team/deepakkamboj.png",
              bio: "Former Microsoft AI researcher with 10+ years in conversational AI and customer experience platforms.",
              linkedin: "#",
              github: "#",
              email: "sarah@avatarconnect.com",
            },
            {
              name: "Hongjing Wang",
              role: "CTO & Co-founder",
              image: "/team/image (3).png",
              bio: "Ex-Azure architect specializing in real-time communication systems and scalable AI infrastructure.",
              linkedin: "#",
              github: "#",
              email: "marcus@avatarconnect.com",
            },
            {
              name: "Vijay Kumar Otti",
              role: "Head of AI",
              image: "/team/image (4).png",
              bio: "PhD in Machine Learning, former OpenAI researcher focused on multimodal AI and natural language processing.",
              linkedin: "#",
              github: "#",
              email: "elena@avatarconnect.com",
            },
            {
              name: "Pravin Manik Wagh",
              role: "Lead Designer",
              image: "/team/image (5).png",
              bio: "Award-winning UX designer with experience at Apple and Google, specializing in human-AI interaction design.",
              linkedin: "#",
              github: "#",
              email: "david@avatarconnect.com",
            },
            {
              name: "Gabriel Kigundu",
              role: "VP of Business",
              image: "/team/20211003_210717.png",
              bio: "Former Starbucks digital innovation lead with expertise in retail technology and customer engagement.",
              linkedin: "#",
              github: "#",
              email: "amara@avatarconnect.com",
            },
          ].map((member, i) => (
            <div key={i} className="group text-center">
              <div className="relative mb-4 mx-auto">
                <div className="aspect-square w-32 mx-auto overflow-hidden rounded-full border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 h-6 w-6 rounded-full bg-primary/10 border-2 border-background grid place-items-center">
                  <Coffee className="h-3 w-3 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-primary font-medium">{member.role}</p>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
              <div className="mt-3 flex items-center justify-center gap-2">
                <a
                  href={member.linkedin}
                  className="flex h-7 w-7 items-center justify-center rounded-md bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
                <a
                  href={member.github}
                  className="flex h-7 w-7 items-center justify-center rounded-md bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={`${member.name} GitHub`}
                >
                  <Github className="h-3.5 w-3.5" />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="flex h-7 w-7 items-center justify-center rounded-md bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-secondary/20" />
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Customer Success Stories
            </h2>
            <p className="mt-3 text-muted-foreground">
              See how organizations are transforming their customer engagement
              with our AI avatars
            </p>
          </div>

          <div className="mt-12 mx-auto max-w-6xl">
            <div className="rounded-2xl border bg-card/50 backdrop-blur-sm p-8 md:p-12">
              {/* Microsoft FastTrack Use Case */}
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-1">
                      <img
                        src="/aur.png"
                        alt="Aurelie Saada"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary/10 rounded-full border-2 border-background flex items-center justify-center">
                      <Quote className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-4">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold">
                      Microsoft FastTrack Customer Success
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Enterprise Account Migration Program
                    </p>
                  </div>

                  <div className="space-y-4 text-sm leading-relaxed">
                    <p className="text-foreground">
                      <strong>Use Case:</strong> Our C+E FastTrack team helps
                      Legacy Commerce Customers under EA migrate to MCA. As part
                      of the migration, our team helps them understand the
                      differences and guides them through the migration steps.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 p-4 bg-primary/5 rounded-lg border">
                      <div>
                        <p className="font-medium text-primary">
                          Current Challenge
                        </p>
                        <p className="text-muted-foreground">
                          Program Managers spend{" "}
                          <strong>2 hours per customer</strong> to prepare and
                          present migration steps
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-primary">
                          Avatar Solution
                        </p>
                        <p className="text-muted-foreground">
                          Creates ROI of <strong>713 hours per year</strong> by
                          automating presentations
                        </p>
                      </div>
                    </div>

                    <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                      "As a FastTrack Program Manager, I will leverage the
                      Avatar Agent to quickly support customers efficiently
                      during the execution and migration to the new agreement
                      structures. This AI tool is critical for different
                      customer engagement and support scenarios."
                    </blockquote>
                  </div>

                  <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <p className="font-medium">Aurelie Saada</p>
                      <p className="text-sm text-muted-foreground">
                        Business Operation Director, Microsoft
                      </p>
                      <a
                        href="mailto:Aurelie.Saada@microsoft.com"
                        className="text-xs text-primary hover:underline"
                      >
                        Aurelie.Saada@microsoft.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-6 h-6 bg-[#0078d4] rounded flex items-center justify-center">
                        <span className="text-white font-bold text-xs">M</span>
                      </div>
                      <span>Microsoft FastTrack</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="container py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Let’s bring the future of customer interaction to coffee.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Looking for investment, partnerships, and pilot programs.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" onClick={openDemo}>
                <Bot className="h-4 w-4 mr-2" /> Try the demo
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="mailto:avatarconnect@microsoft.com">Contact us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
