"use client";

import { useToast } from "@/components/ui/use-toast";
import {
  getAllJobs,
  deleteJob,
  getJobProgress,
  downloadJobResult,
  downloadJobOutput,
} from "@/hooks/scraper";
import { useApiGet } from "@/utils/network/rq";
import React from "react";
import JobForm from "@/components/common/JobForm";
import JobList from "@/components/common/JobsList";
import Loading from "@/app/scraper/loading";

const JobListData = () => {
  const { toast } = useToast();
  
  const { data, isLoading, isError } = useApiGet(["jobs"], getAllJobs, {
    enabled: true,
    refetchOnWindowFocus: true,
    retry: 1
  });



  const handleDeleteJob = async(jobName: string) => {
    deleteJob(jobName).then(() => {
      toast({
        variant: "default",
        title: "Success",
        description: "Job deleted successfully",
      });
    window.location.reload();
    });
  };

  const handleCheckProgress = async(jobName: string) => {
    getJobProgress(jobName).then((progress) => {
      toast({
        variant: "default",
        title: "Progress",
        description: `Job ${jobName} progress: ${progress}%`,
      });
    });
  };

  const handleDownloadResult = async(jobName: string) => {
    downloadJobResult(jobName).then((file) => {
      const url = URL.createObjectURL(new Blob([file]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `combined_emails_${jobName}.csv`);
      document.body.appendChild(link);
      link.click();
    });
  };

  const handleDownloadOutput = async(jobName: string) => {
    downloadJobOutput(jobName).then((file) => {
      const url = URL.createObjectURL(new Blob([file]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${jobName}_output.zip`);
      document.body.appendChild(link);
      link.click();
    });
  };


  if (isError)
    toast({
      variant: "destructive",
      title: "Error",
      description: "Check Your Connection"
    });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div >
      <JobForm/>
      <JobList
        jobs={data as any}
        onDeleteJob={handleDeleteJob}
        onCheckProgress={handleCheckProgress}
        onDownloadResult={handleDownloadResult}
        onDownloadOutput={handleDownloadOutput}
      />
    </div>
  );
};

export default JobListData;
