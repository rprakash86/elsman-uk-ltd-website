const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const menuButton=$('.menu-button'),nav=$('.navigation');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
$$('.navigation a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}));
$('#year').textContent=new Date().getFullYear();
let activeFilter='all';
function filterProducts(){const q=$('#product-search').value.trim().toLowerCase();let visible=0;$$('.product-card').forEach(card=>{const categoryMatch=activeFilter==='all'||card.dataset.category===activeFilter;const searchMatch=!q||card.dataset.name.includes(q)||card.innerText.toLowerCase().includes(q);const show=categoryMatch&&searchMatch;card.hidden=!show;if(show)visible++;});$('#no-results').hidden=visible!==0;}
$$('.filter').forEach(btn=>btn.addEventListener('click',()=>{activeFilter=btn.dataset.filter;$$('.filter').forEach(b=>b.classList.toggle('active',b===btn));filterProducts();}));
$('#product-search').addEventListener('input',filterProducts);
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
function openProduct(key){const p=productData[key];if(!p)return;selectedProduct=p.title;$('#dialog-img').src=p.image;$('#dialog-img').alt=p.title;$('#dialog-title').textContent=p.title;$('#dialog-category').textContent=p.category;$('#dialog-description').textContent=p.description;dialog.showModal();}
$$('[data-product]').forEach(btn=>btn.addEventListener('click',()=>openProduct(btn.dataset.product)));
$('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
$('#dialog-enquire').addEventListener('click',()=>{dialog.close();$('#enquiry-form [name="message"]').value=`I'm interested in ${selectedProduct}. Please share current availability, specifications and wholesale pricing.`;$('#contact').scrollIntoView({behavior:'smooth'});});
$$('[data-enquire]').forEach(btn=>btn.addEventListener('click',()=>{$('#enquiry-form [name="message"]').value=`I'm interested in ${btn.dataset.enquire}. Please share current availability, specifications and wholesale pricing.`;$('#contact').scrollIntoView({behavior:'smooth'});}));
$('#enquiry-form').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget);const subject=encodeURIComponent('Wholesale enquiry – Elsman UK Ltd');const body=encodeURIComponent(`Name: ${f.get('name')}\nBusiness: ${f.get('business')}\nBusiness email: ${f.get('email')}\nPhone: ${f.get('phone')||'Not provided'}\nLocation: ${f.get('location')||'Not provided'}\nProducts of interest: ${f.get('interest')}\n\nMessage:\n${f.get('message')}\n\nConsent to respond: Yes`);$('#form-status').textContent='Your email app should open with the enquiry ready for review. Please press Send in your email app.';window.location.href=`mailto:hello@elsman.co.uk?subject=${subject}&body=${body}`;});
