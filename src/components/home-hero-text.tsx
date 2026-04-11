export function HomeHeroText() {
  return (
    <section className="space-y-4">
      <h1
        className="text-2xl font-semibold leading-tight text-text-primary sm:text-3xl"
        style={{ fontFamily: "var(--font-crimson)" }}
      >
        The best systems disappear. I design software that gets out of the way.
      </h1>
      <p
        className="max-w-[800px] text-base leading-relaxed text-text-muted"
        style={{ fontFamily: "var(--font-outfit)" }}
      >
        I specialize in crafting elegant, user-centric solutions for complex problems. I believe good design can and should make work feel faster and lighter. I thrive in collaborative environments creating systems and processes to work efficiently and effectively as a team.
      </p>
    </section>
  );
}
