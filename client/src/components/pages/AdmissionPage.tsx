import { useState } from 'react';
import { GraduationCap, User, Calendar, Phone, MapPin } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

interface AdmissionPageProps {
  isActive: boolean;
  onNavigate: (pageIndex: number) => void;
}

interface AdmissionForm {
  studentName: string;
  age: string;
  grade: string;
  dateOfBirth: string;
  parentName: string;
  phone: string;
  email: string;
  address: string;
  previousSchool: string;
  additionalInfo: string;
}

export function AdmissionPage({ isActive }: AdmissionPageProps) {
  const { toast } = useToast();

  const form = useForm<AdmissionForm>({
    defaultValues: {
      studentName: '',
      age: '',
      grade: '',
      dateOfBirth: '',
      parentName: '',
      phone: '',
      email: '',
      address: '',
      previousSchool: '',
      additionalInfo: '',
    },
  });

  const admissionMutation = useMutation({
    mutationFn: async (data: AdmissionForm) => {
      const response = await apiRequest('POST', '/api/admission', data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Application Submitted!",
        description: data.message,
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: AdmissionForm) => {
    admissionMutation.mutate(data);
  };

  return (
    <section className="min-h-screen py-20 flex items-center">
      <div className="container mx-auto px-4">
        <div className={`${isActive ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 text-school-blue text-glow">
              Join Our Family
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-electric-blue mx-auto"></div>
            <p className="text-muted-foreground mt-4 text-lg">Admissions Open for Academic Session 2024-25</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Admission Process */}
            <div className="space-y-8">
              <div className="glass-effect school-border rounded-2xl p-8 hover-glow transition-all duration-300">
                <h3 className="font-orbitron text-2xl font-semibold mb-6 text-peach">Admission Process</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-electric-blue text-cosmic flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Application Form</h4>
                      <p className="text-muted-foreground text-sm">
                        Fill out the admission form with student and parent details.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-neon-purple text-cosmic flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Document Submission</h4>
                      <p className="text-muted-foreground text-sm">
                        Submit required documents along with the completed application form.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-neon-cyan text-cosmic flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Assessment</h4>
                      <p className="text-muted-foreground text-sm">
                        Age-appropriate assessment and interaction with the child.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-electric-blue text-cosmic flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Admission Confirmation</h4>
                      <p className="text-muted-foreground text-sm">
                        Fee payment and admission confirmation upon selection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-effect school-border rounded-2xl p-8 hover-glow transition-all duration-300">
                <h3 className="font-orbitron text-xl font-semibold mb-4 text-school-blue">Important Dates</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Admission Form Available:</span>
                    <span className="text-peach">February 1, 2024</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Last Date for Submission:</span>
                    <span className="text-school-blue">March 15, 2024</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Assessment Period:</span>
                    <span className="text-green-tea">March 20-25, 2024</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Admission Confirmation:</span>
                    <span className="text-peach">March 30, 2024</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Admission Form */}
            <div className="glass-effect school-border rounded-2xl p-8 hover-glow transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-peach" />
                <h3 className="font-orbitron text-2xl font-semibold text-peach">Admission Application</h3>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="studentName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Student Name *</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="Full Name" 
                              className="bg-dark-glass border-gray-600 text-white focus:border-peach"
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="age"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Age *</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="number"
                              placeholder="Age" 
                              className="bg-dark-glass border-gray-600 text-white focus:border-peach"
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="grade"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Seeking Admission for Grade *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-dark-glass border-gray-600 text-white focus:border-peach">
                                <SelectValue placeholder="Select Grade" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-dark-glass border-gray-600">
                              <SelectItem value="6">Class 6th</SelectItem>
                              <SelectItem value="7">Class 7th</SelectItem>
                              <SelectItem value="8">Class 8th</SelectItem>
                              <SelectItem value="9">Class 9th</SelectItem>
                              <SelectItem value="10">Class 10th</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Date of Birth *</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="date"
                              className="bg-dark-glass border-gray-600 text-white focus:border-peach"
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="parentName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">Parent/Guardian Name *</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="Parent/Guardian Full Name" 
                            className="bg-dark-glass border-gray-600 text-white focus:border-peach"
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Phone Number *</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="tel"
                              placeholder="+91 XXXXX XXXXX" 
                              className="bg-dark-glass border-gray-600 text-white focus:border-peach"
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="email"
                              placeholder="email@example.com" 
                              className="bg-dark-glass border-gray-600 text-white focus:border-peach"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">Residential Address *</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={3}
                            placeholder="Complete residential address" 
                            className="bg-dark-glass border-gray-600 text-white focus:border-peach resize-none"
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="previousSchool"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">Previous School Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="Previous school name (if applicable)" 
                            className="bg-dark-glass border-gray-600 text-white focus:border-peach"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="additionalInfo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">Additional Information</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={3}
                            placeholder="Any additional information you'd like to share..." 
                            className="bg-dark-glass border-gray-600 text-white focus:border-peach resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={admissionMutation.isPending}
                    className="w-full bg-gradient-to-r from-peach to-green-tea text-white font-semibold py-3 hover-glow transition-all duration-300"
                  >
                    {admissionMutation.isPending ? 'Submitting Application...' : 'Submit Admission Application'}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}