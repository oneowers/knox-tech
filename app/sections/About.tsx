import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
        <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
    <AnimatedTitle
        text={"Мы создаем сайты с 2019 года"}
        className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
        }
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
    />

    <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
        <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody text="Наши усилия направлены на создание программного обеспечения, которое является не только красивым, но и функциональным. Мы занимаемся разработкой более 8 лет и недавно начали активно изучать программирование." />

            <AnimatedBody
                delay={0.1}
                text="Будь то разработка стильного пользовательского интерфейса или написание сложного приложения, мы всегда стремимся создавать нечто уникальное и инновационное. Нам нравится экспериментировать с новыми технологиями и быть в курсе последних тенденций в мире технологий."
            />

            <AnimatedBody
                delay={0.2}
                text="В настоящее время мы работаем над несколькими увлекательными проектами, которые с нетерпением ждем, чтобы поделиться с вами. Но мы всегда открыты для новых возможностей и сотрудничества."
            />
        </div>
    </div>
</div>

        </section>
    );
};

export default About;
