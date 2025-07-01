import React from "react";
import "./TermsAndCondtion.css";
import MetaData from "../component/layouts/MataData/MataData";
import TermsImage from "../Image/about/logo.png";

const TermsAndConditionsPage = () => {
  return (
    <div className="terms-container">
      <MetaData title="Terms and Conditions" />
      <img
        src={TermsImage}
        alt="Terms and Conditions"
        className="terms-image"
      />
      {/* <div className="terms-overlay">
        <h1 className="terms-title">TERMS AND CONDITIONS</h1>
      </div> */}
      <div className="terms-content">
        <h1 className="terms-title">TERMS AND CONDITIONS</h1>

        <p>
          Thank you for choosing Darupani! We appreciate your trust in our
          online liquor delivery service. Please read these Terms and Conditions
          carefully before using our website or placing an order.
        </p>
        <p>
          By accessing or using Darupani, you agree to comply with the following
          Terms and Conditions, our Privacy Policy, and any additional
          guidelines or rules applicable to our services.
        </p>

        <h2>1. Acceptance of These Terms</h2>
        <p>
          By using Darupani's services or placing an order, you (“Customer”)
          agree to these Terms and Conditions. These terms govern your
          relationship with Darupani (“we”, “our”, “us”) and apply to all
          transactions made through our website. Any conflicting terms or
          conditions provided by you are void unless expressly agreed upon by
          Darupani in writing.
        </p>

        <h2>2. Age Restriction</h2>
        <p>
          You must be of legal drinking age (18+ in Nepal) to use our services.
          We may require government-issued identification upon delivery to
          verify your age. Orders from individuals under the legal drinking age
          will be canceled immediately.
        </p>

        <h2>3. Orders and Acceptance</h2>
        <p>
          All orders placed through our website are subject to availability and
          final acceptance by Darupani. We reserve the right to cancel or limit
          any order at our discretion, including orders that appear to be
          fraudulent or intended for resale.
        </p>

        <h2>4. Product Description and Pricing</h2>
        <p>
          We strive to ensure all product descriptions and pricing are accurate;
          however, errors may occur. If we discover an error in the pricing or
          description of a product you have ordered, we will inform you as soon
          as possible and give you the option to confirm or cancel your order.
        </p>

        <h2>5. Payment</h2>
        <p>
          Payment must be made at the time of placing the order. We accept
          various payment methods including digital wallets and bank transfers.
          Your payment details are processed securely and are not stored on our
          servers.
        </p>

        <h2>6. Delivery</h2>
        <p>
          Delivery timelines may vary depending on location and availability.
          You must be present at the time of delivery and provide valid proof of
          age. If no one eligible is available to receive the delivery, the
          order may be returned or rescheduled at our discretion.
        </p>

        <h2>7. Returns and Refunds</h2>
        <p>
          Due to the nature of our products, returns are only accepted if the
          item is damaged, expired, or incorrectly delivered. Refunds will be
          processed only after proper verification. Contact our support team
          within 24 hours of delivery for any issues.
        </p>

        <h2>8. Promotions and Offers</h2>
        <p>
          Promotional offers and discount codes may be available for a limited
          time. These offers are subject to change or cancellation without
          notice and may not be combined with other promotions unless stated
          otherwise.
        </p>

        <h2>9. Limitation of Liability</h2>
        <p>
          Darupani is not liable for any indirect, incidental, or consequential
          damages arising from the use of our services or consumption of our
          products. We are not responsible for delays or failures caused by
          factors beyond our control, including natural disasters or regulatory
          changes.
        </p>

        <h2>10. Intellectual Property</h2>
        <p>
          All content on our website, including text, images, logos, and
          trademarks, is the property of Darupani and may not be reproduced,
          distributed, or used for commercial purposes without our written
          consent.
        </p>

        <h2>11. Modifications to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. Changes will
          be effective immediately upon posting. Continued use of the website
          following any changes constitutes your acceptance of the new Terms.
        </p>

        <h2>12. Governing Law</h2>
        <p>
          These Terms are governed by the laws of Nepal. Any disputes arising
          out of these Terms shall be subject to the exclusive jurisdiction of
          the courts of Kathmandu, Nepal.
        </p>

        <h2>13. Contact Information</h2>
        <p>
          If you have any questions or concerns regarding these Terms, please
          contact us at:
          <br />
          Email: <strong>shaloftech@gmail.com</strong>
          <br />
          Phone: <strong>9865593158</strong>
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
