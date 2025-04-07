"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin } from "lucide-react"
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send('service_cmk616t', 'template_nj9dgpf', formData, 'aQMVYIsjSb7eW7KZY')
      .then((response) => {
        console.log('Email successfully sent!', response.status, response.text);
        alert("Thank you for your message! We'll get back to you soon.");
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error('Failed to send email. Error:', err);
        alert("There was an error sending your message. Please try again later.");
      });
  }

  // const handleSelectChange = (value: string) => {
  //   setFormData((prev) => ({ ...prev, serviceType: value }))
  // }

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   console.log("Form submitted:", formData)
  //   // Here you would typically send the data to your backend or a form service
  //   alert("Thank you for your message! We'll get back to you soon.")
  //   setFormData({
  //     name: "",
  //     phone: "",
  //     email: "",
  //     address: "",
  //     message: "",
  //   })
  // }

  return (
    <section id="contact" className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-8">
              Have questions or ready to start your roofing project? Get in touch with our team for a free consultation
              and estimate.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">(+61) 0452-490-089</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">everesttradeservices@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Office</h3>
                  <p className="text-muted-foreground">6/30 North Parade Campsie 2194, NSW Sydney</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                />
              </div>

              <div>
              <label htmlFor="address" className="block text-sm font-medium mb-1">
                  Address
                </label>
                <Input
                  id="address"
                  name="address"
                  type="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Your Address(Street, City, Zip Code)"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your roofing needs"
                  rows={4}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

