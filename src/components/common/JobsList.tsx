"use client";

import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { AlertDialogDemo } from "../component/Alert-Demo";
import { useState } from "react";
import Loading from "@/app/scraper/loading";


interface Job {
  _id: string;
  job_name: string;
  status: string;
  task_count: number;
  progress: number;
  total_email_count: number;
}

const JobList = ({
  jobs,
  onDeleteJob,
  onCheckProgress,
  onDownloadResult,
  onDownloadOutput
}: {
  jobs: Job[];
  onDeleteJob: (jobName: string) => void;
  onCheckProgress: (jobName: string) => void;
  onDownloadResult: (jobName: string) => void;
  onDownloadOutput: (jobName: string) => void;
}) => {

  const [isLoading, setisLoading] = useState(false)

const onDeleteJob_ = (jobName: string) =>{
  setisLoading(true)
  onDeleteJob(jobName)
  setisLoading(false)
}
const onCheckProgress_ = (jobName: string) =>{
  setisLoading(true)
  onCheckProgress(jobName)
  setisLoading(false)
}
const onDownloadResult_ = (jobName: string) =>{
  setisLoading(true)
  onDownloadResult(jobName)
  setisLoading(false)
}
const onDownloadOutput_ = (jobName: string) =>{
  setisLoading(true)
  onDownloadOutput(jobName)
  setisLoading(false)
}

  

  return (
    <div className="p-5 mt-8">
      {isLoading && <Loading />}
      <Table>
      <TableHeader>
              <TableRow>
                <TableHead>Job Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Task Count</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Email Count</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
        <TableBody>
          {jobs && jobs?.map((job) => (
            <TableRow key={job._id}>
              <TableCell>{job.job_name}</TableCell>
              <TableCell>{job.status}</TableCell>
              <TableCell>{job.task_count}</TableCell>
              <TableCell>
              <Progress value={job.progress} />
                {job.progress.toFixed(2)}%
                </TableCell>
              <TableCell>{job.total_email_count}</TableCell>
              <TableCell>
              <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoveVerticalIcon className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="flex flex-col">
                <DropdownMenuItem disabled={job.progress.toFixed(0)!=="100" || isLoading} asChild>
                  <AlertDialogDemo name="Delete" description="Job will be deleted permanently!!" Do={() => onDeleteJob_(job.job_name)}/>
                  </DropdownMenuItem>
                <DropdownMenuItem disabled={job.progress.toFixed(0)!=="100" || isLoading} asChild>
                  <AlertDialogDemo name="Check Progress" description="Click to check the progress!!" Do={() => onCheckProgress_(job.job_name)}/>
                  </DropdownMenuItem>
                <DropdownMenuItem disabled={job.progress.toFixed(0)!=="100" || isLoading} asChild>
                  <AlertDialogDemo name="Download Result" description="Click to download all the scraped emails!!" Do={() => onDownloadResult_(job.job_name)}/>
                  </DropdownMenuItem>
                <DropdownMenuItem disabled={job.progress.toFixed(0)!=="100" || isLoading} asChild>
                  <AlertDialogDemo name="Download Output" description="Click to download all the job folders. Click with caution. It may take some time!!" Do={() => onDownloadOutput_(job.job_name)}/>
                  </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default JobList;

function MoveVerticalIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="8 18 12 22 16 18" />
        <polyline points="8 6 12 2 16 6" />
        <line x1="12" x2="12" y1="2" y2="22" />
      </svg>
    )
  }