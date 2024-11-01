package com.example.timerP;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TimerController {

    @GetMapping("/")
    public String timerPage(Model model) {
        // 타이머 기본 값을 설정
        model.addAttribute("time",0);
        return "timer";
    }
}
