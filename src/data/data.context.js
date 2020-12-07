import { createContext, useReducer } from "react";
import { dataReducer } from "./data.reducer";

const initialState = {
  id: "tech",
  color1: "rgb(88, 30, 189)",
  color2: "rgb(205, 2, 189)",
  sliderTop: "rgb(107, 58, 196)",
  sliderBottom: "rgb(76, 7, 194)",
  mainLine:
    "Enhance your communications with psychology-based copywriting and UX writing",
  btnColor1: "rgb(35, 255, 219)",
  btnColor2: "rgb(27, 93, 191)",
  serviceMsg1:
    "I develop clear and useful text in product interfaces to help users reach a specific goal, whether that's completing a form or tapping a button. This includes every type of content from on-screen help systems, user onboarding and in-app messages to push notifications and tooltips.",
  serviceMsg2:
    "Your website is a dialogue with your audience. I capture the essence of your business and communicate it clearly. Carefully considered writing and SEO best practices allow me to craft the perfect user journey online. Let me draw the map that guides users every step of the way from discovery, to consideration, to conversion.",
  serviceMsg3:
    "Give your business a competitive edge with powerful content that can be targeted to any segment of your audience. No matter how large or complex your project, my custom-built solutions including articles, eDMs, and case studies will help you implement a plan that maximizes your business’s online exposure.",
};
export const DataContext = createContext(initialState);

export function DataContextProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer);

  function ThemeData(obj) {
    dispatch({
      type: "CHANGE_THEME",
      payload: {
        id: obj?.id,
        color1: obj?.color1,
        color2: obj?.color2,
        sliderTop: obj?.sliderTop,
        sliderBottom: obj?.sliderBottom,
        mainLine: obj?.mainLine,
        btnColor1: obj?.btnColor1,
        btnColor2: obj?.btnColor2,
        serviceMsg1: obj?.serviceMsg1,
        serviceMsg2: obj?.serviceMsg2,
        serviceMsg3: obj?.serviceMsg3,
      },
    });
  }

  return (
    <DataContext.Provider
      value={{
        data: state,
        ThemeData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
