export default function SectionLayout({ children }) {
  return (
    <section className="flex flex-col gap-6 lg:w-[64rem] w-full lg:p-4">
      {children}
    </section>
  );
}
