"use client"
import { request } from "@/utils/network/network";

export const getAllJobs = async () => {
    // console.log("id",id)
    return await request({
        method: "GET",
        url: `list_jobs`,
    });
};

export const createJob = async (data: any) => {
    console.log(data)
    return await request({
        method: "POST",
        url: `/create_job`,
        data: data?.formData,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const deleteJob = async (jobName: string) => {
    const response = await request({
        method: "DELETE",
        url: `/delete_job/${jobName}`,
    })
    return response;
};

export const getJobProgress = async (jobName: string) => {
    const response = await request({
        method: "GET",
        url: `/get_progress/${jobName}`,
    })
    return response.progress;
};

export const downloadJobResult = async (jobName: string) => {
    const response = await request({
        method: "GET",
        url: `/download_result/${jobName}`,
        responseType: 'blob'
    })
    return response;
};

export const downloadJobOutput = async (jobName: string) => {
    const response = await request({
        method: "GET",
        url: `/download_output_folder/${jobName}`,
        responseType: 'blob'
    })
    return response;
};