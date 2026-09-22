const PRODUCTS = [{"id":"p01","name":"Bremod Hair Color","size":"100ml","price":750,"cat":"color","img":"p01.jpg"},{"id":"p02","name":"Bremod Developer","size":"100ml","price":245,"cat":"developer","img":"p02.jpg"},{"id":"p03","name":"Bremod Developer","size":"1000ml","price":2200,"cat":"developer","img":"p03.jpg"},{"id":"p04","name":"Top Bleach Powder Sachet","size":"30gm","price":350,"cat":"bleach","img":"p04.jpg"},{"id":"p05","name":"Top Bleach Powder Sachet","size":"450gm","price":2800,"cat":"bleach","img":"p05.jpg"},{"id":"p06","name":"Bremod Bleach Powder Normal","size":"500gm","price":2800,"cat":"bleach","img":"p06.jpg"},{"id":"p07","name":"Bremod Bleach Powder Strong","size":"500gm","price":2800,"cat":"bleach","img":"p07.jpg"},{"id":"p08","name":"Bremod Keratin Super Blonde","size":"500gm","price":3250,"cat":"bleach","img":"p08.jpg"},{"id":"p09","name":"Bremod Heat Protector","size":"250ml","price":2250,"cat":"treatment","img":"p09.jpg"},{"id":"p10","name":"Bremod Hair Serum","size":"80ml","price":1800,"cat":"treatment","img":"p10.jpg"},{"id":"p11","name":"Bremod Hair Serum","size":"150ml","price":2400,"cat":"treatment","img":"p11.jpg"},{"id":"p12","name":"Bremod Keratin Protein Argan Serum","size":"120ml","price":1999,"cat":"treatment","img":"p12.jpg"},{"id":"p13","name":"Bremod Oxygen Cell","size":"250ml","price":1999,"cat":"treatment","img":"p13.jpg"},{"id":"p14","name":"Bremod Nourishing Mask","size":"500ml","price":1800,"cat":"mask","img":"p14.jpg"},{"id":"p15","name":"Bremod Nourishing Mask","size":"1000ml","price":2450,"cat":"mask","img":"p15.jpg"},{"id":"p16","name":"Bremod Hair Food Keratin & Vitamin B5 Mask","size":"500ml","price":1999,"cat":"mask","img":"p16.jpg"},{"id":"p17","name":"Bremod Hair Food Wheat Protein Mask","size":"500ml","price":1999,"cat":"mask","img":"p17.jpg"},{"id":"p18","name":"Bremod Hair Food College And Argan Oil Mask","size":"500ml","price":1999,"cat":"mask","img":"p18.jpg"},{"id":"p19","name":"Bremod Hair Food Camellia Seed Mask","size":"500ml","price":1999,"cat":"mask","img":"p19.jpg"},{"id":"p20","name":"Bremod Keratin Shampoo","size":"400ml","price":1795,"cat":"shampoo","img":"p20.jpg"},{"id":"p21","name":"Bremod Keratin Conditioner","size":"400ml","price":1795,"cat":"conditioner","img":"p21.jpg"},{"id":"p22","name":"Bremod Cocoa Butter Shampoo","size":"400ml","price":1495,"cat":"shampoo","img":"p22.jpg"},{"id":"p23","name":"Bremod Cocoa Butter Conditioner","size":"400ml","price":1495,"cat":"conditioner","img":"p23.jpg"},{"id":"p24","name":"Bremod Sulphate Free Keratin Shampoo","size":"400ml","price":2200,"cat":"shampoo","img":"p24.jpg"},{"id":"p25","name":"Bremod Keratin Complex Conditioner","size":"400ml","price":2200,"cat":"conditioner","img":"p25.jpg"},{"id":"p26","name":"Bremod After Color Moisturizing Keratin Shampoo","size":"400ml","price":1495,"cat":"shampoo","img":"p26.jpg"},{"id":"p27","name":"Bremod Anti Hair Loss Shampoo","size":"280ml","price":1500,"cat":"shampoo","img":"p27.jpg"},{"id":"p28","name":"Bremod Ultra Violet Shampoo","size":"250ml","price":2450,"cat":"shampoo","img":"p28.jpg"},{"id":"p29","name":"Bremod Leave In Conditioner","size":"238ml","price":1500,"cat":"conditioner","img":"p29.jpg"},{"id":"p30","name":"Bremod Cony Shampoo","size":"300ml","price":1400,"cat":"shampoo","img":"p30.jpg"},{"id":"p31","name":"Bremod Moisturizing Shampoo","size":"250ml","price":990,"cat":"shampoo","img":"p31.jpg"},{"id":"p32","name":"Bremod After Color Shampoo","size":"250ml","price":990,"cat":"shampoo","img":"p32.jpg"},{"id":"p33","name":"Bremod Anti Dandruff Shampoo","size":"250ml","price":990,"cat":"shampoo","img":"p33.jpg"},{"id":"p34","name":"Bremod Oil Control Shampoo","size":"250ml","price":990,"cat":"shampoo","img":"p34.jpg"},{"id":"p35","name":"Bremod Black Oil","size":"250ml","price":1695,"cat":"treatment","img":"p35.jpg"},{"id":"p36","name":"Bremod Black Oil","size":"500×2ml","price":2500,"cat":"treatment","img":"p36.jpg"},{"id":"p37","name":"Bremod Hair Loss & Growth Spray","size":"50ml","price":2800,"cat":"treatment","img":"p37.jpg"},{"id":"p38","name":"Bremod Keratin Blow Out","size":"250ml","price":5200,"cat":"rebond","img":"p38.jpg"},{"id":"p39","name":"Bremod Keratin Rebonding Small","size":"250×3ml","price":4750,"cat":"rebond","img":"p39.jpg"},{"id":"p40","name":"Bremod Keratin Rebonding Large Full Kit","size":"800ml","price":7500,"cat":"rebond","img":"p40.jpg"},{"id":"p41","name":"Bremod Rebonding","size":"800ml","price":4250,"cat":"rebond","img":"p41.jpg"},{"id":"p42","name":"Bremod Rebonding","size":"800ml","price":3250,"cat":"rebond","img":"p42.jpg"},{"id":"p43","name":"Bremod Keratin Mask #3","size":"500ml","price":2500,"cat":"mask","img":"p43.jpg"},{"id":"p44","name":"Bremod Hair Straightener","size":"HS","price":8000,"cat":"rebond","img":"p44.jpg"},{"id":"p45","name":"Bremod Hair Dryer","size":"HD","price":6500,"cat":"rebond","img":"p45.jpg"},{"id":"p46","name":"Bremod Hair Dryer 9600","size":"HD","price":4800,"cat":"rebond","img":"p46.jpg"}];

