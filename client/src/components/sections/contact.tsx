import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { apiRequest } from '@/lib/queryClient';
import { insertContactMessageSchema, type InsertContactMessage } from '@shared/schema';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

export function ContactSection() {
  const { ref, hasIntersected } = useIntersectionObserver();
  const { toast } = useToast();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent!",
        description: data.message,
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  return (
    <section 
      id="contact" 
      ref={ref}
      className={`py-20 ${hasIntersected ? 'section-reveal revealed' : 'section-reveal'}`}
      data-testid="contact-section"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 text-electric-blue text-glow">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-electric-blue to-neon-cyan mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-effect neon-border rounded-2xl p-8 hover-glow transition-all duration-300">
              <h3 className="font-orbitron text-2xl font-semibold mb-6 text-neon-cyan">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-electric-blue mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-2">Address</h4>
                    <p className="text-gray-300">Teliwara, Shahdara, Delhi – 110032</p>
                    <p className="text-gray-400 text-sm">(Near Durga Mandir / Teliwara Chowk)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-8 h-8 text-neon-purple mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-2">Phone</h4>
                    <p className="text-gray-300">+91 11 22393033</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-8 h-8 text-neon-cyan mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-2">Email</h4>
                    <p className="text-gray-300">shahdrateliwara@yahoo.com</p>
                    <p className="text-gray-300">1001151hos@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-effect neon-border rounded-2xl p-8 hover-glow transition-all duration-300">
              <h3 className="font-orbitron text-xl font-semibold mb-4 text-electric-blue">School Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Monday - Friday:</span>
                  <span className="text-white">8:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Saturday:</span>
                  <span className="text-white">8:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunday:</span>
                  <span className="text-neon-purple">Closed</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-effect neon-border rounded-2xl p-8 hover-glow transition-all duration-300">
            <h3 className="font-orbitron text-2xl font-semibold mb-6 text-neon-purple">Send Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="Your Name" 
                          className="bg-dark-glass border-gray-600 text-white focus:border-electric-blue"
                          data-testid="input-name"
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
                      <FormLabel className="text-gray-300">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email"
                          placeholder="your.email@example.com" 
                          className="bg-dark-glass border-gray-600 text-white focus:border-electric-blue"
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="tel"
                          placeholder="+91 XXXXX XXXXX" 
                          className="bg-dark-glass border-gray-600 text-white focus:border-electric-blue"
                          data-testid="input-phone"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Subject</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger 
                            className="bg-dark-glass border-gray-600 text-white focus:border-electric-blue"
                            data-testid="select-subject"
                          >
                            <SelectValue placeholder="Select Subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-dark-glass border-gray-600">
                          <SelectItem value="admission">Admission Inquiry</SelectItem>
                          <SelectItem value="general">General Information</SelectItem>
                          <SelectItem value="complaint">Complaint/Feedback</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={4}
                          placeholder="Your message here..." 
                          className="bg-dark-glass border-gray-600 text-white focus:border-electric-blue resize-none"
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={contactMutation.isPending}
                  className="w-full bg-gradient-to-r from-electric-blue to-neon-purple text-white font-semibold py-3 hover-glow transition-all duration-300"
                  data-testid="button-submit"
                >
                  {contactMutation.isPending ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-16">
          <div className="glass-effect neon-border rounded-2xl p-8 hover-glow transition-all duration-300">
            <h3 className="font-orbitron text-2xl font-semibold mb-6 text-neon-cyan text-center">Find Us Here</h3>
            <div className="aspect-video bg-dark-glass rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-electric-blue mb-4 mx-auto" />
                <p className="text-gray-300">Interactive Map</p>
                <p className="text-gray-400 text-sm">Teliwara, Shahdara, Delhi - 110032</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
