<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<div class="startBarBack"></div>
<div class="startBar">
	<div class="startBtn" onmouseenter="startBtn()" onmouseleave="startBtn2()" onclick="startClick()">
		<img src="/img/footer/startBtn.png"/>
		<div class="startBack"></div>
	</div>
	<div class="shortCut">
		<div class="icon" onmouseenter="shortCut(1)" onmouseleave="shortCut2(1)" onclick="shortCutClick(1)">
			<img src="/img/footer/folder.png"/>
			<div class="shortBack" id="shortBack1"></div>
			<div class="footerLine" id="footerLine1"></div>
		</div>
		<div class="icon" onmouseenter="shortCut(2)" onmouseleave="shortCut2(2)" onclick="shortCutClick(2)">
			<img src="/img/footer/chrome.png"/>
			<div class="shortBack" id="shortBack2"></div>
			<div class="footerLine" id="footerLine2"></div>
		</div>
		<div class="icon" onmouseenter="shortCut(3)" onmouseleave="shortCut2(3)" onclick="shortCutClick(3)">
			<img src="/img/main/notepad.png"/>
			<div class="shortBack" id="shortBack3"></div>
			<div class="footerLine" id="footerLine3"></div>
		</div>
	</div>
	<div class="shortCut timeBar">
		<div class="icon icon2" onmouseenter="shortCut(10)" onmouseleave="shortCut2(10)" onclick="langChange()">
			<div class="txt" id="language">가</div>
			<div class="shortBack shortBack2" id="shortBack10"></div>
		</div>
		<div class="icon time" onmouseenter="shortCut(11)" onmouseleave="shortCut2(11)" onclick="timeClick()">
			<div class="txt">오후 1:14<br>2018-02-26</div>
			<div class="shortBack shortBack3" id="shortBack11"></div>
		</div>
		<div class="icon icon3" onmouseenter="shortCut(12)" onmouseleave="shortCut2(12)" onclick="showBack()">
			<img src="/img/footer/showBack.png"/>
			<div class="shortBack shortBack4" id="shortBack12"></div>
		</div>
	</div>
</div>