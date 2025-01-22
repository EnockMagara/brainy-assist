import Image from "next/image"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/Navigation"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to BrainyAssist</h1>
          <p className="text-xl text-gray-600 mb-8">
            Your Trusted Partner for Academic Writing, Content Creation, and Virtual Assistance
          </p>
          <p className="text-lg text-gray-600 mb-8">
            At BrainyAssist, we know that every individual and business has unique needs. Whether you're a student
            looking for academic support, a business needing engaging content, or an entrepreneur needing assistance
            with your day-to-day tasks, we're here to make your life easier. Our team is dedicated to offering
            personalized, high-quality services that help you focus on what really matters.
          </p>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Academic Writing</h3>
                <p className="mb-4">
                  We understand the challenges that come with academic work. Whether you're writing a research paper,
                  preparing for exams, or working on your thesis, we've got your back. Our academic writers are not only
                  experts in their fields but also passionate about helping you succeed.
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Research Papers</li>
                  <li>Essays & Assignments</li>
                  <li>Theses & Dissertations</li>
                  <li>Literature Reviews</li>
                  <li>Editing & Proofreading</li>
                  <li>Citations in APA, MLA, Chicago, and more</li>
                </ul>
                <p>
                  We take pride in producing original, well-researched content that's tailored to your academic
                  requirements. Deadlines are important to us, and we ensure your work is delivered on time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Content Writing</h3>
                <p className="mb-4">
                  Creating content that resonates with your audience is key to growing your business. Whether it's a
                  blog, product description, or social media post, we specialize in writing content that speaks directly
                  to your readers.
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Blog Posts & Articles</li>
                  <li>Website Content</li>
                  <li>Product Descriptions</li>
                  <li>Social Media Content</li>
                  <li>Newsletters & Email Campaigns</li>
                  <li>SEO Writing</li>
                </ul>
                <p>
                  We don't just write; we craft content that engages and builds lasting relationships with your
                  audience. Plus, we optimize everything for search engines to make sure your content gets the attention
                  it deserves.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Virtual Assistance</h3>
                <p className="mb-4">
                  Time is precious, and as your business grows, so do the tasks on your plate. Let us take care of the
                  details, so you can focus on what matters most. Our virtual assistants are experienced professionals
                  who can help with:
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Calendar & Email Management</li>
                  <li>Data Entry & CRM Management</li>
                  <li>Social Media Scheduling & Management</li>
                  <li>Travel Planning & Booking</li>
                  <li>Research & Report Preparation</li>
                  <li>Customer Support</li>
                </ul>
                <p>
                  With our virtual assistance, you'll find more time in your day to focus on growing your business or
                  pursuing your passions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose-us" className="py-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Why Choose Us?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold">Experienced Professionals</h3>
                <p>Our team is made up of skilled writers and virtual assistants who are experts in their fields.</p>
              </div>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold">Dependable & Timely</h3>
                <p>
                  We know how important deadlines are, and we pride ourselves on delivering work that meets your
                  expectations on time.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold">Affordable, Transparent Pricing</h3>
                <p>
                  Quality doesn't have to come at a high cost. Our services are competitively priced to give you the
                  best value.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold">Personalized Approach</h3>
                <p>We take the time to understand your specific needs and tailor our services to meet them.</p>
              </div>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold">Confidentiality Guaranteed</h3>
                <p>Your privacy is important to us. You can trust that your information is safe with us.</p>
              </div>
            </li>
          </ul>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">What Our Clients Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <p className="mb-4">
                  "The team at BrainyAssist helped me with my dissertation, and I couldn't be more grateful. They really
                  took the time to understand my topic and delivered a paper that exceeded my expectations!"
                </p>
                <p className="font-semibold">Emma L. – Graduate Student</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="mb-4">
                  "I've been working with BrainyAssist for all my content needs, and the results speak for themselves.
                  Their blog posts and social media content have helped grow my business online!"
                </p>
                <p className="font-semibold">Mark T. – Small Business Owner</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="mb-4">
                  "As an entrepreneur, I wear many hats. Having BrainyAssist handle my administrative tasks has been a
                  game changer. I'm more focused and productive than ever."
                </p>
                <p className="font-semibold">Sophia R. – Entrepreneur</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Let's Get Started Section */}
        <section className="py-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Let's Get Started!</h2>
          <p className="text-xl mb-8">
            Are you ready to take your academic projects, business content, or daily tasks to the next level? We'd love
            to help! At BrainyAssist, we're here to provide the support you need, tailored to your specific goals.
          </p>
          <p className="text-xl mb-8">
            Contact us today to see how we can make your life a little easier and more productive.
          </p>
          <Button size="lg" asChild>
            <a href="#contact">Contact Us</a>
          </Button>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">Email: [Your Email]</p>
              <p className="mb-4">Phone: [Your Phone Number]</p>
              <p className="mb-4">Address: [Your Address]</p>
              <div>
                <p className="mb-2">Follow Us:</p>
                <div className="flex space-x-4">
                  {/* Replace # with actual social media links */}
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                ></textarea>
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center">&copy; 2025 BrainyAssist. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

