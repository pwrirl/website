import LegalNavigation from "@/components/legal/LegalNavigation";

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="prose prose-invert prose-lg max-w-none">
        <LegalNavigation currentPage="privacy" />
        
        <h1 className="mt-16 text-3xl md:text-5xl font-bold text-white mb-6 relative inline-block">
          <span className="relative z-10">Privacy Policy</span>
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#E20074]"></span>
        </h1>
        <p className="text-white font-medium">Last updated: April 1, 2025</p>

        <p className="text-white font-medium">This Privacy Policy describes how SDS Nexus, LLC dba PowerIRL ("we", "us", or "our") collects, uses, and shares personal information through our website, located at <a href="https://pwrirl.com" className="text-[#E20074] hover:text-[#E20074]/80">pwrirl.com</a>, and the tools and services we provide (collectively, the "Service" or the "Website"). Any capitalized terms not defined in this Privacy Policy have the meanings assigned to them in our Terms of Service.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Your Privacy</h2>
        <p className="text-white font-medium">At PowerIRL, we are committed to protecting your privacy in accordance with all applicable laws. This Privacy Policy outlines how we collect, use, and share your information, and what choices you have regarding your data. Terms used in this policy have the meanings described in the Definitions section below.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Definitions</h2>
        <ul className="text-white font-medium">
            <li><span className="font-semibold">Personal Data</span>: Information about a living individual that can identify them, either directly or in combination with other information.</li>
            <li><span className="font-semibold">Usage Data</span>: Automatically collected data generated through the use of the Service or its infrastructure, such as visit duration or browser type.</li>
            <li><span className="font-semibold">Cookies</span>: Small files stored on your device that help us analyze traffic and improve user experience.</li>
            <li><span className="font-semibold">Data Controller</span>: The entity that determines the purpose and means of processing personal data. PowerIRL acts as the Data Controller for your data.</li>
            <li><span className="font-semibold">Data Processor (Service Provider)</span>: Any third party who processes data on behalf of PowerIRL.</li>
            <li><span className="font-semibold">Data Subject</span>: The individual whose Personal Data is being processed.</li>
            <li><span className="font-semibold">User</span>: The person using our Service, equivalent to the Data Subject.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Information Collection and Use</h2>
        <p className="text-white font-medium">We collect various types of information to deliver and enhance our Service.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Types of Data Collected</h2>
        <p className="text-white font-semibold">Personal Data</p>
        <p className="text-white font-medium">We may collect personally identifiable information, including but not limited to:</p>
        <ul className="text-white font-medium">
            <li>Name</li>
            <li>Email address</li>
            <li>Mailing address</li>
            <li>State, Province, ZIP/Postal code, City</li>
            <li>Cookies and Usage Data</li>
        </ul>
        <p className="text-white font-medium">We may use your Personal Data to send you marketing communications, newsletters, or promotional materials. You can opt out at any time via the unsubscribe link in our emails.</p>

        <p className="text-white font-semibold">Usage Data</p>
        <p className="text-white font-medium">We collect information on how the Service is accessed and used. This may include:</p>
        <ul className="text-white font-medium">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Pages visited</li>
            <li>Time spent on pages</li>
            <li>Device identifiers</li>
            <li>Diagnostic data</li>
        </ul>

        <p className="text-white font-semibold">Cookies & Tracking Technologies</p>
        <p className="text-white font-medium">We use cookies, beacons, tags, and scripts to track user activity and enhance our Service. You may configure your browser to refuse cookies, but this may limit your use of some features.</p>
        <p className="text-white font-medium">Examples:</p>
        <ul className="text-white font-medium">
            <li><span className="font-semibold">Session Cookies</span>: Used to operate our Service</li>
            <li><span className="font-semibold">Preference Cookies</span>: Used to remember settings and preferences</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Use of Data</h2>
        <p className="text-white font-medium">We use your data for purposes including:</p>
        <ul className="text-white font-medium">
            <li>Operating and maintaining our Service</li>
            <li>Sending notifications about changes</li>
            <li>Providing customer support</li>
            <li>Improving performance through analytics</li>
            <li>Monitoring Service usage</li>
            <li>Detecting and resolving technical issues</li>
            <li>Providing updates, promotions, and offers, unless opted out</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Retention of Data</h2>
        <p className="text-white font-medium">We retain your Personal Data only as long as necessary to fulfill the purposes described in this policy and to comply with legal obligations. Usage Data may be retained longer for security or improvement purposes.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Transfer of Data</h2>
        <p className="text-white font-medium">Your data may be transferred to and stored on servers outside of your jurisdiction, where privacy laws may differ. We take steps to ensure your data is treated securely and in accordance with this policy.</p>
        <p className="text-white font-medium">By submitting your information, you consent to this transfer.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Disclosure of Data</h2>
        <p className="text-white font-semibold">Business Transactions</p>
        <p className="text-white font-medium">If PowerIRL is involved in a merger, acquisition, or sale, your data may be transferred. We will notify you before your data is subject to a new Privacy Policy.</p>

        <p className="text-white font-semibold">Law Enforcement</p>
        <p className="text-white font-medium">We may disclose your data if required by law or in response to valid legal requests.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Security of Data</h2>
        <p className="text-white font-medium">We use commercially acceptable means to protect your Personal Data, but no method of electronic transmission or storage is completely secure. While we strive to protect your information, we cannot guarantee absolute security.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Legal Basis for Processing Under GDPR</h2>
        <p className="text-white font-medium">PowerIRL may process your data under the following conditions:</p>
        <ul className="text-white font-medium">
            <li>To fulfill a contract</li>
            <li>With your consent</li>
            <li>To pursue legitimate interests not overridden by your rights</li>
            <li>To comply with legal obligations</li>
            <li>For payment processing</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Your Data Protection Rights (GDPR)</h2>
        <p className="text-white font-medium">If you reside in the EEA, you have rights including:</p>
        <ul className="text-white font-medium">
            <li>Access, update, or delete your Personal Data</li>
            <li>Correct inaccurate data</li>
            <li>Object to processing</li>
            <li>Request data restriction</li>
            <li>Receive data in a portable format</li>
            <li>Withdraw consent at any time</li>
        </ul>
        <p className="text-white font-medium">To exercise these rights, contact us. We may request identity verification. You also have the right to lodge a complaint with your local Data Protection Authority.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">California Privacy Rights (CCPA)</h2>
        <p className="text-white font-medium">If you are a California resident, you have the right to:</p>
        <ul className="text-white font-medium">
            <li>Request details of personal data collected</li>
            <li>Request deletion of your data</li>
            <li>Opt out of data sales</li>
        </ul>
        <p className="text-white font-medium">Requests will be addressed within 30 days. To exercise your rights, please contact us.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Service Providers</h2>
        <p className="text-white font-medium">We may employ third parties to:</p>
        <ul className="text-white font-medium">
            <li>Provide the Service</li>
            <li>Analyze usage</li>
            <li>Assist with customer support</li>
            <li>Process payments</li>
        </ul>
        <p className="text-white font-medium">These providers have access to your Personal Data only to perform tasks on our behalf and are obligated to maintain confidentiality.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Analytics</h2>
        <p className="text-white font-semibold">Google Analytics</p>
        <p className="text-white font-medium">We use Google Analytics to understand usage patterns. You can opt out using the Google Analytics Opt-out Add-on.</p>

        <p className="text-white font-semibold">Cloudflare Insights</p>
        <p className="text-white font-medium">For traffic performance and security monitoring. For more information, see <a href="https://www.cloudflare.com/privacypolicy" className="text-[#E20074] hover:text-[#E20074]/80">Cloudflare's Privacy Policy</a>.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Payments</h2>
        <p className="text-white font-medium">We use third-party payment processors, such as:</p>
        <ul className="text-white font-medium">
            <li><span className="font-semibold">Paddle</span>: <a href="https://www.paddle.com/legal/privacy" className="text-[#E20074] hover:text-[#E20074]/80">PayPal Privacy Policy</a></li>
        </ul>
        <p className="text-white font-medium">These processors comply with PCI-DSS to ensure secure handling of payment data.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Links to Other Sites</h2>
        <p className="text-white font-medium">Our Service may contain links to third-party sites. We are not responsible for their content or privacy practices. Please review their privacy policies before using their services.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Children's Privacy</h2>
        <p className="text-white font-medium">Our Service is not intended for individuals under the age of 18. We do not knowingly collect information from minors. If you believe a child has provided us with data, please contact us and we will delete it promptly.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Changes to This Privacy Policy</h2>
        <p className="text-white font-medium">We may update this Privacy Policy from time to time. Changes will be posted on this page and, where appropriate, you will be notified via email or prominent notice.</p>
        <p className="text-white font-medium">Please review this page periodically for updates. Changes are effective once posted.</p>
      </div>
    </div>
  );
} 