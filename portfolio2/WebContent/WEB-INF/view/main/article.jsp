<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<div class="icons" onmouseenter="icon('pc')" onmouseleave="icon2('pc')" onclick="iconClick('pc')" ondblclick="icondbClick('pc')">
	<div class="iconsBack" id="pcBack"></div>
	<div class="img">
		<img src="/img/main/pc.png"/>
	</div>
	<div class="txt">내 PC</div>
</div>
<div class="icons" onmouseenter="icon('doc')" onmouseleave="icon2('doc')" onclick="iconClick('doc')" ondblclick="icondbClick('doc')">
	<div class="iconsBack" id="docBack"></div>
	<div class="img">
		<img src="/img/main/doc.png"/>
	</div>
	<div class="txt">내 문서</div>
</div>
<div class="icons" onmouseenter="icon('notePad')" onmouseleave="icon2('notePad')" onclick="iconClick('notePad')" ondblclick="icondbClick('notePad')">
	<div class="iconsBack" id="notePadBack"></div>
	<div class="img">
		<img src="/img/main/notepad.png"/>
	</div>
	<div class="txt">메모장</div>
</div>