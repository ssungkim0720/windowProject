package main.controller;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.*;

import main.model.*;

@Controller
@RequestMapping("/")
public class MainController {
	@Autowired
	MainService ms;
	
	@RequestMapping("")
	public ModelAndView main() {
		ModelAndView mav = new ModelAndView("t:index");
		return mav;
	}
	
	// ���� ����
	@RequestMapping("/folder/{name}")
	@ResponseBody
	public ModelAndView folder(@PathVariable(name="name")String name) {
		ModelAndView mav = new ModelAndView();
		mav.addObject("folderName", name);
		String title = "";
		switch(name) {
		case "pc":
			title = "�� PC";
			mav.setViewName("/doc/folder.jsp");
			break;
		case "doc":
			title = "�� ����";
			mav.setViewName("/doc/folder.jsp");
			break;
		case "note":
			title = "�޸���";
			mav.setViewName("/doc/notepad.jsp");
			break;
		}
		mav.addObject("title", title);
		return mav;
	}
}
