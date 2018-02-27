<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<div class="viewChange folder" id="${folderName }Folder" onclick="viewChange('${folderName }Folder')">
	<div class="menu_wrap">
		<div class="menu sel" onclick="folderMenuClick('file')" id="folderMenu_file">파일</div>
		<div class="menu" onmouseenter="folderMenu('view')" onmouseleave="folderMenu2('view')"
				onclick="folderMenuClick('view')" id="folderMenu_view">보기</div>
		<div class="title">${title }</div>
		<div class="btn_wrap">
			<div class="btn">ㅡ</div>
			<div class="btn">□</div>
			<div class="btn" onclick="closeFolder('${folderName}')">X</div>
		</div>
	</div>
	<div class="quick_menu">
		<div class="menu">
			<img src="/img/doc/menu/pc.png"/>
			<div class="txt">내 PC</div>
		</div>
		<div class="menu">
			<img src="/img/doc/menu/doc.png"/>
			<div class="txt">내 문서</div>
		</div>
	</div>
	<div class="content_wrap">
		<div class="folder_icon" onmouseenter="folderIcon('chrome')" onmouseleave="folderIcon2('chrome')" onclick="folderIconClick('chrome')">
			<div class="folder_iconBack" id="chromeFolderIconBack"></div>
			<div class="img">
				<img src="/img/footer/chrome.png"/>
			</div>
			<div class="txt">Chrome</div>
		</div>
		<div class="folder_icon" onmouseenter="folderIcon('pc')" onmouseleave="folderIcon2('pc')" onclick="folderIconClick('pc')">
			<div class="folder_iconBack" id="pcFolderIconBack"></div>
			<div class="img">
				<img src="/img/main/pc.png"/>
			</div>
			<div class="txt">내 PC</div>
		</div>
		<div class="folder_icon" onmouseenter="folderIcon('pc2')" onmouseleave="folderIcon2('pc2')" onclick="folderIconClick('pc2')">
			<div class="folder_iconBack" id="pc2FolderIconBack"></div>
			<div class="img">
				<img src="/img/main/pc.png"/>
			</div>
			<div class="txt">내 PC</div>
		</div>
		<div class="folder_icon" onmouseenter="folderIcon('pc3')" onmouseleave="folderIcon2('pc3')" onclick="folderIconClick('pc3')">
			<div class="folder_iconBack" id="pc3FolderIconBack"></div>
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