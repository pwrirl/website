<script>
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
</script>

<div class="container mx-auto px-5 py-8">
	<div class="mx-auto max-w-4xl">
		<h1 class="mb-8 text-center text-3xl font-bold text-white sm:text-4xl">Privacy Policy</h1>

		<div class="rounded-lg bg-[#121212]/80 p-8 backdrop-blur-sm" role="article" aria-labelledby="privacy-policy-title">
			<div class="mb-8 flex flex-col items-center justify-center">
				<div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#e20074]/10" aria-hidden="true">
					<Icon icon="mdi:shield-lock" class="h-8 w-8 text-[#e20074]" />
				</div>
				<p class="text-center text-gray-300" id="privacy-policy-title">
					<strong>Last updated: April 28, 2025</strong>
				</p>
			</div>

			<div
				class="prose prose-invert prose-headings:scroll-mt-20 max-w-none"
			>
				<p class="mb-6">
					This Privacy Policy describes how SDS Nexus, LLC dba PowerIRL ("we", "us", or "our")
					collects, uses, and shares personal information through our website, located at
					pwrirl.com, and the tools and services we provide (collectively, the "Service" or the
					"Website"). Any capitalized terms not defined in this Privacy Policy have the meanings
					assigned to them in our Terms of Service.
				</p>

				<h2 id="your-privacy" class="mb-4 text-2xl font-bold text-white" tabindex="-1">Your Privacy</h2>
				<p class="mb-6">
					At PowerIRL, we are committed to protecting your privacy in accordance with all applicable
					laws. This Privacy Policy outlines how we collect, use, and share your information, and
					what choices you have regarding your data. Terms used in this policy have the meanings
					described in the Definitions section below.
				</p>

				<h2 id="definitions" class="mb-4 text-2xl font-bold text-white" tabindex="-1">Definitions</h2>
				<ul class="mb-6">
					<li class="mb-2">
						<strong>Personal Data:</strong> Information about a living individual that can identify them,
						either directly or in combination with other information.
					</li>
					<li class="mb-2">
						<strong>Usage Data:</strong> Automatically collected data generated through the use of the
						Service or its infrastructure, such as visit duration or browser type.
					</li>
					<li class="mb-2">
						<strong>Cookies:</strong> Small files stored on your device that help us analyze traffic
						and improve user experience.
					</li>
					<li class="mb-2">
						<strong>Data Controller:</strong> The entity that determines the purpose and means of processing
						personal data. PowerIRL acts as the Data Controller for your data.
					</li>
					<li class="mb-2">
						<strong>Data Processor (Service Provider):</strong> Any third party who processes data on
						behalf of PowerIRL.
					</li>
					<li class="mb-2">
						<strong>Data Subject:</strong> The individual whose Personal Data is being processed.
					</li>
					<li class="mb-2">
						<strong>User:</strong> The person using our Service, equivalent to the Data Subject.
					</li>
				</ul>

				<h2 id="information-collection-and-use" class="mb-4 text-2xl font-bold text-white" tabindex="-1">
					Information Collection and Use
				</h2>
				<p class="mb-6">
					We collect various types of information to deliver and enhance our Service.
				</p>

				<h3 id="types-of-data-collected" class="mb-3 text-xl font-bold text-white" tabindex="-1">Types of Data Collected</h3>

				<h4 id="personal-data" class="mb-2 text-lg font-bold text-white" tabindex="-1">Personal Data</h4>
				<p class="mb-4">
					We may collect personally identifiable information, including but not limited to:
				</p>
				<ul class="mb-4">
					<li class="mb-1">Name</li>
					<li class="mb-1">Email address</li>
					<li class="mb-1">Mailing address</li>
					<li class="mb-1">State, Province, ZIP/Postal code, City</li>
					<li class="mb-1">Cookies and Usage Data</li>
				</ul>
				<p class="mb-6">
					We may use your Personal Data to send you marketing communications, newsletters, or
					promotional materials. You can opt out at any time via the unsubscribe link in our emails.
				</p>

				<h4 id="usage-data" class="mb-2 text-lg font-bold text-white" tabindex="-1">Usage Data</h4>
				<p class="mb-4">
					We collect information on how the Service is accessed and used. This may include:
				</p>
				<ul class="mb-4">
					<li class="mb-1">IP address</li>
					<li class="mb-1">Browser type and version</li>
					<li class="mb-1">Pages visited</li>
					<li class="mb-1">Time spent on pages</li>
					<li class="mb-1">Device identifiers</li>
					<li class="mb-1">Diagnostic data</li>
				</ul>

				<h4 id="cookies-tracking" class="mb-2 text-lg font-bold text-white" tabindex="-1">Cookies & Tracking Technologies</h4>
				<p class="mb-4">
					We use cookies, beacons, tags, and scripts to track user activity and enhance our Service.
					You may configure your browser to refuse cookies, but this may limit your use of some
					features.
				</p>
				<p class="mb-4">Examples:</p>
				<ul class="mb-6">
					<li class="mb-1">Session Cookies: Used to operate our Service</li>
					<li class="mb-1">Preference Cookies: Used to remember settings and preferences</li>
				</ul>

				<h2 id="use-of-data" class="mb-4 text-2xl font-bold text-white" tabindex="-1">Use of Data</h2>
				<p class="mb-4">We use your data for purposes including:</p>
				<ul class="mb-6">
					<li class="mb-1">Operating and maintaining our Service</li>
					<li class="mb-1">Sending notifications about changes</li>
					<li class="mb-1">Providing customer support</li>
					<li class="mb-1">Improving performance through analytics</li>
					<li class="mb-1">Monitoring Service usage</li>
					<li class="mb-1">Detecting and resolving technical issues</li>
					<li class="mb-1">Providing updates, promotions, and offers, unless opted out</li>
				</ul>

				<h2 id="retention-of-data" class="mb-4 text-2xl font-bold text-white" tabindex="-1">Retention of Data</h2>
				<p class="mb-6">
					We retain your Personal Data only as long as necessary to fulfill the purposes described
					in this policy and to comply with legal obligations. Usage Data may be retained longer for
					security or improvement purposes.
				</p>

				<h2 id="transfer-of-data" class="mb-4 text-2xl font-bold text-white" tabindex="-1">Transfer of Data</h2>
				<p class="mb-4">
					Your data may be transferred to and stored on servers outside of your jurisdiction, where
					privacy laws may differ. We take steps to ensure your data is treated securely and in
					accordance with this policy.
				</p>
				<p class="mb-6">By submitting your information, you consent to this transfer.</p>

				<h2 id="disclosure-of-data" class="mb-4 text-2xl font-bold text-white" tabindex="-1">
					Disclosure of Data
				</h2>

				<h3 id="business-transactions" class="mb-3 text-xl font-bold text-white" tabindex="-1">Business Transactions</h3>
				<p class="mb-6">
					If PowerIRL is involved in a merger, acquisition, or sale, your data may be transferred.
					We will notify you before your data is subject to a new Privacy Policy.
				</p>

				<h3 id="law-enforcement" class="mb-3 text-xl font-bold text-white" tabindex="-1">Law Enforcement</h3>
				<p class="mb-6">
					We may disclose your data if required by law or in response to valid legal requests.
				</p>

				<h2 id="security-of-data" class="mb-4 text-2xl font-bold text-white" tabindex="-1">Security of Data</h2>
				<p class="mb-6">
					We use commercially acceptable means to protect your Personal Data, but no method of
					electronic transmission or storage is completely secure. While we strive to protect your
					information, we cannot guarantee absolute security.
				</p>

				<h2 id="legal-basis-for-processing-under-gdpr" class="mb-4 text-2xl font-bold text-white" tabindex="-1">
					Legal Basis for Processing Under GDPR
				</h2>
				<p class="mb-4">PowerIRL may process your data under the following conditions:</p>
				<ul class="mb-6">
					<li class="mb-1">To fulfill a contract</li>
					<li class="mb-1">With your consent</li>
					<li class="mb-1">To pursue legitimate interests not overridden by your rights</li>
					<li class="mb-1">To comply with legal obligations</li>
					<li class="mb-1">For payment processing</li>
				</ul>

				<h2 id="your-data-protection-rights-gdpr" class="mb-4 text-2xl font-bold text-white" tabindex="-1">
					Your Data Protection Rights (GDPR)
				</h2>
				<p class="mb-4">If you reside in the EEA, you have rights including:</p>
				<ul class="mb-4">
					<li class="mb-1">Access, update, or delete your Personal Data</li>
					<li class="mb-1">Correct inaccurate data</li>
					<li class="mb-1">Object to processing</li>
					<li class="mb-1">Request data restriction</li>
					<li class="mb-1">Receive data in a portable format</li>
					<li class="mb-1">Withdraw consent at any time</li>
				</ul>
				<p class="mb-6">
					To exercise these rights, contact us. We may request identity verification. You also have
					the right to lodge a complaint with your local Data Protection Authority.
				</p>

				<hr />

				<div class="section">
					<h2 id="california-privacy-rights" class="mb-4 text-2xl font-bold text-white" tabindex="-1">California Privacy Rights (CCPA)</h2>
					<p>If you are a California resident, you have the right to:</p>
					<ul>
						<li>Request details of personal data collected</li>
						<li>Request deletion of your data</li>
						<li>Opt out of data sales</li>
					</ul>
					<p>
						Requests will be addressed within 30 days. To exercise your rights, please contact us.
					</p>
				</div>

				<hr />

				<div class="section">
					<h2 id="service-providers" class="mb-4 text-2xl font-bold text-white" tabindex="-1">Service Providers</h2>
					<p>We may employ third parties to:</p>
					<ul>
						<li>Provide the Service</li>
						<li>Analyze usage</li>
						<li>Assist with customer support</li>
						<li>Process payments</li>
					</ul>
					<p>
						These providers have access to your Personal Data only to perform tasks on our behalf
						and are obligated to maintain confidentiality.
					</p>
				</div>

				<hr />

				<div class="section">
					<h2 id="analytics" class="mb-4 text-2xl font-bold text-white" tabindex="-1">Analytics</h2>

					<h3 id="google-analytics" class="mb-3 text-xl font-bold text-white" tabindex="-1">Google Analytics</h3>
					<p>
						We use Google Analytics to understand usage patterns. You can opt out using the Google
						Analytics Opt-out Add-on.
					</p>

					<h3 id="cloudflare-insights" class="mb-3 text-xl font-bold text-white" tabindex="-1">Cloudflare Insights</h3>
					<p>
						For traffic performance and security monitoring. For more information, see Cloudflare's
						Privacy Policy.
					</p>
				</div>

				<hr />

				<div class="section">
					<h2 id="payments" class="mb-4 text-2xl font-bold text-white" tabindex="-1">Payments</h2>
					<p>We use third-party payment processors, such as:</p>
					<ul>
						<li>Paddle: PayPal Privacy Policy</li>
					</ul>
					<p>These processors comply with PCI-DSS to ensure secure handling of payment data.</p>
				</div>

				<hr />

				<div class="section">
					<h2 id="links-to-other-sites" class="mb-4 text-2xl font-bold text-white" tabindex="-1">Links to Other Sites</h2>
					<p>
						Our Service may contain links to third-party sites. We are not responsible for their
						content or privacy practices. Please review their privacy policies before using their
						services.
					</p>
				</div>

				<h2 id="childrens-privacy" class="mb-4 text-2xl font-bold text-white" tabindex="-1">
					Children's Privacy
				</h2>
				<p class="mb-6">
					Our Service is not intended for individuals under the age of 18. We do not knowingly
					collect information from minors. If you believe a child has provided us with data, please
					contact us and we will delete it promptly.
				</p>

				<h2 id="changes-to-this-privacy-policy" class="mb-4 text-2xl font-bold text-white" tabindex="-1">
					Changes to This Privacy Policy
				</h2>
				<p class="mb-4">
					We may update this Privacy Policy from time to time. Changes will be posted on this page
					and, where appropriate, you will be notified via email or prominent notice.
				</p>
				<p class="mb-6">
					Please review this page periodically for updates. Changes are effective once posted.
				</p>
			</div>
		</div>
	</div>
</div>
