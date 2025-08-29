import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import { promises as fs } from "fs";
import { join } from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! We will get back to you soon.",
        id: message.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please check your form data",
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Sorry, there was an error sending your message. Please try again later." 
        });
      }
    }
  });

  // Get contact messages (for admin use)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ 
        success: false, 
        message: "Error fetching messages" 
      });
    }
  });

  // Admission form submission endpoint
  const admissionSchema = z.object({
    studentName: z.string().min(1, "Student name is required"),
    age: z.string().min(1, "Age is required"),
    grade: z.string().min(1, "Grade is required"),
    dateOfBirth: z.string().min(1, "Date of birth is required"),
    parentName: z.string().min(1, "Parent name is required"),
    phone: z.string().min(1, "Phone number is required"),
    email: z.string().email().optional().or(z.literal('')),
    address: z.string().min(1, "Address is required"),
    previousSchool: z.string().optional(),
    additionalInfo: z.string().optional(),
  });

  app.post("/api/admission", async (req, res) => {
    try {
      const validatedData = admissionSchema.parse(req.body);
      
      // Create admission record with timestamp
      const timestamp = new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      
      const admissionRecord = `
=== ADMISSION APPLICATION ===
Submission Date: ${timestamp}
Student Name: ${validatedData.studentName}
Age: ${validatedData.age}
Grade: ${validatedData.grade}
Date of Birth: ${validatedData.dateOfBirth}
Parent/Guardian: ${validatedData.parentName}
Phone: ${validatedData.phone}
Email: ${validatedData.email || 'Not provided'}
Address: ${validatedData.address}
Previous School: ${validatedData.previousSchool || 'Not provided'}
Additional Information: ${validatedData.additionalInfo || 'None'}
=============================

`;
      
      // Append to admission.txt file
      const admissionFilePath = join(process.cwd(), 'admission.txt');
      await fs.appendFile(admissionFilePath, admissionRecord);
      
      res.json({ 
        success: true, 
        message: "Admission application submitted successfully! We will contact you soon.",
        timestamp 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please check all required fields",
          errors: error.errors 
        });
      } else {
        console.error("Admission form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Sorry, there was an error submitting your application. Please try again later." 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
