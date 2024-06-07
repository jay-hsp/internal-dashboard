"use client"
// components/UploadForm.js
import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
  const [file, setFile] = useState<any>(null);
  const [jobName, setJobName] = useState('');
  const [taskCount, setTaskCount] = useState<number>(1);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e:any) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('csvFile', file);
    formData.append('jobName', jobName);
    formData.append('taskCount', taskCount.toString());

    try {
      const response = await axios.post('/create_job', formData, {
        onUploadProgress: (progressEvent) => {
          const progress = (progressEvent.loaded / (progressEvent.total || 1)) * 100;
          setProgress(progress);
        }
      });
      alert('Upload successful: ' + response.data.message);
    } catch (error) {
      alert('Error uploading file: ' + error);
    }
  };

  return (
    <div>
      <h2>Upload CSV File</h2>
      <input type="file" onChange={handleFileChange} />
      <input type="text" placeholder="Job Name" value={jobName} onChange={(e) => setJobName(e.target.value)} />
      <input type="number" placeholder="Task Count" value={taskCount} onChange={(e) => setTaskCount((e as any)?.target?.value)} />
      <button onClick={handleUpload}>Upload</button>
      <p>Progress: {progress}%</p>
    </div>
  );
};

export default UploadForm;
