'use client'

import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, User, Check } from 'lucide-react';
import { Breadcrumb } from '@/components/breadcrumb';
import { emailAdmin, generateEmailBody } from '@/lib/utils';

const ContactPage = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, subject, message } = formValues;

    // Template email
    const body = generateEmailBody(name, email, subject, message);

    // Buat mailto link
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAdmin}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Arahkan ke Gmail
    window.open(mailtoLink, '_blank');

    // Reset form (jika perlu)
    setFormValues({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    setIsSubmitted(true);
    // Reset form setelah menampilkan sukses
    setTimeout(() => {
      setIsSubmitted(false);
      setFormValues({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-teal-50 text-gray-800 font-sans">
      {/* Breadcrumb */}
      <Breadcrumb current="Kontak" />

      {/* Header */}
      <header className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Kontak Kami</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Kami sangat menghargai setiap masukan dari Anda. Jika ada pertanyaan, saran membangun, atau Anda tertarik untuk berkolaborasi dalam pengembangan BIOWEB, silakan hubungi kami.
          </p>
        </div>
      </header>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Contact Information */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-6 text-white">
                  <h2 className="text-2xl font-bold mb-4">Informasi Kontak</h2>
                  <p className="text-teal-50">
                    Tim pengembang BIOWEB siap membantu Anda dengan informasi
                    lebih lanjut seputar media pembelajaran ini.
                  </p>
                </div>

                <div className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-teal-700" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-semibold text-gray-500 mb-1">Email</h3>
                        <p className="text-gray-800">222154088@student.unsil.ac.id</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-teal-700" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-semibold text-gray-500 mb-1">Telepon</h3>
                        <p className="text-gray-800">+62 812-8438-1915</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-teal-700" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-semibold text-gray-500 mb-1">Alamat</h3>
                        <p className="text-gray-800">
                          Fakultas Keguruan dan Ilmu Pendidikan<br />
                          Universitas Pendidikan Indonesia<br />
                          Jalan Siliwangi No. 24, Kahuripan, Kota Tasikmalaya 46115
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <h3 className="text-lg font-semibold mb-4">Pengembang Media</h3>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-teal-700" />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium">Elisa Nuramanah</h4>
                        <p className="text-sm text-gray-600">Mahasiswa Pendidikan Biologi</p>
                        <p className="text-sm text-gray-600">NIM: 222154088</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Formulir Umpan Balik</h2>

                {isSubmitted ? (
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100 flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-green-700" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-green-800">Pesan Terkirim!</h3>
                      <p className="text-green-700">
                        Terima kasih atas umpan balik Anda. Kami akan segera meninjau dan merespons pesan Anda.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formValues.name}
                            onChange={handleChange}
                            className="pl-10 pr-4 w-full py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                            placeholder="Masukkan nama lengkap"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Alamat Email</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                            className="pl-10 pr-4 w-full py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                            placeholder="email@contoh.com"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subjek</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formValues.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Subjek pesan"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Pesan</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formValues.message}
                        onChange={handleChange}
                        rows={5}
                        className="px-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Tuliskan pesan, pertanyaan, atau umpan balik Anda di sini..."
                        required
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Kirim Pesan
                      </button>
                    </div>
                  </form>
                )}

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-lg font-semibold mb-3">Jenis Umpan Balik</h3>
                  <p className="text-gray-600 mb-4">
                    Kami menerima berbagai jenis umpan balik untuk meningkatkan kualitas media pembelajaran:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Koreksi materi atau konten',
                      'Saran peningkatan tampilan',
                      'Laporan bug atau error',
                      'Penambahan fitur baru',
                      'Pertanyaan terkait materi',
                      'Kolaborasi pengembangan'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;