export default function LeadershipSection() {
  return (
    <section id="leadership" className="relative overflow-hidden border-y border-border/70 bg-charcoal">
      <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(circle_at_center,rgba(210,170,70,0.10),transparent_68%)] lg:block" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 md:px-12 md:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 lg:px-20 lg:py-28">
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-4">
            <span className="gold-line" aria-hidden="true" />
            <span className="font-body text-xs uppercase tracking-[0.4em] text-gold">Leadership</span>
          </div>
          <div className="mt-10 hidden lg:block" aria-hidden="true">
            <span className="font-display text-[11rem] font-light leading-none text-gold/15">“</span>
          </div>
        </div>

        <div className="max-w-3xl">
          <p className="mb-4 font-body text-xs uppercase tracking-[0.32em] text-muted-foreground">Chief Executive Officer</p>
          <h2 className="font-display text-5xl font-light leading-none text-foreground md:text-7xl">
            Gillian <em className="text-gold">Peat</em>
          </h2>
          <div className="mt-8 h-px w-full bg-border" />
          <p className="mt-8 max-w-2xl font-body text-sm leading-8 text-muted-foreground md:text-base md:leading-9">
            Gillian Peat provides strategic leadership and a forward-looking vision for CNBC Film UK, supporting the development of compelling screen productions and meaningful industry partnerships. With a focus on the creative and commercial dimensions of filmmaking, she champions collaboration between production professionals, creative talent, and industry partners. As CEO, Gillian is committed to supporting the company&apos;s growth, strengthening relationships across the film and media industry, and helping bring ambitious screen projects to life.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <span className="h-px w-12 bg-gold" aria-hidden="true" />
            <span className="font-body text-[10px] uppercase tracking-[0.3em] text-gold">CNBC Film UK</span>
          </div>
        </div>
      </div>
    </section>
  )
}
