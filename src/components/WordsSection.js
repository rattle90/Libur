import React, { useEffect, useRef } from "react";
import "./WordsSection.css";

const WordsSection = () => {
  const paragraphsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.5 }
    );

    paragraphsRef.current.forEach((p) => {
      observer.observe(p);
    });

    return () => {
      paragraphsRef.current.forEach((p) => {
        observer.unobserve(p);
      });
    };
  }, []);

  return (
    <div className="words">
      <p ref={(el) => paragraphsRef.current[0] = el}>We first met at church, but we never greeted each other or even introduced ourselves. I only knew her name, Melisa, from our church friends. Eventually, I started getting involved with the church, and we often hung out together with our friends. That’s when I started to know her better because we were in the same circle. Our first chat was just to ask about my meal bill, but soon she started replying to my statuses, and we had brief conversations. Over time, we started chatting more frequently, becoming more open with each other, sharing stories, until she asked me to help with the church event team. From there, our chats became more intense, whether discussing the event or just having casual conversations.</p>
      <p ref={(el) => paragraphsRef.current[1] = el}>In the midst of event preparations, I ended up in the hospital, and she was the one who visited the most, even bringing me medicine. Through this, I began to understand her better. She’s kind, sensitive, always attentive, and gives meaningful advice. But behind that, she’s also fragile. She often gets offended, feels uneasy, and sometimes cries over things. She has many unique traits. She gets nauseous from chocolate and coffee. She also feels sick from garlic. One time, when we were eating with friends, she used her hands to pick out the garlic from her food. Isn’t that unique? Her favorite color is yellow. Anything yellow catches her eye and she instantly likes it, and that's why this website also uses a lot of yellow.</p>
      <p ref={(el) => paragraphsRef.current[2] = el}>We spend a lot of time together. I often go with her to church and hangouts, play at her house, be with her when she's sick, take her to the doctor, and even go on beach vacations. Sometimes I pick her up from work, and we often go out together, whether for a meal or to the mall. At night, we often talk on the phone about our day until one of us falls asleep, and it’s usually her who dozes off first, hahaha. Sometimes the call stays connected until morning and mysteriously hangs up on its own. She also sometimes accompanies me when I play futsal. There's always a feeling of joy when she cheers me on. She even once accompanied me to get a haircut, and I asked her to choose my hairstyle, haha.</p>
      <p ref={(el) => paragraphsRef.current[3] = el}>Sometimes I wonder what it would be like if we couldn’t be this close anymore. Not being able to pick her up from work, not going places together, not hearing her vent about her days, not sharing stories, not teasing each other, and not hearing her sleepy voice anymore. I hope that never happens. I hope we can stay like this forever, because without realizing it, my days are now filled with her. She’s always a part of my daily life. If this ever ends, I know I won’t be ready to return to those lonely days.</p>
      <p ref={(el) => paragraphsRef.current[4] = el}>I just want to say a big thank you to her. Thank you for brightening my days and for bringing color to my gray life. Happy birthday to the one I cherish. Take care of your health, watch what you eat, and don’t be careless. Don’t forget your vitamins and stay hydrated. May all your dreams come true, one by one. Lastly, don’t think you have to handle everything on your own. Sometimes it’s okay to ask for help from others, especially me, because not every burden can be carried alone. I always feel happy when you confide in me; I feel trusted, and I always strive to support you to rise again. Always remember that there are people who love you, care about you, and there's always a place to lean on during your bad days. Thank you for fighting this far, my strong human. I hope we can stay like this forever. May your day always be enjoyable.</p>
    </div>
  );
};

export default WordsSection;
