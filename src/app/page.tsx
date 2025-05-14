'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaBoxes,
  FaSearch,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp
} from 'react-icons/fa';
import styles from './NatureHero.module.css';

const NatureHero = () => {
  const offers = [
    { id: 1, name: 'PIR rPP Plastic', quantity: 25, country: 'USA', price: 200, image: '/product1.jpg' },
    { id: 2, name: 'PCR rPP Plastic', quantity: 40, country: 'Germany', price: 300, image: '/product2.jpg' },
    { id: 3, name: 'PIR rPP Plastic', quantity: 15, country: 'Russia', price: 150, image: '/product3.jpg' },
    { id: 4, name: 'PIR rPP Plastic', quantity: 60, country: 'Spain', price: 250, image: '/product4.jpg' },
  ];

  useEffect(() => {
    // Import ScrollReveal dynamically since it's a client-side library
    import('scrollreveal').then((ScrollRevealModule) => {
      const ScrollReveal = ScrollRevealModule.default;
      
      const scrollRevealOption = {
        distance: "50px",
        origin: "bottom",
        duration: 1000,
      };
      
      // Apply animations to elements
      ScrollReveal().reveal(`.${styles.hero_h1}`, {
        ...scrollRevealOption,
      });
      
      ScrollReveal().reveal(`.${styles.hero_h2}`, {
        ...scrollRevealOption,
        delay: 500,
      });
      
      ScrollReveal().reveal(`.${styles.hero_p}`, {
        ...scrollRevealOption,
        delay: 1000,
      });
      
      ScrollReveal().reveal(`.${styles.socials}`, {
        ...scrollRevealOption,
        delay: 1500,
      });
    });
  }, []);

  return (
    <>
    <section className={styles.container}>
      <div className={styles.container_grid}>
        <Image 
          src="/bg-dots.png" 
          alt="bg" 
          className={styles.bg_1} 
          width={150}
          height={150}
        />
        <Image 
          src="/bg-dots.png" 
          alt="bg" 
          className={styles.bg_2} 
          width={150}
          height={150}
        />
        <Image 
          src="/bg-dots.png" 
          alt="bg" 
          className={styles.bg_3} 
          width={150}
          height={150}
        />
        {/* Overlapping collage layout */}
        <div className="absolute right-0 top-75.5 -translate-y-1/2 z-0 hidden md:block">
          <div className={styles.collage_wrapper}>
            {/* Center large image */}
            <div className={`${styles.collage_item} ${styles.center_large}`}>
              <div className={styles.image_switcher}>
                <img src="/product1.jpg" alt="Center" />
                <img src="/home2.jpg" alt="Center Alt" />
              </div>
        </div>

            {/* Top row */}
            <div className={`${styles.collage_item} ${styles.top_left}`}>
              <div className={styles.image_switcher}>
                <img src="/product2.jpg" alt="Top Left" />
                <img src="/product3.jpg" alt="Top Left Alt" />
              </div>
            </div>
            <div className={`${styles.collage_item} ${styles.top_right}`}>
              <div className={styles.image_switcher}>
                <img src="/product4.jpg" alt="Top Right" />
                <img src="/home3.jpg" alt="Top Right Alt" />
        </div>
      </div>

            {/* Left side */}
            <div className={`${styles.collage_item} ${styles.middle_left}`}>
              <div className={styles.image_switcher}>
                <img src="/home4.jpg" alt="Middle Left" />
                <img src="/product1.jpg" alt="Middle Left Alt" />
                    </div>
                  </div>

            {/* Right side */}
            <div className={`${styles.collage_item} ${styles.middle_right}`}>
              <div className={styles.image_switcher}>
                <img src="/product2.jpg" alt="Middle Right" />
                <img src="/product3.jpg" alt="Middle Right Alt" />
              </div>
            </div>

            {/* Bottom row */}
            <div className={`${styles.collage_item} ${styles.bottom_left}`}>
              <div className={styles.image_switcher}>
                <img src="/product4.jpg" alt="Bottom Left" />
                <img src="/home2.jpg" alt="Bottom Left Alt" />
              </div>
            </div>
            <div className={`${styles.collage_item} ${styles.bottom_middle}`}>
              <div className={styles.image_switcher}>
                <img src="/home3.jpg" alt="Bottom Middle" />
                <img src="/home4.jpg" alt="Bottom Middle Alt" />
                    </div>
                  </div>
            <div className={`${styles.collage_item} ${styles.bottom_right}`}>
              <div className={styles.image_switcher}>
                <img src="/product1.jpg" alt="Bottom Right" />
                <img src="/product2.jpg" alt="Bottom Right Alt" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container_content}>
          <h1 className={styles.hero_h1}>
            <span className={styles.static_text}>We are</span>
            <div className={styles.typing_wrapper}>
              <span className={styles.typing_text}>VELEBIT GREEN</span>
            </div>
          </h1>
          <h2 className={styles.hero_h2}>Transform Waste Into a Better Tomorrow</h2>
          <p className={styles.hero_p}>
            Join our revolutionary marketplace where waste transforms into opportunity. Connect with global partners, trade sustainably, and be part of the circular economy revolution.
          </p>
          <div className={styles.socials}>
            <div>
              <Link href="#" aria-label="Instagram"><FaInstagram size={20} /></Link>
              <Link href="#" aria-label="Facebook"><FaFacebookF size={20} /></Link>
              <Link href="#" aria-label="Twitter"><FaTwitter size={20} /></Link>
              <Link href="#" aria-label="WhatsApp"><FaWhatsapp size={20} /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* HOW IT WORKS */}
    <section className="relative py-20 px-4 bg-gradient-to-br from-[#e2d7ab] via-[#f5f3e7] to-[#e2d7ab] overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#027e3f]/10 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#027e3f]/10 rounded-full blur-3xl z-0" />
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-extrabold text-[#027e3f] mb-4 text-center tracking-tight">
          How It Works
        </h2>
        <p className="text-center text-gray-700 mb-14 text-lg max-w-2xl mx-auto">Our process is simple, transparent, and designed for both sellers and buyers to succeed. Here's how you can get started:</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          {/* Sellers Card */}
          <div className="flex-1 bg-white rounded-3xl shadow-xl p-10 border-t-8 border-[#027e3f] flex flex-col items-center hover:shadow-2xl transition-transform duration-300">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#e2d7ab] mb-6 shadow-lg">
              <FaBoxes className="w-8 h-8 text-[#027e3f]" />
            </div>
            <h3 className="text-2xl font-bold text-[#027e3f] mb-4">Sellers</h3>
            <ul className="space-y-4 text-gray-700 text-lg w-full">
              <li className="flex items-center gap-3"><FaBoxes className="text-[#027e3f]" /> List your Inventory</li>
              <li className="flex items-center gap-3"><svg width="24" height="24" fill="none" stroke="#027e3f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M3 12h18M3 6h18M3 18h18" /></svg> Connect with Buyers</li>
              <li className="flex items-center gap-3"><svg width="24" height="24" fill="none" stroke="#027e3f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a10 10 0 0 1 0 20" /></svg> Ship Globally</li>
            </ul>
          </div>
          {/* Infographic Divider */}
          <div className="hidden md:flex flex-col items-center mx-4">
            <div className="w-16 h-16 rounded-full bg-[#027e3f] flex items-center justify-center mb-4 shadow-lg">
              <svg width="36" height="36" fill="none" stroke="#e2d7ab" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 18l6-6 6 6" /></svg>
            </div>
            <div className="h-40 w-1 bg-gradient-to-b from-[#e2d7ab] to-[#027e3f] rounded-full" />
          </div>
          {/* Buyers Card */}
          <div className="flex-1 bg-white rounded-3xl shadow-xl p-10 border-t-8 border-[#e2d7ab] flex flex-col items-center hover:shadow-2xl transition-transform duration-300">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#027e3f] mb-6 shadow-lg">
              <FaSearch className="w-8 h-8 text-[#e2d7ab]" />
            </div>
            <h3 className="text-2xl font-bold text-[#027e3f] mb-4">Buyers</h3>
            <ul className="space-y-4 text-gray-700 text-lg w-full">
              <li className="flex items-center gap-3"><FaSearch className="text-[#027e3f]" /> Browse Materials</li>
              <li className="flex items-center gap-3"><svg width="24" height="24" fill="none" stroke="#027e3f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M8 17l4 4 4-4" /><path d="M12 12v9" /></svg> Negotiate & Order</li>
              <li className="flex items-center gap-3"><svg width="24" height="24" fill="none" stroke="#027e3f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="3" y="11" width="18" height="7" rx="2" /><path d="M16 11V7a4 4 0 0 0-8 0v4" /></svg> Receive Shipments</li>
            </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center mt-16 mb-12">
      <h2 className="text-4xl font-bold text-[#027e3f] mb-4">New Offers</h2>
      <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#027e3f] to-transparent mx-auto"></div>
      </div>
    <div className="relative overflow-hidden mb-12 w-full px-4">
      <div className="animate-scroll flex gap-8 whitespace-nowrap py-8 w-full">
        {[...offers, ...offers].map((offer, index) => (
          <Link
            key={`${offer.id}-${index}`}
            href="/products"
            className="inline-flex flex-col min-w-[450px] bg-gradient-to-br from-[#fcfbf4] via-white to-[#fcfbf4] rounded-2xl overflow-hidden card-hover-effect border border-[#027e3f]/10"
          >
            <div className="relative w-full overflow-hidden group">
              <img 
                src={offer.image} 
                alt={offer.name} 
                className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#027e3f] via-[#027e3f]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 bg-white/95 text-[#027e3f] px-4 py-2 rounded-xl text-sm font-semibold shadow-lg border-2 border-[#027e3f]/10 group-hover:border-[#027e3f]/30 transition-all duration-300">
                ${offer.price} / T
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-[#027e3f] text-white px-4 py-2 rounded-xl text-sm backdrop-blur-sm border border-white/30">
                  {offer.country}
                </span>
                <span className="bg-white/95 text-[#027e3f] px-4 py-2 rounded-xl text-sm font-medium border border-[#027e3f]/30">
                  {offer.quantity} MT
                </span>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-semibold text-[#027e3f] truncate pr-4 border-l-4 border-[#027e3f] pl-3">{offer.name}</h4>
                <div className="flex items-center gap-2 bg-[#f0f7f2] px-3 py-1.5 rounded-xl border border-[#027e3f]/10">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50"></div>
                  <span className="text-sm font-medium text-[#027e3f]">Available</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600 pt-3 border-t border-[#027e3f]/10">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-full bg-[#f0f7f2]">
                    <svg className="w-4 h-4 text-[#027e3f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <span className="font-medium text-[#027e3f]">Verified Supplier</span>
                </div>
                <div className="flex items-center gap-2 bg-[#f0f7f2] px-3 py-1.5 rounded-xl">
                  <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span className="font-medium text-[#027e3f]">4.8</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
        {/* Second set with same styling */}
        {[...offers, ...offers].map((offer, index) => (
          <Link
            key={`${offer.id}-${index}-duplicate`}
            href="/products"
            className="inline-flex flex-col min-w-[450px] bg-gradient-to-br from-[#fcfbf4] via-white to-[#fcfbf4] rounded-2xl overflow-hidden card-hover-effect border border-[#027e3f]/10"
          >
            {/* Same content structure as above */}
            <div className="relative w-full overflow-hidden group">
              <img 
                src={offer.image} 
                alt={offer.name} 
                className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#027e3f] via-[#027e3f]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 bg-white/95 text-[#027e3f] px-4 py-2 rounded-xl text-sm font-semibold shadow-lg border-2 border-[#027e3f]/10 group-hover:border-[#027e3f]/30 transition-all duration-300">
                ${offer.price} / T
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-[#027e3f] text-white px-4 py-2 rounded-xl text-sm backdrop-blur-sm border border-white/30">
                  {offer.country}
                </span>
                <span className="bg-white/95 text-[#027e3f] px-4 py-2 rounded-xl text-sm font-medium border border-[#027e3f]/30">
                  {offer.quantity} MT
                </span>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-semibold text-[#027e3f] truncate pr-4 border-l-4 border-[#027e3f] pl-3">{offer.name}</h4>
                <div className="flex items-center gap-2 bg-[#f0f7f2] px-3 py-1.5 rounded-xl border border-[#027e3f]/10">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50"></div>
                  <span className="text-sm font-medium text-[#027e3f]">Available</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600 pt-3 border-t border-[#027e3f]/10">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-full bg-[#f0f7f2]">
                    <svg className="w-4 h-4 text-[#027e3f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <span className="font-medium text-[#027e3f]">Verified Supplier</span>
                </div>
                <div className="flex items-center gap-2 bg-[#f0f7f2] px-3 py-1.5 rounded-xl">
                  <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span className="font-medium text-[#027e3f]">4.8</span>
                </div>
              </div>
            </div>
        </Link>
        ))}
      </div>
    </div>
    <div className="text-center mb-16">
      <Link 
        href="/marketplace" 
        className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#027e3f] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#027e3f]/90 overflow-hidden"
      >
        <span className="relative z-10">See More</span>
        <svg 
          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-r from-[#027e3f]/0 via-white/10 to-[#027e3f]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      </Link>
    </div>
    </>
  );
};

export default NatureHero;