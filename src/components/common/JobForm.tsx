"use client";

import Loading from "@/app/scraper/loading";
import React, { useState } from "react";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react";

const JobForm = ({ onCreateJob }: { onCreateJob: (formData: FormData) => void }) => {
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [jobName, setJobName] = useState<string>("");
  const [taskCount, setTaskCount] = useState<number>(1);
  const [isLoading, setisLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    if (!csvFile) return;
    const formData = new FormData();
    formData.append("csvFile", csvFile);
    formData.append("jobName", jobName);
    formData.append("taskCount", taskCount.toString());
    onCreateJob(formData);
  };
  
  const handleSubmitForm = (e: React.FormEvent)=>{
    e.preventDefault()
    setisLoading(true)
    setTimeout(()=>{
      console.log("Waiting to upload")
    },3000)
    setisLoading(false)
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
            {isLoading && <Loading />}
    <form onSubmit={handleSubmitForm} className="dark:bg-gray-900 rounded-lg p-6 space-y-4">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="space-y-2">
      <Label htmlFor="file">Upload CSV</Label>

          <Input id="file"  type="file" accept=".csv" onChange={(e) => setCsvFile(e.target.files?.[0] || null)} required={true} />
      </div>
      <div className="space-y-2">
      <Label htmlFor="job-name">Job Name</Label>
          <Input id="job-name" placeholder="Enter job name" type="text" value={jobName} onChange={(e) => setJobName(e.target.value)} required={true} />
      </div>
      <div className="space-y-2">
      <Label htmlFor="task-count">Task Count</Label>
          <Input id="task-count" placeholder="Enter task count" type="number" value={taskCount} onChange={(e) => setTaskCount(parseInt(e.target.value))} required={true} />
      </div>
          </div>
      <Button className="w-full" type="submit" disabled={isLoading}>
            Create Job
          </Button>
              </form>
              <Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Correct up!</AlertTitle>
  <AlertDescription>
    Make sure you have the column &nbsp;
     <span className="text-red-400">
    &apos; Domain &apos;
      </span> 
      &nbsp; in the uploaded csv file strictly !
  </AlertDescription>
</Alert>
    </div>
  );
};

export default JobForm;
