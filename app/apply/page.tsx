// app/apply/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Send, 
  Loader2,
  FileText
} from "lucide-react";

export default function ApplyPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    email: "",
    title: "",
    titleOther: "",
    linkedinUrl: "",
    xUrl: "",
    currentLocation: "",
    workingFullTime: "",
    dateOfBirth: "",
    gender: "",
    racialMinority: "",
    racialMinorityOther: "",
    startupName: "",
    websiteUrl: "",
    yearFounded: "",
    problemStatement: "",
    solutionDescription: "",
    isIncorporated: "",
    relevantIndustries: "",
    businessAddress: "",
    restrictedCountries: "",
    productDemoUrl: "",
    teamIntroUrl: "",
    pitchDeckUrl: "",
    hasRevenue: "",
    revenueAmount: "",
    hasFunding: "",
    fundingSource: "",
    fundingAmount: "",
    revenueModel: "",
    targetAudience: "",
    competitors: "",
    competitiveAdvantage: "",
    timing: "",
    customerAcquisition: "",
    nextMilestones: "",
    heardFrom: "",
    programSelection: "",
    agreeTerms: false,
    agreeUpdates: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  // Function to generate formatted text file content
  const generateApplicationText = () => {
    return `
================================================================================
                    THRIVEON ENTREPRENEUR APPLICATION FORM
                            Submission Date: ${new Date().toLocaleString()}
================================================================================

PERSONAL INFORMATION
================================================================================
Full Name: ${formData.firstName} ${formData.middleName} ${formData.lastName}
Phone: ${formData.phone || 'N/A'}
Email: ${formData.email || 'N/A'}
Title: ${formData.title === "Others" ? formData.titleOther : formData.title || 'N/A'}
LinkedIn: ${formData.linkedinUrl || 'N/A'}
X/Twitter: ${formData.xUrl || 'N/A'}
Current Location: ${formData.currentLocation || 'N/A'}
Working Full-time on Startup: ${formData.workingFullTime || 'N/A'}
Date of Birth: ${formData.dateOfBirth || 'N/A'}
Gender: ${formData.gender || 'N/A'}
Racial/Ethnic Minority: ${formData.racialMinority === "Others" ? formData.racialMinorityOther : formData.racialMinority || 'N/A'}

STARTUP INFORMATION
================================================================================
Startup Name: ${formData.startupName || 'N/A'}
Website URL: ${formData.websiteUrl || 'N/A'}
Year Founded: ${formData.yearFounded || 'N/A'}
Problem Statement: ${formData.problemStatement || 'N/A'}
Solution Description: ${formData.solutionDescription || 'N/A'}
Incorporated: ${formData.isIncorporated || 'N/A'}
Industry: ${formData.relevantIndustries || 'N/A'}
Business Address: ${formData.businessAddress || 'N/A'}
Business in Restricted Countries: ${formData.restrictedCountries || 'N/A'}

VIDEO & DECK LINKS
================================================================================
Product Demo Video: ${formData.productDemoUrl || 'N/A'}
Team Introduction Video: ${formData.teamIntroUrl || 'N/A'}
Pitch Deck: ${formData.pitchDeckUrl || 'N/A'}

FINANCIAL INFORMATION
================================================================================
Has Revenue: ${formData.hasRevenue || 'N/A'}
${formData.hasRevenue === "Yes" ? `Revenue (6 months): ${formData.revenueAmount || 'N/A'}` : ''}
Has Funding: ${formData.hasFunding || 'N/A'}
${formData.hasFunding === "Yes" ? `Funding Source: ${formData.fundingSource || 'N/A'}` : ''}
${formData.hasFunding === "Yes" ? `Funding Amount: ${formData.fundingAmount || 'N/A'}` : ''}

BUSINESS STRATEGY
================================================================================
Revenue Model: ${formData.revenueModel || 'N/A'}
Target Audience: ${formData.targetAudience || 'N/A'}
Competitors: ${formData.competitors || 'N/A'}
Competitive Advantage: ${formData.competitiveAdvantage || 'N/A'}
Timing: ${formData.timing || 'N/A'}
Customer Acquisition: ${formData.customerAcquisition || 'N/A'}
Next Milestones: ${formData.nextMilestones || 'N/A'}

PROGRAM INFORMATION
================================================================================
Heard From: ${formData.heardFrom || 'N/A'}
Program Selection: ${formData.programSelection || 'N/A'}

AGREEMENTS
================================================================================
Agrees to Terms: ${formData.agreeTerms ? '✓ Yes' : '✗ No'}
Agrees to Updates: ${formData.agreeUpdates ? '✓ Yes' : '✗ No'}

================================================================================
                          END OF APPLICATION
                          Thank you for applying!
================================================================================
    `;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check if required fields are filled
    if (!formData.agreeTerms) {
      alert("Please agree to the Terms of Service and Privacy Policy to submit your application.");
      setIsSubmitting(false);
      return;
    }

    // Generate the application text
    const applicationText = generateApplicationText();
    
    // Create a blob for the text file
    const blob = new Blob([applicationText], { type: 'text/plain' });
    const fileUrl = URL.createObjectURL(blob);
    
    // Create a temporary link to download the file (backup for user)
    // Then open email with the file
    const subject = encodeURIComponent(`Startup Application: ${formData.startupName || 'New Application'} - ${formData.firstName} ${formData.lastName}`);
    const body = encodeURIComponent(`
Dear ThriveOn Team,

Please find attached the completed application form for ${formData.startupName || 'our startup'}.

Applicant: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

The complete application details are attached as a text file.

Best regards,
${formData.firstName} ${formData.lastName}
    `);
    
    // For email with attachment, we need to use a workaround
    // Since mailto doesn't support attachments directly, we'll provide both options
    
    // Option 1: Download file and inform user to attach it
    const downloadLink = document.createElement('a');
    downloadLink.href = fileUrl;
    downloadLink.download = `ThriveOn_Application_${formData.startupName || 'Startup'}_${formData.firstName}.txt`;
    downloadLink.click();
    
    // Option 2: Open email client with instructions
    setTimeout(() => {
      window.location.href = `mailto:info@ithriveonwisdom.com?subject=${subject}&body=${body}`;
      alert("Application file has been downloaded. Please attach the downloaded file to the email that just opened and click send to complete your application.\n\nIf your email client didn't open, please manually email the downloaded file to info@ithriveonwisdom.com");
    }, 500);
    
    // Cleanup
    setTimeout(() => {
      URL.revokeObjectURL(fileUrl);
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16 md:pt-20">
      
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Business Application Form
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-blue-100 text-lg"
            >
              Join ThriveOn Entrepreneur and take your startup to the next level
            </motion.p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="p-6 md:p-10">
              {/* Personal Information Section */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-600 inline-block">
                  Personal Information
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Firstname</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Middle Name</label>
                    <input
                      type="text"
                      name="middleName"
                      value={formData.middleName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Lastname</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone</label>
                    <div className="flex items-center border border-gray-200 rounded-xl focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                      <span className="px-3 text-gray-500">+234</span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="8000000000"
                        className="flex-1 px-3 py-3 rounded-r-xl outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.doe@gmail.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Title</label>
                    <select
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    >
                      <option value="">Select Title</option>
                      <option value="CEO">CEO</option>
                      <option value="CTO">CTO</option>
                      <option value="COO">COO</option>
                      <option value="Founder">Founder</option>
                      <option value="Co-founder">Co-founder</option>
                      <option value="President">President</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  {formData.title === "Others" && (
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">If Others, specify</label>
                      <input
                        type="text"
                        name="titleOther"
                        value={formData.titleOther}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      />
                    </div>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Linkedin URL</label>
                    <input
                      type="url"
                      name="linkedinUrl"
                      value={formData.linkedinUrl}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">X URL (Twitter)</label>
                    <input
                      type="url"
                      name="xUrl"
                      value={formData.xUrl}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Current Location</label>
                    <input
                      type="text"
                      name="currentLocation"
                      value={formData.currentLocation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Working on your startup full-time?</label>
                    <div className="flex gap-6 mt-2">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="workingFullTime" value="Yes" onChange={handleChange} className="w-4 h-4 text-blue-600" />
                        <span>Yes</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="workingFullTime" value="No" onChange={handleChange} className="w-4 h-4 text-blue-600" />
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Date of Birth</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Gender</label>
                    <div className="flex gap-6 mt-2">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="gender" value="Female" onChange={handleChange} className="w-4 h-4 text-blue-600" />
                        <span>Female</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="gender" value="Male" onChange={handleChange} className="w-4 h-4 text-blue-600" />
                        <span>Male</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    For Non-U.S based founders only: Do you identify as a racial/ethnic minority within your home country?
                  </label>
                  <div className="flex flex-wrap gap-6 mt-2">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="racialMinority" value="Prefer not to disclose" onChange={handleChange} className="w-4 h-4 text-blue-600" />
                      <span>Prefer not to disclose</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="racialMinority" value="Prefer to self-describe" onChange={handleChange} className="w-4 h-4 text-blue-600" />
                      <span>Prefer to self-describe</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="racialMinority" value="Others" onChange={handleChange} className="w-4 h-4 text-blue-600" />
                      <span>Others</span>
                    </label>
                  </div>
                  {formData.racialMinority === "Others" && (
                    <input
                      type="text"
                      name="racialMinorityOther"
                      value={formData.racialMinorityOther}
                      onChange={handleChange}
                      placeholder="Please specify"
                      className="mt-3 w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    />
                  )}
                </div>
              </div>

              {/* Startup Information Section */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-amber-500 inline-block">
                  Startup Information
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Startup Name</label>
                    <input
                      type="text"
                      name="startupName"
                      value={formData.startupName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Website URL</label>
                    <input
                      type="url"
                      name="websiteUrl"
                      value={formData.websiteUrl}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Year Founded</label>
                    <input
                      type="number"
                      name="yearFounded"
                      value={formData.yearFounded}
                      onChange={handleChange}
                      placeholder="2020"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Is your startup incorporated?</label>
                    <div className="flex gap-6 mt-2">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="isIncorporated" value="Yes" onChange={handleChange} className="w-4 h-4 text-blue-600" />
                        <span>Yes</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="isIncorporated" value="No" onChange={handleChange} className="w-4 h-4 text-blue-600" />
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Problem Statement</label>
                  <textarea
                    name="problemStatement"
                    value={formData.problemStatement}
                    onChange={handleChange}
                    rows={3}
                    placeholder="What problem does your startup solve?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Solution Description</label>
                  <textarea
                    name="solutionDescription"
                    value={formData.solutionDescription}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Describe your solution"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Relevant Industries</label>
                    <select
                      name="relevantIndustries"
                      value={formData.relevantIndustries}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    >
                      <option value="">Select Industry</option>
                      <option value="Technology and Software">Technology and Software</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Fintech">Fintech</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Education">Education</option>
                      <option value="CleanTech">CleanTech</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Business Address</label>
                    <input
                      type="text"
                      name="businessAddress"
                      value={formData.businessAddress}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Do you conduct business in restricted countries?</label>
                  <div className="flex gap-6 mt-2">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="restrictedCountries" value="Yes" onChange={handleChange} className="w-4 h-4 text-blue-600" />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="restrictedCountries" value="No" onChange={handleChange} className="w-4 h-4 text-blue-600" />
                      <span>No</span>
                    </label>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Product Demo Video URL</label>
                    <input
                      type="url"
                      name="productDemoUrl"
                      value={formData.productDemoUrl}
                      onChange={handleChange}
                      placeholder="YouTube or Vimeo link"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Team Introduction Video URL</label>
                    <input
                      type="url"
                      name="teamIntroUrl"
                      value={formData.teamIntroUrl}
                      onChange={handleChange}
                      placeholder="YouTube or Vimeo link"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Pitch Deck URL</label>
                    <input
                      type="url"
                      name="pitchDeckUrl"
                      value={formData.pitchDeckUrl}
                      onChange={handleChange}
                      placeholder="Google Drive or Dropbox link"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Financial Information Section */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-green-500 inline-block">
                  Financial Information
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Revenue</label>
                    <div className="flex gap-6 mt-2">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="hasRevenue" value="Yes" onChange={handleChange} className="w-4 h-4 text-blue-600" />
                        <span>Yes</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="hasRevenue" value="No" onChange={handleChange} className="w-4 h-4 text-blue-600" />
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                  {formData.hasRevenue === "Yes" && (
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Revenue for each of the past six months in USD</label>
                      <input
                        type="text"
                        name="revenueAmount"
                        value={formData.revenueAmount}
                        onChange={handleChange}
                        placeholder="e.g., $10,000 per month"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      />
                    </div>
                  )}
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Funding Received</label>
                    <div className="flex gap-6 mt-2">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="hasFunding" value="Yes" onChange={handleChange} className="w-4 h-4 text-blue-600" />
                        <span>Yes</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="hasFunding" value="No" onChange={handleChange} className="w-4 h-4 text-blue-600" />
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                  {formData.hasFunding === "Yes" && (
                    <>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Source</label>
                        <input
                          type="text"
                          name="fundingSource"
                          value={formData.fundingSource}
                          onChange={handleChange}
                          placeholder="e.g., Angel Investors, VC"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Funding amounts in USD</label>
                        <input
                          type="text"
                          name="fundingAmount"
                          value={formData.fundingAmount}
                          onChange={handleChange}
                          placeholder="e.g., $500,000"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Business Strategy Section */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-purple-500 inline-block">
                  Business Strategy
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Revenue Model & Potential</label>
                    <textarea
                      name="revenueModel"
                      value={formData.revenueModel}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Describe how you make money"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Target Audience</label>
                    <textarea
                      name="targetAudience"
                      value={formData.targetAudience}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Who are your customers?"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Competitors</label>
                    <textarea
                      name="competitors"
                      value={formData.competitors}
                      onChange={handleChange}
                      rows={3}
                      placeholder="List your main competitors"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Competitive Advantage</label>
                    <textarea
                      name="competitiveAdvantage"
                      value={formData.competitiveAdvantage}
                      onChange={handleChange}
                      rows={3}
                      placeholder="What makes you unique?"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Timing</label>
                    <textarea
                      name="timing"
                      value={formData.timing}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Why is now the right time for your startup?"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Customer Acquisition Strategy</label>
                    <textarea
                      name="customerAcquisition"
                      value={formData.customerAcquisition}
                      onChange={handleChange}
                      rows={3}
                      placeholder="How will you get customers?"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Next Major Milestones</label>
                    <textarea
                      name="nextMilestones"
                      value={formData.nextMilestones}
                      onChange={handleChange}
                      rows={3}
                      placeholder="What are your goals for the next 6-12 months?"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">How did you hear about ThriveOn Entrepreneur?</label>
                    <select
                      name="heardFrom"
                      value={formData.heardFrom}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    >
                      <option value="">Select</option>
                      <option value="Social media">Social media</option>
                      <option value="Friend/Colleague">Friend/Colleague</option>
                      <option value="Email">Email</option>
                      <option value="Event">Event</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Program Selection</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:bg-gray-50">
                      <input type="radio" name="programSelection" value="Primary Accelerator programme" onChange={handleChange} className="w-4 h-4 text-blue-600" />
                      <span>Primary Accelerator programme</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:bg-gray-50">
                      <input type="radio" name="programSelection" value="Alternative Accelerator programme" onChange={handleChange} className="w-4 h-4 text-blue-600" />
                      <span>Alternative Accelerator programme</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Agreements Section */}
              <div className="mb-8 space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} className="w-5 h-5 mt-0.5 text-blue-600 rounded" />
                  <span className="text-gray-700">Please check the box to agree to ThriveOn Entrepreneur's Terms of Service and Privacy Policy.</span>
                </label>
                
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" name="agreeUpdates" checked={formData.agreeUpdates} onChange={handleChange} className="w-5 h-5 mt-0.5 text-blue-600 rounded" />
                  <span className="text-gray-700">Please check the box if you'd like to receive startup insights, resources, and even invitations from ThriveOn Entrepreneur.</span>
                </label>
              </div>

              {/* Note */}
              <div className="mb-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> All information provided will be kept confidential and used solely for the purpose of evaluating your application for the ThriveOn Entrepreneur program. 
                  Upon submission, a text file will be downloaded containing your application details. Please attach this file to the email that opens and send it to complete your application.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-700 to-blue-600 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Submit Application
                    <FileText className="w-5 h-5" />
                  </>
                )}
              </button>
              
              <p className="text-center text-gray-500 text-sm mt-4">
                Your application will be saved as a text file and attached to an email
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}