// Product images are bundled at the repo root; catalog names and prices remain user-supplied.

const CAT_LABEL = {color:'Hair Color',developer:'Developer',bleach:'Bleaching Powder',treatment:'Serum & Treatment',mask:'Hair Mask',shampoo:'Shampoo',conditioner:'Conditioner',rebond:'Rebonding & Tools'};

// Core UI state
const grid = document.getElementById('grid');
const search = document.getElementById('search');
const count = document.getElementById('count');
let activeFilter = 'all';
let cart = [];
let wishlist = [];
try { cart = JSON.parse(localStorage.getItem('cc_cart') || '[]'); } catch(e) { cart = []; }
try { wishlist = JSON.parse(localStorage.getItem('cc_wishlist') || '[]'); } catch(e) { wishlist = []; }

const CAT_PATH = {
  color:'<path d="M24 6c8 10 15 18 15 26a15 15 0 01-30 0c0-8 7-16 15-26z"/>',
  developer:'<rect x="14" y="14" width="20" height="26" rx="4"/><path d="M19 14v-5a2 2 0 012-2h6a2 2 0 012 2v5"/><circle cx="24" cy="26" r="4"/>',
  bleach:'<path d="M10 8h28v10l-6 6v16a2 2 0 01-2 2H18a2 2 0 01-2-2V24l-6-6z"/><path d="M17 30h14"/>',
  treatment:'<path d="M24 6v6M18 12h12l3 8H15z"/><path d="M14 20h20l-2 18a4 4 0 01-4 4H20a4 4 0 01-4-4z"/>',
  mask:'<rect x="10" y="16" width="28" height="24" rx="5"/><path d="M16 16v-4a4 4 0 014-4h8a4 4 0 014 4v4"/>',
  shampoo:'<rect x="16" y="16" width="16" height="26" rx="4"/><path d="M20 16v-4h8v4M20 8h8"/>',
  conditioner:'<path d="M19 4h10l1 10a10 10 0 013 7v13a4 4 0 01-4 4H19a4 4 0 01-4-4V21a10 10 0 013-7z"/>',
  rebond:'<rect x="6" y="18" width="22" height="12" rx="3"/><path d="M28 24h6l6-8M28 20l6-8"/>'
};
function svgPlaceholder(cat){
  const icon = CAT_PATH[cat] || CAT_PATH.treatment;
  const label = (CAT_LABEL[cat] || 'Bremod Product').toUpperCase();
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">'
    + '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fbf3ea"/><stop offset="1" stop-color="#f3e4d2"/></linearGradient></defs>'
    + '<rect width="300" height="300" fill="url(#g)"/>'
    + '<svg x="98" y="68" width="104" height="104" viewBox="0 0 48 48" fill="none" stroke="#c99d55" stroke-width="2">'+icon+'</svg>'
    + '<text x="150" y="232" text-anchor="middle" font-family="DM Sans, Arial, sans-serif" font-size="15" fill="#a9895a" font-weight="700" letter-spacing="1">'+label+'</text>'
    + '</svg>';
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}
const IMAGE_FALLBACKS = {
  developer:'p03.jpg',
  bleach:'p07.jpg',
  treatment:'p12.jpg',
  mask:'p14.jpg',
  shampoo:'p20.jpg',
  conditioner:'p21.jpg',
  rebond:'p40.jpg',
  color:'p01.jpg'
};
function imgFail(img, cat){
  if(img.dataset.failed) return;
  img.dataset.failed = '1';
  const fallbacks = {
    color:'p01.jpg',
    developer:'p03.jpg',
    bleach:'p07.jpg',
    treatment:'p12.jpg',
    mask:'p14.jpg',
    shampoo:'p20.jpg',
    conditioner:'p21.jpg',
    rebond:'p40.jpg'
  };
  img.src = fallbacks[cat] || fallbacks.treatment;
  img.onerror = function(){
    if(this.dataset.fallback2) return;
    this.dataset.fallback2='1';
    this.src='image-fallback.svg';
  };
}

