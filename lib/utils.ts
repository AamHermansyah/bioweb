// lib/utils.ts
import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateEmailBody = (name: string, email: string, subject: string, message: string): string => {
  return `
━━━━━━━━━━━━━━━━━━━━━━━
📩 *Pesan dari Pengguna BIOWEB*
━━━━━━━━━━━━━━━━━━━━━━━

🔹 *Nama:* ${name}
🔹 *Email:* ${email}
🔹 *Subjek:* ${subject}

📝 *Pesan:*
${message}

Hormat kami,  
${name}
  `;
};

export const emailAdmin = '222154088@student.unsil.ac.id';