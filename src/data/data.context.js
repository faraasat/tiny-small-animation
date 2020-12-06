import { createContext, useReducer } from "react";
import { dataReducer } from "./data.reducer";

const initialState = {
  id: "tech",
  color1: "rgb(88, 30, 189)",
  color2: "rgb(205, 2, 189)",
  sliderTop: "rgb(107, 58, 196)",
  sliderBottom: "rgb(76, 7, 194)",
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
