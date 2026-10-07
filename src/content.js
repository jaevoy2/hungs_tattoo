/* Before getting tattooed / aftercare: from hungstattooparlor.com */
export const BEFORE = [
  ['Must be 18 or older', 'Absolutely no minors, no exceptions.'],
  ['Bring a valid photo ID', 'It must show your name and date of birth. We make a photocopy.'],
  ['Complete the paperwork', 'Required before any work begins.'],
  ['Pregnancy', 'We cannot provide body art services to pregnant women.'],
  ['Tell us about allergies', 'Disclosing any allergies is your responsibility.'],
  ['Check your spelling', 'For any writing or script, you must check the spelling before the tattoo. Fixing errors afterward is at the client\'s expense.'],
  ['Dress for it', 'Wear loose, comfortable, dark-colored clothing to your appointment.'],
]

export const AFTER = [
  ['First 1–2 hours', 'Remove the plastic wrap. Wash gently with lukewarm water and mild antibacterial soap using only your hands, never a washcloth or anything abrasive. Pat dry with clean paper towels and apply a light ointment such as A&D or Aquaphor (not Neosporin).'],
  ['Days 3–5', 'Keep applying ointment. Some peeling and scabbing is normal, and keeping the area moist helps minimize scarring. Itching is normal too, but leave it alone.'],
  ['Water', 'Showers are fine, but no soaking. Stay out of baths, hot tubs, pools and the ocean for at least 2–3 weeks.'],
  ['Long term', 'Once healed, protect your tattoo with SPF 30+ sunblock to keep it vibrant.'],
  ['If something looks wrong', 'Redness, rashes or bumps may be an allergic reaction; fever and chills may mean infection. Both need medical attention at the client\'s expense. The shop is not liable for infections or allergic reactions.'],
]

export const GOOGLE_REVIEWS = 'https://www.google.com/search?q=hung+tattoo+parlor+saint+paul#lrd=0x80d9543cb232d0b7:0x14f6072335937a34,1,,,'
export const RATING = { score: '4.9', count: 174 } // Google, as of Oct 2026

/*
 * Reviews copied from the shop's Google listing. Add more in the same shape:
 *   { name: 'Jane D.', rating: 5, text: '...', photos: ['reviews/file.jpg'] }  (photos optional, files live in public/images)
 * The homepage shows the first three; the /reviews page shows all of them.
 */
