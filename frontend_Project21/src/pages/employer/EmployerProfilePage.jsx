import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Building, Edit3, PlusCircle, Upload, Users, Briefcase, Settings, Link2, Mail, Phone, MapPin, ChevronDown, Search, Filter, ExternalLink, CheckSquare, XSquare, Verified, Share2, Download
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }
};

const EmployerProfilePage = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('companyProfile');

  const employerData = {
    companyName: "Innovatech Solutions Ltd.",
    logoUrl: 'https://via.placeholder.com/150/7F00FF/FFFFFF?Text=ISL', // Placeholder logo
    fallbackName: "IS",
    industry: "Technology & AI",
    description: "Innovatech Solutions is a leading provider of cutting-edge AI and software solutions, helping businesses transform and thrive in the digital age. We foster a collaborative and innovative work environment.",
    website: "www.innovatech.com",
    email: "hr@innovatech.com",
    phone: "+1 555 123 4567",
    address: "123 Tech Park, Silicon Valley, CA",
    profileCompletion: 75,
    verificationStatus: {
      company: true,
      social: false,
      email: true,
      linkedin: true,
    },
    teamMembers: [
      { id: 1, name: "Jane Doe", role: "CEO", avatarUrl: 'https://i.pravatar.cc/100?u=jane' },
      { id: 2, name: "John Smith", role: "CTO", avatarUrl: 'https://i.pravatar.cc/100?u=john' },
      { id: 3, name: "Alice Brown", role: "HR Manager", avatarUrl: 'https://i.pravatar.cc/100?u=alice' },
    ],
    techStack: ["React", "Node.js", "Python", "AWS", "Kubernetes"],
    internshipPrograms: [
      { id: 1, title: "Software Engineering Intern", openings: 5, duration: "3 Months" },
      { id: 2, title: "AI Research Intern", openings: 2, duration: "6 Months" },
    ],
    jobPostings: [
        {id: 1, title: "Senior Frontend Developer", location: "Remote", type: "Full-time", applicants: 25, status: "Active"},
        {id: 2, title: "DevOps Engineer", location: "San Francisco, CA", type: "Full-time", applicants: 12, status: "Active"},
    ],
    candidates: [
        {id: 1, name: "Michael Brown", role: "Frontend Developer", match: "85%", status: "Reviewed"},
        {id: 2, name: "Sarah Lee", role: "Full Stack Developer", match: "92%", status: "Interview Scheduled"},
    ]
  };

  const ProfileHeader = () => (
    <motion.div variants={sectionVariants} className="mb-6">
      <Card className="shadow-lg glassmorphic overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-primary to-purple-600" />
        <CardContent className="p-6 relative">
          <div className="flex flex-col sm:flex-row items-center sm:items-end -mt-20 sm:-mt-16">
            <Avatar className="h-32 w-32 border-4 border-background dark:border-slate-800 shadow-lg">
              <AvatarImage src={employerData.logoUrl} alt={employerData.companyName} />
              <AvatarFallback className="text-4xl">{employerData.fallbackName}</AvatarFallback>
            </Avatar>
            <div className="sm:ml-6 mt-4 sm:mt-0 text-center sm:text-left">
              <h1 className="text-3xl font-bold text-foreground flex items-center">
                {employerData.companyName} 
                {employerData.verificationStatus.company && <Verified className="ml-2 h-6 w-6 text-green-500" />}
              </h1>
              <p className="text-md text-muted-foreground">{employerData.industry}</p>
            </div>
            <div className="sm:ml-auto mt-4 sm:mt-0 flex space-x-2">
              <Button variant="outline" size="sm" onClick={() => toast({title: "Edit Profile Clicked!"})}>
                <Edit3 className="h-4 w-4 mr-2" /> Edit Profile
              </Button>
               <Button variant="default" size="sm" onClick={() => toast({title: "Post New Internship Clicked!"})}>
                <PlusCircle className="h-4 w-4 mr-2" /> Post New Internship
              </Button>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">Profile Setup Progress</span>
              <span className="font-semibold text-primary">{employerData.profileCompletion}% Complete</span>
            </div>
            <Progress value={employerData.profileCompletion} className="w-full h-2" />
            <p className="text-xs text-muted-foreground mt-1">Complete your profile for better visibility.</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  const VerificationStep = ({ title, verified, onVerify, link }) => (
    <div className="flex items-center justify-between p-3 bg-muted/30 dark:bg-slate-800/30 rounded-lg">
        <div className="flex items-center">
            {verified ? <CheckSquare className="h-5 w-5 text-green-500 mr-3" /> : <XSquare className="h-5 w-5 text-yellow-500 mr-3" />}
            <span className="text-sm text-foreground">{title}</span>
        </div>
        {!verified && (
             <Button variant={link ? "link" : "outline"} size="sm" onClick={onVerify} className={link ? "p-0 h-auto" : ""}>
                {link ? <>Connect <ExternalLink className="ml-1 h-3 w-3"/></> : "Verify"}
            </Button>
        )}
    </div>
  );


  const CompanyProfileTab = () => (
    <motion.div variants={sectionVariants} className="space-y-6">
      <Card className="glassmorphic">
        <CardHeader><CardTitle className="text-xl text-primary">Company Verification</CardTitle></CardHeader>
        <CardContent className="space-y-3">
            <VerificationStep title="Verify Company Identity" verified={employerData.verificationStatus.company} onVerify={() => toast({title: "Verify Company Clicked!"})} />
            <VerificationStep title="Connect Social Accounts" verified={employerData.verificationStatus.social} onVerify={() => toast({title: "Connect Social Clicked!"})} link />
            <VerificationStep title="Verify Business Email" verified={employerData.verificationStatus.email} onVerify={() => toast({title: "Verify Email Clicked!"})} />
            <VerificationStep title="Connect LinkedIn" verified={employerData.verificationStatus.linkedin} onVerify={() => toast({title: "Connect LinkedIn Clicked!"})} link />
        </CardContent>
      </Card>

      <Card className="glassmorphic">
        <CardHeader><CardTitle className="text-xl text-primary">Company Profile</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div><Label htmlFor="companyName">Company Name</Label><Input id="companyName" defaultValue={employerData.companyName} /></div>
          <div><Label htmlFor="industry">Industry</Label><Input id="industry" defaultValue={employerData.industry} /></div>
          <div><Label htmlFor="description">Company Description</Label><Textarea id="description" defaultValue={employerData.description} rows={4} /></div>
          <div><Label htmlFor="website">Website URL</Label><Input id="website" defaultValue={employerData.website} /></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><Label htmlFor="email">Contact Email</Label><Input id="email" type="email" defaultValue={employerData.email} /></div>
            <div><Label htmlFor="phone">Contact Phone</Label><Input id="phone" type="tel" defaultValue={employerData.phone} /></div>
          </div>
          <div><Label htmlFor="address">Address</Label><Input id="address" defaultValue={employerData.address} /></div>
           <div className="pt-2"><Button onClick={() => toast({title: "Save Company Profile Clicked!"})}>Save Profile</Button></div>
        </CardContent>
      </Card>

       <Card className="glassmorphic">
        <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl text-primary">Team & Mentors</CardTitle>
            <Button variant="outline" size="sm" onClick={() => toast({title: "Add Team Member Clicked!"})}><PlusCircle className="mr-2 h-4 w-4"/> Add Member</Button>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {employerData.teamMembers.map(member => (
                <div key={member.id} className="flex items-center space-x-3 p-3 bg-muted/30 dark:bg-slate-800/30 rounded-lg">
                    <Avatar>
                        <AvatarImage src={member.avatarUrl} alt={member.name} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm font-semibold text-foreground">{member.name}</p>
                        <p className="text-xs text-muted-foreground">{member.role}</p>
                    </div>
                </div>
            ))}
        </CardContent>
      </Card>

       <Card className="glassmorphic">
        <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl text-primary">Technology Stack</CardTitle>
            <Button variant="outline" size="sm" onClick={() => toast({title: "Edit Tech Stack Clicked!"})}><Edit3 className="mr-2 h-4 w-4"/> Edit Stack</Button>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
            {employerData.techStack.map(tech => (
                <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">{tech}</span>
            ))}
        </CardContent>
      </Card>

       <Card className="glassmorphic">
        <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl text-primary">Internship Structure</CardTitle>
             <Button variant="outline" size="sm" onClick={() => toast({title: "Create Structure Clicked!"})}><PlusCircle className="mr-2 h-4 w-4"/> Create Structure</Button>
        </CardHeader>
        <CardContent>
            <Textarea placeholder="Describe your internship program structure, mentorship opportunities, and learning environment..." rows={4}/>
             <div className="pt-4"><Button onClick={() => toast({title: "Save Internship Structure Clicked!"})}>Save Structure</Button></div>
        </CardContent>
      </Card>
    </motion.div>
  );

  const JobPostingsTab = () => (
    <motion.div variants={sectionVariants} className="space-y-6">
        <Card className="glassmorphic">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl text-primary">Manage Job Postings</CardTitle>
                <Button onClick={() => toast({title: "Create New Posting Clicked!"})}><PlusCircle className="mr-2 h-4 w-4"/>Create New Posting</Button>
            </CardHeader>
            <CardContent className="space-y-4">
                {employerData.jobPostings.map(job => (
                    <Card key={job.id} className="bg-background/50 dark:bg-slate-800/30">
                        <CardHeader>
                            <CardTitle className="text-lg text-foreground">{job.title}</CardTitle>
                            <CardDescription>{job.location} - {job.type}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <p className="text-sm text-muted-foreground">Applicants: {job.applicants}</p>
                            <span className={`px-2 py-1 text-xs rounded-full ${job.status === "Active" ? "bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100" : "bg-gray-100 text-gray-700"}`}>{job.status}</span>
                        </CardContent>
                        <CardFooter className="gap-2">
                            <Button variant="outline" size="sm">View Applicants</Button>
                            <Button variant="ghost" size="sm" className="text-primary">Edit</Button>
                        </CardFooter>
                    </Card>
                ))}
            </CardContent>
        </Card>
    </motion.div>
  );

  const CandidatesTab = () => (
     <motion.div variants={sectionVariants} className="space-y-6">
        <Card className="glassmorphic">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl text-primary">Candidate Management</CardTitle>
                <div className="flex gap-2">
                    <Input placeholder="Search candidates..." className="w-auto"/>
                    <Button variant="outline"><Filter className="mr-2 h-4 w-4"/>Filters</Button>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                 {employerData.candidates.map(candidate => (
                    <Card key={candidate.id} className="bg-background/50 dark:bg-slate-800/30">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle className="text-lg text-foreground">{candidate.name}</CardTitle>
                             <span className={`px-2 py-1 text-xs rounded-full ${candidate.status === "Interview Scheduled" ? "bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-blue-100" : "bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-100"}`}>{candidate.status}</span>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">Applied for: {candidate.role}</p>
                            <p className="text-sm text-green-500">Match Score: {candidate.match}</p>
                        </CardContent>
                        <CardFooter className="gap-2">
                            <Button variant="outline" size="sm">View Profile</Button>
                            <Button variant="ghost" size="sm" className="text-primary">Message</Button>
                        </CardFooter>
                    </Card>
                ))}
            </CardContent>
        </Card>
    </motion.div>
  );

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 bg-gradient-to-br from-slate-50 to-indigo-100 dark:from-slate-900 dark:to-indigo-950 min-h-screen">
      <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.05 } } }}>
        <ProfileHeader />
        
        <Tabs defaultValue="companyProfile" className="w-full mb-6" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 bg-muted/50 dark:bg-slate-800/50 p-1 rounded-lg">
            <TabsTrigger value="companyProfile" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md">Company Profile</TabsTrigger>
            <TabsTrigger value="jobPostings" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md">Job Postings</TabsTrigger>
            <TabsTrigger value="candidates" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md">Candidates</TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md">Settings</TabsTrigger>
          </TabsList>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mt-6"
            >
              <TabsContent value="companyProfile">
                <CompanyProfileTab />
              </TabsContent>
              <TabsContent value="jobPostings">
                <JobPostingsTab />
              </TabsContent>
              <TabsContent value="candidates">
                <CandidatesTab />
              </TabsContent>
              <TabsContent value="settings">
                <motion.div variants={sectionVariants}>
                  <Card className="glassmorphic">
                    <CardHeader><CardTitle className="text-xl text-primary">Account Settings</CardTitle></CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Account settings, notification preferences, and billing information will be managed here.</p>
                      {/* Placeholder for settings form */}
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default EmployerProfilePage;