function money(n){ return 'Rs. ' + Number(n).toLocaleString('en-PK') }
function save(){
  try{
    localStorage.setItem('cc_cart', JSON.stringify(cart));
    localStorage.setItem('cc_wishlist', JSON.stringify(wishlist));
  }catch(e){}
  count.textContent = cart.reduce((a,x)=>a+x.qty,0);
  const wc=document.getElementById('wishCount'); if(wc) wc.textContent=wishlist.length;
}
function filteredProducts(){
  const q = search.value.trim().toLowerCase();
  return PRODUCTS.filter(p => {
    const matchesFilter = activeFilter === 'all' || p.cat === activeFilter;
    const matchesSearch = !q || (p.name + ' ' + p.size).toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });
}
function render(){
  const list = filteredProducts();
  grid.innerHTML = list.length ? list.map((p,i) => `
    <article class="card pre-fall" data-id="${p.id}">
      <div class="pic" onclick="viewProduct('${p.id}')"><img src="${p.img}" alt="${p.name} ${p.size}" onerror="imgFail(this,'${p.cat}')"></div>
      <button class="wish ${wishlist.includes(p.id)?'liked':''}" onclick="toggleWish('${p.id}')" aria-label="${wishlist.includes(p.id)?'Remove from wishlist':'Add to wishlist'}">${wishlist.includes(p.id)?'♥':'♡'}</button>
      <h3 onclick="viewProduct('${p.id}')">${p.name}</h3>
      <p class="size">${p.size}</p>
      <div class="price">${money(p.price)}</div>
      <button class="add" onclick="addById('${p.id}')">Add to Cart</button>
    </article>`).join('') : '<div class="empty"><h3>No products found</h3><p>Try another product name or category</p></div>';
  setupCardFall();
}

