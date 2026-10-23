import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <div className="flex items-center gap-3 font-medium">
        <Image
          src="/logo.png"
          alt="Kurrent"
          width={32}
          height={32}
          className="rounded-md"
          unoptimized
        />
        <span className="text-base">Kurrent</span>
      </div>
    </div>
  );
}
