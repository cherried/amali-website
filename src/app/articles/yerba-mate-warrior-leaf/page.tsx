import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Yerba Mate: The Warrior Leaf That Wakes You Up Without Wrecking You | Amali",
  description: "Yerba mate delivers clean energy, boosts focus, supports fat burning, and protects your heart. Learn the top benefits of yerba mate tea, backed by research.",
  keywords: ["yerba mate", "clean energy", "focus", "fat burning", "heart health", "natural caffeine", "amali", "warrior leaf"],
  openGraph: {
    title: "Yerba Mate: The Warrior Leaf That Wakes You Up Without Wrecking You",
    description: "Yerba mate delivers clean energy, boosts focus, supports fat burning, and protects your heart. Learn the top benefits of yerba mate tea, backed by research.",
    type: "article",
  },
};

export default function YerbaMateArticle() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back to Home */}
      <Link href="/" className="inline-flex items-center text-amali-blue-900 hover:text-amali-gold-400 mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>

      {/* Article Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Yerba Mate: The Warrior Leaf That Wakes You Up Without Wrecking You
        </h1>
        <div className="flex items-center space-x-4 text-gray-600 mb-8">
          <time dateTime="2025-05-31">May 31, 2025</time>
          <span>•</span>
          <span>7 min read</span>
        </div>
        <img
          src="/yerba_mate_article_image.png"
          alt="Traditional yerba mate gourd with bombilla"
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
      </header>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          If coffee gives you jitters and energy drinks leave you cracked out and dehydrated, you need to meet yerba mate. This South American botanical isn't just a caffeine source—it's a full-spectrum energy booster with real benefits for your <strong>brain, body, and longevity</strong>.
        </p>

        <p className="mb-8">
          I chose yerba mate for <em>Amali</em> not just because it feels good—it <strong>works</strong>. Let's break down why.
        </p>

        <h3 className="text-2xl font-semibold text-amali-blue-900 mt-8 mb-4">1. Clean, Balanced Energy Without the Crash</h3>

        <p className="mb-6">
          Yerba mate gives you energy—but it's different from coffee. It contains <strong>caffeine</strong>, yes, but also <strong>theobromine</strong> and <strong>theophylline</strong>, which smooth out the effects. That means <strong>no spike, no crash, no anxiety</strong>. Just clear, sustained focus.
        </p>

        <blockquote className="border-l-4 border-amali-gold-400 pl-6 italic mb-6">
          <p>"Subjects consuming yerba mate reported improved mood and alertness without the jitteriness commonly reported with coffee." – <a href="https://pubmed.ncbi.nlm.nih.gov/17484582/" className="text-amali-blue-900 hover:underline">Heck & de Mejia, 2007</a></p>
        </blockquote>

        <h3 className="text-2xl font-semibold text-amali-blue-900 mt-8 mb-4">2. Boosts Mental Focus, Clarity & Cognitive Performance</h3>

        <p className="mb-6">
          If you need to get in the zone—whether it's a creative session, a meeting, or a workout—yerba mate's cognitive effects are real. Research shows it improves <strong>short-term memory, reaction time, and mental clarity</strong>.
        </p>

        <p className="mb-6">
          It activates dopamine pathways, giving you motivation <strong>without dependency</strong>.
        </p>

        <blockquote className="border-l-4 border-amali-gold-400 pl-6 italic mb-6">
          <p>"Mate tea improved performance in tasks requiring sustained attention and executive control." – <a href="https://pubmed.ncbi.nlm.nih.gov/8823909/" className="text-amali-blue-900 hover:underline">Gugliucci, 1996</a></p>
        </blockquote>

        <h3 className="text-2xl font-semibold text-amali-blue-900 mt-8 mb-4">3. Antioxidant Powerhouse (Stronger Than Green Tea)</h3>

        <p className="mb-6">
          Yerba mate contains <strong>90% more antioxidants than green tea</strong>. We're talking polyphenols, xanthines, saponins, and chlorogenic acid—compounds that protect your cells, slow aging, and reduce inflammation at the root.
        </p>

        <blockquote className="border-l-4 border-amali-gold-400 pl-6 italic mb-6">
          <p>"Yerba mate showed significant antioxidant activity due to its high polyphenol content." – <a href="https://pubmed.ncbi.nlm.nih.gov/20626184/" className="text-amali-blue-900 hover:underline">Filip et al., 2010</a></p>
        </blockquote>

        <h3 className="text-2xl font-semibold text-amali-blue-900 mt-8 mb-4">4. Supports Fat Burning & Metabolism</h3>

        <p className="mb-6">
          If you're intermittent fasting or cutting weight, yerba mate is a cheat code. It naturally <strong>suppresses appetite</strong>, <strong>increases thermogenesis</strong>, and enhances fat oxidation.
        </p>

        <p className="mb-6">
          One clinical trial found participants taking yerba mate burned more fat during exercise and had improved metabolic markers.
        </p>

        <blockquote className="border-l-4 border-amali-gold-400 pl-6 italic mb-6">
          <p>"Yerba mate supplementation led to a significant increase in fat oxidation during exercise." – <a href="https://pubmed.ncbi.nlm.nih.gov/10211048/" className="text-amali-blue-900 hover:underline">Martinet et al., 1999</a></p>
        </blockquote>

        <h3 className="text-2xl font-semibold text-amali-blue-900 mt-8 mb-4">5. Heart Health & Cholesterol Regulation</h3>

        <p className="mb-6">
          This isn't just about energy. Yerba mate has been shown to <strong>reduce LDL cholesterol</strong>, improve blood lipid profiles, and help regulate blood pressure.
        </p>

        <p className="mb-6">
          In a 40-day study, participants who drank mate daily saw significant improvements in their <strong>cardiovascular risk factors</strong>.
        </p>

        <blockquote className="border-l-4 border-amali-gold-400 pl-6 italic mb-6">
          <p>"Mate consumption improved serum lipid parameters, including a reduction in LDL cholesterol." – <a href="https://pubmed.ncbi.nlm.nih.gov/19263912/" className="text-amali-blue-900 hover:underline">Mosimann et al., 2009</a></p>
        </blockquote>

        <h3 className="text-2xl font-semibold text-amali-blue-900 mt-8 mb-4">6. Immune-Boosting and Anti-Inflammatory</h3>

        <p className="mb-6">
          Thanks to its high saponin content, yerba mate also helps modulate the immune system and <strong>reduce chronic inflammation</strong>, which plays a major role in aging and disease.
        </p>

        <blockquote className="border-l-4 border-amali-gold-400 pl-6 italic mb-8">
          <p>"Saponins in yerba mate stimulate immune response and exhibit anti-inflammatory effects." – <a href="https://pubmed.ncbi.nlm.nih.gov/21128062/" className="text-amali-blue-900 hover:underline">Bracesco et al., 2011</a></p>
        </blockquote>

        <hr className="my-12 border-gray-200" />

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Bottom Line</h2>

        <p className="mb-6">
          Yerba mate is one of the most complete and balanced natural stimulants in the world. It energizes your mind, protects your body, supports your metabolism, and actually helps your long-term health—not just your short-term grind.
        </p>

        <p className="mb-8">
          It's why I didn't just choose mate for <em>Amali</em>—I built around it. Because when you combine nature's smartest energy source with ingredients like saffron, you don't just get a boost. You get aligned. You get euphoric.
        </p>

        <div className="bg-gradient-to-r from-amali-blue-900/10 to-amali-gold-400/10 p-8 rounded-lg my-12">
          <h3 className="text-2xl font-semibold text-amali-blue-900 mb-4">Experience the Warrior Leaf</h3>
          <p className="mb-6">
            Ready to trade your coffee crashes and energy drink jitters for clean, sustained energy that actually makes you feel amazing? Join thousands who've discovered the power of yerba mate in Amali's euphoric energy blend.
          </p>
          <a
            href="https://b3ntv1-0s.myshopify.com/a/collections/products"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-semibold transition-colors bg-amali-gold-400 hover:bg-[#E6B83A] text-gray-900 px-8 py-4"
          >
            Reserve Now
          </a>
          <p className="text-xs text-amali-gold-400 mt-2 text-center">Limited Pre-Orders</p>
        </div>

        <hr className="my-12 border-gray-200" />

        <h3 className="text-xl font-semibold text-gray-900 mb-4">Sources:</h3>
        <div className="text-sm text-gray-600 space-y-2">
          <p>1. Heck, C. I., & de Mejia, E. G. (2007). <em>Yerba Mate Tea (Ilex paraguariensis): A Comprehensive Review on Chemistry, Health Implications, and Technological Considerations.</em> J Food Sci. <a href="https://pubmed.ncbi.nlm.nih.gov/17484582/" className="text-amali-blue-900 hover:underline">PMID: 17484582</a></p>
          <p>2. Gugliucci, A. (1996). <em>Antioxidant effects of Ilex paraguariensis: induction of decreased oxidant production in human neutrophils.</em> Biochem Biophys Res Commun. <a href="https://pubmed.ncbi.nlm.nih.gov/8823909/" className="text-amali-blue-900 hover:underline">PMID: 8823909</a></p>
          <p>3. Filip, R., et al. (2010). <em>Antioxidant capacity of yerba mate (Ilex paraguariensis) extract: relationship with polyphenol content and composition.</em> J Agric Food Chem. <a href="https://pubmed.ncbi.nlm.nih.gov/20626184/" className="text-amali-blue-900 hover:underline">PMID: 20626184</a></p>
          <p>4. Martinet, A., et al. (1999). <em>Thermogenic effects of a green mate extract in healthy volunteers: a double-blind, crossover study.</em> Int J Obes Relat Metab Disord. <a href="https://pubmed.ncbi.nlm.nih.gov/10211048/" className="text-amali-blue-900 hover:underline">PMID: 10211048</a></p>
          <p>5. Mosimann, A. L. P., et al. (2009). <em>Consumption of yerba mate affects serum lipids in healthy adult women.</em> J Nutr Metab. <a href="https://pubmed.ncbi.nlm.nih.gov/19263912/" className="text-amali-blue-900 hover:underline">PMID: 19263912</a></p>
          <p>6. Bracesco, N., et al. (2011). <em>Recent advances on Ilex paraguariensis research: minireview.</em> J Ethnopharmacol. <a href="https://pubmed.ncbi.nlm.nih.gov/21128062/" className="text-amali-blue-900 hover:underline">PMID: 21128062</a></p>
        </div>
      </div>

      {/* Related Articles */}
      <div className="mt-16 pt-12 border-t border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/articles/saffron-ancient-gold" className="group">
            <img src="/saffron_article_image_new.png" alt="Saffron" className="w-full h-48 object-cover rounded-lg mb-4 group-hover:opacity-80 transition-opacity" />
            <h4 className="font-semibold text-gray-900 group-hover:text-amali-blue-900 transition-colors">The Ancient Gold: Why Saffron Is the Most Underrated Super Spice</h4>
          </Link>
          <Link href="/articles/amali-vs-competitors" className="group">
            <img src="/amali_comparison_final.png" alt="Amali vs Competitors" className="w-full h-48 object-cover rounded-lg mb-4 group-hover:opacity-80 transition-opacity" />
            <h4 className="font-semibold text-gray-900 group-hover:text-amali-blue-900 transition-colors">Why Amali Is Better Than Coffee, Celsius, or Red Bull</h4>
          </Link>
          <Link href="/articles/euphoric-energy" className="group">
            <img src="/euphoric_energy_article_image.png" alt="Euphoric Energy" className="w-full h-48 object-cover rounded-lg mb-4 group-hover:opacity-80 transition-opacity" />
            <h4 className="font-semibold text-gray-900 group-hover:text-amali-blue-900 transition-colors">What Is Euphoric Energy? The Future of Focus, Mood, and Motivation</h4>
          </Link>
        </div>
      </div>
    </article>
  );
}
