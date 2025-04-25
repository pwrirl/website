<script>
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
</script>

<div class="container mx-auto px-5 py-8">
	<div class="mx-auto max-w-4xl">
		<h1 class="mb-8 text-center text-3xl font-bold text-white sm:text-4xl">Disclaimer</h1>

		<div class="rounded-lg bg-[#121212]/80 p-8 backdrop-blur-sm">
			<div class="mb-8 flex flex-col items-center justify-center">
				<div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#e20074]/10">
					<Icon icon="mdi:alert-circle" class="h-8 w-8 text-[#e20074]" />
				</div>
				<p class="text-center text-gray-300">
					<strong>Last updated: April 1, 2025</strong>
				</p>
			</div>

			<div class="prose prose-invert max-w-none">
				<section class="mb-8">
					<h2 class="mb-4 text-2xl font-bold text-white">1. General Disclaimer</h2>
					<p class="mb-6">
						The information provided by PowerIRL ("we," "us," or "our") on pwrirl.com (the "Site")
						is for general informational purposes only. All information on the Site is provided in
						good faith, however we make no representation or warranty of any kind, express or
						implied, regarding the accuracy, adequacy, validity, reliability, availability, or
						completeness of any information on the Site.
					</p>
				</section>

				<section class="mb-8">
					<h2 class="mb-4 text-2xl font-bold text-white">2. Professional Disclaimer</h2>
					<p class="mb-6">
						The Site cannot and does not contain legal, financial, or professional advice. The
						legal, financial, or professional information is provided for general informational and
						educational purposes only and is not a substitute for professional advice. Accordingly,
						before taking any actions based upon such information, we encourage you to consult with
						the appropriate professionals.
					</p>
				</section>

				<section class="mb-8">
					<h2 class="mb-4 text-2xl font-bold text-white">3. External Links Disclaimer</h2>
					<p class="mb-6">
						The Site may contain links to external websites that are not provided or maintained by
						or in any way affiliated with us. Please note that we do not guarantee the accuracy,
						relevance, timeliness, or completeness of any information on these external websites.
					</p>
				</section>

				<section class="mb-8">
					<h2 class="mb-4 text-2xl font-bold text-white">4. Streaming Service Disclaimer</h2>
					<p class="mb-6">
						Our streaming services are provided "as is" and "as available" without any warranties of
						any kind, either express or implied. We do not guarantee uninterrupted, timely, secure,
						or error-free operation of our services. We are not responsible for any loss of data,
						content, or other materials that may result from the use of our services.
					</p>
				</section>

				<section class="mb-8">
					<h2 class="mb-4 text-2xl font-bold text-white">5. Content Disclaimer</h2>
					<p class="mb-6">
						We do not endorse, support, represent, or guarantee the completeness, truthfulness,
						accuracy, or reliability of any content or communications posted via our services. You
						understand that by using our services, you may be exposed to content that might be
						offensive, harmful, inaccurate, or otherwise inappropriate.
					</p>
				</section>

				<section class="mb-8">
					<h2 class="mb-4 text-2xl font-bold text-white">6. No Liability</h2>
					<p class="mb-6">
						Under no circumstance shall we have any liability to you for any loss or damage of any
						kind incurred as a result of the use of the Site or reliance on any information provided
						on the Site. Your use of the Site and your reliance on any information on the Site is
						solely at your own risk.
					</p>
				</section>

				<section class="mb-8">
					<h2 class="mb-4 text-2xl font-bold text-white">7. Changes to This Disclaimer</h2>
					<p class="mb-6">
						We reserve the right to make changes to this disclaimer at any time. We will notify you
						of any changes by posting the new disclaimer on this page and updating the "Last
						updated" date.
					</p>
				</section>

				<section class="mb-8">
					<h2 class="mb-4 text-2xl font-bold text-white">8. Contact Us</h2>
					<p class="mb-6">If you have any questions about this Disclaimer, please contact us at:</p>
					<p class="mb-6">
						Email: legal@powerirl.com<br />
						Address: SDS Nexus, LLC, 123 Business Ave, Suite 100, City, State 12345
					</p>
				</section>
			</div>
		</div>
	</div>
</div>
