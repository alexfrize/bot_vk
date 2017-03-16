var helloMsg = [ "Здравствуйте, {{$user_name}}!", "Доброго времени суток.", "Приветствую.", "Приветствую Вас, {{$user_name}}. :)", "Приветствую Вас. :)", "{{$user_name}}! Приветствую Вас. Я к Вам по делу.",
				 "Добрый день!", "День добрый", "Добрый вечер!", "Доброе утро", "Доброго дня!", "Здравствуйте. Я к Вам по делу.",
				 "Добрый день, {{$user_name}}.", "День добрый, {{$user_name}}", "Добрый вечер, {{$user_name}}!", "Доброе утро, {{$user_name}}", "{{$user_name}}, доброго дня!",
				 "Здравствуйте, {{$user_name}}. Я к Вам по делу.", "{{$user_name}}, здравствуйте. Я к Вам по делу." ];

var mayIAskMsg = [ "Я пишу Вам вот по какому поводу: дело в том, что я увидела Ваш контакт в группе {{$group_name}} и хотела задать пару вопросов. Вы не возражаете?",
					"Я решила написать Вам, поскольку увидела Ваш контакт в группе{{$group_name}}. Могу я задать Вам пару вопросов на эту тему?",
					"Я увидела, что Вы состоите в группе {{$group_name}}. В связи с этим хотела бы задать несколько вопросов. Вы не против?",
					"Я пишу Вам, поскольку увидела, что Вы тоже состоите в сообществе ВК {{$group_name}}. Могу я задать Вам пару вопросов по этому поводу?",
					"{{$user_name}}, я вижу, что Вы состоите в группе {{$group_name}}. И по этому поводу у меня есть пара вопросов, которые я хотела бы Вам задать. Вы не против?",
					"Увидела, что Вы состоите в группе {{$group_name}}. Могу задать Вам вопрос по этому поводу?",
					"{{$user_name}}, я обнаружила, что Вы тоже состоите в группе {{$group_name}}. Могу задать Вам вопрос по этому поводу? :)" ]

var groupName = "«Aliexpress по-русски»";

/*

-> Я пишу Вам вот по какому поводу: дело в том, что я увидела Ваш контакт в группе «Aliexpress по-русски» и хотела задать пару вопросов. Вы не возражаете?
-> Я увидела Ваш контакт в группе «Aliexpress по-русски» и хотела задать пару вопросов. Можно?
-> Я увидела, что Вы состоите в группе «Aliexpress по-русски» и хотела бы задать Вам вопрос на эту тему. Вы не против?
 Миха

Миха 21:56
Не возражаю
 
 Марина
Марина 22:01
Отлично!
-> Хочу спросить у Вас, хотели бы Вы совершать обычные покупки на AliExpress, но по меньшей стоимости?
-> Хочу спросить, хотели бы Вы делать привычные Вам покупки на AliExpress, но по меньшей стоимости?
-> Хотели бы Вы совершать на AliExpress (и не только) привычные Вам покупки, значительно при этом экономя?
-> Мой вопрос таков: хотели бы Вы совершать покупки на AliExpress (и не только), значительно экономя при этом?
-> Интересно было бы Вам совершать покупки на AliExpress, получая при этом скидку?
-> Интересно было бы Вам получать скидку на каждую покупку, совершенную на AliExpress и не только?
-> Скажите, пожалуйста, нтересно было бы Вам делать покупки на AliExpress, получая при этом возврат в размере 7% от стоимости? То есть, фактически, экономить 7%
-> Скажите, а Вам интересно было бы совершать покупки на AliExpress, экономя при этом 7% с каждой покупки?

Миха 22:09
Редко! Один раз только
Возможно
 Марина

Марина 22:16
На самом деле скидку можно получить не только в Aliexpress. 
Более 450 известных магазинов и торговых сетей имеют контракты с системой City Life.
Для удобства мы создали небольшой сайт с кратким описанием возможностей карты. 
http://fin-nezavisimost.ru/ - оставив заявку на этом сайте, с Вами по телефону свяжется менеджер и в подробностях объяснит все плюсы использования карты, а также расскажет о бонусной партнерской программе (если, конечно, Вы захотите не только сэкономить, но и немного заработать).

Вам будет удобно оставить заявку на сайте, чтобы Вам перезвонили?



*/

/* ================ ВРЕМЕННАЯ ФУНКЦИЯ получения ссылок. Запускать функцию в группе, которую нужно распарсить ================  */
function getAllContacts() {
	var d = document.getElementsByClassName("fans_fan_lnk");
	var u_links=[];
	for (let i=0; i< d.length;i++) {
		u_links.push(d[i].getAttribute("href"));
	}

	console.log(u_links[0]);
}


