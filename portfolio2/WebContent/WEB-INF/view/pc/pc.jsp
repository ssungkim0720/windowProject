<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<div class="viewChange folder" id="pc" onclick="viewChange('pc')">
	<div class="menu_wrap">
		<div class="menu sel" onclick="pcMenuClick('file')" id="pcMenu_file">파일</div>
		<div class="menu" onmouseenter="pcMenu('view')" onmouseleave="pcMenu2('view')"
				onclick="pcMenuClick('view')" id="pcMenu_view">보기</div>
		<div class="title">${title }</div>
		<div class="btn_wrap">
			<div class="btn">ㅡ</div>
			<div class="btn">□</div>
			<div class="btn" onclick="closePc('pc')">X</div>
		</div>
	</div>
	<div class="quick_menu">
		<div class="menu">
			<img src="/img/pc/menu/pc.png"/>
			<div class="txt">내 PC</div>
		</div>
		<div class="menu">
			<img src="/img/pc/menu/doc.png"/>
			<div class="txt">내 문서</div>
		</div>
	</div>
	<div class="content_wrap">
		<div class="folder_icon" onmouseenter="pcIcon('chrome')" onmouseleave="pcIcon2('chrome')" onclick="pcIconClick('chrome')">
			<div class="folder_iconBack" id="chromePcIconBack"></div>
			<div class="img">
				<img src="/img/footer/chrome.png"/>
			</div>
			<div class="txt">Chrome</div>
		</div>
		<div class="folder_icon" onmouseenter="pcIcon('pc')" onmouseleave="pcIcon2('pc')" onclick="pcIconClick('pc')">
			<div class="folder_iconBack" id="pcPcIconBack"></div>
			<div class="img">
				<img src="/img/main/pc.png"/>
			</div>
			<div class="txt">내 PC</div>
		</div>
	</div>
	<div class="count_wrap">
		<div class="txt">2개 항목</div>
	</div>
</div>