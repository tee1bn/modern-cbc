/* Simple bottom-sheet betsip component (no API calls) */
class BetslipSheet {
  constructor(rootId){
    this.root = document.getElementById(rootId);
    this.list = this.root.querySelector('#sheet-list');
    this.countEl = this.root.querySelector('#sheet-count');
    this.bookBtn = this.root.querySelector('#book-btn');
    this.clearAll = this.root.querySelector('#clear-all');
    this.closeBtn = this.root.querySelector('#sheet-close');

    this.root.querySelector('.sheet-handle').addEventListener('click', ()=> this.toggle());
    this.closeBtn.addEventListener('click', ()=> this.close());
    this.clearAll.addEventListener('click', ()=> this.onClear && this.onClear());
    this.bookBtn.addEventListener('click', ()=> this.onBook && this.onBook());
  }

  open(){ this.root.classList.add('open'); this.root.setAttribute('aria-hidden','false'); }
  close(){ this.root.classList.remove('open'); this.root.setAttribute('aria-hidden','true'); }
  toggle(){ this.root.classList.toggle('open'); }

  update(bets){
    this.list.innerHTML = '';
    if(!bets || bets.length===0){ this.list.textContent = 'No selections'; this.countEl.textContent=0; this.bookBtn.textContent = 'Book (0)'; return }
    bets.forEach(b=>{
      const el = document.createElement('div');
      el.className='sheet-item';
      el.innerHTML = `<div class="si-row"><strong>${b.match}</strong><div class="si-meta">${b.market} : <em>${b.selection}</em></div></div>`;
      this.list.appendChild(el);
    });
    this.countEl.textContent = bets.length;
    this.bookBtn.textContent = `Book (${bets.length})`;
  }
}

// attach to window for easy usage
window.BetslipSheet = BetslipSheet;