"use client";

import { useToast } from "@/components/ui/use-toast";
import {
  getAllJobs,
  createJob,
  deleteJob,
  getJobProgress,
  downloadJobResult,
  downloadJobOutput,
} from "@/hooks/scraper";
import { useApiSend } from "@/utils/network/rq";
import React, { useState } from "react";
import JobForm from "@/components/common/JobForm";
import JobList from "@/components/common/JobsList";
import { Avatar } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

const JobListData = ({data}:{data:any}) => {
  const { toast } = useToast();
  const router = useRouter();

  const { mutate } = useApiSend(
    createJob,
    (data: any) => {
      toast({
        variant: "default",
        title: "Success",
        description: `Job created successfully : ${JSON.stringify(data)}`,
      });
    },
    (data: any) => {
      toast({
        variant: "destructive",
        title: `${data.error}`,
        description: "Job creation failed",
      });
    }
  );

  const handleCreateJob = async(formData: FormData) => {
    mutate({ formData: formData } as any);
  };

  const handleDeleteJob = async(jobName: string) => {
    deleteJob(jobName).then(() => {
      toast({
        variant: "default",
        title: "Success",
        description: "Job deleted successfully",
      });
    });
    router.refresh()
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

  return (
    <div >
      <JobForm onCreateJob={handleCreateJob} />
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
