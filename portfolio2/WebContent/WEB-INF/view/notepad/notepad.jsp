<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<div class="viewChange notepad" id="notePad" onclick="viewChange('notePad')">
	<div class="title_wrap">
		<div class="title">
			<img src="/img/notepad/title.png"/>
			<div class="txt">�޸���</div>
		</div>
		<div class="btn_wrap">
			<div class="btn">��</div>
			<div class="btn">��</div>
			<div class="btn" onclick="closeNotepad()">X</div>
		</div>
	</div>
	<div class="menu_wrap">
		<div class="menu" onmouseenter="notepadMenu()" onmouseleave="notepadMenu2()" onclick="notepadMenuClick()" id="notepadFile">����</div>
		<div class="notepadMenu" id="notepadTopmenu" onmouseenter="notepadTopmenu()">
			<div class="topMenu" onclick="newNotepad()">���� �����</div>
			<div class="topMenu" onclick="closeNotepad()">����</div>
		</div>
	</div>
	<div class="content_wrap" id="notepadContent">
		<c:import url="/WEB-INF/view/notepad/list.jsp"/>
	</div>
</div>