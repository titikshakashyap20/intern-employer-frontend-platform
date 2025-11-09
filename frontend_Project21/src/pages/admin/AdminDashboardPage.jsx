import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Users, Briefcase, BarChart2, Settings, ShieldCheck, Search, Filter, PlusCircle, Bell, Power, Trash2, Edit3, ChevronDown, FileText, MessageSquare, Database, Activity, Eye
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4, ease: "easeOut" }
  })
};

const AdminDashboardPage = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { id: 1, title: 'Total Users', value: '24,531', icon: <Users className="h-7 w-7 text-primary" />, trend: '+120 this week' },
    { id: 2, title: 'Active Jobs', value: '1,234', icon: <Briefcase className="h-7 w-7 text-green-500" />, trend: '+50 new' },
    { id: 3, title: 'Pending Approvals', value: '89', icon: <ShieldCheck className="h-7 w-7 text-yellow-500" />, trend: 'High priority' },
    { id: 4, title: 'Reports Generated', value: '45', icon: <FileText className="h-7 w-7 text-indigo-500" />, trend: 'Updated daily' },
  ];
  
  const usersData = [
    { id: 'usr_001', name: 'John Doe', email: 'john.doe@example.com', role: 'Student', status: 'Active', lastLogin: '2025-05-30', verified: true },
    { id: 'usr_002', name: 'Jane Smith (Innovatech)', email: 'jane.smith@innovatech.com', role: 'Employer', status: 'Active', lastLogin: '2025-05-29', verified: true },
    { id: 'usr_003', name: 'Tech Solutions Inc.', email: 'hr@techsolutions.com', role: 'Employer', status: 'Pending Verification', lastLogin: '2025-05-28', verified: false },
    { id: 'usr_004', name: 'Alice Wonderland', email: 'alice.w@example.com', role: 'Student', status: 'Suspended', lastLogin: '2025-05-15', verified: true },
  ];

  const systemConfig = {
    maintenanceMode: false,
    userRegistration: true,
    aiMatchingThreshold: 75,
    dataRetentionDays: 90,
    twoFactorAuth: 'Enabled',
    emailSettings: 'Configured (SMTP)',
    securityLevel: 'High'
  };

  const PlatformAnalytics = () => (
    <Card className="glassmorphic col-span-1 lg:col-span-2">
        <CardHeader>
            <CardTitle className="text-primary flex items-center"><BarChart2 className="mr-2 h-5 w-5" /> Platform Analytics</CardTitle>
            <CardDescription>Key metrics and user engagement trends.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Label>User Engagement Chart</Label>
                    <div className="h-40 bg-muted/50 dark:bg-slate-800/40 rounded-md flex items-center justify-center text-muted-foreground text-sm">
                        [User Engagement Chart Placeholder]
                    </div>
                </div>
                <div>
                    <Label>Conversion Funnel</Label>
                    <div className="h-40 bg-muted/50 dark:bg-slate-800/40 rounded-md flex items-center justify-center text-muted-foreground text-sm">
                        [Conversion Funnel Placeholder]
                    </div>
                </div>
            </div>
             <div>
                <Label>System Performance</Label>
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">CPU Usage</span>
                        <span className="text-sm font-semibold">45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Memory Usage</span>
                        <span className="text-sm font-semibold">62%</span>
                    </div>
                    <Progress value={62} className="h-2" />
                </div>
            </div>
        </CardContent>
    </Card>
  );
  
  const UserManagementTab = () => (
    <motion.div variants={itemVariants} className="space-y-6">
      <Card className="glassmorphic">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-primary">User List</CardTitle>
          <div className="flex items-center gap-2">
            <Input placeholder="Search users..." className="w-auto text-sm" />
            <Button variant="outline" size="sm"><Filter className="mr-1 h-4 w-4" /> Filter</Button>
            <Button size="sm" onClick={() => toast({title: "Add User Clicked!"})}><PlusCircle className="mr-1 h-4 w-4" /> Add User</Button>
          </div>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="min-w-full divide-y divide-border dark:divide-slate-700">
            <thead className="bg-muted/50 dark:bg-slate-800/40">
              <tr>
                <th className="px-4 py-2.5 text-left text-xs font-medium text-muted-foreground uppercase">User</th>
                <th className="px-4 py-2.5 text-left text-xs font-medium text-muted-foreground uppercase">Role</th>
                <th className="px-4 py-2.5 text-left text-xs font-medium text-muted-foreground uppercase">Status</th>
                <th className="px-4 py-2.5 text-left text-xs font-medium text-muted-foreground uppercase">Last Login</th>
                <th className="px-4 py-2.5 text-left text-xs font-medium text-muted-foreground uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-background divide-y divide-border dark:divide-slate-700">
              {usersData.map(user => (
                <tr key={user.id} className="hover:bg-muted/20 dark:hover:bg-slate-800/60 transition-colors">
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="text-sm font-medium text-foreground">{user.name}</div>
                    <div className="text-xs text-muted-foreground">{user.email}</div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-muted-foreground">{user.role}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${user.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100' : 
                       user.status === 'Pending Verification' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100' :
                       'bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-100'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-muted-foreground">{user.lastLogin}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium space-x-1">
                    <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => toast({title: `Viewing ${user.name}`})}><Eye className="h-4 w-4 text-blue-500"/></Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => toast({title: `Editing ${user.name}`})}><Edit3 className="h-4 w-4 text-yellow-500"/></Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => toast({title: `Deleting ${user.name}`, variant: "destructive"})}><Trash2 className="h-4 w-4 text-red-500"/></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </motion.div>
  );
  
  const SystemConfigurationTab = () => (
    <motion.div variants={itemVariants} className="space-y-6">
        <Card className="glassmorphic">
            <CardHeader><CardTitle className="text-primary">System Settings</CardTitle></CardHeader>
            <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="maintenanceMode" checked={systemConfig.maintenanceMode} onCheckedChange={(checked) => toast({title: `Maintenance Mode: ${checked}`})}/>
                        <Label htmlFor="maintenanceMode" className="text-sm font-medium">Enable Maintenance Mode</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="userRegistration" checked={systemConfig.userRegistration} onCheckedChange={(checked) => toast({title: `User Registration: ${checked}`})}/>
                        <Label htmlFor="userRegistration" className="text-sm font-medium">Allow New User Registrations</Label>
                    </div>
                </div>
                <div>
                    <Label htmlFor="aiMatchingThreshold">AI Matching Threshold ({systemConfig.aiMatchingThreshold}%)</Label>
                    <Input type="range" id="aiMatchingThreshold" min="50" max="100" defaultValue={systemConfig.aiMatchingThreshold} className="mt-1"/>
                </div>
                <div>
                    <Label htmlFor="dataRetention">Data Retention Policy (Days)</Label>
                    <Input type="number" id="dataRetention" defaultValue={systemConfig.dataRetentionDays} className="mt-1"/>
                </div>
                 <Button onClick={() => toast({title: "System Settings Saved!"})}>Save Settings</Button>
            </CardContent>
        </Card>
        <Card className="glassmorphic">
            <CardHeader><CardTitle className="text-primary">Security & Backup</CardTitle></CardHeader>
            <CardContent className="space-y-4">
                <p className="text-sm">Two-Factor Authentication: <span className="font-semibold text-green-500">{systemConfig.twoFactorAuth}</span></p>
                <p className="text-sm">Email Settings: <span className="font-semibold">{systemConfig.emailSettings}</span></p>
                <p className="text-sm">Current Security Level: <span className="font-semibold text-primary">{systemConfig.securityLevel}</span></p>
                <div className="flex gap-2">
                    <Button variant="outline" onClick={() => toast({title: "Backup Initiated!"})}><Database className="mr-2 h-4 w-4"/> Initiate Backup</Button>
                    <Button variant="outline" onClick={() => toast({title: "Security Scan Started!"})}><ShieldCheck className="mr-2 h-4 w-4"/> Run Security Scan</Button>
                </div>
            </CardContent>
        </Card>
    </motion.div>
  );
  
  const OverviewTab = () => (
    <motion.div variants={itemVariants} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.custom custom={index} variants={itemVariants} key={stat.id}>
            <Card className="shadow-lg glassmorphic hover:shadow-primary/10 transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{stat.trend}</p>
              </CardContent>
            </Card>
          </motion.custom>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <PlatformAnalytics />
        <Card className="glassmorphic">
          <CardHeader>
              <CardTitle className="text-primary flex items-center"><Activity className="mr-2 h-5 w-5"/> Recent Activity</CardTitle>
              <CardDescription>Live feed of important platform events.</CardDescription>
          </CardHeader>
          <CardContent className="h-80 overflow-y-auto space-y-3">
              {/* Placeholder for activity items */}
              {[...Array(5)].map((_, i) => (
                  <div key={i} className="p-3 bg-muted/30 dark:bg-slate-800/40 rounded-md text-xs">
                      <p className="font-semibold text-foreground">New user 'student_{i+1}' signed up.</p>
                      <p className="text-muted-foreground">{i*5 + 2} minutes ago</p>
                  </div>
              ))}
              <div className="p-3 bg-yellow-500/10 dark:bg-yellow-600/20 rounded-md text-xs">
                  <p className="font-semibold text-yellow-700 dark:text-yellow-300">User 'employer_X' reported an issue.</p>
                  <p className="text-yellow-600 dark:text-yellow-400">30 minutes ago</p>
              </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );


  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 bg-gradient-to-br from-slate-100 to-sky-100 dark:from-slate-900 dark:to-sky-950 min-h-screen">
      <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.05 } } }}>
        <motion.div variants={itemVariants} className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">System Administrator</h1>
            <p className="text-md text-muted-foreground">Platform Overview & Management Console</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm"><Bell className="h-4 w-4"/></Button>
            <Button variant="outline" size="sm" onClick={() => toast({title: "Logging out...", variant: "destructive"})}><Power className="h-4 w-4"/></Button>
          </div>
        </motion.div>

        <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 bg-muted/50 dark:bg-slate-800/50 p-1 rounded-lg mb-6">
            <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md">Overview</TabsTrigger>
            <TabsTrigger value="userManagement" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md">User Management</TabsTrigger>
            <TabsTrigger value="contentManagement" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md">Content Management</TabsTrigger>
            <TabsTrigger value="systemConfiguration" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md">System Configuration</TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md">Analytics & Reports</TabsTrigger>
          </TabsList>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <TabsContent value="overview"><OverviewTab /></TabsContent>
              <TabsContent value="userManagement"><UserManagementTab /></TabsContent>
              <TabsContent value="contentManagement">
                <motion.div variants={itemVariants}>
                  <Card className="glassmorphic"><CardHeader><CardTitle>Content Management</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Job Postings, Resumes, Platform Content Moderation will be here.</p></CardContent></Card>
                </motion.div>
              </TabsContent>
              <TabsContent value="systemConfiguration"><SystemConfigurationTab /></TabsContent>
              <TabsContent value="analytics">
                <motion.div variants={itemVariants}>
                  <Card className="glassmorphic"><CardHeader><CardTitle>Analytics & Reports</CardTitle></CardHeader><CardContent><p className="text-muted-foreground">Detailed platform analytics, custom report generation will be here.</p></CardContent></Card>
                </motion.div>
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default AdminDashboardPage;