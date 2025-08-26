const hdr=document.getElementById('hdr');
    window.addEventListener('scroll',()=>{
      if(window.scrollY>6) hdr.classList.add('scrolled'); else hdr.classList.remove('scrolled');
    });
    document.querySelectorAll('.acc').forEach(acc=>{
      const btn=acc.querySelector('.acc__summary');
      const panel=acc.querySelector('.acc__content');
      btn.addEventListener('click',()=>{
        const open=acc.classList.contains('open');
        document.querySelectorAll('.acc.open').forEach(a=>{
          a.classList.remove('open'); a.querySelector('.acc__content').style.height=0;
        });
        if(!open){acc.classList.add('open'); panel.style.height=panel.scrollHeight+'px';} else {panel.style.height=0;}
      });
    });
    function openImage(url){ window.open(url,'_blank'); }
    function copyText(text){ navigator.clipboard.writeText(text); }
    function handleSubmit(e, type){
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.target));
      const lines = [
        'Pembayaran '+ (type === 'api' ? 'API' : 'Panel'),
        'Bukti TF: ' + (data.bukti||'-'),
        (type === 'api' ? 'Username API: ' + (data.username||'-') : 'Username: ' + (data.username||'-')),
        (data.email ? ('Email: '+data.email) : null),
        (data.note ? ('Catatan: '+data.note) : null)
      ].filter(Boolean);
      navigator.clipboard.writeText(lines.join('\\n'));
      alert('Pesan untuk admin sudah disalin ke clipboard.');
    }