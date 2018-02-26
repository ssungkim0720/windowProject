<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="t" uri="http://tiles.apache.org/tags-tiles" %>

<html>
	<head>
		<c:import url="/WEB-INF/view/main/head.jsp"/>
	</head>
	
	<body>
		<section class="background"></section>
		<article>
			<t:insertAttribute name="article"/>
		</article>
		<footer>
			<t:insertAttribute name="footer"/>
		</footer>
	</body>
</html>