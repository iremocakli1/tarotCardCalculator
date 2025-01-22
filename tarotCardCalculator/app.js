let selectedGender = '';

// Doğum tarihini sıfırlamak için fonksiyon
function resetForm() {
    document.getElementById("birthdate").value = '';  
    selectedGender = '';
    document.getElementById("tarotResult").style.display = 'none'; 
    document.getElementById("male").style.borderColor = "#9c4baf";
    document.getElementById("female").style.borderColor = "#9c4baf";
    document.getElementById("tarotCard").style.backgroundColor = '';
    document.getElementById("tarotCardsImage").src = '';
    document.getElementById("genderIcon").style.display = 'none';
}

// Cinsiyet seçimi fonksiyonu
function selectGender(gender) {
    selectedGender = gender;

    // Cinsiyet seçildiğinde, butonların renklerini güncelle
    if (gender === 'male') {
        document.getElementById("male").style.borderColor = "#9c4baf";
        document.getElementById("female").style.borderColor = "#ccc";  // Dişi butonu gri
    } else if (gender === 'female') {
        document.getElementById("female").style.borderColor = "#9c4baf";
        document.getElementById("male").style.borderColor = "#ccc";  // Erkek butonu gri
    }
}


// Cinsiyet simgesini belirleme fonksiyonu
function getGenderIcon(gender) {
    if (gender === 'male') {
        return "https://media.istockphoto.com/id/1407436459/tr/vekt%C3%B6r/male-gender-symbol.png?s=2048x2048&w=is&k=20&c=e-uoaqiIjHGChzo3ah8EQHh2lNtgfTDW7mE3eY4MrNU=";
    } else if (gender === 'female') {
        return "https://media.istockphoto.com/id/1407435383/tr/vekt%C3%B6r/female-gender-symbol.png?s=2048x2048&w=is&k=20&c=xCtjdZvlWy8wTP7OiAegJHxAO4N-lDn65il5lh_5A-E=";
    }
}

  
  document.addEventListener("mouseout", function() {
    var cursorTail = document.getElementById("cursor-tail");
    cursorTail.classList.remove("visible");
  });
  
  document.addEventListener("mousemove", function(event) {
    var cursorTail = document.getElementById("cursor-tail");
    var xPos = event.clientX;
    var yPos = event.clientY;
  
    setTimeout(function() {
      cursorTail.style.left = (xPos - 75) + "px";
      cursorTail.style.top = (yPos - 75) + "px";
    }, 50);
  });
  
  const numStars =500; // Adjust the number of stars as needed
  
  for (let i = 0; i < numStars; i++) {
    createStar(i);
  }
  
  function createStar(index) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 5 + "s";
    document.body.appendChild(star);
  }
  
  function validateDate(input) {
    const value = input.value;
    const regex = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD formatında kontrol et
    if (value.match(regex)) {
        // Tarih doğru formatta
        input.style.borderColor = '#9b5ef0';  // Doğru tarih, mor çerçeve
    } else {
        // Yanlış tarih formatı
        input.style.borderColor = 'red';  // Yanlış tarih, kırmızı çerçeve
    }
}


function resetForm() {
  document.getElementById("birthdate").value = "";
  document.getElementById("tarotResult").style.display = "none";
  document.getElementById("tarotCardsImage").src = "";
}

function selectGender(gender) {
  // Cinsiyet seçimi yapılınca burada işlem yapılabilir
  console.log(gender);
}

function validateDate(input) {
  let date = new Date(input.value);
  if (date > new Date()) {
      alert("Geçerli bir doğum tarihi giriniz!");
      input.value = "";
  }
}
function calculateTarot() {
  const birthdate = document.getElementById("birthdate").value;
  if (!birthdate) {
      alert("Lütfen doğum tarihinizi girin.");
      return;
  }

  const [year, month, day] = birthdate.split("-").map(Number);

  // Sadece gün ve ayı topluyoruz
  const sum = day + month;

  let numerology = sum;
  
  // Eğer toplam 22'den büyükse, tek basamağa indirene kadar topluyoruz
  while (numerology > 22) {
      numerology = numerology.toString().split("").reduce((acc, digit) => acc + Number(digit), 0);
  }

  showTarotCard(numerology);
}

