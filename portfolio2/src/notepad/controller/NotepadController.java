package notepad.controller;

import java.util.*;

import javax.servlet.http.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.*;

import notepad.model.*;

@Controller
@RequestMapping("/notepad")
public class NotepadController {
	@Autowired
	NotepadService ns;
	
	// ���θ����
	@RequestMapping("/newNotepad")
	@ResponseBody
	public ModelAndView newNotepad() {
		ModelAndView mav = new ModelAndView("/notepad/write.jsp");
		return mav;
	}
	
	// ���θ���� ���
	@RequestMapping("/writeCancel")
	@ResponseBody
	public ModelAndView writeCancel() {
		ModelAndView mav = new ModelAndView("/notepad/list.jsp");
		List<HashMap> notepadList = ns.notepadList(1);
		mav.addObject("notepadList", notepadList);
		int count = ns.count();
		mav = pageSetting(mav, count, 1);
		return mav;
	}
	
	// ����
	@RequestMapping("/saveNotepad/{category}/{title}/{content}")
	@ResponseBody
	public boolean saveNotepad(@PathVariable(name="category")String category, @PathVariable(name="title")String title,
			@PathVariable(name="content")String content, HttpSession session) {
		return ns.saveNotepad(category, title, content, session);
	}
	
	// ����
	@RequestMapping("/view/{num}")
	@ResponseBody
	public ModelAndView view(@PathVariable(name="num")String num) {
		ModelAndView mav = new ModelAndView("/notepad/view.jsp");
		HashMap view = ns.view(num);
		mav.addObject("view", view);
		return mav;
	}
	
	// ����
	@RequestMapping("/modify/{num}")
	@ResponseBody
	public ModelAndView modify(@PathVariable(name="num")String num) {
		ModelAndView mav = new ModelAndView("/notepad/write.jsp");
		HashMap view = ns.view(num);
		mav.addObject("view", view);
		return mav;
	}
	
	// ���� ����
	@RequestMapping("/modifySave/{num}/{category}/{title}/{content}")
	@ResponseBody
	public boolean modifySave(@PathVariable(name="num")String num, @PathVariable(name="category")String category,
			@PathVariable(name="title")String title, @PathVariable(name="content")String content) {
		return ns.modify(num, category, title, content);
	}
	
	// �޸��� ����
	@RequestMapping("/remove/{num}")
	@ResponseBody
	public boolean remove(@PathVariable(name="num")String num) {
		return ns.remove(num);
	}
	
	// ������ �̵�
	@RequestMapping("/page/{page}")
	@ResponseBody
	public ModelAndView page(@PathVariable(name="page")int page) {
		ModelAndView mav = new ModelAndView("/notepad/list.jsp");
		List<HashMap> notepadList = ns.notepadList(page);
		mav.addObject("notepadList", notepadList);
		int count = ns.count();
		mav = pageSetting(mav, count, page);
		return mav;
	}
	
	// ������ ����
	public ModelAndView pageSetting(ModelAndView mav, int count, int page) {
		int start = ((page-1)/5)*5+1; // 1-1 / 2-1 / 3-1 / 7-6
		int end = start+4>count ? count : start+4;
		int prev = ((page-1)/5)*5-5+1; // 6-1 / 7-1 / 8-1 / 11-6
		int next = count>end ? start+5 : 0; // 1-6 / 2-6 / 3-6
		mav.addObject("start", start);
		mav.addObject("end", end);
		mav.addObject("prev", prev);
		mav.addObject("next", next);
		return mav;
	}
}