function setupCardFall(){
  const cards = document.querySelectorAll('.card.pre-fall');
  try{
    if('IntersectionObserver' in window){
      const io = new IntersectionObserver((entries)=>{
        entries.forEach((entry,idx)=>{
          if(entry.isIntersecting){
            const el = entry.target;
            const delay = Math.min(idx,10) * 0.05;
            el.style.animationDelay = delay + 's';
            el.classList.add('fall-in');
            el.classList.remove('pre-fall');
            io.unobserve(el);
          }
        });
      },{threshold:0.15});
      cards.forEach(c=>io.observe(c));
      // safety net: never leave a card permanently hidden
      setTimeout(()=>{
        document.querySelectorAll('.card.pre-fall').forEach(c=>{
          c.classList.add('fall-in'); c.classList.remove('pre-fall');
        });
      }, 3000);
    } else {
      cards.forEach(c=>{ c.classList.add('fall-in'); c.classList.remove('pre-fall'); });
    }
  }catch(e){
    cards.forEach(c=>{ c.classList.remove('pre-fall'); });
  }
}
function addById(id){
  const p = PRODUCTS.find(x=>x.id===id); if(!p) return;
  const item = cart.find(x=>x.id===id);
  if(item) item.qty++; else cart.push({...p,qty:1});
  save(); openCart();
}
function openCart(){ document.getElementById('cart').classList.add('on'); document.getElementById('overlay').classList.add('on'); renderCart(); }
function closeCart(){ document.getElementById('cart').classList.remove('on'); document.getElementById('overlay').classList.remove('on'); }
function renderCart(){
  const box=document.getElementById('cartItems');
  box.innerHTML = cart.length ? cart.map((x,i)=>`<div class="cartitem"><img src="${x.img}" alt="" onerror="imgFail(this,'${x.cat}')"><div><b>${x.name}</b><br><small>${x.size}</small><br><strong>${money(x.price)}</strong><br><button onclick="qty(${i},-1)">−</button> <span>${x.qty}</span> <button onclick="qty(${i},1)">+</button></div></div>`).join('') : '<p>Your cart is empty</p>';
  document.getElementById('total').textContent=money(cart.reduce((a,x)=>a+x.price*x.qty,0));
}
function qty(i,d){ if(!cart[i]) return; cart[i].qty += d; if(cart[i].qty<1) cart.splice(i,1); save(); renderCart(); }
let payMethod = 'COD';

function proceedToCheckout(){
  if(!cart.length){ return; }
  const summary = document.getElementById('ckSummary');
  const total = cart.reduce((a,x)=>a+x.price*x.qty,0);
  summary.innerHTML = cart.map(x=>`<div class="ck-row"><span>${x.name} ${x.size} x${x.qty}</span><span>${money(x.price*x.qty)}</span></div>`).join('')
    + `<div class="ck-total"><span>Total</span><span>${money(total)}</span></div>`;
  closeCart();
  document.getElementById('checkoutModal').classList.add('on');
}
function closeCheckout(){ document.getElementById('checkoutModal').classList.remove('on'); }

document.querySelectorAll('.pay-opt').forEach(el=>{
  el.addEventListener('click', ()=>{
    document.querySelectorAll('.pay-opt').forEach(x=>x.classList.remove('sel'));
    el.classList.add('sel');
    payMethod = el.dataset.pay;
    document.getElementById('payNote').classList.toggle('show', payMethod === 'Online');
  });
});

function confirmOrder(){
  const name = document.getElementById('ckName').value.trim();
  const phone = document.getElementById('ckPhone').value.trim();
  const address = document.getElementById('ckAddress').value.trim();
  if(!name || !phone || !address){
    alert('Please fill in your name, phone and delivery address.');
    return;
  }
  const total = cart.reduce((a,x)=>a+x.price*x.qty,0);
  const items = cart.map(x=>`• ${x.name} ${x.size} x${x.qty} — ${money(x.price*x.qty)}`).join('\n');
  const text =
`Assalam o Alaikum Cosmetic Corner I want to place an order

${items}

Total: ${money(total)}
Payment: ${payMethod === 'COD' ? 'Cash on Delivery' : 'Online Payment (Meezan Bank / Easypaisa — screenshot attached)'}

Name: ${name}
Phone: ${phone}
Address: ${address}

Please confirm availability and delivery details`;
  window.open('https://wa.me/923072368529?text='+encodeURIComponent(text),'_blank');
  closeCheckout();
}
function checkout(){ proceedToCheckout(); }
function toggleWish(id){
  wishlist = wishlist.includes(id) ? wishlist.filter(x=>x!==id) : [...wishlist,id];
  save();
  const btn=document.querySelector(`.card[data-id="${id}"] .wish`);
  if(btn){
    const liked=wishlist.includes(id);
    btn.classList.toggle('liked',liked);
    btn.textContent=liked?'♥':'♡';
    btn.setAttribute('aria-label',liked?'Remove from wishlist':'Add to wishlist');
  }
  if(document.body.dataset.wishlistView==='1') showWishlist();
}
function showWishlist(){
  document.body.dataset.wishlistView='1';
  const list=PRODUCTS.filter(p=>wishlist.includes(p.id));
  activeFilter='all';
  if(search) search.value='';
  document.querySelectorAll('.filters button').forEach(b=>b.classList.remove('active'));
  const allBtn=document.querySelector('.filters button[data-filter="all"]'); if(allBtn) allBtn.classList.add('active');
  grid.innerHTML=list.length ? list.map(p=>`<article class="card" data-id="${p.id}"><div class="pic" onclick="viewProduct('${p.id}')"><img src="${p.img}" alt="${p.name} ${p.size}" onerror="imgFail(this,'${p.cat}')"></div><button class="wish liked" onclick="toggleWish('${p.id}')" aria-label="Remove from wishlist">♥</button><h3 onclick="viewProduct('${p.id}')">${p.name}</h3><p class="size">${p.size}</p><div class="price">${money(p.price)}</div><button class="add" onclick="addById('${p.id}')">Add to Cart</button></article>`).join('') : '<div class="empty"><h3>Your wishlist is empty</h3><p>Tap ♡ on any product to save it here</p></div>';
  document.querySelector('.products').scrollIntoView({behavior:'smooth'});
  setupCardFall();
}

