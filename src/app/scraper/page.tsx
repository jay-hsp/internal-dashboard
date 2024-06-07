import JobListData from "@/components/component/JobListData";
import { Avatar } from "@/components/ui/avatar";
import { User } from "lucide-react";


const Page = async() => {

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
     <JobListData />
    </div>
  );
};

export default Page;
