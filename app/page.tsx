'use client';

import '@/builder-registry';
import EstatesGallery from '@/components/EstatesGallery/EstatesGallery';
import RetailTrustHeader from '@/components/RetailTrustHeader/RetailTrustHeader';
import EventCard from '@/components/EventCard/EventCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="showcase-header">
        <h1>Component Showcase</h1>
        <p>A storybook of reusable components</p>
      </div>

      <div className="showcase-container">
        <div className="showcase-section">
          <div className="showcase-section-header">
            <h2>Retail Trust Header</h2>
            <p className="showcase-section-description">
              A responsive header component with logo, navigation, search, and helpline information
            </p>
          </div>
          <div className="showcase-component-wrapper showcase-header-wrapper">
            <RetailTrustHeader />
          </div>
        </div>

        <div className="showcase-section">
          <div className="showcase-section-header">
            <h2>Event Card</h2>
            <p className="showcase-section-description">
              A flexible event card component that displays event information with an image, details, and call-to-action
            </p>
          </div>
          <div className="showcase-component-wrapper showcase-event-grid">
            <EventCard
              title="Annual Wellbeing Conference 2024"
              date="March 15, 2024"
              time="9:00 AM - 5:00 PM"
              location="London Convention Centre"
              description="Join us for our flagship annual conference featuring industry experts, networking opportunities, and practical workshops on retail employee wellbeing."
              imageUrl="https://images.unsplash.com/photo-1540575467063-178f50002cbc?w=500&h=300&fit=crop"
              imageAlt="Conference hall with attendees"
              ctaText="Register Now"
              ctaLink="#register"
              category="Conference"
            />
            <EventCard
              title="Mental Health Workshop"
              date="February 28, 2024"
              time="2:00 PM - 4:00 PM"
              location="Virtual Event"
              description="A practical workshop exploring mental health awareness and coping strategies for retail professionals."
              imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop"
              imageAlt="Workshop participants in discussion"
              ctaText="Learn More"
              ctaLink="#workshop"
              category="Workshop"
            />
            <EventCard
              title="Community Support Fair"
              date="March 5, 2024"
              time="10:00 AM - 2:00 PM"
              location="Various Locations"
              description="Meet with our support teams and local community partners. Free resources and consultations available."
              imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop"
              imageAlt="Community fair booth"
              ctaText="Find a Location"
              ctaLink="#locations"
              category="Community"
            />
          </div>
        </div>

        <div className="showcase-section">
          <div className="showcase-section-header">
            <h2>Estates Gallery</h2>
            <p className="showcase-section-description">
              A horizontal scrollable gallery showcasing supported living estates with images and titles
            </p>
          </div>
          <div className="showcase-component-wrapper">
            <EstatesGallery />
          </div>
        </div>
      </div>

      <style jsx>{`
        .showcase-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 60px 20px;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .showcase-header h1 {
          font-size: 48px;
          font-weight: 800;
          margin: 0 0 12px 0;
          letter-spacing: -0.02em;
        }

        .showcase-header p {
          font-size: 18px;
          margin: 0;
          opacity: 0.95;
          font-weight: 500;
        }

        .showcase-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 60px 20px;
        }

        .showcase-section {
          margin-bottom: 80px;
        }

        .showcase-section-header {
          margin-bottom: 40px;
          padding: 0 20px;
        }

        .showcase-section-header h2 {
          font-size: 32px;
          font-weight: 700;
          margin: 0 0 12px 0;
          color: #1a202c;
          letter-spacing: -0.01em;
        }

        .showcase-section-description {
          font-size: 16px;
          color: #718096;
          margin: 0;
          max-width: 600px;
          line-height: 1.6;
        }

        .showcase-component-wrapper {
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          overflow: visible;
        }

        .showcase-header-wrapper {
          background: transparent;
          box-shadow: none;
          border-radius: 0;
          overflow: visible;
        }

        .showcase-event-grid {
          background: transparent;
          box-shadow: none;
          border-radius: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          padding: 0;
        }

        .showcase-footer-wrapper {
          background: transparent;
          box-shadow: none;
          border-radius: 0;
        }
      `}</style>
    </div>
  );
}
