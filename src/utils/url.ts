export const vue = () : string | undefined => {
    const vue = location.href.split('#');
    if (vue.length > 1) return vue[1].split('?')[0];
    return undefined;
};

export const args = () : Map<string, string> | undefined => {
    const uri = location.href.split('?', 2);
    if (uri.length === 2)
    {
        const args = new Map<string, string>();
        let prop: string | string[] = "";
        for (prop of uri[1].split('&'))
        {
            prop = prop.split('=');
            if (prop.length == 2)
                args.set(prop[0], prop[1]);
        }
        return args;
    }
    return undefined;
};

export const modifier = async (vue: string | undefined = undefined, args: Object | undefined = undefined) => {
    let url = location.href.split('#')[0];
    if (!!vue) url += '#' + vue;
    if (!!args)
    {
        let props: string[] = [];
        for (const prop in args)
            props.push(encodeURI(prop + '=' + args[prop as keyof typeof args]));
        url += '?' + props.join('&');  
    }
    history.replaceState({}, "",  url);
};