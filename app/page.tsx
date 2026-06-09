export default function Home() {
  const faqs = [
    {
      q: 'How does it connect to my Shopify store?',
      a: 'You provide a read-only Shopify API key. We pull inventory age, quantity, and cost data to run the liquidation analysis — no write access needed.'
    },
    {
      q: 'How are liquidation prices calculated?',
      a: 'Our algorithm weighs storage cost per day, inventory age, sell-through rate, and your target recovery margin to suggest the optimal clearance price.'
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. Cancel anytime from your Lemon Squeezy customer portal. No contracts, no questions asked.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Shopify Store Owners
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Bleeding Money on{' '}
          <span className="text-[#58a6ff]">Dead Inventory</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your Shopify store and instantly get data-driven liquidation prices for slow-moving stock — factoring in storage costs, aging, and demand signals.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start Recovering Revenue
        </a>
        <p className="text-sm text-[#8b949e] mt-4">$15/mo · Cancel anytime</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: '📦', title: 'Inventory Aging', desc: 'See exactly how long each SKU has been sitting and what it costs you per day.' },
          { icon: '💡', title: 'Smart Pricing', desc: 'Algorithmic liquidation prices that maximize recovery without leaving money on the table.' },
          { icon: '📈', title: 'ROI Projections', desc: 'Forecast cash recovered vs. continued storage costs before you act.' }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited Shopify SKU analysis',
              'Daily inventory aging reports',
              'Liquidation price recommendations',
              'Storage cost calculator',
              'ROI recovery projections',
              'CSV export'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-sm text-[#8b949e]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Inventory Liquidation Calculator · Built for Shopify merchants
      </footer>
    </main>
  )
}
