import { type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.contactMessages = new Map();
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = { 
      ...insertMessage,
      phone: insertMessage.phone ?? null,
      id,
      createdAt: new Date()
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export const storage = new MemStorage();
