import JobListData from "@/components/component/JobListData";
import { Avatar } from "@/components/ui/avatar";
import { getAllJobs } from "@/hooks/scraper";
import { User } from "lucide-react";

export const revalidate = 5

const Page = async() => {

  const data = await getAllJobs();

  return (
    <div className="dark:bg-gray-950 dark:text-gray-50">
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold">Email Scraper</h1>
        <div className="flex items-center gap-4">
          {/* <Link className="text-sm hover:underline" href="#">
            Docs
          </Link>
          <Link className="text-sm hover:underline" href="#">
            Settings
          </Link> */}
          <Avatar className="h-8 w-8">
            <User />
            {/* <AvatarFallback>Jay</AvatarFallback> */}
          </Avatar>
        </div>
      </header>
     {data && <JobListData data={data} />}
    </div>
  );
};

export default Page;
