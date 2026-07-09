const pageTitle = 'صدقة جارية عن روح المرحومة إحسان عبد العليم';
const pageText = 'ادعُ للمرحومة إحسان عبد العليم بالرحمة والمغفرة، وشارك الأجر مع من تحب.';

const quran = {
  fatiha: {
    title: 'سورة الفاتحة',
    text: `بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
الرَّحْمَٰنِ الرَّحِيمِ
مَالِكِ يَوْمِ الدِّينِ
إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ
اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ
صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ`
  },
  ikhlas: {
    title: 'سورة الإخلاص',
    text: `قُلْ هُوَ اللَّهُ أَحَدٌ
اللَّهُ الصَّمَدُ
لَمْ يَلِدْ وَلَمْ يُولَدْ
وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ`
  },
  kursi: {
    title: 'آية الكرسي',
    text: `اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ`
  },
  falaq: {
    title: 'سورة الفلق',
    text: `قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ
مِن شَرِّ مَا خَلَقَ
وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ
وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ
وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ`
  },
  nas: {
    title: 'سورة الناس',
    text: `قُلْ أَعُوذُ بِرَبِّ النَّاسِ
مَلِكِ النَّاسِ
إِلَٰهِ النَّاسِ
مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ
الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ
مِنَ الْجِنَّةِ وَالنَّاسِ`
  },
  asr: {
    title: 'سورة العصر',
    text: `وَالْعَصْرِ
إِنَّ الْإِنسَانَ لَفِي خُسْرٍ
إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ`
  },
  kawthar: {
    title: 'سورة الكوثر',
    text: `إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ
فَصَلِّ لِرَبِّكَ وَانْحَرْ
إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ`
  },
  nasr: {
    title: 'سورة النصر',
    text: `إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ
وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا
فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا`
  },
  kafirun: {
    title: 'سورة الكافرون',
    text: `قُلْ يَا أَيُّهَا الْكَافِرُونَ
لَا أَعْبُدُ مَا تَعْبُدُونَ
وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ
وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ
وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ
لَكُمْ دِينُكُمْ وَلِيَ دِينِ`
  }
};

const toast = document.getElementById('toast');
function showToast(message){
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 2200);
}

async function copyText(text){
  try{
    await navigator.clipboard.writeText(text);
    showToast('تم النسخ');
  }catch{
    showToast('انسخ النص يدويًا من فضلك');
  }
}

document.querySelectorAll('[data-copy]').forEach(btn => {
  btn.addEventListener('click', () => copyText(btn.dataset.copy));
});

document.querySelectorAll('[data-copy-page]').forEach(btn => {
  btn.addEventListener('click', () => copyText(location.href));
});

async function sharePage(){
  const shareData = { title: pageTitle, text: pageText, url: location.href };
  if(navigator.share){
    try{ await navigator.share(shareData); return; }catch{}
  }
  await copyText(`${pageTitle}\n${pageText}\n${location.href}`);
  showToast('تم نسخ رابط الصفحة للمشاركة');
}

document.querySelectorAll('[data-share]').forEach(btn => btn.addEventListener('click', sharePage));

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.getElementById('siteNav');
menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  siteNav.classList.toggle('open');
});
siteNav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  siteNav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded','false');
}));

const counters = document.querySelectorAll('[data-count]');
function getCounter(key){ return Number(localStorage.getItem(`tasbeeh-${key}`) || 0); }
function setCounter(key, value){ localStorage.setItem(`tasbeeh-${key}`, String(value)); }
function renderCounters(){
  counters.forEach(btn => btn.querySelector('span').textContent = getCounter(btn.dataset.count));
}
counters.forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.count;
    const value = getCounter(key) + 1;
    setCounter(key, value);
    btn.querySelector('span').textContent = value;
  });
});
document.getElementById('resetTasbeeh')?.addEventListener('click', () => {
  counters.forEach(btn => setCounter(btn.dataset.count, 0));
  renderCounters();
  showToast('تم تصفير العدادات');
});
renderCounters();

const modal = document.getElementById('quranModal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const copyQuran = document.getElementById('copyQuran');
let activeQuranText = '';

document.querySelectorAll('[data-quran]').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = quran[btn.dataset.quran];
    if(!item) return;
    modalTitle.textContent = item.title;
    modalText.textContent = item.text;
    activeQuranText = item.text;
    if(typeof modal.showModal === 'function') modal.showModal();
    else modal.setAttribute('open','');
  });
});
copyQuran?.addEventListener('click', () => copyText(activeQuranText));
document.querySelectorAll('[data-close-modal]').forEach(btn => btn.addEventListener('click', () => modal.close()));
modal?.addEventListener('click', (event) => {
  if(event.target === modal) modal.close();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// Daily gift checklist (saved locally on each visitor's device)
const giftChecks = document.querySelectorAll('[data-gift]');
function renderGiftChecks(){
  giftChecks.forEach(input => {
    input.checked = localStorage.getItem(`gift-${input.dataset.gift}`) === '1';
  });
}
giftChecks.forEach(input => {
  input.addEventListener('change', () => {
    localStorage.setItem(`gift-${input.dataset.gift}`, input.checked ? '1' : '0');
    showToast(input.checked ? 'جزاك الله خيرًا، تم تسجيل العمل' : 'تم إلغاء التحديد');
  });
});
renderGiftChecks();
