export default function SectionHeader({ children }) {
  return (
    <div className="flex flex-row items-center gap-4">
      <p className="text-3xl font-semibold text-gray-50">{children}</p>
    </div>
  );
}