function showTarotCard(numerology) {
  const tarotImages = [
      "images/tarot_card_1.png", // 1
      "images/tarot_card_2.png", // 2
      "images/tarot_card_3.png", // 3
      "images/tarot_card_4.png", // 4
      "images/tarot_card_5.png", // 5
      "images/tarot_card_6.png", // 6
      "images/tarot_card_7.png", // 7
      "images/tarot_card_8.png", // 8
      "images/tarot_card_9.png", // 9
      "images/tarot_card_10.png", // 10
      "images/tarot_card_11.png", // 11
      "images/tarot_card_12.png", // 12
      "images/tarot_card_13.png", // 13
      "images/tarot_card_14.png", // 14
      "images/tarot_card_15.png", // 15
      "images/tarot_card_16.png", // 16
      "images/tarot_card_17.png", // 17
      "images/tarot_card_18.png", // 18
      "images/tarot_card_19.png", // 19
      "images/tarot_card_20.png", // 20
      "images/tarot_card_21.png", // 21
      "images/tarot_card_22.png"  // 22
  ];
  const tarotCardNames = [
    "Joker(The Fool)", "The Magician", "The High Priestess", "The Empress", "The Emperor", 
    "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit", "Wheel of Fortune", 
    "Justice", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star", 
    "The Moon", "The Sun", "Judgment", "The World"
];
const tarotCardDescriptions = [
  "Tarot’un Büyük Arkana destesindeki ilk kart olan, saf bir ruhu ve sınırsız potansiyeli simgeleyen Tarotta Soytarı kartı anlamı itibari ile bilgeliğe ve aydınlanmaya giden yolda atılan ilk adımı temsil eder. Kartın dik konumu genellikle heyecan verici yeni başlangıçları, keşfedilmeyi bekleyen yeni fırsatları ve içgüdülerimize güvenerek bilinmeyene adım atmanın zamanının geldiğini gösterir. Ancak, Soytarı ters çıktığında bu konum, saflık ve dikkatsizlikten kaynaklanan hatalara, plansızlığa ve fevri kararlara işaret eder. Ayrıca, potansiyelimizi tam olarak kullanmamamıza veya fırsatları kaçırdığımıza da delalet edebilir. Soytarı kartı, bize her zaman yeni başlangıçlara açık olmamız ve içgüdülerimize güvenmemiz gerektiğini hatırlatır.",
  "Büyü kartındaki figür genellikle bir masada durur ve elinde bir değnek ve bir pentagram tutar. Büyücü kartı dik konumda çıktığında, genellikle yeni bir projeye başlama, bir hedefe ulaşmak için irade gücünü kullanma veya yaratıcı potansiyelini keşfetme zamanının geldiğini gösterir. Ancak, Büyücü ters çıktığında bu konum, kibir, manipülasyon ve kendini kandırma gibi olumsuz nitelikleri gösterir. Ayrıca, odak eksikliği, kararsızlık ve yaratıcı tıkanıklık gibi problemlere de işaret eder. Tarotta Büyücü kartı anlamı itibari ile bize kendimize inanmamız, irade gücümüzü kullanmamız ve yaratıcı potansiyelimizi keşfetmemiz gerektiğini hatırlatır.",
  "Azize kartındaki figür genellikle kapalı bir kitapla oturur ve bir ay ve bir perde ile çevrilidir. Bu semboller, azizenin gizemli ve bilinmeyeni temsil ettiğini gösterir. Azize kartı düz konumda çıktığında, genellikle sezginize güvenmeniz, iç sesinizi dinlemeniz ve bilinçaltınızın mesajlarına kulak vermeniz gerektiğini gösterir. Ancak, Azize ters çıktığında bu konum, kafanızın karışık olduğunu, sezgilerinizi görmezden geldiğinizi veya bilinçaltınızdaki bastırılmış duygularla yüzleşmekten kaçındığınızı gösterir. Ayrıca, Tarotta Azize kartı anlamı itibari ile aldatma, yanılsama ve karanlıkta kalma gibi problemlere de işaret eder.",
  "İmparatoriçe kartı, figür genellikle doğayla çevrili bir tahtta oturur ve elinde bir asa ve bir kalkana tutar. Tarotta İmparatoriçe kartı düz konumda çıktığında genellikle yeni bir başlangıç, bolluk ve refahın yanı sıra sevgi, şefkat ve besleyici enerjinin artışı anlamına gelir. Ayrıca, hamilelik, doğum veya yaratıcı bir projenin tamamlanması gibi yeni bir hayatın gelişini de temsil edebilir. Ancak, İmparatoriçe kartı ters çıktığında bu, anlamı itibari ile yaratıcılıkta tıkanıklık, maddi zorluklar, bencillik veya duygusal kopukluk gibi problemlere işaret eder.",
  "İmparator kartındaki figür genellikle tahtta oturur ve elinde bir asa ve bir küre tutar. Tarotta İmparator kartı düz konumda çıktığında, genellikle sağlam bir liderlik, disiplin, sorumluluk ve hedeflere ulaşmak için irade gücünün kullanımı anlamına gelir. Ancak, İmparator ters çıktığında bu konum, katı kurallar, otoriterlik, baskı ve kontrolcü davranış gibi olumsuz nitelikleri gösterir. Ayrıca, duygusal soğukluk, esneklik eksikliği ve babalık problemleri gibi problemlere de işaret edebilir. Tarotta İmparator kartı anlamı itibari ile bize kendimizi organize etmemizi, hedeflerimize ulaşmak için disiplinli olmamızı ve sorumluluklarımızı üstlenmemizi hatırlatır.",
  "Aziz kartının ortasında genellikle cüppesini giymiş ve tahtında oturan bir aziz figürü bulunur. Bu figür bilgelik ve otorite yayar. Tarotta Aziz kartı anlamı itibari ile manevi arayışın ve aydınlanmanın bir simgesidir. Bu kart, içgüdülerinize ve sezgilerinize güvenmenizi ve hayatınızda daha yüksek bir amaç bulmanızı söyler. Aynı zamanda, ihtiyacınız olan bilgiyi bulmak için doğru kişilere danışmanız gerektiğini veya belki de kendi iç bilgeliğinize güvenmeniz gerektiğini söylüyor olabilir. Aziz kartı, sabırlı ve anlayışlı olmanın önemini vurgular. Aziz kartı ters çıktığında, dogmatik veya fanatik olduğunuz anlamına gelir. Kendi inançlarınızda çok katı olabilir ve farklı bakış açılarına açık olmayabilirsiniz. Bu kart ters çıktığında, birinin size yanlış bilgi vermiş olabileceğine veya sizi doğru yoldan saptırmaya çalışabileceğine işaret eder.",
  "Aşıklar kartında genellikle çıplak bir kadın ve erkek figürü, bir meleğin önünde dururken tasvir edilir. Tarotta Aşıklar kartı düz konumda çıktığında, genellikle yeni bir ilişkinin başlangıcı, önemli bir karar verme aşaması veya ruhsal denge ve uyum arayışı anlamına gelir. Ancak, Aşıklar kartı ters çıktığında bu konum, kararsızlık, uyumsuzluk, ayrılık, aldatma veya dengesiz ilişkiler gibi problemlere işaret eder. Ayrıca, değersizlik, özgüven eksikliği veya bencillik gibi içsel çatışmalara da delalet edebilir. Tarotta Aşıklar kartı anlamı itibari ile bize kalbimizi dinlememizi, değerlerimizi netleştirmemizi ve önemli kararlar verirken sezgi ve mantığımızı dengelememizi hatırlatır.",
  "Savaş Arabası kartındaki figür genellikle bir savaş arabası üzerinde durur ve dizginleri iki sfenks tarafından kontrol edilir. Tarotta Savaş Arabası kartı düz konumda çıktığında, genellikle hedeflere ulaşmak için irade gücünün ve kararlılığın kullanımı, disiplin ve konsantrasyon, engellerin aşılması ve zafere ulaşma anlamına gelir. Ancak, Savaş Arabası kartı ters çıktığında bu konum, inatçılık, saldırganlık, öfke kontrol problemleri ve acelecilik gibi olumsuz nitelikleri gösterir. Ayrıca, plansızlık, kararsızlık ve hedefe ulaşmada zorlanma gibi problemlere de işaret edebilir. Tarotta Savaş Arabası kartı anlamı itibari ile bize hedeflerimize ulaşmak için irade gücümüzü ve kararlılığımızı kullanmamızı hatırlatır.",
  "Güç kartındaki figür genellikle bir aslanın ağzını çıplak elle açarken tasvir edilir. Tarotta Güç kartı düz konumda çıktığında, genellikle zorlukların üstesinden gelmek için cesaret, irade gücü, kararlılık ve öz denetim anlamına gelir. Ancak, Güç kartı ters çıktığında bu konum, zorbalık, öfke kontrol problemleri, zayıflık ve özgüven eksikliği gibi olumsuz nitelikleri gösterir. Ayrıca, başkalarına karşı manipülasyon, inatçılık ve bencillik gibi problemlere de işaret edebilir. Tarotta Güç kartı anlamı itibari ile bize iç gücümüzün farkında olmamızı, zorlukların üstesinden gelmek için cesaretimizi kullanmamızı ve başkalarına karşı şefkatli ve merhametli olmamızı hatırlatır.",
  "Ermiş (The Hermit); iç gözlemi, geri çekilmeyi, yalnızlığı, bilgeliği ve aydınlanmayı temsil eder. Karttaki figür genellikle bir pelerinle kaplı bir şekilde, bir lamba ile karanlık bir yolda yürürken tasvir edilir. Ermiş kartı düz konumda çıktığında, genellikle iç gözlem ve meditasyon yoluyla kişisel gelişim ve aydınlanma arayışı, sessizliğe ve yalnızlığa çekilme ihtiyacı, bilgelik ve rehberlik arayışı anlamına gelir. Ancak, Ermiş kartı ters çıktığında bu konum, izolasyon, yalnızlık, depresyon, sosyalleşmekten kaçınma ve fırsatları kaçırma gibi olumsuz nitelikleri gösterir. Ayrıca, dogmatizm, katı fikirlilik ve yeni fikirlere açık olmama gibi problemlere de işaret edebilir. Tarotta Ermiş kartı anlamı itibari ile bize kendi iç sesimizi dinlememizi, gerçeğin ışığını aramak için iç gözlem yapmamızı ve bilgelik için yalnızlığa çekilmekten korkmamamızı hatırlatır.",
  "Kader Çarkındaki figür genellikle bir çarkın üzerinde durur veya onu döndürürken tasvir edilir. Bu sembol, Kader Çarkının yaşam döngüsünü ve her şeyin sürekli değişime uğradığını gösterir. Kader Çarkı kartı düz konumda çıktığında, genellikle kaderin dönüşü, beklenmedik olaylar, yeni fırsatlar ve yaşam döngüsünün bir aşamasından diğerine geçiş anlamına gelir. Ancak, Kader Çarkı kartı ters çıktığında bu konum, engeller, gecikmeler, hayal kırıklıkları ve kontrol dışı hissetme gibi olumsuz nitelikleri gösterir. Ayrıca, geçmişe takılıp kalma, yeni fırsatlara direnç ve kaderi değiştirmeye çalışma gibi problemlere de işaret eder. Tarotta Kader Çarkı anlamı itibari ile bize her şeyin sürekli değiştiğini ve her zaman kontrolümüzün olmadığını hatırlatır.",
  "Adalet kartı, dengeyi, adil yargılamayı, kanun ve düzeni temsil eder. Karttaki figür genellikle bir taht üzerinde oturur. Elinde bir terazinin iki kefesini de tutan bir figür olarak tasvir edilir. Adalet kartı düz konumda çıktığında, genellikle adil bir karar verme, hakların korunması, anlaşmazlıkların çözümü ve dürüstlük anlamına gelir. Adalet kartı ters çıktığında ise bu konum, haksızlık, önyargı, eşitsizlik ve yasal sorunlar gibi olumsuz nitelikleri gösterir. Ayrıca, sorumluluktan kaçınma, dürüst olmamak ve etik dışı davranma gibi problemlere de işaret eder. Bu kart okuyucuyu adil ve tarafsız bir şekilde karar vermeye, haklarını savunmaya ve etik davranmaya teşvik edebilir. Ayrıca tarotta Adalet kartı anlamı itibari ile okuyucuya geçmişteki hatalarından ders alması gerektiğini hatırlatır.",
  "Asılan Adam kartındaki figür bir ayağından ters asılmış ve elleri arkasında bağlı olarak tasvir edilir. Bu sembol, Asılan Adam’ın zor bir durumda olduğunu ve farklı bir bakış açısı kazanmak için fedakarlık yapması gerektiğini gösterir. Asılan Adam kartı düz konumda çıktığında, genellikle yeni bir bakış açısı kazanma, fedakarlık yapma ve zor bir durumdan ders alma anlamına gelir. Ayrıca, sabır, tevekkül ve bırakma gibi kavramları da temsil eder. Asılan Adam kartı ters çıktığında ise bu konum, kurban psikolojisi, mağduriyet duygusu, pes etmek ve potansiyeli boşa harcama gibi olumsuz nitelikleri gösterir. Ayrıca, yeni fikirlere direnç, değişime karşı direnç ve fırsatları kaçırma gibi problemlere de işaret edebilir. Tarotta Asılan Adam kartı anlamı itibari ile bize sabırlı olmayı ve serbest bırakmaktan korkmamamız gerektiğini hatırlatır.",
  "Ölüm kartındaki figür genellikle bir iskelet olarak tasvir edilir ve arkasında güneş doğmaktadır. Bu sembol, her şeyin geçici olduğunu ve her bitişin yeni bir başlangıca yol açtığını gösterir. Tarotta Ölüm kartı anlamı itibari ile düz konumda çıktığında, genellikle büyük bir değişim, bir döngünün sonu, yeni bir başlangıç ve eskiyi geride bırakma anlamına gelir. Ölüm kartı ters çıktığında ise bu konum, değişimden korkma, yeni başlangıçlara direnç, geçmişe takılıp kalma ve potansiyeli boşa harcama gibi olumsuz nitelikleri gösterir.",
  "Denge kartındaki figür genellikle bir melek olarak tasvir edilir ve iki kaptan sıvı döker. Tarotta Denge kartı anlamı itibari ile düz konumda çıktığında, genellikle denge ve uyum bulma, aşırılıklardan kaçınma, sabırlı olma ve uzlaşmaya istekli olma anlamına gelir. Denge kartı ters çıktığında ise bu konum, dengesizlik, aşırılıklar, sabırsızlık ve uzlaşmaya isteksizlik gibi olumsuz nitelikleri gösterebilir. Ayrıca, kararsızlık, çatışma ve kaos gibi problemlere de işaret edebilir.",
  "Şeytan kartındaki figür genellikle boynuzlu bir iblis olarak tasvir edilir. İki çıplak figür zincirlerle ona bağlıdır. Bu sembol, Şeytan’ın insanları baştan çıkarma ve kontrol altına alma yeteneğini gösterir. Şeytan kartı düz konumda çıktığında, genellikle bağımlılıklar, baştan çıkarılma, kontrol etme ve manipülasyon arzusu, karanlık güçlerle bağlantı ve gölge benliği ile yüzleşme anlamına gelir. Ayrıca, tutku, yoğunluk ve risk alma gibi kavramları da temsil eder. Şeytan kartı ters çıktığında ise bu konum, bağımlılıklardan kurtulma, baştan çıkarılmaya karşı direnç, kontrol etme ve manipülasyon eğilimini bırakma, karanlık güçlerden arınma ve gölge benliğini kabul etme anlamına gelir. Ayrıca, özgürleşme, aydınlanma ve farkındalık gibi kavramları da temsil edebilir. Tarotta Şeytan kartı anlamı itibari ile okuyucuyu bağımlılıkların farkında olmaya, baştan çıkarılmaya karşı dikkatli olmaya ve gölge benliği ile yüzleşmeye teşvik eder. Ayrıca, okuyucuya tutkularını ve yoğun duygularını yönetmeyi, risk almayı ve karanlık güçlerden korkmamayı öğretir.",
  "Kule kartındaki figür genellikle bir kuleden düşen iki kişi olarak tasvir edilir. Arkalarında yıldırım çarpmaktadır. Bu sembol, Kule’nin beklenmedik ve sarsıcı olayların hayatımızı nasıl alt üst edebileceğini gösterir. Kule kartı düz konumda çıktığında, genellikle ani ve beklenmedik değişimler, işlerin yolunda gitmemesi, kaos ve yıkım, eski yapıların çökmesi ve yeni fırsatların ortaya çıkması anlamına gelir. Ayrıca, uyanış, aydınlanma ve özgürleşme gibi kavramları da temsil eder. Kule kartı ters çıktığında bu konum, ani değişimlere karşı direnç, felaketten kaçınma, eski yapılara bağlı kalma ve yeni fırsatları görmezden gelme anlamına gelir. Tarotta Kule kartı anlamı itibari ile bize her şeyin geçici olduğunu, her yıkımın yeni bir başlangıca yol açtığını ve değişime karşı direnilmemesi gerektiğini hatırlatır.",
  "Yıldız kartındaki figür genellikle bir çıplak kadın olarak tasvir edilir. Elinde iki sürahi tutmaktadır, birinden yeryüzüne, diğerinden ise denize su dökmektedir. Bu sembol, Yıldız’ın ilahi enerjiyi aşağıya aktarma ve umut ışığı sunma yeteneğini gösterir. Yıldız kartı düz konumda çıktığında, genellikle yeni umutlar, ilham, rehberlik, manevi bağlantı, iç görü ve zorlukların üstesinden gelme anlamına gelir. Ayrıca, inanç, iyimserlik ve hedeflere ulaşma potansiyeli gibi kavramları da temsil edebilir. Yıldız kartı ters çıktığında ise umutsuzluk, ilham eksikliği, rehberlik bulamama, manevi bağlantının kopması, karamsarlık ve hedeflerden sapma anlamına gelir. Bununla birlikte, hayal kırıklığı, aldatma ve yanılsama gibi problemlere de işaret edebilir. Tarotta Yıldız kartı anlamı itibari ile zorluklardan vazgeçmemeyi, hayallerine inanmayı hatırlatır.",
  "Ay, bilinçaltını, duyguları, sezgileri, yanılsamaları ve belirsizlikleri temsil eder. Karttaki figür genellikle bir ay, bir yengeç ve iki köpek olarak tasvir edilir. Ay, karanlıkta parıldayan ve gölgede gizlenen şeyleri açığa çıkaran bir ışık kaynağıdır. Tarotta Ay kartı düz konumda çıktığında, bilinçaltının keşfi, duygusal dalgalanmalar, sezgisel bilgi, yanılsamalar, belirsizlikler ve gizemler anlamına gelir. Ay kartı ters çıktığında ise bu konum, duygusal dengesizlik, endişe, korku, sanrılar, aldatma ve gerçeklerden kaçma anlamına gelir. Ayrıca, kafa karışıklığı, güvensizlik ve manipülasyon gibi problemlere de işaret edebilir. Tarotta Ay kartı anlamı itibari ile okuyucuya yanılsamalara karşı dikkatli olmasını, gerçekleri araştırmasını ve zor durumlarda bile umudunu kaybetmemesini hatırlatır.",
  "Tarotta Güneş kartı anlamı itibari ile en olumlu kartlardan biridir. Karttaki figür genellikle çıplak bir çocuk olarak tasvir edilir ve güneşin ışınları etrafını sarar. Bu sembol, Güneş’in bize neşe ve mutluluk getiren sıcak ve parlak bir ışık kaynağı olduğunu gösterir. Güneş kartı düz konumda çıktığında, genellikle büyük mutluluk, neşe, başarı, canlılık, iyimserlik, bolluk ve bereket anlamına gelir. Güneş kartı ters çıktığında ise bu konum, mutsuzluk, hayal kırıklığı, başarısızlık, cansızlık, karamsarlık, maddi kayıplar ve yalnızlık anlamına gelir. Ayrıca, kibir, bencillik ve körlük gibi problemlere de işaret eder.",
  "Yargı kartındaki figür genellikle bir melek olarak tasvir edilir ve boru çalar. Bu sembol, Yargı’nın sonun geldiğini ve ruhların ilahi bir mahkemede yargılanacağını gösterir. Tarotta Yargı kartı anlamı itibari ile düz konumda çıktığında, genellikle yeniden doğuş, geçmiş hatalardan ders alma, affetme ve affedilme, arınma ve yükseliş anlamına gelir. Yargı kartı ters çıktığında ise bu konum, geçmişe takılıp kalma, pişmanlık duyma, affedememe, suçluluk duygusu ve kendine güven eksikliği anlamına gelir. Ayrıca, gecikmeler, engeller ve adaletsizlik gibi problemlere de işaret eder.",
  "Tarot’un Büyük Arkana destesinin yirmi birinci ve son kartı olan Dünya, genellikle bir çemberin içinde çıplak bir insan olarak tasvir edilir ve etrafında dört elementin sembolleri bulunur. Bu sembol, Dünya’nın evrenin merkezini ve tüm varoluşun tamamlanmasını temsil eder. Dünya kartı düz konumda çıktığında, genellikle büyük bir başarının tamamlanması, doyum duygusu, huzur, bolluk ve bereket, yeni başlangıçlar ve yeni fırsatlar anlamına gelir. Dünya kartı ters çıktığında ise bu konum, tatminsizlik, başarısızlık korkusu, maddi kayıplar, dengesizlik ve uyumsuzluk anlamına gelir. Ayrıca, yalnızlık ve izolasyon gibi problemlere de işaret edebilir."
];

// Kartın numarasına göre resmi, ismi ve açıklamayı alıyoruz
const tarotCardImage = tarotImages[numerology - 1];
const tarotCardName = tarotCardNames[numerology - 1];  // Kart ismi
const tarotCardDescription = tarotCardDescriptions[numerology - 1];  // Kart açıklaması

if (tarotCardImage && tarotCardName && tarotCardDescription) {
  // Resmi göster
  document.getElementById("tarotCardsImage").src = tarotCardImage;
  
  // Kart ismini göster
  document.getElementById("cardName").innerText = tarotCardName;
  
  // Kart açıklamasını göster
  document.getElementById("cardDescription").innerText = tarotCardDescription;

  // Sonuçları göster
  document.getElementById("tarotResult").style.display = "block";  // Gizli olan alanı gösteriyoruz
} else {
  console.error("Geçersiz tarot kartı numarası: " + numerology);
  alert("Tarot kartı bulunamadı!");
}


}
function updateTitleWithYear() {
  const currentYear = new Date().getFullYear(); // Şu anki yılı al
  const nextYear = currentYear + 1; // Bir sonraki yıl hesapla
  document.getElementById("dynamicYearTitle").innerText = `Tarot Kartına Göre ${nextYear} Nasıl Geçecek?`;
}

// Sayfa yüklendiğinde başlığı güncelle
window.onload = updateTitleWithYear;