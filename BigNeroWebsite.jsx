export default function BigNeroWebsite() {
  const products = [
    ...Array(7).fill({
      name: 'BIG NERO Street Trousers',
      price: '₦24,000',
      pounds: '£12',
      image: '/images/trousers-black.jpg',
      tag: 'BEST SELLER',
    }),

    ...Array(7).fill({
      name: 'BIG NERO Graphic Tee',
      price: '₦25,000',
      pounds: '£13',
      image: '/images/big-nero-tee.jpg',
      tag: 'TRENDING',
    }),

    {
      name: 'Red Cross Tank',
      price: '₦18,000',
      pounds: '£9',
      image: '/images/red-cross-tank.jpg',
      tag: 'LIMITED',
    },

    {
      name: 'BIG NERO Beanie',
      price: '₦8,000',
      pounds: '£4',
      image: '/images/big-nero-beanie.jpg',
      tag: 'WINTER',
    },

    {
      name: 'BIG NERO Hat',
      price: '₦10,000',
      pounds: '£5',
      image: '/images/big-nero-hat.jpg',
      tag: 'NEW',
    },
  ];

  const reviews = [
    {
      name: 'Daniel A.',
      text: 'Quality shocked me honestly. Heavy fabric and the fit is insane.',
      stars: '★★★★★',
    },
    {
      name: 'Zara M.',
      text: 'Looks even better in person. Shipping took a little longer than expected but the quality made up for it.',
      stars: '★★★★☆',
    },
    {
      name: 'Malik T.',
      text: 'Finally a Nigerian streetwear brand that actually feels premium.',
      stars: '★★★★★',
    },
    {
      name: 'Ella K.',
      text: 'The trousers fit perfectly oversized. I just wish there were even more colours.',
      stars: '★★★★☆',
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden font-sans">
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl tracking-[0.4em] font-black">BIG NERO</h1>
          </div>

          <div className="hidden md:flex gap-8 text-sm tracking-widest text-white/70">
            <a href="#shop" className="hover:text-red-500 transition">SHOP</a>
            <a href="#about" className="hover:text-red-500 transition">ABOUT</a>
            <a href="#reviews" className="hover:text-red-500 transition">REVIEWS</a>
            <a href="#contact" className="hover:text-red-500 transition">CONTACT</a>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,red_0%,transparent_60%)]"></div>

        <div className="relative z-10 max-w-5xl">
          <p className="tracking-[0.6em] text-red-500 text-sm mb-6 uppercase">
            Patronise The Authentic
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight mb-6">
            BIG NERO
          </h1>

          <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-10">
            Luxury underground streetwear built for trendsetters. Oversized silhouettes,
            bold graphics, premium quality, and unapologetic energy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#shop"
              className="px-10 py-4 bg-red-600 hover:bg-red-700 transition rounded-full font-semibold tracking-widest"
            >
              SHOP DROP
            </a>

            <a
              href="https://wa.me/2349027357164"
              className="px-10 py-4 border border-white/20 hover:border-red-500 hover:text-red-500 transition rounded-full font-semibold tracking-widest"
            >
              WHATSAPP
            </a>
          </div>
        </div>
      </section>

      <section className="py-10 border-y border-white/10 overflow-hidden whitespace-nowrap bg-zinc-950">
        <div className="animate-pulse text-2xl md:text-4xl font-black tracking-[0.5em] text-white/20 uppercase">
          WEAR BIG • WEAR NERO • BE BOLD • WEAR BIG • WEAR NERO • BE BOLD
        </div>
      </section>

      <section id="shop" className="max-w-7xl mx-auto px-6 py-28">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <div>
            <p className="text-red-500 tracking-[0.3em] uppercase text-sm mb-3">New Season</p>
            <h2 className="text-5xl font-black">Featured Drop</h2>
          </div>

          <p className="text-white/50 max-w-md">
            Designed for trendsetters. Every piece is built to stand out while keeping the fit clean,
            oversized, and premium.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden hover:border-red-500/50 transition duration-500"
            >
              <div className="relative overflow-hidden h-[480px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute top-5 left-5 bg-red-600 px-4 py-2 rounded-full text-xs tracking-widest font-bold">
                  {product.tag}
                </div>
              </div>

              <div className="p-7">
                <div className="flex justify-between items-start gap-4 mb-5">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="text-white/50">Premium oversized fit</p>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-xl">{product.price}</p>
                    <p className="text-white/50 text-sm">{product.pounds}</p>
                  </div>
                </div>

                <button className="w-full py-4 bg-white text-black font-bold rounded-full hover:bg-red-600 hover:text-white transition tracking-widest">
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-40 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 via-black to-black"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-red-500 mb-5">Streetwear Manifesto</p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            MADE FOR THE ONES WHO DON'T FOLLOW TRENDS.
          </h2>

          <p className="text-white/60 text-lg leading-relaxed">
            BIG NERO blends luxury streetwear with underground energy. Every drop is designed
            to feel bold, cinematic, and impossible to ignore.
          </p>
        </div>
      </section>

      <section id="reviews" className="max-w-7xl mx-auto px-6 py-28">
        <div className="mb-16 text-center">
          <p className="uppercase tracking-[0.4em] text-red-500 mb-3">Customer Reviews</p>
          <h2 className="text-5xl font-black">What People Are Saying</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-zinc-950 border border-white/10 p-10 rounded-3xl hover:border-red-500/40 transition"
            >
              <div className="flex gap-1 text-red-500 text-xl mb-6">
                {review.stars}
              </div>

              <p className="text-2xl leading-relaxed mb-8 text-white/90">
                "{review.text}"
              </p>

              <p className="text-white/50 uppercase tracking-[0.2em] text-sm">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 bg-zinc-950 border-y border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-red-500 mb-4">Follow The Brand</p>

          <h2 className="text-5xl md:text-7xl font-black mb-10">
            @RUTHEZEH_18
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto text-lg mb-10">
            Stay updated with every new drop, exclusive previews, styling videos, and behind the scenes content.
          </p>

          <a
            href="https://tiktok.com/@ruthezeh_18"
            className="inline-block px-10 py-4 bg-white text-black rounded-full font-bold tracking-widest hover:bg-red-600 hover:text-white transition"
          >
            FOLLOW ON TIKTOK
          </a>
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.4em] text-red-500 mb-4">Need Help?</p>
            <h2 className="text-5xl font-black mb-6">
              Let's Get You Styled.
            </h2>

            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Questions about sizing, delivery, or orders? Message BIG NERO directly on WhatsApp.
            </p>

            <a
              href="https://wa.me/2349027357164"
              className="inline-block px-10 py-4 bg-red-600 hover:bg-red-700 transition rounded-full font-bold tracking-widest"
            >
              CHAT ON WHATSAPP
            </a>
          </div>

          <div className="bg-zinc-950 border border-white/10 rounded-3xl p-10">
            <div className="space-y-8">
              <div>
                <p className="text-white/40 uppercase tracking-[0.3em] text-sm mb-2">Phone</p>
                <p className="text-2xl font-bold">+234 902 735 7164</p>
              </div>

              <div>
                <p className="text-white/40 uppercase tracking-[0.3em] text-sm mb-2">Brand</p>
                <p className="text-2xl font-bold">BIG NERO</p>
              </div>

              <div>
                <p className="text-white/40 uppercase tracking-[0.3em] text-sm mb-2">Style</p>
                <p className="text-2xl font-bold">Luxury Underground Streetwear</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-950">
          <div className="relative h-[700px] flex items-center justify-center">
            <img
              src="/images/big-nero-poster.jpg"
              alt="BIG NERO Poster"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20"></div>

            <div className="relative z-10 text-center px-6">
              <p className="uppercase tracking-[0.5em] text-red-500 mb-5 text-sm">
                BIG NERO CAMPAIGN
              </p>

              <h2 className="text-5xl md:text-8xl font-black leading-none mb-6">
                WEAR BIG.
                <br />
                WEAR NERO.
              </h2>

              <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
                Built for trendsetters, outsiders, creatives, and everyone bold enough to stand out.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-12 px-6 text-center text-white/40 text-sm tracking-[0.2em]">
        © 2026 BIG NERO • WEAR BIG. WEAR NERO. BE BOLD.
      </footer>

      <a
        href="https://wa.me/2349027357164"
        className="fixed bottom-6 right-6 bg-green-500 hover:scale-110 transition text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl"
      >
        💬
      </a>
    </div>
  );
}