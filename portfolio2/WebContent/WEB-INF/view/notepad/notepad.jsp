<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<div class="viewChange notepad" id="notePad" onclick="viewChange('notePad')">
	<div class="title_wrap">
		<div class="title">
			<img src="/img/doc/title/notepad.png"/>
			<div class="txt">메모장</div>
		</div>
		<div class="btn_wrap">
			<div class="btn">ㅡ</div>
			<div class="btn">□</div>
			<div class="btn" onclick="closeNotepad()">X</div>
		</div>
	</div>
	<div class="menu_wrap">
		<div class="menu" onmouseenter="notepadMenu()" onmouseleave="notepadMenu2()" onclick="notepadMenuClick()" id="notepadFile">파일</div>
		<div class="notepadMenu" id="notepadTopmenu" onmouseenter="notepadTopmenu()">
			<div class="topMenu" onclick="newNotepad()">새로 만들기</div>
			<div class="topMenu" onclick="closeNotepad()">종료</div>
		</div>
	</div>
	<div class="content_wrap" id="notepadContent">
		<c:import url="/WEB-INF/view/notepad/list.jsp"/>
	</div>
</div>