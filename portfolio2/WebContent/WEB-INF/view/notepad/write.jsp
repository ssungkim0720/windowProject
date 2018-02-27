<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<input type="hidden" id="notepadWriteNum" value="${view.auto }"/>
<div class="write_wrap">
	<div class="row">
		<div class="title">분류</div>
		<div class="input">
			<select id="notepadWriteCategory">
				<option ${view.category == '개발' ? 'selected' : '' }>개발</option>
				<option ${view.category == '기타' ? 'selected' : '' }>기타</option>
			</select>
		</div>
	</div>
	<div class="row">
		<div class="title">제목</div>
		<div class="input">
			<input type="text" id="notepadWriteTitle" value="${view.title }"/>
		</div>
	</div>
	<div class="row">
		<div class="title">내용</div>
		<div class="input">
			<textarea id="notepadWriteContent">${view.content }</textarea>
		</div>
	</div>
</div>
<div class="btn_wrap">
	<div class="btn" onclick="saveNotepad()">저장</div>
	<div class="btn" onclick="notepadWriteCancel()">취소</div>
</div>