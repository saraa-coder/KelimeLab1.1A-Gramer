const allWords = [
    {word:"Bu sen ___?",correct:"misin",translation:"¿Eres tú?"},
    {word:"O öğrenci ___?",correct:"mi",translation:"¿Es estudiante?"},
    {word:"Bu kitap ___?",correct:"mı",translation:"¿Es este un libro?"},
    {word:"Ev büyük ___?",correct:"mü",translation:"¿La casa es grande?"},
    {word:"Hava soğuk ___?",correct:"mu",translation:"¿Hace frío?"},
    {word:"Sen mutlu ___?",correct:"musun",translation:"¿Estás feliz?"},
    {word:"O hasta ___?",correct:"mı",translation:"¿Está enfermo/a?"},
    {word:"Burası güzel ___?",correct:"mi",translation:"¿Es bonito aquí?"},
    {word:"Onlar hazır ___?",correct:"mı",translation:"¿Están listos?"},
    {word:"Bu doğru ___?",correct:"mu",translation:"¿Es correcto?"},
    {word:"Geliyor ___?",correct:"musun",translation:"¿Estás viniendo?"},
    {word:"Gidiyor ___?",correct:"musun",translation:"¿Te estás yendo?"},
    {word:"Yemek yiyor ___?",correct:"musun",translation:"¿Estás comiendo?"},
    {word:"Beni anlıyor ___?",correct:"musun",translation:"¿Me estás entendiendo?"},
    {word:"Türkçe öğreniyor ___?",correct:"musun",translation:"¿Estás aprendiendo turco?"},
    {word:"Film izliyor ___?",correct:"musun",translation:"¿Estás viendo una película?"},
    {word:"Çalışıyor ___?",correct:"musun",translation:"¿Estás trabajando?"},
    {word:"Uyuyor ___?",correct:"musun",translation:"¿Estás durmiendo?"},
    {word:"Dinliyor ___?",correct:"musun",translation:"¿Estás escuchando?"},
    {word:"Koşuyor ___?",correct:"musun",translation:"¿Estás corriendo?"},
    {word:"Ben hazır ___?",correct:"mıyım",translation:"¿Estoy listo/a?"},
    {word:"Sen geliyor ___?",correct:"musun",translation:"¿Vienes tú?"},
    {word:"O biliyor ___?",correct:"mu",translation:"¿Él/Ella sabe?"},
    {word:"Biz gidiyor ___?",correct:"muyuz",translation:"¿Nos estamos yendo?"},
    {word:"Siz Türk ___?",correct:"müsünüz",translation:"¿Son ustedes turcos?"},
    {word:"Onlar geliyor ___?",correct:"mu",translation:"¿Ellos vienen?"},
    {word:"Sen öğrenci ___?",correct:"misin",translation:"¿Eres estudiante?"},
    {word:"Siz iyi ___?",correct:"misiniz",translation:"¿Están ustedes bien?"},
    {word:"Biz mutlu ___?",correct:"muyuz",translation:"¿Somos felices?"},
    {word:"Onlar hasta ___?",correct:"mı",translation:"¿Están enfermos?"},
    {word:"Bu senin ___?",correct:"mi",translation:"¿Esto es tuyo?"},
    {word:"Araba yeni ___?",correct:"mi",translation:"¿El coche es nuevo?"},
    {word:"Saat kaç ___?",correct:"mı",translation:"¿Es la hora...?"},
    {word:"Okula gidiyor ___?",correct:"musun",translation:"¿Estás yendo a la escuela?"},
    {word:"Kahve içiyor ___?",correct:"musun",translation:"¿Estás bebiendo café?"},
    {word:"Beni seviyor ___?",correct:"musun",translation:"¿Me quieres?"},
    {word:"Yarın geliyor ___?",correct:"musun",translation:"¿Vienes mañana?"},
    {word:"Burada ___ yaşıyorsun?",correct:"mı",translation:"¿Vives aquí?"},
    {word:"İstanbul büyük ___?",correct:"mü",translation:"¿Es grande Estambul?"},
    {word:"Hazır ___?",correct:"mısın",translation:"¿Estás listo/a?"},
    {word:"Burada ___?",correct:"mısın",translation:"¿Estás aquí?"},
    {word:"Dışarıda ___?",correct:"mısın",translation:"¿Estás fuera?"},
    {word:"Evde değil ___?",correct:"misin",translation:"¿No estás en casa?"},
    {word:"Bugün okul var ___?",correct:"mı",translation:"¿Hay escuela hoy?"},
    {word:"Ders var ___?",correct:"mı",translation:"¿Hay clase?"},
    {word:"Toplantı var ___?",correct:"mı",translation:"¿Hay reunión?"},
    {word:"Planın var ___?",correct:"mı",translation:"¿Tienes planes?"},
    {word:"Vaktin var ___?",correct:"mı",translation:"¿Tienes tiempo?"},
    {word:"Sorun var ___?",correct:"mı",translation:"¿Hay algún problema?"},
    {word:"Başka soru var ___?",correct:"mı",translation:"¿Hay otra pregunta?"},
    {word:"Bu senin kitabın ___?",correct:"mı",translation:"¿Es este tu libro?"},
    {word:"Bu senin çantan ___?",correct:"mı",translation:"¿Es tu mochila?"},
    {word:"Bu senin telefonun ___?",correct:"mu",translation:"¿Es tu teléfono?"},
    {word:"Kapı kapalı ___?",correct:"mı",translation:"¿Está la puerta cerrada?"},
    {word:"Lamba açık ___?",correct:"mı",translation:"¿La lámpara está encendida?"},
    {word:"Yazıyor ___?",correct:"musun",translation:"¿Estás escribiendo?"},
    {word:"Arıyor ___?",correct:"musun",translation:"¿Estás llamando?"},
    {word:"Mesaj atıyor ___?",correct:"musun",translation:"¿Estás enviando un mensaje?"},
    {word:"Alışveriş yapıyor ___?",correct:"musun",translation:"¿Estás haciendo compras?"},
    {word:"Spor yapıyor ___?",correct:"musun",translation:"¿Estás haciendo deporte?"},
    {word:"Koşuyor ___?",correct:"musun",translation:"¿Estás corriendo?"},
    {word:"Yüzüyor ___?",correct:"musun",translation:"¿Estás nadando?"},
    {word:"Bisiklet sürüyor ___?",correct:"musun",translation:"¿Estás andando en bicicleta?"},
    {word:"Eve gidiyor ___?",correct:"musun",translation:"¿Estás yendo a casa?"},
    {word:"Şehirde ___ kalıyorsun?",correct:"mi",translation:"¿Te estás quedando en la ciudad?"},
    {word:"O evli ___?",correct:"mi",translation:"¿Está casado/a?"},
    {word:"O bekar ___?",correct:"mı",translation:"¿Está soltero/a?"},
    {word:"O hasta ___?",correct:"mıydı",translation:"¿Estaba enfermo/a?"},
    {word:"Çocuklar okulda ___?",correct:"mı",translation:"¿Están los niños en la escuela?"},
    {word:"Öğretmen burada ___?",correct:"mı",translation:"¿Está el profesor aquí?"},
    {word:"Patron toplantıda ___?",correct:"mı",translation:"¿Está el jefe en reunión?"},
    {word:"Arkadaşın meşgul ___?",correct:"mü",translation:"¿Tu amigo está ocupado?"},
    {word:"Ailen burada ___?",correct:"mı",translation:"¿Tu familia está aquí?"},
    {word:"Siz ahora serbest ___?",correct:"misiniz",translation:"¿Están ustedes libres ahora?"},
    {word:"Hava yağmurlu ___?",correct:"mu",translation:"¿Está lluvioso?"},
    {word:"Yol kapalı ___?",correct:"mı",translation:"¿Está la carretera cerrada?"},
    {word:"Mağaza açık ___?",correct:"mı",translation:"¿La tienda está abierta?"},
    {word:"Bilet var ___?",correct:"mı",translation:"¿Hay entradas?"},
    {word:"İnternet var ___?",correct:"mı",translation:"¿Hay internet?"},
    {word:"Telefon çalışıyor ___?",correct:"mu",translation:"¿El teléfono funciona?"},
    {word:"Arabada benzin var ___?",correct:"mı",translation:"¿Hay gasolina en el coche?"},
    {word:"Para lazım ___?",correct:"mı",translation:"¿Hace falta dinero?"},
    {word:"Bu importante ___?",correct:"mi",translation:"¿Es importante?"},
    {word:"Sorun çözüldü ___?",correct:"mü",translation:"¿Se resolvió el problema?"},
    {word:"Bu kim? Öğretmen ___?",correct:"mi",translation:"¿Quién es este? ¿Es profesor?"},
    {word:"O doktor ___?",correct:"mu",translation:"¿Es médico/a?"},
    {word:"Bu senin kardeşin ___?",correct:"mi",translation:"¿Es tu hermano/a?"},
    {word:"Bu yeni ___?",correct:"mi",translation:"¿Es nuevo?"},
    {word:"Bu eski ___?",correct:"mi",translation:"¿Es viejo?"},
    {word:"O Türk ___?",correct:"mü",translation:"¿Es turco?"},
    {word:"O yabancı ___?",correct:"mı",translation:"¿Es extranjero/a?"},
    {word:"O genç ___?",correct:"mi",translation:"¿Es joven?"},
    {word:"O yaşlı ___?",correct:"mı",translation:"¿Es mayor?"},
    {word:"Bu pahalı ___?",correct:"mı",translation:"¿Es caro?"},
    {word:"Şehirde ___?",correct:"misin",translation:"¿Estás en la ciudad?"},
    {word:"İçeride ___?",correct:"misin",translation:"¿Estás dentro?"},
    {word:"Dışarı çıkıyor ___?",correct:"musun",translation:"¿Estás saliendo fuera?"},
    {word:"Okula gidiyor ___?",correct:"musun",translation:"¿Estás yendo a la escuela?"},
    {word:"İşe gidiyor ___?",correct:"musun",translation:"¿Estás yendo al trabajo?"},
    {word:"Buraya geliyor ___?",correct:"musun",translation:"¿Estás viniendo aquí?"},
    {word:"Orada ___ kalıyorsun?",correct:"mı",translation:"¿Te estás quedando allí?"},
    {word:"Tatilde ___?",correct:"misin",translation:"¿Estás de vacaciones?"},
    {word:"Yolda ___?",correct:"mısın",translation:"¿Estás en camino?"},
    {word:"Her gün spor yapıyor ___?",correct:"musun",translation:"¿Estás haciendo deporte todos los días?"},
    {word:"Sabah erken kalkıyor ___?",correct:"musun",translation:"¿Te estás levantando temprano?"},
    {word:"Geç ___ yatıyorsun?",correct:"mi",translation:"¿Te estás acostando tarde?"},
    {word:"Kahvaltı yapıyor ___?",correct:"musun",translation:"¿Estás desayunando?"},
    {word:"Evde yemek pişiriyor ___?",correct:"musun",translation:"¿Estás cocinando en casa?"},
    {word:"Dışarıda yemek yiyor ___?",correct:"musun",translation:"¿Estás comiendo fuera?"},
    {word:"Çalışıyor ___ bugün?",correct:"musun",translation:"¿Estás trabajando hoy?"},
    {word:"Dinleniyor ___?",correct:"musun",translation:"¿Estás descansando?"},
    {word:"Uyku düzenin iyi ___?",correct:"mi",translation:"¿Tu ciclo de sueño es bueno?"},
    {word:"Günlük planın var ___?",correct:"mı",translation:"¿Tienes un plan diario?"},
    {word:"Beni görüyor ___?",correct:"musun",translation:"¿Me estás viendo?"},
    {word:"Beni duyabiliyor ___?",correct:"musun",translation:"¿Me puedes oír?"},
    {word:"Mesajımı aldın ___?",correct:"mı",translation:"¿Recibiste mi mensaje?"},
    {word:"Cevap veriyor ___?",correct:"musun",translation:"¿Estás respondiendo?"},
    {word:"Telefonun açık ___?",correct:"mı",translation:"¿Tu teléfono está encendido?"},
    {word:"Beni hatırlıyor ___?",correct:"musun",translation:"¿Me recuerdas?"},
    {word:"Beni bekliyor ___?",correct:"musun",translation:"¿Me estás esperando?"},
    {word:"Ne söylüyorsun? Doğru ___?",correct:"mu",translation:"¿Qué estás diciendo? ¿Es correcto?"},
    {word:"Bunu anladın ___?",correct:"mı",translation:"¿Entendiste esto?"},
    {word:"Bir şey istiyor ___?",correct:"musun",translation:"¿Estás queriendo algo?"},
    {word:"Su istiyor ___?",correct:"musun",translation:"¿Estás queriendo agua?"},
    {word:"Çay içiyor ___?",correct:"musun",translation:"¿Estás bebiendo té?"},
    {word:"Bira içiyor ___?",correct:"musun",translation:"¿Estás bebiendo cerveza?"},
    {word:"Hediye aldın ___?",correct:"mı",translation:"¿Compraste un regalo?"},
    {word:"Liste hazır ___?",correct:"mı",translation:"¿La lista está lista?"},
    {word:"Bu uygun ___?",correct:"mu",translation:"¿Esto es adecuado?"},
    {word:"Bunu kullanıyor ___?",correct:"musun",translation:"¿Estás usando esto?"},
    {word:"Yeni telefon aldın ___?",correct:"mı",translation:"¿Compraste un móvil nuevo?"},
    {word:"Kartın var ___?",correct:"mı",translation:"¿Tienes tarjeta?"},
    {word:"Bugün çalışıyor ___?",correct:"musun",translation:"¿Estás trabajando hoy?"},
    {word:"Yarın geliyor ___?",correct:"musun",translation:"¿Vienes mañana?"},
    {word:"Hafta sonu boş ___?",correct:"musun",translation:"¿Estás libre el fin de semana?"},
    {word:"Sık-sık buraya geliyor ___?",correct:"musun",translation:"¿Vienes aquí a menudo?"},
    {word:"Hiç İstanbul’a gittin ___?",correct:"mi",translation:"¿Has ido alguna vez a Estambul?"},
    {word:"Şimdi uygun ___?",correct:"musun",translation:"¿Te va bien ahora?"},
    {word:"Geç ___ kaldın?",correct:"mi",translation:"¿Llegaste tarde?"},
    {word:"Erken ___ geldin?",correct:"mi",translation:"¿Llegaste temprano?"},
    {word:"Hızlı ___ konuşuyorsun?",correct:"mı",translation:"¿Estás hablando rápido?"},
    {word:"Yavaş ___ yürüyorsun?",correct:"mu",translation:"¿Estás caminando despacio?"},
    {word:"Işık açık ___?",correct:"mı",translation:"¿La luz está encendida?"},
    {word:"Kapı kilitli ___?",correct:"mı",translation:"¿La puerta está cerrada con llave?"},
    {word:"Cam açık ___?",correct:"mı",translation:"¿La ventana está abierta?"},
    {word:"Oda sıcak ___?",correct:"mı",translation:"¿La habitación está caliente?"},
    {word:"Burası sessiz ___?",correct:"mi",translation:"¿Es silencioso aquí?"},
    {word:"Televizyon açık ___?",correct:"mı",translation:"¿La televisión está encendida?"},
    {word:"Telefon şarjda ___?",correct:"mı",translation:"¿El teléfono está cargando?"},
    {word:"Buzdolabı dolu ___?",correct:"mu",translation:"¿La nevera está llena?"},
    {word:"Araba çalışıyor ___?",correct:"mu",translation:"¿El coche funciona?"},
    {word:"Anahtar nerede? Sende ___?",correct:"mi",translation:"¿Dónde está la llave? ¿La tienes tú?"},
    {word:"Mutlu ___ bugün?",correct:"musun",translation:"¿Estás feliz hoy?"},
    {word:"Üzgün ___?",correct:"müsün",translation:"¿Estás triste?"},
    {word:"Sinirli ___?",correct:"misin",translation:"¿Estás enfadado/a?"},
    {word:"Stresli ___?",correct:"misin",translation:"¿Estás estresado/a?"},
    {word:"Yorgun ___ biraz?",correct:"musun",translation:"¿Estás un poco cansado/a?"},
    {word:"Rahat ___?",correct:"mısın",translation:"¿Estás relajado/a?"},
    {word:"İyi hissediyor ___?",correct:"musun",translation:"¿Te estás sintiendo bien?"},
    {word:"Hasta gibi ___?",correct:"misin",translation:"¿Te sientes como enfermo/a?"},
    {word:"Uyanık ___?",correct:"mısın",translation:"¿Estás despierto/a?"},
    {word:"Hazır hissetiyor ___?",correct:"musun",translation:"¿Te sientes preparado/a?"},
    {word:"Evde süt ___?",correct:"Var mı",translation:"¿Hay leche en casa?"},
    {word:"Buzdolabında ekmek ___?",correct:"Var mı",translation:"¿Hay pan en el frigorífico?"},
    {word:"Masada kitap ___?",correct:"Var mı",translation:"¿Hay un libro en la mesa?"},
    {word:"Çantada kalem ___?",correct:"Var mı",translation:"¿Hay un bolígrafo en la mochila?"},
    {word:"Arabada benzin ___?",correct:"Var mı",translation:"¿Hay gasolina en el coche?"},
    {word:"Evde kimse ___?",correct:"Var mı",translation:"¿Hay alguien en casa?"},
    {word:"Odada kimse ___?",correct:"Var mı",translation:"¿Hay alguien en la habitación?"},
    {word:"Cebinde para ___?",correct:"Var mı",translation:"¿Tienes dinero en el bolsillo?"},
    {word:"Bugün ders ___?",correct:"Var mı",translation:"¿Hay clase hoy?"},
    {word:"Yarın okul ___?",correct:"Var mı",translation:"¿Hay colegio mañana?"},
    {word:"Şimdi zaman ___?",correct:"Var mı",translation:"¿Hay tiempo ahora?"},
    {word:"Evde internet ___?",correct:"Var mı",translation:"¿Hay internet en casa?"},
    {word:"Telefonunda sorun ___?",correct:"Var mı",translation:"¿Hay un problema en el teléfono?"},
    {word:"Sınıfta öğretmen ___?",correct:"Var mı",translation:"¿Hay profesor en clase?"},
    {word:"Bahçede köpek ___?",correct:"Var mı",translation:"¿Hay un perro en el jardín?"},
    {word:"Parkta çocuklar ___?",correct:"Var mı",translation:"¿Hay niños en el parque?"},
    {word:"Bu şehirde metro ___?",correct:"Var mı",translation:"¿Hay metro en esta ciudad?"},
    {word:"Sokakta trafik ___?",correct:"Var mı",translation:"¿Hay tráfico en la calle?"},
    {word:"Buzdolabında su ___?",correct:"Var mı",translation:"¿Hay agua en la nevera?"},
    {word:"Masada defter ___?",correct:"Var mı",translation:"¿Hay un cuaderno en la mesa?"},
    {word:"Evde yemek ___?",correct:"Var mı",translation:"¿Hay comida en casa?"},
    {word:"Şimdi sessizlik ___?",correct:"Var mı",translation:"¿Hay silencio ahora?"},
    {word:"Odada ışık ___?",correct:"Var mı",translation:"¿Hay luz en la habitación?"},
    {word:"Kapıda anahtar ___?",correct:"Var mı",translation:"¿Hay una llave en la puerta?"},
    {word:"Cebinde telefon ___?",correct:"Var mı",translation:"¿Hay un teléfono en el bolsillo?"},
    {word:"Bugün toplantı ___?",correct:"Var mı",translation:"¿Hay reunión hoy?"},
    {word:"Evde televisión ___?",correct:"Var mı",translation:"¿Hay televisión en casa?"},
    {word:"Sokakta insanlar ___?",correct:"Var mı",translation:"¿Hay gente en la calle?"},
    {word:"Okulda sınav ___?",correct:"Var mı",translation:"¿Hay examen en la escuela?"},
    {word:"Şehirde sorun ___?",correct:"Var mı",translation:"¿Hay problemas en la ciudad?"},
    {word:"Burada otobüs ___?",correct:"Var mı",translation:"¿Hay autobús aquí?"},
    {word:"Burada tren ___?",correct:"Yok mu",translation:"¿No hay tren aquí?"},
    {word:"Evde kedin ___?",correct:"Var mı",translation:"¿Tienes gato en casa?"},
    {word:"Evde köpeğin ___?",correct:"Yok mu",translation:"¿No tienes perro en casa?"},
    {word:"Buzdolabında yumurta ___?",correct:"Var mı",translation:"¿Hay huevos en la nevera?"},
    {word:"Çantada kitaplar ___?",correct:"Var mı",translation:"¿Hay libros en la mochila?"},
    {word:"Masada bilgisayar ___?",correct:"Var mı",translation:"¿Hay un ordenador en la mesa?"},
    {word:"Odada klima ___?",correct:"Var mı",translation:"¿Hay aire acondicionado en la habitación?"},
    {word:"Bugün iş ___?",correct:"Var mı",translation:"¿Hay trabajo hoy?"},
    {word:"Yarın tatil ___?",correct:"Yok mu",translation:"¿No hay vacaciones mañana?"},
    {word:"Bu odada pencere ___?",correct:"Var mı",translation:"¿Hay ventana en esta habitación?"},
    {word:"Kapı açık ___?",correct:"Var mı",translation:"¿Está la puerta abierta?"},
    {word:"Kapı kapalı ___?",correct:"Var mı",translation:"¿Está la puerta cerrada?"},
    {word:"Cüzdanda para ___?",correct:"Var mı",translation:"¿Hay dinero en la cartera?"},
    {word:"Cüzdanda kart ___?",correct:"Var mı",translation:"¿Hay tarjeta en la cartera?"},
    {word:"Evde yemek pişmiş ___?",correct:"Var mı",translation:"¿Hay comida cocinada en casa?"},
    {word:"Şehirde park ___?",correct:"Var mı",translation:"¿Hay parque en la ciudad?"},
    {word:"Okulda kütüphane ___?",correct:"Var mı",translation:"¿Hay biblioteca en la escuela?"},
    {word:"Sokakta kaza ___?",correct:"Yok mu",translation:"¿No hay accidente en la calle?"},
    {word:"Bugün enerji ___?",correct:"Var mı",translation:"¿Hay energía hoy?"},
    {word:"Evde su ___?",correct:"Var mı",translation:"¿Hay agua en casa?"},
    {word:"Buzdolabında süt ___?",correct:"Yok mu",translation:"¿No hay leche en la nevera?"},
    {word:"Kitabı masa___ koyuyorum",correct:"ya",translation:"Estoy poniendo el libro en la mesa"},
    {word:"Suyu bardak___ koyuyorum",correct:"a",translation:"Estoy poniendo el agua en el vaso"},
    {word:"Arabayı garaj___ park ediyorum",correct:"a",translation:"Estoy aparcando el coche en el garaje"},
    {word:"Ev___ çıkıyorum",correct:"den",translation:"Estoy saliendo de casa"},
    {word:"Okul___ gidiyorum",correct:"a",translation:"Estoy yendo a la escuela"},
    {word:"Park___ oynuyorum",correct:"ta",translation:"Estoy jugando en el parque"},
    {word:"Seni okul___ götürüyorum",correct:"a",translation:"Te estoy llevando a la escuela"},
    {word:"Sütü buzdolabın___ çıkarıyorum",correct:"dan",translation:"Estoy sacando la leche de la nevera"},
    {word:"Defteri çanta___ koyuyorum",correct:"ya",translation:"Estoy poniendo el cuaderno en la mochila"},
    {word:"Kapı___ açıyorum",correct:"yı",translation:"Estoy abriendo la puerta"},
    {word:"Elma___ yiyorum",correct:"yı",translation:"Estoy comiendo la manzana"},
    {word:"Mektup___ yazıyorum",correct:"u",translation:"Estoy escribiendo la carta"},
    {word:"Kitap___ okuyorum",correct:"ı",translation:"Estoy leyendo el libro"},
    {word:"Bardak___ su içiyorum",correct:"tan",translation:"Estoy bebiendo agua del vaso"},
    {word:"Çanta___ para alıyorum",correct:"dan",translation:"Estoy cogiendo dinero de la mochila"},
    {word:"Otobüs___ biniyorum",correct:"e",translation:"Estoy subiendo al autobús"},
    {word:"Tren___ iniyorum",correct:"den",translation:"Estoy bajando del tren"},
    {word:"Eve giriyorum kapı___",correct:"dan",translation:"Estoy entrando por la puerta"},
    {word:"Bahçe___ çıkıyorum",correct:"den",translation:"Estoy saliendo del jardín"},
    {word:"Telefon___ bakıyorum",correct:"a",translation:"Estoy mirando el teléfono"},
    {word:"Su___ içiyorum",correct:"yu",translation:"Estoy bebiendo agua"},
    {word:"Kahve___ içiyorum",correct:"yi",translation:"Estoy bebiendo café"},
    {word:"Çay___ içiyorum",correct:"ı",translation:"Estoy bebiendo té"},
    {word:"Meyve___ yiyorum",correct:"yi",translation:"Estoy comiendo fruta"},
    {word:"Ekmek___ yiyorum",correct:"i",translation:"Estoy comiendo pan"},
    {word:"Araba___ kullanıyorum",correct:"yı",translation:"Estoy conduciendo el coche"},
    {word:"Bisiklet___ sürüyorum",correct:"i",translation:"Estoy montando en bici"},
    {word:"Müzik___ dinliyorum",correct:"i",translation:"Estoy escuchando música"},
    {word:"Film___ izliyorum",correct:"i",translation:"Estoy viendo una película"},
    {word:"Televizyon___ açıyorum",correct:"u",translation:"Estoy encendiendo la tele"},
    {word:"Kapı___ kapatıyorum",correct:"yı",translation:"Estoy cerrando la puerta"},
    {word:"Pencere___ açıyorum",correct:"yi",translation:"Estoy abriendo la ventana"},
    {word:"Işık___ açıyorum",correct:"ı",translation:"Estoy encendiendo la luz"},
    {word:"Işık___ kapatıyorum",correct:"ı",translation:"Estoy apagando la luz"},
    {word:"Telefon___ kullanıyorum",correct:"u",translation:"Estoy usando el teléfono"},
    {word:"Mesaj___ yazıyorum",correct:"ı",translation:"Estoy escribiendo un mensaje"},
    {word:"Arkadaş___ arıyorum",correct:"ı",translation:"Estoy llamando al amigo"},
    {word:"E-posta___ gönderiyorum",correct:"yı",translation:"Estoy enviando un email"},
    {word:"Para___ harcıyorum",correct:"yı",translation:"Estoy gastando dinero"},
    {word:"Alışveriş___ yapıyorum",correct:"yı",translation:"Estoy haciendo compras"},
    {word:"Ev___ giriyorum",correct:"e",translation:"Estoy entrando en casa"},
    {word:"Dışarı___ çıkıyorum",correct:"ya",translation:"Estoy saliendo fuera"},
    {word:"Okul___ koşuyorum",correct:"a",translation:"Estoy corriendo a la escuela"},
    {word:"Park___ gidiyorum",correct:"a",translation:"Estoy yendo al parque"},
    {word:"Deniz___ yüzüyorum",correct:"de",translation:"Estoy nadando en el mar"},
    {word:"Su___ dolduruyorum",correct:"yu",translation:"Estoy llenando agua"},
    {word:"Çanta___ açıyorum",correct:"yı",translation:"Estoy abriendo la mochila"},
    {word:"Defter___ kapatıyorum",correct:"i",translation:"Estoy cerrando el cuaderno"},
    {word:"Kapı___ kilitliyorum",correct:"yı",translation:"Estoy cerrando con llave la puerta"},
    {word:"Arabayı park___ ediyorum",correct:"a",translation:"Estoy aparcando el coche"},
    {word:"Ben doktor___",correct:"-um",translation:"Soy médico"},
    {word:"Ben öğrenci___",correct:"-yim",translation:"Soy estudiante"},
    {word:"Ben mutlu___",correct:"-yum",translation:"Soy feliz"},
    {word:"Ben evde___",correct:"-yim",translation:"Estoy en casa"},
    {word:"Ben hazır___",correct:"-ım",translation:"Estoy listo"},
    {word:"Ben yorgun___",correct:"-um",translation:"Estoy cansado"},
    {word:"Ben öğretmen___",correct:"-im",translation:"Soy profesor"},
    {word:"Ben aquí___",correct:"-yim",translation:"Estoy aquí"},
    {word:"Ben meşgul___",correct:"-üm",translation:"Estoy ocupado"},
    {word:"Ben öğrenci değil___",correct:"-im",translation:"No soy estudiante"},
    {word:"Sen doktor___",correct:"-sun",translation:"Eres médico"},
    {word:"Sen öğrenci___",correct:"-sin",translation:"Eres estudiante"},
    {word:"Sen mutlu___",correct:"-sun",translation:"Eres feliz"},
    {word:"Sen evde___",correct:"-sin",translation:"Estás en casa"},
    {word:"Sen hazır___",correct:"-sın",translation:"Estás listo"},
    {word:"Sen yorgun___",correct:"-sun",translation:"Estás cansado"},
    {word:"Sen öğretmen___",correct:"-sin",translation:"Eres profesor"},
    {word:"Sen aquí___",correct:"-sin",translation:"Estás aquí"},
    {word:"Sen meşgul___",correct:"-sün",translation:"Estás ocupado"},
    {word:"Sen öğrenci değil___",correct:"-sin",translation:"No eres estudiante"},
    {word:"O doktor___",correct:"-",translation:"Es médico"},
    {word:"O öğrenci___",correct:"-",translation:"Es estudiante"},
    {word:"O mutlu___",correct:"-",translation:"Es feliz"},
    {word:"O evde___",correct:"-",translation:"Está en casa"},
    {word:"O hazır___",correct:"-",translation:"Está listo"},
    {word:"O yorgun___",correct:"-",translation:"Está cansado"},
    {word:"O öğretmen___",correct:"-",translation:"Es profesor"},
    {word:"O aquí___",correct:"-",translation:"Está aquí"},
    {word:"O meşgul___",correct:"-",translation:"Está ocupado"},
    {word:"O öğrenci değil___",correct:"-",translation:"No es estudiante"},
    {word:"Biz doktor___",correct:"-uz",translation:"Somos médicos"},
    {word:"Biz öğrenci___",correct:"-yiz",translation:"Somos estudiantes"},
    {word:"Biz mutlu___",correct:"-yuz",translation:"Somos felices"},
    {word:"Biz evde___",correct:"-yiz",translation:"Estamos en casa"},
    {word:"Biz hazır___",correct:"-ız",translation:"Estamos listos"},
    {word:"Biz yorgun___",correct:"-uz",translation:"Estamos cansados"},
    {word:"Biz öğretmen___",correct:"-iz",translation:"Somos profesores"},
    {word:"Biz aquí___",correct:"-yiz",translation:"Estamos aquí"},
    {word:"Biz meşgul___",correct:"-üz",translation:"Estamos ocupados"},
    {word:"Biz öğrenci değil___",correct:"-iz",translation:"No somos estudiantes"},
    {word:"Siz doktor___",correct:"-sunuz",translation:"Sois médicos"},
    {word:"Siz öğrenci___",correct:"-siniz",translation:"Sois estudiantes"},
    {word:"Siz mutlu___",correct:"-sunuz",translation:"Sois felices"},
    {word:"Siz evde___",correct:"-siniz",translation:"Estáis en casa"},
    {word:"Siz hazır___",correct:"-sınız",translation:"Estáis listos"},
    {word:"Siz yorgun___",correct:"-sunuz",translation:"Estáis cansados"},
    {word:"Siz öğretmen___",correct:"-siniz",translation:"Sois profesores"},
    {word:"Siz aquí___",correct:"-sınız",translation:"Estáis aquí"},
    {word:"Siz meşgul___",correct:"-sünüz",translation:"Estáis ocupados"},
    {word:"Siz öğrenci değil___",correct:"-siniz",translation:"No sois estudiantes"},
    {word:"Onlar doktor___",correct:"-",translation:"Son médicos"},
    {word:"Onlar öğrenci___",correct:"-",translation:"Son estudiantes"},
    {word:"Onlar mutlu___",correct:"-",translation:"Son felices"},
    {word:"Onlar evde___",correct:"-",translation:"Están en casa"},
    {word:"Onlar hazır___",correct:"-",translation:"Están listos"},
    {word:"Onlar yorgun___",correct:"-",translation:"Están cansados"},
    {word:"Onlar öğretmen___",correct:"-",translation:"Son profesores"},
    {word:"Onlar meşgul___",correct:"-",translation:"Están ocupados"},
    {word:"Onlar öğrenci değil___",correct:"-",translation:"No son estudiantes"},
    {word:"Ben doktor değil ___",correct:"im",translation:"No soy médico"},
    {word:"Ben öğrenci değil ___",correct:"im",translation:"No soy estudiante"},
    {word:"Ben mutlu değil ___",correct:"im",translation:"No soy feliz"},
    {word:"Ben evde değil ___",correct:"im",translation:"No estoy en casa"},
    {word:"Ben hazır değil ___",correct:"im",translation:"No estoy listo"},
    {word:"Ben yorgun değil ___",correct:"im",translation:"No estoy cansado"},
    {word:"Ben öğretmen değil ___",correct:"im",translation:"No soy profesor"},
    {word:"Ben burada değil ___",correct:"im",translation:"No estoy aquí"},
    {word:"Ben meşgul değil ___",correct:"im",translation:"No estoy ocupado"},
    {word:"Sen doktor değil ___",correct:"sin",translation:"No eres médico"},
    {word:"Sen öğrenci değil ___",correct:"sin",translation:"No eres estudiante"},
    {word:"Sen mutlu değil ___",correct:"sin",translation:"No eres feliz"},
    {word:"Sen evde değil ___",correct:"sin",translation:"No estás en casa"},
    {word:"Sen hazır değil ___",correct:"sin",translation:"No estás listo"},
    {word:"Sen yorgun değil ___",correct:"sin",translation:"No estás cansado"},
    {word:"Sen öğretmen değil ___",correct:"sin",translation:"No eres profesor"},
    {word:"Sen aquí değil ___",correct:"sin",translation:"No estás aquí"},
    {word:"Sen meşgul değil ___",correct:"sin",translation:"No estás ocupado"},
    {word:"O doktor ___",correct:"değil",translation:"No es médico"},
    {word:"O öğrenci ___",correct:"değil",translation:"No es estudiante"},
    {word:"O mutlu ___",correct:"değil",translation:"No es feliz"},
    {word:"O evde ___",correct:"değil",translation:"No está en casa"},
    {word:"O hazır ___",correct:"değil",translation:"No está listo"},
    {word:"O yorgun ___",correct:"değil",translation:"No está cansado"},
    {word:"O öğretmen ___",correct:"değil",translation:"No es profesor"},
    {word:"O aquí ___",correct:"değil",translation:"No está aquí"},
    {word:"O meşgul ___",correct:"değil",translation:"No está ocupado"},
    {word:"O öğrenci ___",correct:"değil",translation:"No es estudiante"},
    {word:"Biz doktor değil ___",correct:"iz",translation:"No somos médicos"},
    {word:"Biz öğrenci değil ___",correct:"iz",translation:"No somos estudiantes"},
    {word:"Biz mutlu değil ___",correct:"iz",translation:"No somos felices"},
    {word:"Biz evde değil ___",correct:"iz",translation:"No estamos en casa"},
    {word:"Biz hazır değil ___",correct:"iz",translation:"No estamos listos"},
    {word:"Biz yorgun değil ___",correct:"iz",translation:"No estamos cansados"},
    {word:"Biz öğretmen değil ___",correct:"iz",translation:"No somos profesores"},
    {word:"Biz aquí değil ___",correct:"iz",translation:"No estamos aquí"},
    {word:"Biz meşgul değil ___",correct:"iz",translation:"No estamos ocupados"},
    {word:"Siz doktor değil ___",correct:"siniz",translation:"No sois médicos"},
    {word:"Siz öğrenci değil ___",correct:"siniz",translation:"No sois estudiantes"},
    {word:"Siz mutlu değil ___",correct:"siniz",translation:"No sois felices"},
    {word:"Siz evde değil ___",correct:"siniz",translation:"No estáis en casa"},
    {word:"Siz hazır değil ___",correct:"siniz",translation:"No estáis listos"},
    {word:"Siz yorgun değil ___",correct:"siniz",translation:"No estáis cansados"},
    {word:"Siz öğretmen değil ___",correct:"siniz",translation:"No sois profesores"},
    {word:"Siz aquí değil ___",correct:"siniz",translation:"No estáis aquí"},
    {word:"Siz meşgul değil ___",correct:"siniz",translation:"No estáis ocupados"},
    {word:"Onlar doktor ___",correct:"değil",translation:"No son médicos"},
    {word:"Onlar öğrenci ___",correct:"değil",translation:"No son estudiantes"},
    {word:"Onlar mutlu ___",correct:"değil",translation:"No son felices"},
    {word:"Onlar evde ___",correct:"değil",translation:"No están en casa"},
    {word:"Onlar hazır ___",correct:"değil",translation:"No están listos"},
    {word:"Onlar yorgun ___",correct:"değil",translation:"No están cansados"},
    {word:"Onlar öğretmen ___",correct:"değil",translation:"No son profesores"},
    {word:"Onlar aquí ___",correct:"değil",translation:"No están aquí"},
    {word:"Onlar meşgul ___",correct:"değil",translation:"No están ocupados"},
    {word:"Onlar öğrenci ___",correct:"değil",translation:"No son estudiantes"},
    {word:"Ben mühendis ___?",correct:"miyim",translation:"¿Soy ingeniero?"},
    {word:"Ben cerrah ___?",correct:"mıyım",translation:"¿Soy cirujano?"},
    {word:"Ben pilot ___?",correct:"muyum",translation:"¿Soy piloto?"},
    {word:"Ben avukat ___?",correct:"mıyım",translation:"¿Soy abogado?"},
    {word:"Ben mimar ___?",correct:"mıyım",translation:"¿Soy arquitecto?"},
    {word:"Ben psikolog ___?",correct:"muyum",translation:"¿Soy psicólogo?"},
    {word:"Ben şef ___?",correct:"miyim",translation:"¿Soy chef?"},
    {word:"Ben programcı ___?",correct:"mıyım",translation:"¿Soy programador?"},
    {word:"Ben gazeteci ___?",correct:"miyim",translation:"¿Soy periodista?"},
    {word:"Ben fotoğrafçı ___?",correct:"mıyım",translation:"¿Soy fotógrafo?"},
    {word:"Sen itfaiyeci ___?",correct:"misin",translation:"¿Eres bombero?"},
    {word:"Sen dişçi ___?",correct:"misin",translation:"¿Eres dentista?"},
    {word:"Sen mühendis ___?",correct:"misin",translation:"¿Eres ingeniero?"},
    {word:"Sen pilot ___?",correct:"musun",translation:"¿Eres piloto?"},
    {word:"Sen aşçı ___?",correct:"mısın",translation:"¿Eres cocinero?"},
    {word:"Sen hemşire ___?",correct:"misin",translation:"¿Eres enfermero?"},
    {word:"Sen sporcu ___?",correct:"musun",translation:"¿Eres deportista?"},
    {word:"Sen yorgun ___?",correct:"musun",translation:"¿Estás cansado?"},
    {word:"Sen sakin ___?",correct:"misin",translation:"¿Estás tranquilo?"},
    {word:"Sen heyecanlı ___?",correct:"mısın",translation:"¿Estás emocionado?"},
    {word:"O kaptan ___?",correct:"mı",translation:"¿Es capitán?"},
    {word:"O terzi ___?",correct:"mi",translation:"¿Es sastre?"},
    {word:"O marangoz ___?",correct:"mu",translation:"¿Es carpintero?"},
    {word:"O müzisyen ___?",correct:"mi",translation:"¿Es músico?"},
    {word:"O ressam ___?",correct:"mı",translation:"¿Es pintor?"},
    {word:"O atlet ___?",correct:"mi",translation:"¿Es atleta?"},
    {word:"O rehber ___?",correct:"mi",translation:"¿Es guía?"},
    {word:"O kasap ___?",correct:"mı",translation:"¿Es carnicero?"},
    {word:"O çevirmen ___?",correct:"mi",translation:"¿Es traductor?"},
    {word:"O şoför ___?",correct:"mü",translation:"¿Es conductor?"},
    {word:"Biz mimar ___?",correct:"mıyız",translation:"¿Somos arquitectos?"},
    {word:"Biz doktor ___?",correct:"muyuz",translation:"¿Somos médicos?"},
    {word:"Biz avukat ___?",correct:"mıyız",translation:"¿Somos abogados?"},
    {word:"Biz öğretmen ___?",correct:"miyiz",translation:"¿Somos profesores?"},
    {word:"Biz mühendis ___?",correct:"miyiz",translation:"¿Somos ingenieros?"},
    {word:"Biz pilot ___?",correct:"muyuz",translation:"¿Somos pilotos?"},
    {word:"Biz sporcu ___?",correct:"muyuz",translation:"¿Somos deportistas?"},
    {word:"Biz sakin ___?",correct:"miyiz",translation:"¿Estamos tranquilos?"},
    {word:"Biz mutlu ___?",correct:"muyuz",translation:"¿Estamos felices?"},
    {word:"Biz hazır ___?",correct:"mıyız",translation:"¿Estamos listos?"},
    {word:"Siz diplomat ___?",correct:"mısınız",translation:"¿Sois diplomáticos?"},
    {word:"Siz akademisyen ___?",correct:"misiniz",translation:"¿Sois académicos?"},
    {word:"Siz girişimci ___?",correct:"misiniz",translation:"¿Sois emprendedores?"},
    {word:"Siz editör ___?",correct:"müsünüz",translation:"¿Sois editores?"},
    {word:"Siz tasarımcı ___?",correct:"mısınız",translation:"¿Sois diseñadores?"},
    {word:"Siz danışman ___?",correct:"mısınız",translation:"¿Sois consultores?"},
    {word:"Siz teknisyen ___?",correct:"misiniz",translation:"¿Sois técnicos?"},
    {word:"Siz organize ___?",correct:"misiniz",translation:"¿Sois organizados?"},
    {word:"Siz dikkatli ___?",correct:"misiniz",translation:"¿Sois cuidadosos?"},
    {word:"Siz enerjik ___?",correct:"misiniz",translation:"¿Sois enérgicos?"},
    {word:"Onlar kaptan ___?",correct:"mı",translation:"¿Son capitanes?"},
    {word:"Onlar ressam ___?",correct:"mı",translation:"¿Son pintores?"},
    {word:"Onlar müzisyen ___?",correct:"mi",translation:"¿Son músicos?"},
    {word:"Onlar pilot ___?",correct:"mu",translation:"¿Son pilotos?"},
    {word:"Onlar şoför ___?",correct:"mü",translation:"¿Son conductores?"},
    {word:"Onlar çevirmen ___?",correct:"mi",translation:"¿Son traductores?"},
    {word:"Onlar atlet ___?",correct:"mi",translation:"¿Son atletas?"},
    {word:"Onlar kasap ___?",correct:"mı",translation:"¿Son carniceros?"},
    {word:"Onlar rehber ___?",correct:"mi",translation:"¿Son guías?"},
    {word:"Onlar marangoz ___?",correct:"mu",translation:"¿Son carpinteros?"},
    {word:"Ben pilot değil ___?",correct:"miyim",translation:"¿No soy piloto?"},
    {word:"Ben aşçı değil ___?",correct:"miyim",translation:"¿No soy cocinero?"},
    {word:"Ben yorgun değil ___?",correct:"miyim",translation:"¿No estoy cansado?"},
    {word:"Ben hazır değil ___?",correct:"miyim",translation:"¿No estoy listo?"},
    {word:"Ben dikkatli değil ___?",correct:"miyim",translation:"¿No soy cuidadoso?"},
    {word:"Ben sakin değil ___?",correct:"miyim",translation:"¿No estoy tranquilo?"},
    {word:"Ben hızlı değil ___?",correct:"miyim",translation:"¿No soy rápido?"},
    {word:"Ben güçlü değil ___?",correct:"miyim",translation:"¿No soy fuerte?"},
    {word:"Ben temiz değil ___?",correct:"miyim",translation:"¿No estoy limpio?"},
    {word:"Ben zengin değil ___?",correct:"miyim",translation:"¿No soy rico?"},
    {word:"Sen pilot değil ___?",correct:"misin",translation:"¿No eres piloto?"},
    {word:"Sen aşçı değil ___?",correct:"misin",translation:"¿No eres cocinero?"},
    {word:"Sen yorgun değil ___?",correct:"misin",translation:"¿No estás cansado?"},
    {word:"Sen hazır değil ___?",correct:"misin",translation:"¿No estás listo?"},
    {word:"Sen dikkatli değil ___?",correct:"misin",translation:"¿No eres cuidadoso?"},
    {word:"Sen sakin değil ___?",correct:"misin",translation:"¿No estás tranquilo?"},
    {word:"Sen hızlı değil ___?",correct:"misin",translation:"¿No eres rápido?"},
    {word:"Sen güçlü değil ___?",correct:"misin",translation:"¿No eres fuerte?"},
    {word:"Sen temiz değil ___?",correct:"misin",translation:"¿No estás limpio?"},
    {word:"Sen zengin değil ___?",correct:"misin",translation:"¿No eres rico?"},
    {word:"O pilot değil ___?",correct:"mi",translation:"¿No es piloto?"},
    {word:"O aşçı değil ___?",correct:"mi",translation:"¿No es cocinero?"},
    {word:"O yorgun değil ___?",correct:"mi",translation:"¿No está cansado?"},
    {word:"O hazır değil ___?",correct:"mi",translation:"¿No está listo?"},
    {word:"O dikkatli değil ___?",correct:"mi",translation:"¿No es cuidadoso?"},
    {word:"O sakin değil ___?",correct:"mi",translation:"¿No está tranquilo?"},
    {word:"O hızlı değil ___?",correct:"mi",translation:"¿No es rápido?"},
    {word:"O güçlü değil ___?",correct:"mi",translation:"¿No es fuerte?"},
    {word:"O temiz değil ___?",correct:"mi",translation:"¿No está limpio?"},
    {word:"O zengin değil ___?",correct:"mi",translation:"¿No es rico?"},
    {word:"Biz pilot değil ___?",correct:"miyiz",translation:"¿No somos pilotos?"},
    {word:"Biz aşçı değil ___?",correct:"miyiz",translation:"¿No somos cocineros?"},
    {word:"Biz yorgun değil ___?",correct:"miyiz",translation:"¿No estamos cansados?"},
    {word:"Biz hazır değil ___?",correct:"miyiz",translation:"¿No estamos listos?"},
    {word:"Biz dikkatli değil ___?",correct:"miyiz",translation:"¿No somos cuidadosos?"},
    {word:"Biz sakin değil ___?",correct:"miyiz",translation:"¿No estamos tranquilos?"},
    {word:"Biz hızlı değil ___?",correct:"miyiz",translation:"¿No somos rápidos?"},
    {word:"Biz güçlü değil ___?",correct:"miyiz",translation:"¿No somos fuertes?"},
    {word:"Biz temiz değil ___?",correct:"miyiz",translation:"¿No estamos limpios?"},
    {word:"Biz zengin değil ___?",correct:"miyiz",translation:"¿No somos ricos?"},
    {word:"Siz pilot değil ___?",correct:"misiniz",translation:"¿No sois pilotos?"},
    {word:"Siz aşçı değil ___?",correct:"misiniz",translation:"¿No sois cocineros?"},
    {word:"Siz yorgun değil ___?",correct:"misiniz",translation:"¿No estáis cansados?"},
    {word:"Siz hazır değil ___?",correct:"misiniz",translation:"¿No estáis listos?"},
    {word:"Siz dikkatli değil ___?",correct:"misiniz",translation:"¿No sois cuidadosos?"},
    {word:"Siz sakin değil ___?",correct:"misiniz",translation:"¿No estáis tranquilos?"},
    {word:"Siz hızlı değil ___?",correct:"misiniz",translation:"¿No sois rápidos?"},
    {word:"Siz güçlü değil ___?",correct:"misiniz",translation:"¿No sois fuertes?"},
    {word:"Siz temiz değil ___?",correct:"misiniz",translation:"¿No estáis limpios?"},
    {word:"Siz zengin değil ___?",correct:"misiniz",translation:"¿No sois ricos?"},
    {word:"Onlar pilot değil ___?",correct:"mi",translation:"¿No son pilotos?"},
    {word:"Onlar aşçı değil ___?",correct:"mi",translation:"¿No son cocineros?"},
    {word:"Onlar yorgun değil ___?",correct:"mi",translation:"¿No están cansados?"},
    {word:"Onlar hazır değil ___?",correct:"mi",translation:"¿No están listos?"},
    {word:"Onlar dikkatli değil ___?",correct:"mi",translation:"¿No son cuidadosos?"},
    {word:"Onlar sakin değil ___?",correct:"mi",translation:"¿No están tranquilos?"},
    {word:"Onlar hızlı değil ___?",correct:"mi",translation:"¿No son rápidos?"},
    {word:"Onlar güçlü değil ___?",correct:"mi",translation:"¿No son fuertes?"},
    {word:"Onlar temiz değil ___?",correct:"mi",translation:"¿No están limpios?"},
    {word:"Onlar zengin değil ___?",correct:"mi",translation:"¿No son ricos?"}
];