export const REVIEWS = [
  {
    name: 'S M', rating: 5, photos: ['reviews/sm-1.jpg', 'reviews/sm-2.jpg'],
    text: `I had such a great experience last night. I needed a coverup done. I ended up picking a wolf that Hung customized and sized to fit my arm perfectly. He surpassed my expectations and overall I am so happy with how it turned out. Hung is very talented and super friendly. I will definitely be going back to Hung for all my future tattoos. Thank you so much`,
  },
  {
    name: 'Selena', rating: 5, photos: ['reviews/selena-1.jpg', 'reviews/selena-2.jpg'],
    text: `Hung is a highly talented artist, he helped me honor my bunny who meant everything to me with a beautiful portrait & flowers of my choice around it. This is my second large/detailed piece by Hung and I love how he is able to take my idea, and make it even better than I can imagine in my head. My colored tattoo I got in 2019 is still vibrant and beautiful so I have no worries of my new tattoo not lasting! I never thought I'd love a piece more than my snake tattoo but I have to say my new one is definitely taking the top spot now. Go support his business, I doubt anyone in Minnesota is as talented and detailed as Hung! I'm very grateful that Hung helped me through my grief with this beautiful work of art.`,
  },
  {
    name: 'Julie Lystad', rating: 5, photos: ['reviews/julie-1.jpg', 'reviews/julie-2.jpg', 'reviews/julie-3.jpg', 'reviews/julie-4.jpg'],
    text: `Yalllllll - I visited a friend in Minneapolis and we decided to get a new tat on a whim. We called Hung and he got us both in within a couple hours. His daughter, Trish, was incredible. Her line work is impeccable and there is genuinely a solid chance I will fly back to MN for her work. Both Hung and Trish were incredible - super personal, great personalities and insanely creative. Highly recommend!!`,
  },
  {
    name: 'Amanda Cummings', rating: 5, photos: ['reviews/amanda.jpg'],
    text: `Absolutely amazing! I LOVE my cover-up (it used to be a deathly hallows HP tattoo!) I'm so happy. I will be back for my 2nd cover-up later this summer!!`,
  },
  {
    name: 'Charya Ratwatte', rating: 5, photos: ['reviews/charya.jpg'],
    text: `I had a wonderful time getting tattooed by Hung in his parlor—he is very funny, friendly, and an amazing artist (see attached). I look forward to getting more tattoos from him—he is also very accommodating and easy to work with. He's super popular so call ahead because it'll be at least a month or more out`,
  },
  {
    name: 'Steve Baumgartner', rating: 5, photos: ['reviews/steve-b.jpg'],
    text: `I contacted hung to get a very complicated cover-up of a cover-up done. Super chill dude and great to sit in his chair and have a conversation. Even better is that he has great vision and made something that was a bit of a mess into something beautiful. Highly recommend and can't wait to go back.`,
  },
  {
    name: 'Emily Le', rating: 5, photos: ['reviews/emily-1.jpg', 'reviews/emily-2.jpg'],
    text: `Hung is an amazing, fun, and talented artist! His tattoos are reasonably priced and is very detailed to his work. For a man with over 30 years of the tattoo industry, he definitely knows what he is doing. I got full sleeve done by him and it looks fantastic! I gave him an idea of a tattoo that I've been wanting and he freestyled it! I highly recommend everyone to go here and am excited to do business with him again.`,
  },
  {
    name: 'phil frisch', rating: 5,
    text: `An incredible experience with Hung. He did a coverup of 2 tattoos that I've had on my arm for 50 yrs. I went to him with a basic idea. He took that and ran with it. He is the best Artist I have ever had work on me. The intricate design is breathtaking. 110% Satisfied`,
  },
  {
    name: 'Eric Bratberg', rating: 5,
    text: `I normally don't do reviews, good or bad. But I couldn't pass it up. Hung made me feel like a friend rather than a customer. His rates are very fair for the great work he does. My "fresh" tattoos look great. If they change after healing, I will follow up, but I do believe I won't have any issues.`,
  },
  {
    name: 'Galve Deleste', rating: 5,
    text: `Hands down THE place to get a tattoo in the cities. Father and Daughter one stop dream art shop. I love my half sleeve from Hung, will be going back for more, and highly recommend that if you're reading this review to make the call and stop on in. Parking is in back behind the shop as it's right on University. Good tunes, great people, and awesome ink.`,
  },
  {
    name: 'M L', rating: 5,
    text: `Hung is hands down the best tattoo artist in Minnesota. He's incredibly creative, especially when it comes to cover-ups or bringing your ideas to life. Always honest and reliable, you can trust him to deliver amazing work every single time.`,
  },
  {
    name: 'Jeevan mv', rating: 5,
    text: `I recently visited this place for a cover-up, and I couldn't be happier with the results! I had an old tattoo that I was never fond of, and after years of considering my options, I finally decided to trust Hung with the job. Let me tell you, their skill is unmatched! The attention to detail and creativity in the design blew me away. They listened to all my ideas, understood my vision, and managed to create something far beyond my expectations. The cover-up looks flawless, and you can't even tell there was an old tattoo underneath. It's like a brand-new piece of art that I'm proud to show off! Look no further if you wanna get the best work in the city!`,
  },
  {
    name: 'Steve Park', rating: 5,
    text: `Got a tattoo 4-5 years ago that was not done very well at all. Been embarrassed by it for quite some time. Called Hung's and was able to get in for a quick consult for reworking my tattoo. The second he started rattling off ideas - I knew I was in the right spot. Few weeks later got in (bigger tattoo). Can't believe what a great job he did basically redoing most of it. Highly recommend this place - great people - great work!`,
  },
  {
    name: 'Dave Fallon', rating: 5,
    text: `Amazing job on my brand new ICE OUT tattoo! Absolutely amazing work, Hung you truly are a master of your craft`,
  },
  {
    name: 'Brian M', rating: 5,
    text: `Hung is genuine, friendly, and great at holding a conversation. I stumbled upon his website and called to schedule an consultation to see if he'd be willing to do a cover up which was not an easy task. He brain stormed some ideas and went to work. My tattoo's insane. The detail. Line work. Attention to detail is over the top. I am blown away and extremely grateful I met Hung. Thanks so much man you've been a blessing to me and my company.`,
  },
  {
    name: 'Aaron Walz', rating: 5,
    text: `I had a very good experience at Hung's shop. Hung has absolutely mastered the craft of tattooing, and did an exceptional job on my tattoo. He provides a safe, and positive environment for his clients. I would highly recommend Hung to anybody who is serious about getting a tattoo, as he does not have time for BS. Whether it is your first tattoo, or your last tattoo, Hung, along with his daughter Trish, will get the job done and I promise you will leave there happy.`,
  },
]

