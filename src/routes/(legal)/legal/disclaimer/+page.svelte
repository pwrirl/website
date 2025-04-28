<script>
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
</script>

<div class="container mx-auto px-5 py-8">
	<div class="mx-auto max-w-4xl">
		<article aria-labelledby="disclaimer-title">
			<h1 id="disclaimer-title" class="mb-8 text-center text-3xl font-bold text-white sm:text-4xl" tabindex="-1">Disclaimer</h1>

			<div class="rounded-lg bg-[#121212]/80 p-8 backdrop-blur-sm">
				<div class="mb-8 flex flex-col items-center justify-center">
					<div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#e20074]/10">
						<Icon icon="mdi:alert-circle" class="h-8 w-8 text-[#e20074]" aria-hidden="true" />
					</div>
					<p class="text-center text-gray-300" aria-live="polite">Last updated: April 28, 2025</p>
				</div>

				<div
					class="prose prose-invert prose-headings:scroll-mt-20 max-w-none"
					role="region"
					aria-label="Disclaimer content"
				>
					<section class="mb-8">
						<h2 id="interpretation" class="mb-4 text-2xl font-bold text-white" tabindex="-1">Interpretation</h2>
						<p class="mb-6">
							The words with initial capital letters have meanings defined under the following
							conditions. These definitions shall apply regardless of whether they appear in singular
							or plural form.
						</p>
					</section>

					<section class="mb-8">
						<h2 id="definitions" class="mb-4 text-2xl font-bold text-white" tabindex="-1">Definitions</h2>
						<p class="mb-4">For the purposes of this Disclaimer:</p>
						<ul class="mb-6">
							<li class="mb-2">
								<strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this
								Disclaimer) refers to SDS Nexus, LLC dba PowerIRL, 30 N Gould St Ste R, Sheridan, WY, 82801,
								USA.
							</li>
							<li class="mb-2"><strong>Service</strong> refers to the Website.</li>
							<li class="mb-2">
								<strong>You</strong> means the individual accessing the Service, or the company, or other
								legal entity on behalf of which such individual is accessing or using the Service, as applicable.
							</li>
							<li class="mb-2">
								<strong>Website</strong> refers to PowerIRL, accessible from https://pwrirl.com
							</li>
						</ul>
					</section>

					<section class="mb-8">
						<h2 id="disclaimer" class="mb-4 text-2xl font-bold text-white" tabindex="-1">Disclaimer</h2>
						<p class="mb-4">
							The information contained on the Service is for general information purposes only.
						</p>
						<p class="mb-4">
							The Company assumes no responsibility for errors or omissions in the contents of the
							Service.
						</p>
						<p class="mb-4">
							In no event shall the Company be liable for any special, direct, indirect,
							consequential, or incidental damages or any damages whatsoever, whether in an action of
							contract, negligence or other, arising out of or in connection with the use of the
							Service or the contents of the Service. The Company reserves the right to make
							additions, deletions, or modifications to the contents on the Service at any time
							without prior notice.
						</p>
						<p class="mb-6">
							The Company does not warrant that the Service is free of viruses or other harmful
							components.
						</p>
					</section>

					<section class="mb-8">
						<h2 id="external-links-disclaimer" class="mb-4 text-2xl font-bold text-white" tabindex="-1">
							External Links Disclaimer
						</h2>
						<p class="mb-4">
							The Service may contain links to external websites that are not provided or maintained
							by or in any way affiliated with the Company.
						</p>
						<p class="mb-6">
							Please note that the Company does not guarantee the accuracy, relevance, timeliness, or
							completeness of any information on these external websites.
						</p>
					</section>

					<section class="mb-8">
						<h2 id="errors-and-omissions-disclaimer" class="mb-4 text-2xl font-bold text-white" tabindex="-1">
							Errors and Omissions Disclaimer
						</h2>
						<p class="mb-4">
							The information given by the Service is for general guidance on matters of interest
							only. Even if the Company takes every precaution to ensure that the content of the
							Service is both current and accurate, errors can occur. Additionally, due to the
							changing nature of laws, rules, and regulations, there may be delays, omissions, or
							inaccuracies in the information contained on the Service.
						</p>
						<p class="mb-6">
							The Company is not responsible for any errors or omissions, or for the results obtained
							from the use of this information.
						</p>
					</section>

					<section class="mb-8">
						<h2 id="fair-use-disclaimer" class="mb-4 text-2xl font-bold text-white" tabindex="-1">
							Fair Use Disclaimer
						</h2>
						<p class="mb-4">
							The Company may use copyrighted material which has not always been specifically
							authorized by the copyright owner. The Company is making such material available for
							criticism, comment, news reporting, teaching, scholarship, or research.
						</p>
						<p class="mb-4">
							The Company believes this constitutes a "fair use" of any such copyrighted material as
							provided for in section 107 of the United States Copyright Law.
						</p>
						<p class="mb-6">
							If You wish to use copyrighted material from the Service for your own purposes that go
							beyond fair use, You must obtain permission from the copyright owner.
						</p>
					</section>

					<section class="mb-8">
						<h2 id="views-expressed-disclaimer" class="mb-4 text-2xl font-bold text-white" tabindex="-1">
							Views Expressed Disclaimer
						</h2>
						<p class="mb-4">
							The Service may contain views and opinions which are those of the authors and do not
							necessarily reflect the official policy or position of any other author, agency,
							organization, employer, or company, including the Company.
						</p>
						<p class="mb-6">
							Comments published by users are their sole responsibility and users will take full
							responsibility, liability, and blame for any libel or litigation that results from
							something written in or as a direct result of something written in a comment. The
							Company is not liable for any comment published by users and reserves the right to
							delete any comment for any reason whatsoever.
						</p>
					</section>

					<section class="mb-8">
						<h2 id="no-responsibility-disclaimer" class="mb-4 text-2xl font-bold text-white" tabindex="-1">
							No Responsibility Disclaimer
						</h2>
						<p class="mb-4">
							The information on the Service is provided with the understanding that the Company is
							not herein engaged in rendering legal, accounting, tax, or other professional advice or
							services. As such, it should not be used as a substitute for consultation with
							professional accounting, tax, legal, or other competent advisers.
						</p>
						<p class="mb-6">
							In no event shall the Company or its suppliers be liable for any special, incidental,
							indirect, or consequential damages whatsoever arising out of or in connection with your
							access or use or inability to access or use the Service.
						</p>
					</section>

					<section class="mb-8">
						<h2 id="use-at-your-own-risk-disclaimer" class="mb-4 text-2xl font-bold text-white" tabindex="-1">
							"Use at Your Own Risk" Disclaimer
						</h2>
						<p class="mb-4">
							All information in the Service is provided "as is", with no guarantee of completeness,
							accuracy, timeliness or of the results obtained from the use of this information, and
							without warranty of any kind, express or implied, including, but not limited to
							warranties of performance, merchantability, and fitness for a particular purpose.
						</p>
						<p class="mb-6">
							The Company will not be liable to You or anyone else for any decision made or action
							taken in reliance on the information given by the Service or for any consequential,
							special, or similar damages, even if advised of the possibility of such damages.
						</p>
					</section>
				</div>
			</div>
		</article>
	</div>
</div>
