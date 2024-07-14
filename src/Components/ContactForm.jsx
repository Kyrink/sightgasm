import React from 'react';

const ContactForm = () => {
    return (
        <form action="https://formspree.io/YOUR_EMAIL" method="POST" className="space-y-4">
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" id="email" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" id="message" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required></textarea>
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">Send</button>
        </form>
    );
};

export default ContactForm;
