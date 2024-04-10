export default function PageLayout({ children, className }) {
  return (
    <main
      className={`min-h-screen w-full flex flex-col ${className} bg-zinc-900/45`}
    >
      {children}
    </main>
  );
}