function viewProduct(id){
  const p=PRODUCTS.find(x=>x.id===id); if(!p)return;
  const modal=document.getElementById('productModal');
  document.getElementById('modalBody').innerHTML=`<div class="modal-product"><img src="${p.img}" alt="${p.name}" onerror="imgFail(this,'${p.cat}')"><div><p class="size">${p.size}</p><h2>${p.name}</h2><div class="price">${money(p.price)}</div><p>Genuine Bremod Professional product from the current catalog</p><button class="add" onclick="addById('${p.id}');closeProduct()">Add to Cart</button></div></div>`;
  modal.classList.add('on');
}
function closeProduct(){ document.getElementById('productModal').classList.remove('on'); }
function setFilter(filter){ document.body.dataset.wishlistView='0'; activeFilter=filter; document.querySelectorAll('.filters button').forEach(x=>x.classList.toggle('active',x.dataset.filter===filter)); render(); }
function shop(){ document.querySelector('.products').scrollIntoView({behavior:'smooth'}); }
function showAccount(){ alert('Login / Register can be connected to your preferred account system when the site is deployed'); }

document.getElementById('overlay').onclick=closeCart;
const productModal = document.getElementById('productModal');
if(productModal) productModal.onclick=e=>{if(e.target.id==='productModal')closeProduct()};
const checkoutModal = document.getElementById('checkoutModal');
if(checkoutModal) checkoutModal.onclick=e=>{if(e.target.id==='checkoutModal')closeCheckout()};
search.addEventListener('input',()=>{document.body.dataset.wishlistView='0';render();});
document.getElementById('searchBtn').onclick=()=>{search.focus();render()};
document.querySelectorAll('.filters button').forEach(b=>b.addEventListener('click',()=>setFilter(b.dataset.filter)));
document.querySelector('.cartLink').onclick=openCart;
document.querySelector('.wishLink').onclick=showWishlist;
document.querySelector('.loginLink').onclick=showAccount;
document.querySelectorAll('.shopBtn').forEach(b=>b.onclick=shop);
document.getElementById('clearSearch').onclick=()=>{search.value='';activeFilter='all';setFilter('all');};

document.body.dataset.wishlistView='0'; render(); save();

// Hide the floating WhatsApp button while the hero photo is on screen, show it once scrolled past
try{
  const waFloat = document.querySelector('.wa-float');
  const heroEl = document.getElementById('heroSection');
  if(waFloat && heroEl && 'IntersectionObserver' in window){
    const heroIO = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        waFloat.classList.toggle('wa-hide', entry.isIntersecting);
      });
    },{threshold:0.35});
    heroIO.observe(heroEl);
  }
}catch(e){}

// Scroll-reveal for section entrances — progressive enhancement only.
// Content is visible by default (CSS .reveal-io only hides once JS confirms
// it can also reveal it), and a safety-net timeout guarantees nothing is
// ever left permanently hidden even if IntersectionObserver misbehaves.
try{
  if('IntersectionObserver' in window){
    const revealEls = document.querySelectorAll('.reveal-io');
    const io2 = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('in');
          io2.unobserve(entry.target);
        }
      });
    },{threshold:0.1});
    revealEls.forEach(el=>io2.observe(el));
    setTimeout(()=>{ revealEls.forEach(el=>el.classList.add('in')); }, 2500);
  } else {
    document.querySelectorAll('.reveal-io').forEach(el=>el.classList.add('in'));
  }
}catch(e){
  document.querySelectorAll('.reveal-io').forEach(el=>el.classList.add('in'));
}
