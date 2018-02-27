<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<div class="write_wrap">
	<div class="row">
		<div class="title">분류</div>
		<div class="input">
			<select disabled="disabled">
				<option ${view.cetegory == '개발' ? 'selected' : '' }>개발</option>
				<option ${view.category == '기타' ? 'selected' : '' }>기타</option>
			</select>
		</div>
	</div>
	<div class="row">
		<div class="title">제목</div>
		<div class="input">
			<input type="text" value="${view.title }" readonly="readonly"/>
		</div>
	</div>
	<div class="row">
		<div class="title">작성자</div>
		<div class="input">
			<input type="text" value="${view.writer }" readonly="readonly"/>
		</div>
	</div>
	<div class="row">
		<div class="title">작성일</div>
		<div class="input">
			<input type="text" value="${view.day }" readonly="readonly"/>
		</div>
	</div>
	<div class="row">
		<div class="title">내용</div>
		<div class="input">
			<textarea readonly="readonly">${view.content }</textarea>
		</div>
	</div>
</div>
<div class="btn_wrap">
	<div class="btn" onclick="modifyNotepad(${view.auto })">수정</div>
	<div class="btn" onclick="removeNotepad(${view.auto })">삭제</div>
	<div class="btn" onclick="notepadList()">목록으로</div>
</div>