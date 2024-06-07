/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

export function useAsyncInitialize<T>(
    func:() => Promise<T>,
     deps: any[] = []){
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [state, setState] = useState<T | undefined>();
        useEffect(()=>{
            (async ()=> {
                setState(await func());
            })();
        }, deps);
        
        return state;
}