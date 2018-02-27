package notepad.model;

import java.text.*;
import java.util.*;

import javax.servlet.http.*;

import org.apache.ibatis.session.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

@Component
public class NotepadService {
	@Autowired
	SqlSessionFactory fac;
	
	// 메모장 리스트
	public List<HashMap> notepadList(int page) {
		SqlSession ss = fac.openSession();
		List<HashMap> list = ss.selectList("notepad.list", (page-1)*10);
		ss.close();
		return list;
	}

	// 메모장 저장
	public boolean saveNotepad(String category, String title, String content, HttpSession session) {
		SqlSession ss = fac.openSession();
		HashMap<String, String> map = new HashMap<>();
		map.put("category", category);
		map.put("title", title);
		map.put("content", content);
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		String day = sdf.format(System.currentTimeMillis());
		map.put("day", day);
		map.put("writer", "관리자");
		try {
			ss.insert("notepad.save", map);
			ss.commit();
			ss.close();
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			ss.rollback();
			ss.close();
			return false;
		}
	}

	// 메모장 페이지
	public int count() {
		SqlSession ss = fac.openSession();
		int n = ss.selectOne("notepad.count");
		ss.close();
		return n%10 == 0 ? n/10 : n/10+1;
	}

	// 보기
	public HashMap view(String num) {
		SqlSession ss = fac.openSession();
		HashMap map = ss.selectOne("notepad.view", num);
		map.put("content", map.get("content").toString().replace("<br>", "\n"));
		ss.close();
		return map;
	}

	// 수정
	public boolean modify(String num, String category, String title, String content) {
		SqlSession ss = fac.openSession();
		HashMap<String, String> map = new HashMap<>();
		map.put("num", num);
		map.put("category", category);
		map.put("title", title);
		map.put("content", content);
		int n = ss.update("notepad.modify", map);
		if(n > 0) {
			ss.commit();
			ss.close();
			return true;
		} else {
			ss.rollback();
			ss.close();
			return false;
		}
	}

	// 삭제
	public boolean remove(String num) {
		SqlSession ss = fac.openSession();
		int n = ss.delete("notepad.remove", num);
		if(n > 0) {
			ss.commit();
			ss.close();
			return true;
		} else {
			ss.rollback();
			ss.close();
			return false;
		}
	}
}
