export default function ColorPalette() {
  return (
    <div className="fixed bottom-4 right-4 bg-gray-300/95 p-4 rounded-md flex flex-row gap-4">
      <div className="w-20 h-20 flex flex-col items-center rounded-t-md overflow-hidden">
        <div className="flex-1 h-full w-full bg-[#C6AB84]"></div>
        <div>
          <p className="text-sm font-semibold text-gray-950">#C6AB84</p>
        </div>
      </div>
    </div>
  );
}
