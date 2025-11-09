import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Assuming Select component exists
import { UploadCloud, FileText, Trash2, CheckCircle, AlertTriangle, Download, Edit3, Sparkles, ListChecks } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ResumeUploadPage = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState(null);
  const { toast } = useToast();

  const [previouslyUploaded, setPreviouslyUploaded] = useState([
    { id: 1, name: 'MyResume_2025_v1.pdf', date: '2025-05-01', size: '1.2MB', parsed: true },
    { id: 2, name: 'CV_JohnDoe_Software.docx', date: '2025-04-15', size: '850KB', parsed: false },
  ]);

  const [resumeTitle, setResumeTitle] = useState('');
  const [careerLevel, setCareerLevel] = useState('');
  const [jobCategories, setJobCategories] = useState({
    softwareDevelopment: false,
    dataScience: false,
    webDevelopment: false,
    uiUxDesign: false,
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    processFile(file);
  };

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      processFile(acceptedFiles[0]);
    }
  }, []);

  const processFile = (file) => {
    if (file) {
      if (["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type)) {
        if (file.size <= 5 * 1024 * 1024) { // 5MB limit
          setResumeFile(file);
          setResumeTitle(file.name.split('.').slice(0, -1).join('.') || 'My Resume'); // Pre-fill title
          setUploadStatus(null);
          setUploadProgress(0);
        } else {
          toast({ title: "File too large", description: "Please upload a file smaller than 5MB.", variant: "destructive" });
        }
      } else {
        toast({ title: "Invalid file type", description: "Please upload a PDF or Word document.", variant: "destructive" });
      }
    }
  };

  const handleDragOver = (event) => event.preventDefault();
  const handleDrop = (event) => {
    event.preventDefault();
    onDrop(event.dataTransfer.files);
  };

  const handleUpload = async () => {
    if (!resumeFile) {
      toast({ title: "No file selected", description: "Please select a resume file to upload.", variant: "destructive" });
      return;
    }
    setIsUploading(true);
    setUploadStatus(null);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      if (progress <= 100) setUploadProgress(progress);
      else {
        clearInterval(interval);
        setTimeout(() => {
          const success = Math.random() > 0.1; // Higher chance of success
          if (success) {
            setUploadStatus('success');
            toast({ title: "Resume Processed!", description: `${resumeFile.name} has been successfully analyzed.` });
            setPreviouslyUploaded(prev => [{id: Date.now(), name: resumeFile.name, date: new Date().toISOString().split('T')[0], size: `${(resumeFile.size/1024/1024).toFixed(2)}MB`, parsed: true}, ...prev]);
            setResumeFile(null); // Clear after successful upload
          } else {
            setUploadStatus('error');
            toast({ title: "Processing Failed", description: "Could not analyze your resume. Please try again.", variant: "destructive" });
          }
          setIsUploading(false);
        }, 500);
      }
    }, 150);
  };

  const handleRemoveFile = () => {
    setResumeFile(null);
    setUploadProgress(0);
    setUploadStatus(null);
    setResumeTitle('');
    setCareerLevel('');
    setJobCategories({ softwareDevelopment: false, dataScience: false, webDevelopment: false, uiUxDesign: false });
  };
  
  const handleCategoryChange = (category) => {
    setJobCategories(prev => ({ ...prev, [category]: !prev[category] }));
  };

  const resumeTips = [
    "Keep your resume concise and relevant (1-2 pages).",
    "Use bullet points to highlight achievements.",
    "Include keywords from job descriptions.",
    "Proofread carefully for any spelling or grammatical errors.",
    "Quantify your accomplishments whenever possible.",
  ];

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-gradient-to-br from-sky-100 via-indigo-100 to-purple-100 dark:from-sky-900 dark:via-indigo-900 dark:to-purple-950">
      <motion.div variants={pageVariants} initial="initial" animate="animate" className="w-full max-w-4xl space-y-8 mt-8 mb-8">
        <Card className="shadow-xl glassmorphic">
          <CardHeader className="text-center">
            <UploadCloud className="mx-auto h-12 w-12 text-primary mb-3" />
            <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">Upload & Optimize Your Resume</CardTitle>
            <CardDescription className="text-muted-foreground">
              Provide your latest resume. We'll help parse and structure it for best results. (PDF or DOCX, max 5MB)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div 
              className={`flex flex-col items-center justify-center w-full h-52 border-2 border-dashed rounded-lg cursor-pointer transition-colors
                ${isUploading ? 'border-gray-400 bg-gray-100 dark:bg-slate-800' : 'border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/10 bg-background/30 dark:bg-slate-800/30'}`}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => !isUploading && document.getElementById('resume-upload-input')?.click()}
            >
              <input type="file" id="resume-upload-input" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileChange} disabled={isUploading} />
              {resumeFile ? (
                <div className="text-center p-4">
                  <FileText className="mx-auto h-10 w-10 text-green-500 mb-2" />
                  <p className="font-semibold text-foreground text-sm">{resumeFile.name}</p>
                  <p className="text-xs text-muted-foreground">{(resumeFile.size / 1024 / 1024).toFixed(2)} MB</p>
                  <Button variant="link" size="sm" onClick={(e) => {e.stopPropagation(); handleRemoveFile();}} className="mt-1 text-red-500 hover:text-red-700" disabled={isUploading}>
                    <Trash2 className="mr-1 h-3 w-3" /> Remove File
                  </Button>
                </div>
              ) : (
                <div className="text-center p-4">
                  <UploadCloud className="mx-auto h-10 w-10 text-muted-foreground mb-2" />
                  <p className="font-semibold text-foreground">Drag & drop your resume here</p>
                  <p className="text-sm text-muted-foreground">or click to browse files</p>
                </div>
              )}
            </div>

            {resumeFile && !isUploading && (
              <motion.div initial={{opacity: 0, height: 0}} animate={{opacity: 1, height: 'auto'}} transition={{duration: 0.3}} className="space-y-4 p-4 border border-border rounded-lg bg-background/20 dark:bg-slate-800/20">
                <div>
                    <Label htmlFor="resumeTitle">Resume Title</Label>
                    <Input id="resumeTitle" placeholder="E.g., Software Engineer Resume" value={resumeTitle} onChange={(e) => setResumeTitle(e.target.value)} />
                </div>
                <div>
                    <Label htmlFor="careerLevel">Career Level</Label>
                    <Select value={careerLevel} onValueChange={setCareerLevel}>
                        <SelectTrigger id="careerLevel" className="w-full"><SelectValue placeholder="Select career level" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="internship">Student/Internship</SelectItem>
                            <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                            <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                            <SelectItem value="senior">Senior Level (5+ years)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Label>Preferred Job Categories</Label>
                    <div className="grid grid-cols-2 gap-2 mt-1">
                        {Object.keys(jobCategories).map(key => (
                            <div key={key} className="flex items-center space-x-2">
                                <Checkbox id={key} checked={jobCategories[key]} onCheckedChange={() => handleCategoryChange(key)} />
                                <Label htmlFor={key} className="text-sm font-normal capitalize">
                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                </Label>
                            </div>
                        ))}
                    </div>
                </div>
              </motion.div>
            )}

            {isUploading && (
              <div className="w-full bg-muted rounded-full h-2 dark:bg-slate-700">
                <motion.div className="bg-primary h-2 rounded-full" style={{ width: `${uploadProgress}%` }} initial={{ width: 0 }} animate={{ width: `${uploadProgress}%` }} />
                 <p className="text-xs text-center text-muted-foreground mt-1">Analyzing your resume... {uploadProgress}%</p>
              </div>
            )}
            {uploadStatus && (
              <div className={`flex items-center justify-center text-sm p-2 rounded-md ${uploadStatus === 'success' ? 'bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100' : 'bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-100'}`}>
                {uploadStatus === 'success' ? <CheckCircle className="h-4 w-4 mr-2" /> : <AlertTriangle className="h-4 w-4 mr-2" />}
                <span>{uploadStatus === 'success' ? 'Resume processed successfully!' : 'Processing failed. Please try again.'}</span>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex-col sm:flex-row gap-2">
            <Button onClick={handleUpload} className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white" disabled={!resumeFile || isUploading}>
              {isUploading ? <><Sparkles className="mr-2 h-4 w-4 animate-spin" /> Processing...</> : <><Sparkles className="mr-2 h-4 w-4" /> Upload & Analyze Resume</>}
            </Button>
            {uploadStatus === 'success' && 
                <Button variant="outline" className="w-full sm:w-auto" onClick={() => toast({title: "Navigating to Profile..."})}>
                    View Updated Profile
                </Button>
            }
          </CardFooter>
        </Card>

        <Card className="shadow-xl glassmorphic">
            <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary flex items-center"><ListChecks className="mr-2 h-5 w-5" /> Resume Tips</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    {resumeTips.map((tip, index) => (
                        <li key={index} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{tip}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>

        {previouslyUploaded.length > 0 && (
            <Card className="shadow-xl glassmorphic">
                <CardHeader>
                    <CardTitle className="text-xl font-semibold text-primary">Previously Uploaded Resumes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                {previouslyUploaded.map(item => (
                    <div key={item.id} className="flex items-center justify-between p-3 bg-muted/30 dark:bg-slate-800/30 rounded-lg">
                        <div>
                            <p className="text-sm font-medium text-foreground">{item.name}</p>
                            <p className="text-xs text-muted-foreground">Uploaded: {item.date} ({item.size}) - {item.parsed ? <span className="text-green-500">Parsed</span> : <span className="text-yellow-500">Not Parsed</span>}</p>
                        </div>
                        <div className="flex space-x-1">
                            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => toast({title: `Downloading ${item.name}`})}>
                                <Download className="h-4 w-4 text-blue-500" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => toast({title: `Re-parsing ${item.name}`})}>
                                <Sparkles className="h-4 w-4 text-primary" />
                            </Button>
                             <Button variant="ghost" size="icon" className="h-7 w-7" 
                                onClick={() => {
                                    setPreviouslyUploaded(prev => prev.filter(i => i.id !== item.id));
                                    toast({title: `${item.name} removed.`, variant: "destructive"});
                                }}>
                                <Trash2 className="h-4 w-4 text-red-500" />
                            </Button>
                        </div>
                    </div>
                ))}
            </CardContent>
            </Card>
        )}
      </motion.div>
    </div>
  );
};

export default ResumeUploadPage;