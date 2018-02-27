<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div class="table">
	<div class="table_title">
		<div class="title">No</div>
		<div class="title title2">Category</div>
		<div class="title title3">Title</div>
		<div class="title title2">Writer</div>
		<div class="title title2">Day</div>
	</div>
	<c:forEach var="t" items="${notepadList }">
		<div class="row">
			<div class="cell">${t.auto }</div>
			<div class="cell cell2">${t.category }</div>
			<div class="cell cell3">
				<c:choose>
					<c:when test="${t.work.length() > 20 }">
						<span onclick="viewNotepad(${t.auto})">${t.title.substring(0, 20) }...</span>
					</c:when>
					<c:otherwise>
						<span onclick="viewNotepad(${t.auto})">${t.title }</span>
					</c:otherwise>
				</c:choose>
			</div>
			<div class="cell cell2">${t.writer }</div>
			<div class="cell cell2">${t.day }</div>
		</div>
	</c:forEach>
</div>
<div class="search_wrap">
	<select>
		<option>작성자</option>
		<option>제목</option>
		<option>내용</option>
		<option>제목+내용</option>
	</select> <input type="text" />
	<div class="btn">검색</div>
</div>
<div class="page_wrap">
	<c:if test="${prev > 0 }">
		<div class="page" onclick="notepadPage(${prev})">&lt;</div>
	</c:if>
	<c:forEach var="t" begin="${start }" end="${end }">
		<div class="page" onclick="notepadPage(${t})">${t }</div>
	</c:forEach>
	<c:if test="${next != 0 }">
		<div class="page" onclick="notepadPage(${next})">&gt;</div>
	</c:if>
</div>