/* Shown while REVIEWS is empty. Themes summarized from Hoodline's "Saint Paul's top 5 tattoo spots" (Aug 2019), not customer quotes. */
export const HIGHLIGHTS = {
  source: "Hoodline, Saint Paul's top tattoo spots",
  url: 'https://hoodline.com/2019/08/here-are-saint-paul-s-top-5-tattoo-spots/',
  items: [
    ['Five stars on Yelp', 'Ranked the highest-rated tattoo spot in Saint Paul. Yelp now lists a 5.0 rating across 132 reviews.'],
    ['Detailed, clean work', 'Reviewers praise impeccable line work and vibrant color, from intimate portraits to large sleeves.'],
    ['Fair and friendly', 'Fair rates, friendly service and a welcoming, art-driven vibe.'],
  ],
}

/* Blog: carried over from the current site, newest first. Optional image: [file in public/images, alt] */
export const POSTS = [
  { slug: 'now-open', title: 'Now Open!', date: '2017-12-11', body: ['We are happy to announce that we are now open here in Saint Paul, MN.'] },
  { slug: 'tattoos-by-hung', title: 'Tattoos by Hung', date: '2015-01-07', image: ['blog/tattoos-by-hung.jpg', 'Tattoo by Hung, photographed by Priscilla Joy Photography'], body: ['Photos were taken by the talented Priscilla from Priscilla Joy Photography.'] },
  { slug: 'pinterest-instagram-facebook-etc', title: 'Pinterest, Instagram, Facebook, etc.', date: '2013-02-02', body: ['Check out our pages on the many social networks where we share new work.'] },
  { slug: 'vote-for-us', title: 'Vote for us', date: '2012-07-03', body: ['We were up for "Best Tattoo Parlor" in the San Diego A-List. Thank you to everyone who voted.'] },
  { slug: 'summer-sale-july-9-2012', title: 'Summer sale: July 9, 2012', date: '2012-07-03', body: ['$25 small tattoos, everything else discounted. 11 AM to 9 PM.'] },
  { slug: 'closed-july-4th', title: 'Closed July 4th', date: '2012-07-03', body: ['We are closed tomorrow, July 4th.'] },
  { slug: 'memorial-day', title: 'Memorial Day', date: '2012-05-25', body: ['We will be closed on May 28, 2012 for Memorial Day.'] },
  { slug: 'holiday-sales-for-christmas', title: 'Holiday sales for Christmas!', date: '2011-12-01', body: ['10% off each $100 gift certificate in December 2011!'] },
  { slug: 'after-halloween-sales', title: 'After Halloween Sales', date: '2011-10-29', body: ['All small names $25 and all small tattoos discounted. First come, first served. No appointments.'] },
  { slug: 'updated', title: 'Updated', date: '2011-08-10', body: ['Just updated and did maintenance on the website. Hope you like it. :)'] },
]

export const fmtDate = (iso) =>
  new Date(iso + 'T12:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
