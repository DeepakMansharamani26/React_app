//create a context (Warehouse)
//provider
//consumer / useContext hook

import React,{useContext,useReducer} from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const intialState = {
    name: "",
    image: "",
    //data: [],
  };


const AppProvider=({children})=>{
    
    const [state,dispatch] = useReducer(reducer,intialState);
    
    const updateHomePage =()=>{
        return dispatch(
            {
                type: "HOME_UPDATE",
                payload: 
                {
                    name: "Deepak_Technical website",
                    image: "./images/logo.jpg",
                },
            }
        );
    };

        const udpateAboutPage = () => {
            return dispatch({
              type: "ABOUT_UPDATE",
              payload: {
                name: "Deepak Mansharamani",
                image: "./images/logoNew.jpg",
              },
            });
          };   
   
    return ( 
        <AppContext.Provider value={{ ...state, updateHomePage,udpateAboutPage }}>
        {children}
        </AppContext.Provider>
    );
}
 // gloabal custom hook
const useGlobalContext = () => {
    return useContext(AppContext);
  };
export {useGlobalContext, AppProvider, AppContext};