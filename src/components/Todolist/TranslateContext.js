import { useState, createContext , useEffect } from "react";

const TranslateContext = createContext()

function TranslateProvider({children}) {
    const [content, setContent] = useState({
        "us":{
            "header":`You have tasks left!`,
            "checkbox":"Not finished only",
            "inputEnter":"Enter task...",
            "button":"Submit"
        },
        "vn":{
            "header":`Bạn có nhiệm vụ còn lại`,
            "checkbox":"Nhiệm vụ chưa hoàn thành",
            "inputEnter":"Nhập nhiệm vụ...",
            "button":"Gửi"
        }
    })
    // const handleTargetTranslate = (e) => {
    //     setLanguague(e.target.value);
    //   };

    // const handleChangeTranslate = () => {
    // if (languagues == "en") {
    //     setContent(content.en)
    // }
    // else if (languagues == "vn") {
    //     setContent(content.vn)
    // }};

    // const TranslateValue = {
    //     content,
    //     handleTargetTranslate,
    //     handleChangeTranslate
    // }

  return (
    <TranslateContext.Provider value = {content}>
        {children}
    </TranslateContext.Provider>
  )
}

export { TranslateContext, TranslateProvider }
