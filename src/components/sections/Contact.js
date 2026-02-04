import { Icon } from '@iconify/react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState('');

  const PUBLIC_KEY = '324eWMGX4Bd5DhVsx';
  const SERVICE_ID = 'service_5axbn9b';
  const TEMPLATE_ID = 'template_mpx50mi';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessageStatus('');

    try {
      emailjs.init(PUBLIC_KEY);

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'kexuanlee0709@gmail.com',
      });

      setMessageStatus('✅ Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setMessageStatus('❌ Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="container">
      <h2>Get In Touch</h2>
      <p>Feel free to reach out to me for any inquiries or collaborations.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-wrapper">
            <Icon icon="lets-icons:user" className="form-icon" width="24" height="24" />
            <input type="text" placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-group">
          <div className="input-wrapper">
            <Icon icon="mdi:email-outline" className="form-icon" width="24" height="24" />
            <input type="email" placeholder="Your Email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-group">
          <div className="input-wrapper">
            <Icon icon="mingcute:message-2-line" className="form-icon" width="24" height="24" />
            <textarea placeholder="Your Message" name="message" value={formData.message} onChange={handleChange} rows="5" required></textarea>
          </div>
        </div>

        <button type="submit" className="btn-send" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>

        {messageStatus && <div className="form-message">{messageStatus}</div>}
      </form>

      <div className="contact-divider"></div>

      <p className="social-heading">or connect with me on social media</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/ke-xuan-lee-070bb9338/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
          <Icon icon="mdi:linkedin" width="28" height="28" />
        </a>
        <a href="mailto:kexuanlee0709@gmail.com" className="social-icon" title="Email">
          <Icon icon="mdi:email-outline" width="28" height="28" />
        </a>
        <a href="https://wa.me/94877970" target="_blank" rel="noopener noreferrer" className="social-icon" title="WhatsApp">
          <Icon icon="mdi:whatsapp" width="28" height="28" />
        </a>
        <a href="https://www.instagram.com/k.xuannnn/" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram">
          <Icon icon="mdi:instagram" width="28" height="28" />
        </a>
      </div>
    </section>
  );
}