/* ================ Преобразует сокращенное имя пользователя в его полное имя ================  */
function getFullUserName(shortUserName) {
	var names = [
		{ 	fullName : "Александр",
			shortNames : ["Санек", "Саня", "Шурик"]	},
		{ 	fullName : "Александра",
			shortNames : ["Сашенька", "Сашулька", "Санечка", "Aleksandra", "Alexandra"]	},
		{ 	fullName : "Алексей",
			shortNames : ["Леша", "Лёша", "Лешка", "Лёшка", "Алеша", "Алешка", "Алёшка", "Леха", "Лёха"]	},
		{ 	fullName : "Виктор",
			shortNames : ["Витя", "Витек", "Витёк", "Витюня", "Viktor", "Vitek"]	},			
		{ 	fullName : "Екатерина",
			shortNames : ["Катя", "Катюша", "Катюшка", "Катенька", "Катюня", "Katya", "Katyusha"]	},
		{ 	fullName : "Оксана",
			shortNames : ["Оксанка", "Oksana"]	},			
		{ 	fullName : "Ольга",
			shortNames : ["Оленька", "Оля", "Olya"]	},						
		{ 	fullName : "Павел",
			shortNames : ["Паша", "Пашка", "Паха", "Пашок", "Пахан", "Павлушка", "Павлуша", "Павлик", "Pavel", "Pavlik", "Pasha", "Paha"]	},				
		{ 	fullName : "Вячеслав",
			shortNames : ["Слава", "Славик", "Славка", "Славян", "Slava"]	},				
		{ 	fullName : "Николай",
			shortNames : ["Коля", "Колька", "Колясик", "Колян", "Колянчик", "Николаша", "Nicolai", "Nikolai", "Nikolay", "Niсkolay", "Niсkolai", "Kolya", "Kolyan"]	},		
		{ 	fullName : "Надежда",
			shortNames : ["Надя", "Надька", "Наденька", "Надюша", "Надюшка", "Nadezhda", "Nadya", "Nadia"]	},					
		{ 	fullName : "Денис",
			shortNames : ["Дэн", "Дэнчик", "Денчик", "Ден", "Дениска", "Denchik", "Denis", "Deniska"]	},	
		{ 	fullName : "Елена",
			shortNames : ["Леночка", "Еленочка", "Ленок", "Ленчик", "Ленусик", "Ленка", "Lenka", "Lena", "Lenusik", "Lenka"]	},				
		{ 	fullName : "Татьяна",
			shortNames : ["Танюша", "Танюшка", "Танечка", "Таня", "Танюсик", "Tanya", "Tanyusha", "Tanusha", "Tanka"]	},					
		{ 	fullName : "Юлия",
			shortNames : ["Юлечка", "Юленька", "Юльчик", "Юлька", "Юляша", "Yulia", "Julia"]	},				
										
			
	];
	var fullUserName = null;
	var i=0;
	do {
		if (names[i].shortNames.indexOf(shortUserName) != -1) {
			fullUserName = names[i].fullName;
			console.log("getFullUserName() :");
			console.log("names[" + i + "] " + ": ", names[i].shortNames[names[i].shortNames.indexOf(shortUserName)] + " -> " + fullUserName);
		} else 
		if (shortUserName == names[i].fullName) {
			// если уже указано полное имя, то так его и оставляем	
			fullUserName = names[i].fullName;
			console.log("getFullUserName() :");
			console.log("names[" + i + "] " + ": Уже указано полное имя  == " + fullUserName + "(" + names[i].fullName + ")" );
		}
		i++;
	} while ( (!fullUserName) && (i<names.length) );

	if (!fullUserName) {
		console.log("Длинное имя для " + shortUserName + " не найдено. Оставляем как есть.");
		fullUserName = shortUserName;
	}
	return fullUserName;
}


/* ================ Парсит сайт и определяет имя человека, которое написано у него на странице или в окне отправки сообщений ================  */
function getuserName() {
	var userName;
	if (document.getElementsByClassName("mail_box_label_peer").length) {
		userName = document.getElementsByClassName("mail_box_label_peer")[0].innerHTML;
		console.log("Переменная userName определена по имени в MsgBox (класс mail_box_label_peer)")
	}
		else if (document.getElementsByClassName("page_name").length) {
			userName = document.getElementsByClassName("page_name")[0].innerHTML;
			console.log("Переменная userName определена по заголовку страницы (класс page_name)")
		}
	if (!userName) {
		userName = '';
		console.log("Переменная userName НЕ определена. Присваиваем пустое значение")
	}

	// Выделяем только имя человека
	if (userName.indexOf(" ") != -1) {
		userName = userName.slice(0, userName.indexOf(" "));
	}
	
	// Преобразуем сокращенное имя в полное
	if (userName) userName = getFullUserName(userName);
	return userName;
}

/* ============= Функция отправки сообщения ============= */
function sendMsg(msg) {
	var messageBox = document.getElementById("mail_box_editable");
	if (msg.indexOf("{{$group_name}}")) {
		msg = msg.replace("{{$group_name}}", groupName);
	}

		if (msg.indexOf("{{$user_name}}")) {
		msg = msg.replace("{{$user_name}}", getuserName);
	}
	messageBox.innerHTML = msg;


	console.log(msg);
	//document.getElementById("mail_box_send").click(); //send message :)
}

function send() {
	sendMsg( helloMsg[Math.floor(Math.random()*helloMsg.length)]) ;
}




var btn=document.getElementsByClassName("flat_button profile_btn_cut_left")[0];
btn.click();
setTimeout(send, 2000);

console.log(getuserName());

