import { createContext, useState } from "react";
import UserList from "./Tables/UserList";
import UserForm from "./Forms/UserForm";

export const listContext = createContext();

export default function UserContext(){
    const [list,setList]=useState([])
    return(
    <listContext.Provider value={{list,setList}}>
        <UserForm/>
        <UserList/>
    </listContext.Provider>
    )
}