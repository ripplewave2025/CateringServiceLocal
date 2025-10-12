import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    numGuests: '',
    eventType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventDate: '',
          numGuests: '',
          eventType: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-6 lg:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Contact Us & Book Your Event</h1>
      </div>

      <div className="relative z-[-1] flex flex-col place-items-center text-center max-w-3xl mb-16">
        <p className="text-lg leading-relaxed text-gray-700">
          Have a question, need a custom quote, or ready to book our catering services for your event in Darjeeling, Sikkim, Siliguri, or neighboring areas? Fill out the form below or reach us directly!
        </p>
      </div>

      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-xl mb-16">
        <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">Get a Free Quote or Book Now</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="eventDate" className="block text-gray-700 text-sm font-bold mb-2">Preferred Event Date</label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="numGuests" className="block text-gray-700 text-sm font-bold mb-2">Number of Guests</label>
            <input
              type="number"
              id="numGuests"
              name="numGuests"
              value={formData.numGuests}
              onChange={handleChange}
              min="1"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="eventType" className="block text-gray-700 text-sm font-bold mb-2">Type of Event</label>
            <select
              id="eventType"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select an Event Type</option>
              <option value="wedding">Wedding</option>
              <option value="corporate">Corporate Event</option>
              <option value="privateParty">Private Party</option>
              <option value="socialGathering">Social Gathering</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Your Message / Special Requests</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 w-full"
          >
            {isSubmitting ? 'Sending...' : 'Send Inquiry'}
          </button>
          {submitStatus === 'success' && (
            <p className="text-green-600 text-center mt-4">Your inquiry has been sent successfully! We will get back to you shortly.</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-600 text-center mt-4">There was an error sending your inquiry. Please try again or contact us directly.</p>
          )}
        </form>
      </div>

      <section className="w-full max-w-3xl bg-gray-50 p-8 rounded-lg shadow-inner text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Direct Contact Information</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-2">
          If you prefer, you can also reach us directly via:
        </p>
        <ul className="text-xl font-medium text-gray-800 space-y-2">
          <li>Email: <a href="mailto:info@darjeelingcatering.com" className="text-blue-600 hover:underline">info@darjeelingcatering.com</a></li>
          <li>Phone: <a href="tel:+911234567890" className="text-blue-600 hover:underline">+91 12345 67890</a></li>
          <li>Address: [Your Address Here], Darjeeling, Sikkim, Siliguri, and neighboring areas</li>
        </ul>
      </section>
    </main>
  );
}
