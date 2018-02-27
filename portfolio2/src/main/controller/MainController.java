package main.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.*;

import main.model.*;
import notepad.model.*;

@Controller
@RequestMapping("/")
public class MainController {
	@Autowired
	MainService ms;
	@Autowired
	NotepadService ns;
	
	@RequestMapping("")
	public ModelAndView main() {
		ModelAndView mav = new ModelAndView("t:index");
		return mav;
	}
	
	// 폴더 열기
	@RequestMapping("/folder/{name}")
	@ResponseBody
	public ModelAndView folder(@PathVariable(name="name")String name) {
		ModelAndView mav = new ModelAndView();
		mav.addObject("folderName", name);
		String title = "";
		switch(name) {
		case "pc":
			title = "내 PC";
			mav.setViewName("/doc/folder.jsp");
			break;
		case "doc":
			title = "내 문서";
			mav.setViewName("/doc/folder.jsp");
			break;
		case "note":
			title = "메모장";
			mav.setViewName("/notepad/notepad.jsp");
			List<HashMap> notepadList = ns.notepadList(1);
			mav.addObject("notepadList", notepadList);
			int count = ns.count();
			mav = pageSetting(mav, count, 1);
			break;
		}
		mav.addObject("title", title);
		return mav;
	}
	
	// 페이지 셋팅
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
