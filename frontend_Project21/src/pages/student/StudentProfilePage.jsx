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
import {
  Edit3, Mail, Phone, Linkedin, Github, Calendar, MapPin, Paperclip, Settings, Eye, Link2, PlusCircle,
  Briefcase, Target, BarChart3, Lightbulb, Users, Award, FileText, ExternalLink, Share2, Upload, CheckSquare, XSquare, MessageSquare
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }
};

const StudentProfilePage = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');

  // Enhanced dummy data based on wireframes
  const studentData = {
    name: 'John Doe',
    avatarUrl: 'https://i.pravatar.cc/150?u=johndoe',
    fallbackName: 'JD',
    major: 'Computer Science Student',
    university: 'University ABC',
    profileCompletion: 85,
    readinessScore: 78,
    linkedinProfile: 'linkedin.com/in/johndoe',
    portfolioUrl: 'johndoe.dev',
    customUrl: 'internhub.io/johndoe',
    email: 'john.doe@example.com',
    phone: '+1 123 456 7890',
    
    education: [
      { id: 1, degree: "Bachelor's in Computer Science", institution: "University ABC", year: "2022 - 2025", verified: true },
      { id: 2, degree: "High School Diploma", institution: "XYZ High School", year: "2020", verified: false },
    ],
    skills: [
      { id: 1, name: 'JavaScript', level: 'Advanced', progress: 90 },
      { id: 2, name: 'Python', level: 'Intermediate', progress: 75 },
      { id: 3, name: 'React', level: 'Advanced', progress: 85 },
      { id: 4, name: 'Node.js', level: 'Intermediate', progress: 70 },
    ],
    projects: [
      { id: 1, name: 'E-commerce Platform', description: 'Full stack web application built with React and Node.js', link: '#', tech: ['React', 'Node.js', 'MongoDB'] },
      { id: 2, name: 'AI-Powered Chat Application', description: 'Built using Python, TensorFlow, and React.', link: '#', tech: ['Python', 'TensorFlow', 'React'] },
    ],
    activeApplications: [
        {id: 1, role: "Software Developer Intern", company: "Tech Solutions Inc.", status: "In Review", appliedOn: "2025-05-01"},
        {id: 2, role: "Frontend Developer", company: "Innovate LLC", status: "Applied", appliedOn: "2025-05-10"},
    ],
    careerPath: {
        currentGoal: "Software Engineer",
        alignmentScore: "92%",
    },
    recommendedLearning: [
        {id: 1, title: "AWS Cloud Practitioner", source: "Recommended Certification"},
        {id: 2, title: "React Advanced Concepts", source: "Skill Enhancement"},
    ],
    messagesNotifications: [
        {id: 1, type: "Interview Invitation", company: "Tech Corp Inc.", time: "2h ago", unread: true},
    ],
    recommendations: [
      { id: 1, recommender: 'Professor Smith', rating: 5, text: 'John is a dedicated student with excellent problem-solving skills.' },
      { id: 2, recommender: 'Employer ABC', rating: 4, text: 'John was a valuable asset to our team during his internship.' },
    ],
    socialActivity: [
      { id: 1, type: 'post', imageAlt: 'Summer vacation photo', caption: 'Enjoying my summer vacation!', tags: ['#vacation', '#friends'], user: 'Friend123', userAction: 'commented' },
      { id: 2, type: 'event', imageAlt: 'Coding webinar flyer', caption: 'Excited for the upcoming webinar on coding trends.', tags: ['#webinar', '#coding'], user: 'EventOrganizer', userAction: 'shared' },
    ],
    performanceMetrics: {
      projectsCompleted: 12,
      skillsAcquired: 8,
      newSkillsThisMonth: 1,
    },
    industryInterests: ['Technology', 'Social Impact', 'Business'],
    workPreferences: ['Remote', 'Hybrid'],
    companySize: ['Small', 'Medium'],
    salaryExpectations: 'Enter salary expectations',
    technicalSkillsRating: 4, // out of 5
    softSkillsRating: 5, // out of 5
    languageSpoken: 3,
    githubRepo: 'github.com/johndoe/repo',
    personalWebsite: 'johndoe.dev',
    projectDemos: 'youtube.com/johndoe',
    careerObjectives: 'Seeking a challenging role in software development...',
    availability: {
        verifiedHours: 'Full-time',
        specificHours: 'Mon-Fri, 9am-5pm',
        geographicConstraints: 'Open to relocate',
        travelCapabilities: 'Yes'
    },
    personalityAssessment: {
        traits: 'Complete a personality questionnaire',
        preferences: 'Share your work style'
    },
    learningPreferences: {
        methods: ['Visual', 'Auditory', 'Kinesthetic'],
        areasToDevelop: ['Cloud Computing', 'Advanced Algorithms'],
        resources: ['Online courses', 'Mentorship']
    },
    applicationOverview: {
        totalApplications: 12,
        inReview: 5,
        interviewsScheduled: 2,
    }
  };

  const ProfileHeader = () => (
    <motion.div variants={sectionVariants} className="mb-6">
      <Card className="shadow-lg glassmorphic overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center">
            <Avatar className="h-24 w-24 border-4 border-background dark:border-slate-800 shadow-md">
              <AvatarImage src={studentData.avatarUrl} alt={studentData.name} />
              <AvatarFallback className="text-3xl">{studentData.fallbackName}</AvatarFallback>
            </Avatar>
            <div className="sm:ml-6 mt-4 sm:mt-0 text-center sm:text-left">
              <h1 className="text-3xl font-bold text-foreground">{studentData.name}</h1>
              <p className="text-md text-muted-foreground">{studentData.major} at {studentData.university}</p>
              <div className="flex space-x-2 mt-1 text-xs text-muted-foreground justify-center sm:justify-start">
                <span className="flex items-center"><Linkedin className="h-3 w-3 mr-1" /> {studentData.linkedinProfile}</span>
                <span className="flex items-center"><Link2 className="h-3 w-3 mr-1" /> {studentData.portfolioUrl}</span>
              </div>
              <p className="text-xs text-primary mt-1">Custom URL: {studentData.customUrl}</p>
            </div>
            <div className="sm:ml-auto mt-4 sm:mt-0 flex flex-col items-center sm:items-end space-y-2">
              <Button variant="outline" size="sm" onClick={() => toast({ title: "Edit Profile Clicked!"})}>
                <Edit3 className="h-4 w-4 mr-2" /> Edit Profile
              </Button>
              <Button variant="ghost" size="sm" onClick={() => toast({ title: "Privacy Settings Clicked!"})}>
                <Settings className="h-4 w-4 mr-2" /> Privacy Settings
              </Button>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">Profile Completion</span>
              <span className="font-semibold text-primary">{studentData.profileCompletion}%</span>
            </div>
            <Progress value={studentData.profileCompletion} className="w-full h-2" />
            <p className="text-xs text-muted-foreground mt-1 text-right">Student Readiness Score: <span className="font-bold text-green-500">{studentData.readinessScore}/100</span></p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
  
  const SkillsAndEducation = () => (
    <motion.div variants={sectionVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <Card className="shadow-md glassmorphic">
        <CardHeader>
          <CardTitle className="text-xl text-primary flex items-center">
            <Award className="mr-2 h-5 w-5" /> Skills & Expertise
            <Button variant="ghost" size="icon" className="ml-auto h-7 w-7" onClick={() => toast({title: "Add Skill Clicked!"})}>
              <PlusCircle className="h-5 w-5" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {studentData.skills.map(skill => (
            <div key={skill.id}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <span className="text-xs text-muted-foreground">{skill.level}</span>
              </div>
              <Progress value={skill.progress} className="h-1.5" />
            </div>
          ))}
        </CardContent>
      </Card>
      <Card className="shadow-md glassmorphic">
        <CardHeader>
          <CardTitle className="text-xl text-primary flex items-center">
            <Briefcase className="mr-2 h-5 w-5" /> Education & Certifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {studentData.education.map(edu => (
            <div key={edu.id} className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                {edu.verified ? <CheckSquare className="h-5 w-5 text-green-500" /> : <XSquare className="h-5 w-5 text-yellow-500" />}
              </div>
              <div className="ml-3">
                <p className="text-sm font-semibold text-foreground">{edu.degree}</p>
                <p className="text-xs text-muted-foreground">{edu.institution} ({edu.year})</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );

  const ProjectShowcase = () => (
    <motion.section variants={sectionVariants} className="mb-6">
        <Card className="shadow-md glassmorphic">
            <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                    <Lightbulb className="mr-2 h-5 w-5" /> Project Showcase
                </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {studentData.projects.map(project => (
                    <Card key={project.id} className="bg-background/50 dark:bg-slate-800/30">
                        <CardHeader>
                            <CardTitle className="text-lg text-foreground">{project.name}</CardTitle>
                            <CardDescription className="text-xs">{project.tech.join(', ')}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                        </CardContent>
                        <CardFooter>
                             <Button variant="link" size="sm" asChild className="p-0 h-auto">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    View Project <ExternalLink className="ml-1 h-3 w-3" />
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </CardContent>
        </Card>
    </motion.section>
  );

  const ApplicationOverview = () => (
    <motion.section variants={sectionVariants} className="mb-6">
        <Card className="shadow-md glassmorphic">
            <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                    <FileText className="mr-2 h-5 w-5" /> Application Overview
                </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div>
                    <p className="text-2xl font-bold text-foreground">{studentData.applicationOverview.totalApplications}</p>
                    <p className="text-xs text-muted-foreground">Total Applications</p>
                </div>
                <div>
                    <p className="text-2xl font-bold text-foreground">{studentData.applicationOverview.inReview}</p>
                    <p className="text-xs text-muted-foreground">In Review</p>
                </div>
                <div>
                    <p className="text-2xl font-bold text-foreground">{studentData.applicationOverview.interviewsScheduled}</p>
                    <p className="text-xs text-muted-foreground">Interviews Scheduled</p>
                </div>
            </CardContent>
        </Card>
    </motion.section>
  );
  
  const CareerAndLearning = () => (
    <motion.div variants={sectionVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card className="shadow-md glassmorphic">
            <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                    <Target className="mr-2 h-5 w-5" /> Career Path
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-foreground">Current Goal: <span className="font-semibold">{studentData.careerPath.currentGoal}</span></p>
                <p className="text-sm text-muted-foreground">Alignment Score: <span className="font-semibold text-green-500">{studentData.careerPath.alignmentScore}</span></p>
            </CardContent>
        </Card>
        <Card className="shadow-md glassmorphic">
            <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                    <BarChart3 className="mr-2 h-5 w-5" /> Recommended Learning
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                {studentData.recommendedLearning.map(item => (
                    <div key={item.id} className="p-2 rounded-md bg-primary/5">
                        <p className="text-sm font-semibold text-foreground">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.source}</p>
                    </div>
                ))}
            </CardContent>
        </Card>
    </motion.div>
  );

  const RecentActivityAndMessages = () => (
     <motion.div variants={sectionVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card className="shadow-md glassmorphic">
            <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                    <Users className="mr-2 h-5 w-5" /> Recent Applications
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 max-h-60 overflow-y-auto">
                {studentData.activeApplications.map(app => (
                    <div key={app.id} className="p-3 rounded-lg bg-background/50 dark:bg-slate-800/40 border border-border">
                        <p className="text-sm font-semibold text-foreground">{app.role} at {app.company}</p>
                        <div className="flex justify-between items-center">
                            <span className={`text-xs px-2 py-0.5 rounded-full ${app.status === "In Review" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100" : "bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-blue-100"}`}>{app.status}</span>
                            <span className="text-xs text-muted-foreground">Applied: {app.appliedOn}</span>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
        <Card className="shadow-md glassmorphic">
            <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                    <MessageSquare className="mr-2 h-5 w-5" /> Messages & Notifications
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 max-h-60 overflow-y-auto">
                {studentData.messagesNotifications.map(msg => (
                    <div key={msg.id} className={`p-3 rounded-lg ${msg.unread ? "bg-primary/10 border-primary/30" : "bg-background/50 dark:bg-slate-800/40 border-border"}`}>
                        <p className={`text-sm font-semibold ${msg.unread ? "text-primary" : "text-foreground"}`}>{msg.type}</p>
                        <p className="text-xs text-muted-foreground">{msg.company} - {msg.time}</p>
                    </div>
                ))}
            </CardContent>
        </Card>
    </motion.div>
  );

  const ProfileSettingsTab = () => (
    <motion.div variants={sectionVariants} className="space-y-6">
      <Card className="glassmorphic">
        <CardHeader><CardTitle className="text-primary">Resume Management</CardTitle></CardHeader>
        <CardContent className="flex flex-col sm:flex-row gap-4 items-center">
          <Button className="w-full sm:w-auto" onClick={() => toast({title: "Upload Clicked!"})}><Upload className="mr-2 h-4 w-4"/> Upload New</Button>
          <Button variant="outline" className="w-full sm:w-auto" onClick={() => toast({title: "Parse Clicked!"})}>Parse Current</Button>
          <Button variant="secondary" className="w-full sm:w-auto" onClick={() => toast({title: "Update Resume Clicked!"})}>Update Resume Details</Button>
        </CardContent>
      </Card>
      <Card className="glassmorphic">
        <CardHeader><CardTitle className="text-primary">Online Presence</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="linkedinUrl">LinkedIn Profile URL</Label>
            <Input id="linkedinUrl" defaultValue={studentData.linkedinProfile} placeholder="Enter your LinkedIn profile URL" />
          </div>
          <div>
            <Label htmlFor="portfolioUrl">Portfolio URL</Label>
            <Input id="portfolioUrl" defaultValue={studentData.portfolioUrl} placeholder="Enter your portfolio URL" />
          </div>
        </CardContent>
      </Card>
       <Card className="glassmorphic">
        <CardHeader><CardTitle className="text-primary">Portfolio Management</CardTitle></CardHeader>
        <CardContent className="flex flex-col sm:flex-row gap-4">
            <Button className="w-full sm:w-auto" onClick={() => toast({title: "Add Projects Clicked!"})}><PlusCircle className="mr-2 h-4 w-4"/> Add Projects</Button>
            <Button variant="outline" className="w-full sm:w-auto" onClick={() => toast({title: "Manage Portfolio Clicked!"})}>Manage Portfolio Items</Button>
        </CardContent>
      </Card>
      <Card className="glassmorphic">
        <CardHeader><CardTitle className="text-primary">Sharing & Visibility</CardTitle></CardHeader>
        <CardContent className="space-y-4">
            <div>
                <Label htmlFor="customShareUrl">Custom Sharing URL</Label>
                <Input id="customShareUrl" defaultValue={studentData.customUrl} placeholder="Enter your custom sharing URL" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button className="w-full sm:w-auto" onClick={() => toast({title: "Gamify Clicked!"})}>Gamify Profile</Button>
                <Button variant="outline" className="w-full sm:w-auto" onClick={() => toast({title: "Edit Visibility Clicked!"})}>Edit Visibility</Button>
                <Button variant="secondary" className="w-full sm:w-auto" onClick={() => {
                    if (navigator.clipboard) {
                      navigator.clipboard.writeText(studentData.customUrl)
                        .then(() => toast({title: "Profile Link Copied!", description: studentData.customUrl}))
                        .catch(err => toast({title: "Copy Failed", description: "Could not copy link.", variant: "destructive"}));
                    } else {
                       toast({title: "Copy Failed", description: "Clipboard not available.", variant: "destructive"});
                    }
                }}><Share2 className="mr-2 h-4 w-4"/> Copy Profile Link</Button>
            </div>
        </CardContent>
        <CardFooter>
            <Button className="w-full" onClick={() => toast({title: "Complete Profile Clicked!"})}>View/Complete Full Profile</Button>
        </CardFooter>
      </Card>
    </motion.div>
  );


  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 bg-gradient-to-br from-slate-100 to-sky-100 dark:from-slate-900 dark:to-sky-950 min-h-screen">
      <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.05 } } }}>
        <ProfileHeader />
        
        <Tabs defaultValue="overview" className="w-full mb-6" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 bg-muted/50 dark:bg-slate-800/50 p-1 rounded-lg">
            <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md">Overview</TabsTrigger>
            <TabsTrigger value="details" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md">Detailed Info</TabsTrigger>
            <TabsTrigger value="activity" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md">Activity</TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md">Settings</TabsTrigger>
          </TabsList>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <TabsContent value="overview" className="mt-4">
                <SkillsAndEducation />
                <ProjectShowcase />
                <ApplicationOverview />
                <CareerAndLearning />
                <RecentActivityAndMessages />
              </TabsContent>

              <TabsContent value="details" className="mt-4">
                <motion.div variants={sectionVariants}>
                  <p className="text-center text-muted-foreground p-8">Detailed Information section coming soon! This will include Industry Interests, Portfolio Links, Availability & Goals, Personality Assessment, Learning Preferences etc.</p>
                </motion.div>
              </TabsContent>

              <TabsContent value="activity" className="mt-4">
                 <motion.div variants={sectionVariants}>
                    <p className="text-center text-muted-foreground p-8">Social Activity and Performance Metrics section coming soon!</p>
                 </motion.div>
              </TabsContent>

              <TabsContent value="settings" className="mt-4">
                <ProfileSettingsTab />
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default StudentProfilePage;