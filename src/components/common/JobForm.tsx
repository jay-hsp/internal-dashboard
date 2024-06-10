"use client";

import Loading from "@/app/scraper/loading";
import React, { useState } from "react";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react";

import { useToast } from "@/components/ui/use-toast";
import { Progress } from "@/components/ui/progress"
import { BASE_URL } from "@/utils/constants";



const JobForm = () => {
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [jobName, setJobName] = useState<string>("");
  const [taskCount, setTaskCount] = useState<number>(1);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [isPending, setIsPending] = useState<boolean>(false);

  const { toast } = useToast();


    

  // const { mutate,isPending } = useApiSend(
  //   createJob,
  //   (data: any) => {
  //     toast({
  //       variant: "default",
  //       title: "Success",
  //       description: `Job created successfully : ${JSON.stringify(data)}`,
  //       });
  //     // window.location.reload();
  //   },
  //   (data: any) => {
  //     toast({
  //       variant: "destructive",
  //       title: `${data.error}`,
  //       description: "Job creation failed",
  //     });
  //   }
  // );

  // const handleCreateJob = async() => {
  //   if (!csvFile) return;
  //   const formData = new FormData();
  //   formData.append("csvFile", csvFile);
  //   formData.append("jobName", jobName);
  //   formData.append("taskCount", taskCount.toString());
  //   mutate({ formData: formData } as any);
  // };


  const handleCreateJob = async () => {
    if (!csvFile){
      toast({
        variant: "destructive",
        title: `csv file not found`,
        description: "Job creation failed",
      });
      return;}
    if (taskCount<1) {
      toast({
        variant: "destructive",
        title: `Task count cannot be zero or negative`,
        description: "Job creation failed",
      });
      return;
      }
      if (jobName === "") {
      toast({
        variant: "destructive",
        title: `job name is not specified`,
        description: "Job creation failed",
      });
      return;}


    setIsPending(true);
    const formData = new FormData();
    formData.append("csvFile", csvFile);
    formData.append("jobName", jobName);
    formData.append("taskCount", taskCount.toString());

    const xhr = new XMLHttpRequest();
    xhr.open("POST", BASE_URL+"/create_job", true);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentCompleted = Math.round((event.loaded * 100) / event.total);
        setUploadProgress(percentCompleted);
      }
    };

    xhr.onload = () => {
      setIsPending(false);
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log(xhr.responseText)
        const response = JSON.parse(xhr.responseText);
        toast({
          variant: "default",
          title: "Success",
          description: `Job created successfully: ${JSON.stringify(response)}`,
        });
      } else {
        const response = JSON.parse(xhr.responseText);
        toast({
          variant: "destructive",
          title: `${response.error}`,
          description: "Job creation failed",
        });
      }
      setUploadProgress(0);
      setJobName("")
      setCsvFile(null)
      setTaskCount(1);
    };

    xhr.onerror = () => {
      setIsPending(false);
      toast({
        variant: "destructive",
        title: "Error",
        description: "An error occurred during file upload.",
      });
      setUploadProgress(0);
    };

    xhr.send(formData);
  };


  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
    {isPending && <Loading />}
    <form className="dark:bg-gray-900 rounded-lg p-6 space-y-4">
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
      <Button onClick={handleCreateJob} type="button" className="w-full" disabled={isPending}>
            Create Job
          </Button>
          {uploadProgress > 0 && (
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <Progress value={uploadProgress} />
          </div>
        )}
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
