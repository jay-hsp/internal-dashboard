import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/providers/ToggleButton";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="absolute top-5 right-5">
        <ModeToggle />
      </div>
      <Link href={"/scraper"}>
      <Button>
        Scraper App
      </Button>
      </Link>
    </main>
  );
}
