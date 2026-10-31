const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const menuButton=$('.menu-button'),nav=$('.navigation');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
$$('.navigation a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}));
$('#year').textContent=new Date().getFullYear();
let activeFilter='all';
function filterProducts(){const q=$('#product-search').value.trim().toLowerCase();let visible=0;$$('.product-card').forEach(card=>{const categoryMatch=activeFilter==='all'||card.dataset.category===activeFilter;const searchMatch=!q||card.dataset.name.includes(q)||card.innerText.toLowerCase().includes(q);const show=categoryMatch&&searchMatch;card.hidden=!show;if(show)visible++;});$('#no-results').hidden=visible!==0;$('#results-count').textContent=`Showing ${visible} of 8 product lines`;$('#clear-search').hidden=!q&&activeFilter==='all';}
$$('.filter').forEach(btn=>btn.addEventListener('click',()=>{activeFilter=btn.dataset.filter;$$('.filter').forEach(b=>b.classList.toggle('active',b===btn));filterProducts();}));
$('#product-search').addEventListener('input',filterProducts);
$('#clear-search').addEventListener('click',()=>{ $('#product-search').value='';activeFilter='all';$$('.filter').forEach(b=>b.classList.toggle('active',b.dataset.filter==='all'));filterProducts();$('#product-search').focus();});
const productData={
 collar:{title:'Pet Protection Collar – 2 Pack',category:'PET ACCESSORIES',description:'A practical pet accessory for customers shopping for their dogs and cats.',image:'assets/Collar.jpg'},
 dino:{title:'Dinosaur Eggs & Figures',category:'TOYS & NOVELTY',description:'Brightly coloured novelty toys designed to catch the eye on the shelf.',image:'assets/Colorful Dinosaur Eggs and Toys.png'},
 cars:{title:'Model Sports Cars',category:'TOY VEHICLES',description:'An assortment of miniature cars for toy and novelty sections.',image:'assets/Model Sports Car Toy.jpg'},
 orb:{title:'Illuminated Orb Ball',category:'GAMES & GADGETS',description:'A colourful novelty gadget with a striking illuminated look.',image:'assets/Orb ball.jpg'},
 nail:{title:'Pet Nail Grooming Tool',category:'PET ACCESSORIES',description:'A grooming accessory for customers who care for their pets at home.',image:'assets/Pet Nail Clipper.jpg'},
 fidget:{title:'Push & Pop Fidget Toys',category:'FIDGET TOYS',description:'A colourful assortment of tactile toys and sensory favourites.',image:'assets/Push and Pop.jpg'},
 tictactoe:{title:'Electronic Tic-Tac-Toe Game',category:'GAMES & GADGETS',description:'A compact electronic game inspired by a familiar classic.',image:'assets/Tic Tac Toe.jpg'},
 camera:{title:'Digital Instant Print Camera',category:'TOYS & GADGETS',description:'A pink digital instant print camera bundle supplied with accessories shown in the product image. Please enquire for current specifications and wholesale availability.',image:'assets/Digital Camera.jpg'}
};
const dialog=$('#product-dialog');let selectedProduct='';
let recentKey='';function openProduct(key){const p=productData[key];if(!p)return;recentKey=key;selectedProduct=p.title;$('#recently-viewed').hidden=false;$('#recent-product-name').textContent=p.title;try{sessionStorage.setItem('elsmanRecentProduct',key);}catch(e){}$('#dialog-img').src=p.image;$('#dialog-img').alt=p.title;$('#dialog-title').textContent=p.title;$('#dialog-category').textContent=p.category;$('#dialog-description').textContent=p.description;dialog.showModal();}
$$('[data-product]').forEach(btn=>btn.addEventListener('click',()=>openProduct(btn.dataset.product)));
$('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
$('#dialog-enquire').addEventListener('click',()=>{dialog.close();$('#enquiry-form [name="message"]').value=`I'm interested in ${selectedProduct}. Please share current availability, specifications and wholesale pricing.`;$('#contact').scrollIntoView({behavior:'smooth'});});
$$('[data-enquire]').forEach(btn=>btn.addEventListener('click',()=>{$('#enquiry-form [name="message"]').value=`I'm interested in ${btn.dataset.enquire}. Please share current availability, specifications and wholesale pricing.`;$('#contact').scrollIntoView({behavior:'smooth'});}));
$('#enquiry-form').addEventListener('submit',e=>{
  e.preventDefault();
  const form=e.currentTarget;
  if(!form.reportValidity())return;
  const f=new FormData(form);
  const subject=encodeURIComponent('Wholesale enquiry – Elsman UK Ltd');
  const body=encodeURIComponent([
    `Name: ${f.get('name')}`,
    `Business: ${f.get('business')}`,
    `Business email: ${f.get('email')}`,
    `Phone: ${f.get('phone')||'Not provided'}`,
    `Location: ${f.get('location')||'Not provided'}`,
    `Products of interest: ${f.get('interest')||'General wholesale enquiry'}`,
    '', 'Message:', f.get('message'), '', 'Consent to respond: Yes'
  ].join('\n'));
  const mailto=`mailto:hello@elsman.co.uk?subject=${subject}&body=${body}`;
  const status=$('#form-status');
  status.textContent='We have prepared your enquiry. Your email app should open; review the details and press Send.';
  status.classList.remove('form-error');
  // Trigger the mail client directly from the visitor's submit action.
  window.location.assign(mailto);
});


// Scroll-reveal: lightweight, accessible and disabled for reduced-motion visitors.
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduceMotion && 'IntersectionObserver' in window){
  const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}}),{threshold:.12});
  $$('.section,.pulse-strip,.intro-band,.feature,.step,.faq-list details,.product-card').forEach(el=>{el.classList.add('reveal-on-scroll');revealObserver.observe(el);});
}
// Count-up uses only verified catalogue figures shown on this page.
if(!reduceMotion && 'IntersectionObserver' in window){
 const countObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;const el=entry.target;const target=Number(el.dataset.count||0);let start=0;const duration=850;const begin=performance.now();function tick(now){const progress=Math.min((now-begin)/duration,1);el.textContent=String(Math.round(target*(1-Math.pow(1-progress,3))));if(progress<1)requestAnimationFrame(tick);}requestAnimationFrame(tick);countObserver.unobserve(el);}),{threshold:.7});
 $$('.count-up').forEach(el=>countObserver.observe(el));
}else{$$('.count-up').forEach(el=>el.textContent=el.dataset.count);}
// A rotating hero visual uses supplied catalogue photos, not external stock imagery.
const heroSlides=[
 {src:'assets/Colorful Dinosaur Eggs and Toys.png',alt:'Colourful dinosaur eggs and toy dinosaurs'},
 {src:'assets/Digital Camera.jpg',alt:'Pink digital instant print camera bundle'},
 {src:'assets/Push and Pop.jpg',alt:'Colourful push and pop fidget toys'},
 {src:'assets/Model Sports Car Toy.jpg',alt:'Assorted model sports cars'}
];
const heroImg=$('.hero-image-main img');let heroIndex=0;
if(heroImg && !reduceMotion){window.setInterval(()=>{heroIndex=(heroIndex+1)%heroSlides.length;heroImg.classList.add('image-changing');window.setTimeout(()=>{heroImg.src=heroSlides[heroIndex].src;heroImg.alt=heroSlides[heroIndex].alt;heroImg.classList.remove('image-changing');},260);},5200);}
// Back-to-top control appears after the visitor moves down the page.
const backTop=$('#back-to-top');window.addEventListener('scroll',()=>backTop.classList.toggle('visible',window.scrollY>520),{passive:true});backTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:reduceMotion?'auto':'smooth'}));
// Restore the last product viewed during this browser tab session.
try{const saved=sessionStorage.getItem('elsmanRecentProduct');if(saved&&productData[saved]){recentKey=saved;$('#recently-viewed').hidden=false;$('#recent-product-name').textContent=productData[saved].title;}}catch(e){}
$('#recent-product-open').addEventListener('click',()=>{if(recentKey)openProduct(recentKey);});
