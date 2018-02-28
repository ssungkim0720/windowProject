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
var shortCutIcon = new Array(0, 0, 0, 0);
function shortCutClick(num){
	var name = "";
	switch(num){
	case 1:
		name = "pc";
		break;
	case 2:
		name = "doc";
		break;
	case 3:
		name = "notePad";
		break;
	}
	icondbClick(name);
//	$(".viewChange").css({
//		"z-index" : 3
//	});
//	var b = false;
//	switch(name){
//	case "pc":
//		b = pcView == 0 ? true : false;
//		break;
//	case "doc":
//		b = docView == 0 ? true : false;
//		break;
//	case "note":
//		b = noteView == 0 ? true : false;
//	}
//	if(b){
//		$.ajax({
//			type : "post",
//			url : "/folder/"+name,
//			async : false,
//			success : function(html){
//				$("article").append(html);
//				var num = 0;
//				switch(name){
//				case "pc":
//					num = 1;
//					pcView = 1;
//					break;
//				case "doc":
//					num = 2;
//					docView = 1;
//					break;
//				case "note":
//					num = 3;
//					noteView = 1;
//					break;
//				}
//				if(shortCutIcon[num] == 0){
//					$("#footerLine"+num).show();
//					shortCutIcon[num] == 1;
//				}
//			}
//		});
//	} else {
//		viewChange(name);
//	}
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
	case "notePad":
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
var pcView = 0;
var docView = 0;
var noteView = 0;
function icondbClick(name){
	$(".viewChange").css({
		"z-index" : 3
	});
	var b = false;
	switch(name){
	case "pc":
		b = pcView == 0 ? true : false;
		break;
	case "doc":
		b = docView == 0 ? true : false;
		break;
	case "notePad":
		b = noteView == 0 ? true : false;
	}
	if(b){
		$.ajax({
			type : "post",
			url : "/folder/"+name,
			async : false,
			success : function(html){
				$("article").append(html);
				var num = 0;
				switch(name){
				case "pc":
					num = 1;
					pcView = 1;
					break;
				case "doc":
					num = 2;
					docView = 1;
					break;
				case "notePad":
					num = 3;
					noteView = 1;
					break;
				}
				if(shortCutIcon[num] == 0){
					$("#footerLine"+num).show();
					shortCutIcon[num] == 1;
				}
			}
		});
	} else {
		viewChange(name);
	}
}

// 내PC 닫기
function closePc(name){
	$("#pc").remove();
	$("#footerLine1").hide();
	shortCutIcon[1] == 0;
	pcView = 0;
}

// PC 메뉴 접근
function pcMenu(name){
	$("#pcMenu_"+name).css({
		"background-color" : "f5f5f5"
	});
}

// PC 메뉴 리브
function pcMenu2(name){
	$("#pcMenu_"+name).css({
		"background-color" : "white"
	});
}

// PC 메뉴 클릭
var pcMenus = new Array(0, 0);
function pcMenuClick(name){
	switch(name){
	case "file":
		break;
	case "view":
		if(pcMenus[1] == 0){
			$("#pcMenu_"+name).css({
				"background-color" : "e5e5e5"
			});
		} else {
			$("#pcMenu_"+name).css({
				"background-color" : "f5f5f5"
			});
		}
		break;
	}
}

// PC 아이콘 접근
function pcIcon(name){
	var n = pcIconNumCheck(name);
	if(pcIcons[n] == 0){
		$("#"+name+"PcIconBack").show();
	}
}

// PC 아이콘 리브
function pcIcon2(name){
	var n = pcIconNumCheck(name);
	if(pcIcons[n] == 0){
		$("#"+name+"PcIconBack").hide();
	}
}

// PC 아이콘 클릭
var pcIcons = new Array(0, 0);
function pcIconClick(name){
	$(".folder_iconBack").hide();
	$(".folder_iconBack").css({
		"background-color" : "77bbff"
	});
	var n = pcIconNumCheck(name);
	for(var i=0; i<pcIcons.length; i++){
		pcIcons[i] = 0;
	}
	pcIcons[n] = 1;
	$("#"+name+"PcIconBack").css({
		"background-color" : "#0077ff"
	});
	$("#"+name+"PcIconBack").show();
}

// PC 아이콘 배열 번호 체크
function pcIconNumCheck(name){
	var n = 0;
	switch(name){
	case "chrome":
		n = 0;
		break;
	case "pc":
		n = 1;
		break;
	}
	return n;
}

// 프로그램 전환
function viewChange(view){
	$(".viewChange").css({
		"z-index" : 3
	});
	$("#"+view).css({
		"z-index" : 9
	});
//	$("#notepadFile").css({
//		"background-color" : "white"
//	});
//	$("#notepadTopmenu").hide();
//	notepadMenuNum = 0;
}

// 메모장 닫기
function closeNotepad(){
	$("#notePad").remove();
	notepadMenuNum = 0;
	$("#footerLine3").hide();
	shortCutIcon[3] == 0;
	noteView = 0;
}

// 메모장 메뉴 접근
var notepadMenuNum = 0;
function notepadMenu(name){
	if(notepadMenuNum == 0){
		$("#notepadFile").css({
			"background-color" : "f5f5f5"
		});
	} else {
		$("#notepadFile").css({
			"background-color" : "e5e5e5"
		});
	}
}

// 메모장 메뉴 리브
function notepadMenu2(name){
	if(notepadMenuNum == 0){
		$("#notepadFile").css({
			"background-color" : "white"
		});
		notepadMenuNum = 0;
	}
}

// 메모장 메뉴 클릭
function notepadMenuClick(name){
	if(notepadMenuNum == 0){
		$("#notepadFile").css({
			"background-color" : "e5e5e5"
		});
		$("#notepadTopmenu").show();
	} else {
		$("#notepadFile").css({
			"background-color" : "white"
		});
		$("#notepadTopmenu").hide();
	}
	notepadMenuNum = notepadMenuNum == 0 ? 1 : 0;
}

// 메모장 메뉴 클릭메뉴 접근
function notepadTopmenu(){
	$("#notepadFile").css({
		"background-color" : "e5e5e5"
	});
}

// 메모장 새로만들기
function newNotepad(){
	$.ajax({
		type : "post",
		url : "/notepad/newNotepad",
		async : false,
		success : function(html){
			$("#notepadContent").html(html);
			$("#notepadFile").css({
				"background-color" : "white"
			});
			$("#notepadTopmenu").hide();
			notepadMenuNum = 0;
		}
	});
}

// 메모장 새로만들기 취소
function notepadWriteCancel(){
	var b = confirm("저장하지 않은 내용은 손실됩니다.\n계속하시겠습니까?");
	if(b){
		$("#notepadFile").css({
			"background-color" : "white"
		});
		$("#notepadTopmenu").hide();
		notepadMenuNum = 0;
		$.ajax({
			type : "post",
			url : "/notepad/writeCancel",
			asycn : false,
			success : function(html){
				$("#notepadContent").html(html);
			}
		});
	}
}

// 메모장 저장
function saveNotepad(){
	var num = $("#notepadWriteNum").val();
	var category = $("#notepadWriteCategory").val();
	var title = $("#notepadWriteTitle").val();
	var content = $("#notepadWriteContent").val();
	content = content.replace(/\n/g, "<br>");
	if(modifyNotepadNum == 0){
		$.ajax({
			type : "post",
			url : "/notepad/saveNotepad/"+category+"/"+title+"/?content="+content,
			async : false,
			success : function(b){
				if(b){
					alert("저장되었습니다.");
					modifyNotepadNum = 0;
					$.ajax({
						type : "post",
						url : "/notepad/writeCancel",
						asycn : false,
						success : function(html){
							$("#notepadContent").html(html);
						}
					});
				} else {
					alert("저장에 실패하였습니다.\n잠시후 다시 시도해주세요.");
				}
			}
		});
	} else {
		$.ajax({
			type : "post",
			url : "/notepad/modifySave/"+num+"/"+category+"/"+title+"?content="+content,
			aysnc : false,
			success : function(b){
				if(b){
					alert("수정되었습니다.");
					$.ajax({
						type : "post",
						url : "/notepad/view/"+num,
						async : false,
						success : function(html){
							$("#notepadContent").html(html);
						}
					});
				} else {
					alert("수정에 실패하였습니다.\n잠시후 다시 시도해주세요.");
				}
			}
		});
	}
}

// 메모장 보기
function viewNotepad(num){
	$("#notepadFile").css({
		"background-color" : "white"
	});
	$("#notepadTopmenu").hide();
	notepadMenuNum = 0;
	$.ajax({
		type : "post",
		url : "/notepad/view/"+num,
		async : false,
		success : function(html){
			$("#notepadContent").html(html);
		}
	});
}

// 메모장 수정
var modifyNotepadNum = 0;
function modifyNotepad(num){
	$.ajax({
		type : "post",
		url : "/notepad/modify/"+num,
		async : false,
		success : function(html){
			$("#notepadContent").html(html);
			modifyNotepadNum = 1;
		}
	});
}

// 메모장 삭제
function removeNotepad(num){
	var b = confirm("삭제하시겠습니까?");
	if(b){
		$.ajax({
			type : "post",
			url : "/notepad/remove/"+num,
			async : false,
			success : function(bb){
				if(bb){
					alert("삭제되었습니다.");
					$.ajax({
						type : "post",
						url : "/notepad/writeCancel",
						asycn : false,
						success : function(html){
							$("#notepadContent").html(html);
						}
					});
				} else {
					alert("삭제에 실패하였습니다.\n잠시후 다시 시도해주세요.");
				}
			}
		});
	}
}

// 메모장 목록으로
function notepadList(){
	$("#notepadFile").css({
		"background-color" : "white"
	});
	$("#notepadTopmenu").hide();
	notepadMenuNum = 0;
	$.ajax({
		type : "post",
		url : "/notepad/writeCancel",
		asycn : false,
		success : function(html){
			$("#notepadContent").html(html);
		}
	});
}

// 메모장 페이지 이동
function notepadPage(page){
	$.ajax({
		type : "post",
		url : "/notepad/page/"+page,
		async : false,
		success : function(html){
			$("#notepadContent").html(html);
		}
	});
}






