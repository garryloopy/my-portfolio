export default function SectionHeader({ children }) {
  return (
    <div className="flex flex-row items-center gap-4">
      <p className="text-3xl font-semibold text-gray-50/90">{children}</p>
      <div className="h-6 bg-gray-400/90 flex-1 border-[#00111C] border-y-[11.95px]"></div>
    </div>
  );
}
