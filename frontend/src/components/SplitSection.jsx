export default function SplitSection({ image, title, text, reverse }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 border-b border-line min-h-[420px]">
      <div className={`md:col-span-6 ${reverse ? "md:order-2" : ""}`}>
        <div className="h-[260px] md:h-full w-full bg-neutral-200">
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>
      </div>

      <div
        className={`md:col-span-6 p-10 md:p-16 flex flex-col justify-center ${
          reverse
            ? "md:order-1 md:border-r md:border-line"
            : "md:border-l md:border-line"
        }`}
      >
        <h3 className="text-lg md:text-xl mb-3">{title}</h3>
        <p className="text-sm text-neutral-600 leading-relaxed max-w-md">
          {text}
        </p>
      </div>
    </section>
  );
}
