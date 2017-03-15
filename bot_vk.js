var helloMsg = [ "Здравствуйте, {{$user_name}}!", "Доброго времени суток.", "Приветствую.", "Приветствую Вас, {{$user_name}}. :)", "Приветствую Вас. :)", "{{$user_name}}! Приветствую Вас. Я к Вам по делу.",
				 "Добрый день!", "День добрый", "Добрый вечер!", "Доброе утро", "Доброго дня!", "Здравствуйте. Я к Вам по делу.",
				 "Добрый день, {{$user_name}}.", "День добрый, {{$user_name}}", "Добрый вечер, {{$user_name}}!", "Доброе утро, {{$user_name}}", "{{$user_name}}, доброго дня!",
				 "Здравствуйте, {{$user_name}}. Я к Вам по делу.", "{{$user_name}}, здравствуйте. Я к Вам по делу." ];

var mayIAskMsg = [ "Я пишу Вам вот по какому поводу: дело в том, что я увидела Ваш контакт в группе {{$group_name}} и хотела задать пару вопросов. Вы не возражаете?",
					"Я решила написать Вам, поскольку увидела Ваш контакт в группе{{$group_name}}. Могу я задать Вам пару вопросов на эту тему?",
					"Я увидела, что Вы состоите в группе {{$group_name}}. В связи с этим хотела бы задать несколько вопросов. Вы не против?",
					"Я пишу Вам, поскольку увидела, что Вы тоже состоите в сообществе ВК {{$group_name}}. Могу я задать Вам пару вопросов по этому поводу?",
					"{{$user_name}}, я вижу, что Вы состоите в группе {{$group_name}}. И по этому поводу у меня есть пара вопросов. Вы не против?",
					"Увидела, что Вы состоите в группе {{$group_name}}. Могу задать Вам вопрос по этому поводу?",
					"{{$user_name}}, я обнаружила, что Вы тоже состоите в группе {{$group_name}}. Могу задать Вам вопрос по этому поводу? :)" ]

var groupName = "«Aliexpress по-русски»";



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

	if (userName.indexOf(" ") != -1) {
		userName = userName.slice(0, userName.indexOf(" "));
	}
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