let pool = []; 
let activeQueue = []; 
let current = null;
let locked = false;

let score = parseInt(localStorage.getItem('turco_score')) || 0;
let progress = JSON.parse(localStorage.getItem('turco_progress')) || {};

function resetAndStart() {
    localStorage.clear();
    score = 0;
    progress = {};
    startGame();
}

function startGame() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-container').style.display = 'block'; // Cambiado a block para evitar errores de layout
    initBlocks();
    updateUI();
    loadQuestion();
}

function initBlocks() {
    // CORRECCIÓN: Si no hay progreso, usamos todas las palabras.
    let available = allWords.filter(item => progress[item.word] !== undefined);
    
    if (available.length === 0) {
        available = [...allWords];
    }
    
    available.sort(() => Math.random() - 0.5);
    activeQueue = available;
    pool = [];
}

function updateUI() {
    document.getElementById("score").textContent = score + " completadas";
    document.getElementById("percent").textContent = "";
}

function loadQuestion() {
    if (activeQueue.length === 0) {
        document.getElementById("word").textContent = "FIN";
        document.getElementById("options").innerHTML = "";
        return;
    }

    locked = false;
    current = activeQueue[Math.floor(Math.random() * activeQueue.length)];
    
    const wordElement = document.getElementById("word");
    const optionsContainer = document.getElementById("options");
    
    // Mostramos la frase en turco
    wordElement.textContent = current.word;
    
    // --- AQUÍ AÑADIMOS LA TRADUCCIÓN ---
    // Creamos un elemento pequeño para la traducción si no existe, o lo actualizamos
    let transElement = document.getElementById("translation");
    if (!transElement) {
        transElement = document.createElement("div");
        transElement.id = "translation";
        // Estilo directamente aquí para que sea más pequeña y grisácea
        transElement.style.fontSize = "1.2rem"; 
        transElement.style.color = "#666";
        transElement.style.marginTop = "10px";
        transElement.style.fontWeight = "400";
        wordElement.parentNode.insertBefore(transElement, document.getElementById("dots"));
    }
    transElement.textContent = current.translation;
    // -----------------------------------

    optionsContainer.innerHTML = "";

    // Generar opciones
    let opts = new Set([current.correct]);
    while(opts.size < 4) {
        let randomWord = allWords[Math.floor(Math.random() * allWords.length)];
        opts.add(randomWord.correct);
    }
    
    let shuffledOpts = [...opts].sort(() => Math.random() - 0.5);
    
    shuffledOpts.forEach(opt => {
        let btn = document.createElement("button");
        btn.className = "option";
        btn.textContent = opt;
        btn.onclick = () => handleAnswer(opt, btn);
        optionsContainer.appendChild(btn);
    });
}
function handleAnswer(opt, btn) {
    if (locked) return;
    locked = true;
    
    const correct = current.correct;
    const word = current.word;

    document.querySelectorAll(".option").forEach(b => {
        if (b.textContent === correct) b.classList.add("correct");
    });

    if (opt === correct) {
        score++;
        progress[word] = (progress[word] || 0) + 1;
    } else {
        btn.classList.add("wrong");
    }

    localStorage.setItem('turco_score', score);
    localStorage.setItem('turco_progress', JSON.stringify(progress));
    
    updateUI();

    setTimeout(() => {
        loadQuestion();
    }, 800);
}

// Para que el botón "Devam Et" funcione al recargar
window.onload = () => {
    const resumeBtn = document.getElementById('resume-button');
    const savedProgress = JSON.parse(localStorage.getItem('turco_progress')) || {};
    if (Object.keys(savedProgress).length > 0 && resumeBtn) {
        resumeBtn.style.display = 'block'; 
    }
}
