import Image from "next/image";

export default function Hero({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <div className="relative mb-6 overflow-hidden rounded-xl border border-yellow-900/30">
      <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(212,175,55,0.18),transparent_60%)]" />
      {image ? (
        <Image
          src={image}
          alt=""
          width={1600}
          height={640}
          className="h-56 w-full object-cover opacity-60 sm:h-72 md:h-80"
          priority
        />
      ) : (
        <div className="h-56 w-full bg-gradient-to-br from-zinc-900 via-black to-zinc-950 sm:h-72 md:h-80" />
      )}
      <div className="absolute inset-0 flex items-end">
        <div className="w-full bg-gradient-to-t from-black/60 to-transparent p-6">
          <h1 className="section-title text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-2 max-w-3xl text-sm text-zinc-300 sm:text-base">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}
