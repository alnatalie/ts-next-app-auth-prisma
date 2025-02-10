import { $groups } from "@/store/api";

export default function Page(){
    const {data, loading, error} = useStore($groups)
    return<>

    </>
}

export  function ServerSession(){
    const {data, loading, } = useStore($myaccount)
    if(data) return <div>{JSON.stringify(data)}</div>;
    if(loading) return <>Loading...</>;
    if(error) return <>Error!={String(error)}</>
return <>

</>
}