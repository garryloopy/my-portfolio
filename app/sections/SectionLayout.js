export default function SectionLayout({ children }) {
  return (
    <section className="flex flex-col gap-10 lg:w-[64rem] w-full">
      {children}
    </section>
  );
}
