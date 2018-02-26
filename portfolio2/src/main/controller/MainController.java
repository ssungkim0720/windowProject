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
	
	// 폴더 열기
	@RequestMapping("/folder/{name}")
	@ResponseBody
	public ModelAndView folder(@PathVariable(name="name")String name) {
		ModelAndView mav = new ModelAndView("/doc/folder.jsp");
		mav.addObject("folderName", name);
		return mav;
	}
}
