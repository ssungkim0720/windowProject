// 시작버튼 접근
function startBtn(){
	$(".startBack").show();
	$(".startBtn img").prop("src", "/img/footer/startBtn2.png");
}

// 시작버튼 리브
function startBtn2(){
	$(".startBack").hide();
	$(".startBtn img").prop("src", "/img/footer/startBtn.png");
}

// 시작버튼 클릭
function startClick(){
	alert("시작버튼");
}

// 시작메뉴 아이콘 접근
function shortCut(num){
	$("#shortBack"+num).show();
	$("#footerLine"+num).stop().animate({
		"width" : "100%"
	}, 100);
}

// 시작메뉴 아이콘 리브
function shortCut2(num){
	$("#shortBack"+num).hide();
	$("#footerLine"+num).stop().animate({
		"width" : "54px"
	}, 100);
}

// 시작메뉴 아이콘 클릭
var shortCutIcon = new Array(0, 0, 0);
function shortCutClick(num){
	if(shortCutIcon[num] == 0){
		$("#footerLine"+num).show();
		shortCutIcon[num] == 1;
	}
}

$(document).ready(function(){
	$(document).keydown(function(e){
		if(e.keyCode == 21){
			if($("#language").html() == "가"){
				$("#language").html("ko");
				$("input").css({
					"ime-mode" : "inactive"
				});
			} else {
				$("#language").html("가");
				$("input").css({
					"ime-mode" : "active"
				});
			}
		}
	});
});

// 언어변경
function langChange(){
	if($("#language").html() == "가"){
		$("#language").html("ko");
	} else {
		$("#language").html("가");
	}
}

// 시간클릭
function timeClick(){
	
}

// 바탕화면보기 클릭
function showBack(){
	
}

// 아이콘 배열 번호 체크
function iconNumCheck(name){
	var n = 0;
	switch(name){
	case "pc":
		n = 0;
		break;
	case "doc":
		n = 1;
		break;
	case "note":
		n = 2;
		break;
	}
	return n;
}

// 아이콘 접근
function icon(name){
	var n = iconNumCheck(name);
	if(icons[n] == 0){
		$("#"+name+"Back").show();
	} else {
		$("#"+name+"Back").css({
			"background-color" : "#999999"
		});
	}
}

// 아이콘 리브
function icon2(name){
	var n = iconNumCheck(name);
	if(icons[n] == 0){
		$("#"+name+"Back").hide();
	} else {
		$("#"+name+"Back").css({
			"background-color" : "cacaca"
		});
	}
}

// 아이콘 클릭
var icons = new Array(0, 0, 0);
function iconClick(name){
	$(".iconsBack").hide();
	var n = iconNumCheck(name);
	for(var i=0; i<icons.length; i++){
		icons[i] = 0;
	}
	icons[n] = 1;
	$("#"+name+"Back").css({
		"background-color" : "#999999"
	});
	$("#"+name+"Back").show();
}

// 아이콘 더블클릭
function icondbClick(name){
	$.ajax({
		type : "post",
		url : "/folder/"+name,
		async : false,
		success : function(html){
			$("article").append(html);
		}
	});
}

// 폴더 닫기
function closeFolder(name){
	$("#"+name+"Folder").remove();
}

// 폴더 메뉴 접근
function folderMenu(name){
	$("#folderMenu_"+name).css({
		"background-color" : "f5f5f5"
	});
}

// 폴더 메뉴 리브
function folderMenu2(name){
	$("#folderMenu_"+name).css({
		"background-color" : "white"
	});
}

// 폴더 메뉴 클릭
var folderMenus = new Array(0, 0);
function folderMenuClick(name){
	switch(name){
	case "file":
		break;
	case "view":
		if(folderMenus[1] == 0){
			$("#folderMenu_"+name).css({
				"background-color" : "e5e5e5"
			});
		} else {
			$("#folderMenu_"+name).css({
				"background-color" : "f5f5f5"
			});
		}
		break;
	}
}

// 폴더 아이콘 접근
function folderIcon(name){
	var n = folderIconNumCheck(name);
	if(folderIcons[n] == 0){
		$("#"+name+"FolderIconBack").show();
	}
}

// 폴더 아이콘 리브
function folderIcon2(name){
	var n = folderIconNumCheck(name);
	if(folderIcons[n] == 0){
		$("#"+name+"FolderIconBack").hide();
	}
}

// 폴더 아이콘 클릭
var folderIcons = new Array(0, 0, 0, 0);
function folderIconClick(name){
	$(".folder_iconBack").hide();
	$(".folder_iconBack").css({
		"background-color" : "77bbff"
	});
	var n = folderIconNumCheck(name);
	for(var i=0; i<folderIcons.length; i++){
		folderIcons[i] = 0;
	}
	folderIcons[n] = 1;
	$("#"+name+"FolderIconBack").css({
		"background-color" : "#0077ff"
	});
	$("#"+name+"FolderIconBack").show();
}

// 폴더 아이콘 배열 번호 체크
function folderIconNumCheck(name){
	var n = 0;
	switch(name){
	case "chrome":
		n = 0;
		break;
	case "pc":
		n = 1;
		break;
	case "pc2":
		n = 2;
		break;
	case "pc3":
		n = 3;
		break;
	}
	return n;
}





