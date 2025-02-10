'use client'

import { useSession } from "next-auth/react";
import {useStore} from '@nanostores/react';
import { $myaccount } from "@/store/api";
import { error } from "console";

export function MyAccount(){
    const 
        session = useSession();
        console.log('MyAccount session=', session)
    return <>
        <h1>My account</h1>
        client session ={JSON.stringify(session)}
        <hr />
        server session = <ServerSession/>
    
    </>
    
}

export  function ServerSession(){
    const {data, loading, error } = useStore($myaccount)
    if(data) return <div>{JSON.stringify(data)}</div>;
    if(loading) return <>Loading...</>;
    if(error) return <>Error!={String(error)}</>
return <>

</>
}