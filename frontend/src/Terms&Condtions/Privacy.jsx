import React from "react";
import { Link } from "react-router-dom";
import "./Privacy.css";
import MetaData from "../component/layouts/MataData/MataData";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <MetaData title={"Privacy Policy"} />
      <div className="container_">
        <h1>Privacy Policy of Darupani</h1>
        <p style={{ fontSize: "16px", fontWeight: "600" }}>
          Effective Date: 03-06-2025
        </p>
        <p>
          At Darupani, your privacy is a priority. We are committed to
          safeguarding the personal information of our customers and ensuring
          transparency in how your data is collected, used, and shared. This
          Privacy Policy outlines our practices for data collection and
          protection when you use our website and services. By accessing or
          using Darupani, you agree to the terms described below.
        </p>

        <h2>1. Information We Collect</h2>

        <h3>1.1 Personal Information:</h3>
        <p>
          We may collect the following personal information when you interact
          with our platform:
        </p>
        <ul>
          <li>Full name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Delivery address</li>
          <li>Billing details (if applicable)</li>
          <li>Date of birth (to verify legal drinking age)</li>
        </ul>
        <p>
          This information is collected when you register, place an order,
          subscribe to offers, or contact our support team.
        </p>

        <h3>1.2 Non-Personal Information:</h3>
        <p>
          We also automatically collect certain technical information to improve
          our services:
        </p>
        <ul>
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Device type and operating system</li>
          <li>Referring website or pages visited</li>
          <li>Interaction with our site features (e.g., clicks, scrolls)</li>
        </ul>

        <h2>2. How We Use Your Information</h2>

        <h3>2.1 Personal Information:</h3>
        <p>We may use the personal information we collect to:</p>
        <ul>
          <li>Process and fulfill your orders</li>
          <li>Provide customer support and respond to inquiries</li>
          <li>
            Send promotional offers, newsletters, and marketing communications
            (opt-out available)
          </li>
          <li>Improve our website, products, and services</li>
          <li>Personalize your experience on our website</li>
          <li>Prevent fraudulent activities and ensure platform security</li>
        </ul>

        <h3>2.2 Non-Personal Information:</h3>
        <p>We may use non-personal information for purposes such as:</p>
        <ul>
          <li>Analyzing trends and user behavior</li>
          <li>Improving website functionality and performance</li>
          <li>Customizing content and advertisements</li>
          <li>Generating aggregated statistical data</li>
        </ul>

        <h2>3. Disclosure of Information</h2>
        <p>We may disclose your information in the following cases:</p>
        <ul>
          <li>With trusted service providers to help operate our business</li>
          <li>To comply with legal requirements or enforce our policies</li>
          <li>During a merger, acquisition, or business transfer</li>
          <li>With your explicit consent or direction</li>
        </ul>

        <h2>4. Security</h2>
        <p>
          We take reasonable measures to protect your data. However, no internet
          transmission or storage method is completely secure. Use our platform
          responsibly.
        </p>

        <h2>5. Children's Privacy</h2>
        <p>
          Darupani is intended only for users 18 years and older. We do not
          knowingly collect data from minors. If we learn we’ve collected
          personal data from someone under 18, we will delete it promptly.
        </p>

        <h2>6. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page and effective immediately. Please review it
          regularly.
        </p>

        <h2>7. Contact Us</h2>
        <p>
          If you have any questions, concerns, or suggestions regarding this
          Privacy Policy, please contact us at:
        </p>
        <ul>
          <li>
            Email: <strong>darupani.delivery@gmail.com</strong>
          </li>
          <li>
            Phone: <strong>9865593158</strong>
          </li>
          {/* <li>Address: <strong>Mandikhatar, Budhanilkantha-09, Kathmandu, Nepal</strong></li> */}
        </ul>

        <p>
          By using the Darupani website and services, you agree to the
          collection, use, and disclosure of your information as described in
          this Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
